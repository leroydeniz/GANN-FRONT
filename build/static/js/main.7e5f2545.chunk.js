(this.webpackJsonpgenn=this.webpackJsonpgenn||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(45),r=n(46),c=n(0),i=n.n(c),s=n(9),o=n(76),d=n(77),l=n(78),j=n(13),m=n(1),u=Object(s.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(m.jsx)(d.a,Object(r.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),b=Object(s.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(l.a);function p(){var e=i.a.useState(null),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)(o.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){r(e.currentTarget)},children:"Condiciones del CSV"}),Object(m.jsxs)(u,{id:"customized-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){r(null)},children:[Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"Archivo en formato CSV"})}),Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"Separado por coma -> ,"})}),Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"M\xednimo 6 registros"})}),Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"M\xe1ximo 100k registros"})}),Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"Tama\xf1o m\xe1ximo 20MB"})}),Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"La \xfaltima columna es variable de clase"})})]})]})}},101:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return g}));var a=n(15),r=n(16),c=n(18),i=n(17),s=n(0),o=n.n(s),d=(n(70),n(42)),l=n.n(d),j=n(43),m=n.n(j),u=n(33),b=n.n(u),p=n(44),h=n(102),x=n(1);function O(t){l()({method:"post",url:"".concat("https://miescher.csic.edu.uy","/test"),data:t,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Methods":"OPTIONS,POST,GET","Content-Type":"multipart/form-data"}}).then((function(t){if("Error"in t.data)document.getElementById("div-loading").classList.remove("showing"),document.getElementById("div-loading").classList.add("not-showing"),document.getElementById("div-error").classList.remove("not-showing"),document.getElementById("div-error").classList.add("showing"),document.getElementById("p-error").innerHTML=t.data.Error;else{document.getElementById("div-loading").classList.remove("showing"),document.getElementById("div-loading").classList.add("not-showing"),document.getElementById("div-metricas").classList.remove("not-showing"),document.getElementById("div-metricas").classList.add("showing"),console.log(t),document.getElementById("total_casos").innerHTML=t.data.trues.length,document.getElementById("accuracy").innerHTML=t.data.accuracy.toFixed(2),document.getElementById("precision").innerHTML=t.data["macro avg"]["f1-score"].toFixed(2),document.getElementById("recall").innerHTML=t.data["macro avg"].recall.toFixed(2),document.getElementById("fscore").innerHTML=t.data["macro avg"].precision.toFixed(2),document.getElementById("error_perc").innerHTML=t.data["error score"].toFixed(2);var n=m.a.encode(t.data.file);n=b.a.encode(e.from(t.data.file),"iso-8859-1");var a=new Blob([n],{type:"text/csv"}),r=window.URL.createObjectURL(a),c=document.createElement("a");c.href=r,c.setAttribute("download","clasificado.csv"),c.click()}})).catch((function(e){console.log(e)}))}var g=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).termsRef=o.a.createRef(),r.readFile=function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsBinaryString(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return n(e)}}))},r.onTrainUpload=function(e){try{r.setState({train:e.target.files[0]});var t=e.target.files[0].name.split(".").pop();r.setState({extTrain:t})}catch(n){console.error("Fichero train eliminado.")}},r.onTestUpload=function(e){try{r.setState({test:e.target.files[0]});var t=e.target.files[0].name.split(".").pop();r.setState({extTest:t})}catch(n){console.error("Fichero test eliminado.")}},r.updateTerms=function(e){r.setState({terms:!document.getElementById("terms").checked}),document.getElementById("enviar").disabled=!document.getElementById("terms").checked},r.onFormSubmit=function(e){e.preventDefault(),document.getElementById("div-entrenar").classList.remove("showing"),document.getElementById("div-entrenar").classList.add("not-showing"),document.getElementById("div-loading").classList.remove("not-showing"),document.getElementById("div-loading").classList.add("showing"),r.setState({terms:r.termsRef.current.value});var t=new FormData;if(t.append("servicio",r.state.service),t.append("test",r.state.test,"test"),t.append("train_extension",r.state.extTrain),t.append("test_extension",r.state.extTest),!0===document.getElementById("terms").checked?t.append("terms","Acepto"):t.append("terms","No acepto"),"onnx"===r.state.extTrain)r.readFile(r.state.train).then((function(e){n=b.a.decode(e,"ISO-8859-1"),n=new File([n],{type:"text/plain"}),t.append("train",n,"train"),O(t)})).catch((function(e){console.log(e)}));else{var n=r.state.train;t.append("train",n),O(t)}},r.state={service:"test",terms:!0,train:null,test:null,extTrain:null,extTest:null},r}return Object(r.a)(n,[{key:"render",value:function(){return Object(x.jsx)(o.a.Fragment,{children:Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("b",{children:"Evaluar."})}),Object(x.jsxs)("div",{id:"div-entrenar",className:"showing",children:[Object(x.jsx)("div",{className:"form-group",children:Object(x.jsxs)("p",{children:[Object(x.jsx)("b",{children:"Resultado:"})," datos de evaluaci\xf3n del clasificador."]})}),Object(x.jsx)(h.a,{}),Object(x.jsxs)("form",{onSubmit:this.onFormSubmit,id:"formServicios",children:[Object(x.jsx)("div",{className:"input-group mb-3",children:Object(x.jsx)("p",{children:"Definici\xf3n de la red neuronal o conjunto de datos de entrenamiento:"})}),Object(x.jsx)("div",{className:"input-group mb-3",children:Object(x.jsx)("input",{className:"form-control",type:"file",id:"train",name:"train",accept:".csv,.onnx",placeholder:"Dataset de train","aria-label":"Dataset de train","aria-describedby":"basic-addon1",onChange:this.onTrainUpload,ref:this.trainRef,required:!0})}),Object(x.jsx)("div",{className:"input-group mb-3",children:Object(x.jsx)("p",{children:"Conjunto de datos clasificados:"})}),Object(x.jsx)("div",{className:"input-group mb-3",children:Object(x.jsx)("input",{className:"form-control",type:"file",id:"dataset2",name:"dataset2",accept:".csv",placeholder:"Dataset de test","aria-label":"Dataset de test","aria-describedby":"basic-addon1",onChange:this.onTestUpload,ref:this.dataset2Ref,required:!0})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("p",{children:Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",name:"terms",id:"terms",value:"Acepto",ref:this.termsRef,defaultChecked:!1,onChange:this.updateTerms}),"Entiendo que el uso de esta aplicaci\xf3n es experimental."]})})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{id:"enviar",type:"submit",disabled:!0,className:"btn btn-info",value:"Evaluar"})})]})]}),Object(x.jsxs)("div",{id:"div-loading",className:"not-showing",children:[Object(x.jsx)("br",{}),Object(x.jsxs)("h2",{children:["La aplicaci\xf3n est\xe1 procesando.",Object(x.jsx)("br",{}),"Esto puede demorar un rato..."]}),Object(x.jsx)("img",{src:p.a,width:"600px;",alt:"loading",id:"img-loading"})]}),Object(x.jsxs)("div",{id:"div-metricas",className:"not-showing",children:[Object(x.jsx)("br",{}),Object(x.jsx)("h2",{children:"M\xe9tricas"}),Object(x.jsxs)("p",{children:[Object(x.jsxs)("li",{children:["  Total casos: ",Object(x.jsx)("span",{id:"total_casos"})]},"MET01"),Object(x.jsxs)("li",{children:["  Accuracy: ",Object(x.jsx)("span",{id:"accuracy"})]},"MET02"),Object(x.jsxs)("li",{children:["  Precision: ",Object(x.jsx)("span",{id:"precision"})]},"MET03"),Object(x.jsxs)("li",{children:["  Recall: ",Object(x.jsx)("span",{id:"recall"})]},"MET04"),Object(x.jsxs)("li",{children:["  F1-score: ",Object(x.jsx)("span",{id:"fscore"})]},"MET05"),Object(x.jsxs)("li",{children:["  Error: ",Object(x.jsx)("span",{id:"error_perc"})]},"MET06")]})]}),Object(x.jsxs)("div",{id:"div-error",className:"not-showing",border:"1",children:[Object(x.jsx)("h2",{children:"Error"}),Object(x.jsx)("p",{id:"p-error"})]})]})})}}]),n}(s.Component)}).call(this,n(51).Buffer)},102:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(45),r=n(46),c=n(0),i=n.n(c),s=n(9),o=n(76),d=n(77),l=n(78),j=n(13),m=n(1),u=Object(s.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(m.jsx)(d.a,Object(r.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),b=Object(s.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(l.a);function p(){var e=i.a.useState(null),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)(o.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){r(e.currentTarget)},children:"Condiciones del CSV"}),Object(m.jsxs)(u,{id:"customized-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){r(null)},children:[Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"Archivo en formato CSV u ONNX"})}),Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"Separado por coma -> ,"})}),Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"M\xednimo 6 registros",secondary:"S\xf3lo CSV Train"})}),Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"M\xe1ximo 100k registros"})}),Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"Tama\xf1o m\xe1ximo 20MB"})}),Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"La \xfaltima columna es variable de clase",secondary:"Ambos CSV"})})]})]})}},103:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return g}));var a=n(15),r=n(16),c=n(18),i=n(17),s=n(0),o=n.n(s),d=(n(70),n(42)),l=n.n(d),j=n(43),m=n.n(j),u=n(33),b=n.n(u),p=n(44),h=n(104),x=n(1);function O(t){l()({method:"post",url:"".concat("https://miescher.csic.edu.uy","/classify"),data:t,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Methods":"OPTIONS,POST,GET","Content-Type":"multipart/form-data"}}).then((function(t){if("Error"in t.data)document.getElementById("div-loading").classList.remove("showing"),document.getElementById("div-loading").classList.add("not-showing"),document.getElementById("div-error").classList.remove("not-showing"),document.getElementById("div-error").classList.add("showing"),document.getElementById("p-error").innerHTML=t.data.Error;else{document.getElementById("div-loading").classList.remove("showing"),document.getElementById("div-loading").classList.add("not-showing"),document.getElementById("div-metricas").classList.remove("not-showing"),document.getElementById("div-metricas").classList.add("showing"),console.log(t);var n=m.a.encode(t.data.file);n=b.a.encode(e.from(t.data.file),"iso-8859-1");var a=new Blob([n],{type:"text/csv"}),r=window.URL.createObjectURL(a),c=document.createElement("a");c.href=r,c.setAttribute("download","clasificado.csv"),c.click()}})).catch((function(e){console.log(e)}))}var g=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).termsRef=o.a.createRef(),r.readFile=function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsBinaryString(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return n(e)}}))},r.onTrainUpload=function(e){try{r.setState({train:e.target.files[0]});var t=e.target.files[0].name.split(".").pop();r.setState({extTrain:t})}catch(n){console.error("Fichero train eliminado.")}},r.onTestUpload=function(e){try{r.setState({test:e.target.files[0]});var t=e.target.files[0].name.split(".").pop();r.setState({extTest:t})}catch(n){console.error("Fichero test eliminado.")}},r.updateTerms=function(e){r.setState({terms:!document.getElementById("terms").checked}),document.getElementById("enviar").disabled=!document.getElementById("terms").checked},r.onFormSubmit=function(e){e.preventDefault(),document.getElementById("div-entrenar").classList.remove("showing"),document.getElementById("div-entrenar").classList.add("not-showing"),document.getElementById("div-loading").classList.remove("not-showing"),document.getElementById("div-loading").classList.add("showing"),r.setState({terms:r.termsRef.current.value});var t=new FormData;if(t.append("servicio",r.state.service),t.append("test",r.state.test,"test"),t.append("train_extension",r.state.extTrain),t.append("test_extension",r.state.extTest),!0===document.getElementById("terms").checked?t.append("terms","Acepto"):t.append("terms","No acepto"),"onnx"===r.state.extTrain)r.readFile(r.state.train).then((function(e){var n=b.a.decode(e,"ISO-8859-1");n=new File([n],{type:"text/plain"}),t.append("train",n,"train"),O(t)})).catch((function(e){console.log(e)}));else{var n=r.state.train;t.append("train",n),O(t)}},r.state={service:"classify",terms:!1,train:null,test:null,extTrain:null,extTest:null},r}return Object(r.a)(n,[{key:"render",value:function(){return Object(x.jsx)(o.a.Fragment,{children:Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("b",{children:"Clasificar."})}),Object(x.jsxs)("div",{id:"div-entrenar",className:"showing",children:[Object(x.jsx)("div",{className:"form-group",children:Object(x.jsxs)("p",{children:[Object(x.jsx)("b",{children:"Resultado:"})," conjunto de datos clasificado."]})}),Object(x.jsx)(h.a,{}),Object(x.jsxs)("form",{onSubmit:this.onFormSubmit,id:"formServicios",children:[Object(x.jsx)("div",{className:"input-group mb-3",children:Object(x.jsx)("p",{children:"Definici\xf3n de la red neuronal o conjunto de datos de entrenamiento:"})}),Object(x.jsx)("div",{className:"input-group mb-3",children:Object(x.jsx)("input",{className:"form-control",type:"file",id:"train",name:"train",accept:".csv,.onnx",placeholder:"Dataset de train","aria-label":"Dataset de train","aria-describedby":"basic-addon1",onChange:this.onTrainUpload,ref:this.trainRef,required:!0})}),Object(x.jsx)("div",{className:"input-group mb-3",children:Object(x.jsx)("p",{children:"Conjunto de datos clasificados:"})}),Object(x.jsx)("div",{className:"input-group mb-3",children:Object(x.jsx)("input",{className:"form-control",type:"file",id:"dataset2",name:"dataset2",accept:".csv",placeholder:"Dataset de test","aria-label":"Dataset de test","aria-describedby":"basic-addon1",onChange:this.onTestUpload,ref:this.dataset2Ref,required:!0})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("p",{children:Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",name:"terms",id:"terms",value:"Acepto",ref:this.termsRef,defaultChecked:!1,onChange:this.updateTerms}),"Entiendo que el uso de esta aplicaci\xf3n es experimental."]})})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{id:"enviar",type:"submit",className:"btn btn-info",disabled:!0,value:"Clasificar"})})]})]}),Object(x.jsxs)("div",{id:"div-loading",className:"not-showing",children:[Object(x.jsx)("br",{}),Object(x.jsxs)("h2",{children:["La aplicaci\xf3n est\xe1 procesando.",Object(x.jsx)("br",{}),"Esto puede demorar un rato..."]}),Object(x.jsx)("img",{src:p.a,width:"600px;",alt:"loading",id:"img-loading"})]}),Object(x.jsxs)("div",{id:"div-metricas",className:"not-showing",children:[Object(x.jsx)("br",{}),Object(x.jsx)("h2",{children:"M\xe9tricas"}),Object(x.jsx)("p",{children:"Se han descargado los casos clasificados."})]}),Object(x.jsxs)("div",{id:"div-error",className:"not-showing",border:"1",children:[Object(x.jsx)("h2",{children:"Error"}),Object(x.jsx)("p",{id:"p-error"})]})]})})}}]),n}(s.Component)}).call(this,n(51).Buffer)},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(45),r=n(46),c=n(0),i=n.n(c),s=n(9),o=n(76),d=n(77),l=n(78),j=n(13),m=n(1),u=Object(s.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(m.jsx)(d.a,Object(r.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),b=Object(s.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(l.a);function p(){var e=i.a.useState(null),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)(o.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){r(e.currentTarget)},children:"Condiciones del CSV"}),Object(m.jsxs)(u,{id:"customized-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){r(null)},children:[Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"Archivo en formato CSV u ONNX"})}),Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"Separado por coma -> ,"})}),Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"M\xednimo 6 registros",secondary:"S\xf3lo CSV Train"})}),Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"M\xe1ximo 100k registros"})}),Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"Tama\xf1o m\xe1ximo 20MB"})}),Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"Todas las clases deben tener al menos un registro"})}),Object(m.jsx)(b,{children:Object(m.jsx)(j.a,{primary:"La \xfaltima columna es variable de clase",secondary:"S\xf3lo CSV Train"})})]})]})}},113:function(e,t,n){},114:function(e,t,n){},158:function(e,t){},159:function(e,t){},166:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),s=(n(113),n(114),n(15)),o=n(16),d=n(18),l=n(17),j=n(195),m=n(196),u=n(194),b=n.p+"static/media/logo.e53c176c.svg",p=n(1),h=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{id:"divMenu",children:Object(p.jsxs)(j.a,{expand:"lg",children:[Object(p.jsx)(j.a.Brand,{href:"/",children:Object(p.jsxs)("div",{id:"logo",children:[Object(p.jsx)("img",{src:b,className:"app-logo",alt:"Logotipo"}),Object(p.jsxs)("span",{id:"brand",children:[Object(p.jsx)("strong",{children:"GANN"}),"Service"]})]})}),Object(p.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(m.a,{className:"ms-auto",children:[Object(p.jsx)(m.a.Link,{href:"/",children:"Inicio"}),Object(p.jsxs)(u.a,{title:"Servicios",id:"basic-nav-dropdown",children:[Object(p.jsx)(u.a.Item,{href:"/entrenamiento",children:"Entrenamiento"}),Object(p.jsx)(u.a.Item,{href:"/evaluacion",children:"Evaluaci\xf3n"}),Object(p.jsx)(u.a.Item,{href:"/clasificacion",children:"Clasificaci\xf3n"})]}),Object(p.jsx)(m.a.Link,{href:"/autor",children:"Autor y Memoria"})]})})]})})}}]),n}(r.a.Component),x=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("header",{id:"header",children:Object(p.jsxs)("div",{className:"center",children:[Object(p.jsx)(h,{}),Object(p.jsx)("div",{className:"clearfix"})]})})}}]),n}(a.Component),O=function(){return Object(p.jsx)("footer",{id:"footer",children:Object(p.jsx)("div",{className:"center",children:Object(p.jsxs)("p",{children:["TFG de ",Object(p.jsx)("a",{href:"https://leroydeniz.com",children:" Leroy Deniz"})," \xa0 | \xa0 Grado en Ingenier\xeda Inform\xe1tica \xa0 | \xa0 Universidad del Pa\xeds Vasco"]})})})},g=n(73),f=n(12),v=n(99),y=n(101),E=n(103),w=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("h1",{children:"Autor."}),Object(p.jsx)("h3",{children:"Leroy Deniz"}),Object(p.jsxs)("p",{children:["Grado en Ingenier\xeda Inform\xe1tica",Object(p.jsx)("br",{}),"Especialidad Ingenier\xeda de Software",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"(+34) 669 987 109",Object(p.jsx)("br",{}),"leroydeniz ",Object(p.jsx)("code",{children:"[at]"})," icloud.com",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("code",{children:"https://leroydeniz.com"})]})]})}}]),n}(a.Component),I=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("h1",{children:"GANN Service."}),Object(p.jsxs)("p",{children:["Los algoritmos de clasificaci\xf3n supervisada resuelven un tipo de problemas espec\xedficos donde se cuenta con una serie de datos previamente clasificados. Para poder decidir la clase de una muestra, se tiene en cuenta toda la informaci\xf3n que se pueda extraer del conjunto de datos inicial, cuya clase es conocida por el clasificador.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"En este trabajo se implementa una aplicaci\xf3n web, que permite al usuario interactuar a trav\xe9s de un webservice, con una API (Application Programming Interface) capaz de entrenar y aproximar muy bien un \xf3ptimo global de una red neuronal profunda mediante algoritmos gen\xe9ticos, con las funcionalidades de entrenamiento, evaluaci\xf3n y clasificaci\xf3n.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"La aplicaci\xf3n es construida sobre una arquitectura de tres capas, contando con una interfaz web dise\xf1ada en ReactJS, que permitir\xe1 al usuario interactuar con las funcionalidades del software de clasificaci\xf3n.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Se aborda el dise\xf1o del Core utilizando t\xe9cnicas de clasificaci\xf3n supervisada bajo entrenamiento de redes neuronales profundas, optimiz\xe1ndolas a trav\xe9s de backpropagation y evolucion\xe1ndolas con algoritmos gen\xe9ticos. La API es construida en Python con Flask a nivel de Controlador y PyTorch como framework en el Core. Este \xfaltimo ser\xe1 el responsable de entrenar la red neuronal y hacerla evolucionar hasta lograr una aproximaci\xf3n muy cercana al \xf3ptimo global. El uso de metaheur\xedsticas permite a la red modificar sus pesos y crecer o reducir, tanto en n\xfamero de nodos como de capas de manera din\xe1mica, en funci\xf3n de lo que ella misma considere necesaria para su propio entrenamiento.",Object(p.jsx)("br",{})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("a",{href:"entrenamiento",children:Object(p.jsx)("input",{id:"entrenar",type:"button",className:"btn btn-info",value:"Entrenar"})})," \xa0",Object(p.jsx)("a",{href:"evaluacion",children:Object(p.jsx)("input",{id:"entrenar",type:"button",className:"btn btn-info",value:"Evaluar"})})," \xa0",Object(p.jsx)("a",{href:"clasificacion",children:Object(p.jsx)("input",{id:"entrenar",type:"button",className:"btn btn-info",value:"Clasificar"})})]})]})}}]),n}(a.Component),T=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("h1",{children:"Ups."}),Object(p.jsx)("p",{children:"La p\xe1gina a la que intenta acceder no ha sido encontrada."})]})}}]),n}(a.Component),B=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(g.a,{children:Object(p.jsxs)(f.c,{children:[Object(p.jsx)(f.a,{exact:!0,path:"/",component:I}),Object(p.jsx)(f.a,{exact:!0,path:"/index",component:I}),";",Object(p.jsx)(f.a,{exact:!0,path:"/entrenamiento",component:v.a}),";",Object(p.jsx)(f.a,{exact:!0,path:"/evaluacion",component:y.a}),";",Object(p.jsx)(f.a,{exact:!0,path:"/clasificacion",component:E.a}),";",Object(p.jsx)(f.a,{exact:!0,path:"/autor",component:w}),";",Object(p.jsx)(f.a,{component:T}),";"]})})}}]),n}(a.Component);var L=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(x,{}),Object(p.jsx)(B,{}),Object(p.jsx)(O,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,198)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root")),N()},44:function(e,t,n){"use strict";t.a=n.p+"static/media/lr2.2cce4ca0.gif"},99:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return O}));var a=n(15),r=n(16),c=n(18),i=n(17),s=n(0),o=n.n(s),d=(n(70),n(42)),l=n.n(d),j=n(43),m=n.n(j),u=n(33),b=n.n(u),p=n(44),h=n(100),x=n(1),O=function(t){Object(c.a)(s,t);var n=Object(i.a)(s);function s(t){var r;return Object(a.a)(this,s),(r=n.call(this,t)).termsRef=o.a.createRef(),r.onFileUpload=function(e){try{r.setState({train:e.target.files[0]});var t=e.target.files[0].name.split(".").pop();r.setState({extTrain:t}),document.getElementById("enviar").disabled=!r.state.terms,console.log(r.state)}catch(n){console.error("Fichero eliminado.")}},r.updateTerms=function(e){r.setState({terms:!document.getElementById("terms").checked}),document.getElementById("enviar").disabled=!document.getElementById("terms").checked},r.onFormSubmit=function(t){t.preventDefault(),document.getElementById("div-entrenar").classList.remove("showing"),document.getElementById("div-entrenar").classList.add("not-showing"),document.getElementById("div-loading").classList.remove("not-showing"),document.getElementById("div-loading").classList.add("showing"),r.setState({terms:r.termsRef.current.value});var n=new FormData;n.append("servicio",r.state.service),n.append("train",r.state.train),n.append("train_extension",r.state.extTrain),!0===document.getElementById("terms").checked?n.append("terms","Acepto"):n.append("terms","No acepto"),l()({method:"post",url:"".concat("https://miescher.csic.edu.uy","/train"),data:n,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Methods":"OPTIONS,POST,GET","Content-Type":"multipart/form-data"}}).then((function(t){if("Error"in t.data)document.getElementById("div-loading").classList.remove("showing"),document.getElementById("div-loading").classList.add("not-showing"),document.getElementById("div-error").classList.remove("not-showing"),document.getElementById("div-error").classList.add("showing"),document.getElementById("p-error").innerHTML=t.data.Error;else{document.getElementById("div-loading").classList.remove("showing"),document.getElementById("div-loading").classList.add("not-showing"),document.getElementById("div-metricas").classList.remove("not-showing"),document.getElementById("div-metricas").classList.add("showing"),console.log(t),document.getElementById("num_capas").innerHTML=t.data.num_capas,document.getElementById("num_neuronas").innerHTML=t.data.num_neuronas,document.getElementById("accuracy").innerHTML=100-t.data.error_perc.toFixed(2),document.getElementById("avg_loss").innerHTML=t.data.avg_loss.toFixed(2),document.getElementById("error_perc").innerHTML=t.data.error_perc.toFixed(2);var n=m.a.encode(t.data.file);n=b.a.encode(e.from(t.data.file),"iso-8859-1");var a=new Blob([n],{type:"text/onnx"}),r=window.URL.createObjectURL(a),c=document.createElement("a");c.href=r,c.setAttribute("download","model.onnx"),c.click()}})).catch((function(e){console.log("ERROR >> "+e),document.getElementById("div-loading").classList.remove("showing"),document.getElementById("div-loading").classList.add("not-showing"),document.getElementById("div-error").classList.remove("not-showing"),document.getElementById("div-error").classList.add("showing"),document.getElementById("p-error").innerHTML=e}))},r.state={service:"train",terms:!1,train:null,extTrain:null},r}return Object(r.a)(s,[{key:"render",value:function(){return Object(x.jsx)(o.a.Fragment,{children:Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("b",{children:"Entrenar."})}),Object(x.jsxs)("div",{id:"div-entrenar",className:"showing",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsxs)("p",{children:[Object(x.jsx)("b",{children:"Resultado:"})," configuraci\xf3n de una red neuronal y las m\xe9tricas de evaluaci\xf3n de \xe9sta."]}),Object(x.jsx)(h.a,{})]}),Object(x.jsxs)("form",{onSubmit:this.onFormSubmit,id:"formServicios",children:[Object(x.jsx)("div",{className:"input-group mb-3",children:Object(x.jsx)("p",{children:"Conjunto de datos de entrenamiento:"})}),Object(x.jsx)("div",{className:"input-group mb-3",children:Object(x.jsx)("input",{className:"form-control",type:"file",id:"train",name:"train",accept:".csv",placeholder:"Dataset de train","aria-label":"Dataset de train","aria-describedby":"basic-addon1",ref:this.trainRef,onChange:this.onFileUpload,required:!0})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("p",{children:Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",name:"terms",id:"terms",value:"Acepto",ref:this.termsRef,defaultChecked:!1,onChange:this.updateTerms}),"Entiendo que el uso de esta aplicaci\xf3n es experimental."]})})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{id:"enviar",type:"submit",disabled:!0,className:"btn btn-info",value:"Entrenar"})})]})]}),Object(x.jsxs)("div",{id:"div-loading",className:"not-showing",children:[Object(x.jsx)("br",{}),Object(x.jsxs)("h2",{children:["La aplicaci\xf3n est\xe1 procesando.",Object(x.jsx)("br",{}),"Esto puede demorar un rato..."]}),Object(x.jsx)("img",{src:p.a,width:"600px;",alt:"loading",id:"img-loading"})]}),Object(x.jsxs)("div",{id:"div-metricas",className:"not-showing",children:[Object(x.jsx)("br",{}),Object(x.jsx)("h2",{children:"M\xe9tricas"}),Object(x.jsxs)("p",{children:[Object(x.jsxs)("li",{children:["  N\xfamero de capas: ",Object(x.jsx)("span",{id:"num_capas"})]},"MET01"),Object(x.jsxs)("li",{children:["  N\xfamero de neuronas: ",Object(x.jsx)("span",{id:"num_neuronas"})]},"MET02"),Object(x.jsxs)("li",{children:["  Tasa de acierto: ",Object(x.jsx)("span",{id:"accuracy"}),"%"]},"MET03"),Object(x.jsxs)("li",{children:["  Error: ",Object(x.jsx)("span",{id:"error_perc"}),"%"]},"MET04"),Object(x.jsxs)("li",{children:["  Media de p\xe9rdida: ",Object(x.jsx)("span",{id:"avg_loss"})]},"MET05")]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsxs)("p",{children:[Object(x.jsx)("br",{}),"Puede visualizar el modelo descargado",Object(x.jsx)("br",{}),"utilizando la aplicaci\xf3n Netron."]}),Object(x.jsx)("a",{href:"https://netron.app",target:"_blank",rel:"noopener noreferrer",children:Object(x.jsx)("input",{id:"netron",type:"button",disabled:!1,className:"btn btn-info",value:"Ir a Netron"})})]})]}),Object(x.jsxs)("div",{id:"div-error",className:"not-showing",border:"1",children:[Object(x.jsx)("h2",{children:"Error"}),Object(x.jsx)("p",{id:"p-error"})]})]})})}}]),s}(s.Component)}).call(this,n(51).Buffer)}},[[166,1,2]]]);
//# sourceMappingURL=main.7e5f2545.chunk.js.map