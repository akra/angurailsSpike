 'use strict';
 angular.module('angurailsApp')

 .config(['$provide',
   function ($provide) {
     $provide.decorator('taOptions', ['taRegisterTool', '$delegate', '$timeout',
       function (taRegisterTool, taOptions, $timeout) {

         taRegisterTool('imageGallery', {
           iconclass: 'fa fa-tree',
           action: function ($deferred, restoreSelection) {
            console.log("CLICK");
             var editor;
             editor = this.$editor();

             var selection = rangy.saveSelection(window);
             $timeout(function () {
               console.log(selection)
               rangy.restoreSelection(selection);
               editor.wrapSelection('insertImage', 'http://www.brincandoporaqui.com.br/files/images/Maracana.thumbnail.jpg');
             }, 2000)

           }
         });

         taOptions.toolbar[1].push('imageGallery');

         return taOptions;
       }
     ]);
   }
 ]);

 // https://github.com/fraywing/textAngular/issues/212
