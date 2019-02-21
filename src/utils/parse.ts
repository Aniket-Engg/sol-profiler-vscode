export var parsePartData = (contract:any, part:any) => {
    let contractName = contract.name;
    if(contract.type == 'LibraryStatement')
        contractName = contractName + ' -lib';
    
    let funcName = null;
    if(part.type == 'ConstructorDeclaration')
        funcName = 'constructor';
        else if(part.type == 'FunctionDeclaration'){
                funcName = part.name || '';
        }

    let params:any = [];
    if(part.params) {
        part.params.forEach(function(param: any) {
            params.push(param.literal.literal);
        });
    funcName += '(' + params.join(',') + ')';
    }
    else {
        //Check fallback
        if(!funcName && !part.name && !part.params && !part.returnParams)
            funcName = '()' + ' -fallback';
        else
            funcName += '()';
    }

    // Default is public
    let visibility = "public";
    let  viewOrPure = '';
    let  returns:any    = [];
    let  custom :any    = [];

    if(part.modifiers) {
        part.modifiers.forEach(function(mod : any) {
            switch(mod.name) {
                case "public":
                    break;
                case "private":
                    visibility = "private";
                    break;
                case "internal":
                    visibility = "internal";
                    break;
                case "external":
                    visibility = "external";
                    break;
                case "view":
                    viewOrPure = "view";
                    break;
                case "pure":
                    viewOrPure = "pure";
                    break;
                default:
                    custom.push(mod.name);
            }
        });
    }
    if(part.returnParams) {
        part.returnParams.params.forEach(function(param: any) {
            returns.push(param.literal.literal);
        });
    }

    return {
        contractName:   contractName,
        functionName:   funcName,
        visibility  :   visibility,
        viewOrPure  :   viewOrPure,
        returns     :   returns,
        modifiers   :   custom
    };
}