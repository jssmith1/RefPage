import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    useLocation,
} from "react-router-dom";
import ProcessingErrors from './components/errors/-ProcessingErrors'
import "./App.css";
import HomeButton from './assets/home.svg';

export default function App() {
    return (
        <Router>
            <HomePageContent />
        </Router>
    );
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function HomePageContent() {
    const query = useQuery();
    const embed = query.get("embed");

    return (
        <div>
            {!embed && <div className="Home">
                <Link to="/">
                    <img src={HomeButton} alt="home-button" width="30" height="30"></img>
                </Link>
            </div>}
            <Route exact path="/">
                <div className="AppContent">
                    <div className="Indent-1">
                        <Link to={`/extraneousclosingcurlybrace`}>Extraneous Closing Curly Brace</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/incorrectdimensionexpression1">Incorrect Dimension Expression 1</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/incorrectdimensionexpression2">Incorrect Dimension Expression 2</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/incorrectdimensionexpression3">Incorrect Dimension Expression 3</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/incorrectvariabledeclaration">Incorrect Variable Declaration</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/incorrectmethoddeclaration">Incorrect Method Declaration</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/methodcallonwrongtype">Method Call On Wrong Type</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/methodnotfound">Method Not Found</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/parametermismatch">Parameter Mismatch</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/returnmissing">Return Statement Missing</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/syntaxerrorvariabledeclarators">Syntax Error on "VariableDeclarators"</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/typemismatch">Type Mismatch</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/typenotfound">Type Not Found</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/unexpectedtoken">Unexpected Token</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/nonstaticfromstatic">Use Of Non-Static From Static Context</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/variablenotfound">Variable Not Found </Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/variablenotinit">Variable Not Initialized</Link>
                    </div>
                </div>
            </Route>

            <Route exact path="/extraneousclosingcurlybrace">
                <ProcessingErrors.ExtraneousClosingCurlyBrace
                    original={query.get("original") || encodeURI("void doSomething() { ... }")}
                    fixed={query.get("fixed") || encodeURI("void doSomething() { ... }}")}
                    embed={embed}
                />
            </Route>

            <Route exact path="/incorrectdimensionexpression1">
                <ProcessingErrors.IncorrectDimensionExpression1
                    typeName={query.get("typename") || "int"}
                    arrName={query.get("arrname") || "arr"}
                    embed={embed}
                />
            </Route>

            <Route exact path="/incorrectdimensionexpression2">
                <ProcessingErrors.IncorrectDimensionExpression2
                    typeName={query.get("typename") || "int"}
                    arrName={query.get("arrname") || "arr"}
                    embed={embed}
                />
            </Route>

            <Route exact path="/incorrectdimensionexpression3">
                <ProcessingErrors.IncorrectDimensionExpression3
                    typeName={query.get("typename") || "int"}
                    arrName={query.get("arrname") || "arr"}
                    embed={embed}
                />
            </Route>

            <Route exact path="/incorrectvariabledeclaration">
                <ProcessingErrors.IncorrectVariableDeclaration
                    typeName={query.get("typename") || "int"}
                    foundName={query.get("foundname") || "thing"}
                    embed={embed}
                />
            </Route>

            <Route exact path="/incorrectmethoddeclaration">
                <ProcessingErrors.IncorrectMethodDeclaration
                    methodName={query.get("methodname") || "size"}
                    embed={embed}
                />
            </Route>

            <Route exact path="/methodcallonwrongtype">
                <ProcessingErrors.MethodCallOnWrongType
                    methodName={query.get("methodname") || "doSomething"}
                    varName={query.get("varname") || "thing"}
                    typeName={query.get("typename") || "int"}
                    embed={embed}
                />
            </Route>

            <Route exact path="/methodnotfound">
                <ProcessingErrors.MethodNotFound
                    methodName={query.get("methodname") || "doSomething"}
                    correctMethodName={query.get("correctmethodname") || "correctName"}
                    typeName={query.get("typename") || "int"}
                    providedParams={query.get("providedparams") || ""}
                    providedTypes={query.get("providedtypes") || ""}
                    embed={embed}
                />
            </Route>

            <Route exact path="/nonstaticfromstatic">
                <ProcessingErrors.NonStaticFromStatic
                    methodName={query.get("methodname") || "doSomething"}
                    staticMethodName={query.get("staticmethodname") || "mainMethod"}
                    embed={embed}
                />
            </Route>

            <Route exact path="/parametermismatch">
                <ProcessingErrors.ParameterMismatch
                    className={query.get("classname") || "sketch_200721a"}
                    methodName={query.get("methodname") || "doSomething"}
                    methodTypeName={query.get("methodtypename") || "void"}
                    typeOneName={query.get("typeonename") || "int"}
                    typeTwoName={query.get("typetwoname") || "String"}
                    varName={query.get("varName") || "returnedValue"}
                    embed={embed}
                />
            </Route>

            <Route exact path="/returnmissing">
                <ProcessingErrors.ReturnMissing
                    methodName={query.get("methodname") || "doSomething"}
                    typeName={query.get("typename") || "int"}
                    embed={embed}
                />
            </Route>

            <Route exact path="/syntaxerrorvariabledeclarators">
                <ProcessingErrors.SyntaxErrorVariableDeclarators
                    methodOneName={query.get("methodonename") || "System.out.println"}
                    methodTwoName={query.get("methodtwoname") || "doSomething"}
                    typeName={query.get("typename") || "int"}
                    embed={embed}
                />
            </Route>

            <Route exact path="/typenotfound">
                <ProcessingErrors.TypeNotFound
                    className={query.get("classname") || "Thing"}
                    correctClassName={query.get("correctclassname") || "CorrectName"}
                    varName={query.get("varname") || "thing"}
                    embed={embed}
                />
            </Route>

            <Route exact path="/typemismatch">
                <ProcessingErrors.TypeMismatch
                    varName={query.get("varname") || "thing"}
                    typeOneName={query.get("typeonename") || "float"}
                    typeTwoName={query.get("typetwoname") || "int"}
                    embed={embed}
                />
            </Route>

            <Route exact path="/unexpectedtoken">
                <ProcessingErrors.UnexpectedToken
                    typeName={query.get("typename") || "int"}
                    embed={embed}
                />
            </Route>

            <Route exact path="/variablenotfound">
                <ProcessingErrors.VariableNotFound
                    varName={query.get("varname") || "thing"}
                    className={query.get("classname") || "Thing"}
                    embed={embed}
                />
            </Route>

            <Route exact path="/variablenotinit">
                <ProcessingErrors.VariableNotInit
                    varName={query.get("varname") || "thing"}
                    embed={embed}
                />
            </Route>
        </div>
    );
}
