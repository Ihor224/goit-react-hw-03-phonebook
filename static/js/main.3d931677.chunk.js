(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(9),s=n.n(r),i=(n(18),n(12)),u=n(3),l=n(4),b=n(6),m=n(5),h=n(21),d=n(2),j=n.n(d),f=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,o=t.number;return Object(a.jsxs)("li",{className:j.a.item,children:[Object(a.jsx)("p",{className:j.a.text,children:c}),Object(a.jsx)("p",{className:j.a.number,children:o}),Object(a.jsx)("button",{onClick:function(){return n(e)},className:j.a.btn,children:"Delete"})]},e)}))})},p=n(10),O=n(8),C=n.n(O),v=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:C.a.item,children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)("input",{type:"text",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",disabled:!this.state.name||!this.state.number,className:C.a.btn,children:"Add contact"})]})}}]),n}(c.Component),x=n(11),g=n.n(x),S=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:e,onChange:n,className:g.a.input})]})},_=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],name:"",number:"",filter:""},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.addContact=function(e){var n=e.name,a=e.number;console.log({name:n,number:a});var c={id:Object(h.a)(),name:n,number:a};t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:[c].concat(Object(i.a)(t.contacts))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(v,{onSubmit:this.addContact}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(S,{value:t,onChange:this.changeFilter}),Object(a.jsx)(f,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component);s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={item:"ContactList_item__1VAY2",text:"ContactList_text__s7b9-",number:"ContactList_number__exWmU",btn:"ContactList_btn__2A9vf"}},8:function(t,e,n){t.exports={item:"ContactForm_item__2SBEX",btn:"ContactForm_btn__3jUTQ"}}},[[19,1,2]]]);
//# sourceMappingURL=main.3d931677.chunk.js.map