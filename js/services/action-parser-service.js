var ActionParserService = (function(){
  
  var defaults = {
    actions : null //required
  };
  
  function create(options){
    var actionParserService = {};
    actionParserService.options = Object.assign({}, defaults, options);
    bind(actionParserService);
    return actionParserService;
  }
  
  function bind(actionParserService){
    actionParserService.parse = parse.bind(actionParserService);
    actionParserService.parseAsAction = parseAsAction.bind(actionParserService);
  }

  function parse(script){
    var lines = script.split("\n");
    var actions = [];
    
    lines.forEach((line) => {
      actions.push(this.parseAsAction(line));
    });
    
    return actions;
  }
  function parseAsAction(line){
    var parts = line.split(" ");
    var action = this.options.actions.actionMap[parts[0]];
    var args = parts.slice(1).map(x => x.trim());
    return {
      action : action,
      args : args
    };
  }
  
  return {
    create : create
  };
  
})();