 'use strict';
 angular.module('angurailsApp')

 .config(['$provide',
   function ($provide) {
     $provide.decorator('taOptions', ['taRegisterTool', '$delegate',
       function (taRegisterTool, taOptions) {
         taOptions.toolbar = [
           ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
           ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
           ['justifyLeft', 'justifyCenter', 'justifyRight'],
           ['html', 'insertImage', 'insertLink']
         ];

         taRegisterTool('colourRed', {
           iconclass: 'fa fa-square yellow',
           action: function () {
             this.$editor().wrapSelection('backcolor', 'yellow');
           }
         });

         taOptions.toolbar[1].push('colourRed');

         return taOptions;
       }
     ]);
   }
 ]);
