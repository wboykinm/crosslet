(function(a){function c(a,b,c){return new d(a,b,c)}function d(a,b,c){this.l=a,this.a=b,this.b=c}function e(a,b,c){return new f(a,b,c)}function f(a,b,c){this.l=a,this.c=b,this.h=c}function k(b,c,d){var e=(b+16)/116,f=e+c/500,g=e-d/200;return f=o(f)*h,e=o(e)*i,g=o(g)*j,a.rgb(q(3.2404542*f-1.5371385*e-.4985314*g),q(-0.969266*f+1.8760108*e+.041556*g),q(.0556434*f-.2040259*e+1.0572252*g))}function l(a,b,d){a=r(a),b=r(b),d=r(d);var e=p((.4124564*a+.3575761*b+.1804375*d)/h),f=p((.2126729*a+.7151522*b+.072175*d)/i),g=p((.0193339*a+.119192*b+.9503041*d)/j);return c(116*f-16,500*(e-f),200*(f-g))}function m(a,b,c){var d=Math.sqrt(b*b+c*c),f=Math.atan2(c,b)/Math.PI*180;return e(a,d,f)}function n(a,b,d){return d=d*Math.PI/180,c(a,Math.cos(d)*b,Math.sin(d)*b)}function o(a){return a>.206893034?a*a*a:(a-4/29)/7.787037}function p(a){return a>.008856?Math.pow(a,1/3):7.787037*a+4/29}function q(a){return Math.round(255*(a<=.00304?12.92*a:1.055*Math.pow(a,1/2.4)-.055))}function r(a){return(a/=255)<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)}var b=a.cie={};b.lab=function(b,e,g){return arguments.length===1?b instanceof d?c(b.l,b.a,b.b):b instanceof f?n(b.l,b.c,b.h):l((b=a.rgb(b)).r,b.g,b.b):c(+b,+e,+g)},b.lch=function(b,c,g){return arguments.length===1?b instanceof f?e(b.l,b.c,b.h):b instanceof d?m(b.l,b.a,b.b):m((b=l((b=a.rgb(b)).r,b.g,b.b)).l,b.a,b.b):e(+b,+c,+g)},b.interpolateLab=function(a,c){a=b.lab(a),c=b.lab(c);var d=a.l,e=a.a,f=a.b,g=c.l-d,h=c.a-e,i=c.b-f;return function(a){return k(d+g*a,e+h*a,f+i*a)+""}},b.interpolateLch=function(a,c){a=b.lch(a),c=b.lch(c);var d=a.l,e=a.c,f=a.h,g=c.l-d,h=c.c-e,i=c.h-f;return i>180?i-=360:i<-180&&(i+=360),function(a){return n(d+g*a,e+h*a,f+i*a)+""}},d.prototype.brighter=function(a){return c(Math.min(100,this.l+g*(arguments.length?a:1)),this.a,this.b)},d.prototype.darker=function(a){return c(Math.max(0,this.l-g*(arguments.length?a:1)),this.a,this.b)},d.prototype.rgb=function(){return k(this.l,this.a,this.b)},d.prototype.toString=function(){return this.rgb()+""},f.prototype.brighter=function(a){return e(Math.min(100,this.l+g*(arguments.length?a:1)),this.c,this.h)},f.prototype.darker=function(a){return e(Math.max(0,this.l-g*(arguments.length?a:1)),this.c,this.h)},f.prototype.rgb=function(){return n(this.l,this.c,this.h).rgb()},f.prototype.toString=function(){return this.rgb()+""};var g=18,h=.95047,i=1,j=1.08883})(d3),function(a){function b(a){return a}function c(a,b){for(var c=0,d=b.length,e=new Array(d);c<d;++c)e[c]=a[b[c]];return e}function d(a){function b(b,c,d,e){while(d<e){var f=d+e>>1;a(b[f])<c?d=f+1:e=f}return d}function c(b,c,d,e){while(d<e){var f=d+e>>1;c<a(b[f])?e=f:d=f+1}return d}return c.right=c,c.left=b,c}function e(a){function b(a,b,c){var e=c-b,f=(e>>>1)+1;while(--f>0)d(a,f,e,b);return a}function c(a,b,c){var e=c-b,f;while(--e>0)f=a[b],a[b]=a[b+e],a[b+e]=f,d(a,1,e,b);return a}function d(b,c,d,e){var f=b[--e+c],g=a(f),h;while((h=c<<1)<=d){h<d&&a(b[e+h])>a(b[e+h+1])&&h++;if(g<=a(b[e+h]))break;b[e+c]=b[e+h],c=h}b[e+c]=f}return b.sort=c,b}function f(a){function b(b,d,e,f){var g=new Array(f=Math.min(e-d,f)),h,i,j,k;for(i=0;i<f;++i)g[i]=b[d++];c(g,0,f);if(d<e){h=a(g[0]);do if(j=a(k=b[d])>h)g[0]=k,h=a(c(g,0,f)[0]);while(++d<e)}return g}var c=e(a);return b}function g(a){function b(b,c,d){for(var e=c+1;e<d;++e){for(var f=e,g=b[e],h=a(g);f>c&&a(b[f-1])>h;--f)b[f]=b[f-1];b[f]=g}return b}return b}function h(a){function b(a,b,e){return(e-b<B?d:c)(a,b,e)}function c(c,d,e){var f=(e-d)/6|0,g=d+f,h=e-1-f,i=d+e-1>>1,j=i-f,k=i+f,l=c[g],m=a(l),n=c[j],o=a(n),p=c[i],q=a(p),r=c[k],s=a(r),t=c[h],u=a(t),v;m>o&&(v=l,l=n,n=v,v=m,m=o,o=v),s>u&&(v=r,r=t,t=v,v=s,s=u,u=v),m>q&&(v=l,l=p,p=v,v=m,m=q,q=v),o>q&&(v=n,n=p,p=v,v=o,o=q,q=v),m>s&&(v=l,l=r,r=v,v=m,m=s,s=v),q>s&&(v=p,p=r,r=v,v=q,q=s,s=v),o>u&&(v=n,n=t,t=v,v=o,o=u,u=v),o>q&&(v=n,n=p,p=v,v=o,o=q,q=v),s>u&&(v=r,r=t,t=v,v=s,s=u,u=v);var w=n,x=o,y=r,z=s;c[g]=l,c[j]=c[d],c[i]=p,c[k]=c[e-1],c[h]=t;var A=d+1,B=e-2,C=x<=z&&x>=z;if(C)for(var D=A;D<=B;++D){var E=c[D],F=a(E);if(F<x)D!==A&&(c[D]=c[A],c[A]=E),++A;else if(F>x)for(;;){var G=a(c[B]);if(G>x){B--;continue}if(G<x){c[D]=c[A],c[A++]=c[B],c[B--]=E;break}c[D]=c[B],c[B--]=E;break}}else for(var D=A;D<=B;D++){var E=c[D],F=a(E);if(F<x)D!==A&&(c[D]=c[A],c[A]=E),++A;else if(F>z)for(;;){var G=a(c[B]);if(G>z){B--;if(B<D)break;continue}G<x?(c[D]=c[A],c[A++]=c[B],c[B--]=E):(c[D]=c[B],c[B--]=E);break}}c[d]=c[A-1],c[A-1]=w,c[e-1]=c[B+1],c[B+1]=y,b(c,d,A-1),b(c,B+2,e);if(C)return c;if(A<g&&B>h){var H,G;while((H=a(c[A]))<=x&&H>=x)++A;while((G=a(c[B]))<=z&&G>=z)--B;for(var D=A;D<=B;D++){var E=c[D],F=a(E);if(F<=x&&F>=x)D!==A&&(c[D]=c[A],c[A]=E),A++;else if(F<=z&&F>=z)for(;;){var G=a(c[B]);if(G<=z&&G>=z){B--;if(B<D)break;continue}G<x?(c[D]=c[A],c[A++]=c[B],c[B--]=E):(c[D]=c[B],c[B--]=E);break}}}return b(c,A,B+1)}var d=g(a);return b}function i(a){return new Array(a)}function j(a,b){return function(c){var d=c.length;return[a.left(c,b,0,d),a.right(c,b,0,d)]}}function k(a,b){var c=b[0],d=b[1];return function(b){var e=b.length;return[a.left(b,c,0,e),a.left(b,d,0,e)]}}function l(a){return[0,a.length]}function m(){return null}function n(){return 0}function o(a){return a+1}function p(a){return a-1}function q(a){return function(b,c){return b+ +a(c)}}function r(a){return function(b,c){return b-a(c)}}function s(){function a(a){var b=y,c=a.length;return c&&(x=x.concat(a),B=F(B,y+=c),E.forEach(function(d){d(a,b,c)})),s}function d(a){function d(b,d,e){S=b.map(a),T=U(u(e),0,e),S=c(S,T);var f=V(S),g=f[0],h=f[1],i;for(i=0;i<g;++i)B[T[i]+d]|=O;for(i=h;i<e;++i)B[T[i]+d]|=O;if(!d){Q=S,R=T,X=g,Y=h;return}var j=Q,k=R,l=0,m=0;Q=new Array(y),R=t(y,y);for(i=0;l<d&&m<e;++i)j[l]<S[m]?(Q[i]=j[l],R[i]=k[l++]):(Q[i]=S[m],R[i]=T[m++]+d);for(;l<d;++l,++i)Q[i]=j[l],R[i]=k[l];for(;m<e;++m,++i)Q[i]=S[m],R[i]=T[m]+d;f=V(Q),X=f[0],Y=f[1]}function g(a,b,c){W.forEach(function(a){a(S,T,b,c)}),S=T=null}function i(a){var b,c,d,e=a[0],f=a[1],g=[],h=[];if(e<X)for(b=e,c=Math.min(X,f);b<c;++b)B[d=R[b]]^=O,g.push(d);else if(e>X)for(b=X,c=Math.min(e,Y);b<c;++b)B[d=R[b]]^=O,h.push(d);if(f>Y)for(b=Math.max(e,Y),c=f;b<c;++b)B[d=R[b]]^=O,g.push(d);else if(f<Y)for(b=Math.max(X,f),c=Y;b<c;++b)B[d=R[b]]^=O,h.push(d);return X=e,Y=f,D.forEach(function(a){a(O,g,h)}),N}function s(a){return a==null?I():Array.isArray(a)?H(a):C(a)}function C(a){return i((V=j(w,a))(Q))}function H(a){return i((V=k(w,a))(Q))}function I(){return i((V=l)(Q))}function J(a){var b=[],c=Y,d;while(--c>=X&&a>0)B[d=R[c]]||(b.push(x[d]),--a);return b}function K(a){var b=[],c=X,d;while(c<Y&&a>0)B[d=R[c]]||(b.push(x[d]),--a),c++;return b}function L(a){function c(b,c,e,f){function j(){++K===J&&(l=G(l,I<<=1),H=G(H,I),J=v(I))}var k=E,l=t(K,J),n=N,o=T,p=K,q=0,r=0,s,u,w,z,A,C;X&&(n=o=m),E=new Array(K),K=0,H=p>1?F(H,y):t(y,J),p&&(w=(u=k[0]).key);while(r<f&&!((z=a(b[r]))>=z))++r;while(r<f){if(u&&w<=z){A=u,C=w,l[q]=K;if(u=k[++q])w=u.key}else A={key:z,value:o()},C=z;E[K]=A;while(!(z>C)){H[s=c[r]+e]=K,B[s]&P||(A.value=n(A.value,x[s]));if(++r>=f)break;z=a(b[r])}j()}while(q<p)E[l[q]=K]=k[q++],j();if(K>q)for(q=0;q<e;++q)H[q]=l[H[q]];s=D.indexOf(U),K>1?(U=d,V=h):(K===1?(U=g,V=i):(U=m,V=m),H=null),D[s]=U}function d(a,b,c){if(a===O||X)return;var d,e,f,g;for(d=0,f=b.length;d<f;++d)B[e=b[d]]&P||(g=E[H[e]],g.value=N(g.value,x[e]));for(d=0,f=c.length;d<f;++d)(B[e=c[d]]&P)===a&&(g=E[H[e]],g.value=S(g.value,x[e]))}function g(a,b,c){if(a===O||X)return;var d,e,f,g=E[0];for(d=0,f=b.length;d<f;++d)B[e=b[d]]&P||(g.value=N(g.value,x[e]));for(d=0,f=c.length;d<f;++d)(B[e=c[d]]&P)===a&&(g.value=S(g.value,x[e]))}function h(){var a,b;for(a=0;a<K;++a)E[a].value=T();for(a=0;a<y;++a)B[a]&P||(b=E[H[a]],b.value=N(b.value,x[a]))}function i(){var a,b=E[0];b.value=T();for(a=0;a<y;++a)B[a]&P||(b.value=N(b.value,x[a]))}function j(){return X&&(V(),X=!1),E}function k(a){var b=L(j(),0,E.length,a);return M.sort(b,0,b.length)}function l(a,b,c){return N=a,S=b,T=c,X=!0,C}function s(){return l(o,p,n)}function u(a){return l(q(a),r(a),n)}function w(a){function b(b){return a(b.value)}return L=f(b),M=e(b),C}function z(){return w(b)}function A(){return K}var C={top:k,all:j,reduce:l,reduceCount:s,reduceSum:u,order:w,orderNatural:z,size:A},E,H,I=8,J=v(I),K=0,L,M,N,S,T,U=m,V=m,X=!0;return arguments.length<1&&(a=b),D.push(U),W.push(c),c(Q,R,0,y),s().orderNatural()}function M(){var a=L(m),b=a.all;return delete a.all,delete a.top,delete a.order,delete a.orderNatural,delete a.size,a.value=function(){return b()[0].value},a}var N={filter:s,filterExact:C,filterRange:H,filterAll:I,top:J,bottom:K,group:L,groupAll:M},O=1<<z++,P=~O,Q,R,S,T,U=h(function(a){return S[a]}),V=l,W=[],X=0,Y=0;return E.unshift(d),E.push(g),z>A&&(B=G(B,A<<=1)),d(x,0,y),g(x,0,y),N}function g(){function a(a,b,c){var d;if(m)return;for(d=b;d<y;++d)B[d]||(i=j(i,x[d]))}function b(a,b,c){var d,e,f;if(m)return;for(d=0,f=b.length;d<f;++d)B[e=b[d]]||(i=j(i,x[e]));for(d=0,f=c.length;d<f;++d)B[e=c[d]]===a&&(i=k(i,x[e]))}function c(){var a;i=l();for(a=0;a<y;++a)B[a]||(i=j(i,x[a]))}function d(a,b,c){return j=a,k=b,l=c,m=!0,h}function e(){return d(o,p,n)}function f(a){return d(q(a),r(a),n)}function g(){return m&&(c(),m=!1),i}var h={reduce:d,reduceCount:e,reduceSum:f,value:g},i,j,k,l,m=!0;return D.push(b),E.push(a),a(x,0,y),e()}function i(){return y}var s={add:a,dimension:d,groupAll:g,size:i},x=[],y=0,z=0,A=8,B=C(0),D=[],E=[];return arguments.length?a(arguments[0]):s}function t(a,b){return(b<257?C:b<65537?D:E)(a)}function u(a){var b=t(a,a);for(var c=-1;++c<a;)b[c]=c;return b}function v(a){return a===8?256:a===16?65536:4294967296}s.version="1.1.0",s.permute=c;var w=s.bisect=d(b);w.by=d;var x=s.heap=e(b);x.by=e;var y=s.heapselect=f(b);y.by=f;var z=s.insertionsort=g(b);z.by=g;var A=s.quicksort=h(b);A.by=h;var B=32,C=i,D=i,E=i,F=b,G=b;typeof Uint8Array!="undefined"&&(C=function(a){return new Uint8Array(a)},D=function(a){return new Uint16Array(a)},E=function(a){return new Uint32Array(a)},F=function(a,b){var c=new a.constructor(b);return c.set(a),c},G=function(a,b){var c;switch(b){case 16:c=D(a.length);break;case 32:c=E(a.length);break;default:throw new Error("invalid array width!")}return c.set(a),c}),a.crossfilter=s}(this),topojson=function(){function a(a,b){function f(b){var c=a.arcs[b],d=c[0],e=[0,0];return c.forEach(function(a){e[0]+=a[0],e[1]+=a[1]}),[d,e]}var c={},d={},e={};b.forEach(function(a){var b=f(a);(c[b[0]]||(c[b[0]]=[])).push(a),(c[b[1]]||(c[b[1]]=[])).push(~a)}),b.forEach(function(a){var b=f(a),c=b[0],g=b[1],h,i;if(h=e[c]){delete e[h.end],h.push(a),h.end=g;if(i=d[g]){delete d[i.start];var j=i===h?h:h.concat(i);d[j.start=h.start]=e[j.end=i.end]=j}else if(i=e[g]){delete d[i.start],delete e[i.end];var j=h.concat(i.map(function(a){return~a}).reverse());d[j.start=h.start]=e[j.end=i.start]=j}else d[h.start]=e[h.end]=h}else if(h=d[g]){delete d[h.start],h.unshift(a),h.start=c;if(i=e[c]){delete e[i.end];var k=i===h?h:i.concat(h);d[k.start=i.start]=e[k.end=h.end]=k}else if(i=d[c]){delete d[i.start],delete e[i.end];var k=i.map(function(a){return~a}).reverse().concat(h);d[k.start=i.end]=e[k.end=h.end]=k}else d[h.start]=e[h.end]=h}else if(h=d[c]){delete d[h.start],h.unshift(~a),h.start=g;if(i=e[g]){delete e[i.end];var k=i===h?h:i.concat(h);d[k.start=i.start]=e[k.end=h.end]=k}else if(i=d[g]){delete d[i.start],delete e[i.end];var k=i.map(function(a){return~a}).reverse().concat(h);d[k.start=i.end]=e[k.end=h.end]=k}else d[h.start]=e[h.end]=h}else if(h=e[g]){delete e[h.end],h.push(~a),h.end=c;if(i=e[c]){delete d[i.start];var j=i===h?h:h.concat(i);d[j.start=h.start]=e[j.end=i.end]=j}else if(i=d[c]){delete d[i.start],delete e[i.end];var j=h.concat(i.map(function(a){return~a}).reverse());d[j.start=h.start]=e[j.end=i.start]=j}else d[h.start]=e[h.end]=h}else h=[a],d[h.start=c]=e[h.end=g]=h});var g=[];for(var h in e)g.push(e[h]);return g}function b(b,d,e){var f=[];if(arguments.length>1){var g=[],h;function i(a){a<0&&(a=~a),(g[a]||(g[a]=[])).push(h)}function j(a){a.forEach(i)}function k(a){a.forEach(j)}function l(a){h=a,m[a.type](a.arcs)}var m={LineString:j,MultiLineString:k,Polygon:k,MultiPolygon:function(a){a.forEach(k)}};d.type==="GeometryCollection"?d.geometries.forEach(l):l(d),g.forEach(arguments.length<3?function(a,b){f.push([b])}:function(a,b){e(a[0],a[a.length-1])&&f.push([b])})}else for(var n=0,o=b.arcs.length;n<o;++n)f.push([n]);return c(b,{type:"MultiLineString",arcs:a(b,f)})}function c(a,b){function j(a,b){b.length&&b.pop();for(var c=i[a<0?~a:a],j=0,k=c.length,l=0,m=0,n;j<k;++j)b.push([(l+=(n=c[j])[0])*e+g,(m+=n[1])*f+h]);a<0&&d(b,k)}function k(a){var b=[];for(var c=0,d=a.length;c<d;++c)j(a[c],b);return b}function l(a){return a.map(k)}function m(a){return a=Object.create(a),a.coordinates=n[a.type](a.arcs),a}var c=a.transform,e=c.scale[0],f=c.scale[1],g=c.translate[0],h=c.translate[1],i=a.arcs,n={LineString:k,MultiLineString:l,Polygon:l,MultiPolygon:function(a){return a.map(l)}};return b.type==="GeometryCollection"?(b=Object.create(b),b.geometries=b.geometries.map(m),b):m(b)}function d(a,b){var c,d=a.length,e=d-b;while(e<--d)c=a[e],a[e++]=a[d],a[d]=c}function e(a,b){var c=0,d=a.length;while(c<d){var e=c+d>>>1;a[e]<b?c=e+1:d=e}return c}function f(a,b){function f(a,b){a.forEach(function(a){a<0&&(a=~a);var f=c[a]||(c[a]=[]);f[b]||(f.forEach(function(a){var c,f;f=e(c=d[b],a),c[f]!==a&&c.splice(f,0,a),f=e(c=d[a],b),c[f]!==b&&c.splice(f,0,b)}),f[b]=b)})}function g(a,b){a.forEach(function(a){f(a,b)})}function h(a,b){i[a.type](a.arcs,b)}var c=[],d=b.map(function(){return[]}),i={LineString:f,MultiLineString:g,Polygon:g,MultiPolygon:function(a,b){a.forEach(function(a){g(a,b)})}};return b.forEach(h),d}return{version:"0.0.4",mesh:b,object:c,neighbors:f}}(),barChart=function(){function q(h){function l(a){var d=[],e=-1,f=a.length,g;while(++e<f)g=a[e],d.push("M",b(g.key),",",k,"V",c(g.value),"h4.5V",k);return d.join("")}function q(a){var b=+(a=="e"),c=b?1:-1,d=k/3;return"M"+.5*c+","+d+"A6,6 0 0 "+b+" "+6.5*c+","+(d+6)+"V"+(2*d-6)+"A6,6 0 0 "+b+" "+.5*c+","+2*d+"Z"+"M"+2.5*c+","+(d+8)+"V"+(2*d-8)+"M"+4.5*c+","+(d+8)+"V"+(2*d-8)}var j=b.range()[1],k=c.range()[0];c.domain([i.top(1)[0].value/100,i.top(1)[0].value]),h.each(function(){var c=d3.select(this),h=c.select("g");if(h.empty()){var r=c.append("svg").attr("width",j+a.left+a.right).attr("height",k+a.top+a.bottom).attr("id",n);if(p){fill_svg=r.append("defs").append("linearGradient").attr("id","lg-"+d).attr("x1","0%").attr("y1","0%").attr("x2","100%").attr("y2","0%");var s=b.copy().domain([0,20]).range(b.range);for(var t=0;t<20;t++)fill_svg.append("stop").attr("stop-color",p(t)).attr("offset",t*5+"%").attr("stop-opacity","1")}h=r.append("g").attr("transform","translate("+a.left+","+a.top+")"),m&&o.text(e.tickFormat()(m[0])+" - "+e.tickFormat()(m[1])),h.append("clipPath").attr("id","clip-"+d).append("rect").attr("width",j).attr("height",k),h.selectAll(".bar").data(["background","foreground"]).enter().append("path").attr("class",function(a){return a+" bar"}).datum(i.all()),h.selectAll(".foreground.bar").attr("clip-path","url(#clip-"+d+")").attr("fill","url(#lg-"+d+")"),h.append("g").attr("class","axis").attr("transform","translate(0,"+k+")").call(e);var u=h.append("g").attr("class","brush").call(f);u.selectAll("rect").attr("height",k),u.selectAll(".resize").append("path").attr("d",q)}if(g){g=!1,h.selectAll(".brush").call(f),c.select(".title a").style("display",f.empty()?"none":null);if(f.empty())h.selectAll("#clip-"+d+" rect").attr("x",0).attr("width",j);else{var v=f.extent();h.selectAll("#clip-"+d+" rect").attr("x",b(v[0])).attr("width",b(v[1])-b(v[0]))}}h.selectAll(".bar").attr("d",l)})}barChart.id||(barChart.id=0);var a={top:5,right:10,bottom:20,left:10},b,c=d3.scale.pow().exponent(.01).clamp(!0).range([20,0]),d=barChart.id++,e=d3.svg.axis().orient("bottom"),f=d3.svg.brush(),g,h,i,j,k,l,m=null,n,o,p;return f.on("brushstart.chart",function(){var a=d3.select(this.parentNode.parentNode.parentNode)}),f.on("brush.chart",function(){var a=d3.select(this.parentNode),c=f.extent();j&&a.select(".brush").call(f.extent(c=c.map(j))).selectAll(".resize").style("display",null),a.select("#clip-"+d+" rect").attr("x",b(c[0])).attr("width",b(c[1])-b(c[0])),h.filterRange(c),m=c,c[1]-c[0]>0?o&&o.text(e.tickFormat()(c[0])+" - "+e.tickFormat()(c[1])):o&&o.text("")}),f.on("brushend.chart",function(){if(f.empty()){var a=d3.select(this.parentNode.parentNode.parentNode);a.select("#clip-"+d+" rect").attr("x",null).attr("width","100%"),h.filterAll(),m=null}}),q.margin=function(b){return arguments.length?(a=b,q):a},q.x=function(a){return arguments.length?(b=a,e.scale(b),f.x(b),q):b},q.tickFormat=function(a){return arguments.length?(k=a,e.tickFormat(k),q):k},q.name_id=function(a){return arguments.length?(n=a,q):n},q.ticks=function(a){return arguments.length?(ticks=a,a.length?e.tickValues(ticks):e.ticks(ticks),q):l},q.fill=function(a){return arguments.length?(p=a,q):p},q.y=function(a){return arguments.length?(c=a,q):c},q.dimension=function(a){return arguments.length?(h=a,q):h},q.filter=function(a){return arguments.length?(a?(m=a,f.extent(a),h.filterRange(a),o&&o.text(e.tickFormat()(m[0])+" - "+e.tickFormat()(m[1]))):(f.clear(),m=null,h.filterAll()),g=!0,q):m},q.group=function(a){return arguments.length?(i=a,q):i},q.round=function(a){return arguments.length?(j=a,q):j},d3.rebind(q,f,"on")};var crosslet;crosslet={},_||console.log("Please include underscore.js"),crosslet.createConfig=function(a,b){var c;return c=jQuery.extend(!0,jQuery.extend(!0,{},a),b)},crosslet.id=function(a){return a},crosslet.idf=function(a){return crosslet.id},crosslet.notimplemented=function(){throw"This function is not set. Please check your config."},crosslet.changeSelect=function(a,b){return $(a).find("option").filter(function(){return $(this).val()===b}).attr("selected",!0)},crosslet.defaultConfig={map:{leaflet:{key:"--your key--",styleId:64657,attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'},view:{center:[51.505,-0.09],zoom:11},geo:{url:"please specify correct location of your geojson",name_field:"name",id_field:"code",topo_object:"please specify correct object name"}}},{data:{version:"1.0",id_field:"id"},dimensions:{},defaults:{colorscale:d3.scale.linear().domain([1,10,20]).range(["green","yellow","red"]).interpolate(d3.cie.interpolateLab),opacity:.75,order:[]}},crosslet.defaultDimensionConfig={p:{},filter:null,data:{interval:null,filter:null,field:function(a){return a.id},dataSet:crosslet.notimplemented,method:d3.tsv,preformat:function(a){return function(a){return+a}},ticks:4,colorscale:d3.scale.linear().domain([1,10,20]).range(["green","yellow","red"]).interpolate(d3.cie.interpolateLab),exponent:1},format:{"short":function(a){return d3.format(",.2f")},"long":function(a){return a.format.short(a)},input:function(a){return a.format.short(a)},axis:function(a){return a.format.short(a)}},render:{legend:function(a,b){var c,d;return c=a.title?a.title:a.data.field_func(a),d="<h2>"+c+"<h2>",b.html(d)},range:function(a,b){var c;return c="<p><span class='m0'>"+a.format.short(a)(a.filter[0])+"</span> &ndash; <span class='m1'>"+a.format.short(a)(a.filter[1])+"</span></p>",b.html(c)},form:function(a,b){return a.render.legend(a,b)},rangeForm:function(a,b){var c,d;return d=_.max(_.map(a.data.interval,function(b){return("_"+a.format.input(a)(b)).length-1})),c="Range: <input type='text' name='m0' size='"+d+"' value='"+a.format.input(a)(a.filter[0])+"'> &ndash; <input type='text' name='m1' size='3' value='"+a.format.input(a)(a.filter[1])+"'>",b.html(c)}},submitter:function(a,b){var c;return c={},$(b).find("input, select").each(function(a,b){return c[$(b).attr("name")]=$(b).val()}),c}};var __bind=function(a,b){return function(){return a.apply(b,arguments)}},__indexOf=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};crosslet.DataStore=function(){function a(a){this.loadGeo=__bind(this.loadGeo,this);var b,c;this.geoURL=a.map.geo.url,this.version=a.data.version,this.idField=(b=a.data.id_field)!=null?b:"id",this.geoIdField=(c=a.map.geo.id_field)!=null?c:"id",window.dataloader||(window.dataloader=new crosslet.DataLoader),this.l=window.dataloader}return a.prototype.data={},a.prototype.geometries=null,a.prototype.isGeoLoaded=!1,a.prototype.isDataLoaded=!1,a.prototype.addData=function(a,b){var c,d,e,f,g;for(f=0,g=a.length;f<g;f++){c=a[f],this.data[c[this.idField]]||(this.data[c[this.idField]]={});for(d in c)e=c[d],_.isNaN(+e)||(this.data[c[this.idField]][d]=+e)}this.isDataLoaded=!0;if(b)return b(a)},a.prototype.loadData=function(a,b,c){var d=this;return c||(c=d3.tsv),this.l.load(a,c,function(a){return d.addData(a,b)}),this},a.prototype.get_bounds_topo=function(a){var b,c,d,e,f,g,h,i,j,k;e=[],j=[_.min,_.max];for(f=0,h=j.length;f<h;f++){c=j[f],b=[],k=[0,1];for(g=0,i=k.length;g<i;g++)d=k[g],b.push(c(_.map(a,function(a){return c(_.map(a.coordinates[0],function(a){return a[d]}))})));e.push(b)}return e},a.prototype.loadGeo=function(a,b,c,d){var e=this;return this.l.load(a,d3.json,function(a){var b,f,g,h;a.arcs?(a=topojson.object(a,a.objects[d]),e.geometries=a.geometries):e.geometries=a.features,e.bounds=d3.geo.bounds(a),h=e.geometries;for(f=0,g=h.length;f<g;f++)b=h[f],b.properties&&(e.data[b.properties[e.geoIdField]]?e.data[b.properties[e.geoIdField]]=jQuery.extend(!0,e.data[b.properties[e.geoIdField]],b.properties):e.data[b.properties[e.geoIdField]]=b.properties,e.data[b.properties[e.geoIdField]].bbox=d3.geo.bounds(b));return e.isGeoLoaded=!0,c&&c(e),e})},a}(),crosslet.DataLoader=function(){function a(a){a||(a="1.0"),this.version=a,this.indexedDB=window.indexedDB||window.webkitIndexedDB||window.mozIndexedDB||window.msIndexedDB}return a.prototype.cache={},a.prototype.status={},a.prototype.callbackList={},a.prototype.load=function(a,b,c){var d,e=this;return d=a+this.version,this.callbackList[d]||(this.callbackList[d]=[]),this.status[d]||(this.status[d]="init"),c&&this.callbackList[d].push(c),__indexOf.call(this.cache,d)>=0?(this.executeCallbacks(this.callbackList[d],this.cache[d]),this):(this.status[d]!=="loading"&&(this.status[d]="loading",b(a,function(a){return e.cache[d]=a,e.executeCallbacks(e.callbackList[d],e.cache[d]),e.status[d]="done",e})),this)},a.prototype.executeCallbacks=function(a,b){var c;c=[];while(a.length>0)c.push(a.pop()(b));return c},a}();var __bind=function(a,b){return function(){return a.apply(b,arguments)}},__hasProp=Object.prototype.hasOwnProperty,__extends=function(a,b){function d(){this.constructor=a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};crosslet.PanelView=function(a){function b(){this.renderCubes=__bind(this.renderCubes,this),this.createCube=__bind(this.createCube,this),this.setActive=__bind(this.setActive,this),this._renderMap=__bind(this._renderMap,this),b.__super__.constructor.apply(this,arguments)}return __extends(b,a),b.prototype.initialize=function(a,b,c){var d,e,f,g,h;this.config=crosslet.createConfig(crosslet.defaultConfig,b),this.parent=c,this.el=a,this.ds=c.ds,this.boxes={},this.render(),this.width=200,this.active=this.config.defaults.active?this.config.defaults.active:this.config.defaults.order[0],this.numloads=this.config.defaults.order.length,h=this.config.defaults.order;for(f=0,g=h.length;f<g;f++)e=h[f],d=$("<div class='box'></div>"),this.boxes[e]=new crosslet.BoxView(d,this.config.dimensions[e],this,e),$(this.el).append(d);return this.boxes[this.active].setActive(!0),this.renderMap=_.debounce(this._renderMap,200),this.boxes},b.prototype.loaded=function(){this.numloads=this.numloads-1;if(this.numloads<=0)return this.createCube()},b.prototype._renderMap=function(){var a,b,c,d,e,f,g,h,i=this;a=this.boxes[this.active],b=a.getFilteredData(),e=this.intersection(_.map(_.values(this.boxes),function(a){return _.keys(a.getFilteredData()).sort()})),f={};for(g=0,h=e.length;g<h;g++)d=e[g],f[d]=b[d];return c=a.config.format.long(a.config),this.parent.renderMap(f,function(b){return a.config.data.colorscale(a.config.scale(b))},function(a,b){return a.properties[i.config.map.geo.name_field]+" - "+c(b)}),this},b.prototype.setActive=function(a){if(a!==this.active)return this.boxes[this.active].setActive(!1),this.active=a,this.boxes[this.active].setActive(!0),this.renderMap()},b.prototype.intersection=function(a){var b,c,d,e,f,g;b=function(a,b){var c,d,e;c=d=0,e=[];while(c<a.length&&d<b.length)a[c]<b[d]&&c++,a[c]>b[d]&&d++,a[c]===b[d]&&(e.push(a[c]),c++,d++);return e};switch(a.length){case 0:return a;case 1:return a[0];case 2:return b(a[0],a[1]);default:d=a[0],g=a.slice(1);for(e=0,f=g.length;e<f;e++)c=g[e],d=b(d,c);return d}},b.prototype.createCube=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;this.rows=[],q=(new Date).getTime(),m=_.map(_.values(this.boxes),function(a){return _.keys(a.data).sort()}),r=(new Date).getTime(),i=this.intersection(m);for(t=0,v=i.length;t<v;t++){l=i[t],o={},x=this.boxes;for(a in x)b=x[a],o[a]=b.data[l];this.rows.push(o)}s=(new Date).getTime(),this.cube=crossfilter(this.rows),g=function(a,b,c,d){var e,f;return f=5*(b-a)/c,e=d3.scale.pow().exponent(d).range([a/f,b/f]).domain([a/f,b/f]),function(a){return f*e.invert(Math.floor(e(+a/f)))}},h={},this.charts={},c=function(a,b){return function(){return a.event_click(),b.renderCubes()}},y=this.boxes;for(a in y){b=y[a];var d,k,j;k=b,j=a,e=this.cube.dimension(function(b){return b[a]}),f=e.group(g(b.config.data.interval[0],b.config.data.interval[1],this.width-20,b.config.data.exponent)),b.graph.empty(),p=d3.scale.linear().clamp(!0).range([20,0]),d=barChart().dimension(e).name_id(a).group(f).x(d3.scale.pow().exponent(b.config.data.exponent).domain(b.config.data.interval).rangeRound([0,this.width-20])).y(p.copy()).ticks(b.config.data.ticks).tickFormat(b.config.format.axis(b.config)).fill(b.config.data.colorscale),d.on("brush",c(b,this)),d.on("brushend",this.renderCubes),b.chart=d,this.charts[a]=d}this.parent.ds.isGeoLoaded&&this.renderCubes(),z=this.config.defaults.order;for(u=0,w=z.length;u<w;u++)n=z[u],this.config.dimensions[n].filter&&this.boxes[n].setFilter(this.config.dimensions[n].filter,!0);return this},b.prototype.renderCubes=function(){var a,b,c,d;d=this.boxes;for(b in d)c=d[b],c.chart(c.graph),$(c.el).on("mousedown",c.event_click),c.setFilter(c.chart.filter(),!1);return a=this.boxes[this.active],a.setFilter(a.chart.filter(),!1),this.renderMap(),this},b}(Backbone.View),crosslet.BoxView=function(a){function b(){this.setFilter=__bind(this.setFilter,this),this.event_click=__bind(this.event_click,this),this.setActive=__bind(this.setActive,this),this.dataLoaded=__bind(this.dataLoaded,this),b.__super__.constructor.apply(this,arguments)}return __extends(b,a),b.prototype.initialize=function(a,b,c,d){return this.el=a,this.config=crosslet.createConfig(crosslet.defaultDimensionConfig,b),this.config.id=d,this.config.data.field_func=_.isFunction(this.config.data.field)?this.config.data.field:function(a){return a.data.field},$(this.el).on("mousedown",this.event_click),$(this.el).on("tap",this.event_click),$(this.el)[0].onmousedown=$(this.el)[0].ondblclick=L.DomEvent.stopPropagation,this.legend={},this.legend.all=$("<div class='legend'></div>"),this.legend.text=$("<div class='legendText'></div>"),this.legend.text_p=$("<div class='legendText'></div>"),this.legend.text_range=$("<div class='legendRange'></div>"),this.legend.text.append(this.legend.text_p).append(this.legend.text_range),this.legend.form=$("<div class='legendForm'></div>"),this.legend.form_p=$("<div class='legendForm_p'></div>"),this.legend.form_range=$("<div class='legendForm_range'></div>"),this.legend.form.append(this.legend.form_p).append(this.legend.form_range),this.legend.all.append(this.legend.text).append(this.legend.form),$(a).append(this.legend.all),this.graph=$("<div class='graph'></div>"),$(a).append(this.graph),this.parent=c,this.ds=c.ds,this.active=!1,this.name=d,this.loadData()},b.prototype.loadData=function(){return _.isString(this.config.data.dataSet)?this.parent.ds.loadData(this.config.data.dataSet,this.dataLoaded,this.config.data.method):_.isFunction(this.config.data.dataSet)?this.parent.ds.loadData(this.config.data.dataSet(this.config),this.dataLoaded,this.config.data.method):this.parent.ds.addData(this.config.data.dataSet,this.dataLoaded)},b.prototype.dataLoaded=function(){var a,b,c,d,e;this.data={},a=this.config.data.field_func(this.config),c=this.config.data.preformat(this.config),e=this.parent.ds.data;for(b in e)d=e[b],_.isNumber(d[a])&&(this.data[b]=c(d[a]));return this.config.data.interval||(this.config.data.interval=[_.min(_.values(this.data)),_.max(_.values(this.data))]),this.config.filter||(this.config.filter=[_.min(_.values(this.data)),_.max(_.values(this.data))]),this.config.scale||(this.config.scale=d3.scale.quantize().domain(this.config.data.interval).range([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])),this.render(),this.parent.loaded()},b.prototype.setActive=function(a){return this.active=a,a?$(this.el).addClass("selected"):$(this.el).removeClass("selected")},b.prototype.event_click=function(a){return this.active||this.parent.setActive(this.name),!0},b.prototype.setFilter=function(a,b){return b==null&&(b=!1),b&&(this.chart.filter(a),this.parent.renderCubes()),a||(a=this.config.data.interval),this.config.filter=a,this.filterElements[0].val(this.config.format.input(this.config)(a[0])),this.filterElements[1].val(this.config.format.input(this.config)(a[1])),$(this.legend.text_range).find(".m0").text(this.config.format.short(this.config)(a[0])),$(this.legend.text_range).find(".m1").text(this.config.format.short(this.config)(a[1])),this},b.prototype.getFilteredData=function(){var a,b,c,d,e,f;if(!this.chart.filter())return this.data;a=(e=this.chart.filter())!=null?e:this.config.data.interval,c={},f=this.data;for(b in f)d=f[b],a[0]<=d&&d<=a[1]&&(c[b]=d);return c},b.prototype.renderRange=function(){return this.config.render.range(this.config,this.legend.text_range),this.config.render.rangeForm(this.config,this.legend.form_range)},b.prototype.render=function(){var a=this;return this.config.render.legend(this.config,this.legend.text_p),this.config.render.form(this.config,this.legend.form_p),this.renderRange(),$(this.legend.form_range).find("input").on("change",function(){var b;return b=[+a.filterElements[0].val(),+a.filterElements[1].val()],b[0]>b[1]&&b.reverse(),b[0]=_.max([a.config.data.interval[0],b[0]]),b[1]=_.min([a.config.data.interval[1],b[1]]),_.isEqual(b,a.config.data.interval)&&(b=null),a.setFilter(b,!0)}),$(this.legend.form_p).find("input, select").on("change",function(){var b;return a.config.data.interval=null,a.config.scale=null,a.config.filter=null,b=a.config.submitter(a.config,a.legend.form_p),a.config.p=b,console.log(b),a.loadData()}),this.filterElements=[$(this.legend.form_range).find("input[name=m0]"),$(this.legend.form_range).find("input[name=m1]")]},b}(Backbone.View);var __bind=function(a,b){return function(){return a.apply(b,arguments)}},__hasProp=Object.prototype.hasOwnProperty,__extends=function(a,b){function d(){this.constructor=a}for(var c in b)__hasProp.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};crosslet.MapView=function(a){function b(){this._renderMap=__bind(this._renderMap,this),this.hover=__bind(this.hover,this),this.moveMove=__bind(this.moveMove,this),this.reset=__bind(this.reset,this),this.beforezoom=__bind(this.beforezoom,this),this.project=__bind(this.project,this),b.__super__.constructor.apply(this,arguments)}return __extends(b,a),b.prototype.initialize=function(a,b){var c=this;return this.config=crosslet.createConfig(crosslet.defaultConfig,b),this.geoURL=this.config.map.geo.url,this.opacity=this.config.defaults.opacity,this.ds=new crosslet.DataStore(this.config),this.el=a,this.hoverFunc=this.default_hover,$(this.el).attr("class","crosslet"),this.map=L.map(a[0]).setView(this.config.map.view.center,this.config.map.view.zoom),L.tileLayer("http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png",this.config.map.leaflet).addTo(this.map),this.control=$("<div class='crosslet_panel'></div>"),this.info=L.Control.extend({options:{position:"topright"},onAdd:function(a){return c.control[0]}}),this.map.addControl(new this.info),this.panel=new crosslet.PanelView(this.control,this.config,this),this.renderMap=this._renderMap,this.ds.loadGeo(this.geoURL,this.config.map.geo.id_field,function(a){c.bounds=c.ds.bounds,c.path=d3.geo.path().projection(c.project),c.svg=d3.select(c.map.getPanes().overlayPane).append("svg"),c.g=c.svg.append("g"),c.g.attr("class","crosslet_geometry"),c.feature=c.g.selectAll("path").data(a.geometries).enter().append("path").attr("id",function(a){return"path_"+a.properties[c.config.map.geo.
id_field]}).on("mouseover",function(a){return c.hover(a)}).on("mousemove",c.moveMove),c.reset(),c.map.on("viewreset",c.reset),c.map.on("zoomstart",c.beforezoom),c.hoverElement=c.svg.append("g").attr("class","hover"),c.hoverElementRect=c.hoverElement.append("svg:rect").attr("x",0).attr("y",0).attr("width",10).attr("height",30).attr("rx",5).attr("ry",5),c.hoverElementText=c.hoverElement.append("text").attr("x",0).attr("y",0),c.hoverElementTextBB={width:0,height:0,x:0,y:0};if(c.panel.numloads<=0)return c.panel.createCube()},this.config.map.geo.topo_object)},b.prototype.project=function(a){var b;return b=this.map.latLngToLayerPoint(new L.LatLng(a[1],a[0])),[b.x,b.y]},b.prototype.beforezoom=function(){return this.g.style("display","none")},b.prototype.reset=function(){var a,b;return a=this.project(this.bounds[0]),b=this.project(this.bounds[1]),this.svg.attr("width",b[0]-a[0]).attr("height",a[1]-b[1]).style("margin-left",a[0]+"px").style("margin-top",b[1]+"px"),this.g.attr("transform","translate("+ -a[0]+","+ -b[1]+")"),this.feature.attr("d",this.path),this.g.style("display","inline"),!0},b.prototype.moveMove=function(){var a,b,c,d,e,f;return a=jQuery.browser,e=d3.mouse(this.svg.node()),a.mozilla&&(f=this.svg.node().parentNode.parentNode.parentNode,d=$(f).css("transform").split("(")[1].split(")")[0].split(","),b=+d[4],c=+d[5],e[0]-=b,e[1]-=c),e[0]+=30,e[1]+=30,this.hoverElementTextBB.width+e[0]>=this.svg.attr("width")&&(e[0]-=this.hoverElementTextBB.width+60),this.hoverElementTextBB.height+e[1]>=this.svg.attr("height")&&(e[1]-=this.hoverElementTextBB.height+60),this.hoverElement.attr("transform","translate("+e[0]+","+e[1]+")")},b.prototype.hover=function(a){var b;return b=this.hoverFunc(a,a.properties.value),this.hoverElementText.text(b),this.hoverElementTextBB=this.hoverElementText.node().getBBox(),this.hoverElementRect.attr("width",this.hoverElementTextBB.width+10).attr("height",this.hoverElementTextBB.height+10).attr("x",this.hoverElementTextBB.x-5).attr("y",this.hoverElementTextBB.y-5)},b.prototype.default_hover=function(a,b){return a.properties[this.config.map.geo.name_field]+" - "+b},b.prototype._renderMap=function(a,b,c){var d=this;return c&&(this.hoverFunc=c),this.feature.attr("style",function(c){var e;return e=c.properties[d.config.map.geo.id_field],c.properties.value=a[e],_.isNumber(a[e])?"fill: "+b(c.properties.value):"display:none"}),this},b}(Backbone.View);