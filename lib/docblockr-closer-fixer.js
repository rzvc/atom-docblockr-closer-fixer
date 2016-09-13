"use strict";

var DocblockrCloserFixer = function()
{
	var self = this;

	this.activate = function()
	{
		return atom.packages.activatePackage('docblockr').then(function(docblockrPkg)
		{
			var org_get_parser = docblockrPkg.mainModule.Docblockr.get_parser;
			
			docblockrPkg.mainModule.Docblockr.get_parser = function(editor)
			{
				var result = org_get_parser(editor);
				
				if (result.settings.commentCloser == ' */')
					result.settings.commentCloser = '*/';
				
				return result;
			}
		});
	}
}

module.exports = new DocblockrCloserFixer();