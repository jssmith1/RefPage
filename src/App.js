import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    useLocation,
} from "react-router-dom";
import "./App.css";
import HomeButton from "./assets/home.svg";
import ReturnMissing from "./components/ReturnMissing";
import TypeNotFound from "./components/TypeNotFound";
import VariableNotFound from "./components/VariableNotFound";
import TypeMismatch from "./components/TypeMismatch";
import VariableNotInit from "./components/VariableNotInit";
import ParameterMismatch from "./components/ParameterMismatch";
import MethodCallOnWrongType from "./components/MethodCallOnWrongType";
import MethodNotFound from "./components/MethodNotFound";
import IncorrectMethodDeclaration from "./components/IncorrectMethodDeclaration";
import IncorrectVariableDeclaration from "./components/IncorrectVariableDeclaration";
import IncorrectDimensionExpression1 from "./components/IncorrectDimensionExpression1";
import IncorrectDimensionExpression2 from "./components/IncorrectDimensionExpression2";
import IncorrectDimensionExpression3 from "./components/IncorrectDimensionExpression3";
import SyntaxErrorVariableDeclarators from "./components/SyntaxErrorVariableDeclarators";
import UnexpectedToken from "./components/UnexpectedToken";
import ExtraneousClosingCurlyBrace from "./components/ExtraneousClosingCurlyBrace";
import NonStaticFromStatic from "./components/NonStaticFromStatic";

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
    let query = useQuery();

    return (
        <div>
            <div className="Home">
                <Link to="/">
                    <img src={HomeButton} alt="home-button" width="30" height="30"></img>
                </Link>
            </div>
            <Route exact path="/">
                <div className="AppContent">
                    <div className="Indent-1">
                        <Link to="/extraneousclosingcurlybrace?classname=Thing&methodname=doSomething">Extraneous Closing Curly Brace</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/incorrectdimensionexpression1?typename=int">Incorrect Dimension Expression 1</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/incorrectdimensionexpression2?typename=int">Incorrect Dimension Expression 2</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/incorrectdimensionexpression3?typename=int">Incorrect Dimension Expression 3</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/incorrectvariabledeclaration?typename=int&foundname=thing">Incorrect Variable Declaration</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/incorrectmethoddeclaration?setupmethodname=size&drawmethodname=rect">Incorrect Method Declaration</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/methodcallonwrongtype?classname=Thing&methodname=doSomething&typeonename=primitive&typetwoname=int">Method Call On Wrong Type</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/methodnotfound?classname=Thing&methodname=doSomething&correctmethodname=correctName&typename=int&varname=thing">Method Not Found</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/parametermismatch?classname=sketch_200721a&methodname=doSomething&varname=returnedValue&methodtypename=int&typeonename=int&typetwoname=String">Parameter Mismatch</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/returnmissing?methodname=doSomething&typename=int">Return Statement Missing</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/syntaxerrorvariabledeclarators?methodonename=System.out.println&methodtwoname=doSomething&typename=int">Syntax Error on "VariableDeclarators"</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/typemismatch?typeonename=float&typetwoname=int&varname=thing">Type Mismatch</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/typenotfound?classname=Thing&correctclassname=CorrectName&varname=thing">Type Not Found</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/unexpectedtoken?typename=int">Unexpected Token</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/nonstaticfromstatic?methodname=doSomething&staticmethodname=mainMethod">Use Of Non-Static From Static Context</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/variablenotfound?classname=Thing&varname=thing">Variable Not Found </Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/variablenotinit?varname=thing">Variable Not Initialized</Link>
                    </div>
                </div>
            </Route>

            <Route exact path="/extraneousclosingcurlybrace">
                <ExtraneousClosingCurlyBrace
                    className={query.get("classname") || "Thing"}
                    methodName={query.get("methodname") || "doSomething"}
                />
            </Route>

            <Route exact path="/incorrectdimensionexpression1">
                <IncorrectDimensionExpression1
                    typeName={query.get("typename") || "int"}
                />
            </Route>

            <Route exact path="/incorrectdimensionexpression2">
                <IncorrectDimensionExpression2
                    typeName={query.get("typename") || "int"}
                />
            </Route>

            <Route exact path="/incorrectdimensionexpression3">
                <IncorrectDimensionExpression3
                    typeName={query.get("typename") || "int"}
                />
            </Route>

            <Route exact path="/incorrectvariabledeclaration">
                <IncorrectVariableDeclaration
                    typeName={query.get("typename") || "int"}
                    foundName={query.get("foundname") || "thing"}
                />
            </Route>

            <Route exact path="/incorrectmethoddeclaration">
                <IncorrectMethodDeclaration
                    setupMethodName={query.get("setupmethodname") || "size"}
                    drawMethodName={query.get("drawmethodname") || "rect"}
                />
            </Route>

            <Route exact path="/methodcallonwrongtype">
                <MethodCallOnWrongType
                    methodName={query.get("methodname") || "doSomething"}
                    className={query.get("classname") || "Thing"}
                    varName={query.get("varname") || "thing"}
                    typeOneName={query.get("typeonename") || "primitive"}
                    typeTwoName={query.get("typetwoname") || "int"}
                />
            </Route>

            <Route exact path="/methodnotfound">
                <MethodNotFound
                    methodName={query.get("methodname") || "doSomething"}
                    correctMethodName={query.get("correctmethodname") || "correctName"}
                    className={query.get("classname") || "Thing"}
                    varName={query.get("varname") || "thing"}
                    typeName={query.get("typename") || "int"}
                />
            </Route>

            <Route exact path="/nonstaticfromstatic">
                <NonStaticFromStatic
                    methodName={query.get("methodname") || "doSomething"}
                    staticMethodName={query.get("staticmethodname") || "mainMethod"}
                />
            </Route>

            <Route exact path="/parametermismatch">
                <ParameterMismatch
                    className={query.get("classname") || "sketch_200721a"}
                    methodName={query.get("methodname") || "doSomething"}
                    methodTypeName={query.get("methodtypename") || "void"}
                    typeOneName={query.get("typeonename") || "int"}
                    typeTwoName={query.get("typetwoname") || "String"}
                    varName={query.get("varName") || "returnedValue"}
                />
            </Route>

            <Route exact path="/returnmissing">
                <ReturnMissing
                    methodName={query.get("methodname") || "doSomething"}
                    typeName={query.get("typename") || "int"}
                />
            </Route>

            <Route exact path="/syntaxerrorvariabledeclarators">
                <SyntaxErrorVariableDeclarators
                    methodOneName={query.get("methodonename") || "System.out.println"}
                    methodTwoName={query.get("methodtwoname") || "doSomething"}
                    typeName={query.get("typename") || "int"}
                />
            </Route>

            <Route exact path="/typenotfound">
                <TypeNotFound
                    className={query.get("classname") || "Thing"}
                    correctClassName={query.get("correctclassname") || "CorrectName"}
                    varName={query.get("varname") || "thing"}
                />
            </Route>

            <Route exact path="/typemismatch">
                <TypeMismatch
                    varName={query.get("varname") || "thing"}
                    typeOneName={query.get("typeonename") || "float"}
                    typeTwoName={query.get("typetwoname") || "int"}
                />
            </Route>

            <Route exact path="/unexpectedtoken">
                <UnexpectedToken
                    typeName={query.get("typename") || "int"}
                />
            </Route>

            <Route exact path="/variablenotfound">
                <VariableNotFound
                    varName={query.get("varname") || "thing"}
                    className={query.get("classname") || "Thing"}
                />
            </Route>

            <Route exact path="/variablenotinit">
                <VariableNotInit
                    varName={query.get("varname") || "thing"}
                />
            </Route>
        </div>
    );
}
