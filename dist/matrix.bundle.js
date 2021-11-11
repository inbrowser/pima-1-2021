(()=>{"use strict";var t,r,e={};(t=e).__esModule=!0,t.lu_factorization=t.MatrixErrors=t.createMatrix=t.matrix_inverse=t.matrix_product=void 0,t.matrix_product=function(t,r){try{return{result:mathjs.multiply(t,r)}}catch(t){return{result:null,error:t.message}}},t.matrix_inverse=function(t){try{return{result:mathjs.inv(t)}}catch(t){return{result:null,error:t.message}}},t.createMatrix=function(t,r,e){void 0===e&&(e=r);for(var s=[],a=0;a<e;a++){s[a]=[];for(var i=0;i<r;i++){var u=t[a*r+i];(null==u||Number.isNaN(u))&&(u=0),s[a][i]=u}}return mathjs.matrix(s,"dense","number")},function(t){t.PARAMETER_EMPTY="Value null of undefined",t.NOT_INVERTIBLE="Matrix not invertible",t.VECTOR_B_INVALID_SIZE="The number of values in b is not equals to the number of rows in A."}(r=t.MatrixErrors||(t.MatrixErrors={})),t.lu_factorization=function(t,e,s){if(void 0===s&&(s=!1),null==t||null==e)return{result:null,error:r.PARAMETER_EMPTY};if(t.size().shift()!=e.length)return{result:null,error:r.VECTOR_B_INVALID_SIZE};try{if(s)return function(t,r){var e=[],s=t,a=t,i=t,u=!1,n=[{text:"Matrix must be two dimensional",ok:!0},{text:"Matrix must be square",ok:!0}],l=t.size();2!==l.length&&(n[0].ok=!1,u=!0);var o=l[0];if(o!==l[1]&&(n[1].ok=!1,u=!0),e.push({text:"Checking the format of the submitted matrix",steps:n}),!u){for(var m=[],h=[],c=null,x=0;x<o;x++){h.push(x);var v=mathjs.subset(t,mathjs.index(h,h)),f={text:"Checking leading minor $\\Delta_"+(x+1)+"$",ok:(c=mathjs.det(v))>0};if(m.push(f),!f.ok){u=!0;break}}u||m.push({text:"Matrix must be invertible ($\\Delta_"+o+" \\neq 0$)",ok:c>0}),e.push({text:"Check preconditions",steps:m})}if(!u){s=(f=mathjs.lup(t)).L,a=f.U,e.push({text:"Create U with Gauss reduction",steps:{type:"matrix",value:a.toArray()}}),e.push({text:"Create L with the coefficients used in Gauss reduction (the k in $L_j <- L_j - k * L_i$)",steps:{type:"matrix",value:s.toArray()}});var p=mathjs.lsolve(s,r);e.push({text:"Find Y given that $LY = b$",steps:{type:"matrix",value:p.toArray().flat()}}),i=mathjs.usolve(a,p),e.push({text:"Find X given that $UX = Y$",steps:{type:"matrix",value:i.toArray().flat()}})}return u?{result:{L:null,U:null,X:null,steps:e}}:{result:{L:s.toArray(),U:a.toArray(),X:i.toArray().flat(),steps:e}}}(t,e);var a=mathjs.lup(t),i=mathjs.lusolve(a,e);return{result:{L:a.L.toArray(),U:a.U.toArray(),X:i.toArray().flat()}}}catch(t){var u=t.message;switch(u){case"Dimension mismatch. Matrix columns must match vector length.":u=r.VECTOR_B_INVALID_SIZE;break;case"Linear system cannot be solved since matrix is singular":u=r.NOT_INVERTIBLE}return{result:null,error:u}}},window.inbrowser_matrix=e})();