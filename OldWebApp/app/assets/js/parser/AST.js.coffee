# createSourceLocation = (source, firstToken, lastToken) ->
#   new SourceLocation(source, new Position(firstToken.first_line, firstToken.first_column), new Position(lastToken.last_line, lastToken.last_column))
# parseRegularExpressionLiteral = (literal) ->
#   last = literal.lastIndexOf("/")
#   body = literal.substring(1, last)
#   flags = literal.substring(last + 1)
#   new RegExp(body, flags)
# parseNumericLiteral = (literal) ->
#   if literal.charAt(0) is "0"
#     if literal.charAt(1).toLowerCase() is "x"
#       parseInt literal, 16
#     else
#       parseInt literal, 8
#   else
#     Number literal
# 
# # Begin Parser Customization Methods 
# _originalParseMethod = parser.parse
# parser.parse = (source, args) ->
#   parser.wasNewLine = false
#   parser.newLine = false
#   parser.restricted = false
#   _originalParseMethod.call this, source
# 
# parser.parseError = (str, hash) ->
#   throw new SyntaxError(str)  unless (hash.expected and hash.expected.indexOf("';'") >= 0) and (hash.token is "}" or hash.token is "EOF" or hash.token is "BR++" or hash.token is "BR--" or parser.newLine or parser.wasNewLine)
# 
# # End Parser Customization Methods 
# 
# # Begin AST Node Constructors 
# class AST
#   
# class.AST.ProgramNode = (body, loc) ->
#   @type = "Program"
#   @body = body
#   @loc = loc
# class.AST.EmptyStatementNode = (loc) ->
#   @type = "EmptyStatement"
#   @loc = loc
# class.AST.BlockStatementNode = (body, loc) ->
#   @type = "BlockStatement"
#   @body = body
#   @loc = loc
# class.AST.ExpressionStatementNode = (expression, loc) ->
#   @type = "ExpressionStatement"
#   @expression = expression
#   @loc = loc
# class.AST.IfStatementNode = (test, consequent, alternate, loc) ->
#   @type = "IfStatement"
#   @test = test
#   @consequent = consequent
#   @alternate = alternate
#   @loc = loc
# class.AST.LabeledStatementNode = (label, body, loc) ->
#   @type = "LabeledStatement"
#   @label = label
#   @body = body
#   @loc = loc
# class.AST.BreakStatementNode = (label, loc) ->
#   @type = "BreakStatement"
#   @label = label
#   @loc = loc
# class.AST.ContinueStatementNode = (label, loc) ->
#   @type = "ContinueStatement"
#   @label = label
#   @loc = loc
# class.AST.WithStatementNode = (object, body, loc) ->
#   @type = "WithStatement"
#   @object = object
#   @body = body
#   @loc = loc
# class.AST.SwitchStatementNode = (discriminant, cases, loc) ->
#   @type = "SwitchStatement"
#   @discriminant = discriminant
#   @cases = cases
#   @loc = loc
# class.AST.ReturnStatementNode = (argument, loc) ->
#   @type = "ReturnStatement"
#   @argument = argument
#   @loc = loc
# class.AST.ThrowStatementNode = (argument, loc) ->
#   @type = "ThrowStatement"
#   @argument = argument
#   @loc = loc
# class.AST.TryStatementNode = (block, handlers, finalizer, loc) ->
#   @type = "TryStatement"
#   @block = block
#   @handlers = handlers # Multiple catch clauses are SpiderMonkey specific
#   @finalizer = finalizer
#   @loc = loc
# WhileStatementNode = (test, body, loc) ->
#   @type = "WhileStatement"
#   @test = test
#   @body = body
#   @loc = loc
# class.AST.DoWhileStatementNode = (body, test, loc) ->
#   @type = "DoWhileStatement"
#   @body = body
#   @test = test
#   @loc = loc
# class.AST.ForStatementNode = (init, test, update, body, loc) ->
#   @type = "ForStatement"
#   @init = init
#   @test = test
#   @update = update
#   @body = body
#   @loc = loc
# class.AST.ForInStatementNode = (left, right, body, loc) ->
#   @type = "ForInStatement"
#   @left = left
#   @right = right
#   @body = body
#   @loc = loc
# class.AST.DebugggerStatementNode = (loc) ->
#   @type = "DebuggerStatement"
#   @loc = loc
# class.AST.FunctionDeclarationNode = (id, params, body, generator, expression, loc) ->
#   @type = "FunctionDeclaration"
#   @id = id
#   @params = params
#   @body = body
#   @generator = generator
#   @expression = expression
#   @loc = loc
# class.AST.VariableDeclarationNode = (declarations, kind, loc) ->
#   @type = "VariableDeclaration"
#   @declarations = declarations
#   @kind = kind
#   @loc = loc
# class.AST.VariableDeclaratorNode = (id, init, loc) ->
#   @type = "VariableDeclarator"
#   @id = id
#   @init = init
#   @loc = loc
# class.AST.ThisExpressionNode = (loc) ->
#   @type = "ThisExpression"
#   @loc = loc
# class.AST.ArrayExpressionNode = (elements, loc) ->
#   @type = "ArrayExpression"
#   @elements = elements
#   @loc = loc
# class.AST.ObjectExpressionNode = (properties, loc) ->
#   @type = "ObjectExpression"
#   @properties = properties
#   @loc = loc
# class.AST.FunctionExpressionNode = (id, params, body, generator, expression, loc) ->
#   @type = "FunctionExpression"
#   @id = id
#   @params = params
#   @body = body
#   @generator = generator
#   @expression = expression
#   @loc = loc
# class.AST.SequenceExpressionNode = (expressions, loc) ->
#   @type = "SequenceExpression"
#   @expressions = expressions
#   @loc = loc
# class.AST.UnaryExpressionNode = (operator, prefix, argument, loc) ->
#   @type = "UnaryExpression"
#   @operator = operator
#   @prefix = prefix
#   @argument = argument
#   @loc = loc
# class.AST.BinaryExpressionNode = (operator, left, right, loc) ->
#   @type = "BinaryExpression"
#   @operator = operator
#   @left = left
#   @right = right
#   @loc = loc
# class.AST.AssignmentExpressionNode = (operator, left, right, loc) ->
#   @type = "AssignmentExpression"
#   @operator = operator
#   @left = left
#   @right = right
#   @loc = loc
# class.AST.UpdateExpressionNode = (operator, argument, prefix, loc) ->
#   @type = "UpdateExpression"
#   @operator = operator
#   @argument = argument
#   @prefix = prefix
#   @loc = loc
# class.AST.LogicalExpressionNode = (operator, left, right, loc) ->
#   @type = "LogicalExpression"
#   @operator = operator
#   @left = left
#   @right = right
#   @loc = loc
# class.AST.ConditionalExpressionNode = (test, consequent, alternate, loc) ->
#   @type = "ConditionalExpression"
#   @test = test
#   @consequent = consequent
#   @alternate = alternate
#   @loc = loc
# class.AST.NewExpressionNode = (callee, args, loc) ->
#   @type = "NewExpression"
#   @callee = callee
#   @arguments = args
#   @loc = loc
# class.AST.CallExpressionNode = (callee, args, loc) ->
#   @type = "CallExpression"
#   @callee = callee
#   @arguments = args
#   @loc = loc
# class.AST.MemberExpressionNode = (object, property, computed, loc) ->
#   @type = "MemberExpression"
#   @object = object
#   @property = property
#   @computed = computed
#   @loc = loc
# class.AST.SwitchCaseNode = (test, consequent, loc) ->
#   @type = "SwitchCase"
#   @test = test
#   @consequent = consequent
#   @loc = loc
# class.AST.CatchClauseNode = (param, body, loc) ->
#   @type = "CatchClause"
#   @param = param
#   @guard = null # Firefox specific
#   @body = body
#   @loc = loc
# class.AST.IdentifierNode = (name, loc) ->
#   @type = "Identifier"
#   @name = name
#   @loc = loc
# class.AST.LiteralNode = (value, loc) ->
#   @type = "Literal"
#   @value = value
#   @loc = loc
# class.AST.SourceLocation = (source, start, end) ->
#   @source = source
#   @start = start
#   @end = end
# class.AST.Position = (line, column) ->
#   @line = line
#   @column = column
# 
# # End AST Node Constructors 
# 
# # Expose the AST Node Constructors 
# parser.ast = {}
# parser.ast.ProgramNode = ProgramNode
# parser.ast.EmptyStatementNode = EmptyStatementNode
# parser.ast.BlockStatementNode = BlockStatementNode
# parser.ast.ExpressionStatementNode = ExpressionStatementNode
# parser.ast.IfStatementNode = IfStatementNode
# parser.ast.LabeledStatementNode = LabeledStatementNode
# parser.ast.BreakStatementNode = BreakStatementNode
# parser.ast.ContinueStatementNode = ContinueStatementNode
# parser.ast.WithStatementNode = WithStatementNode
# parser.ast.SwitchStatementNode = SwitchStatementNode
# parser.ast.ReturnStatementNode = ReturnStatementNode
# parser.ast.ThrowStatementNode = ThrowStatementNode
# parser.ast.TryStatementNode = TryStatementNode
# parser.ast.WhileStatementNode = WhileStatementNode
# parser.ast.DoWhileStatementNode = DoWhileStatementNode
# parser.ast.ForStatementNode = ForStatementNode
# parser.ast.ForInStatementNode = ForInStatementNode
# parser.ast.DebugggerStatementNode = DebugggerStatementNode
# parser.ast.FunctionDeclarationNode = FunctionDeclarationNode
# parser.ast.VariableDeclarationNode = VariableDeclarationNode
# parser.ast.VariableDeclaratorNode = VariableDeclaratorNode
# parser.ast.ThisExpressionNode = ThisExpressionNode
# parser.ast.ArrayExpressionNode = ArrayExpressionNode
# parser.ast.ObjectExpressionNode = ObjectExpressionNode
# parser.ast.FunctionExpressionNode = FunctionExpressionNode
# parser.ast.SequenceExpressionNode = SequenceExpressionNode
# parser.ast.UnaryExpressionNode = UnaryExpressionNode
# parser.ast.BinaryExpressionNode = BinaryExpressionNode
# parser.ast.AssignmentExpressionNode = AssignmentExpressionNode
# parser.ast.UpdateExpressionNode = UpdateExpressionNode
# parser.ast.LogicalExpressionNode = LogicalExpressionNode
# parser.ast.ConditionalExpressionNode = ConditionalExpressionNode
# parser.ast.NewExpressionNode = NewExpressionNode
# parser.ast.CallExpressionNode = CallExpressionNode
# parser.ast.MemberExpressionNode = MemberExpressionNode
# parser.ast.SwitchCaseNode = SwitchCaseNode
# parser.ast.CatchClauseNode = CatchClauseNode
# parser.ast.IdentifierNode = IdentifierNode
# parser.ast.LiteralNode = LiteralNode