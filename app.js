/* Bug Bounty Wanderland. Includes three.js (MIT licence, see src/vendor/three/LICENSE). Built from src/ by build.mjs. */
var A0=0,zu=1,R0=2;var Ef=1,Nh=2,zi=3,us=0,gn=1,ln=2;var gi=0,ls=1,Wt=2,Bu=3,Ou=4,C0=5,Cs=100,P0=101,L0=102,Hu=103,ku=104,I0=200,D0=201,U0=202,N0=203,Wc=204,Xc=205,F0=206,z0=207,B0=208,O0=209,H0=210,k0=211,G0=212,V0=213,W0=214,X0=0,q0=1,Y0=2,Ua=3,$0=4,Z0=5,J0=6,K0=7,wf=0,j0=1,Q0=2,cs=0,em=1,tm=2,nm=3,Fh=4,im=5,sm=6;var Sf=300,Er=301,wr=302,qc=303,Yc=304,fl=306,uo=1e3,ii=1001,$c=1002,Tn=1003,Gu=1004;var oc=1005;var Vn=1006,rm=1007;var fo=1008;var hs=1009,om=1010,am=1011,zh=1012,Tf=1013,os=1014,as=1015,ri=1016,Af=1017,Rf=1018,Is=1020,lm=1021,si=1023,cm=1024,hm=1025,Ds=1026,Sr=1027,um=1028,Cf=1029,dm=1030,Pf=1031,Lf=1033,ac=33776,lc=33777,cc=33778,hc=33779,Vu=35840,Wu=35841,Xu=35842,qu=35843,If=36196,Yu=37492,$u=37496,Zu=37808,Ju=37809,Ku=37810,ju=37811,Qu=37812,ed=37813,td=37814,nd=37815,id=37816,sd=37817,rd=37818,od=37819,ad=37820,ld=37821,uc=36492,cd=36494,hd=36495,fm=36283,ud=36284,dd=36285,fd=36286;var Na=2300,Fa=2301,dc=2302,pd=2400,md=2401,gd=2402;var Df=3e3,Us=3001,pm=3200,mm=3201,Uf=0,gm=1,Wn="",It="srgb",Gi="srgb-linear",Bh="display-p3",pl="display-p3-linear",za="linear",Pt="srgb",Ba="rec709",Oa="p3";var Ks=7680;var xd=519,xm=512,ym=513,_m=514,Nf=515,vm=516,Mm=517,bm=518,Em=519,Zc=35044;var yd="300 es",Jc=1035,Hi=2e3,Ha=2001,ds=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fc=Math.PI/180,Kc=180/Math.PI;function ki(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function an(n,e,t){return Math.max(e,Math.min(t,n))}function wm(n,e){return(n%e+e)%e}function pc(n,e,t){return(1-t)*n+t*e}function _d(n){return(n&n-1)===0&&n!==0}function jc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Oi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function St(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ie=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],_=s[1],x=s[4],v=s[7],I=s[2],S=s[5],R=s[8];return r[0]=o*y+a*_+l*I,r[3]=o*m+a*x+l*S,r[6]=o*p+a*v+l*R,r[1]=c*y+h*_+u*I,r[4]=c*m+h*x+u*S,r[7]=c*p+h*v+u*R,r[2]=d*y+f*_+g*I,r[5]=d*m+f*x+g*S,r[8]=d*p+f*v+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*c-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mc.makeScale(e,t)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,t){return this.premultiply(mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mc=new lt;function Ff(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ka(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sm(){let n=ka("canvas");return n.style.display="block",n}var vd={};function oo(n){n in vd||(vd[n]=!0,console.warn(n))}var Md=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bd=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ta={[Gi]:{transfer:za,primaries:Ba,toReference:n=>n,fromReference:n=>n},[It]:{transfer:Pt,primaries:Ba,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[pl]:{transfer:za,primaries:Oa,toReference:n=>n.applyMatrix3(bd),fromReference:n=>n.applyMatrix3(Md)},[Bh]:{transfer:Pt,primaries:Oa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(bd),fromReference:n=>n.applyMatrix3(Md).convertLinearToSRGB()}},Tm=new Set([Gi,pl]),bt={enabled:!0,_workingColorSpace:Gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Tm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ta[e].toReference,s=ta[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ta[n].primaries},getTransfer:function(n){return n===Wn?za:ta[n].transfer}};function Mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var js,Ga=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{js===void 0&&(js=ka("canvas")),js.width=e.width,js.height=e.height;let i=js.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ka("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mr(t[i]/255)*255):t[i]=Mr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Am=0,Va=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=ki(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xc(s[o].image)):r.push(xc(s[o]))}else r=xc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function xc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ga.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rm=0,Xn=class n extends ds{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ii,s=ii,r=Vn,o=fo,a=si,l=hs,c=n.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=ki(),this.name="",this.source=new Va(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Us?It:Wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case $c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case $c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?Us:Df}set encoding(e){oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Us?It:Wn}};Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Sf;Xn.DEFAULT_ANISOTROPY=1;var Dt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,v=(f+1)/2,I=(p+1)/2,S=(h+d)/4,R=(u+y)/4,D=(g+m)/4;return x>v&&x>I?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=S/i,r=R/i):v>I?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=S/s,r=D/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=R/r,s=D/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qc=class extends ds{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(oo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Us?It:Wn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Xn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Va(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends Qc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Wa=class extends Xn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var eh=class extends Xn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(u!==y||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*y,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let I=Math.sqrt(x),S=Math.atan2(I,p*_);m=Math.sin(m*S)/I,a=Math.sin(a*S)/I}let v=a*_;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+y*v,m===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ed.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yc=new L,Ed=new oi,Vi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),na.copy(i.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),ia.subVectors(this.max,Jr),Qs.subVectors(e.a,Jr),er.subVectors(e.b,Jr),tr.subVectors(e.c,Jr),ts.subVectors(er,Qs),ns.subVectors(tr,er),ws.subVectors(Qs,tr);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-ws.z,ws.y,ts.z,0,-ts.x,ns.z,0,-ns.x,ws.z,0,-ws.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-ws.y,ws.x,0];return!_c(t,Qs,er,tr,ia)||(t=[1,0,0,0,1,0,0,0,1],!_c(t,Qs,er,tr,ia))?!1:(sa.crossVectors(ts,ns),t=[sa.x,sa.y,sa.z],_c(t,Qs,er,tr,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ii=[new L,new L,new L,new L,new L,new L,new L,new L],ei=new L,na=new Vi,Qs=new L,er=new L,tr=new L,ts=new L,ns=new L,ws=new L,Jr=new L,ia=new L,sa=new L,Ss=new L;function _c(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ss.fromArray(n,r);let a=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),l=e.dot(Ss),c=t.dot(Ss),h=i.dot(Ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Cm=new Vi,Kr=new L,vc=new L,Wi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Cm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);let t=Kr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Kr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(vc)),this.expandByPoint(Kr.copy(e.center).sub(vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Di=new L,Mc=new L,ra=new L,is=new L,bc=new L,oa=new L,Ec=new L,po=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Mc.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),is.copy(this.origin).sub(Mc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ra),a=is.dot(this.direction),l=-is.dot(ra),c=is.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Mc).addScaledVector(ra,d),f}intersectSphere(e,t){Di.subVectors(e.center,this.origin);let i=Di.dot(this.direction),s=Di.dot(Di)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,i,s,r){bc.subVectors(t,e),oa.subVectors(i,e),Ec.crossVectors(bc,oa);let o=this.direction.dot(Ec),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;is.subVectors(this.origin,e);let l=a*this.direction.dot(oa.crossVectors(is,oa));if(l<0)return null;let c=a*this.direction.dot(bc.cross(is));if(c<0||l+c>o)return null;let h=-a*is.dot(Ec);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_t=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,y,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/nr.setFromMatrixColumn(e,0).length(),r=1/nr.setFromMatrixColumn(e,1).length(),o=1/nr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d+y*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d-y*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pm,e,Lm)}lookAt(e,t,i){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),ss.crossVectors(i,Un),ss.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),ss.crossVectors(i,Un)),ss.normalize(),aa.crossVectors(Un,ss),s[0]=ss.x,s[4]=aa.x,s[8]=Un.x,s[1]=ss.y,s[5]=aa.y,s[9]=Un.y,s[2]=ss.z,s[6]=aa.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],_=i[3],x=i[7],v=i[11],I=i[15],S=s[0],R=s[4],D=s[8],M=s[12],A=s[1],N=s[5],W=s[9],re=s[13],P=s[2],U=s[6],O=s[10],J=s[14],$=s[3],X=s[7],te=s[11],Q=s[15];return r[0]=o*S+a*A+l*P+c*$,r[4]=o*R+a*N+l*U+c*X,r[8]=o*D+a*W+l*O+c*te,r[12]=o*M+a*re+l*J+c*Q,r[1]=h*S+u*A+d*P+f*$,r[5]=h*R+u*N+d*U+f*X,r[9]=h*D+u*W+d*O+f*te,r[13]=h*M+u*re+d*J+f*Q,r[2]=g*S+y*A+m*P+p*$,r[6]=g*R+y*N+m*U+p*X,r[10]=g*D+y*W+m*O+p*te,r[14]=g*M+y*re+m*J+p*Q,r[3]=_*S+x*A+v*P+I*$,r[7]=_*R+x*N+v*U+I*X,r[11]=_*D+x*W+v*O+I*te,r[15]=_*M+x*re+v*J+I*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+y*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],_=u*m*c-y*d*c+y*l*f-a*m*f-u*l*p+a*d*p,x=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,v=h*y*c-g*u*c+g*a*f-o*y*f-h*a*p+o*u*p,I=g*u*l-h*y*l-g*a*d+o*y*d+h*a*m-o*u*m,S=t*_+i*x+s*v+r*I;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/S;return e[0]=_*R,e[1]=(y*d*r-u*m*r-y*s*f+i*m*f+u*s*p-i*d*p)*R,e[2]=(a*m*r-y*l*r+y*s*c-i*m*c-a*s*p+i*l*p)*R,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*R,e[4]=x*R,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*R,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=v*R,e[9]=(g*u*r-h*y*r-g*i*f+t*y*f+h*i*p-t*u*p)*R,e[10]=(o*y*r-g*a*r+g*i*c-t*y*c-o*i*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*R,e[12]=I*R,e[13]=(h*y*s-g*u*s+g*i*d-t*y*d-h*i*m+t*u*m)*R,e[14]=(g*a*s-o*y*s-g*i*l+t*y*l+o*i*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,y=o*h,m=o*u,p=a*u,_=l*c,x=l*h,v=l*u,I=i.x,S=i.y,R=i.z;return s[0]=(1-(y+p))*I,s[1]=(f+v)*I,s[2]=(g-x)*I,s[3]=0,s[4]=(f-v)*S,s[5]=(1-(d+p))*S,s[6]=(m+_)*S,s[7]=0,s[8]=(g+x)*R,s[9]=(m-_)*R,s[10]=(1-(d+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=nr.set(s[0],s[1],s[2]).length(),o=nr.set(s[4],s[5],s[6]).length(),a=nr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ti.copy(this);let c=1/r,h=1/o,u=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=u,ti.elements[9]*=u,ti.elements[10]*=u,t.setFromRotationMatrix(ti),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Hi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(a===Hi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ha)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Hi){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,f=(i+s)*h,g,y;if(a===Hi)g=(o+r)*u,y=-2*u;else if(a===Ha)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},nr=new L,ti=new _t,Pm=new L(0,0,0),Lm=new L(1,1,1),ss=new L,aa=new L,Un=new L,wd=new _t,Sd=new oi,Tr=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sd.setFromEuler(this),this.setFromQuaternion(Sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tr.DEFAULT_ORDER="XYZ";var Xa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Im=0,Td=new L,ir=new oi,Ui=new _t,la=new L,jr=new L,Dm=new L,Um=new oi,Ad=new L(1,0,0),Rd=new L(0,1,0),Cd=new L(0,0,1),Nm={type:"added"},Fm={type:"removed"},Xt=class n extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new Tr,i=new oi,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new lt}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(Ad,e)}rotateY(e){return this.rotateOnAxis(Rd,e)}rotateZ(e){return this.rotateOnAxis(Cd,e)}translateOnAxis(e,t){return Td.copy(e).applyQuaternion(this.quaternion),this.position.add(Td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ad,e)}translateY(e){return this.translateOnAxis(Rd,e)}translateZ(e){return this.translateOnAxis(Cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?la.copy(e):la.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(jr,la,this.up):Ui.lookAt(la,jr,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(Ui),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,Dm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,Um,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Xt.DEFAULT_UP=new L(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ni=new L,Ni=new L,wc=new L,Fi=new L,sr=new L,rr=new L,Pd=new L,Sc=new L,Tc=new L,Ac=new L,ca=!1,Ls=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ni.subVectors(e,t),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ni.subVectors(s,t),Ni.subVectors(i,t),wc.subVectors(e,t);let o=ni.dot(ni),a=ni.dot(Ni),l=ni.dot(wc),c=Ni.dot(Ni),h=Ni.dot(wc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getUV(e,t,i,s,r,o,a,l){return ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ca=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static isFrontFacing(e,t,i,s){return ni.subVectors(i,t),Ni.subVectors(e,t),ni.cross(Ni).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ni.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ca=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;sr.subVectors(s,i),rr.subVectors(r,i),Sc.subVectors(e,i);let l=sr.dot(Sc),c=rr.dot(Sc);if(l<=0&&c<=0)return t.copy(i);Tc.subVectors(e,s);let h=sr.dot(Tc),u=rr.dot(Tc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(sr,o);Ac.subVectors(e,r);let f=sr.dot(Ac),g=rr.dot(Ac);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(rr,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Pd.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Pd,a);let p=1/(m+y+d);return o=y*p,a=d*p,t.copy(i).addScaledVector(sr,o).addScaledVector(rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Rc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ve=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,bt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=bt.workingColorSpace){if(e=wm(e,1),t=an(t,0,1),i=an(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Rc(o,r,e+1/3),this.g=Rc(o,r,e),this.b=Rc(o,r,e-1/3)}return bt.toWorkingColorSpace(this,s),this}setStyle(e,t=It){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let i=zf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=gc(e.r),this.g=gc(e.g),this.b=gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return bt.fromWorkingColorSpace(pn.copy(this),e),Math.round(an(pn.r*255,0,255))*65536+Math.round(an(pn.g*255,0,255))*256+Math.round(an(pn.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(pn.copy(this),t);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=It){bt.fromWorkingColorSpace(pn.copy(this),e);let t=pn.r,i=pn.g,s=pn.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(ha);let i=pc(rs.h,ha.h,t),s=pc(rs.s,ha.s,t),r=pc(rs.l,ha.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new ve;ve.NAMES=zf;var zm=0,xi=class extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=ls,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=Xc,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==us&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wc&&(i.blendSrc=this.blendSrc),this.blendDst!==Xc&&(i.blendDst=this.blendDst),this.blendEquation!==Cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mt=class extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var jt=new L,ua=new ie,Et=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=as,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}};var Ns=class extends Et{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var qa=class extends Et{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var qe=class extends Et{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Bm=0,Gn=new _t,Cc=new Xt,or=new L,Nn=new Vi,Qr=new Vi,on=new L,pt=class n extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ff(e)?qa:Ns)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new lt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Nn.min,Qr.min),Nn.expandByPoint(on),on.addVectors(Nn.max,Qr.max),Nn.expandByPoint(on)):(Nn.expandByPoint(Qr.min),Nn.expandByPoint(Qr.max))}Nn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)on.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(e,c),on.add(or)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<a;A++)c[A]=new L,h[A]=new L;let u=new L,d=new L,f=new L,g=new ie,y=new ie,m=new ie,p=new L,_=new L;function x(A,N,W){u.fromArray(s,A*3),d.fromArray(s,N*3),f.fromArray(s,W*3),g.fromArray(o,A*2),y.fromArray(o,N*2),m.fromArray(o,W*2),d.sub(u),f.sub(u),y.sub(g),m.sub(g);let re=1/(y.x*m.y-m.x*y.y);isFinite(re)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-y.y).multiplyScalar(re),_.copy(f).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(re),c[A].add(p),c[N].add(p),c[W].add(p),h[A].add(_),h[N].add(_),h[W].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let A=0,N=v.length;A<N;++A){let W=v[A],re=W.start,P=W.count;for(let U=re,O=re+P;U<O;U+=3)x(i[U+0],i[U+1],i[U+2])}let I=new L,S=new L,R=new L,D=new L;function M(A){R.fromArray(r,A*3),D.copy(R);let N=c[A];I.copy(N),I.sub(R.multiplyScalar(R.dot(N))).normalize(),S.crossVectors(D,N);let re=S.dot(h[A])<0?-1:1;l[A*4]=I.x,l[A*4+1]=I.y,l[A*4+2]=I.z,l[A*4+3]=re}for(let A=0,N=v.length;A<N;++A){let W=v[A],re=W.start,P=W.count;for(let U=re,O=re+P;U<O;U+=3)M(i[U+0]),M(i[U+1]),M(i[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Et(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ld=new _t,Ts=new po,da=new Wi,Id=new L,ar=new L,lr=new L,cr=new L,Pc=new L,fa=new L,pa=new ie,ma=new ie,ga=new ie,Dd=new L,Ud=new L,Nd=new L,xa=new L,ya=new L,pe=class extends Xt{constructor(e=new pt,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Pc.fromBufferAttribute(u,e),o?fa.addScaledVector(Pc,h):fa.addScaledVector(Pc.sub(t),h))}t.add(fa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(r),Ts.copy(e.ray).recast(e.near),!(da.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(da,Id)===null||Ts.origin.distanceToSquared(Id)>(e.far-e.near)**2))&&(Ld.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(Ld),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,I=x;v<I;v+=3){let S=a.getX(v),R=a.getX(v+1),D=a.getX(v+2);s=_a(this,p,e,i,c,h,u,S,R,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let _=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=_a(this,o,e,i,c,h,u,_,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,I=x;v<I;v+=3){let S=v,R=v+1,D=v+2;s=_a(this,p,e,i,c,h,u,S,R,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let _=m,x=m+1,v=m+2;s=_a(this,o,e,i,c,h,u,_,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Om(n,e,t,i,s,r,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===us,a),l===null)return null;ya.copy(a),ya.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ya);return c<t.near||c>t.far?null:{distance:c,point:ya.clone(),object:n}}function _a(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ar),n.getVertexPosition(l,lr),n.getVertexPosition(c,cr);let h=Om(n,e,t,i,ar,lr,cr,xa);if(h){s&&(pa.fromBufferAttribute(s,a),ma.fromBufferAttribute(s,l),ga.fromBufferAttribute(s,c),h.uv=Ls.getInterpolation(xa,ar,lr,cr,pa,ma,ga,new ie)),r&&(pa.fromBufferAttribute(r,a),ma.fromBufferAttribute(r,l),ga.fromBufferAttribute(r,c),h.uv1=Ls.getInterpolation(xa,ar,lr,cr,pa,ma,ga,new ie),h.uv2=h.uv1),o&&(Dd.fromBufferAttribute(o,a),Ud.fromBufferAttribute(o,l),Nd.fromBufferAttribute(o,c),h.normal=Ls.getInterpolation(xa,ar,lr,cr,Dd,Ud,Nd,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new L,materialIndex:0};Ls.getNormal(ar,lr,cr,u.normal),h.face=u}return h}var dt=class n extends pt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(u,2));function g(y,m,p,_,x,v,I,S,R,D,M){let A=v/R,N=I/D,W=v/2,re=I/2,P=S/2,U=R+1,O=D+1,J=0,$=0,X=new L;for(let te=0;te<O;te++){let Q=te*N-re;for(let ue=0;ue<U;ue++){let q=ue*A-W;X[y]=q*_,X[m]=Q*x,X[p]=P,c.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[p]=S>0?1:-1,h.push(X.x,X.y,X.z),u.push(ue/R),u.push(1-te/D),J+=1}}for(let te=0;te<D;te++)for(let Q=0;Q<R;Q++){let ue=d+Q+U*te,q=d+Q+U*(te+1),ne=d+(Q+1)+U*(te+1),de=d+(Q+1)+U*te;l.push(ue,q,de),l.push(q,ne,de),$+=6}a.addGroup(f,$,M),f+=$,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ar(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Sn(n){let e={};for(let t=0;t<n.length;t++){let i=Ar(n[t]);for(let s in i)e[s]=i[s]}return e}function Hm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bf(n){return n.getRenderTarget()===null?n.outputColorSpace:bt.workingColorSpace}var Dr={clone:Ar,merge:Sn},km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=km,this.fragmentShader=Gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=Hm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ya=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mn=class extends Ya{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Kc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kc*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hr=-90,ur=1,th=class extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(hr,ur,e,t);s.layers=this.layers,this.add(s);let r=new mn(hr,ur,e,t);r.layers=this.layers,this.add(r);let o=new mn(hr,ur,e,t);o.layers=this.layers,this.add(o);let a=new mn(hr,ur,e,t);a.layers=this.layers,this.add(a);let l=new mn(hr,ur,e,t);l.layers=this.layers,this.add(l);let c=new mn(hr,ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},$a=class extends Xn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nh=class extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(oo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Us?It:Wn),this.texture=new $a(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new dt(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:gi});r.uniforms.tEquirect.value=t;let o=new pe(s,r),a=t.minFilter;return t.minFilter===fo&&(t.minFilter=Vn),new th(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Lc=new L,Vm=new L,Wm=new lt,Bi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Lc.subVectors(i,t).cross(Vm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Lc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Wm.getNormalMatrix(e),s=this.coplanarPoint(Lc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},As=new Wi,va=new L,mo=class{constructor(e=new Bi,t=new Bi,i=new Bi,s=new Bi,r=new Bi,o=new Bi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],_=s[13],x=s[14],v=s[15];if(i[0].setComponents(l-r,d-c,m-f,v-p).normalize(),i[1].setComponents(l+r,d+c,m+f,v+p).normalize(),i[2].setComponents(l+o,d+h,m+g,v+_).normalize(),i[3].setComponents(l-o,d-h,m-g,v-_).normalize(),i[4].setComponents(l-a,d-u,m-y,v-x).normalize(),t===Hi)i[5].setComponents(l+a,d+u,m+y,v+x).normalize();else if(t===Ha)i[5].setComponents(a,u,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){return As.center.set(0,0,0),As.radius=.7071067811865476,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(va.x=s.normal.x>0?e.max.x:e.min.x,va.y=s.normal.y>0?e.max.y:e.min.y,va.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Of(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Xm(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let y;if(u instanceof Float32Array)y=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=n.SHORT;else if(u instanceof Uint32Array)y=n.UNSIGNED_INT;else if(u instanceof Int32Array)y=n.INT;else if(u instanceof Int8Array)y=n.BYTE;else if(u instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),f.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let y=0,m=g.length;y<m;y++){let p=g[y];t?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var qn=class n extends pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let _=p*d-o;for(let x=0;x<c;x++){let v=x*u-r;g.push(v,-_,0),y.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let x=_+c*p,v=_+c*(p+1),I=_+1+c*(p+1),S=_+1+c*p;f.push(x,v,S),f.push(v,I,S)}this.setIndex(f),this.setAttribute("position",new qe(g,3)),this.setAttribute("normal",new qe(y,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ym=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,og=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ug=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Og=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$g=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ax=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,px=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ax=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Px=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ix=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ux=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ox=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Qx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ey=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ry=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ay=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ly=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,py=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,my=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,My=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ey=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:qm,alphahash_pars_fragment:Ym,alphamap_fragment:$m,alphamap_pars_fragment:Zm,alphatest_fragment:Jm,alphatest_pars_fragment:Km,aomap_fragment:jm,aomap_pars_fragment:Qm,batching_pars_vertex:eg,batching_vertex:tg,begin_vertex:ng,beginnormal_vertex:ig,bsdfs:sg,iridescence_fragment:rg,bumpmap_pars_fragment:og,clipping_planes_fragment:ag,clipping_planes_pars_fragment:lg,clipping_planes_pars_vertex:cg,clipping_planes_vertex:hg,color_fragment:ug,color_pars_fragment:dg,color_pars_vertex:fg,color_vertex:pg,common:mg,cube_uv_reflection_fragment:gg,defaultnormal_vertex:xg,displacementmap_pars_vertex:yg,displacementmap_vertex:_g,emissivemap_fragment:vg,emissivemap_pars_fragment:Mg,colorspace_fragment:bg,colorspace_pars_fragment:Eg,envmap_fragment:wg,envmap_common_pars_fragment:Sg,envmap_pars_fragment:Tg,envmap_pars_vertex:Ag,envmap_physical_pars_fragment:Og,envmap_vertex:Rg,fog_vertex:Cg,fog_pars_vertex:Pg,fog_fragment:Lg,fog_pars_fragment:Ig,gradientmap_pars_fragment:Dg,lightmap_fragment:Ug,lightmap_pars_fragment:Ng,lights_lambert_fragment:Fg,lights_lambert_pars_fragment:zg,lights_pars_begin:Bg,lights_toon_fragment:Hg,lights_toon_pars_fragment:kg,lights_phong_fragment:Gg,lights_phong_pars_fragment:Vg,lights_physical_fragment:Wg,lights_physical_pars_fragment:Xg,lights_fragment_begin:qg,lights_fragment_maps:Yg,lights_fragment_end:$g,logdepthbuf_fragment:Zg,logdepthbuf_pars_fragment:Jg,logdepthbuf_pars_vertex:Kg,logdepthbuf_vertex:jg,map_fragment:Qg,map_pars_fragment:ex,map_particle_fragment:tx,map_particle_pars_fragment:nx,metalnessmap_fragment:ix,metalnessmap_pars_fragment:sx,morphcolor_vertex:rx,morphnormal_vertex:ox,morphtarget_pars_vertex:ax,morphtarget_vertex:lx,normal_fragment_begin:cx,normal_fragment_maps:hx,normal_pars_fragment:ux,normal_pars_vertex:dx,normal_vertex:fx,normalmap_pars_fragment:px,clearcoat_normal_fragment_begin:mx,clearcoat_normal_fragment_maps:gx,clearcoat_pars_fragment:xx,iridescence_pars_fragment:yx,opaque_fragment:_x,packing:vx,premultiplied_alpha_fragment:Mx,project_vertex:bx,dithering_fragment:Ex,dithering_pars_fragment:wx,roughnessmap_fragment:Sx,roughnessmap_pars_fragment:Tx,shadowmap_pars_fragment:Ax,shadowmap_pars_vertex:Rx,shadowmap_vertex:Cx,shadowmask_pars_fragment:Px,skinbase_vertex:Lx,skinning_pars_vertex:Ix,skinning_vertex:Dx,skinnormal_vertex:Ux,specularmap_fragment:Nx,specularmap_pars_fragment:Fx,tonemapping_fragment:zx,tonemapping_pars_fragment:Bx,transmission_fragment:Ox,transmission_pars_fragment:Hx,uv_pars_fragment:kx,uv_pars_vertex:Gx,uv_vertex:Vx,worldpos_vertex:Wx,background_vert:Xx,background_frag:qx,backgroundCube_vert:Yx,backgroundCube_frag:$x,cube_vert:Zx,cube_frag:Jx,depth_vert:Kx,depth_frag:jx,distanceRGBA_vert:Qx,distanceRGBA_frag:ey,equirect_vert:ty,equirect_frag:ny,linedashed_vert:iy,linedashed_frag:sy,meshbasic_vert:ry,meshbasic_frag:oy,meshlambert_vert:ay,meshlambert_frag:ly,meshmatcap_vert:cy,meshmatcap_frag:hy,meshnormal_vert:uy,meshnormal_frag:dy,meshphong_vert:fy,meshphong_frag:py,meshphysical_vert:my,meshphysical_frag:gy,meshtoon_vert:xy,meshtoon_frag:yy,points_vert:_y,points_frag:vy,shadow_vert:My,shadow_frag:by,sprite_vert:Ey,sprite_frag:wy},ye={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},mi={basic:{uniforms:Sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ve(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Sn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Sn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ve(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Sn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Sn([ye.points,ye.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Sn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Sn([ye.common,ye.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Sn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Sn([ye.sprite,ye.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:Sn([ye.common,ye.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:Sn([ye.lights,ye.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};mi.physical={uniforms:Sn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Ma={r:0,b:0,g:0};function Sy(n,e,t,i,s,r,o){let a=new ve(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let _=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?y(a,l):x&&x.isColor&&(y(x,1),_=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===fl)?(h===void 0&&(h=new pe(new dt(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Ar(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=bt.getTransfer(x.colorSpace)!==Pt,(u!==x||d!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new pe(new qn(2,2),new en({name:"BackgroundMaterial",uniforms:Ar(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=bt.getTransfer(x.colorSpace)!==Pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,p){m.getRGB(Ma,Bf(n)),i.buffers.color.setClear(Ma.r,Ma.g,Ma.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:g}}function Ty(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(P,U,O,J,$){let X=!1;if(o){let te=y(J,O,U);c!==te&&(c=te,f(c.object)),X=p(P,J,O,$),X&&_(P,J,O,$)}else{let te=U.wireframe===!0;(c.geometry!==J.id||c.program!==O.id||c.wireframe!==te)&&(c.geometry=J.id,c.program=O.id,c.wireframe=te,X=!0)}$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,D(P,U,O,J),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function y(P,U,O){let J=O.wireframe===!0,$=a[P.id];$===void 0&&($={},a[P.id]=$);let X=$[U.id];X===void 0&&(X={},$[U.id]=X);let te=X[J];return te===void 0&&(te=m(d()),X[J]=te),te}function m(P){let U=[],O=[],J=[];for(let $=0;$<s;$++)U[$]=0,O[$]=0,J[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:J,object:P,attributes:{},index:null}}function p(P,U,O,J){let $=c.attributes,X=U.attributes,te=0,Q=O.getAttributes();for(let ue in Q)if(Q[ue].location>=0){let ne=$[ue],de=X[ue];if(de===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),ne===void 0||ne.attribute!==de||de&&ne.data!==de.data)return!0;te++}return c.attributesNum!==te||c.index!==J}function _(P,U,O,J){let $={},X=U.attributes,te=0,Q=O.getAttributes();for(let ue in Q)if(Q[ue].location>=0){let ne=X[ue];ne===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));let de={};de.attribute=ne,ne&&ne.data&&(de.data=ne.data),$[ue]=de,te++}c.attributes=$,c.attributesNum=te,c.index=J}function x(){let P=c.newAttributes;for(let U=0,O=P.length;U<O;U++)P[U]=0}function v(P){I(P,0)}function I(P,U){let O=c.newAttributes,J=c.enabledAttributes,$=c.attributeDivisors;O[P]=1,J[P]===0&&(n.enableVertexAttribArray(P),J[P]=1),$[P]!==U&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),$[P]=U)}function S(){let P=c.newAttributes,U=c.enabledAttributes;for(let O=0,J=U.length;O<J;O++)U[O]!==P[O]&&(n.disableVertexAttribArray(O),U[O]=0)}function R(P,U,O,J,$,X,te){te===!0?n.vertexAttribIPointer(P,U,O,$,X):n.vertexAttribPointer(P,U,O,J,$,X)}function D(P,U,O,J){if(i.isWebGL2===!1&&(P.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let $=J.attributes,X=O.getAttributes(),te=U.defaultAttributeValues;for(let Q in X){let ue=X[Q];if(ue.location>=0){let q=$[Q];if(q===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(q=P.instanceColor)),q!==void 0){let ne=q.normalized,de=q.itemSize,_e=t.get(q);if(_e===void 0)continue;let me=_e.buffer,Le=_e.type,De=_e.bytesPerElement,we=i.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||q.gpuType===Tf);if(q.isInterleavedBufferAttribute){let Ue=q.data,T=Ue.stride,B=q.offset;if(Ue.isInstancedInterleavedBuffer){for(let z=0;z<ue.locationSize;z++)I(ue.location+z,Ue.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let z=0;z<ue.locationSize;z++)v(ue.location+z);n.bindBuffer(n.ARRAY_BUFFER,me);for(let z=0;z<ue.locationSize;z++)R(ue.location+z,de/ue.locationSize,Le,ne,T*De,(B+de/ue.locationSize*z)*De,we)}else{if(q.isInstancedBufferAttribute){for(let Ue=0;Ue<ue.locationSize;Ue++)I(ue.location+Ue,q.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ue=0;Ue<ue.locationSize;Ue++)v(ue.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,me);for(let Ue=0;Ue<ue.locationSize;Ue++)R(ue.location+Ue,de/ue.locationSize,Le,ne,de*De,de/ue.locationSize*Ue*De,we)}}else if(te!==void 0){let ne=te[Q];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(ue.location,ne);break;case 3:n.vertexAttrib3fv(ue.location,ne);break;case 4:n.vertexAttrib4fv(ue.location,ne);break;default:n.vertexAttrib1fv(ue.location,ne)}}}}S()}function M(){W();for(let P in a){let U=a[P];for(let O in U){let J=U[O];for(let $ in J)g(J[$].object),delete J[$];delete U[O]}delete a[P]}}function A(P){if(a[P.id]===void 0)return;let U=a[P.id];for(let O in U){let J=U[O];for(let $ in J)g(J[$].object),delete J[$];delete U[O]}delete a[P.id]}function N(P){for(let U in a){let O=a[U];if(O[P.id]===void 0)continue;let J=O[P.id];for(let $ in J)g(J[$].object),delete J[$];delete O[P.id]}}function W(){re(),h=!0,c!==l&&(c=l,f(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:W,resetDefaultState:re,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:v,disableUnusedAttributes:S}}function Ay(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ry(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,v=o||e.has("OES_texture_float"),I=x&&v,S=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:I,maxSamples:S}}function Cy(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Bi,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:i,x=_*4,v=p.clippingState||null;l.value=v,v=h(g,d,x,f);for(let I=0;I!==x;++I)v[I]=t[I];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==y;++x,v+=4)o.copy(u[x]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Py(n){let e=new WeakMap;function t(o,a){return a===qc?o.mapping=Er:a===Yc&&(o.mapping=wr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===qc||a===Yc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new nh(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Rr=class extends Ya{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yr=4,Fd=[.125,.215,.35,.446,.526,.582],Ps=20,Ic=new Rr,zd=new ve,Dc=null,Uc=0,Nc=0,Rs=(1+Math.sqrt(5))/2,dr=1/Rs,Bd=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Rs,dr),new L(0,Rs,-dr),new L(dr,0,Rs),new L(-dr,0,Rs),new L(Rs,dr,0),new L(-Rs,dr,0)],Cr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dc,Uc,Nc),e.scissorTest=!1,ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:ri,format:si,colorSpace:Gi,depthBuffer:!1},s=Od(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Od(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ly(r)),this._blurMaterial=Iy(r,e,t)}return s}_compileMaterial(e){let t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,Ic)}_sceneToCubeUV(e,t,i,s){let a=new mn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zd),h.toneMapping=cs,h.autoClear=!1;let f=new mt({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new pe(new dt,f),y=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,y=!0):(f.color.copy(zd),y=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let x=this._cubeSize;ba(s,_*x,p>2?x:0,x,x),h.setRenderTarget(s),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Er||e.mapping===wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ba(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ic)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bd[(s-1)%Bd.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new pe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ps-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Ps;m>Ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ps}`);let p=[],_=0;for(let R=0;R<Ps;++R){let D=R/y,M=Math.exp(-D*D/2);p.push(M),R===0?_+=M:R<m&&(_+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;let v=this._sizeLods[s],I=3*v*(s>x-yr?s-x+yr:0),S=4*(this._cubeSize-v);ba(t,I,S,3*v,2*v),l.setRenderTarget(t),l.render(u,Ic)}};function Ly(n){let e=[],t=[],i=[],s=n,r=n-yr+1+Fd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-yr?l=Fd[o-n+yr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,_=new Float32Array(y*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let S=0;S<f;S++){let R=S%3*2/3-1,D=S>2?0:-1,M=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];_.set(M,y*g*S),x.set(d,m*g*S);let A=[S,S,S,S,S,S];v.set(A,p*g*S)}let I=new pt;I.setAttribute("position",new Et(_,y)),I.setAttribute("uv",new Et(x,m)),I.setAttribute("faceIndex",new Et(v,p)),e.push(I),s>yr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Od(n,e,t){let i=new An(n,e,t);return i.texture.mapping=fl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ba(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Iy(n,e,t){let i=new Float32Array(Ps),s=new L(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Hd(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function kd(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Oh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===qc||l===Yc,h=l===Er||l===wr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Cr(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Cr(n));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Uy(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ny(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)e.update(y[m],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(f!==null){let _=f.array;y=f.version;for(let x=0,v=_.length;x<v;x+=3){let I=_[x+0],S=_[x+1],R=_[x+2];d.push(I,S,S,R,R,I)}}else if(g!==void 0){let _=g.array;y=g.version;for(let x=0,v=_.length/3-1;x<v;x+=3){let I=x+0,S=x+1,R=x+2;d.push(I,S,S,R,R,I)}}else return;let m=new(Ff(d)?qa:Ns)(d,1);m.version=y;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Fy(n,e,t,i){let s=i.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,g){n.drawElements(r,g,a,f*l),t.update(g,r,1)}function u(f,g,y){if(y===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*l,y),t.update(g,r,y)}function d(f,g,y){if(y===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<y;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,y);let p=0;for(let _=0;_<y;_++)p+=g[_];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function zy(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function By(n,e){return n[0]-e[0]}function Oy(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Hy(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Dt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,y=r.get(h);if(y===void 0||y.count!==g){let P=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",P)};y!==void 0&&y.texture.dispose();let _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],D=0;_===!0&&(D=1),x===!0&&(D=2),v===!0&&(D=3);let M=h.attributes.position.count*D,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let N=new Float32Array(M*A*4*g),W=new Wa(N,M,A,g);W.type=as,W.needsUpdate=!0;let re=D*4;for(let U=0;U<g;U++){let O=I[U],J=S[U],$=R[U],X=M*A*4*U;for(let te=0;te<O.count;te++){let Q=te*re;_===!0&&(o.fromBufferAttribute(O,te),N[X+Q+0]=o.x,N[X+Q+1]=o.y,N[X+Q+2]=o.z,N[X+Q+3]=0),x===!0&&(o.fromBufferAttribute(J,te),N[X+Q+4]=o.x,N[X+Q+5]=o.y,N[X+Q+6]=o.z,N[X+Q+7]=0),v===!0&&(o.fromBufferAttribute($,te),N[X+Q+8]=o.x,N[X+Q+9]=o.y,N[X+Q+10]=o.z,N[X+Q+11]=$.itemSize===4?o.w:1)}}y={count:g,texture:W,size:new ie(M,A)},r.set(h,y),h.addEventListener("dispose",P)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];i[h.id]=g}for(let x=0;x<f;x++){let v=g[x];v[0]=x,v[1]=d[x]}g.sort(Oy);for(let x=0;x<8;x++)x<f&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(By);let y=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let v=a[x],I=v[0],S=v[1];I!==Number.MAX_SAFE_INTEGER&&S?(y&&h.getAttribute("morphTarget"+x)!==y[I]&&h.setAttribute("morphTarget"+x,y[I]),m&&h.getAttribute("morphNormal"+x)!==m[I]&&h.setAttribute("morphNormal"+x,m[I]),s[x]=S,p+=S):(y&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let _=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",_),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function ky(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Za=class extends Xn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Ds,h!==Ds&&h!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ds&&(i=os),i===void 0&&h===Sr&&(i=Is),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Hf=new Xn,kf=new Za(1,1);kf.compareFunction=Nf;var Gf=new Wa,Vf=new eh,Wf=new $a,Gd=[],Vd=[],Wd=new Float32Array(16),Xd=new Float32Array(9),qd=new Float32Array(4);function Ur(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Gd[s];if(r===void 0&&(r=new Float32Array(s),Gd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ml(n,e){let t=Vd[e];t===void 0&&(t=new Int32Array(e),Vd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Gy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Vy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function Wy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function Xy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function qy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;qd.set(i),n.uniformMatrix2fv(this.addr,!1,qd),nn(t,i)}}function Yy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Xd.set(i),n.uniformMatrix3fv(this.addr,!1,Xd),nn(t,i)}}function $y(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Wd.set(i),n.uniformMatrix4fv(this.addr,!1,Wd),nn(t,i)}}function Zy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Jy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2iv(this.addr,e),nn(t,e)}}function Ky(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3iv(this.addr,e),nn(t,e)}}function jy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4iv(this.addr,e),nn(t,e)}}function Qy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function e_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2uiv(this.addr,e),nn(t,e)}}function t_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3uiv(this.addr,e),nn(t,e)}}function n_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4uiv(this.addr,e),nn(t,e)}}function i_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?kf:Hf;t.setTexture2D(e||r,s)}function s_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Vf,s)}function r_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Wf,s)}function o_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Gf,s)}function a_(n){switch(n){case 5126:return Gy;case 35664:return Vy;case 35665:return Wy;case 35666:return Xy;case 35674:return qy;case 35675:return Yy;case 35676:return $y;case 5124:case 35670:return Zy;case 35667:case 35671:return Jy;case 35668:case 35672:return Ky;case 35669:case 35673:return jy;case 5125:return Qy;case 36294:return e_;case 36295:return t_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return o_}}function l_(n,e){n.uniform1fv(this.addr,e)}function c_(n,e){let t=Ur(e,this.size,2);n.uniform2fv(this.addr,t)}function h_(n,e){let t=Ur(e,this.size,3);n.uniform3fv(this.addr,t)}function u_(n,e){let t=Ur(e,this.size,4);n.uniform4fv(this.addr,t)}function d_(n,e){let t=Ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function f_(n,e){let t=Ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function p_(n,e){let t=Ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function m_(n,e){n.uniform1iv(this.addr,e)}function g_(n,e){n.uniform2iv(this.addr,e)}function x_(n,e){n.uniform3iv(this.addr,e)}function y_(n,e){n.uniform4iv(this.addr,e)}function __(n,e){n.uniform1uiv(this.addr,e)}function v_(n,e){n.uniform2uiv(this.addr,e)}function M_(n,e){n.uniform3uiv(this.addr,e)}function b_(n,e){n.uniform4uiv(this.addr,e)}function E_(n,e,t){let i=this.cache,s=e.length,r=ml(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Hf,r[o])}function w_(n,e,t){let i=this.cache,s=e.length,r=ml(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Vf,r[o])}function S_(n,e,t){let i=this.cache,s=e.length,r=ml(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Wf,r[o])}function T_(n,e,t){let i=this.cache,s=e.length,r=ml(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Gf,r[o])}function A_(n){switch(n){case 5126:return l_;case 35664:return c_;case 35665:return h_;case 35666:return u_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return x_;case 35669:case 35673:return y_;case 5125:return __;case 36294:return v_;case 36295:return M_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return T_}}var ih=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=a_(t.type)}},sh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A_(t.type)}},rh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Fc=/(\w+)(\])?(\[|\.)?/g;function Yd(n,e){n.seq.push(e),n.map[e.id]=e}function R_(n,e,t){let i=n.name,s=i.length;for(Fc.lastIndex=0;;){let r=Fc.exec(i),o=Fc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yd(t,c===void 0?new ih(a,n,e):new sh(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new rh(a),Yd(t,u)),t=u}}}var br=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);R_(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function $d(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var C_=37297,P_=0;function L_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function I_(n){let e=bt.getPrimaries(bt.workingColorSpace),t=bt.getPrimaries(n),i;switch(e===t?i="":e===Oa&&t===Ba?i="LinearDisplayP3ToLinearSRGB":e===Ba&&t===Oa&&(i="LinearSRGBToLinearDisplayP3"),n){case Gi:case pl:return[i,"LinearTransferOETF"];case It:case Bh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Zd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+L_(n.getShaderSource(e),o)}else return s}function D_(n,e){let t=I_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function U_(n,e){let t;switch(e){case em:t="Linear";break;case tm:t="Reinhard";break;case nm:t="OptimizedCineon";break;case Fh:t="ACESFilmic";break;case sm:t="AgX";break;case im:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function N_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function F_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_r).join(`
`)}function z_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function B_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function _r(n){return n!==""}function Jd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var O_=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(n){return n.replace(O_,k_)}var H_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function k_(n,e){let t=st[e];if(t===void 0){let i=H_.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return oh(t)}var G_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(n){return n.replace(G_,V_)}function V_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qd(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function W_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ef?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function X_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Er:case wr:e="ENVMAP_TYPE_CUBE";break;case fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===wr&&(e="ENVMAP_MODE_REFRACTION"),e}function Y_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wf:e="ENVMAP_BLENDING_MULTIPLY";break;case j0:e="ENVMAP_BLENDING_MIX";break;case Q0:e="ENVMAP_BLENDING_ADD";break}return e}function $_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Z_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=W_(t),c=X_(t),h=q_(t),u=Y_(t),d=$_(t),f=t.isWebGL2?"":N_(t),g=F_(t),y=z_(r),m=s.createProgram(),p,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(_r).join(`
`),p.length>0&&(p+=`
`),_=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(_r).join(`
`),_.length>0&&(_+=`
`)):(p=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),_=[f,Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cs?"#define TONE_MAPPING":"",t.toneMapping!==cs?st.tonemapping_pars_fragment:"",t.toneMapping!==cs?U_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,D_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),o=oh(o),o=Jd(o,t),o=Kd(o,t),a=oh(a),a=Jd(a,t),a=Kd(a,t),o=jd(o),a=jd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===yd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let v=x+p+o,I=x+_+a,S=$d(s,s.VERTEX_SHADER,v),R=$d(s,s.FRAGMENT_SHADER,I);s.attachShader(m,S),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function D(W){if(n.debug.checkShaderErrors){let re=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(S).trim(),U=s.getShaderInfoLog(R).trim(),O=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,S,R);else{let $=Zd(s,S,"vertex"),X=Zd(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+$+`
`+X)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(P===""||U==="")&&(J=!1);J&&(W.diagnostics={runnable:O,programLog:re,vertexShader:{log:P,prefix:p},fragmentShader:{log:U,prefix:_}})}s.deleteShader(S),s.deleteShader(R),M=new br(s,m),A=B_(s,m)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,C_)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=R,this}var J_=0,ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new lh(e),t.set(e,i)),i}},lh=class{constructor(e){this.id=J_++,this.code=e,this.usedTimes=0}};function K_(n,e,t,i,s,r,o){let a=new Xa,l=new ah,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,A,N,W,re){let P=W.fog,U=re.geometry,O=M.isMeshStandardMaterial?W.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),$=J&&J.mapping===fl?J.image.height:null,X=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let te=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Q=te!==void 0?te.length:0,ue=0;U.morphAttributes.position!==void 0&&(ue=1),U.morphAttributes.normal!==void 0&&(ue=2),U.morphAttributes.color!==void 0&&(ue=3);let q,ne,de,_e;if(X){let bn=mi[X];q=bn.vertexShader,ne=bn.fragmentShader}else q=M.vertexShader,ne=M.fragmentShader,l.update(M),de=l.getVertexShaderID(M),_e=l.getFragmentShaderID(M);let me=n.getRenderTarget(),Le=re.isInstancedMesh===!0,De=re.isBatchedMesh===!0,we=!!M.map,Ue=!!M.matcap,T=!!J,B=!!M.aoMap,z=!!M.lightMap,Y=!!M.bumpMap,G=!!M.normalMap,fe=!!M.displacementMap,ae=!!M.emissiveMap,w=!!M.metalnessMap,b=!!M.roughnessMap,H=M.anisotropy>0,oe=M.clearcoat>0,le=M.iridescence>0,he=M.sheen>0,Re=M.transmission>0,ge=H&&!!M.anisotropyMap,Se=oe&&!!M.clearcoatMap,ze=oe&&!!M.clearcoatNormalMap,Be=oe&&!!M.clearcoatRoughnessMap,ce=le&&!!M.iridescenceMap,ut=le&&!!M.iridescenceThicknessMap,ct=he&&!!M.sheenColorMap,je=he&&!!M.sheenRoughnessMap,He=!!M.specularMap,Ce=!!M.specularColorMap,it=!!M.specularIntensityMap,yt=Re&&!!M.transmissionMap,Ht=Re&&!!M.thicknessMap,ot=!!M.gradientMap,xe=!!M.alphaMap,F=M.alphaTest>0,be=!!M.alphaHash,Ee=!!M.extensions,$e=!!U.attributes.uv1,Ve=!!U.attributes.uv2,At=!!U.attributes.uv3,Rt=cs;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Rt=n.toneMapping),{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:ne,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:De,instancing:Le,instancingColor:Le&&re.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Gi,map:we,matcap:Ue,envMap:T,envMapMode:T&&J.mapping,envMapCubeUVHeight:$,aoMap:B,lightMap:z,bumpMap:Y,normalMap:G,displacementMap:d&&fe,emissiveMap:ae,normalMapObjectSpace:G&&M.normalMapType===gm,normalMapTangentSpace:G&&M.normalMapType===Uf,metalnessMap:w,roughnessMap:b,anisotropy:H,anisotropyMap:ge,clearcoat:oe,clearcoatMap:Se,clearcoatNormalMap:ze,clearcoatRoughnessMap:Be,iridescence:le,iridescenceMap:ce,iridescenceThicknessMap:ut,sheen:he,sheenColorMap:ct,sheenRoughnessMap:je,specularMap:He,specularColorMap:Ce,specularIntensityMap:it,transmission:Re,transmissionMap:yt,thicknessMap:Ht,gradientMap:ot,opaque:M.transparent===!1&&M.blending===ls,alphaMap:xe,alphaTest:F,alphaHash:be,combine:M.combine,mapUv:we&&y(M.map.channel),aoMapUv:B&&y(M.aoMap.channel),lightMapUv:z&&y(M.lightMap.channel),bumpMapUv:Y&&y(M.bumpMap.channel),normalMapUv:G&&y(M.normalMap.channel),displacementMapUv:fe&&y(M.displacementMap.channel),emissiveMapUv:ae&&y(M.emissiveMap.channel),metalnessMapUv:w&&y(M.metalnessMap.channel),roughnessMapUv:b&&y(M.roughnessMap.channel),anisotropyMapUv:ge&&y(M.anisotropyMap.channel),clearcoatMapUv:Se&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ze&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:je&&y(M.sheenRoughnessMap.channel),specularMapUv:He&&y(M.specularMap.channel),specularColorMapUv:Ce&&y(M.specularColorMap.channel),specularIntensityMapUv:it&&y(M.specularIntensityMap.channel),transmissionMapUv:yt&&y(M.transmissionMap.channel),thicknessMapUv:Ht&&y(M.thicknessMap.channel),alphaMapUv:xe&&y(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(G||H),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:$e,vertexUv2s:Ve,vertexUv3s:At,pointsUvs:re.isPoints===!0&&!!U.attributes.uv&&(we||xe),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:re.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ue,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Rt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:we&&M.map.isVideoTexture===!0&&bt.getTransfer(M.map.colorSpace)===Pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ln,flipSided:M.side===gn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Ee&&M.extensions.derivatives===!0,extensionFragDepth:Ee&&M.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)A.push(N),A.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(_(A,M),x(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function x(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function v(M){let A=g[M.type],N;if(A){let W=mi[A];N=Dr.clone(W.uniforms)}else N=M.uniforms;return N}function I(M,A){let N;for(let W=0,re=c.length;W<re;W++){let P=c[W];if(P.cacheKey===A){N=P,++N.usedTimes;break}}return N===void 0&&(N=new Z_(n,A,M,r),c.push(N)),N}function S(M){if(--M.usedTimes===0){let A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:I,releaseProgram:S,releaseShaderCache:R,programs:c,dispose:D}}function j_(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Q_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ef(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,y,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),e++,p}function a(u,d,f,g,y,m){let p=o(u,d,f,g,y,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,y,m){let p=o(u,d,f,g,y,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Q_),i.length>1&&i.sort(d||ef),s.length>1&&s.sort(d||ef)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ev(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new tf,n.set(i,[o])):s>=r.length?(o=new tf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function tv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ve};break;case"SpotLight":t={position:new L,direction:new L,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function nv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var iv=0;function sv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rv(n,e){let t=new tv,i=nv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,o=new _t,a=new _t;function l(h,u){let d=0,f=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let y=0,m=0,p=0,_=0,x=0,v=0,I=0,S=0,R=0,D=0,M=0;h.sort(sv);let A=u===!0?Math.PI:1;for(let W=0,re=h.length;W<re;W++){let P=h[W],U=P.color,O=P.intensity,J=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=U.r*O*A,f+=U.g*O*A,g+=U.b*O*A;else if(P.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(P.sh.coefficients[X],O);M++}else if(P.isDirectionalLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){let te=P.shadow,Q=i.get(P);Q.shadowBias=te.bias,Q.shadowNormalBias=te.normalBias,Q.shadowRadius=te.radius,Q.shadowMapSize=te.mapSize,s.directionalShadow[y]=Q,s.directionalShadowMap[y]=$,s.directionalShadowMatrix[y]=P.shadow.matrix,v++}s.directional[y]=X,y++}else if(P.isSpotLight){let X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(U).multiplyScalar(O*A),X.distance=J,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,s.spot[p]=X;let te=P.shadow;if(P.map&&(s.spotLightMap[R]=P.map,R++,te.updateMatrices(P),P.castShadow&&D++),s.spotLightMatrix[p]=te.matrix,P.castShadow){let Q=i.get(P);Q.shadowBias=te.bias,Q.shadowNormalBias=te.normalBias,Q.shadowRadius=te.radius,Q.shadowMapSize=te.mapSize,s.spotShadow[p]=Q,s.spotShadowMap[p]=$,S++}p++}else if(P.isRectAreaLight){let X=t.get(P);X.color.copy(U).multiplyScalar(O),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),s.rectArea[_]=X,_++}else if(P.isPointLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity*A),X.distance=P.distance,X.decay=P.decay,P.castShadow){let te=P.shadow,Q=i.get(P);Q.shadowBias=te.bias,Q.shadowNormalBias=te.normalBias,Q.shadowRadius=te.radius,Q.shadowMapSize=te.mapSize,Q.shadowCameraNear=te.camera.near,Q.shadowCameraFar=te.camera.far,s.pointShadow[m]=Q,s.pointShadowMap[m]=$,s.pointShadowMatrix[m]=P.shadow.matrix,I++}s.point[m]=X,m++}else if(P.isHemisphereLight){let X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(O*A),X.groundColor.copy(P.groundColor).multiplyScalar(O*A),s.hemi[x]=X,x++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==y||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==_||N.hemiLength!==x||N.numDirectionalShadows!==v||N.numPointShadows!==I||N.numSpotShadows!==S||N.numSpotMaps!==R||N.numLightProbes!==M)&&(s.directional.length=y,s.spot.length=p,s.rectArea.length=_,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=S+R-D,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=M,N.directionalLength=y,N.pointLength=m,N.spotLength=p,N.rectAreaLength=_,N.hemiLength=x,N.numDirectionalShadows=v,N.numPointShadows=I,N.numSpotShadows=S,N.numSpotMaps=R,N.numLightProbes=M,s.version=iv++)}function c(h,u){let d=0,f=0,g=0,y=0,m=0,p=u.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){let v=h[_];if(v.isDirectionalLight){let I=s.directional[d];I.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),d++}else if(v.isSpotLight){let I=s.spot[g];I.position.setFromMatrixPosition(v.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let I=s.rectArea[y];I.position.setFromMatrixPosition(v.matrixWorld),I.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),I.halfWidth.set(v.width*.5,0,0),I.halfHeight.set(0,v.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let I=s.point[f];I.position.setFromMatrixPosition(v.matrixWorld),I.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let I=s.hemi[m];I.direction.setFromMatrixPosition(v.matrixWorld),I.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function nf(n,e){let t=new rv(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ov(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new nf(n,e),t.set(r,[l])):o>=a.length?(l=new nf(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var ch=class extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hh=class extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cv(n,e,t){let i=new mo,s=new ie,r=new ie,o=new Dt,a=new ch({depthPacking:mm}),l=new hh,c={},h=t.maxTextureSize,u={[us]:gn,[gn]:us,[ln]:ln},d=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:av,fragmentShader:lv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new pt;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new pe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ef;let p=this.type;this.render=function(S,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let M=n.getRenderTarget(),A=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),W=n.state;W.setBlending(gi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let re=p!==zi&&this.type===zi,P=p===zi&&this.type!==zi;for(let U=0,O=S.length;U<O;U++){let J=S[U],$=J.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let X=$.getFrameExtents();if(s.multiply(X),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,$.mapSize.y=r.y)),$.map===null||re===!0||P===!0){let Q=this.type!==zi?{minFilter:Tn,magFilter:Tn}:{};$.map!==null&&$.map.dispose(),$.map=new An(s.x,s.y,Q),$.map.texture.name=J.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let te=$.getViewportCount();for(let Q=0;Q<te;Q++){let ue=$.getViewport(Q);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),W.viewport(o),$.updateMatrices(J,Q),i=$.getFrustum(),v(R,D,$.camera,J,this.type)}$.isPointLightShadow!==!0&&this.type===zi&&_($,D),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,A,N)};function _(S,R){let D=e.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new An(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(R,null,D,d,y,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(R,null,D,f,y,null)}function x(S,R,D,M){let A=null,N=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)A=N;else if(A=D.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=A.uuid,re=R.uuid,P=c[W];P===void 0&&(P={},c[W]=P);let U=P[re];U===void 0&&(U=A.clone(),P[re]=U,R.addEventListener("dispose",I)),A=U}if(A.visible=R.visible,A.wireframe=R.wireframe,M===zi?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:u[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,D.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let W=n.properties.get(A);W.light=D}return A}function v(S,R,D,M,A){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===zi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);let re=e.update(S),P=S.material;if(Array.isArray(P)){let U=re.groups;for(let O=0,J=U.length;O<J;O++){let $=U[O],X=P[$.materialIndex];if(X&&X.visible){let te=x(S,X,M,A);S.onBeforeShadow(n,S,R,D,re,te,$),n.renderBufferDirect(D,null,re,te,S,$),S.onAfterShadow(n,S,R,D,re,te,$)}}}else if(P.visible){let U=x(S,P,M,A);S.onBeforeShadow(n,S,R,D,re,U,null),n.renderBufferDirect(D,null,re,U,S,null),S.onAfterShadow(n,S,R,D,re,U,null)}}let W=S.children;for(let re=0,P=W.length;re<P;re++)v(W[re],R,D,M,A)}function I(S){S.target.removeEventListener("dispose",I);for(let D in c){let M=c[D],A=S.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function hv(n,e,t){let i=t.isWebGL2;function s(){let F=!1,be=new Dt,Ee=null,$e=new Dt(0,0,0,0);return{setMask:function(Ve){Ee!==Ve&&!F&&(n.colorMask(Ve,Ve,Ve,Ve),Ee=Ve)},setLocked:function(Ve){F=Ve},setClear:function(Ve,At,Rt,sn,bn){bn===!0&&(Ve*=sn,At*=sn,Rt*=sn),be.set(Ve,At,Rt,sn),$e.equals(be)===!1&&(n.clearColor(Ve,At,Rt,sn),$e.copy(be))},reset:function(){F=!1,Ee=null,$e.set(-1,0,0,0)}}}function r(){let F=!1,be=null,Ee=null,$e=null;return{setTest:function(Ve){Ve?De(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(Ve){be!==Ve&&!F&&(n.depthMask(Ve),be=Ve)},setFunc:function(Ve){if(Ee!==Ve){switch(Ve){case X0:n.depthFunc(n.NEVER);break;case q0:n.depthFunc(n.ALWAYS);break;case Y0:n.depthFunc(n.LESS);break;case Ua:n.depthFunc(n.LEQUAL);break;case $0:n.depthFunc(n.EQUAL);break;case Z0:n.depthFunc(n.GEQUAL);break;case J0:n.depthFunc(n.GREATER);break;case K0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=Ve}},setLocked:function(Ve){F=Ve},setClear:function(Ve){$e!==Ve&&(n.clearDepth(Ve),$e=Ve)},reset:function(){F=!1,be=null,Ee=null,$e=null}}}function o(){let F=!1,be=null,Ee=null,$e=null,Ve=null,At=null,Rt=null,sn=null,bn=null;return{setTest:function(Ct){F||(Ct?De(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(Ct){be!==Ct&&!F&&(n.stencilMask(Ct),be=Ct)},setFunc:function(Ct,En,pi){(Ee!==Ct||$e!==En||Ve!==pi)&&(n.stencilFunc(Ct,En,pi),Ee=Ct,$e=En,Ve=pi)},setOp:function(Ct,En,pi){(At!==Ct||Rt!==En||sn!==pi)&&(n.stencilOp(Ct,En,pi),At=Ct,Rt=En,sn=pi)},setLocked:function(Ct){F=Ct},setClear:function(Ct){bn!==Ct&&(n.clearStencil(Ct),bn=Ct)},reset:function(){F=!1,be=null,Ee=null,$e=null,Ve=null,At=null,Rt=null,sn=null,bn=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,y=[],m=null,p=!1,_=null,x=null,v=null,I=null,S=null,R=null,D=null,M=new ve(0,0,0),A=0,N=!1,W=null,re=null,P=null,U=null,O=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,X=0,te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(te)[1]),$=X>=1):te.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),$=X>=2);let Q=null,ue={},q=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),de=new Dt().fromArray(q),_e=new Dt().fromArray(ne);function me(F,be,Ee,$e){let Ve=new Uint8Array(4),At=n.createTexture();n.bindTexture(F,At),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Rt=0;Rt<Ee;Rt++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(be,0,n.RGBA,1,1,$e,0,n.RGBA,n.UNSIGNED_BYTE,Ve):n.texImage2D(be+Rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ve);return At}let Le={};Le[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(n.DEPTH_TEST),l.setFunc(Ua),ae(!1),w(zu),De(n.CULL_FACE),G(gi);function De(F){d[F]!==!0&&(n.enable(F),d[F]=!0)}function we(F){d[F]!==!1&&(n.disable(F),d[F]=!1)}function Ue(F,be){return f[F]!==be?(n.bindFramebuffer(F,be),f[F]=be,i&&(F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=be),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=be)),!0):!1}function T(F,be){let Ee=y,$e=!1;if(F)if(Ee=g.get(be),Ee===void 0&&(Ee=[],g.set(be,Ee)),F.isWebGLMultipleRenderTargets){let Ve=F.texture;if(Ee.length!==Ve.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let At=0,Rt=Ve.length;At<Rt;At++)Ee[At]=n.COLOR_ATTACHMENT0+At;Ee.length=Ve.length,$e=!0}}else Ee[0]!==n.COLOR_ATTACHMENT0&&(Ee[0]=n.COLOR_ATTACHMENT0,$e=!0);else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,$e=!0);$e&&(t.isWebGL2?n.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function B(F){return m!==F?(n.useProgram(F),m=F,!0):!1}let z={[Cs]:n.FUNC_ADD,[P0]:n.FUNC_SUBTRACT,[L0]:n.FUNC_REVERSE_SUBTRACT};if(i)z[Hu]=n.MIN,z[ku]=n.MAX;else{let F=e.get("EXT_blend_minmax");F!==null&&(z[Hu]=F.MIN_EXT,z[ku]=F.MAX_EXT)}let Y={[I0]:n.ZERO,[D0]:n.ONE,[U0]:n.SRC_COLOR,[Wc]:n.SRC_ALPHA,[H0]:n.SRC_ALPHA_SATURATE,[B0]:n.DST_COLOR,[F0]:n.DST_ALPHA,[N0]:n.ONE_MINUS_SRC_COLOR,[Xc]:n.ONE_MINUS_SRC_ALPHA,[O0]:n.ONE_MINUS_DST_COLOR,[z0]:n.ONE_MINUS_DST_ALPHA,[k0]:n.CONSTANT_COLOR,[G0]:n.ONE_MINUS_CONSTANT_COLOR,[V0]:n.CONSTANT_ALPHA,[W0]:n.ONE_MINUS_CONSTANT_ALPHA};function G(F,be,Ee,$e,Ve,At,Rt,sn,bn,Ct){if(F===gi){p===!0&&(we(n.BLEND),p=!1);return}if(p===!1&&(De(n.BLEND),p=!0),F!==C0){if(F!==_||Ct!==N){if((x!==Cs||S!==Cs)&&(n.blendEquation(n.FUNC_ADD),x=Cs,S=Cs),Ct)switch(F){case ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wt:n.blendFunc(n.ONE,n.ONE);break;case Bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ou:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wt:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ou:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,I=null,R=null,D=null,M.set(0,0,0),A=0,_=F,N=Ct}return}Ve=Ve||be,At=At||Ee,Rt=Rt||$e,(be!==x||Ve!==S)&&(n.blendEquationSeparate(z[be],z[Ve]),x=be,S=Ve),(Ee!==v||$e!==I||At!==R||Rt!==D)&&(n.blendFuncSeparate(Y[Ee],Y[$e],Y[At],Y[Rt]),v=Ee,I=$e,R=At,D=Rt),(sn.equals(M)===!1||bn!==A)&&(n.blendColor(sn.r,sn.g,sn.b,bn),M.copy(sn),A=bn),_=F,N=!1}function fe(F,be){F.side===ln?we(n.CULL_FACE):De(n.CULL_FACE);let Ee=F.side===gn;be&&(Ee=!Ee),ae(Ee),F.blending===ls&&F.transparent===!1?G(gi):G(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);let $e=F.stencilWrite;c.setTest($e),$e&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),H(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function ae(F){W!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),W=F)}function w(F){F!==A0?(De(n.CULL_FACE),F!==re&&(F===zu?n.cullFace(n.BACK):F===R0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),re=F}function b(F){F!==P&&($&&n.lineWidth(F),P=F)}function H(F,be,Ee){F?(De(n.POLYGON_OFFSET_FILL),(U!==be||O!==Ee)&&(n.polygonOffset(be,Ee),U=be,O=Ee)):we(n.POLYGON_OFFSET_FILL)}function oe(F){F?De(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function le(F){F===void 0&&(F=n.TEXTURE0+J-1),Q!==F&&(n.activeTexture(F),Q=F)}function he(F,be,Ee){Ee===void 0&&(Q===null?Ee=n.TEXTURE0+J-1:Ee=Q);let $e=ue[Ee];$e===void 0&&($e={type:void 0,texture:void 0},ue[Ee]=$e),($e.type!==F||$e.texture!==be)&&(Q!==Ee&&(n.activeTexture(Ee),Q=Ee),n.bindTexture(F,be||Le[F]),$e.type=F,$e.texture=be)}function Re(){let F=ue[Q];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ge(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function je(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(F){de.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),de.copy(F))}function yt(F){_e.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),_e.copy(F))}function Ht(F,be){let Ee=u.get(be);Ee===void 0&&(Ee=new WeakMap,u.set(be,Ee));let $e=Ee.get(F);$e===void 0&&($e=n.getUniformBlockIndex(be,F.name),Ee.set(F,$e))}function ot(F,be){let $e=u.get(be).get(F);h.get(be)!==$e&&(n.uniformBlockBinding(be,$e,F.__bindingPointIndex),h.set(be,$e))}function xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Q=null,ue={},f={},g=new WeakMap,y=[],m=null,p=!1,_=null,x=null,v=null,I=null,S=null,R=null,D=null,M=new ve(0,0,0),A=0,N=!1,W=null,re=null,P=null,U=null,O=null,de.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:we,bindFramebuffer:Ue,drawBuffers:T,useProgram:B,setBlending:G,setMaterial:fe,setFlipSided:ae,setCullFace:w,setLineWidth:b,setPolygonOffset:H,setScissorTest:oe,activeTexture:le,bindTexture:he,unbindTexture:Re,compressedTexImage2D:ge,compressedTexImage3D:Se,texImage2D:He,texImage3D:Ce,updateUBOMapping:Ht,uniformBlockBinding:ot,texStorage2D:ct,texStorage3D:je,texSubImage2D:ze,texSubImage3D:Be,compressedTexSubImage2D:ce,compressedTexSubImage3D:ut,scissor:it,viewport:yt,reset:xe}}function uv(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,b){return f?new OffscreenCanvas(w,b):ka("canvas")}function y(w,b,H,oe){let le=1;if((w.width>oe||w.height>oe)&&(le=oe/Math.max(w.width,w.height)),le<1||b===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let he=b?jc:Math.floor,Re=he(le*w.width),ge=he(le*w.height);u===void 0&&(u=g(Re,ge));let Se=H?g(Re,ge):u;return Se.width=Re,Se.height=ge,Se.getContext("2d").drawImage(w,0,0,Re,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Re+"x"+ge+")."),Se}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return _d(w.width)&&_d(w.height)}function p(w){return a?!1:w.wrapS!==ii||w.wrapT!==ii||w.minFilter!==Tn&&w.minFilter!==Vn}function _(w,b){return w.generateMipmaps&&b&&w.minFilter!==Tn&&w.minFilter!==Vn}function x(w){n.generateMipmap(w)}function v(w,b,H,oe,le=!1){if(a===!1)return b;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let he=b;if(b===n.RED&&(H===n.FLOAT&&(he=n.R32F),H===n.HALF_FLOAT&&(he=n.R16F),H===n.UNSIGNED_BYTE&&(he=n.R8)),b===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(he=n.R8UI),H===n.UNSIGNED_SHORT&&(he=n.R16UI),H===n.UNSIGNED_INT&&(he=n.R32UI),H===n.BYTE&&(he=n.R8I),H===n.SHORT&&(he=n.R16I),H===n.INT&&(he=n.R32I)),b===n.RG&&(H===n.FLOAT&&(he=n.RG32F),H===n.HALF_FLOAT&&(he=n.RG16F),H===n.UNSIGNED_BYTE&&(he=n.RG8)),b===n.RGBA){let Re=le?za:bt.getTransfer(oe);H===n.FLOAT&&(he=n.RGBA32F),H===n.HALF_FLOAT&&(he=n.RGBA16F),H===n.UNSIGNED_BYTE&&(he=Re===Pt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(he=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(he=n.RGB5_A1)}return(he===n.R16F||he===n.R32F||he===n.RG16F||he===n.RG32F||he===n.RGBA16F||he===n.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function I(w,b,H){return _(w,H)===!0||w.isFramebufferTexture&&w.minFilter!==Tn&&w.minFilter!==Vn?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function S(w){return w===Tn||w===Gu||w===oc?n.NEAREST:n.LINEAR}function R(w){let b=w.target;b.removeEventListener("dispose",R),M(b),b.isVideoTexture&&h.delete(b)}function D(w){let b=w.target;b.removeEventListener("dispose",D),N(b)}function M(w){let b=i.get(w);if(b.__webglInit===void 0)return;let H=w.source,oe=d.get(H);if(oe){let le=oe[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&A(w),Object.keys(oe).length===0&&d.delete(H)}i.remove(w)}function A(w){let b=i.get(w);n.deleteTexture(b.__webglTexture);let H=w.source,oe=d.get(H);delete oe[b.__cacheKey],o.memory.textures--}function N(w){let b=w.texture,H=i.get(w),oe=i.get(b);if(oe.__webglTexture!==void 0&&(n.deleteTexture(oe.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(H.__webglFramebuffer[le]))for(let he=0;he<H.__webglFramebuffer[le].length;he++)n.deleteFramebuffer(H.__webglFramebuffer[le][he]);else n.deleteFramebuffer(H.__webglFramebuffer[le]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[le])}else{if(Array.isArray(H.__webglFramebuffer))for(let le=0;le<H.__webglFramebuffer.length;le++)n.deleteFramebuffer(H.__webglFramebuffer[le]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let le=0;le<H.__webglColorRenderbuffer.length;le++)H.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[le]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let le=0,he=b.length;le<he;le++){let Re=i.get(b[le]);Re.__webglTexture&&(n.deleteTexture(Re.__webglTexture),o.memory.textures--),i.remove(b[le])}i.remove(b),i.remove(w)}let W=0;function re(){W=0}function P(){let w=W;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),W+=1,w}function U(w){let b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function O(w,b){let H=i.get(w);if(w.isVideoTexture&&fe(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){let oe=w.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(H,w,b);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+b)}function J(w,b){let H=i.get(w);if(w.version>0&&H.__version!==w.version){de(H,w,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+b)}function $(w,b){let H=i.get(w);if(w.version>0&&H.__version!==w.version){de(H,w,b);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+b)}function X(w,b){let H=i.get(w);if(w.version>0&&H.__version!==w.version){_e(H,w,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+b)}let te={[uo]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[$c]:n.MIRRORED_REPEAT},Q={[Tn]:n.NEAREST,[Gu]:n.NEAREST_MIPMAP_NEAREST,[oc]:n.NEAREST_MIPMAP_LINEAR,[Vn]:n.LINEAR,[rm]:n.LINEAR_MIPMAP_NEAREST,[fo]:n.LINEAR_MIPMAP_LINEAR},ue={[xm]:n.NEVER,[Em]:n.ALWAYS,[ym]:n.LESS,[Nf]:n.LEQUAL,[_m]:n.EQUAL,[bm]:n.GEQUAL,[vm]:n.GREATER,[Mm]:n.NOTEQUAL};function q(w,b,H){if(H?(n.texParameteri(w,n.TEXTURE_WRAP_S,te[b.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,te[b.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,te[b.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Q[b.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Q[b.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==ii||b.wrapT!==ii)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,S(b.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,S(b.minFilter)),b.minFilter!==Tn&&b.minFilter!==Vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ue[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let oe=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Tn||b.minFilter!==oc&&b.minFilter!==fo||b.type===as&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===ri&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(w,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function ne(w,b){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",R));let oe=b.source,le=d.get(oe);le===void 0&&(le={},d.set(oe,le));let he=U(b);if(he!==w.__cacheKey){le[he]===void 0&&(le[he]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),le[he].usedTimes++;let Re=le[w.__cacheKey];Re!==void 0&&(le[w.__cacheKey].usedTimes--,Re.usedTimes===0&&A(b)),w.__cacheKey=he,w.__webglTexture=le[he].texture}return H}function de(w,b,H){let oe=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(oe=n.TEXTURE_3D);let le=ne(w,b),he=b.source;t.bindTexture(oe,w.__webglTexture,n.TEXTURE0+H);let Re=i.get(he);if(he.version!==Re.__version||le===!0){t.activeTexture(n.TEXTURE0+H);let ge=bt.getPrimaries(bt.workingColorSpace),Se=b.colorSpace===Wn?null:bt.getPrimaries(b.colorSpace),ze=b.colorSpace===Wn||ge===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let Be=p(b)&&m(b.image)===!1,ce=y(b.image,Be,!1,s.maxTextureSize);ce=ae(b,ce);let ut=m(ce)||a,ct=r.convert(b.format,b.colorSpace),je=r.convert(b.type),He=v(b.internalFormat,ct,je,b.colorSpace,b.isVideoTexture);q(oe,b,ut);let Ce,it=b.mipmaps,yt=a&&b.isVideoTexture!==!0&&He!==If,Ht=Re.__version===void 0||le===!0,ot=I(b,ce,ut);if(b.isDepthTexture)He=n.DEPTH_COMPONENT,a?b.type===as?He=n.DEPTH_COMPONENT32F:b.type===os?He=n.DEPTH_COMPONENT24:b.type===Is?He=n.DEPTH24_STENCIL8:He=n.DEPTH_COMPONENT16:b.type===as&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Ds&&He===n.DEPTH_COMPONENT&&b.type!==zh&&b.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=os,je=r.convert(b.type)),b.format===Sr&&He===n.DEPTH_COMPONENT&&(He=n.DEPTH_STENCIL,b.type!==Is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Is,je=r.convert(b.type))),Ht&&(yt?t.texStorage2D(n.TEXTURE_2D,1,He,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,He,ce.width,ce.height,0,ct,je,null));else if(b.isDataTexture)if(it.length>0&&ut){yt&&Ht&&t.texStorage2D(n.TEXTURE_2D,ot,He,it[0].width,it[0].height);for(let xe=0,F=it.length;xe<F;xe++)Ce=it[xe],yt?t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,ct,je,Ce.data):t.texImage2D(n.TEXTURE_2D,xe,He,Ce.width,Ce.height,0,ct,je,Ce.data);b.generateMipmaps=!1}else yt?(Ht&&t.texStorage2D(n.TEXTURE_2D,ot,He,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,ct,je,ce.data)):t.texImage2D(n.TEXTURE_2D,0,He,ce.width,ce.height,0,ct,je,ce.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){yt&&Ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,He,it[0].width,it[0].height,ce.depth);for(let xe=0,F=it.length;xe<F;xe++)Ce=it[xe],b.format!==si?ct!==null?yt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ce.width,Ce.height,ce.depth,ct,Ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,He,Ce.width,Ce.height,ce.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ce.width,Ce.height,ce.depth,ct,je,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,He,Ce.width,Ce.height,ce.depth,0,ct,je,Ce.data)}else{yt&&Ht&&t.texStorage2D(n.TEXTURE_2D,ot,He,it[0].width,it[0].height);for(let xe=0,F=it.length;xe<F;xe++)Ce=it[xe],b.format!==si?ct!==null?yt?t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,ct,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,He,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,ct,je,Ce.data):t.texImage2D(n.TEXTURE_2D,xe,He,Ce.width,Ce.height,0,ct,je,Ce.data)}else if(b.isDataArrayTexture)yt?(Ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ot,He,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ct,je,ce.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,ce.width,ce.height,ce.depth,0,ct,je,ce.data);else if(b.isData3DTexture)yt?(Ht&&t.texStorage3D(n.TEXTURE_3D,ot,He,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ct,je,ce.data)):t.texImage3D(n.TEXTURE_3D,0,He,ce.width,ce.height,ce.depth,0,ct,je,ce.data);else if(b.isFramebufferTexture){if(Ht)if(yt)t.texStorage2D(n.TEXTURE_2D,ot,He,ce.width,ce.height);else{let xe=ce.width,F=ce.height;for(let be=0;be<ot;be++)t.texImage2D(n.TEXTURE_2D,be,He,xe,F,0,ct,je,null),xe>>=1,F>>=1}}else if(it.length>0&&ut){yt&&Ht&&t.texStorage2D(n.TEXTURE_2D,ot,He,it[0].width,it[0].height);for(let xe=0,F=it.length;xe<F;xe++)Ce=it[xe],yt?t.texSubImage2D(n.TEXTURE_2D,xe,0,0,ct,je,Ce):t.texImage2D(n.TEXTURE_2D,xe,He,ct,je,Ce);b.generateMipmaps=!1}else yt?(Ht&&t.texStorage2D(n.TEXTURE_2D,ot,He,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ct,je,ce)):t.texImage2D(n.TEXTURE_2D,0,He,ct,je,ce);_(b,ut)&&x(oe),Re.__version=he.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function _e(w,b,H){if(b.image.length!==6)return;let oe=ne(w,b),le=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+H);let he=i.get(le);if(le.version!==he.__version||oe===!0){t.activeTexture(n.TEXTURE0+H);let Re=bt.getPrimaries(bt.workingColorSpace),ge=b.colorSpace===Wn?null:bt.getPrimaries(b.colorSpace),Se=b.colorSpace===Wn||Re===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ze=b.isCompressedTexture||b.image[0].isCompressedTexture,Be=b.image[0]&&b.image[0].isDataTexture,ce=[];for(let xe=0;xe<6;xe++)!ze&&!Be?ce[xe]=y(b.image[xe],!1,!0,s.maxCubemapSize):ce[xe]=Be?b.image[xe].image:b.image[xe],ce[xe]=ae(b,ce[xe]);let ut=ce[0],ct=m(ut)||a,je=r.convert(b.format,b.colorSpace),He=r.convert(b.type),Ce=v(b.internalFormat,je,He,b.colorSpace),it=a&&b.isVideoTexture!==!0,yt=he.__version===void 0||oe===!0,Ht=I(b,ut,ct);q(n.TEXTURE_CUBE_MAP,b,ct);let ot;if(ze){it&&yt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ht,Ce,ut.width,ut.height);for(let xe=0;xe<6;xe++){ot=ce[xe].mipmaps;for(let F=0;F<ot.length;F++){let be=ot[F];b.format!==si?je!==null?it?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,F,0,0,be.width,be.height,je,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,F,Ce,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,F,0,0,be.width,be.height,je,He,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,F,Ce,be.width,be.height,0,je,He,be.data)}}}else{ot=b.mipmaps,it&&yt&&(ot.length>0&&Ht++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ht,Ce,ce[0].width,ce[0].height));for(let xe=0;xe<6;xe++)if(Be){it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ce[xe].width,ce[xe].height,je,He,ce[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ce,ce[xe].width,ce[xe].height,0,je,He,ce[xe].data);for(let F=0;F<ot.length;F++){let Ee=ot[F].image[xe].image;it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,F+1,0,0,Ee.width,Ee.height,je,He,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,F+1,Ce,Ee.width,Ee.height,0,je,He,Ee.data)}}else{it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,je,He,ce[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ce,je,He,ce[xe]);for(let F=0;F<ot.length;F++){let be=ot[F];it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,F+1,0,0,je,He,be.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,F+1,Ce,je,He,be.image[xe])}}}_(b,ct)&&x(n.TEXTURE_CUBE_MAP),he.__version=le.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function me(w,b,H,oe,le,he){let Re=r.convert(H.format,H.colorSpace),ge=r.convert(H.type),Se=v(H.internalFormat,Re,ge,H.colorSpace);if(!i.get(b).__hasExternalTextures){let Be=Math.max(1,b.width>>he),ce=Math.max(1,b.height>>he);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,he,Se,Be,ce,b.depth,0,Re,ge,null):t.texImage2D(le,he,Se,Be,ce,0,Re,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),G(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,le,i.get(H).__webglTexture,0,Y(b)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,le,i.get(H).__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(w,b,H){if(n.bindRenderbuffer(n.RENDERBUFFER,w),b.depthBuffer&&!b.stencilBuffer){let oe=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||G(b)){let le=b.depthTexture;le&&le.isDepthTexture&&(le.type===as?oe=n.DEPTH_COMPONENT32F:le.type===os&&(oe=n.DEPTH_COMPONENT24));let he=Y(b);G(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,oe,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,he,oe,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,oe,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(b.depthBuffer&&b.stencilBuffer){let oe=Y(b);H&&G(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,b.width,b.height):G(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{let oe=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let le=0;le<oe.length;le++){let he=oe[le],Re=r.convert(he.format,he.colorSpace),ge=r.convert(he.type),Se=v(he.internalFormat,Re,ge,he.colorSpace),ze=Y(b);H&&G(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Se,b.width,b.height):G(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,Se,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Se,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);let oe=i.get(b.depthTexture).__webglTexture,le=Y(b);if(b.depthTexture.format===Ds)G(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(b.depthTexture.format===Sr)G(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function we(w){let b=i.get(w),H=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");De(b.__webglFramebuffer,w)}else if(H){b.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[oe]),b.__webglDepthbuffer[oe]=n.createRenderbuffer(),Le(b.__webglDepthbuffer[oe],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),Le(b.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(w,b,H){let oe=i.get(w);b!==void 0&&me(oe.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&we(w)}function T(w){let b=w.texture,H=i.get(w),oe=i.get(b);w.addEventListener("dispose",D),w.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=b.version,o.memory.textures++);let le=w.isWebGLCubeRenderTarget===!0,he=w.isWebGLMultipleRenderTargets===!0,Re=m(w)||a;if(le){H.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(a&&b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[ge]=[];for(let Se=0;Se<b.mipmaps.length;Se++)H.__webglFramebuffer[ge][Se]=n.createFramebuffer()}else H.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)H.__webglFramebuffer[ge]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(he)if(s.drawBuffers){let ge=w.texture;for(let Se=0,ze=ge.length;Se<ze;Se++){let Be=i.get(ge[Se]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&G(w)===!1){let ge=he?b:[b];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Se=0;Se<ge.length;Se++){let ze=ge[Se];H.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Se]);let Be=r.convert(ze.format,ze.colorSpace),ce=r.convert(ze.type),ut=v(ze.internalFormat,Be,ce,ze.colorSpace,w.isXRRenderTarget===!0),ct=Y(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,ut,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,H.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),q(n.TEXTURE_CUBE_MAP,b,Re);for(let ge=0;ge<6;ge++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let Se=0;Se<b.mipmaps.length;Se++)me(H.__webglFramebuffer[ge][Se],w,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Se);else me(H.__webglFramebuffer[ge],w,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);_(b,Re)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){let ge=w.texture;for(let Se=0,ze=ge.length;Se<ze;Se++){let Be=ge[Se],ce=i.get(Be);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),q(n.TEXTURE_2D,Be,Re),me(H.__webglFramebuffer,w,Be,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,0),_(Be,Re)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ge=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,oe.__webglTexture),q(ge,b,Re),a&&b.mipmaps&&b.mipmaps.length>0)for(let Se=0;Se<b.mipmaps.length;Se++)me(H.__webglFramebuffer[Se],w,b,n.COLOR_ATTACHMENT0,ge,Se);else me(H.__webglFramebuffer,w,b,n.COLOR_ATTACHMENT0,ge,0);_(b,Re)&&x(ge),t.unbindTexture()}w.depthBuffer&&we(w)}function B(w){let b=m(w)||a,H=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let oe=0,le=H.length;oe<le;oe++){let he=H[oe];if(_(he,b)){let Re=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ge=i.get(he).__webglTexture;t.bindTexture(Re,ge),x(Re),t.unbindTexture()}}}function z(w){if(a&&w.samples>0&&G(w)===!1){let b=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],H=w.width,oe=w.height,le=n.COLOR_BUFFER_BIT,he=[],Re=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(w),Se=w.isWebGLMultipleRenderTargets===!0;if(Se)for(let ze=0;ze<b.length;ze++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ze=0;ze<b.length;ze++){he.push(n.COLOR_ATTACHMENT0+ze),w.depthBuffer&&he.push(Re);let Be=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Be===!1&&(w.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),Se&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ze]),Be===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Re]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Re])),Se){let ce=i.get(b[ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,H,oe,0,0,H,oe,le,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let ze=0;ze<b.length;ze++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ze]);let Be=i.get(b[ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function Y(w){return Math.min(s.maxSamples,w.samples)}function G(w){let b=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function fe(w){let b=o.render.frame;h.get(w)!==b&&(h.set(w,b),w.update())}function ae(w,b){let H=w.colorSpace,oe=w.format,le=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Jc||H!==Gi&&H!==Wn&&(bt.getTransfer(H)===Pt?a===!1?e.has("EXT_sRGB")===!0&&oe===si?(w.format=Jc,w.minFilter=Vn,w.generateMipmaps=!1):b=Ga.sRGBToLinear(b):(oe!==si||le!==hs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}this.allocateTextureUnit=P,this.resetTextureUnits=re,this.setTexture2D=O,this.setTexture2DArray=J,this.setTexture3D=$,this.setTextureCube=X,this.rebindTextures=Ue,this.setupRenderTarget=T,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=me,this.useMultisampledRTT=G}function dv(n,e,t){let i=t.isWebGL2;function s(r,o=Wn){let a,l=bt.getTransfer(o);if(r===hs)return n.UNSIGNED_BYTE;if(r===Af)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Rf)return n.UNSIGNED_SHORT_5_5_5_1;if(r===om)return n.BYTE;if(r===am)return n.SHORT;if(r===zh)return n.UNSIGNED_SHORT;if(r===Tf)return n.INT;if(r===os)return n.UNSIGNED_INT;if(r===as)return n.FLOAT;if(r===ri)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===lm)return n.ALPHA;if(r===si)return n.RGBA;if(r===cm)return n.LUMINANCE;if(r===hm)return n.LUMINANCE_ALPHA;if(r===Ds)return n.DEPTH_COMPONENT;if(r===Sr)return n.DEPTH_STENCIL;if(r===Jc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===um)return n.RED;if(r===Cf)return n.RED_INTEGER;if(r===dm)return n.RG;if(r===Pf)return n.RG_INTEGER;if(r===Lf)return n.RGBA_INTEGER;if(r===ac||r===lc||r===cc||r===hc)if(l===Pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ac)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ac)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===hc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vu||r===Wu||r===Xu||r===qu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Vu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===If)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Yu||r===$u)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Yu)return l===Pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===$u)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zu||r===Ju||r===Ku||r===ju||r===Qu||r===ed||r===td||r===nd||r===id||r===sd||r===rd||r===od||r===ad||r===ld)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Zu)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ju)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ku)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ju)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qu)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ed)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===td)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nd)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===id)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sd)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rd)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===od)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ad)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ld)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uc||r===cd||r===hd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===uc)return l===Pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===cd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===fm||r===ud||r===dd||r===fd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===uc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ud)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===dd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Is?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var uh=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ke=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},fv={type:"move"},ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ke;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},dh=class extends ds{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=t.getContextAttributes(),m=null,p=null,_=[],x=[],v=new ie,I=null,S=new mn;S.layers.enable(1),S.viewport=new Dt;let R=new mn;R.layers.enable(2),R.viewport=new Dt;let D=[S,R],M=new uh;M.layers.enable(1),M.layers.enable(2);let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=_[q];return ne===void 0&&(ne=new ao,_[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=_[q];return ne===void 0&&(ne=new ao,_[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=_[q];return ne===void 0&&(ne=new ao,_[q]=ne),ne.getHandSpace()};function W(q){let ne=x.indexOf(q.inputSource);if(ne===-1)return;let de=_[ne];de!==void 0&&(de.update(q.inputSource,q.frame,c||o),de.dispatchEvent({type:q.type,data:q.inputSource}))}function re(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",P);for(let q=0;q<_.length;q++){let ne=x[q];ne!==null&&(x[q]=null,_[q].disconnect(ne))}A=null,N=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(v.width,v.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",re),s.addEventListener("inputsourceschange",P),y.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(v),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ne={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new An(f.framebufferWidth,f.framebufferHeight,{format:si,type:hs,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ne=null,de=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=y.stencil?Sr:Ds,de=y.stencil?Is:os);let me={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new An(d.textureWidth,d.textureHeight,{format:si,type:hs,depthTexture:new Za(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let Le=e.properties.get(p);Le.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(q){for(let ne=0;ne<q.removed.length;ne++){let de=q.removed[ne],_e=x.indexOf(de);_e>=0&&(x[_e]=null,_[_e].disconnect(de))}for(let ne=0;ne<q.added.length;ne++){let de=q.added[ne],_e=x.indexOf(de);if(_e===-1){for(let Le=0;Le<_.length;Le++)if(Le>=x.length){x.push(de),_e=Le;break}else if(x[Le]===null){x[Le]=de,_e=Le;break}if(_e===-1)break}let me=_[_e];me&&me.connect(de)}}let U=new L,O=new L;function J(q,ne,de){U.setFromMatrixPosition(ne.matrixWorld),O.setFromMatrixPosition(de.matrixWorld);let _e=U.distanceTo(O),me=ne.projectionMatrix.elements,Le=de.projectionMatrix.elements,De=me[14]/(me[10]-1),we=me[14]/(me[10]+1),Ue=(me[9]+1)/me[5],T=(me[9]-1)/me[5],B=(me[8]-1)/me[0],z=(Le[8]+1)/Le[0],Y=De*B,G=De*z,fe=_e/(-B+z),ae=fe*-B;ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ae),q.translateZ(fe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let w=De+fe,b=we+fe,H=Y-ae,oe=G+(_e-ae),le=Ue*we/b*w,he=T*we/b*w;q.projectionMatrix.makePerspective(H,oe,le,he,w,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function $(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;M.near=R.near=S.near=q.near,M.far=R.far=S.far=q.far,(A!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,N=M.far);let ne=q.parent,de=M.cameras;$(M,ne);for(let _e=0;_e<de.length;_e++)$(de[_e],ne);de.length===2?J(M,S,R):M.projectionMatrix.copy(S.projectionMatrix),X(q,M,ne)};function X(q,ne,de){de===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Kc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)};let te=null;function Q(q,ne){if(h=ne.getViewerPose(c||o),g=ne,h!==null){let de=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let _e=!1;de.length!==M.cameras.length&&(M.cameras.length=0,_e=!0);for(let me=0;me<de.length;me++){let Le=de[me],De=null;if(f!==null)De=f.getViewport(Le);else{let Ue=u.getViewSubImage(d,Le);De=Ue.viewport,me===0&&(e.setRenderTargetTextures(p,Ue.colorTexture,d.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(p))}let we=D[me];we===void 0&&(we=new mn,we.layers.enable(me),we.viewport=new Dt,D[me]=we),we.matrix.fromArray(Le.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Le.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(De.x,De.y,De.width,De.height),me===0&&(M.matrix.copy(we.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_e===!0&&M.cameras.push(we)}}for(let de=0;de<_.length;de++){let _e=x[de],me=_[de];_e!==null&&me!==void 0&&me.update(_e,ne,c||o)}te&&te(q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}let ue=new Of;ue.setAnimationLoop(Q),this.setAnimationLoop=function(q){te=q},this.dispose=function(){}}};function pv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Bf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function mv(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,x){let v=x.program;i.uniformBlockBinding(_,v)}function c(_,x){let v=s[_.id];v===void 0&&(g(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",m));let I=x.program;i.updateUBOMapping(_,I);let S=e.render.frame;r[_.id]!==S&&(d(_),r[_.id]=S)}function h(_){let x=u();_.__bindingPointIndex=x;let v=n.createBuffer(),I=_.__size,S=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,I,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let x=s[_.id],v=_.uniforms,I=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let S=0,R=v.length;S<R;S++){let D=Array.isArray(v[S])?v[S]:[v[S]];for(let M=0,A=D.length;M<A;M++){let N=D[M];if(f(N,S,M,I)===!0){let W=N.__offset,re=Array.isArray(N.value)?N.value:[N.value],P=0;for(let U=0;U<re.length;U++){let O=re[U],J=y(O);typeof O=="number"||typeof O=="boolean"?(N.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,W+P,N.__data)):O.isMatrix3?(N.__data[0]=O.elements[0],N.__data[1]=O.elements[1],N.__data[2]=O.elements[2],N.__data[3]=0,N.__data[4]=O.elements[3],N.__data[5]=O.elements[4],N.__data[6]=O.elements[5],N.__data[7]=0,N.__data[8]=O.elements[6],N.__data[9]=O.elements[7],N.__data[10]=O.elements[8],N.__data[11]=0):(O.toArray(N.__data,P),P+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,x,v,I){let S=_.value,R=x+"_"+v;if(I[R]===void 0)return typeof S=="number"||typeof S=="boolean"?I[R]=S:I[R]=S.clone(),!0;{let D=I[R];if(typeof S=="number"||typeof S=="boolean"){if(D!==S)return I[R]=S,!0}else if(D.equals(S)===!1)return D.copy(S),!0}return!1}function g(_){let x=_.uniforms,v=0,I=16;for(let R=0,D=x.length;R<D;R++){let M=Array.isArray(x[R])?x[R]:[x[R]];for(let A=0,N=M.length;A<N;A++){let W=M[A],re=Array.isArray(W.value)?W.value:[W.value];for(let P=0,U=re.length;P<U;P++){let O=re[P],J=y(O),$=v%I;$!==0&&I-$<J.boundary&&(v+=I-$),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=J.storage}}}let S=v%I;return S>0&&(v+=I-S),_.__size=v,_.__cache={},this}function y(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){let x=_.target;x.removeEventListener("dispose",m);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var go=class{constructor(e={}){let{canvas:t=Sm(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=cs,this.toneMappingExposure=1;let x=this,v=!1,I=0,S=0,R=null,D=-1,M=null,A=new Dt,N=new Dt,W=null,re=new ve(0),P=0,U=t.width,O=t.height,J=1,$=null,X=null,te=new Dt(0,0,U,O),Q=new Dt(0,0,U,O),ue=!1,q=new mo,ne=!1,de=!1,_e=null,me=new _t,Le=new ie,De=new L,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return R===null?J:1}let T=i;function B(C,V){for(let K=0;K<C.length;K++){let ee=C[K],Z=t.getContext(ee,V);if(Z!==null)return Z}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",be,!1),T===null){let V=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&V.shift(),T=B(V,C),T===null)throw B(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&T instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),T.getShaderPrecisionFormat===void 0&&(T.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let z,Y,G,fe,ae,w,b,H,oe,le,he,Re,ge,Se,ze,Be,ce,ut,ct,je,He,Ce,it,yt;function Ht(){z=new Uy(T),Y=new Ry(T,z,e),z.init(Y),Ce=new dv(T,z,Y),G=new hv(T,z,Y),fe=new zy(T),ae=new j_,w=new uv(T,z,G,ae,Y,Ce,fe),b=new Py(x),H=new Dy(x),oe=new Xm(T,Y),it=new Ty(T,z,oe,Y),le=new Ny(T,oe,fe,it),he=new ky(T,le,oe,fe),ct=new Hy(T,Y,w),Be=new Cy(ae),Re=new K_(x,b,H,z,Y,it,Be),ge=new pv(x,ae),Se=new ev,ze=new ov(z,Y),ut=new Sy(x,b,H,G,he,d,l),ce=new cv(x,he,Y),yt=new mv(T,fe,Y,G),je=new Ay(T,z,fe,Y),He=new Fy(T,z,fe,Y),fe.programs=Re.programs,x.capabilities=Y,x.extensions=z,x.properties=ae,x.renderLists=Se,x.shadowMap=ce,x.state=G,x.info=fe}Ht();let ot=new dh(x,T);this.xr=ot,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let C=z.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=z.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(U,O,!1))},this.getSize=function(C){return C.set(U,O)},this.setSize=function(C,V,K=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,O=V,t.width=Math.floor(C*J),t.height=Math.floor(V*J),K===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(U*J,O*J).floor()},this.setDrawingBufferSize=function(C,V,K){U=C,O=V,J=K,t.width=Math.floor(C*K),t.height=Math.floor(V*K),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(te)},this.setViewport=function(C,V,K,ee){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,V,K,ee),G.viewport(A.copy(te).multiplyScalar(J).floor())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,V,K,ee){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,V,K,ee),G.scissor(N.copy(Q).multiplyScalar(J).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(C){G.setScissorTest(ue=C)},this.setOpaqueSort=function(C){$=C},this.setTransparentSort=function(C){X=C},this.getClearColor=function(C){return C.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(C=!0,V=!0,K=!0){let ee=0;if(C){let Z=!1;if(R!==null){let Ae=R.texture.format;Z=Ae===Lf||Ae===Pf||Ae===Cf}if(Z){let Ae=R.texture.type,Fe=Ae===hs||Ae===os||Ae===zh||Ae===Is||Ae===Af||Ae===Rf,Xe=ut.getClearColor(),Ze=ut.getClearAlpha(),rt=Xe.r,Qe=Xe.g,tt=Xe.b;Fe?(f[0]=rt,f[1]=Qe,f[2]=tt,f[3]=Ze,T.clearBufferuiv(T.COLOR,0,f)):(g[0]=rt,g[1]=Qe,g[2]=tt,g[3]=Ze,T.clearBufferiv(T.COLOR,0,g))}else ee|=T.COLOR_BUFFER_BIT}V&&(ee|=T.DEPTH_BUFFER_BIT),K&&(ee|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Se.dispose(),ze.dispose(),ae.dispose(),b.dispose(),H.dispose(),he.dispose(),it.dispose(),yt.dispose(),Re.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",bn),ot.removeEventListener("sessionend",Ct),_e&&(_e.dispose(),_e=null),En.stop()};function xe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let C=fe.autoReset,V=ce.enabled,K=ce.autoUpdate,ee=ce.needsUpdate,Z=ce.type;Ht(),fe.autoReset=C,ce.enabled=V,ce.autoUpdate=K,ce.needsUpdate=ee,ce.type=Z}function be(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ee(C){let V=C.target;V.removeEventListener("dispose",Ee),$e(V)}function $e(C){Ve(C),ae.remove(C)}function Ve(C){let V=ae.get(C).programs;V!==void 0&&(V.forEach(function(K){Re.releaseProgram(K)}),C.isShaderMaterial&&Re.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,K,ee,Z,Ae){V===null&&(V=we);let Fe=Z.isMesh&&Z.matrixWorld.determinant()<0,Xe=E0(C,V,K,ee,Z);G.setMaterial(ee,Fe);let Ze=K.index,rt=1;if(ee.wireframe===!0){if(Ze=le.getWireframeAttribute(K),Ze===void 0)return;rt=2}let Qe=K.drawRange,tt=K.attributes.position,Vt=Qe.start*rt,Dn=(Qe.start+Qe.count)*rt;Ae!==null&&(Vt=Math.max(Vt,Ae.start*rt),Dn=Math.min(Dn,(Ae.start+Ae.count)*rt)),Ze!==null?(Vt=Math.max(Vt,0),Dn=Math.min(Dn,Ze.count)):tt!=null&&(Vt=Math.max(Vt,0),Dn=Math.min(Dn,tt.count));let rn=Dn-Vt;if(rn<0||rn===1/0)return;it.setup(Z,ee,Xe,K,Ze);let Li,Ft=je;if(Ze!==null&&(Li=oe.get(Ze),Ft=He,Ft.setIndex(Li)),Z.isMesh)ee.wireframe===!0?(G.setLineWidth(ee.wireframeLinewidth*Ue()),Ft.setMode(T.LINES)):Ft.setMode(T.TRIANGLES);else if(Z.isLine){let at=ee.linewidth;at===void 0&&(at=1),G.setLineWidth(at*Ue()),Z.isLineSegments?Ft.setMode(T.LINES):Z.isLineLoop?Ft.setMode(T.LINE_LOOP):Ft.setMode(T.LINE_STRIP)}else Z.isPoints?Ft.setMode(T.POINTS):Z.isSprite&&Ft.setMode(T.TRIANGLES);if(Z.isBatchedMesh)Ft.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)Ft.renderInstances(Vt,rn,Z.count);else if(K.isInstancedBufferGeometry){let at=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,nc=Math.min(K.instanceCount,at);Ft.renderInstances(Vt,rn,nc)}else Ft.render(Vt,rn)};function At(C,V,K){C.transparent===!0&&C.side===ln&&C.forceSinglePass===!1?(C.side=gn,C.needsUpdate=!0,ea(C,V,K),C.side=us,C.needsUpdate=!0,ea(C,V,K),C.side=ln):ea(C,V,K)}this.compile=function(C,V,K=null){K===null&&(K=C),m=ze.get(K),m.init(),_.push(m),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),C!==K&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(x._useLegacyLights);let ee=new Set;return C.traverse(function(Z){let Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let Fe=0;Fe<Ae.length;Fe++){let Xe=Ae[Fe];At(Xe,K,Z),ee.add(Xe)}else At(Ae,K,Z),ee.add(Ae)}),_.pop(),m=null,ee},this.compileAsync=function(C,V,K=null){let ee=this.compile(C,V,K);return new Promise(Z=>{function Ae(){if(ee.forEach(function(Fe){ae.get(Fe).currentProgram.isReady()&&ee.delete(Fe)}),ee.size===0){Z(C);return}setTimeout(Ae,10)}z.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Rt=null;function sn(C){Rt&&Rt(C)}function bn(){En.stop()}function Ct(){En.start()}let En=new Of;En.setAnimationLoop(sn),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(C){Rt=C,ot.setAnimationLoop(C),C===null?En.stop():En.start()},ot.addEventListener("sessionstart",bn),ot.addEventListener("sessionend",Ct),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(V),V=ot.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,V,R),m=ze.get(C,_.length),m.init(),_.push(m),me.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),q.setFromProjectionMatrix(me),de=this.localClippingEnabled,ne=Be.init(this.clippingPlanes,de),y=Se.get(C,p.length),y.init(),p.push(y),pi(C,V,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort($,X),this.info.render.frame++,ne===!0&&Be.beginShadows();let K=m.state.shadowsArray;if(ce.render(K,C,V),ne===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),ut.render(y,C),m.setupLights(x._useLegacyLights),V.isArrayCamera){let ee=V.cameras;for(let Z=0,Ae=ee.length;Z<Ae;Z++){let Fe=ee[Z];Lu(y,C,Fe,Fe.viewport)}}else Lu(y,C,V);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(x,C,V),it.resetDefaultState(),D=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function pi(C,V,K,ee){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){ee&&De.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);let Fe=he.update(C),Xe=C.material;Xe.visible&&y.push(C,Fe,Xe,K,De.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){let Fe=he.update(C),Xe=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),De.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),De.copy(Fe.boundingSphere.center)),De.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(Xe)){let Ze=Fe.groups;for(let rt=0,Qe=Ze.length;rt<Qe;rt++){let tt=Ze[rt],Vt=Xe[tt.materialIndex];Vt&&Vt.visible&&y.push(C,Fe,Vt,K,De.z,tt)}}else Xe.visible&&y.push(C,Fe,Xe,K,De.z,null)}}let Ae=C.children;for(let Fe=0,Xe=Ae.length;Fe<Xe;Fe++)pi(Ae[Fe],V,K,ee)}function Lu(C,V,K,ee){let Z=C.opaque,Ae=C.transmissive,Fe=C.transparent;m.setupLightsView(K),ne===!0&&Be.setGlobalState(x.clippingPlanes,K),Ae.length>0&&b0(Z,Ae,V,K),ee&&G.viewport(A.copy(ee)),Z.length>0&&Qo(Z,V,K),Ae.length>0&&Qo(Ae,V,K),Fe.length>0&&Qo(Fe,V,K),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function b0(C,V,K,ee){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;let Ae=Y.isWebGL2;_e===null&&(_e=new An(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")?ri:hs,minFilter:fo,samples:Ae?4:0})),x.getDrawingBufferSize(Le),Ae?_e.setSize(Le.x,Le.y):_e.setSize(jc(Le.x),jc(Le.y));let Fe=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(re),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let Xe=x.toneMapping;x.toneMapping=cs,Qo(C,K,ee),w.updateMultisampleRenderTarget(_e),w.updateRenderTargetMipmap(_e);let Ze=!1;for(let rt=0,Qe=V.length;rt<Qe;rt++){let tt=V[rt],Vt=tt.object,Dn=tt.geometry,rn=tt.material,Li=tt.group;if(rn.side===ln&&Vt.layers.test(ee.layers)){let Ft=rn.side;rn.side=gn,rn.needsUpdate=!0,Iu(Vt,K,ee,Dn,rn,Li),rn.side=Ft,rn.needsUpdate=!0,Ze=!0}}Ze===!0&&(w.updateMultisampleRenderTarget(_e),w.updateRenderTargetMipmap(_e)),x.setRenderTarget(Fe),x.setClearColor(re,P),x.toneMapping=Xe}function Qo(C,V,K){let ee=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,Ae=C.length;Z<Ae;Z++){let Fe=C[Z],Xe=Fe.object,Ze=Fe.geometry,rt=ee===null?Fe.material:ee,Qe=Fe.group;Xe.layers.test(K.layers)&&Iu(Xe,V,K,Ze,rt,Qe)}}function Iu(C,V,K,ee,Z,Ae){C.onBeforeRender(x,V,K,ee,Z,Ae),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(x,V,K,ee,C,Ae),Z.transparent===!0&&Z.side===ln&&Z.forceSinglePass===!1?(Z.side=gn,Z.needsUpdate=!0,x.renderBufferDirect(K,V,ee,Z,C,Ae),Z.side=us,Z.needsUpdate=!0,x.renderBufferDirect(K,V,ee,Z,C,Ae),Z.side=ln):x.renderBufferDirect(K,V,ee,Z,C,Ae),C.onAfterRender(x,V,K,ee,Z,Ae)}function ea(C,V,K){V.isScene!==!0&&(V=we);let ee=ae.get(C),Z=m.state.lights,Ae=m.state.shadowsArray,Fe=Z.state.version,Xe=Re.getParameters(C,Z.state,Ae,V,K),Ze=Re.getProgramCacheKey(Xe),rt=ee.programs;ee.environment=C.isMeshStandardMaterial?V.environment:null,ee.fog=V.fog,ee.envMap=(C.isMeshStandardMaterial?H:b).get(C.envMap||ee.environment),rt===void 0&&(C.addEventListener("dispose",Ee),rt=new Map,ee.programs=rt);let Qe=rt.get(Ze);if(Qe!==void 0){if(ee.currentProgram===Qe&&ee.lightsStateVersion===Fe)return Uu(C,Xe),Qe}else Xe.uniforms=Re.getUniforms(C),C.onBuild(K,Xe,x),C.onBeforeCompile(Xe,x),Qe=Re.acquireProgram(Xe,Ze),rt.set(Ze,Qe),ee.uniforms=Xe.uniforms;let tt=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(tt.clippingPlanes=Be.uniform),Uu(C,Xe),ee.needsLights=S0(C),ee.lightsStateVersion=Fe,ee.needsLights&&(tt.ambientLightColor.value=Z.state.ambient,tt.lightProbe.value=Z.state.probe,tt.directionalLights.value=Z.state.directional,tt.directionalLightShadows.value=Z.state.directionalShadow,tt.spotLights.value=Z.state.spot,tt.spotLightShadows.value=Z.state.spotShadow,tt.rectAreaLights.value=Z.state.rectArea,tt.ltc_1.value=Z.state.rectAreaLTC1,tt.ltc_2.value=Z.state.rectAreaLTC2,tt.pointLights.value=Z.state.point,tt.pointLightShadows.value=Z.state.pointShadow,tt.hemisphereLights.value=Z.state.hemi,tt.directionalShadowMap.value=Z.state.directionalShadowMap,tt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,tt.spotShadowMap.value=Z.state.spotShadowMap,tt.spotLightMatrix.value=Z.state.spotLightMatrix,tt.spotLightMap.value=Z.state.spotLightMap,tt.pointShadowMap.value=Z.state.pointShadowMap,tt.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.currentProgram=Qe,ee.uniformsList=null,Qe}function Du(C){if(C.uniformsList===null){let V=C.currentProgram.getUniforms();C.uniformsList=br.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Uu(C,V){let K=ae.get(C);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function E0(C,V,K,ee,Z){V.isScene!==!0&&(V=we),w.resetTextureUnits();let Ae=V.fog,Fe=ee.isMeshStandardMaterial?V.environment:null,Xe=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Gi,Ze=(ee.isMeshStandardMaterial?H:b).get(ee.envMap||Fe),rt=ee.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Qe=!!K.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),tt=!!K.morphAttributes.position,Vt=!!K.morphAttributes.normal,Dn=!!K.morphAttributes.color,rn=cs;ee.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(rn=x.toneMapping);let Li=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ft=Li!==void 0?Li.length:0,at=ae.get(ee),nc=m.state.lights;if(ne===!0&&(de===!0||C!==M)){let kn=C===M&&ee.id===D;Be.setState(ee,C,kn)}let kt=!1;ee.version===at.__version?(at.needsLights&&at.lightsStateVersion!==nc.state.version||at.outputColorSpace!==Xe||Z.isBatchedMesh&&at.batching===!1||!Z.isBatchedMesh&&at.batching===!0||Z.isInstancedMesh&&at.instancing===!1||!Z.isInstancedMesh&&at.instancing===!0||Z.isSkinnedMesh&&at.skinning===!1||!Z.isSkinnedMesh&&at.skinning===!0||Z.isInstancedMesh&&at.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&at.instancingColor===!1&&Z.instanceColor!==null||at.envMap!==Ze||ee.fog===!0&&at.fog!==Ae||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==Be.numPlanes||at.numIntersection!==Be.numIntersection)||at.vertexAlphas!==rt||at.vertexTangents!==Qe||at.morphTargets!==tt||at.morphNormals!==Vt||at.morphColors!==Dn||at.toneMapping!==rn||Y.isWebGL2===!0&&at.morphTargetsCount!==Ft)&&(kt=!0):(kt=!0,at.__version=ee.version);let bs=at.currentProgram;kt===!0&&(bs=ea(ee,V,Z));let Nu=!1,Zr=!1,ic=!1,dn=bs.getUniforms(),Es=at.uniforms;if(G.useProgram(bs.program)&&(Nu=!0,Zr=!0,ic=!0),ee.id!==D&&(D=ee.id,Zr=!0),Nu||M!==C){dn.setValue(T,"projectionMatrix",C.projectionMatrix),dn.setValue(T,"viewMatrix",C.matrixWorldInverse);let kn=dn.map.cameraPosition;kn!==void 0&&kn.setValue(T,De.setFromMatrixPosition(C.matrixWorld)),Y.logarithmicDepthBuffer&&dn.setValue(T,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&dn.setValue(T,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Zr=!0,ic=!0)}if(Z.isSkinnedMesh){dn.setOptional(T,Z,"bindMatrix"),dn.setOptional(T,Z,"bindMatrixInverse");let kn=Z.skeleton;kn&&(Y.floatVertexTextures?(kn.boneTexture===null&&kn.computeBoneTexture(),dn.setValue(T,"boneTexture",kn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(dn.setOptional(T,Z,"batchingTexture"),dn.setValue(T,"batchingTexture",Z._matricesTexture,w));let sc=K.morphAttributes;if((sc.position!==void 0||sc.normal!==void 0||sc.color!==void 0&&Y.isWebGL2===!0)&&ct.update(Z,K,bs),(Zr||at.receiveShadow!==Z.receiveShadow)&&(at.receiveShadow=Z.receiveShadow,dn.setValue(T,"receiveShadow",Z.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Es.envMap.value=Ze,Es.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),Zr&&(dn.setValue(T,"toneMappingExposure",x.toneMappingExposure),at.needsLights&&w0(Es,ic),Ae&&ee.fog===!0&&ge.refreshFogUniforms(Es,Ae),ge.refreshMaterialUniforms(Es,ee,J,O,_e),br.upload(T,Du(at),Es,w)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(br.upload(T,Du(at),Es,w),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&dn.setValue(T,"center",Z.center),dn.setValue(T,"modelViewMatrix",Z.modelViewMatrix),dn.setValue(T,"normalMatrix",Z.normalMatrix),dn.setValue(T,"modelMatrix",Z.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let kn=ee.uniformsGroups;for(let rc=0,T0=kn.length;rc<T0;rc++)if(Y.isWebGL2){let Fu=kn[rc];yt.update(Fu,bs),yt.bind(Fu,bs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bs}function w0(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function S0(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,V,K){ae.get(C.texture).__webglTexture=V,ae.get(C.depthTexture).__webglTexture=K;let ee=ae.get(C);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=K===void 0,ee.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){let K=ae.get(C);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,K=0){R=C,I=V,S=K;let ee=!0,Z=null,Ae=!1,Fe=!1;if(C){let Ze=ae.get(C);Ze.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(T.FRAMEBUFFER,null),ee=!1):Ze.__webglFramebuffer===void 0?w.setupRenderTarget(C):Ze.__hasExternalTextures&&w.rebindTextures(C,ae.get(C.texture).__webglTexture,ae.get(C.depthTexture).__webglTexture);let rt=C.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Fe=!0);let Qe=ae.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[V])?Z=Qe[V][K]:Z=Qe[V],Ae=!0):Y.isWebGL2&&C.samples>0&&w.useMultisampledRTT(C)===!1?Z=ae.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?Z=Qe[K]:Z=Qe,A.copy(C.viewport),N.copy(C.scissor),W=C.scissorTest}else A.copy(te).multiplyScalar(J).floor(),N.copy(Q).multiplyScalar(J).floor(),W=ue;if(G.bindFramebuffer(T.FRAMEBUFFER,Z)&&Y.drawBuffers&&ee&&G.drawBuffers(C,Z),G.viewport(A),G.scissor(N),G.setScissorTest(W),Ae){let Ze=ae.get(C.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ze.__webglTexture,K)}else if(Fe){let Ze=ae.get(C.texture),rt=V||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ze.__webglTexture,K||0,rt)}D=-1},this.readRenderTargetPixels=function(C,V,K,ee,Z,Ae,Fe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Xe=Xe[Fe]),Xe){G.bindFramebuffer(T.FRAMEBUFFER,Xe);try{let Ze=C.texture,rt=Ze.format,Qe=Ze.type;if(rt!==si&&Ce.convert(rt)!==T.getParameter(T.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let tt=Qe===ri&&(z.has("EXT_color_buffer_half_float")||Y.isWebGL2&&z.has("EXT_color_buffer_float"));if(Qe!==hs&&Ce.convert(Qe)!==T.getParameter(T.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qe===as&&(Y.isWebGL2||z.has("OES_texture_float")||z.has("WEBGL_color_buffer_float")))&&!tt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-ee&&K>=0&&K<=C.height-Z&&T.readPixels(V,K,ee,Z,Ce.convert(rt),Ce.convert(Qe),Ae)}finally{let Ze=R!==null?ae.get(R).__webglFramebuffer:null;G.bindFramebuffer(T.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(C,V,K=0){let ee=Math.pow(2,-K),Z=Math.floor(V.image.width*ee),Ae=Math.floor(V.image.height*ee);w.setTexture2D(V,0),T.copyTexSubImage2D(T.TEXTURE_2D,K,0,0,C.x,C.y,Z,Ae),G.unbindTexture()},this.copyTextureToTexture=function(C,V,K,ee=0){let Z=V.image.width,Ae=V.image.height,Fe=Ce.convert(K.format),Xe=Ce.convert(K.type);w.setTexture2D(K,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,K.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,K.unpackAlignment),V.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,ee,C.x,C.y,Z,Ae,Fe,Xe,V.image.data):V.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,ee,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Fe,V.mipmaps[0].data):T.texSubImage2D(T.TEXTURE_2D,ee,C.x,C.y,Fe,Xe,V.image),ee===0&&K.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(C,V,K,ee,Z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ae=C.max.x-C.min.x+1,Fe=C.max.y-C.min.y+1,Xe=C.max.z-C.min.z+1,Ze=Ce.convert(ee.format),rt=Ce.convert(ee.type),Qe;if(ee.isData3DTexture)w.setTexture3D(ee,0),Qe=T.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)w.setTexture2DArray(ee,0),Qe=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,ee.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,ee.unpackAlignment);let tt=T.getParameter(T.UNPACK_ROW_LENGTH),Vt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Dn=T.getParameter(T.UNPACK_SKIP_PIXELS),rn=T.getParameter(T.UNPACK_SKIP_ROWS),Li=T.getParameter(T.UNPACK_SKIP_IMAGES),Ft=K.isCompressedTexture?K.mipmaps[Z]:K.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,Ft.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ft.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,C.min.x),T.pixelStorei(T.UNPACK_SKIP_ROWS,C.min.y),T.pixelStorei(T.UNPACK_SKIP_IMAGES,C.min.z),K.isDataTexture||K.isData3DTexture?T.texSubImage3D(Qe,Z,V.x,V.y,V.z,Ae,Fe,Xe,Ze,rt,Ft.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),T.compressedTexSubImage3D(Qe,Z,V.x,V.y,V.z,Ae,Fe,Xe,Ze,Ft.data)):T.texSubImage3D(Qe,Z,V.x,V.y,V.z,Ae,Fe,Xe,Ze,rt,Ft),T.pixelStorei(T.UNPACK_ROW_LENGTH,tt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Vt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Dn),T.pixelStorei(T.UNPACK_SKIP_ROWS,rn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Li),Z===0&&ee.generateMipmaps&&T.generateMipmap(Qe),G.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),G.unbindTexture()},this.resetState=function(){I=0,S=0,R=null,G.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Bh?"display-p3":"srgb",t.unpackColorSpace=bt.workingColorSpace===pl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?Us:Df}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Us?It:Gi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},fh=class extends go{};fh.prototype.isWebGL1Renderer=!0;var Ja=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var xo=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ka=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},wn=new L,yo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Oi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),i=St(i,this.array),s=St(s,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ln=class extends xi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fr,eo=new L,pr=new L,mr=new L,gr=new ie,to=new ie,Xf=new _t,Ea=new L,no=new L,wa=new L,sf=new ie,zc=new ie,rf=new ie,Fn=class extends Xt{constructor(e=new Ln){if(super(),this.isSprite=!0,this.type="Sprite",fr===void 0){fr=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ka(t,5);fr.setIndex([0,1,2,0,2,3]),fr.setAttribute("position",new yo(i,3,0,!1)),fr.setAttribute("uv",new yo(i,2,3,!1))}this.geometry=fr,this.material=e,this.center=new ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),Xf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-mr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Sa(Ea.set(-.5,-.5,0),mr,o,pr,s,r),Sa(no.set(.5,-.5,0),mr,o,pr,s,r),Sa(wa.set(.5,.5,0),mr,o,pr,s,r),sf.set(0,0),zc.set(1,0),rf.set(1,1);let a=e.ray.intersectTriangle(Ea,no,wa,!1,eo);if(a===null&&(Sa(no.set(-.5,.5,0),mr,o,pr,s,r),zc.set(0,1),a=e.ray.intersectTriangle(Ea,wa,no,!1,eo),a===null))return;let l=e.ray.origin.distanceTo(eo);l<e.near||l>e.far||t.push({distance:l,point:eo.clone(),uv:Ls.getInterpolation(eo,Ea,no,wa,sf,zc,rf,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Sa(n,e,t,i,s,r){gr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(to.x=r*gr.x-s*gr.y,to.y=s*gr.x+r*gr.y):to.copy(gr),n.copy(e),n.x+=to.x,n.y+=to.y,n.applyMatrix4(Xf)}var _o=class extends Et{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xr=new _t,of=new _t,Ta=[],af=new Vi,gv=new _t,io=new pe,so=new Wi,Xi=class extends pe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _o(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,gv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xr),af.copy(e.boundingBox).applyMatrix4(xr),this.boundingBox.union(af)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xr),so.copy(e.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(so)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(i),e.ray.intersectsSphere(so)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xr),of.multiplyMatrices(i,xr),io.matrixWorld=of,io.raycast(e,Ta);for(let o=0,a=Ta.length;o<a;o++){let l=Ta[o];l.instanceId=r,l.object=this,t.push(l)}Ta.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _o(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var vo=class extends xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lf=new L,cf=new L,hf=new _t,Bc=new po,Aa=new Wi,ph=class extends Xt{constructor(e=new pt,t=new vo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)lf.fromBufferAttribute(t,s-1),cf.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=lf.distanceTo(cf);e.setAttribute("lineDistance",new qe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;hf.copy(s).invert(),Bc.copy(e.ray).applyMatrix4(hf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,h=new L,u=new L,d=new L,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let x=p,v=_-1;x<v;x+=f){let I=g.getX(x),S=g.getX(x+1);if(c.fromBufferAttribute(m,I),h.fromBufferAttribute(m,S),Bc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let x=p,v=_-1;x<v;x+=f){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Bc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},uf=new L,df=new L,ja=class extends ph{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)uf.fromBufferAttribute(t,s),df.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+uf.distanceTo(df);e.setAttribute("lineDistance",new qe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Pr=class extends xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ff=new _t,mh=new po,Ra=new Wi,Ca=new L,Mo=class extends Xt{constructor(e=new pt,t=new Pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;ff.copy(s).invert(),mh.copy(e.ray).applyMatrix4(ff);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,y=f;g<y;g++){let m=c.getX(g);Ca.fromBufferAttribute(u,m),pf(Ca,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,y=f;g<y;g++)Ca.fromBufferAttribute(u,g),pf(Ca,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pf(n,e,t,i,s,r,o){let a=mh.distanceSqToPoint(n);if(a<t){let l=new L;mh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Yn=class extends Xn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},$n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ie:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new L,s=[],r=[],o=[],a=new L,l=new _t;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(an(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(an(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},bo=class extends $n{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new ie,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},gh=class extends bo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Hh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Pa=new L,Oc=new Hh,Hc=new Hh,kc=new Hh,Eo=class extends $n{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Pa.subVectors(s[0],s[1]).add(s[0]),c=Pa);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Pa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Pa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Oc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),Hc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),kc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Oc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Hc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),kc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Oc.calc(l),Hc.calc(l),kc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function mf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function xv(n,e){let t=1-n;return t*t*e}function yv(n,e){return 2*(1-n)*n*e}function _v(n,e){return n*n*e}function lo(n,e,t,i){return xv(n,e)+yv(n,t)+_v(n,i)}function vv(n,e){let t=1-n;return t*t*t*e}function Mv(n,e){let t=1-n;return 3*t*t*n*e}function bv(n,e){return 3*(1-n)*n*n*e}function Ev(n,e){return n*n*n*e}function co(n,e,t,i,s){return vv(n,e)+Mv(n,t)+bv(n,i)+Ev(n,s)}var Qa=class extends $n{constructor(e=new ie,t=new ie,i=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ie){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(co(e,s.x,r.x,o.x,a.x),co(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xh=class extends $n{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(co(e,s.x,r.x,o.x,a.x),co(e,s.y,r.y,o.y,a.y),co(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},el=class extends $n{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yh=class extends $n{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tl=class extends $n{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(lo(e,s.x,r.x,o.x),lo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nl=class extends $n{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(lo(e,s.x,r.x,o.x),lo(e,s.y,r.y,o.y),lo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},il=class extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(mf(a,l.x,c.x,h.x,u.x),mf(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ie().fromArray(s))}return this}},sl=Object.freeze({__proto__:null,ArcCurve:gh,CatmullRomCurve3:Eo,CubicBezierCurve:Qa,CubicBezierCurve3:xh,EllipseCurve:bo,LineCurve:el,LineCurve3:yh,QuadraticBezierCurve:tl,QuadraticBezierCurve3:nl,SplineCurve:il}),_h=class extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new sl[s.type]().fromJSON(s))}return this}},wo=class extends _h{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new el(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new tl(this.currentPoint.clone(),new ie(e,t),new ie(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Qa(this.currentPoint.clone(),new ie(e,t),new ie(i,s),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new il(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new bo(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vh=class n extends pt{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=an(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new L,d=new ie,f=new L,g=new L,y=new L,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let _=0;_<=t;_++){let x=i+_*h*s,v=Math.sin(x),I=Math.cos(x);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*v,u.y=e[S].y,u.z=e[S].x*I,o.push(u.x,u.y,u.z),d.x=_/t,d.y=S/(e.length-1),a.push(d.x,d.y);let R=l[3*S+0]*v,D=l[3*S+1],M=l[3*S+0]*I;c.push(R,D,M)}}for(let _=0;_<t;_++)for(let x=0;x<e.length-1;x++){let v=x+_*e.length,I=v,S=v+e.length,R=v+e.length+1,D=v+1;r.push(I,S,D),r.push(R,D,S)}this.setIndex(r),this.setAttribute("position",new qe(o,3)),this.setAttribute("uv",new qe(a,2)),this.setAttribute("normal",new qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Zn=class n extends vh{constructor(e=1,t=1,i=4,s=8){let r=new wo;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},So=class n extends pt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,h=new ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new qe(o,3)),this.setAttribute("normal",new qe(a,3)),this.setAttribute("uv",new qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ge=class n extends pt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=i/2,p=0;_(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(f,2));function _(){let v=new L,I=new L,S=0,R=(t-e)/i;for(let D=0;D<=r;D++){let M=[],A=D/r,N=A*(t-e)+e;for(let W=0;W<=s;W++){let re=W/s,P=re*l+a,U=Math.sin(P),O=Math.cos(P);I.x=N*U,I.y=-A*i+m,I.z=N*O,u.push(I.x,I.y,I.z),v.set(U,R,O).normalize(),d.push(v.x,v.y,v.z),f.push(re,1-A),M.push(g++)}y.push(M)}for(let D=0;D<s;D++)for(let M=0;M<r;M++){let A=y[M][D],N=y[M+1][D],W=y[M+1][D+1],re=y[M][D+1];h.push(A,N,re),h.push(N,W,re),S+=6}c.addGroup(p,S,0),p+=S}function x(v){let I=g,S=new ie,R=new L,D=0,M=v===!0?e:t,A=v===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*A,0),d.push(0,A,0),f.push(.5,.5),g++;let N=g;for(let W=0;W<=s;W++){let P=W/s*l+a,U=Math.cos(P),O=Math.sin(P);R.x=M*O,R.y=m*A,R.z=M*U,u.push(R.x,R.y,R.z),d.push(0,A,0),S.x=U*.5+.5,S.y=O*.5*A+.5,f.push(S.x,S.y),g++}for(let W=0;W<s;W++){let re=I+W,P=N+W;v===!0?h.push(P,P+1,re):h.push(P+1,P,re),D+=3}c.addGroup(p,D,v===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bt=class n extends Ge{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},To=class n extends pt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new qe(r,3)),this.setAttribute("normal",new qe(r.slice(),3)),this.setAttribute("uv",new qe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let x=new L,v=new L,I=new L;for(let S=0;S<t.length;S+=3)f(t[S+0],x),f(t[S+1],v),f(t[S+2],I),l(x,v,I,_)}function l(_,x,v,I){let S=I+1,R=[];for(let D=0;D<=S;D++){R[D]=[];let M=_.clone().lerp(v,D/S),A=x.clone().lerp(v,D/S),N=S-D;for(let W=0;W<=N;W++)W===0&&D===S?R[D][W]=M:R[D][W]=M.clone().lerp(A,W/N)}for(let D=0;D<S;D++)for(let M=0;M<2*(S-D)-1;M++){let A=Math.floor(M/2);M%2===0?(d(R[D][A+1]),d(R[D+1][A]),d(R[D][A])):(d(R[D][A+1]),d(R[D+1][A+1]),d(R[D+1][A]))}}function c(_){let x=new L;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(_),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){let _=new L;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];let v=m(_)/2/Math.PI+.5,I=p(_)/Math.PI+.5;o.push(v,1-I)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let x=o[_+0],v=o[_+2],I=o[_+4],S=Math.max(x,v,I),R=Math.min(x,v,I);S>.9&&R<.1&&(x<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),I<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,x){let v=_*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){let _=new L,x=new L,v=new L,I=new L,S=new ie,R=new ie,D=new ie;for(let M=0,A=0;M<r.length;M+=9,A+=6){_.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),S.set(o[A+0],o[A+1]),R.set(o[A+2],o[A+3]),D.set(o[A+4],o[A+5]),I.copy(_).add(x).add(v).divideScalar(3);let N=m(I);y(S,A+0,_,N),y(R,A+2,x,N),y(D,A+4,v,N)}}function y(_,x,v,I){I<0&&_.x===1&&(o[x]=_.x-1),v.x===0&&v.z===0&&(o[x]=I/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Ao=class n extends To{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ro=class extends wo{constructor(e){super(e),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new wo().fromJSON(s))}return this}},wv={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=qf(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(i&&(r=Cv(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)u=n[g],d=n[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Co(r,o,t,a,l,f,0),o}};function qf(n,e,t,i,s){let r,o;if(s===Hv(n,e,t,i)>0)for(r=e;r<t;r+=i)o=gf(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=gf(r,n[r],n[r+1],o);return o&&gl(o,o.next)&&(Lo(o),o=o.next),o}function Fs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(gl(t,t.next)||zt(t.prev,t,t.next)===0)){if(Lo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Co(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Uv(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Tv(n,i,s,r):Sv(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Lo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Av(Fs(n),e,t),Co(n,e,t,i,s,r,2)):o===2&&Rv(n,e,t,i,s,r):Co(Fs(n),e,t,i,s,r,1);break}}}function Sv(n){let e=n.prev,t=n,i=n.next;if(zt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&vr(s,a,r,l,o,c,g.x,g.y)&&zt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Tv(n,e,t,i){let s=n.prev,r=n,o=n.next;if(zt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,y=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Mh(f,g,e,t,i),_=Mh(y,m,e,t,i),x=n.prevZ,v=n.nextZ;for(;x&&x.z>=p&&v&&v.z<=_;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&vr(a,h,l,u,c,d,x.x,x.y)&&zt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&vr(a,h,l,u,c,d,v.x,v.y)&&zt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&vr(a,h,l,u,c,d,x.x,x.y)&&zt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&vr(a,h,l,u,c,d,v.x,v.y)&&zt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Av(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!gl(s,r)&&Yf(s,i,i.next,r)&&Po(s,r)&&Po(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Lo(i),Lo(i.next),i=n=r),i=i.next}while(i!==n);return Fs(i)}function Rv(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zv(o,a)){let l=$f(o,a);o=Fs(o,o.next),l=Fs(l,l.next),Co(o,e,t,i,s,r,0),Co(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Cv(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=qf(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Fv(c));for(s.sort(Pv),r=0;r<s.length;r++)t=Lv(s[r],t);return t}function Pv(n,e){return n.x-e.x}function Lv(n,e){let t=Iv(n,e);if(!t)return e;let i=$f(t,n);return Fs(i,i.next),Fs(t,t.next)}function Iv(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&vr(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Po(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Dv(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function Dv(n,e){return zt(n.prev,n,e.prev)<0&&zt(e.next,n,n.next)<0}function Uv(n,e,t,i){let s=n;do s.z===0&&(s.z=Mh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Nv(s)}function Nv(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Mh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Fv(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function vr(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function zv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Bv(n,e)&&(Po(n,e)&&Po(e,n)&&Ov(n,e)&&(zt(n.prev,n,e.prev)||zt(n,e.prev,e))||gl(n,e)&&zt(n.prev,n,n.next)>0&&zt(e.prev,e,e.next)>0)}function zt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function gl(n,e){return n.x===e.x&&n.y===e.y}function Yf(n,e,t,i){let s=Ia(zt(n,e,t)),r=Ia(zt(n,e,i)),o=Ia(zt(t,i,n)),a=Ia(zt(t,i,e));return!!(s!==r&&o!==a||s===0&&La(n,t,e)||r===0&&La(n,i,e)||o===0&&La(t,n,i)||a===0&&La(t,e,i))}function La(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ia(n){return n>0?1:n<0?-1:0}function Bv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Yf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Po(n,e){return zt(n.prev,n,n.next)<0?zt(n,e,n.next)>=0&&zt(n,n.prev,e)>=0:zt(n,e,n.prev)<0||zt(n,n.next,e)<0}function Ov(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function $f(n,e){let t=new bh(n.i,n.x,n.y),i=new bh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function gf(n,e,t,i){let s=new bh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Lo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function bh(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Hv(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var ho=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];xf(e),yf(i,e);let o=e.length;t.forEach(xf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,yf(i,t[l]);let a=wv.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function xf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function yf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var rl=class n extends pt{constructor(e=new Ro([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new qe(s,3)),this.setAttribute("uv",new qe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:kv,x,v=!1,I,S,R,D;p&&(x=p.getSpacedPoints(h),v=!0,d=!1,I=p.computeFrenetFrames(h,!1),S=new L,R=new L,D=new L),d||(m=0,f=0,g=0,y=0);let M=a.extractPoints(c),A=M.shape,N=M.holes;if(!ho.isClockWise(A)){A=A.reverse();for(let T=0,B=N.length;T<B;T++){let z=N[T];ho.isClockWise(z)&&(N[T]=z.reverse())}}let re=ho.triangulateShape(A,N),P=A;for(let T=0,B=N.length;T<B;T++){let z=N[T];A=A.concat(z)}function U(T,B,z){return B||console.error("THREE.ExtrudeGeometry: vec does not exist"),T.clone().addScaledVector(B,z)}let O=A.length,J=re.length;function $(T,B,z){let Y,G,fe,ae=T.x-B.x,w=T.y-B.y,b=z.x-T.x,H=z.y-T.y,oe=ae*ae+w*w,le=ae*H-w*b;if(Math.abs(le)>Number.EPSILON){let he=Math.sqrt(oe),Re=Math.sqrt(b*b+H*H),ge=B.x-w/he,Se=B.y+ae/he,ze=z.x-H/Re,Be=z.y+b/Re,ce=((ze-ge)*H-(Be-Se)*b)/(ae*H-w*b);Y=ge+ae*ce-T.x,G=Se+w*ce-T.y;let ut=Y*Y+G*G;if(ut<=2)return new ie(Y,G);fe=Math.sqrt(ut/2)}else{let he=!1;ae>Number.EPSILON?b>Number.EPSILON&&(he=!0):ae<-Number.EPSILON?b<-Number.EPSILON&&(he=!0):Math.sign(w)===Math.sign(H)&&(he=!0),he?(Y=-w,G=ae,fe=Math.sqrt(oe)):(Y=ae,G=w,fe=Math.sqrt(oe/2))}return new ie(Y/fe,G/fe)}let X=[];for(let T=0,B=P.length,z=B-1,Y=T+1;T<B;T++,z++,Y++)z===B&&(z=0),Y===B&&(Y=0),X[T]=$(P[T],P[z],P[Y]);let te=[],Q,ue=X.concat();for(let T=0,B=N.length;T<B;T++){let z=N[T];Q=[];for(let Y=0,G=z.length,fe=G-1,ae=Y+1;Y<G;Y++,fe++,ae++)fe===G&&(fe=0),ae===G&&(ae=0),Q[Y]=$(z[Y],z[fe],z[ae]);te.push(Q),ue=ue.concat(Q)}for(let T=0;T<m;T++){let B=T/m,z=f*Math.cos(B*Math.PI/2),Y=g*Math.sin(B*Math.PI/2)+y;for(let G=0,fe=P.length;G<fe;G++){let ae=U(P[G],X[G],Y);me(ae.x,ae.y,-z)}for(let G=0,fe=N.length;G<fe;G++){let ae=N[G];Q=te[G];for(let w=0,b=ae.length;w<b;w++){let H=U(ae[w],Q[w],Y);me(H.x,H.y,-z)}}}let q=g+y;for(let T=0;T<O;T++){let B=d?U(A[T],ue[T],q):A[T];v?(R.copy(I.normals[0]).multiplyScalar(B.x),S.copy(I.binormals[0]).multiplyScalar(B.y),D.copy(x[0]).add(R).add(S),me(D.x,D.y,D.z)):me(B.x,B.y,0)}for(let T=1;T<=h;T++)for(let B=0;B<O;B++){let z=d?U(A[B],ue[B],q):A[B];v?(R.copy(I.normals[T]).multiplyScalar(z.x),S.copy(I.binormals[T]).multiplyScalar(z.y),D.copy(x[T]).add(R).add(S),me(D.x,D.y,D.z)):me(z.x,z.y,u/h*T)}for(let T=m-1;T>=0;T--){let B=T/m,z=f*Math.cos(B*Math.PI/2),Y=g*Math.sin(B*Math.PI/2)+y;for(let G=0,fe=P.length;G<fe;G++){let ae=U(P[G],X[G],Y);me(ae.x,ae.y,u+z)}for(let G=0,fe=N.length;G<fe;G++){let ae=N[G];Q=te[G];for(let w=0,b=ae.length;w<b;w++){let H=U(ae[w],Q[w],Y);v?me(H.x,H.y+x[h-1].y,x[h-1].x+z):me(H.x,H.y,u+z)}}}ne(),de();function ne(){let T=s.length/3;if(d){let B=0,z=O*B;for(let Y=0;Y<J;Y++){let G=re[Y];Le(G[2]+z,G[1]+z,G[0]+z)}B=h+m*2,z=O*B;for(let Y=0;Y<J;Y++){let G=re[Y];Le(G[0]+z,G[1]+z,G[2]+z)}}else{for(let B=0;B<J;B++){let z=re[B];Le(z[2],z[1],z[0])}for(let B=0;B<J;B++){let z=re[B];Le(z[0]+O*h,z[1]+O*h,z[2]+O*h)}}i.addGroup(T,s.length/3-T,0)}function de(){let T=s.length/3,B=0;_e(P,B),B+=P.length;for(let z=0,Y=N.length;z<Y;z++){let G=N[z];_e(G,B),B+=G.length}i.addGroup(T,s.length/3-T,1)}function _e(T,B){let z=T.length;for(;--z>=0;){let Y=z,G=z-1;G<0&&(G=T.length-1);for(let fe=0,ae=h+m*2;fe<ae;fe++){let w=O*fe,b=O*(fe+1),H=B+Y+w,oe=B+G+w,le=B+G+b,he=B+Y+b;De(H,oe,le,he)}}}function me(T,B,z){l.push(T),l.push(B),l.push(z)}function Le(T,B,z){we(T),we(B),we(z);let Y=s.length/3,G=_.generateTopUV(i,s,Y-3,Y-2,Y-1);Ue(G[0]),Ue(G[1]),Ue(G[2])}function De(T,B,z,Y){we(T),we(B),we(Y),we(B),we(z),we(Y);let G=s.length/3,fe=_.generateSideWallUV(i,s,G-6,G-3,G-2,G-1);Ue(fe[0]),Ue(fe[1]),Ue(fe[3]),Ue(fe[1]),Ue(fe[2]),Ue(fe[3])}function we(T){s.push(l[T*3+0]),s.push(l[T*3+1]),s.push(l[T*3+2])}function Ue(T){r.push(T.x),r.push(T.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Gv(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new sl[s.type]().fromJSON(s)),new n(i,e.options)}},kv={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ie(r,o),new ie(a,l),new ie(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ie(o,1-l),new ie(c,1-u),new ie(d,1-g),new ie(y,1-p)]:[new ie(a,1-l),new ie(h,1-u),new ie(f,1-g),new ie(m,1-p)]}};function Gv(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var fs=class n extends To{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},qi=class n extends To{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ol=class n extends pt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new L,g=new ie;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let m=y*(i+1);for(let p=0;p<i;p++){let _=p+m,x=_,v=_+i+1,I=_+i+2,S=_+1;a.push(x,v,S),a.push(v,I,S)}}this.setIndex(a),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ie=class n extends pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,d=new L,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let _=[],x=p/i,v=0;p===0&&o===0?v=.5/t:p===i&&l===Math.PI&&(v=-.5/t);for(let I=0;I<=t;I++){let S=I/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(S+v,1-x),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){let x=h[p][_+1],v=h[p][_],I=h[p+1][_],S=h[p+1][_+1];(p!==0||o>0)&&f.push(x,v,S),(p!==i-1||l<Math.PI)&&f.push(v,I,S)}this.setIndex(f),this.setAttribute("position",new qe(g,3)),this.setAttribute("normal",new qe(y,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qt=class n extends pt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let y=g/s*r,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;o.push(y,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new qe(a,3)),this.setAttribute("normal",new qe(l,3)),this.setAttribute("uv",new qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},al=class n extends pt{constructor(e=1,t=.4,i=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:r,q:o},i=Math.floor(i),s=Math.floor(s);let a=[],l=[],c=[],h=[],u=new L,d=new L,f=new L,g=new L,y=new L,m=new L,p=new L;for(let x=0;x<=i;++x){let v=x/i*r*Math.PI*2;_(v,r,o,e,f),_(v+.01,r,o,e,g),m.subVectors(g,f),p.addVectors(g,f),y.crossVectors(m,p),p.crossVectors(y,m),y.normalize(),p.normalize();for(let I=0;I<=s;++I){let S=I/s*Math.PI*2,R=-t*Math.cos(S),D=t*Math.sin(S);u.x=f.x+(R*p.x+D*y.x),u.y=f.y+(R*p.y+D*y.y),u.z=f.z+(R*p.z+D*y.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(x/i),h.push(I/s)}}for(let x=1;x<=i;x++)for(let v=1;v<=s;v++){let I=(s+1)*(x-1)+(v-1),S=(s+1)*x+(v-1),R=(s+1)*x+v,D=(s+1)*(x-1)+v;a.push(I,S,D),a.push(S,R,D)}this.setIndex(a),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(h,2));function _(x,v,I,S,R){let D=Math.cos(x),M=Math.sin(x),A=I/v*x,N=Math.cos(A);R.x=S*(2+N)*.5*D,R.y=S*(2+N)*M*.5,R.z=S*Math.sin(A)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},ll=class n extends pt{constructor(e=new nl(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new ie,h=new L,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(f,2));function y(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),_(),p()}function m(x){h=e.getPointAt(x/t,h);let v=o.normals[x],I=o.binormals[x];for(let S=0;S<=s;S++){let R=S/s*Math.PI*2,D=Math.sin(R),M=-Math.cos(R);l.x=M*v.x+D*I.x,l.y=M*v.y+D*I.y,l.z=M*v.z+D*I.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=t;x++)for(let v=1;v<=s;v++){let I=(s+1)*(x-1)+(v-1),S=(s+1)*x+(v-1),R=(s+1)*x+v,D=(s+1)*(x-1)+v;g.push(I,S,D),g.push(S,R,D)}}function _(){for(let x=0;x<=t;x++)for(let v=0;v<=s;v++)c.x=x/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new sl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Oe=class extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uf,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ai=class extends Oe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return an(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Da(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Vv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Lr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Eh=class extends Lr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pd,endingEnd:pd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case md:r=e,a=2*t-i;break;case gd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case md:o=e,l=2*i-t;break;case gd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,_=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+_*o[c+I]+x*o[l+I]+v*o[u+I];return r}},wh=class extends Lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Sh=class extends Lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},li=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Da(t,this.TimeBufferType),this.values=Da(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Da(e.times,Array),values:Da(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Sh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Eh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Na:t=this.InterpolantFactoryMethodDiscrete;break;case Fa:t=this.InterpolantFactoryMethodLinear;break;case dc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Na;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Vv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===dc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Fa;var zs=class extends li{};zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=Na;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Th=class extends li{};Th.prototype.ValueTypeName="color";var Ah=class extends li{};Ah.prototype.ValueTypeName="number";var Rh=class extends Lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)oi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Io=class extends li{InterpolantFactoryMethodLinear(e){return new Rh(this.times,this.values,this.getValueSize(),e)}};Io.prototype.ValueTypeName="quaternion";Io.prototype.DefaultInterpolation=Fa;Io.prototype.InterpolantFactoryMethodSmooth=void 0;var Bs=class extends li{};Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=Na;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ch=class extends li{};Ch.prototype.ValueTypeName="vector";var Ph=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Wv=new Ph,Lh=class{constructor(e){this.manager=e!==void 0?e:Wv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Lh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Do=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},cl=class extends Do{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Gc=new _t,_f=new L,vf=new L,hl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;_f.setFromMatrixPosition(e.matrixWorld),t.position.copy(_f),vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vf),t.updateMatrixWorld(),Gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Mf=new _t,ro=new L,Vc=new L,Ih=class extends hl{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ro.setFromMatrixPosition(e.matrixWorld),i.position.copy(ro),Vc.copy(i.position),Vc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Vc),i.updateMatrixWorld(),s.makeTranslation(-ro.x,-ro.y,-ro.z),Mf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf)}},ul=class extends Do{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ih}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Dh=class extends hl{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dl=class extends Do{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Dh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ir=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=bf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function bf(){return(typeof performance>"u"?Date:performance).now()}var kh="\\[\\]\\.:\\/",Xv=new RegExp("["+kh+"]","g"),Gh="[^"+kh+"]",qv="[^"+kh.replace("\\.","")+"]",Yv=/((?:WC+[\/:])*)/.source.replace("WC",Gh),$v=/(WCOD+)?/.source.replace("WCOD",qv),Zv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gh),Jv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gh),Kv=new RegExp("^"+Yv+$v+Zv+Jv+"$"),jv=["material","materials","bones","map"],Uh=class{constructor(e,t,i){let s=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xv,"")}static parseTrackName(e){let t=Kv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);jv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=Uh;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var xl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ci=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},e1=new Rr(-1,1,1,-1,0,1),Vh=class extends pt{constructor(){super(),this.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qe([0,2,0,0,2,0],2))}},t1=new Vh,Nr=class{constructor(e){this._mesh=new pe(t1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,e1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Fr=class extends ci{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof en?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Dr.clone(e.uniforms),this.material=new en({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Nr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Uo=class extends ci{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},yl=class extends ci{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var _l=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ie);this._width=i.width,this._height=i.height,t=new An(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ri}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fr(xl),this.copyPass.material.blending=gi,this.clock=new Ir}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Uo!==void 0&&(o instanceof Uo?i=!0:o instanceof yl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var vl=class extends ci{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ve}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Zf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var zr=class n extends ci{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new ve(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new An(r,o,{type:ri}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new An(r,o,{type:ri});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new An(r,o,{type:ri});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Zf;this.highPassUniforms=Dr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new en({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ie(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=xl;this.copyUniforms=Dr.clone(h.uniforms),this.blendMaterial=new en({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Wt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ve,this.oldClearAlpha=1,this.basic=new mt,this.fsQuad=new Nr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ie(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new en({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new en({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};zr.BlurDirectionX=new ie(1,0);zr.BlurDirectionY=new ie(0,1);function Kf(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new pt,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Jf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][d]);let g=Jf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Jf(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let c=0;c<n.length;++c)o.set(n[c].array,a),a+=n[c].array.length;let l=new Et(o,t,i);return s!==void 0&&(l.gpuType=s),l}var Yi=[{id:"low",name:"Low",color:6087167,css:"#5ce1ff",bounty:[50,150],xp:10,weight:50,beam:22},{id:"medium",name:"Medium",color:16765286,css:"#ffd166",bounty:[250,750],xp:25,weight:29,beam:34},{id:"high",name:"High",color:16747586,css:"#ff8c42",bounty:[1e3,3e3],xp:60,weight:13,beam:52},{id:"critical",name:"Critical",color:16727423,css:"#ff3d7f",bounty:[5e3,15e3],xp:150,weight:5,beam:85},{id:"zeroday",name:"Zero-Day",color:11563263,css:"#c79bff",bounty:[25e3,6e4],xp:400,weight:3,beam:110}],zn={radar:{name:"Recon Radar",icon:"\u{1F4E1}",color:6087167,css:"#5ce1ff",dur:35,desc:"Radar range doubled, and nearby bugs drift to you"},boost:{name:"Proxy Boost",icon:"\u26A1",color:8257434,css:"#7dff9a",dur:20,desc:"Ride much faster for a while"},double:{name:"Double Bounty",icon:"\u{1F4B0}",color:16765286,css:"#ffd166",dur:45,desc:"Bounties and XP are doubled"},doublejump:{name:"Double Jump",icon:"\u{1F998}",color:16751196,css:"#ff9a5c",dur:40,desc:"Press hop again in mid-air for a second jump"},moon:{name:"Moon Gravity",icon:"\u{1F319}",color:13687039,css:"#d0d8ff",dur:30,desc:"Floaty low gravity: huge, slow hops"},glide:{name:"Glider",icon:"\u{1FA82}",color:10158040,css:"#9affd8",dur:35,desc:"Hold hop while falling to glide through the air"},magnet:{name:"Bug Magnet",icon:"\u{1F9F2}",color:16738992,css:"#ff6ab0",dur:30,desc:"Bugs and fuel within 30 m fly straight to you"}},Wh=["radar","boost","double","doublejump","moon","glide","magnet"],Br={perCan:30,max:100,drain:13,turbo:2.2},ps={clear:{name:"Clear skies",icon:"\u2728"},snow:{name:"Gentle snowfall",icon:"\u2744",particle:"snow",fog:1.15,wind:.3,clouds:.35},blizzard:{name:"Snow squall",icon:"\u{1F328}",particle:"snow",heavy:!0,fog:2.1,wind:1,clouds:.75},aurora:{name:"Aurora storm",icon:"\u{1F30C}",aurora:1},fog:{name:"Soft mist",icon:"\u{1F32B}",fog:2.6,clouds:.5},meteors:{name:"Meteor shower \xB7 2\xD7 XP",icon:"\u2604",meteors:!0,luck:!0},rain:{name:"Soft rain",icon:"\u{1F327}",rain:!0,fog:1.6,wind:.4,clouds:.85},petals:{name:"Blossom drift",icon:"\u{1F338}",particle:"petals",wind:.5},fireflies:{name:"Fireflies",icon:"\u2728",particle:"fireflies"},leaves:{name:"Falling leaves",icon:"\u{1F342}",particle:"leaves",wind:.6,clouds:.3},dust:{name:"Desert breeze",icon:"\u{1F4A8}",particle:"dust",fog:1.5,wind:.9},datarain:{name:"Data rain",icon:"\u{1F4BE}",particle:"data"}},yi=[{id:"tundra",name:"Frostbyte Tundra",icon:"\u2744",tagline:"Snowy hills, frozen lakes and the northern lights.",seed:0,terrain:"hills",hills:60,bumps:4.5,mountains:110,lakeBias:.42,sky:{zenith:[.006,.008,.035],mid:[.03,.035,.1],horizon:[.075,.07,.16],aurora:[[.25,.95,.65],[.6,.45,1]],auroraBase:.3,sun:[.35,.3,-.88],sunColor:[1,.96,.88],sunSize:.9996,sunGlow:.35,stars:1,cloudColor:[.16,.17,.3],retro:0},fog:2.1,hemi:[11057407,2761800,.85],dir:[13950463,1.8],lantern:16754784,bloom:.6,exposure:1.05,ground:{flat:[.84,.88,1],flat2:[.76,.82,.97],steep:[.24,.26,.33],peak:[.72,.82,1],shore:[.7,.76,.9]},water:"ice",tree:"pine",snowy:!0,trail:[.62,.68,.86],cold:!0,grid:0,landmark:!0,weathers:["snow","clear","aurora","blizzard","snow","fog","meteors"],music:{scale:[261.63,293.66,329.63,392,440,523.25,587.33,659.25,783.99,880,1046.5],chords:[[130.81,196,329.63],[110,164.81,261.63],[87.31,130.81,220],[98,146.83,246.94]],voice:"bell",beat:.78,rhythm:[1,0,1,0,1,0,0,0]}},{id:"sakura",name:"Sakura Subnet",icon:"\u{1F338}",tagline:"Cherry blossoms at dusk beside still lakes.",seed:7,terrain:"hills",hills:45,bumps:3,mountains:70,lakeBias:.44,sky:{zenith:[.04,.03,.12],mid:[.22,.09,.2],horizon:[.5,.22,.28],aurora:[[1,.5,.7],[.6,.5,1]],auroraBase:0,sun:[0,.07,-1],sunColor:[1,.72,.5],sunSize:.9985,sunGlow:.65,stars:.45,cloudColor:[.55,.28,.38],retro:0},fog:2.4,hemi:[16761048,3811898,.95],dir:[16763304,1.7],lantern:16756928,bloom:.55,exposure:1,ground:{flat:[.24,.42,.18],flat2:[.62,.42,.5],steep:[.36,.32,.3],peak:[.8,.8,.86],shore:[.6,.54,.42]},water:"water",waterColor:3496568,tree:"sakura",snowy:!1,rockTint:9076856,trail:null,cold:!1,grid:0,weathers:["petals","clear","fireflies","rain","petals","fog","meteors"],music:{scale:[293.66,329.63,349.23,440,466.16,587.33,659.25,698.46,880,932.33],chords:[[146.83,220,349.23],[116.54,174.61,293.66],[130.81,196,329.63],[110,164.81,261.63]],voice:"koto",beat:.7,rhythm:[1,0,1,1,0,1,0,0]}},{id:"dunes",name:"Dune Protocol",icon:"\u{1F3DC}",tagline:"Endless twilight dunes under a sky full of stars.",seed:19,terrain:"dunes",lakeBias:.36,sky:{zenith:[.015,.015,.06],mid:[.13,.06,.16],horizon:[.52,.26,.16],aurora:[[1,.6,.3],[.8,.4,1]],auroraBase:0,sun:[-.3,.05,-.95],sunColor:[1,.58,.32],sunSize:.998,sunGlow:.8,stars:1.3,cloudColor:[.45,.22,.22],retro:0},fog:1.8,hemi:[16762522,4860458,.85],dir:[16757632,1.9],lantern:16760944,bloom:.55,exposure:1,ground:{flat:[.8,.58,.36],flat2:[.88,.67,.44],steep:[.6,.39,.25],peak:[.9,.72,.5],shore:[.5,.45,.3]},water:"water",waterColor:2058874,tree:"cactus",snowy:!1,sparkle:.5,rockTint:10514506,trail:[.6,.42,.26],cold:!1,grid:0,weathers:["clear","dust","meteors","clear","fog","dust"],music:{scale:[293.66,311.13,369.99,392,440,466.16,523.25,587.33,622.25,739.99],chords:[[146.83,220,293.66],[155.56,233.08,311.13],[130.81,196,261.63],[146.83,220,369.99]],voice:"oud",beat:.62,rhythm:[1,1,0,1,0,1,1,0]}},{id:"neon",name:"Quiet Grid",icon:"\u{1F310}",tagline:"A soft indigo night with faint lines of light.",seed:31,terrain:"hills",hills:40,bumps:2,mountains:150,lakeBias:.45,sky:{zenith:[.008,.012,.04],mid:[.03,.04,.12],horizon:[.09,.1,.24],aurora:[[.3,.6,.9],[.6,.45,.9]],auroraBase:.08,sun:[0,.16,-1],sunColor:[.42,.42,.66],sunSize:.9965,sunGlow:.35,stars:.8,cloudColor:[0,0,0],retro:0},fog:2.2,hemi:[9083608,1315880,.7],dir:[11055344,1],lantern:10139903,bloom:.3,exposure:.9,ground:{flat:[.06,.07,.13],flat2:[.07,.085,.16],steep:[.1,.1,.2],peak:[.16,.17,.3],shore:[.05,.06,.11]},water:"mirror",waterColor:787988,tree:"crystal",snowy:!1,rockTint:3809360,trail:null,cold:!1,grid:.3,gridColor:[.3,.45,.9],gridColor2:[.25,.6,.8],weathers:["clear","fireflies","aurora","fog","meteors"],music:{scale:[220,261.63,293.66,329.63,392,440,523.25,587.33,659.25,783.99],chords:[[110,164.81,261.63],[87.31,130.81,220],[130.81,196,329.63],[98,146.83,246.94]],voice:"synth",beat:.42,arp:!0,rhythm:[1,0,0,0,0,0,1,0]}},{id:"autumn",name:"Autumn Kernel",icon:"\u{1F341}",tagline:"Golden forests and amber lakes at sunset.",seed:47,terrain:"hills",hills:55,bumps:4,mountains:90,lakeBias:.43,sky:{zenith:[.05,.07,.2],mid:[.3,.2,.26],horizon:[.8,.42,.2],aurora:[[1,.7,.3],[.9,.4,.5]],auroraBase:0,sun:[.4,.09,-.9],sunColor:[1,.7,.4],sunSize:.9986,sunGlow:.75,stars:.25,cloudColor:[.8,.45,.35],retro:0},fog:2.2,hemi:[16765600,3811872,1],dir:[16760960,2],lantern:16756832,bloom:.5,exposure:1,ground:{flat:[.34,.34,.12],flat2:[.52,.3,.1],steep:[.38,.32,.28],peak:[.6,.56,.5],shore:[.45,.4,.28]},water:"water",waterColor:3820122,tree:"autumn",snowy:!1,rockTint:8024168,trail:null,cold:!1,grid:0,weathers:["leaves","clear","rain","fog","fireflies","leaves","meteors"],music:{scale:[196,220,246.94,293.66,329.63,392,440,493.88,587.33,659.25],chords:[[98,146.83,246.94],[130.81,196,329.63],[110,164.81,261.63],[146.83,220,369.99]],voice:"pluck",beat:.66,rhythm:[1,0,1,0,1,1,0,0]}},{id:"lagoon",name:"Coral Cache",icon:"\u{1F3DD}",tagline:"Warm islands, palm trees and a turquoise sea at sunset.",seed:61,terrain:"hills",hills:34,bumps:2,mountains:40,lakeBias:.5,sky:{zenith:[.05,.16,.35],mid:[.2,.45,.6],horizon:[.95,.6,.45],aurora:[[1,.7,.5],[.5,.8,1]],auroraBase:0,sun:[.2,.12,-.95],sunColor:[1,.8,.55],sunSize:.998,sunGlow:.8,stars:.15,cloudColor:[.9,.6,.55],retro:0},fog:1.9,hemi:[12577023,4866096,.7],dir:[16765088,1.5],lantern:16760960,bloom:.4,exposure:.8,ground:{flat:[.62,.52,.33],flat2:[.22,.42,.18],steep:[.45,.4,.33],peak:[.6,.6,.55],shore:[.85,.78,.6]},water:"water",waterColor:1739418,tree:"palm",snowy:!1,rockTint:10127992,trail:[.6,.5,.32],cold:!1,grid:0,weathers:["clear","rain","fireflies","clear","fog","meteors"],music:{scale:[261.63,293.66,329.63,392,440,523.25,587.33,659.25,783.99,880],chords:[[130.81,196,329.63],[110,164.81,261.63],[87.31,130.81,220],[98,146.83,246.94]],voice:"kalimba",beat:.5,rhythm:[1,0,1,1,0,1,1,0]}},{id:"bamboo",name:"Bamboo Buffer",icon:"\u{1F38B}",tagline:"A misty green forest where pandas nap.",seed:73,terrain:"hills",hills:50,bumps:3,mountains:100,lakeBias:.43,sky:{zenith:[.1,.2,.22],mid:[.3,.42,.38],horizon:[.6,.7,.6],aurora:[[.6,1,.7],[.8,1,.6]],auroraBase:0,sun:[.3,.3,-.9],sunColor:[1,.95,.8],sunSize:.9992,sunGlow:.4,stars:0,cloudColor:[.7,.78,.72],retro:0},fog:2.8,hemi:[14221280,2767402,.7],dir:[16773328,1.4],lantern:16773280,bloom:.4,exposure:.78,ground:{flat:[.2,.36,.14],flat2:[.28,.42,.16],steep:[.3,.3,.26],peak:[.55,.6,.55],shore:[.4,.42,.3]},water:"water",waterColor:2775626,tree:"bamboo",snowy:!1,rockTint:6975592,trail:null,cold:!1,grid:0,weathers:["fog","clear","rain","fireflies","fog"],music:{scale:[293.66,349.23,392,440,523.25,587.33,698.46,783.99,880,1046.5],chords:[[146.83,220,349.23],[174.61,261.63,349.23],[130.81,196,329.63],[146.83,220,293.66]],voice:"flute",beat:.95,rhythm:[1,0,0,1,0,1,0,0]}},{id:"moon",name:"Lunar Sandbox",icon:"\u{1F319}",tagline:"Quiet grey hills, a sky full of stars, and floaty jumps.",seed:89,terrain:"hills",hills:26,bumps:3.5,mountains:70,lakeBias:.3,sky:{zenith:[0,0,.004],mid:[.004,.004,.012],horizon:[.02,.02,.035],aurora:[[.4,.6,1],[.8,.8,1]],auroraBase:0,sun:[.5,.35,-.8],sunColor:[1,.98,.92],sunSize:.9996,sunGlow:.3,stars:2.2,cloudColor:[0,0,0],retro:0},fog:1.2,hemi:[8425648,2105384,.55],dir:[16053503,2.4],lantern:10535167,bloom:.5,exposure:1,ground:{flat:[.42,.42,.45],flat2:[.33,.33,.36],steep:[.2,.2,.22],peak:[.6,.6,.64],shore:[.25,.25,.28]},water:"mirror",waterColor:787988,tree:"spire",snowy:!1,sparkle:.7,rockTint:9079442,trail:[.25,.25,.28],cold:!1,grid:0,lowG:!0,weathers:["clear","meteors","clear","aurora"],music:{scale:[261.63,293.66,329.63,369.99,392,440,493.88,523.25,587.33,659.25,739.99],chords:[[130.81,196,246.94],[146.83,220,369.99],[110,164.81,246.94],[98,146.83,293.66]],voice:"glass",beat:1.05,rhythm:[1,0,0,0,1,0,0,0]}},{id:"meadow",name:"Daybreak Meadow",icon:"\u{1F33C}",tagline:"A bright morning of wildflowers and birch trees.",seed:97,terrain:"hills",hills:40,bumps:3,mountains:80,lakeBias:.42,sky:{zenith:[.1,.28,.62],mid:[.32,.52,.8],horizon:[.85,.8,.7],aurora:[[1,1,.8],[.8,.9,1]],auroraBase:0,sun:[-.4,.35,-.85],sunColor:[1,.95,.8],sunSize:.9993,sunGlow:.5,stars:0,cloudColor:[1,.95,.9],retro:0},fog:1.7,hemi:[13625087,4872752,.75],dir:[16773848,1.8],lantern:16773312,bloom:.3,exposure:.75,ground:{flat:[.3,.5,.16],flat2:[.42,.55,.18],steep:[.4,.36,.3],peak:[.8,.8,.82],shore:[.6,.56,.4]},water:"water",waterColor:3832496,tree:"birch",snowy:!1,rockTint:9078912,trail:null,cold:!1,grid:0,weathers:["clear","petals","clear","rain","fog"],music:{scale:[196,220,246.94,293.66,329.63,392,440,493.88,587.33,659.25],chords:[[98,146.83,246.94],[82.41,123.47,196],[130.81,196,329.63],[146.83,220,369.99]],voice:"piano",beat:.56,rhythm:[1,0,1,1,1,0,1,0]}}],n1={tundra:{terrain:"hills",forest:[.025,.6,.008],lodge:[10120011,3811886],birds:{color:14673653,size:1.1,form:"v",n:7},flies:null},sakura:{terrain:"terrace",forest:[.05,.45,.012],lodge:[11028538,2500140],birds:{color:16184046,size:1.6,form:"circle",n:5},flies:[16761048,16777215,16752320]},dunes:{terrain:"dunes",forest:[.02,.1,.008],lodge:[13148272,9067066],birds:{color:3811872,size:1.5,form:"soar",n:3},flies:null},neon:{terrain:"blocks",forest:[.012,.25,.01],lodge:[3421274,1842228],birds:{color:6982352,size:1,form:"circle",n:5},flies:[5929680,9071312]},autumn:{terrain:"valleys",forest:[.04,.7,.007],lodge:[10120011,6957600],birds:{color:2761760,size:1.2,form:"v",n:9},flies:[15241274,16765040]},lagoon:{terrain:"islands",forest:[.12,.3,.02],treeMaxH:9,lodge:[15259832,2783882],birds:{color:16777215,size:1.2,form:"circle",n:6},flies:[6349024,16769136]},bamboo:{terrain:"karst",forest:[.1,.9,.015],lodge:[9083482,3820080],birds:{color:2771504,size:.8,form:"circle",n:6},flies:[14221264,16777215]},moon:{terrain:"craters",forest:[.006,.05,.01],lodge:[13158608,9079448],birds:null,flies:null},meadow:{terrain:"plains",forest:[.012,.25,.006],lodge:[15788248,11553338],birds:{color:2107448,size:.8,form:"circle",n:7},flies:[16769120,7385343,16748624,16777215]}};for(let n of yi)Object.assign(n,n1[n.id]);var jf=[[1,"Curious Beginner"],[3,"Recon Rookie"],[5,"Payload Apprentice"],[8,"Triage Regular"],[12,"Hall of Famer"],[16,"Top-100 Hunter"],[20,"Live Event Invitee"],[25,"Community Legend"]],Os=n=>{let e=jf[0][1];for(let[t,i]of jf)n>=t&&(e=i);return e},Ml=n=>Math.round(120*Math.pow(n,1.45)),bl=[{id:"first_bug",icon:"\u{1F41E}",name:"First Bug",desc:"Find your very first bug."},{id:"first_report",icon:"\u{1F4DD}",name:"Triaged!",desc:"Submit a report at a Triage Lodge."},{id:"critical",icon:"\u{1F4A5}",name:"Critical Finder",desc:"Find a Critical severity bug."},{id:"chain5",icon:"\u{1F517}",name:"Chain Reaction",desc:"Chain 5 bugs in a row."},{id:"chain10",icon:"\u26D3",name:"Exploit Chain",desc:"Chain 10 bugs in a row."},{id:"bounty10k",icon:"\u{1F4B5}",name:"Five Figures",desc:"Earn $10,000 in total bounties."},{id:"bounty100k",icon:"\u{1F4B0}",name:"Six Figures",desc:"Earn $100,000 in total bounties."},{id:"codex5",icon:"\u{1F4C7}",name:"Community Learner",desc:"Unlock 5 Hacker Codex cards."},{id:"codex20",icon:"\u{1F4DA}",name:"Hall of Fame Scholar",desc:"Unlock 20 Hacker Codex cards."},{id:"podcast",icon:"\u{1F4FB}",name:"Night Listener",desc:"Tune in at a Critical Thinking podcast tower."},{id:"turbo",icon:"\u{1F525}",name:"Full Throttle",desc:"Use fuel to turbo for the first time."},{id:"airjump",icon:"\u{1F998}",name:"Sky Hopper",desc:"Do a double jump."},{id:"glider",icon:"\u{1FA82}",name:"Gentle Landing",desc:"Glide through the air."},{id:"warp1",icon:"\u{1F300}",name:"Zero-Day Traveller",desc:"Warp into a new world."},{id:"worlds_all",icon:"\u{1F30D}",name:"Every Subnet",desc:"Visit every world."},{id:"zeroday",icon:"\u{1F7E3}",name:"Zero-Day Hunter",desc:"Find a Zero-Day, the rarest bug of all."},{id:"friends",icon:"\u{1F43E}",name:"Animal Friend",desc:"Say hello to 5 different kinds of animal."},{id:"dist5k",icon:"\u{1F9ED}",name:"Long Recon",desc:"Travel 5 km in total."},{id:"level5",icon:"\u2B50",name:"Levelling Up",desc:"Reach level 5."},{id:"level12",icon:"\u{1F3C6}",name:"Hall of Famer",desc:"Reach level 12."},{id:"weather5",icon:"\u{1F326}",name:"Storm Chaser",desc:"Experience 5 kinds of weather."},{id:"meteors",icon:"\u2604",name:"Make a Wish",desc:"Ride under a meteor shower."},{id:"powers3",icon:"\u{1F50B}",name:"Fully Powered",desc:"Use five different kinds of power-up."}],No={you:"\u{1F331} Beginner \xB7 that's you","ct-host":"\u{1F399} Critical Thinking podcast \xB7 host","ct-guest":"\u{1F399} Critical Thinking podcast \xB7 guest",legend:"\u{1F3C6} Bug bounty legend",educator:"\u{1F4DA} Educator & toolsmith"},Qf=["Recon is a calm habit: map the target before you test it.","Read the program policy first. Scope keeps everyone safe.","Write reports a tired triager can follow at 2 a.m.: clear steps, clear impact.","Duplicates happen to everyone. Each one still taught you something.","Take notes as you hunt. Future you will thank you.","Small bugs can chain into big ones. Keep a list of odd behaviours.","Rest is part of the methodology.","Share what you learn. The community grew because people did."];var Jn={handle:"onceuponahacker",name:"",group:"you",contribution:"A beginner at the very start of the journey, learning one bug at a time. Every name in this codex started right here."},hi=[{handle:"Rhynorater",name:"Justin Gardner",group:"ct-host",contribution:"Started the Critical Thinking - Bug Bounty Podcast and hunts full time, with two Most Valuable Hacker awards from live hacking events."},{handle:"rez0",name:"Joseph Thacker",group:"ct-host",contribution:"Co-hosts Critical Thinking and focuses on AI security and AI red teaming alongside full-time bug bounty hunting."},{handle:"gr3pme",name:"Brandyn Murtagh",group:"ct-host",contribution:"Wrote the show's HackerNotes, then joined Critical Thinking as a co-host and shared his note-taking methodology."},{handle:"teknogeek",name:"Joel Margolis",group:"ct-host",contribution:"Co-hosted the early episodes of Critical Thinking alongside Justin, and has returned since as a guest."},{handle:"0xLupin",name:"Roni Carta",group:"ct-guest",contribution:"Researches software supply chain security and dependency confusion, and is a recurring Critical Thinking guest."},{handle:"samm0uda",name:"Youssef Sammouda",group:"ct-guest",contribution:"Client-side researcher who shared his postMessage and account-takeover research on Critical Thinking."},{handle:"inhibitor181",name:"Cosmin Iordache",group:"ct-guest",contribution:"In 2020 became the first hacker to pass $2 million in bounty awards on HackerOne, and later guested on Critical Thinking."},{handle:"Sytten",name:"Emile Fugulin",group:"ct-guest",contribution:"Co-founded Caido, the web security HTTP proxy he introduced to listeners on Critical Thinking."},{handle:"wunderwuzzi23",name:"Johann Rehberger",group:"ct-guest",contribution:"Researches AI application security, including prompt injection and data exfiltration, and discussed it on Critical Thinking."},{handle:"brutecat",name:"Arvin Shivram",group:"ct-guest",contribution:"Google VRP researcher whose write-ups on Google Cloud, YouTube and Google account bugs were featured on Critical Thinking."},{handle:"JorianWoltjer",name:"Jorian Woltjer",group:"ct-guest",contribution:"Shares Practical CTF, a public book of hacking notes, and discussed his XS-Leaks research on Critical Thinking."},{handle:"ajxchapman",name:"Alex Chapman",group:"ct-guest",contribution:"Moved from red teaming into bug bounty with a focus on a few high-impact bugs, as he shared on Critical Thinking."},{handle:"Kevin_Mizu",name:"Kevin Mizu",group:"ct-guest",contribution:"Researches DOMPurify and its misconfigurations, and shared his sanitizer bypass techniques on Critical Thinking."},{handle:"renniepak",name:"Ren\xE9 de Sain",group:"ct-guest",contribution:"Full-time bug bounty hunter who shared his path from professional percussion into hacking on Critical Thinking."},{handle:"jhaddix",name:"Jason Haddix",group:"legend",contribution:"Created The Bug Hunter's Methodology, the talk series a generation of hunters learned recon from, and founded Arcanum Information Security."},{handle:"fransrosen",name:"Frans Ros\xE9n",group:"legend",contribution:'Co-founded Detectify and published research like the "Dirty Dancing" OAuth sign-in flows and postMessage studies.'},{handle:"GodfatherOrwa",name:"Orwa Atyat",group:"legend",contribution:"Known for finding critical bugs through creative fuzzing, and co-wrote Intigriti's guide to web fuzzing for hackers."},{handle:"nahamsec",name:"Ben Sadeghipour",group:"legend",contribution:"Creates content to help newcomers start in recon, web hacking and bug bounty, and co-founded HackingHub."},{handle:"ST\xD6K",name:"Fredrik Alexandersson",group:"legend",contribution:"Hacker and creator who makes bug bounty videos and talks, sharing educational content to inspire new hackers."},{handle:"samwcyo",name:"Sam Curry",group:"legend",contribution:"Publishes detailed write-ups of his security research, including connected-car work on Subaru and Kia systems."},{handle:"shubs",name:"Shubham Shah",group:"legend",contribution:"Co-founded Assetnote, an attack surface management company, and publishes deep research on enterprise software."},{handle:"albinowax",name:"James Kettle",group:"legend",contribution:"Director of Research at PortSwigger, known for HTTP desync research and Burp extensions like HTTP Request Smuggler."},{handle:"garethheyes",name:"Gareth Heyes",group:"legend",contribution:"PortSwigger researcher who wrote the book JavaScript for hackers and builds Burp extensions such as Hackvertor."},{handle:"orange_8361",name:"Orange Tsai",group:"legend",contribution:"Principal Security Researcher at DEVCORE whose research has earned Pwnie Awards and Pwn2Own championships."},{handle:"try_to_hack",name:"Santiago Lopez",group:"legend",contribution:"A largely self-taught hacker who in 2019 became the first to pass $1 million in bounty awards on HackerOne."},{handle:"securinti",name:"Inti De Ceukelaire",group:"legend",contribution:'Known for creative show-and-tell bug reports and the "Ticket Trick" helpdesk research; works with hackers at Intigriti.'},{handle:"ArchAngelDDay",name:"Douglas Day",group:"legend",contribution:"Holds a record nine Best Collaboration awards at HackerOne live hacking events and ran Elastic's bug bounty program."},{handle:"dawgyg",name:"Tommy DeVoss",group:"legend",contribution:"Long-time hunter who shared his story and Yahoo bug hunting on Critical Thinking, and first got Justin into bug bounty."},{handle:"0xacb",name:"Andr\xE9 Baptista",group:"legend",contribution:"Co-founded Ethiack, coaches Portugal's ECSC team, and was named MVH at HackerOne's H1-202 live hacking event."},{handle:"InsiderPhD",name:"Katie Paxton-Fear",group:"educator",contribution:"API hacker and educator whose YouTube channel shares educational bug bounty content with a sense of fun."},{handle:"tomnomnom",name:"Tom Hudson",group:"educator",contribution:"Open-source tool maker and trainer behind waybackurls, assetfinder, httprobe, gf and gron."},{handle:"zseano",name:"",group:"educator",contribution:"Built BugBountyHunter.com with free hands-on labs and shared his methodology to help people learn to hunt."},{handle:"hakluke",name:"Luke Stephens",group:"educator",contribution:"Author of hakrawler, hakrevdns and other open-source tools for fast web reconnaissance."},{handle:"yaworsk",name:"Peter Yaworski",group:"educator",contribution:"Wrote Real-World Bug Hunting: A Field Guide to Web Hacking, a No Starch Press book for aspiring hunters."},{handle:"vickieli7",name:"Vickie Li",group:"educator",contribution:"Wrote Bug Bounty Bootcamp, a guide to finding and reporting web vulnerabilities."},{handle:"LiveOverflow",name:"",group:"educator",contribution:"Shares free IT security videos on YouTube, making the content he wished he had found when he started."},{handle:"danielmiessler",name:"Daniel Miessler",group:"educator",contribution:"Co-maintains SecLists, the security tester's collection of lists, and talked about AI and hacking on Critical Thinking."}];var Je=n=>Kf(n.some(e=>!e.index)?n.map(e=>e.index?e.toNonIndexed():e):n),Me=n=>document.getElementById(n),_s={get(n,e){try{let t=localStorage.getItem(n);return t===null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}},Tt=(n,e,t)=>Math.max(e,Math.min(t,n)),We=(n,e,t)=>n+(e-n)*t,Ke=(n,e)=>n+Math.random()*(e-n),Gt=(n,e,t)=>{let i=Tt((t-n)/(e-n),0,1);return i*i*(3-2*i)},_n=n=>n[Math.floor(Math.random()*n.length)],Jt=(n,e)=>1-Math.exp(-n*e),Hl=n=>{for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n},Nt=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),es=n=>"$"+Math.round(n).toLocaleString("en-US");function On(n,e){let t=Math.imul(n|0,374761393)+Math.imul(e|0,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),t^=t>>>16,(t>>>0)/4294967296}function kl(n,e){let t=Math.floor(n),i=Math.floor(e),s=n-t,r=e-i,o=s*s*(3-2*s),a=r*r*(3-2*r);return We(We(On(t,i),On(t+1,i),o),We(On(t,i+1),On(t+1,i+1),o),a)}function ft(n,e,t=4){let i=0,s=.5,r=0;for(let o=0;o<t;o++)i+=s*kl(n,e),r+=s,n=n*2.03+17.1,e=e*2.03+9.7,s*=.5;return i/r}function Yr(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function $o(n,e,t,i){let s=new Float32Array(n*n),r=1,o=0;for(let a=0;a<t;a++){let l=e<<a,c=i*131,h=a*977+i*7;for(let u=0;u<n;u++){let d=u/n*l,f=Math.floor(d),g=d-f,y=g*g*(3-2*g),m=f%l,p=(f+1)%l;for(let _=0;_<n;_++){let x=_/n*l,v=Math.floor(x),I=x-v,S=I*I*(3-2*I),R=v%l,D=(v+1)%l;s[u*n+_]+=r*We(We(On(R+c,m+h),On(D+c,m+h),S),We(On(R+c,p+h),On(D+c,p+h),S),y)}}o+=r,r*=.5}for(let a=0;a<s.length;a++)s[a]/=o;return s}if(location.hash==="#reset"){try{localStorage.removeItem("bbw_save"),localStorage.removeItem("bbw_intro")}catch{}history.replaceState(null,"",location.pathname)}var j=Object.assign({xp:0,level:1,bounty:0,submitted:0,reports:[],bugs:{low:0,medium:0,high:0,critical:0},collected:[],lodges:[],codex:[Jn.handle],shrines:{},ach:[],worlds:["tundra"],world:"tundra",pos:{},dist:0,weathers:[],powersUsed:[],mount:"reindeer",avatar:"hacker",bestChain:0,warps:0,fuel:40,cans:0,orbs:0,questStep:0,quest:null,animals:[]},_s.get("bbw_save",{})),vu=new Set(j.collected),Mu=new Set(j.lodges),Hn=new Set(j.codex);Hn.add(Jn.handle);var Ip=new Set([Jn.handle,...hi.map(n=>n.handle)]);for(let n of[...Hn])Ip.has(n)||Hn.delete(n);for(let n of Object.keys(j.shrines))Ip.has(j.shrines[n])||delete j.shrines[n];Number.isFinite(j.fuel)||(j.fuel=40);var Gl=!1;function vn(){Gl=!0}function bu(){Gl&&(Gl=!1,j.collected=[...vu].slice(-6e3),j.lodges=[...Mu].slice(-3e3),j.codex=[...Hn],_s.set("bbw_save",j))}setInterval(bu,2500);addEventListener("pagehide",()=>{Gl=!0,bu()});var Ys="ontouchstart"in window||window.matchMedia&&matchMedia("(pointer: coarse)").matches;Ys&&document.body.classList.add("touch");var Dp={high:{pr:2,shadow:2048,bloom:!0,particles:2600,radius:5,trees:70,cover:340,coverR:2},medium:{pr:1.25,shadow:1024,bloom:!0,particles:1500,radius:4,trees:50,cover:200,coverR:1},low:{pr:1,shadow:0,bloom:!1,particles:700,radius:3,trees:34,cover:0,coverR:0}},Wo=_s.get("bbw_quality",Ys?"medium":"high");Dp[Wo]||(Wo="high");var hn=Dp[Wo],$s=Me("c"),Mn;try{Mn=new go({canvas:$s,antialias:!0,powerPreference:"high-performance"})}catch(n){throw Me("loadText").textContent="Sorry, your browser or device does not support 3D graphics (WebGL).",n}var Up=Math.min(window.devicePixelRatio||1,hn.pr);Mn.setPixelRatio(Up);Mn.setSize(innerWidth,innerHeight);Mn.toneMapping=Fh;Mn.outputColorSpace=It;Mn.shadowMap.enabled=hn.shadow>0;Mn.shadowMap.type=Nh;var i1=Mn.capabilities.getMaxAnisotropy(),Mt=new xo,Np=hn.radius*64,Dl=new ve;Mt.fog=new Ja(Dl,2/Np);var yn=new mn(60,innerWidth/innerHeight,.1,1500),Ki=null,Vl=null,ko=null;hn.bloom&&(Ki=new _l(Mn),Ki.addPass(new vl(Mt,yn)),Vl=new zr(new ie(innerWidth,innerHeight),.6,.7,.82),Ki.addPass(Vl),ko=new Fr({uniforms:{tDiffuse:{value:null},uVig:{value:.34},uSpeed:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uVig; uniform float uSpeed; varying vec2 vUv;
      void main(){
        vec2 d = vUv - 0.5; vec3 c = texture2D(tDiffuse, vUv).rgb;
        if (uSpeed > 0.01) { for (int i = 1; i < 5; i++) c += texture2D(tDiffuse, vUv - d * uSpeed * 0.014 * float(i)).rgb; c /= 5.0; }
        float v = smoothstep(0.9, 0.3, length(d * vec2(1.0, 0.88)));
        c *= mix(1.0 - uVig, 1.0, v);
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722)); c = max(mix(vec3(l), c, 1.1), 0.0);
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),Ki.addPass(ko));addEventListener("resize",()=>{yn.aspect=innerWidth/innerHeight,yn.updateProjectionMatrix(),_u()});function Qn(n,e=n){let t=document.createElement("canvas");return t.width=n,t.height=e,[t,t.getContext("2d")]}function Eu(n,e,t=1){let i=new Yn(n);return i.wrapS=i.wrapT=uo,i.anisotropy=i1,i.repeat.set(t,t),e&&(i.colorSpace=It),i}function Zo(n,e,t,i=1){let[s,r]=Qn(e),o=r.createImageData(e,e);for(let a=0;a<e;a++)for(let l=0;l<e;l++){let c=n[a*e+(l-1+e)%e],h=n[a*e+(l+1)%e],u=n[(a-1+e)%e*e+l],d=n[(a+1)%e*e+l],f=(c-h)*t,g=(d-u)*t,y=Math.hypot(f,g,1),m=(a*e+l)*4;o.data[m]=(f/y*.5+.5)*255,o.data[m+1]=(g/y*.5+.5)*255,o.data[m+2]=(1/y*.5+.5)*255,o.data[m+3]=255}return r.putImageData(o,0,0),Eu(s,!1,i)}var El=Zo($o(256,8,4,7),256,4),_i=Zo($o(256,24,3,21),256,2.5,2),ep=Zo($o(256,4,4,61),256,2.2),s1=(()=>{let e=$o(512,4,5,51),[t,i]=Qn(512);i.fillStyle="#000",i.fillRect(0,0,512,512),i.strokeStyle="#fff",i.lineWidth=1.4;for(let o=0;o<26;o++){let a=Math.random()*512,l=Math.random()*512,c=Math.random()*6.28,h=[[a,l]];for(let u=0;u<8;u++)c+=Ke(-.7,.7),a+=Math.cos(c)*Ke(10,30),l+=Math.sin(c)*Ke(10,30),h.push([a,l]);for(let u of[-512,0,512])for(let d of[-512,0,512])i.beginPath(),h.forEach(([f,g],y)=>y?i.lineTo(f+u,g+d):i.moveTo(f+u,g+d)),i.stroke()}let s=i.getImageData(0,0,512,512).data,r=new Float32Array(512*512);for(let o=0;o<512*512;o++)r[o]=e[o]*.4-s[o*4]/255*.5;return Zo(r,512,3)})(),Fo=(()=>{let e=$o(256,4,4,41),[t,i]=Qn(256),s=i.createImageData(256,256),r=new Float32Array(256*256);for(let o=0;o<256;o++)for(let a=0;a<256;a++){let l=o*256+a,c=.5+.5*Math.sin(a/256*Math.PI*18+e[l]*6),h=.55+c*.3+e[l]*.2;r[l]=c*.7+e[l]*.3,s.data[l*4]=h*110,s.data[l*4+1]=h*74,s.data[l*4+2]=h*50,s.data[l*4+3]=255}return i.putImageData(s,0,0),{map:Eu(t,!0),normal:Zo(r,256,6)}})(),tp=(()=>{let[e,t]=Qn(256);t.fillStyle="#000",t.fillRect(0,0,256,256),t.strokeStyle="#fff",t.lineWidth=2,t.fillStyle="#fff";let i=Yr(9);for(let s=0;s<34;s++){let r=Math.floor(i()*16)*16+8,o=Math.floor(i()*16)*16+8;t.beginPath(),t.moveTo(r,o);for(let a=0;a<4;a++)i()<.5?r+=(i()<.5?-1:1)*16*(1+Math.floor(i()*3)):o+=(i()<.5?-1:1)*16*(1+Math.floor(i()*3)),t.lineTo(r,o);t.stroke(),t.fillRect(r-3,o-3,6,6)}return Eu(e,!0)})();function Fp(n,e=128){let[t,i]=Qn(e),s=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);n.forEach(([o,a])=>s.addColorStop(o,`rgba(255,255,255,${a})`)),i.fillStyle=s,i.fillRect(0,0,e,e);let r=new Yn(t);return r.colorSpace=It,r}var Pi=Fp([[0,1],[.25,.55],[.6,.12],[1,0]]),Wl=Fp([[0,1],[.45,.7],[1,0]],64),r1=(()=>{let[n,e]=Qn(64);return e.translate(32,32),e.rotate(.6),e.fillStyle="#fff",e.beginPath(),e.ellipse(0,0,26,14,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(0,0,0,0.12)",e.beginPath(),e.moveTo(-26,0),e.lineTo(-14,-3),e.lineTo(-14,3),e.fill(),new Yn(n)})(),o1=(()=>{let[n,e]=Qn(64);return e.translate(32,32),e.rotate(-.5),e.fillStyle="#fff",e.beginPath(),e.moveTo(-28,0),e.quadraticCurveTo(0,-20,28,0),e.quadraticCurveTo(0,20,-28,0),e.fill(),e.strokeStyle="rgba(0,0,0,0.25)",e.lineWidth=2,e.beginPath(),e.moveTo(-26,0),e.lineTo(26,0),e.stroke(),new Yn(n)})(),a1=(()=>{let[n,e]=Qn(16,64),t=e.createLinearGradient(0,0,0,64);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.8,"rgba(255,255,255,0.6)"),t.addColorStop(1,"rgba(255,255,255,1)"),e.fillStyle=t,e.fillRect(5,0,6,64),new Yn(n)})(),l1=(()=>{let[n,e]=Qn(64),t=e.createLinearGradient(0,64,0,0);t.addColorStop(0,"rgba(255,255,255,.9)"),t.addColorStop(.3,"rgba(255,255,255,.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let i=new Yn(n);return i.colorSpace=It,i})(),np=new Map,c1=new Yn(Qn(4)[0]);function h1(n,e,t,i,s){let r=[n,e,t,i,s].join("|"),o=np.get(r);if(o)return o;let[a,l]=Qn(i,s);return l.textAlign="center",l.textBaseline="middle",l.shadowColor=t,l.shadowBlur=18,l.fillStyle=t,l.font=`700 ${e?52:62}px "Segoe UI", system-ui, sans-serif`,l.fillText(n,i/2,e?s*.38:s/2,i-20),e&&(l.shadowBlur=8,l.font='500 30px "Segoe UI", system-ui, sans-serif',l.fillStyle="rgba(255,255,255,0.85)",l.fillText(e,i/2,s*.8,i-20)),o=new Yn(a),o.colorSpace=It,np.set(r,o),o}function Zs(n=512,e=128){let t=new Fn(new Ln({map:c1,transparent:!0,depthWrite:!1,fog:!0}));return t.userData={w:n,h:e},t}function Ri(n,e,t="",i="#ffffff",s=1){let{w:r,h:o}=n.userData;n.material.map=h1(e,t,i,r,o),n.scale.set(4*s*(r/512),4*s*(o/512),1)}var k={terrain:new Oe({vertexColors:!0,roughness:.92,normalMap:El,normalScale:new ie(.7,.7)}),ice:new ai({color:10404836,roughness:.14,clearcoat:1,clearcoatRoughness:.06,normalMap:s1,normalScale:new ie(.35,.35)}),water:new ai({color:3496568,roughness:.06,metalness:.1,clearcoat:1,normalMap:ep,normalScale:new ie(.4,.4)}),mirror:new Oe({color:787988,roughness:.03,metalness:.9,normalMap:ep,normalScale:new ie(.08,.08)}),snow:new Oe({color:15922687,roughness:.9,normalMap:El,normalScale:new ie(.6,.6)}),tree:new Oe({vertexColors:!0,roughness:.9}),cover:new Oe({vertexColors:!0,roughness:1,side:ln}),prop:new Oe({vertexColors:!0,roughness:.85,flatShading:!0}),propGlow:new mt({vertexColors:!0}),crystal:new mt({vertexColors:!0}),rock:new Oe({vertexColors:!0,roughness:.95,flatShading:!0,normalMap:El}),bark:new Oe({map:Fo.map,normalMap:Fo.normal,roughness:.95}),wood:new Oe({map:Fo.map,normalMap:Fo.normal,color:10120011,roughness:.9}),roof:new Oe({color:3811886,roughness:.9}),stone:new Oe({color:5988206,roughness:.95,normalMap:El}),windowDim:new mt({color:new ve(1,.55,.22).multiplyScalar(.9)}),windowLit:new mt({color:new ve(1,.62,.28).multiplyScalar(3.2)}),fairy:new mt({vertexColors:!0}),star:new Oe({color:16765803,roughness:.2,metalness:.5,emissive:16757051,emissiveIntensity:2.4}),monolith:new Oe({color:1711402,roughness:.35,metalness:.6,emissive:6087167,emissiveMap:tp,emissiveIntensity:1.6}),monolithLit:new Oe({color:2761750,roughness:.35,metalness:.6,emissive:16761690,emissiveMap:tp,emissiveIntensity:2.2}),holo:new mt({color:new ve(.4,1.6,2.2),transparent:!0,opacity:.85,blending:Wt,depthWrite:!1}),steel:new Oe({color:9080992,roughness:.45,metalness:.8}),redLight:new mt({color:new ve(4,.4,.5)}),ring:new mt({color:new ve(2.2,.6,1.6),transparent:!0,opacity:.6,blending:Wt,depthWrite:!1,side:ln}),sign:new Oe({color:3811872,roughness:.8}),coal:new Oe({color:1579036,roughness:.6}),carrot:new Oe({color:16747050,roughness:.6}),red:new Oe({color:13119549,roughness:.45}),green:new Oe({color:3116891,roughness:.45}),blue:new Oe({color:3829720,roughness:.45}),ribbon:new Oe({color:16765562,roughness:.3,metalness:.6,emissive:7031312,emissiveIntensity:.6}),dark:new Oe({color:1118481,roughness:.3}),bugLeg:new Oe({color:1711140,roughness:.4,metalness:.4}),wing:new mt({color:new ve(1.4,1.6,2),transparent:!0,opacity:.35,blending:Wt,depthWrite:!1,side:ln}),trail:new Oe({color:11187416,roughness:1,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),velvet:new ai({color:10687007,roughness:.62,sheen:1,sheenRoughness:.45,sheenColor:new ve(16743046),normalMap:_i,normalScale:new ie(.35,.35)}),fur:new Oe({color:16250094,roughness:1,normalMap:_i,normalScale:new ie(1.2,1.2)}),hoodie:new ai({color:15330032,roughness:.85,sheen:.6,sheenColor:new ve(14674175),normalMap:_i,normalScale:new ie(.9,.9)}),hoodIn:new Oe({color:2764346,roughness:.9,side:ln}),jeans:new Oe({color:2832988,roughness:.85,normalMap:_i}),sneaker:new Oe({color:15921906,roughness:.5}),sole:new Oe({color:6087167,roughness:.4,emissive:1731200,emissiveIntensity:.6}),pack:new Oe({color:2303535,roughness:.7,normalMap:_i}),neon:new mt({color:new ve(.4,2.2,2.8)}),skin:new ai({color:15251606,roughness:.55,sheen:.4,sheenColor:new ve(16760992)}),leather:new Oe({color:1380623,roughness:.32,metalness:.15}),gold:new Oe({color:16763226,roughness:.25,metalness:1}),mitten:new Oe({color:2055740,roughness:.85,normalMap:_i}),sack:new Oe({color:9069632,roughness:.95,normalMap:_i,normalScale:new ie(1.5,1.5)}),nose:new Oe({color:14717050,roughness:.5}),deer:new Oe({color:8082484,roughness:.95,normalMap:_i,normalScale:new ie(1.6,1.6)}),deerLight:new Oe({color:15128253,roughness:1,normalMap:_i,normalScale:new ie(1.6,1.6)}),antler:new Oe({color:14272677,roughness:.7}),hoof:new Oe({color:2760987,roughness:.5}),blanket:new ai({color:2059077,roughness:.7,sheen:1,sheenColor:new ve(8380584),normalMap:_i}),paint:new ai({color:1937328,roughness:.3,metalness:.3,clearcoat:1,clearcoatRoughness:.1}),chrome:new Oe({color:14673134,roughness:.15,metalness:1}),rubber:new Oe({color:1710620,roughness:.8}),wicker:new Oe({map:Fo.map,color:14266490,roughness:.9})};k.fairy.color.setScalar(3.2);k.crystal.color.setScalar(.9);for(let n of[k.ice,k.water,k.mirror])Object.assign(n,{polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});var zp=Yi.map(n=>new Oe({color:n.color,emissive:n.color,emissiveIntensity:2.2,roughness:.3,metalness:.2})),xn={time:{value:0},wind:{value:.3},fade:{value:0},grid:{value:0},gridC1:{value:new L(1,.2,.85)},gridC2:{value:new L(.2,.9,1)},player:{value:new ie},sparkle:{value:0}};function Jo(n,{sway:e=0,swayBase:t=.8,fade:i=!1,grid:s=!1}){n.onBeforeCompile=r=>{Object.assign(r.uniforms,{uTime:xn.time,uWind:xn.wind,uFade:xn.fade,uGrid:xn.grid,uGridC1:xn.gridC1,uGridC2:xn.gridC2,uPlayer:xn.player,uSparkle:xn.sparkle});let o=`#include <common>
varying vec3 vWPos;
uniform float uTime;
uniform float uWind;
uniform float uFade;
uniform float uGrid;
uniform vec3 uGridC1;
uniform vec3 uGridC2;
uniform vec2 uPlayer;
uniform float uSparkle;`;r.vertexShader=r.vertexShader.replace("#include <common>",o),e&&(r.vertexShader=r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 swIp = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
      #else
        vec3 swIp = vec3(0.0);
      #endif
      float swAmt = max(position.y - ${t.toFixed(3)}, 0.0) * ${e.toFixed(3)} * uWind;
      transformed.x += sin(uTime * 1.4 + swIp.x * 0.15 + swIp.z * 0.1) * swAmt;
      transformed.z += cos(uTime * 1.1 + swIp.z * 0.13) * swAmt * 0.6;`)),r.vertexShader=r.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
      vec4 wpTmp = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        wpTmp = instanceMatrix * wpTmp;
      #endif
      vWPos = (modelMatrix * wpTmp).xyz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",o),i&&(r.fragmentShader=r.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      float fdD = distance(vWPos, cameraPosition);
      if (fdD < uFade) { float dith = fract(sin(dot(floor(gl_FragCoord.xy), vec2(12.9898, 78.233))) * 43758.5453); if (dith > smoothstep(uFade - 3.5, uFade, fdD) * 0.9) discard; }`)),s&&(r.fragmentShader=r.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      if (uGrid > 0.0) {
        vec2 gp = vWPos.xz / 6.0; vec2 gd = abs(fract(gp - 0.5) - 0.5) / fwidth(gp); float gl1 = 1.0 - min(min(gd.x, gd.y), 1.0);
        vec2 gp2 = vWPos.xz / 48.0; vec2 gd2 = abs(fract(gp2 - 0.5) - 0.5) / fwidth(gp2); float gl2 = 1.0 - min(min(gd2.x, gd2.y), 1.0);
        float pDist = length(vWPos.xz - uPlayer);
        float pulse = 0.85 + 0.15 * sin(uTime * 0.4 - pDist * 0.02); // a slow, barely-there breathing, never a flicker
        float near1 = smoothstep(90.0, 15.0, distance(vWPos, cameraPosition));
        float near2 = smoothstep(260.0, 30.0, distance(vWPos, cameraPosition));
        totalEmissiveRadiance += uGrid * (uGridC1 * gl1 * 0.45 * pulse * near1 + uGridC2 * gl2 * 0.8 * near2);
      }
      if (uSparkle > 0.0) { // tiny glints on snow and sand that twinkle as you ride past
        vec2 spP = vWPos.xz * 5.0; vec2 spC = floor(spP);
        float spH = fract(sin(dot(spC, vec2(12.9898, 78.233))) * 43758.5453);
        float spT = pow(0.5 + 0.5 * sin(uTime * 1.6 + spH * 200.0 + dot(cameraPosition.xz, vec2(0.9, 0.7))), 8.0);
        float spD = smoothstep(0.3, 0.0, length(fract(spP) - 0.5));
        totalEmissiveRadiance += vec3(0.8, 0.9, 1.0) * step(0.975, spH) * spT * spD * uSparkle * 2.2 * smoothstep(60.0, 6.0, distance(vWPos, cameraPosition));
      }`))},n.needsUpdate=!0}Jo(k.terrain,{grid:!0});Jo(k.tree,{sway:.03,fade:!0});Jo(k.cover,{sway:.4,swayBase:.05});Jo(k.crystal,{fade:!0});Jo(k.rock,{fade:!0});var Yt={uTime:{value:0},uZenith:{value:new L},uMid:{value:new L},uFog:{value:new L},uA1:{value:new L},uA2:{value:new L},uAurora:{value:.3},uStars:{value:1},uSun:{value:new L(0,.3,-1)},uSunColor:{value:new L(1,1,1)},uSunSize:{value:.9996},uSunGlow:{value:.3},uClouds:{value:0},uCloudColor:{value:new L},uRetro:{value:0},uMeteors:{value:0}},Bp=new en({uniforms:Yt,side:gn,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform float uTime, uAurora, uStars, uSunSize, uSunGlow, uClouds, uRetro, uMeteors;
    uniform vec3 uZenith, uMid, uFog, uA1, uA2, uSun, uSunColor, uCloudColor;
    varying vec3 vDir;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
      return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y); }
    float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++){ v += a*noise(p); p *= 2.03; a *= 0.5; } return v; }
    void main(){
      vec3 d = normalize(vDir); float h = d.y;
      vec3 col = mix(uFog, uMid, smoothstep(0.0, 0.2, h));
      col = mix(col, uZenith, smoothstep(0.2, 0.85, h));
      float az = atan(d.z, d.x);
      vec2 sp = vec2(az * 140.0, h * 260.0); vec2 cell = floor(sp); vec2 f = fract(sp) - 0.5;
      float r = hash(cell);
      float star = step(0.986, r) * smoothstep(0.28, 0.0, length(f)) * smoothstep(0.03, 0.3, h);
      star *= (0.55 + 0.45 * sin(uTime * (1.0 + r * 2.0) + r * 60.0)) * uStars * (1.0 - uClouds * 0.85);
      col += vec3(0.95, 0.95, 1.0) * star * 1.4;
      if (uAurora > 0.01) for (int i = 0; i < 2; i++){
        float fi = float(i);
        float band = fbm(vec2(az * 2.2 + fi * 2.1 + uTime * 0.012, fi * 3.0 + uTime * 0.02));
        float center = 0.26 + fi * 0.09 + (band - 0.5) * 0.2;
        float curtain = smoothstep(0.35, 0.8, fbm(vec2(az * 11.0 + uTime * 0.05, fi * 5.0 + h * 2.0)));
        float a = smoothstep(0.12, 0.0, abs(h - center)) * curtain * smoothstep(0.04, 0.16, h);
        col += mix(uA1, uA2, fi) * a * uAurora;
      }
      vec3 sd = normalize(uSun); float m = dot(d, sd);
      float disc = smoothstep(uSunSize, uSunSize + (1.0 - uSunSize) * 0.25, m);
      if (uRetro > 0.5) {
        float yy = d.y - sd.y;
        float stripes = yy > 0.0 ? 1.0 : step(0.42 + yy * 3.0, fract(yy * 70.0 + uTime * 0.2));
        col += mix(vec3(1.0, 0.15, 0.55), vec3(1.0, 0.85, 0.3), smoothstep(-0.15, 0.15, yy)) * disc * stripes * 2.4;
      } else col += uSunColor * disc * 2.4;
      col += uSunColor * pow(max(m, 0.0), 160.0) * uSunGlow * 0.5;
      col += uSunColor * pow(max(m, 0.0), 7.0) * uSunGlow * 0.14;
      if (uClouds > 0.01 && h > 0.0) {
        vec2 cp = d.xz / (h + 0.12) * 1.1 + vec2(uTime * 0.012, uTime * 0.005);
        float c = fbm(cp);
        float cov = smoothstep(1.0 - uClouds * 0.75, 1.05, c + 0.3) * smoothstep(0.0, 0.18, h);
        vec3 cc = uCloudColor * (0.55 + 0.9 * pow(max(m, 0.0), 5.0));
        col = mix(col, cc, cov * 0.9);
      }
      if (uMeteors > 0.0) {
        for (int i = 0; i < 3; i++) {
          float fi = float(i); float T = uTime * 0.32 + fi * 0.37; float id = floor(T); float p = fract(T);
          vec2 s0 = vec2(hash(vec2(id, fi)) * 6.283 - 3.1416, 0.38 + hash(vec2(fi + 3.0, id)) * 0.4);
          vec2 dm = normalize(vec2(0.6, -0.32)); vec2 headp = s0 + dm * p * 0.55;
          vec2 q = vec2(az, h) - headp; vec2 tv = -dm * 0.14;
          float tt = clamp(dot(q, tv) / dot(tv, tv), 0.0, 1.0); float dd = length(q - tv * tt);
          col += vec3(1.0, 0.95, 0.85) * smoothstep(0.004, 0.0, dd) * (1.0 - tt) * smoothstep(0.0, 0.1, p) * smoothstep(1.0, 0.7, p) * 2.6 * uMeteors;
        }
      }
      gl_FragColor = vec4(col, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),wu=new pe(new Ie(1100,48,24),Bp);wu.renderOrder=10;Mt.add(wu);var Op=new xo;Op.add(new pe(new Ie(50,32,16),Bp));var u1=new Cr(Mn),wl=null,Ul=new cl(16777215,2236962,.85),jn=new dl(16777215,1.8);jn.castShadow=hn.shadow>0;jn.castShadow&&(jn.shadow.mapSize.set(hn.shadow,hn.shadow),Object.assign(jn.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:160}),jn.shadow.bias=-5e-4,jn.shadow.normalBias=.04);var Su=new ul(16754784,5,10,1.6);Mt.add(Ul,jn,jn.target,Su);var se=yi.find(n=>n.id===j.world)||yi[0],Xh=n=>1-Math.abs(n*2-1);function ht(n,e){let t=n+se.seed*1371,i=e-se.seed*917,s=se.terrain,r;if(s==="dunes")r=(ft(t*.003,i*.003,3)-se.lakeBias)*32,r+=Math.pow(Xh(ft(t*.011+Math.sin(i*.004)*1.5,i*.005,2)),2.2)*10,r+=(ft(t*.05,i*.05,2)-.5)*.8,r>0&&(r+=Gt(.58,.68,ft(t*.0045+9,i*.0045-4,2))*20);else if(s==="terrace"){let o=(ft(t*.0032+100,i*.0032-50,4)-se.lakeBias)*se.hills;if(o>0){let l=o/3.2;r=(Math.floor(l)+Gt(.7,1,l-Math.floor(l)))*3.2}else r=o;r+=(ft(t*.03,i*.03,2)-.5)*.4}else if(s==="blocks"){r=(ft(t*.0028+100,i*.0028-50,3)-se.lakeBias)*16;let o=ft(t*.0055-20,i*.0055+70,2);r>0&&(r+=Gt(.55,.61,o)*9+Gt(.68,.74,o)*9)}else if(s==="valleys"){r=(ft(t*.0032+100,i*.0032-50,4)-.36)*se.hills+(ft(t*.025,i*.025,3)-.5)*se.bumps;let o=Math.abs(ft(t*.0016+40,i*.0016-90,3)-.5)*2;r=r*Gt(.015,.16,o)-(1-Gt(0,.05,o))*3;let a=Gt(.6,.85,ft(t*.0011-70,i*.0011+33,3));a>0&&r>0&&(r+=a*Xh(ft(t*.006,i*.006,4))**2*se.mountains)}else if(s==="islands"){r=(ft(t*.0065+100,i*.0065-50,3)-.56)*34+(ft(t*.03,i*.03,2)-.5)*1.2;let o=Gt(.7,.9,ft(t*.0016-70,i*.0016+33,2));o>0&&(r+=o*45)}else if(s==="karst")r=(ft(t*.003+100,i*.003-50,3)-se.lakeBias)*16+(ft(t*.03,i*.03,2)-.5)*1.5,r>-1&&(r+=Gt(.63,.74,ft(t*.011+31,i*.011-17,2))*(38+ft(t*.02,i*.02,2)*40));else if(s==="craters"){r=5+(ft(t*.003+100,i*.003-50,3)-.4)*se.hills+(ft(t*.04,i*.04,2)-.5)*1.2;let o=96,a=Math.floor(t/o),l=Math.floor(i/o),c=10+On(a*3+1,l*5+2)*24;if(On(a+91,l-37)<.75){let h=(a+.5)*o+(On(a,l)-.5)*(o-c*2.7),u=(l+.5)*o+(On(l+7,a-3)-.5)*(o-c*2.7),d=Math.hypot(t-h,i-u)/c;d<1.35&&(r+=(d<1?(d*d-1)*c*.2:0)+Math.exp(-(((d-1)/.14)**2))*c*.09)}return Math.max(r,.8)}else if(s==="plains"){r=(ft(t*.0022+100,i*.0022-50,3)-.38)*20+(ft(t*.012,i*.012,2)-.5)*5;let o=Gt(.66,.9,ft(t*.0011-70,i*.0011+33,3));o>0&&(r+=o*60)}else{r=(ft(t*.0032+100,i*.0032-50,4)-se.lakeBias)*se.hills,r+=(ft(t*.025,i*.025,3)-.5)*se.bumps;let o=Gt(.52,.8,ft(t*.0011-70,i*.0011+33,3));o>0&&(r+=o*Xh(ft(t*.006,i*.006,4))**2*se.mountains+o*se.mountains*.16)}return r<0&&(r*=.35),r}var cn=(n,e)=>Math.max(ht(n,e),0),Hp=(n,e)=>{let[t,i,s]=se.forest;return t+Gt(.5,.72,ft(n*s+300+se.seed*50,e*s-120,3))*i},Pe=(n,e)=>{let t=new ve(e),i=n.attributes.position.count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return n.setAttribute("color",new Et(s,3)),n};function Pn(n,e,t,i=8){let s=new L(...n),r=new L(...e),o=new Ge(t,t,s.distanceTo(r),i),a=new oi().setFromUnitVectors(new L(0,1,0),r.clone().sub(s).normalize());return o.applyMatrix4(new _t().compose(s.clone().add(r).multiplyScalar(.5),a,new L(1,1,1))),o}var Ko={pine:(()=>{let n=[Pe(new Ge(.12,.2,1.2,7).translate(0,.6,0),4862756)];for(let[e,t,i]of[[1.35,1.9,1.5],[1.05,1.6,2.45],[.75,1.35,3.3],[.45,1,4]])n.push(Pe(new Bt(e,t,9).translate(0,i,0),1586726)),n.push(Pe(new Bt(e*.78,t*.42,9).translate(0,i+t*.3,0),15331583));return Je(n)})(),sakura:(()=>{let n=[Pe(new Ge(.12,.22,2.2,7).translate(0,1.1,0),4862e3),Pe(Pn([0,1.8,0],[.7,2.8,.2],.08),4862e3),Pe(Pn([0,2,0],[-.6,2.9,-.3],.07),4862e3)],e=[16230600,15909080,15241400,16503008];for(let[t,i,s,r]of[[0,3.2,0,1.3],[.9,2.9,.3,.95],[-.8,3,-.3,1],[.2,3.9,-.4,.9],[-.3,3.4,.8,.85]])n.push(Pe(new fs(r,1).translate(t,i,s),_n(e)));return Je(n)})(),cactus:(()=>{let e=[Pe(new Ge(.28,.32,3.2,10).translate(0,1.6,0),4029002),Pe(new Ie(.28,10,8).translate(0,3.2,0),4029002)];return e.push(Pe(new Ge(.17,.17,.7,8).rotateZ(Math.PI/2).translate(.5,1.4,0),4029002),Pe(new Ge(.17,.17,1.1,8).translate(.85,1.9,0),4029002),Pe(new Ie(.17,8,6).translate(.85,2.45,0),4029002)),e.push(Pe(new Ge(.15,.15,.6,8).rotateZ(Math.PI/2).translate(-.45,2,0),4029002),Pe(new Ge(.15,.15,.8,8).translate(-.75,2.35,0),4029002),Pe(new Ie(.15,8,6).translate(-.75,2.75,0),4029002)),e.push(Pe(new Ie(.09,8,6).translate(0,3.45,0),16743080)),Je(e)})(),crystal:(()=>{let n=[Pe(new Ge(.05,.12,4.2,6).translate(0,2.1,0),1842742)];for(let[e,t,i,s]of[[.7,3.4,.1,5929160],[-.6,3.9,-.2,8022208],[.1,4.5,.5,5935288],[-.2,2.9,-.6,5929160]])n.push(Pe(Pn([0,t-.5,0],[e,t,i],.025,5),1842742)),n.push(Pe(new Ie(.15,10,8).translate(e,t,i),s));return Je(n)})(),autumn:(()=>{let n=[Pe(new Ge(.13,.22,2.4,7).translate(0,1.2,0),4862756)],e=[14711338,13126186,15249472,13656112];for(let[t,i,s,r]of[[0,3.1,0,1.4],[.9,2.7,.3,1],[-.8,2.8,-.3,1.05],[.1,4,-.2,.95]])n.push(Pe(new fs(r,1).translate(t,i,s),_n(e)));return Je(n)})(),palm:(()=>{let n=[[0,0,0],[.15,1.5,0],[.45,3,0],[.7,4.3,0]],e=[];for(let t=0;t<3;t++)e.push(Pe(Pn(n[t],n[t+1],.15-t*.02,7),9071176));for(let t=0;t<8;t++){let i=t/8*Math.PI*2,s=.25+t%2*.3,r=new Bt(.32,2.3,4).translate(0,1.15,0).scale(.22,1,1).rotateZ(-(Math.PI/2+s)).rotateY(i).translate(.7,4.3,0);e.push(Pe(r,t%2?3115594:4169813))}for(let[t,i]of[[.15,.1],[-.1,.12],[0,-.15]])e.push(Pe(new Ie(.13,8,6).translate(.7+t,4.15,i),5914672));return Je(e)})(),bamboo:(()=>{let n=[],e=Yr(5);for(let[t,i,s]of[[0,0,6.5],[.35,.2,5.4],[-.3,.25,6],[.1,-.35,4.8]]){n.push(Pe(new Ge(.06,.08,s,6).translate(t,s/2,i),8040522));for(let r=0;r<5;r++){let o=s*(.55+e()*.45),a=e()*6.28;n.push(Pe(new Bt(.14,1,4).translate(0,.5,0).scale(.3,1,1).rotateZ(-(1.2+e()*.6)).rotateY(a).translate(t,o,i),r%2?5216826:6991946))}}return Je(n)})(),spire:(()=>{let n=[];for(let[e,t,i,s,r]of[[0,0,3.6,.55,0],[.5,.25,2.2,.4,.2],[-.45,-.2,2.6,.42,-.18]])n.push(Pe(new Bt(s,i,5).translate(0,i/2,0).rotateZ(r).translate(e,0,t),6974068));return n.push(Pe(new qi(.16,0).translate(0,3.75,0),10537215)),Je(n)})(),birch:(()=>{let n=[Pe(new Ge(.09,.15,3.2,7).translate(0,1.6,0),15262940)],e=[9095258,6991946,11065450,8044368];for(let[t,i,s,r]of[[0,3.6,0,1.1],[.6,3.1,.2,.8],[-.55,3.2,-.25,.85],[.1,4.4,-.1,.75]])n.push(Pe(new fs(r,1).translate(t,i,s),_n(e)));return Je(n)})()};function d1(n,e){let t=new pt;return t.setAttribute("position",new qe([-n,0,0,n,0,0,0,e,0],3)),t.setAttribute("normal",new qe([0,1,0,0,1,0,0,1,0],3)),t.setAttribute("uv",new qe([0,0,1,0,.5,1],2)),t}function $i(n,e,t,i){let s=[],r=Yr(n*31+Math.round(e*100));for(let h=0;h<n;h++){let u=e*(.6+r()*.6),d=r()*6.283,f=.12+r()*.45,g=r()*.14,y=d1(.05,u).rotateZ(f).rotateY(d).translate(Math.cos(d)*g,0,Math.sin(d)*g);s.push(Pe(y,t[h%t.length]))}i&&s.push(Pe(new qi(.055,0).translate(.05,e*.95,.02),i));let o=Je(s),a=o.attributes.normal,l=o.attributes.position,c=o.attributes.color;for(let h=0;h<a.count;h++){a.setXYZ(h,0,1,0);let u=i&&l.getY(h)>e*.85?1:.5+.5*Tt(l.getY(h)/e,0,1);c.setXYZ(h,c.getX(h)*u,c.getY(h)*u,c.getZ(h)*u)}return o}var Zi=(n,e,t,i,s)=>Pe(new fs(n,0).translate(e,t,i),s),zo=(n,e,t,i)=>Pe(new Ge(n,e,t,4).translate(0,t/2,0),i),f1={pine:Je([zo(.12,.2,1.2,4862756),...[[1.35,2.2,1.6],[.85,2.2,3.4]].flatMap(([n,e,t])=>[Pe(new Bt(n,e,5).translate(0,t,0),1586726),Pe(new Bt(n*.78,e*.42,5).translate(0,t+e*.3,0),15331583)])]),sakura:Je([zo(.12,.22,2.2,4862e3),Zi(1.5,0,3.2,0,16230600),Zi(1,.7,2.9,.3,15909080),Zi(1,-.6,3.4,-.3,15241400)]),cactus:Je([Pe(new Ge(.28,.32,3.3,6).translate(0,1.65,0),4029002),Pe(new Ge(.17,.17,1.3,5).translate(.85,1.9,0),4029002),Pe(new Ge(.15,.15,.9,5).translate(-.75,2.3,0),4029002)]),crystal:Je([zo(.05,.12,4.2,1842742),...[[.7,3.4,.1,5929160],[-.6,3.9,-.2,8022208],[.1,4.5,.5,5935288],[-.2,2.9,-.6,5929160]].map(([n,e,t,i])=>Pe(new qi(.17,0).translate(n,e,t),i))]),autumn:Je([zo(.13,.22,2.4,4862756),Zi(1.5,0,3.2,0,14711338),Zi(1.05,.8,2.8,.3,15249472),Zi(1,-.7,3,-.3,13126186)]),palm:Je([Pe(Pn([0,0,0],[.7,4.3,0],.13,4),9071176),...[0,1,2,3,4,5].map(n=>Pe(new Bt(.32,2.3,3).translate(0,1.15,0).scale(.22,1,1).rotateZ(-(Math.PI/2+.25+n%2*.3)).rotateY(n/6*Math.PI*2).translate(.7,4.3,0),n%2?3115594:4169813))]),bamboo:Je([[0,0,6.5],[.35,.2,5.4],[-.3,.25,6]].flatMap(([n,e,t])=>[Pe(new Ge(.07,.08,t,4).translate(n,t/2,e),8040522),Pe(new Bt(.55,1.8,4).translate(n,t-.5,e),5940548)])),spire:Ko.spire,birch:Je([zo(.09,.15,3.2,15262940),Zi(1.25,0,3.7,0,9095258),Zi(.85,.5,3.1,.2,6991946),Zi(.85,-.5,3.3,-.25,11065450)])},kp={pine:$i(5,.36,[10466512,13162736,8360880]),sakura:$i(6,.42,[5214010,6989898,4160048],16756944),cactus:$i(5,.45,[12097624,13676656,10123844]),crystal:$i(3,.32,[2767466,3814512,2770024]),autumn:$i(6,.45,[9079344,11049528,6978090],15241274),palm:$i(5,.5,[8036432,10139744,5933632]),bamboo:$i(7,.6,[4164154,5808200,3108912]),spire:$i(3,.3,[10132132,6974068,10537215]),birch:$i(6,.4,[5939258,7911496,4886576],16773280)},p1={pine:.5,sakura:1,cactus:.45,crystal:.3,autumn:1,palm:.6,bamboo:1,spire:.25,birch:1},m1={pine:.35,sakura:.25,cactus:.32,crystal:.45,autumn:.25,palm:.3,bamboo:.4,spire:.55,birch:.2};function ip(n){let e=new Ao(1,1),t=e.attributes.position;for(let r=0;r<t.count;r++){let o=new L().fromBufferAttribute(t,r);o.multiplyScalar(.8+kl(o.x*3+5,o.z*3+o.y)*.4),t.setXYZ(r,o.x,o.y*.7,o.z)}e.computeVertexNormals();let i=e.attributes.normal,s=new Float32Array(t.count*3);for(let r=0;r<t.count;r++){let o=n&&i.getY(r)>.55;s[r*3]=o?.9:.55,s[r*3+1]=o?.93:.55,s[r*3+2]=o?1:.58}return e.setAttribute("color",new Et(s,3)),e}var Xl={snowy:ip(!0),plain:ip(!1)},xt=(n,e,t,i,s,r,o)=>Pe(new dt(n,e,t).translate(i,s,r),o),Ut=(n,e,t,i,s,r,o,a)=>Pe(new Ge(n,e,t,i).translate(s,r,o),a),Vs=(n,e,t,i,s,r,o,a=0)=>Pe(new Bt(n,e,t).rotateY(a).translate(i,s,r),o),Bo=(n,e,t,i,s,r=1)=>Pe(new Ie(n,12,8).scale(1,r,1).translate(e,t,i),s),Gp=(n,e,t,i,s,r=1)=>Pe(new Ie(n,14,7,0,Math.PI*2,0,Math.PI/2).scale(1,r,1).translate(e,t,i),s),Gr=xt(.001,.001,.001,0,-50,0,0),ql=16756832,Tu={tundra:{p:.35,s:[.8,1.7],r:.5,geo:Je([[0,0,1.6,0],[.4,.2,1,.3],[-.35,-.2,1.2,-.25],[.1,-.4,.8,.2]].map(([n,e,t,i])=>Pe(new qi(.3,0).scale(1,t/.6,1).rotateZ(i).translate(n,t*.45,e),12575999)))},sakura:{p:.4,s:[.9,1.25],r:.4,geo:Je([Ut(.35,.42,.2,8,0,.1,0,9079440),Ut(.12,.15,.9,8,0,.65,0,10132128),xt(.52,.42,.52,0,1.3,0,9079440),Vs(.58,.36,4,0,1.69,0,6974066,Math.PI/4),Bo(.08,0,1.9,0,6974066)]),glow:Je([xt(.3,.26,.54,0,1.3,0,ql),xt(.54,.26,.3,0,1.3,0,ql)])},dunes:{p:.5,s:[.8,2.4],r:.7,geo:Je([Ut(.5,.7,1.2,7,0,.6,0,12091982),Ut(.35,.45,1,7,.05,1.7,0,13144154),Ut(.7,.5,.5,7,.1,2.45,0,11038782)])},neon:{p:.3,s:[.8,1.6],r:.6,geo:Je([xt(.7,2.6,.7,0,1.3,0,2369088),xt(.9,.12,.9,0,.06,0,1711152)]),glow:Je([xt(.72,.05,.72,0,2,0,5929168),xt(.72,.03,.72,0,1.2,0,6970048)])},autumn:{p:.5,s:[.7,1.9],r:.5,geo:Je([[0,0,1.1,.62],[.65,.3,.7,.42],[-.4,.5,.5,.3]].flatMap(([n,e,t,i])=>[Ut(i*.2,i*.26,t,8,n,t/2,e,15787728),Gp(i,n,t-.05,e,13123626,.7),Bo(i*.16,n+i*.4,t+i*.38,e+i*.2,16774368),Bo(i*.13,n-i*.35,t+i*.45,e-i*.3,16774368)]))},lagoon:{p:.35,s:[1,1.25],r:.35,geo:Je([Ut(.05,.06,1.8,6,0,.9,0,6965808),Ut(.14,.06,.2,8,0,1.85,0,4863012),Pe(new Ao(.42,0).scale(1,.7,1).translate(.55,.2,.2),9077880)]),glow:Vs(.1,.32,6,0,2.1,0,16752704)},bamboo:{p:.4,s:[1,1.25],r:.25,geo:Je([Ut(.05,.06,2.4,6,0,1.2,0,3811872),xt(.75,.06,.06,.32,2.36,0,3811872),Ut(.1,.1,.05,8,.6,2.28,0,2760728),Ut(.1,.1,.05,8,.6,1.72,0,2760728)]),glow:Bo(.22,.6,2,0,16738884,1.25)},moon:{p:.25,s:[1,1.3],r:.35,geo:Je([Ut(.04,.05,1.6,6,0,.8,0,11579576),Pe(new dt(1,.6,.04).rotateX(-.6).translate(0,1.5,0),2771610),xt(.4,.2,.4,0,.1,0,13148224)]),glow:Bo(.07,0,1.9,0,16732240)},meadow:{p:.4,s:[.9,1.2],r:.9,geo:Je([Pe(new Ge(.7,.7,1.1,14).rotateZ(Math.PI/2).translate(0,.7,0),14202960),xt(.1,1,.1,-1.3,.5,1.4,9071176),xt(.1,1,.1,1.3,.5,1.4,9071176),xt(2.7,.08,.06,0,.5,1.4,10123860),xt(2.7,.08,.06,0,.85,1.4,10123860)])}},Au={tundra:{r:3,geo:Je([Gp(2.6,0,0,0,15660287),xt(1.3,1.2,1.5,0,.6,-2.6,15002874),xt(.75,.85,.1,0,.45,-3.36,2763316)]),glow:xt(.6,.7,.06,0,.42,-3.4,ql)},sakura:{r:0,geo:Je([Ut(.22,.27,5,10,-2,2.5,0,12597547),Ut(.22,.27,5,10,2,2.5,0,12597547),xt(6,.35,.5,0,5.1,0,12597547),xt(6.7,.2,.72,0,5.4,0,2500140),xt(5,.25,.3,0,4.2,0,12597547)])},dunes:{r:6.5,geo:Je([Vs(8.5,10,4,0,5,0,13146718,Math.PI/4),Vs(1.3,1.6,4,0,9.7,0,15253616,Math.PI/4)])},neon:{r:0,geo:Je([Pe(new qt(3.2,.2,8,40).translate(0,3.5,0),2895440),xt(2.2,.3,1.2,0,.15,0,1974328)]),glow:Pe(new qt(3.2,.045,6,48).translate(0,3.5,.21),6982368)},autumn:{r:5.2,geo:Je([xt(6,3.5,8,0,1.75,0,10103330),Pe(new Bt(5.6,2.6,4).rotateY(Math.PI/4).scale(1,1,1.32).translate(0,4.8,0),3811878),xt(2,2.4,.1,0,1.2,-4.03,15788248),xt(6.1,.2,8.1,0,3.4,0,15788248)])},lagoon:{r:2.2,geo:Je([Ut(1.2,1.8,9,14,0,4.5,0,16052456),Ut(1.56,1.66,1.2,14,0,3,0,13123626),Ut(1.34,1.42,1.2,14,0,6.3,0,13123626),Ut(1.5,1.5,.2,14,0,9.1,0,2763312),Vs(1,.9,10,0,10.85,0,13123626)]),glow:Ut(.8,.8,1.2,10,0,9.8,0,16769162)},bamboo:{r:2.8,geo:Je([0,1,2].flatMap(n=>{let e=4-n,t=n*2.3;return[xt(e,1.6,e,0,t+.8,0,9054754),Vs(e,.9,4,0,t+2.05,0,2502698,Math.PI/4)]}).concat([Ut(.06,.06,1.4,6,0,7.8,0,15253616)])),glow:xt(.9,1.1,.06,0,.6,-2.02,ql)},moon:{r:2.4,geo:Je([Ut(1.3,1.3,1.2,8,0,2,0,13148224),xt(1.3,1,1.3,0,3.1,0,12105920),...[[1,1],[-1,1],[-1,-1],[1,-1]].flatMap(([n,e])=>[Pe(Pn([n*.9,1.6,e*.9],[n*2,.05,e*2],.06,6),11579576),Ut(.3,.3,.06,10,n*2,.03,e*2,11579576)]),Pe(new Bt(.5,.3,12,1,!0).rotateZ(-.6).translate(.9,3.9,0),15790324),Ut(.03,.03,2.2,5,3.2,1.1,1.2,13684952),xt(.8,.5,.02,3.62,1.9,1.2,6087167)]),glow:xt(.5,.3,.05,0,3.2,-.66,8442111)},meadow:{r:2,spin:{pos:[0,6.6,-1.4],geo:Je([0,1,2,3].map(n=>Pe(new dt(.4,4.2,.06).translate(0,2.4,0).rotateZ(n*Math.PI/2),16315628)).concat([Pe(new Ge(.2,.2,.5,8).rotateX(Math.PI/2),6965808)]))},geo:Je([Ut(1,1.7,7,12,0,3.5,0,15788248),Vs(1.3,1.3,12,0,7.65,0,11553338),xt(.8,1.5,.1,0,.75,-1.66,6965808)])}};function Vp(n){let e=new ke,t=new pe(new dt(5.4,2,4.4),k.stone);t.position.y=-.6;let i=new pe(new dt(5,3,4),k.wood);i.position.y=1.5;let s=new Ge(3.3,3.3,5.6,3,1);s.rotateZ(Math.PI/2),s.rotateX(Math.PI/6);let r=new pe(s,k.roof);r.scale.set(1,.62,.72),r.position.y=3.95;let o=new pe(s,k.snow);o.scale.set(1.04,.66,.76),o.position.y=4.12;let a=new pe(new dt(.7,2,.7),k.stone);a.position.set(1.4,5,.6);let l=new pe(new dt(1.1,2,.08),k.roof);l.position.set(0,1,-2.02),e.add(t,i,r,o,a,l);let c=[];for(let[g,y,m]of[[-1.5,-2.01,Math.PI],[1.5,-2.01,Math.PI],[-2.51,0,-Math.PI/2],[2.51,0,Math.PI/2]]){let p=new pe(new qn(.9,.9),k.windowDim);p.position.set(g,1.8,y),p.rotation.y=m,e.add(p),c.push(p)}let h=new Fn(new Ln({map:Pi,color:16752720,transparent:!0,opacity:.25,blending:Wt,depthWrite:!1}));h.scale.set(9,5,1),h.position.set(0,1.8,-2.8),e.add(h);let u=[];for(let g=0;g<6;g++){let y=new Fn(new Ln({map:Wl,color:12107736,transparent:!0,opacity:0,depthWrite:!1}));y.position.set(1.4,6.3,.6),e.add(y),u.push(y)}let d=null;if(n){let g=new pe(new dt(.12,1.6,.12),k.sign);g.position.set(-2.4,.8,-3.4);let y=new pe(new dt(1.5,.6,.08),k.sign);y.position.set(-2.4,1.55,-3.4);let m=new pe(new So(.2,6),k.holo);m.position.set(-2.4,1.55,-3.45),m.rotation.y=Math.PI,e.add(g,y,m),d=Zs(),d.position.set(0,7.6,0),e.add(d)}let f=Kl(16752704);return f.scale.set(1.6,90,1.6),f.position.y=4,e.add(f),e.traverse(g=>{g.isMesh&&(g.receiveShadow=!0,g.castShadow=g!==t&&g.material!==k.holo&&g!==f)}),e.userData={windows:c,glow:h,smoke:u,snowRoof:o,label:d,beam:f},e.userData.detail=e.children.filter(g=>g!==i&&g!==r&&g!==o&&g!==f&&g!==d&&!u.includes(g)),e}function Ru(n,e,t){let i=n.userData;i.windows.forEach(s=>{s.material=e?k.windowLit:k.windowDim}),i.glow.material.opacity=e?.45:.2,i.snowRoof.visible=!!se.snowy,i.beam.visible=!0,i.beam.material.color.set(t?6351103:16752704),i.isHome=t,i.done=e,i.label&&(t?Ri(i.label,"\u{1F3E0} "+Jn.handle,"home lab \xB7 bring reports here","#9ff0ff",1.3):Ri(i.label,"\u{1F3E0} Triage Lodge",e?"\u2713 visited \xB7 always open":"bring your reports here","#ffd38a",1.3))}function g1(){let n=new ke,e=new pe(new Ge(1.3,1.5,.45,8),k.stone);e.position.y=.1;let t=new pe(new Ge(.95,1.05,.25,8),k.stone);t.position.y=.45;let i=new pe(new dt(1,3.2,.45),k.monolith);i.position.y=2.15;let s=new pe(new qt(1.1,.03,8,48),k.holo);s.position.y=2.4,s.rotation.x=Math.PI/2;let r=new pe(new qi(.28,0),k.holo);r.position.y=4.2;let o=new Fn(new Ln({map:Pi,color:6087167,transparent:!0,opacity:.5,blending:Wt,depthWrite:!1}));o.scale.set(5,5,1),o.position.y=2.6;let a=Zs();return a.position.y=5.6,n.add(e,t,i,s,r,o,a),[e,t,i].forEach(l=>{l.castShadow=!0,l.receiveShadow=!0}),n.userData={mono:i,ring:s,gem:r,glow:o,label:a},n}function Wp(n,e,t){let i=n.userData;i.mono.material=t?k.monolithLit:k.monolith,i.glow.material.color.set(t?16761690:6087167),t?Ri(i.label,e.handle,e.name||No[e.group].replace(/^\S+\s/,""),"#ffd38a",1.1):Ri(i.label,"?","Hacker Shrine \xB7 come closer","#9ff0ff",1.1)}var x1=(()=>{let n=[],t=[[1.7,1.7],[-1.7,1.7],[-1.7,-1.7],[1.7,-1.7]],i=.3,s=(r,o)=>{let[a,l]=t[r],c=We(1,i/1.7,o);return[a*c,o*16,l*c]};for(let r=0;r<4;r++)n.push(Pn(s(r,0),s(r,1),.07));for(let r=0;r<6;r++)for(let o=0;o<4;o++){let a=r/6,l=(r+1)/6,c=(o+1)%4;n.push(Pn(s(o,a),s(c,l),.035),Pn(s(c,a),s(o,l),.035),Pn(s(o,l),s(c,l),.04))}return n.push(Pn([0,16,0],[0,20,0],.06)),n.push(new Ge(.7,.7,.15,16).rotateX(Math.PI/2.4).translate(0,16-1.2,.5)),Je(n)})();function y1(){let n=new ke,e=new pe(x1,k.steel);e.castShadow=!0;let t=new pe(new dt(2.4,2,2.4),k.wood);t.position.y=1,t.castShadow=t.receiveShadow=!0;let i=new pe(new Ie(.22,12,8),k.redLight);i.position.y=20.1;let s=new Fn(new Ln({map:Pi,color:16728160,transparent:!0,opacity:.8,blending:Wt,depthWrite:!1,fog:!1}));s.scale.set(4,4,1),s.position.y=20.1;let r=[];for(let l=0;l<3;l++){let c=new pe(new qt(1,.05,6,40),k.ring.clone());c.rotation.x=Math.PI/2,c.position.y=17,n.add(c),r.push(c)}let o=Zs();o.position.y=23.2,Ri(o,"\u{1F399} Critical Thinking","bug bounty podcast \xB7 tune in","#ffa0d8",1.5);let a=Zs();return a.position.y=4.2,n.add(e,t,i,s,o,a),n.userData={light:i,halo:s,rings:r,nameLabel:a},n}function Xp(n,e,t){let i=n.userData;t?Ri(i.nameLabel,e.handle,e.group==="ct-host"?"host":"guest","#ffd38a",1):Ri(i.nameLabel,"On air","ride closer to listen","#ffa0d8",1)}var _1=(()=>{let n=[16765562,16748451,11131135,12124112,16756848],e=[],t=Yr(77);for(let i=0;i<90;i++){let s=1.2+t()*3,r=We(1.35,.35,(s-1.2)/3)+.05,o=t()*Math.PI*2;e.push(Pe(new Ie(.06,6,4).translate(Math.cos(o)*r,s,Math.sin(o)*r),n[i%n.length]))}return Je(e)})();function v1(n=.38){let e=new Ro;for(let i=0;i<10;i++){let s=i%2?n*.42:n,r=i/10*Math.PI*2+Math.PI/2;i?e.lineTo(Math.cos(r)*s,Math.sin(r)*s):e.moveTo(Math.cos(r)*s,Math.sin(r)*s)}let t=new rl(e,{depth:.1,bevelEnabled:!0,bevelThickness:.04,bevelSize:.03,bevelSegments:2});return t.center(),new pe(t,k.star)}function M1(){let n=new ke,e=3.2,t=new pe(Ko.pine,k.tree);t.scale.setScalar(e),t.castShadow=!0;let i=new pe(_1,k.fairy);i.scale.setScalar(e);let s=v1(.6);s.position.y=4.6*e;let r=new Fn(new Ln({map:Pi,color:16765562,transparent:!0,opacity:.8,blending:Wt,depthWrite:!1,fog:!1}));return r.scale.set(6,6,1),r.position.y=4.6*e,n.add(t,i,s,r),n.userData={star:s},n}var b1=(()=>{let n=[];for(let e of[-1,1])for(let t of[-.15,.05,.25])n.push(Pn([e*.15,0,t],[e*.42,-.25,t+.08*Math.sign(t||1)],.018,5));for(let e of[-1,1])n.push(Pn([e*.06,.1,-.45],[e*.2,.35,-.7],.012,4));return Je(n)})(),E1=new Ge(.35,.35,1,12,1,!0).translate(0,.5,0);function Kl(n){return new pe(E1,new mt({map:l1,color:n,transparent:!0,opacity:.45,blending:Wt,depthWrite:!1,side:ln,fog:!1}))}function qh(){let n=new ke,e=new ke;n.add(e);let t=new pe(new Ie(.32,20,14),zp[0]);t.scale.set(.85,.6,1.1);let i=new pe(new Ie(.16,14,10),k.bugLeg);i.position.set(0,.04,-.38);let s=new pe(b1,k.bugLeg),r=[];for(let l of[-1,1]){let c=new pe(new qn(.55,.28).translate(l*.3,0,0),k.wing);c.position.set(0,.18,.05),c.rotation.x=-Math.PI/2,e.add(c),r.push({w:c,s:l})}e.add(t,i,s);let o=new Fn(new Ln({map:Pi,color:16777215,transparent:!0,opacity:.6,blending:Wt,depthWrite:!1}));o.scale.set(2.4,2.4,1);let a=Kl(16777215);return n.add(o,a),t.castShadow=!0,n.userData={body:e,shell:t,wings:r,halo:o,beam:a},n}function w1(n,e){let t=n.userData,i=Yi[e];t.shell.material=zp[e],t.halo.material.color.set(i.color),t.beam.material.color.set(i.color);let s=[.35,.42,.6,.85,1.1][e];t.beam.scale.set(s,i.beam*.6,s),n.scale.setScalar(1+e*.12)}function S1(){let n=new ke,e=new Oe({color:16777215,emissive:16777215,emissiveIntensity:2,roughness:.2,transparent:!0,opacity:.9}),t=new pe(new fs(.42,1),e),i=new Fn(new Ln({map:Pi,transparent:!0,opacity:.7,blending:Wt,depthWrite:!1}));i.scale.set(3,3,1);let s=Zs(256,128);s.position.y=1.3;let r=Kl(16777215);return r.scale.set(.45,18,.45),n.add(t,i,s,r),n.userData={core:t,halo:i,label:s,beam:r},n}function T1(n,e){let t=zn[e],i=n.userData;i.core.material.color.set(t.color),i.core.material.emissive.set(t.color),i.halo.material.color.set(t.color),i.beam.material.color.set(t.color),Ri(i.label,t.icon,"",t.css,.8)}var sp={body:new ai({color:14172202,roughness:.32,metalness:.55,clearcoat:1,clearcoatRoughness:.15}),stripe:new mt({color:new ve(3,1.7,.4)})},A1=Je([new dt(.42,.52,.2),new qt(.09,.025,6,14,Math.PI).translate(-.06,.27,0),new Ge(.045,.05,.1,10).translate(.13,.3,0)]);function Yh(){let n=new ke,e=new pe(A1,sp.body);e.castShadow=!0;let t=new pe(new dt(.43,.07,.21),sp.stripe),i=new Fn(new Ln({map:Pi,color:16751168,transparent:!0,opacity:.6,blending:Wt,depthWrite:!1}));i.scale.set(1.8,1.8,1);let s=new pe(new qt(.5,.02,6,32),new mt({color:new ve(2.4,1.2,.3),transparent:!0,opacity:.7,blending:Wt,depthWrite:!1}));s.rotation.x=Math.PI/2,s.position.y=-.45;let r=new ke;return r.add(e,t),n.add(r,i,s),n.userData={spin:r,ring:s},n}function R1(){let n=new ke,e=new Oe({color:11563263,emissive:10113279,emissiveIntensity:2.6,roughness:.2,metalness:.4}),t=new pe(new al(.5,.13,120,14),e),i=new pe(new qt(1.2,.04,8,48),new mt({color:new ve(1.6,.8,2.6),transparent:!0,opacity:.7,blending:Wt,depthWrite:!1})),s=new Fn(new Ln({map:Pi,color:11563263,transparent:!0,opacity:.85,blending:Wt,depthWrite:!1}));s.scale.set(5,5,1);let r=Kl(11563263);r.scale.set(1.4,130,1.4);let o=Zs();return o.position.y=2.4,Ri(o,"\u{1F300} Zero-Day Warp","a door to a new calm world","#d8b0ff",1.1),n.add(t,i,s,r,o),n.userData={knot:t,ring:i},n}function C1(){let n=new ke,e=(i,s,r,o,a)=>{let l=new pe(i,s);return l.position.set(r,o,a),l.castShadow=!0,n.add(l),l};e(new Ie(.52,24,16),k.snow,0,.45,0),e(new Ie(.38,24,16),k.snow,0,1.1,0),e(new Ie(.27,24,16),k.snow,0,1.58,0),e(new Bt(.05,.3,10).rotateX(Math.PI/2),k.carrot,0,1.58,.36),e(new qt(.26,.07,10,24),k.red,0,1.36,0).rotation.x=Math.PI/2,e(new Ge(.17,.17,.3,20),k.coal,0,1.92,0),e(new Ge(.28,.28,.04,24),k.coal,0,1.79,0);for(let i of[-.09,.09])e(new Ie(.035,8,6),k.coal,i,1.66,.24);e(new dt(.4,.03,.28),k.dark,.5,.05,.4);let t=e(new qn(.38,.24),k.holo,.5,.18,.27);return t.rotation.x=-.25,n}var Cn=64,Ti=32,ui=Cn/Ti,Ai=Ti+1,Bn=Ai+2,P1=(()=>{let n=[];for(let e=0;e<Ti;e++)for(let t=0;t<Ti;t++){let i=e*Ai+t,s=i+1,r=i+Ai,o=r+1;n.push(i,r,s,s,r,o)}return n})(),qp=new Ns(P1,1),L1=new Ns((()=>{let n=[];for(let e=0;e<Ti;e+=2)for(let t=0;t<Ti;t+=2){let i=e*Ai+t,s=i+2,r=i+2*Ai,o=r+2;n.push(i,r,s,s,r,o)}return n})(),1),di=new Map,ou=[],Yp=[],In=new Float32Array(Bn*Bn),Gs=new _t,Mi=new oi,bi=new L,Ei=new L,Ho=new Tr,Js=new Set;function I1(){let n=new pt;for(let[D,M]of[["position",3],["normal",3],["color",3],["uv",2]])n.setAttribute(D,new Et(new Float32Array(Ai*Ai*M),M));n.setIndex(qp);let e=new ke,t=new pe(n,k.terrain);t.receiveShadow=!0;let i=new Xi(Ko[se.tree],se.tree==="crystal"?k.crystal:k.tree,hn.trees),s=new Xi(se.snowy?Xl.snowy:Xl.plain,k.rock,8);s.receiveShadow=!0;let r=Vp(!0),o=g1(),a=y1(),l=M1(),c=C1(),h=S1(),u=R1(),d=[qh(),qh(),qh()],f=[Yh(),Yh(),Yh()];e.add(t,i,s,r,o,a,l,c,h,u,...d,...f);let g=Tu[se.id],y=Au[se.id],m=new Xi(g.geo,k.prop,5),p=new Xi(g.glow||Gr,k.propGlow,5);m.castShadow=m.receiveShadow=!0;let _=new pe(y.geo,k.prop),x=new pe(y.glow||Gr,k.propGlow),v=new pe(y.spin?y.spin.geo:Gr,k.prop);_.castShadow=_.receiveShadow=v.castShadow=!0,_.add(x,v),y.spin&&v.position.set(...y.spin.pos),e.add(m,p,_);let I=null;hn.cover&&(I=new Xi(kp[se.tree],se.tree==="crystal"?k.crystal:k.cover,hn.cover),I.receiveShadow=!0,e.add(I)),Mt.add(e);let S={group:e,terrain:t,trees:i,rocks:s,cover:I,props:m,propGlow:p,monument:_,monGlow:x,spin:v,lodge:r,shrine:o,tower:a,landmark:l,snowman:c,orb:h,warp:u,bugs:d,fuels:f,colliders:[],cx:0,cz:0,key:"",info:null};e.traverse(D=>{D.matrixAutoUpdate=!1});let R=[h,h.userData.core,u.userData.knot,u.userData.ring,o.userData.ring,o.userData.gem,...a.userData.rings,...r.userData.smoke,l.userData.star,v];for(let D of d)R.push(D.userData.body,...D.userData.wings.map(M=>M.w));for(let D of f)R.push(D.userData.spin,D.userData.ring);for(let D of R)D.matrixAutoUpdate=!0;return r.userData.beam.matrixAutoUpdate=!0,S.dyn=R,S.live=!0,S.dirty=!0,e.updateMatrixWorld=function(D){(S.live||S.dirty)&&(Xt.prototype.updateMatrixWorld.call(this,D||S.dirty),S.dirty=!1)},Yp.push(S),S}var rp=(()=>{let n=Yr(2026),e=hi.slice();for(let t=e.length-1;t>0;t--){let i=Math.floor(n()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e})(),Go=n=>n.group==="ct-host"||n.group==="ct-guest";function op(n){let e=rp.filter(s=>Go(s)===n),t=e.length?e:rp;for(let s of t)if(!Hn.has(s.handle)&&!Js.has(s.handle))return s;let i=t.filter(s=>!Js.has(s.handle));return i.length?_n(i):_n(t)}var ap=n=>hi.find(e=>e.handle===n)||(n===Jn.handle?Jn:null),et=null;function $p(n){n.group.visible=!1,n.info&&(n.info.shrine&&Js.delete(n.info.shrine.hacker.handle),n.info.tower&&Js.delete(n.info.tower.hacker.handle)),n.info=null}function D1(n,e,t){n.cx=e,n.cz=t;let i=se.id+":"+e+","+t;n.key=i;let s=e*Cn,r=t*Cn;n.group.position.set(s,0,r),n.group.visible=!0;for(let T=0;T<Bn;T++)for(let B=0;B<Bn;B++)In[T*Bn+B]=ht(s+(B-1)*ui,r+(T-1)*ui);let o=n.terrain.geometry,a=o.attributes.position.array,l=o.attributes.normal.array,c=o.attributes.color.array,h=o.attributes.uv.array,u=se.ground;for(let T=0;T<Ai;T++)for(let B=0;B<Ai;B++){let z=T*Ai+B,Y=(T+1)*Bn+(B+1),G=In[Y];a[z*3]=B*ui,a[z*3+1]=G,a[z*3+2]=T*ui;let fe=In[Y-1]-In[Y+1],ae=In[Y-Bn]-In[Y+Bn],w=2*ui,b=Math.hypot(fe,w,ae);fe/=b,w/=b,ae/=b,l[z*3]=fe,l[z*3+1]=w,l[z*3+2]=ae;let H=s+B*ui,oe=r+T*ui;h[z*2]=H*.08,h[z*2+1]=oe*.08;let le=kl(H*.15,oe*.15),he=ft(H*.04,oe*.04,2),Re=.88+le*.12,ge=Gt(.82,.62,w),Se=Gt(45,90,G),ze=Gt(1.2,-.2,G);for(let Be=0;Be<3;Be++){let ce=We(u.flat[Be],u.flat2[Be],Gt(.4,.65,he));ce=We(ce,u.steep[Be],ge),ce=We(ce,u.peak[Be],Se*(1-ge*.5)),ce=We(ce,u.shore[Be],ze*.7),c[z*3+Be]=ce*Re}}for(let T of["position","normal","color","uv"])o.attributes[T].needsUpdate=!0;o.computeBoundingSphere();let d=Yr(Math.floor(On(e*7+3+se.seed*101,t*13-5)*4294967296));n.colliders.length=0;let f={lodge:null,shrine:null,tower:null,bugs:[],orb:null,warp:null,fuels:[]};n.hasSnowman=!1,n.info=f;let g=(T,B)=>[T-s,B-r],y=(T,B)=>Math.abs(ht(T+2,B)-ht(T-2,B))+Math.abs(ht(T,B+2)-ht(T,B-2)),m=(T,B)=>{let z=Tt(Math.floor((T-s)/ui),0,Ti-1),Y=Tt(Math.floor((B-r)/ui),0,Ti-1),G=(Y+1)*Bn+z+1;return(Math.abs(In[G+1]-In[G])+Math.abs(In[G+Bn]-In[G]))*2},p=[];et&&Math.abs(et.x-(s+32))<80&&Math.abs(et.z-(r+32))<80&&p.push({x:et.x,z:et.z,r:9});let _=(T,B,z)=>!p.some(Y=>(Y.x-T)**2+(Y.z-B)**2<(Y.r+z)**2),x=(T,B,z,Y)=>{for(let G=0;G<8;G++){let fe=s+z+d()*(Cn-z*2),ae=r+z+d()*(Cn-z*2),w=ht(fe,ae);if(w>T&&w<45&&y(fe,ae)<B&&_(fe,ae,Y))return[fe,ae,w]}return null};for(let T of[n.lodge,n.shrine,n.tower,n.landmark,n.snowman,n.orb,n.warp,...n.bugs,...n.fuels])T.visible=!1;if(d()<.16){let T=x(1,2.4,12,6);if(T){let[B,z,Y]=T,[G,fe]=g(B,z),ae=Mu.has(i);n.lodge.position.set(G,Y-.15,fe),n.lodge.rotation.y=d()*Math.PI*2,n.lodge.visible=!0,Ru(n.lodge,ae,!1),f.lodge={x:B,z,done:ae,key:i},n.colliders.push({x:B,z,r:3.4}),p.push({x:B,z,r:6})}}let v=d();if(!f.lodge&&v<.075){let T=x(.4,3.5,8,3);if(T){let[B,z,Y]=T,[G,fe]=g(B,z),w=j.shrines[i]&&ap(j.shrines[i])||op(!1);Js.add(w.handle);let b=Hn.has(w.handle);n.shrine.position.set(G,Y-.1,fe),n.shrine.visible=!0,Wp(n.shrine,w,b),f.shrine={x:B,z,hacker:w,unlocked:b,key:i,seen:!1},n.colliders.push({x:B,z,r:1.4}),p.push({x:B,z,r:4})}}let I=d();if(!f.lodge&&!f.shrine&&I<.06){let T=x(.6,3.5,10,4);if(T){let[B,z,Y]=T,[G,fe]=g(B,z),w=j.shrines[i]&&ap(j.shrines[i])||op(!0);Js.add(w.handle);let b=Hn.has(w.handle);n.tower.position.set(G,Y-.1,fe),n.tower.rotation.y=d()*6.28,n.tower.visible=!0,Xp(n.tower,w,b),f.tower={x:B,z,hacker:w,unlocked:b,key:i,seen:!1},n.colliders.push({x:B,z,r:2.4}),p.push({x:B,z,r:5})}}let S=d(),R=d(),D=d();if(se.landmark&&!f.lodge&&S<.05){let T=s+16+R*32,B=r+16+D*32,z=ht(T,B);if(z>.5&&y(T,B)<4&&_(T,B,3)){let[Y,G]=g(T,B);n.landmark.position.set(Y,z-.3,G),n.landmark.visible=!0,n.colliders.push({x:T,z:B,r:1.6}),p.push({x:T,z:B,r:4})}}let M=d(),A=d(),N=d(),W=d();if(se.snowy&&M<.12){let T=s+6+A*52,B=r+6+N*52,z=ht(T,B);if(z>.4&&y(T,B)<3&&_(T,B,1)){let[Y,G]=g(T,B);n.snowman.position.set(Y,z-.1,G),n.snowman.rotation.y=W*6.28,n.snowman.visible=!0,n.hasSnowman=!0,n.colliders.push({x:T,z:B,r:.7})}}let re=d()<.62?1+(d()<.45?1:0)+(d()<.18?1:0):0;for(let T=0;T<3;T++){let B=s+5+d()*54,z=r+5+d()*54,Y=d()*100;if(T>=re)continue;let G=i+":b"+T;if(vu.has(G)||!_(B,z,1)||ht(B,z)>30)continue;let fe=0,ae=0;for(let le=0;le<Yi.length;le++)if(ae+=Yi[le].weight,Y<ae){fe=le;break}let w=cn(B,z)+1.3,[b,H]=g(B,z),oe=n.bugs[T];oe.position.set(b,w,H),oe.visible=!0,w1(oe,fe),f.bugs.push({x:B,z,y:w,s:fe,key:G,obj:oe,ph:d()*6,taken:!1})}let P=d(),U=d(),O=d(),J=d();if(P<.09&&!Vr.has(i+":o")){let T=s+6+U*52,B=r+6+O*52,z=Wh[Math.floor(J*Wh.length)];if(_(T,B,1)&&ht(T,B)<30){let[Y,G]=g(T,B),fe=cn(T,B)+1.3;n.orb.position.set(Y,fe,G),n.orb.visible=!0,T1(n.orb,z),f.orb={x:T,z:B,y:fe,type:z,key:i+":o"}}}let $=d(),X=d(),te=d();if($<.065&&!Vr.has(i+":w")&&!(et&&Math.hypot(et.x-(s+32),et.z-(r+32))<90)){let T=s+10+X*44,B=r+10+te*44;if(_(T,B,2)){let[z,Y]=g(T,B),G=cn(T,B)+1.8;n.warp.position.set(z,G,Y),n.warp.visible=!0,f.warp={x:T,z:B,y:G,key:i+":w"}}}for(let T=0;T<3;T++){let B=d(),z=d(),Y=d(),G=i+":f"+T;if(B>.3||Vr.has(G))continue;let fe=s+6+z*52,ae=r+6+Y*52;if(!_(fe,ae,1)||ht(fe,ae)>30)continue;let[w,b]=g(fe,ae),H=cn(fe,ae)+.9,oe=n.fuels[T];oe.position.set(w,H,b),oe.visible=!0,f.fuels.push({x:fe,z:ae,y:H,key:G,obj:oe,taken:!1})}let Q=0,ue=m1[se.tree];for(let T=0;T<hn.trees*2.2&&Q<hn.trees;T++){let B=s+d()*Cn,z=r+d()*Cn,Y=d(),G=.9+d()*1.6,fe=d()*6.28;if(Y>Hp(B,z))continue;let ae=ht(B,z);if(ae<.6||ae>(se.treeMaxH||60)||m(B,z)>5||!_(B,z,2.5)||f.bugs.some(H=>(H.x-B)**2+(H.z-z)**2<6))continue;let[w,b]=g(B,z);Ei.set(w,ae-.25,b),Mi.setFromEuler(Ho.set(0,fe,0)),bi.set(G,G*(.9+Y*.4),G),n.trees.setMatrixAt(Q++,Gs.compose(Ei,Mi,bi)),n.colliders.push({x:B,z,r:ue*G+.1,tree:!0})}n.trees.count=Q,n.trees.instanceMatrix.needsUpdate=!0,n.trees.computeBoundingSphere();let q=0;for(let T=0;T<10&&q<8;T++){let B=s+d()*Cn,z=r+d()*Cn,Y=.5+d()*1.8,G=d()*6.28,fe=d(),ae=ht(B,z);if(ae<.3||fe>.25+Gt(1,6,m(B,z))*.6||!_(B,z,Y))continue;let[w,b]=g(B,z);Ei.set(w,ae-.2*Y,b),Mi.setFromEuler(Ho.set(0,G,0)),bi.set(Y,Y,Y),n.rocks.setMatrixAt(q++,Gs.compose(Ei,Mi,bi)),Y>.9&&n.colliders.push({x:B,z,r:Y*.85})}if(n.rocks.count=q,n.rocks.instanceMatrix.needsUpdate=!0,n.rocks.computeBoundingSphere(),n.cover){let T=0,B=p1[se.tree];for(let z=0;z<hn.cover;z++){let Y=d()*Cn,G=d()*Cn,fe=d(),ae=.7+d()*1.1,w=d()*6.28,b=Y/ui,H=G/ui,oe=Math.min(Ti-1,Math.floor(b)),le=Math.min(Ti-1,Math.floor(H)),he=b-oe,Re=H-le,ge=(le+1)*Bn+oe+1,Se=In[ge],ze=In[ge+1],Be=In[ge+Bn],ce=In[ge+Bn+1],ut=We(We(Se,ze,he),We(Be,ce,he),Re);ut<.5||ut>40||Math.abs(ze-Se)+Math.abs(Be-Se)>2.2||fe>B*(.2+kl((s+Y)*.06+40,(r+G)*.06)*.95)||_(s+Y,r+G,1.5)&&(Ei.set(Y,ut-.04,G),Mi.setFromEuler(Ho.set(0,w,0)),bi.set(ae,ae*(.8+fe),ae),n.cover.setMatrixAt(T++,Gs.compose(Ei,Mi,bi)))}n.cover.count=T,n.cover.instanceMatrix.needsUpdate=!0,n.cover.computeBoundingSphere()}let ne=Tu[se.id],de=Au[se.id],_e=(T,B,z)=>_(T,B,z)&&!n.colliders.some(Y=>(Y.x-T)**2+(Y.z-B)**2<(Y.r+z)**2),me=d(),Le=d(),De=d(),we=d();if(n.monument.visible=!1,me<.09&&!f.lodge&&!f.shrine&&!f.tower){let T=s+14+Le*36,B=r+14+De*36,z=ht(T,B);z>1&&z<34&&y(T,B)<2.2&&_e(T,B,de.r+1.5)&&(n.monument.position.set(T-s,z-.25,B-r),n.monument.rotation.y=we*6.28,n.monument.visible=!0,n.monGlow.visible=!!de.glow,n.spin.visible=!!de.spin,de.r&&n.colliders.push({x:T,z:B,r:de.r}),p.push({x:T,z:B,r:de.r+2}))}let Ue=0;for(let T=0;T<7;T++){let B=s+4+d()*56,z=r+4+d()*56,Y=We(ne.s[0],ne.s[1],d()),G=d()*6.28;if(d()>ne.p||Ue>=5)continue;let ae=ht(B,z);ae<.7||ae>34||m(B,z)>2.5||!_e(B,z,ne.r*Y+.6)||(Ei.set(B-s,ae-.08,z-r),Mi.setFromEuler(Ho.set(0,G,0)),bi.set(Y,Y,Y),Gs.compose(Ei,Mi,bi),n.props.setMatrixAt(Ue,Gs),n.propGlow.setMatrixAt(Ue,Gs),Ue++,n.colliders.push({x:B,z,r:ne.r*Y}))}n.props.count=n.propGlow.count=Ue,n.propGlow.visible=!!ne.glow,n.props.instanceMatrix.needsUpdate=n.propGlow.instanceMatrix.needsUpdate=!0,n.props.computeBoundingSphere(),n.propGlow.computeBoundingSphere(),n.group.updateMatrix(),n.group.traverse(T=>{T.matrixAutoUpdate||T.updateMatrix()}),n.dirty=!0,n.live=null}var Vr=new Set,lp="",cp="",au=!0;function Zp(n,e,t,i=1e9){let s=Math.floor(n/Cn),r=Math.floor(e/Cn),o=hn.radius,a=s+","+r;if(a===cp&&!au)return 0;for(let[u,d]of di)Math.hypot(d.cx-s,d.cz-r)>o+1.2&&($p(d),di.delete(u),ou.push(d));let l=[];for(let u=-o;u<=o;u++)for(let d=-o;d<=o;d++){if(d*d+u*u>(o+.5)**2)continue;let f=s+d+","+(r+u);di.has(f)||l.push([d*d+u*u,s+d,r+u,f])}l.sort((u,d)=>u[0]-d[0]);let c=performance.now(),h=0;for(let u=0;u<l.length&&h<t;u++){let[,d,f,g]=l[u],y=ou.pop()||I1();if(D1(y,d,f),di.set(g,y),h++,performance.now()-c>i)break}if(cp=a,au=l.length>h,a!==lp||h){lp=a;for(let u of di.values()){let d=Math.max(Math.abs(u.cx-s),Math.abs(u.cz-r));u.trees.castShadow=hn.shadow>0&&se.tree!=="crystal"&&d<=1,u.cover&&(u.cover.visible=d<=hn.coverR);let f=d>2,g=d>2;u.treeLod!==f&&(u.treeLod=f,u.trees.geometry=f?f1[se.tree]:Ko[se.tree]),u.terLod!==g&&(u.terLod=g,u.terrain.geometry.setIndex(g?L1:qp))}}return l.length-h}var U1=[];function Jp(n,e){let t=Math.floor(n/Cn),i=Math.floor(e/Cn),s=U1;s.length=0;for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){let a=di.get(t+o+","+(i+r));a&&s.push(a)}return s}var Yl=2400,kr=24,jl=new pe(new qn(Yl,Yl).rotateX(-Math.PI/2),k.ice);jl.receiveShadow=!0;Mt.add(jl);for(let n of[k.ice,k.water,k.mirror])n.normalMap.repeat.set(Yl/kr,Yl/kr);var ji=Vp(!0);ji.visible=!1;Mt.add(ji);var Sl=new ke;{let n=new pe(new dt(1.4,.08,.7),k.wood);n.position.y=.9;let e=new pe(Je([[-.6,-.28],[.6,-.28],[-.6,.28],[.6,.28]].map(([s,r])=>new dt(.06,.9,.06).translate(s,.45,r))),k.wood),t=new pe(new dt(.8,.5,.04),k.dark);t.position.set(0,1.25,.15);let i=new pe(new qn(.74,.44),k.holo);i.position.set(0,1.25,.125),i.rotation.y=Math.PI,Sl.add(n,e,t,i),Sl.position.set(2.2,0,-3.6),Sl.rotation.y=Math.PI,ji.add(Sl)}var hp={snow:{tex:Wl,size:.14,fall:[.5,1.3],colors:[15791359],sway:.25},petals:{tex:r1,size:.24,fall:[.35,.8],colors:[16758736,16765152,16752320,16773364],sway:.9},leaves:{tex:o1,size:.3,fall:[.6,1.2],colors:[14711338,13126186,15249472,10508832],sway:1.1},dust:{tex:Wl,size:.07,fall:[-.05,.12],colors:[16766624,15777936],sway:.3,drift:4},fireflies:{tex:Pi,size:.32,fall:[-.15,.15],colors:[14221178,16769930],additive:!0,glow:2.5,wander:!0},data:{tex:a1,size:.45,fall:[5,9],colors:[4253951,8257434,16736472],additive:!0,glow:2.2}},lu=(()=>{let n=hn.particles,e=new Float32Array(n*3),t=new Float32Array(n*3),i=new Float32Array(n),s=new Float32Array(n);for(let y=0;y<n;y++)e[y*3]=Ke(-35,35),e[y*3+1]=Ke(-5,25),e[y*3+2]=Ke(-35,35),s[y]=Math.random()*100;let r=new pt;r.setAttribute("position",new Et(e,3)),r.setAttribute("color",new Et(t,3));let o=new Pr({size:.14,map:Wl,vertexColors:!0,transparent:!0,depthWrite:!1}),a=new Mo(r,o);a.frustumCulled=!1,Mt.add(a);let l=Math.floor(n*.7),c=new Float32Array(l*6),h=new Float32Array(l);for(let y=0;y<l;y++){let m=Ke(-30,30),p=Ke(-5,25),_=Ke(-30,30);c.set([m,p,_,m,p-.6,_],y*6),h[y]=Ke(14,20)}let u=new pt;u.setAttribute("position",new Et(c,3));let d=new vo({color:11189213,transparent:!0,opacity:0,depthWrite:!1}),f=new ja(u,d);f.frustumCulled=!1,Mt.add(f);let g=null;return{setType(y){g=y;let m=hp[y];if(!m)return;o.map=m.tex,o.size=m.size,o.blending=m.additive?Wt:ls,o.needsUpdate=!0;let p=new ve;for(let _=0;_<n;_++)p.set(_n(m.colors)),m.glow&&p.multiplyScalar(m.glow),t[_*3]=p.r,t[_*3+1]=p.g,t[_*3+2]=p.b,i[_]=Ke(m.fall[0],m.fall[1]);r.attributes.color.needsUpdate=!0},update(y,m,p,_,x){let v=hp[g],I=v?Math.floor(n*Tt(m,0,1)):0;if(r.setDrawRange(0,I),a.visible=I>0,I){let S=x.x,R=x.y,D=x.z,M=v.sway||0,A=(v.drift||0)+_*3;for(let N=0;N<I;N++){let W=N*3;v.wander?(e[W]+=Math.sin(Te*.7+s[N])*.6*y,e[W+1]+=Math.sin(Te*1.3+s[N]*2)*.3*y,e[W+2]+=Math.cos(Te*.6+s[N])*.6*y):(e[W+1]-=i[N]*y,e[W]+=(Math.sin(Te*.8+s[N])*M+A)*y,e[W+2]+=Math.cos(Te*.6+s[N])*M*.6*y),e[W+1]<R-6?e[W+1]+=30:e[W+1]>R+25&&(e[W+1]-=30),e[W]<S-35?e[W]+=70:e[W]>S+35&&(e[W]-=70),e[W+2]<D-35?e[W+2]+=70:e[W+2]>D+35&&(e[W+2]-=70);let re=e[W]-S,P=e[W+1]-R,U=e[W+2]-D;re*re+P*P+U*U<4&&(e[W+1]+=4)}r.attributes.position.needsUpdate=!0,v.wander?o.opacity=.6+.4*Math.sin(Te*3):o.opacity=.95}if(f.visible=p>.01,d.opacity=.35*p,f.visible){let S=Math.floor(l*p);u.setDrawRange(0,S*2);for(let R=0;R<S;R++){let D=R*6,M=c[D],A=c[D+1]-h[R]*y,N=c[D+2];A<x.y-5&&(A+=28,M=x.x+Ke(-30,30),N=x.z+Ke(-30,30)),M<x.x-30?M+=60:M>x.x+30&&(M-=60),N<x.z-30?N+=60:N>x.z+30&&(N-=60),c[D]=M,c[D+1]=A,c[D+2]=N,c[D+3]=M+_*.25,c[D+4]=A+.7,c[D+5]=N}u.attributes.position.needsUpdate=!0}}}})(),Ye={id:"clear",phase:"in",amt:0,timer:30,next:null,fogMul:1,aurora:0,clouds:0,wind:.2,meteors:0};function Kp(n,e){if(e){Ye.id=n,Ye.amt=1,Ye.phase="hold",Ye.timer=Ke(70,130),lu.setType(ps[n].particle),jp(n);return}Ye.next=n,Ye.phase="out"}var up=null;function jp(n){let e=Me("weather");e.textContent=`${ps[n].icon} ${ps[n].name}`,e.classList.add("show"),clearTimeout(up),up=setTimeout(()=>e.classList.remove("show"),7e3),j.weathers.includes(n)||(j.weathers.push(n),vn(),j.weathers.length>=5&&Ot("weather5")),n==="meteors"&&Ne.state==="play"&&(Ot("meteors"),fi("\u2604 <b>Meteor shower!</b> Everything you find is worth double XP while it lasts.",4200))}function N1(n){let e=ps[Ye.id];if(Ye.phase==="out")Ye.amt-=n/5,Ye.amt<=0&&(Ye.amt=0,Ye.id=Ye.next,lu.setType(ps[Ye.id].particle),Ye.phase="in",jp(Ye.id));else if(Ye.phase==="in")Ye.amt+=n/6,Ye.amt>=1&&(Ye.amt=1,Ye.phase="hold",Ye.timer=Ke(70,130));else if(Ye.timer-=n,Ye.timer<=0){let r=se.weathers.filter(o=>o!==Ye.id);Kp(_n(r))}let t=Ye.amt,i=Jt(1.5,n);Ye.fogMul=We(Ye.fogMul,1+((e.fog||1)-1)*t,i),Ye.aurora=We(Ye.aurora,Math.max(se.sky.auroraBase,(e.aurora||0)*t),i),Ye.clouds=We(Ye.clouds,(e.clouds||.1)*(se.sky.cloudColor[0]+se.sky.cloudColor[1]>0?1:0)*t+.05,i),Ye.wind=We(Ye.wind,.2+(e.wind||0)*t,i),Ye.meteors=We(Ye.meteors,e.meteors?t:0,i),Mt.fog.density=se.fog/Np*Ye.fogMul,Yt.uAurora.value=Ye.aurora,Yt.uClouds.value=Ye.clouds,Yt.uMeteors.value=Ye.meteors,xn.wind.value=Ye.wind;let s=e.particle?(e.heavy?1:.6)*t:0;lu.update(n,s,e.rain?t:0,Ye.wind,yn.position),nt.weather(e.rain?t:0,Ye.wind)}var Qp=()=>ps[Ye.id].luck&&Ye.amt>.5,Zt=(()=>{let e=new Float32Array(2700).fill(-9999),t=new Float32Array(900*3),i=[];for(let l=0;l<900;l++)i.push({vx:0,vy:0,vz:0,life:0,max:1,g:0,r:1,gg:1,b:1});let s=new pt;s.setAttribute("position",new Et(e,3)),s.setAttribute("color",new Et(t,3));let r=new Mo(s,new Pr({size:.25,map:Pi,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Wt}));r.frustumCulled=!1,Mt.add(r);let o=0,a=new ve;return{burst(l,c,h,u,d,f,g=2,y=1,m=null){a.set(u);for(let p=0;p<d;p++){let _=o;o=(o+1)%900;let x=i[_];if(m)x.vx=m[0]+Ke(-.5,.5),x.vy=m[1]+Ke(-.5,.5),x.vz=m[2]+Ke(-.5,.5);else{let v=Math.random()*6.283,I=Math.acos(Ke(-1,1)),S=f*Ke(.3,1);x.vx=Math.sin(I)*Math.cos(v)*S,x.vy=Math.abs(Math.cos(I))*S,x.vz=Math.sin(I)*Math.sin(v)*S}x.life=x.max=y*Ke(.6,1.2),x.g=g,x.r=a.r,x.gg=a.g,x.b=a.b,e[_*3]=l,e[_*3+1]=c,e[_*3+2]=h}},update(l){for(let c=0;c<900;c++){let h=i[c];if(h.life<=0){e[c*3+1]>-9e3&&(e[c*3+1]=-9999);continue}h.life-=l,h.vy-=h.g*l,e[c*3]+=h.vx*l,e[c*3+1]+=h.vy*l,e[c*3+2]+=h.vz*l;let u=Math.max(0,h.life/h.max);t[c*3]=h.r*u*2,t[c*3+1]=h.gg*u*2,t[c*3+2]=h.b*u*2}s.attributes.position.needsUpdate=!0,s.attributes.color.needsUpdate=!0}}})(),cu=(()=>{let e=new Xi(new So(.11,10).rotateX(-Math.PI/2),k.trail,500);e.frustumCulled=!1,e.count=0,Mt.add(e);let t=0,i=0;return{add(s,r,o,a=1,l=1.5){Ei.set(s,cn(s,r)+.04,r),Mi.setFromEuler(Ho.set(0,o,0)),bi.set(a,1,l),e.setMatrixAt(t,Gs.compose(Ei,Mi,bi)),t=(t+1)%500,i=Math.min(500,i+1),e.count=i,e.instanceMatrix.needsUpdate=!0},clear(){i=0,t=0,e.count=0}}})(),hu=Array.from({length:8},()=>{let n=new pe(new ol(.8,1,32).rotateX(-Math.PI/2),new mt({color:13625599,transparent:!0,opacity:0,depthWrite:!1}));return n.userData.t=1,Mt.add(n),n}),$h=0;function dp(n,e){let t=hu[$h];$h=($h+1)%hu.length,t.position.set(n,.03,e),t.userData.t=0}function F1(n){for(let e of hu){if(e.userData.t>=1){e.visible=!1;continue}e.visible=!0,e.userData.t+=n/1.6;let t=e.userData.t;e.scale.setScalar(.4+t*3),e.material.opacity=(1-t)*.5}}var Nl=[],xs=new L;function Xo(n,e,t,i,s){let r=document.createElement("div");r.className="floater",r.innerHTML=i,r.style.color=s,Me("floaters").appendChild(r),Nl.push({el:r,x:n,y:e,z:t,t:0})}function z1(n){for(let e=Nl.length-1;e>=0;e--){let t=Nl[e];if(t.t+=n,t.t>1.6){t.el.remove(),Nl.splice(e,1);continue}if(xs.set(t.x,t.y+t.t*1.4,t.z).project(yn),xs.z>1){t.el.style.opacity=0;continue}t.el.style.transform=`translate(${(xs.x*.5+.5)*innerWidth}px, ${(-xs.y*.5+.5)*innerHeight}px) translate(-50%, -50%) scale(${1+Math.max(0,.3-t.t)})`,t.el.style.opacity=t.t<1.1?1:1-(t.t-1.1)/.5}}function e0(n){let e=n==="hacker",t=e?k.hoodie:k.velvet,i=e?k.hoodie:k.fur,s=e?k.jeans:k.velvet,r=new ke,o=new ke;o.position.y=.78,r.add(o);let a=(u,d,f,g=0,y=0,m=0)=>{let p=new pe(d,f);return p.position.set(g,y,m),u.add(p),p};if(a(o,new Ie(.4,32,24),t,0,.38,0).scale.set(1,1.12,.88),a(o,new Ge(.38,.42,.26,32),e?k.jeans:k.velvet,0,.02,0),e){a(o,new Ge(.405,.41,.1,32),k.hoodie,0,.1,0),a(o,new dt(.42,.2,.06),k.hoodie,0,.26,-.34).rotation.x=.12;for(let u of[-1,1])a(o,new Ge(.008,.008,.28,4),k.fur,u*.06,.62,-.33);a(o,new dt(.5,.58,.22),k.pack,0,.45,.38),a(o,new dt(.42,.03,.18),k.neon,0,.75,.38)}else a(o,new qt(.44,.065,12,36),k.fur,0,-.12,0).rotation.x=Math.PI/2,a(o,new Ge(.41,.41,.09,32),k.leather,0,.2,0),a(o,new dt(.17,.13,.04),k.gold,0,.2,-.41),a(o,new Ie(.36,26,18),k.sack,0,.52,.42).scale.set(1.05,1.15,.72);a(o,new qt(.19,.07,10,28),i,0,.79,0).rotation.x=Math.PI/2;let l=new ke;l.position.set(0,.98,0),o.add(l),a(l,new Ie(.2,28,20),k.skin);for(let u of[-1,1])a(l,new Ie(.022,10,8),k.dark,u*.07,.04,-.18);a(l,new Ie(.04,12,8),k.nose,0,0,-.205);let c;if(e){c=new ke,l.add(c),a(c,new Ie(.27,28,20,Math.PI*1.5+.75,Math.PI*2-1.5,0,2.2),k.hoodie,0,.03,.02).scale.set(1,1.08,1.05),a(c,new Ie(.262,24,16,Math.PI*1.5+.75,Math.PI*2-1.5,0,2.2),k.hoodIn,0,.03,.02).scale.set(1,1.08,1.05);let d=a(c,new qt(.26,.025,8,24,Math.PI),k.dark,0,0,.03);d.rotation.y=Math.PI/2;for(let f of[-1,1])a(c,new Ge(.08,.08,.06,16).rotateZ(Math.PI/2),k.dark,f*.27,-.02,.03),a(c,new qt(.05,.012,6,16).rotateY(Math.PI/2),k.neon,f*.305,-.02,.03)}else a(l,new Ie(.21,24,18),k.fur,0,-.1,-.07).scale.set(1.05,1.28,.85),c=new ke,c.position.set(0,.13,.02),c.rotation.x=.55,l.add(c),a(c,new qt(.19,.06,12,28),k.fur).rotation.x=Math.PI/2,a(c,new Bt(.18,.5,28),k.velvet,0,.25,0),a(c,new Ie(.075,14,10),k.fur,0,.5,0);let h={};for(let[u,d]of[["L",-1],["R",1]]){let f=new ke;f.position.set(d*.38,.66,0),f.rotation.z=d*.18,o.add(f),a(f,new Zn(.09,.34,6,14),t,0,-.24,0),a(f,new qt(.095,.035,8,18),i,0,-.44,0).rotation.x=Math.PI/2,a(f,new Ie(.09,16,12),e?k.skin:k.mitten,0,-.53,0).scale.set(.95,1.15,1),h["sh"+u]=f;let g=new ke;g.position.set(d*.17,-.02,0),o.add(g),a(g,new Zn(.115,.3,6,14),s,0,-.24,0);let y=new ke;y.position.y=-.6,g.add(y),a(y,new Ge(.12,.13,e?.14:.24,18),e?k.sneaker:k.leather,0,e?-.02:.04,0),a(y,new Ie(.135,18,12),e?k.sneaker:k.leather,0,-.08,-.08).scale.set(1,.6,1.5),e&&a(y,new dt(.2,.03,.4),k.sole,0,-.14,-.06),h["hip"+u]=g}return r.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),{root:r,pelvis:o,head:l,hat:c,...h}}function Xs(n,e,t){return new pe(new ll(new Eo(n.map(i=>new L(...i))),16,e,6,!1),t)}function B1(){let n=new ke,e=new ke;e.position.y=1.25,n.add(e);let t=(h,u,d,f=0,g=0,y=0)=>{let m=new pe(u,d);return m.position.set(f,g,y),h.add(m),m};t(e,new Ie(.5,28,20),k.deer).scale.set(.82,.8,1.55),t(e,new Ie(.44,24,18),k.deer,0,.04,-.58).scale.set(.95,1.02,1),t(e,new Ie(.42,24,18),k.deer,0,.04,.6),t(e,new Ie(.42,24,18),k.deerLight,0,-.2,-.05).scale.set(.72,.5,1.4),t(e,new Ie(.3,18,14),k.deerLight,0,.08,.86).scale.set(1,1,.45);let i=t(e,new Bt(.08,.22,10),k.deerLight,0,.32,.98);i.rotation.x=2.2,t(e,new dt(.86,.06,.8),k.blanket,0,.4,.02),t(e,new dt(.9,.03,.84),k.gold,0,.37,.02);let s=t(e,new Zn(.22,.25,6,14),k.red,0,.46,0);s.rotation.x=Math.PI/2,s.scale.set(1.1,1,.45),t(e,new qt(.44,.035,8,30),k.red,0,0,-.7).scale.set(.95,1.05,1);for(let h=-2;h<=2;h++)t(e,new Ie(.055,12,10),k.gold,Math.sin(h*.45)*.42,-Math.cos(h*.45)*.44,-.72);let r=new ke;r.position.set(0,.25,-.75),r.rotation.x=-.65,e.add(r),t(r,new Zn(.19,.5,6,14),k.deer,0,.33,0),t(r,new Ie(.2,14,10),k.deerLight,0,.15,-.12).scale.set(.9,1.4,.7);let o=new ke;o.position.set(0,.72,0),o.rotation.x=.45,r.add(o),t(o,new Ie(.22,22,16),k.deer).scale.set(.85,.9,1.1);let a=t(o,new Zn(.12,.2,6,12),k.deer,0,-.07,-.27);a.rotation.x=Math.PI/2,t(o,new Ie(.075,14,10),k.hoof,0,-.04,-.45).scale.set(1.2,.9,.8);let l=new Xt;l.position.set(0,-.08,-.55),o.add(l);for(let h of[-1,1]){t(o,new Ie(.035,10,8),k.dark,h*.13,.05,-.12);let u=t(o,new Bt(.06,.2,8),k.deer,h*.18,.12,.05);u.rotation.z=h*-1.2,u.scale.z=.5,o.add(Xs([[h*.08,.18,.04],[h*.22,.42,.1],[h*.36,.68,.02],[h*.4,.9,-.14]],.03,k.antler)),o.add(Xs([[h*.2,.38,.09],[h*.18,.5,-.12],[h*.16,.58,-.22]],.022,k.antler)),o.add(Xs([[h*.33,.62,.04],[h*.45,.76,.14],[h*.5,.86,.18]],.02,k.antler)),o.add(Xs([[h*.38,.82,-.08],[h*.3,.98,-.12],[h*.26,1.04,-.1]],.018,k.antler))}let c=[];for(let[h,u,d]of[[-.2,-.6,1],[.2,-.6,1],[-.2,.6,0],[.2,.6,0]]){let f=new ke;f.position.set(h,-.25,u),e.add(f),t(f,new Zn(.1,.36,6,12),k.deer,0,-.22,0);let g=new ke;g.position.y=-.48,f.add(g),t(g,new Zn(.055,.36,6,10),k.deerLight,0,-.2,0),t(g,new Ge(.065,.075,.09,12),k.hoof,0,-.46,0),c.push({hip:f,knee:g,front:d,x:h,z:u})}return n.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0)}),{root:n,body:e,neck:r,head:o,legs:c,tail:i,breath:l}}function vi(n,e,t,i){return new pe(Pn(n,e,t,10),i)}function fp(){let n=new ke;n.add(new pe(new qt(.36,.04,10,40),k.rubber),new pe(new qt(.33,.015,6,40),k.chrome));let e=[];for(let s=0;s<16;s++){let r=s/16*Math.PI*2;e.push(Pn([0,0,0],[Math.cos(r)*.33,Math.sin(r)*.33,0],.005,4))}n.add(new pe(Je(e),k.chrome)),n.add(new pe(new Ge(.04,.04,.1,12).rotateX(Math.PI/2),k.chrome));let t=new pe(new qt(.315,.008,6,40),k.neon);t.visible=!1,n.add(t),n.rotation.y=Math.PI/2;let i=new ke;return i.add(n),i.userData.rimGlow=t,i}function O1(){let n=new ke,e=fp(),t=fp();e.position.set(0,.4,.58);let i=[0,.4,.58],s=[0,.38,.05],r=[0,.98,.24],o=[0,.92,-.42];n.add(e,vi(i,s,.025,k.paint),vi(s,r,.032,k.paint),vi(r,i,.022,k.paint),vi(s,o,.035,k.paint),vi([0,.9,.2],[0,.88,-.38],.03,k.paint));let a=new ke;a.position.set(...o),n.add(a),a.add(vi([0,0,0],[0,-.52,-.16],.022,k.chrome),vi([0,0,0],[0,.18,.04],.022,k.chrome),vi([-.28,.2,.08],[.28,.2,.08],.018,k.chrome));for(let y of[-1,1])a.add(vi([y*.22,.2,.08],[y*.3,.2,.08],.03,k.rubber));t.position.set(0,-.52,-.16),a.add(t);let l=new ke;l.position.set(0,.06,-.2),a.add(l);let c=new pe(new Ge(.22,.17,.24,14,1,!0),k.wicker);c.material.side=ln,l.add(c);let h=new pe(new dt(.3,.02,.2),k.dark);h.position.set(0,.13,0),h.rotation.x=.3,l.add(h);let u=new pe(new qn(.26,.15),k.holo);u.position.set(0,.2,.08),u.rotation.x=-.9,l.add(u);let d=new pe(new Zn(.08,.16,6,10),k.leather);d.rotation.x=Math.PI/2,d.scale.set(1.3,1,.5),d.position.set(0,1,.22),n.add(d);let f=new ke;f.position.set(...s),n.add(f),f.add(new pe(new Ge(.1,.1,.02,20).rotateZ(Math.PI/2).translate(.06,0,0),k.chrome));for(let y of[-1,1]){let m=new ke;m.rotation.x=y>0?0:Math.PI,f.add(m),m.add(vi([y*.08,0,0],[y*.08,-.17,0],.015,k.chrome));let p=new pe(new dt(.1,.025,.07),k.rubber);p.position.set(y*.14,-.17,0),m.add(p)}let g=new pe(new Ie(.05,12,8),new mt({color:new ve(1,.9,.7).multiplyScalar(3)}));return g.position.set(0,.06,-.06),a.add(g),n.traverse(y=>{y.isMesh&&(y.castShadow=!0,y.receiveShadow=!0)}),{root:n,rear:e,front:t,steer:a,crankG:f}}var Si=B1(),ys=O1(),gt=e0(j.avatar==="santa"?"santa":"hacker"),Ci=new ke;Ci.rotation.order="YXZ";Ci.add(Si.root,ys.root,gt.root);var qo=Zs(512,160);qo.position.y=3.5;Ci.add(qo);Mt.add(Ci);function H1(n){Ci.remove(gt.root),gt=e0(n),Ci.add(gt.root),j.avatar=n,vn()}var k1={reindeer:{walk:10,run:17,accel:4.2,turn:1.9,jump:8.5},bike:{walk:10.5,run:16,accel:3.8,turn:1.6,jump:6.5}},E={mount:j.mount==="bike"?"bike":"reindeer",x:0,z:0,y:0,vy:0,heading:0,speed:0,vel:new L,grounded:!0,pitch:0,roll:0,gait:0,crank:0,steerVis:0,surface:"land",bumpT:0,airJumps:0,gliding:!1,turbo:!1,steerIn:0};function Ql(){Si.root.visible=E.mount==="reindeer",ys.root.visible=E.mount==="bike",Me("btnMount").textContent=E.mount==="reindeer"?"\u{1F6B2}":"\u{1F98C}",Me("btnMount").title=E.mount==="reindeer"?"Switch to bicycle (E)":"Switch to reindeer (E)"}var pp={bell:{parts:[["sine",1,1],["sine",2.76,.16],["sine",5.4,.05]],a:.008,d:1.9},koto:{parts:[["triangle",1,1],["sine",2,.25]],a:.004,d:1.2,bend:1.025,lp:[3800,900]},pluck:{parts:[["sawtooth",1,.55],["triangle",1,.6]],a:.004,d:1,lp:[3200,500]},oud:{parts:[["sawtooth",1,.5],["sawtooth",1.006,.4],["sine",.5,.4]],a:.004,d:.9,lp:[2600,420]},synth:{parts:[["sawtooth",1,.7],["square",.5,.2]],a:.01,d:.7,lp:[3200,400],q:6},kalimba:{parts:[["sine",1,1],["sine",3,.22],["sine",6.2,.06]],a:.003,d:.75},flute:{parts:[["sine",1,1],["triangle",2,.12]],a:.08,d:1.3,vib:5,hold:.6},glass:{parts:[["sine",1,1],["sine",2,.3],["sine",4.2,.08]],a:.03,d:2.4},piano:{parts:[["triangle",1,1],["sine",2,.3],["sine",3,.08]],a:.005,d:1.5,lp:[4200,1200]},bass:{parts:[["sine",1,1],["triangle",1,.25]],a:.03,d:1.8,lp:[700,220]}},nt=(()=>{let n=null,e,t,i,s,r,o,a,l,c,h,u,d,f=_s.get("bbw_music",!0),g=0,y=0,m=0,p=0,_=null,x=null,v=[];function I(){if(n){n.state==="suspended"&&n.resume();return}try{n=new(window.AudioContext||window.webkitAudioContext)}catch{return}t=n.createDynamicsCompressor(),t.threshold.value=-16,t.ratio.value=3,t.attack.value=.02,t.release.value=.3,t.connect(n.destination),e=n.createGain(),e.gain.value=.95,e.connect(t);let P=Math.floor(n.sampleRate*2.8),U=n.createBuffer(2,P,n.sampleRate);for(let Q=0;Q<2;Q++){let ue=U.getChannelData(Q),q=0;for(let ne=0;ne<P;ne++){let de=ne/P;q=q*.55+(Math.random()*2-1)*.45,ue[ne]=q*Math.pow(1-de,3.2)}}i=n.createConvolver(),i.buffer=U;let O=n.createGain();O.gain.value=.7,i.connect(O),O.connect(e),s=n.createGain(),s.gain.value=f?1:0,s.connect(e),r=n.createGain(),r.connect(e);let J=n.createGain();J.gain.value=.22,r.connect(J),J.connect(i);let $=n.sampleRate*2;d=n.createBuffer(1,$,n.sampleRate);let X=d.getChannelData(0);for(let Q=0;Q<$;Q++)X[Q]=Math.random()*2-1;let te=(Q,ue,q)=>{let ne=n.createBufferSource();ne.buffer=d,ne.loop=!0;let de=n.createBiquadFilter();de.type=Q,de.frequency.value=ue,de.Q.value=q;let _e=n.createGain();return _e.gain.value=0,ne.connect(de),de.connect(_e),_e.connect(e),ne.start(),[_e,de]};[o,a]=te("bandpass",420,.5),[l]=te("lowpass",3200,.3),[c]=te("bandpass",2400,2),[h,u]=te("bandpass",300,1.2),S(),setInterval(A,100)}function S(){if(!n)return;let P=n.currentTime;if(_){let ue=_;ue.inp.gain.cancelScheduledValues(P),ue.inp.gain.setTargetAtTime(0,P,.12),ue.echoOut.gain.setTargetAtTime(0,P,.12),setTimeout(()=>{try{ue.inp.disconnect(),ue.echoOut.disconnect(),ue.fb.disconnect()}catch{}},1500)}x=se.music;let U=n.createGain();U.connect(s);let O=n.createGain();O.gain.value=.5,U.connect(O),O.connect(i);let J=n.createDelay(2);J.delayTime.value=Math.min(1.9,x.beat*1.5);let $=n.createGain();$.gain.value=.25;let X=n.createBiquadFilter();X.type="lowpass",X.frequency.value=1800;let te=n.createGain();te.gain.value=.22;let Q=n.createGain();U.connect(te),te.connect(J),J.connect(X),X.connect($),$.connect(J),X.connect(Q),Q.connect(s),_={inp:U,echoOut:Q,fb:$},y=0,m=0,p=0,g=P+1.1,v=M()}function R(P,U,O,J="bell",$=null){let X=pp[J]||pp.bell,te=n.createGain(),Q=te;if(X.lp){let q=n.createBiquadFilter();q.type="lowpass",q.Q.value=X.q||.7,q.frequency.setValueAtTime(X.lp[0],U),q.frequency.exponentialRampToValueAtTime(X.lp[1],U+X.d*.6),te.connect(q),Q=q}Q.connect($||_.inp),te.gain.setValueAtTime(1e-4,U),te.gain.exponentialRampToValueAtTime(O,U+X.a),X.hold&&te.gain.exponentialRampToValueAtTime(O*.85,U+X.d*X.hold),te.gain.exponentialRampToValueAtTime(1e-4,U+X.d);let ue=null;X.vib&&(ue=n.createOscillator(),ue.frequency.value=X.vib,ue.start(U),ue.stop(U+X.d+.05));for(let[q,ne,de]of X.parts){let _e=n.createOscillator(),me=n.createGain();if(_e.type=q,_e.frequency.value=P*ne,me.gain.value=de,X.bend&&(_e.frequency.setValueAtTime(P*ne*X.bend,U),_e.frequency.exponentialRampToValueAtTime(P*ne,U+.08)),ue){let Le=n.createGain();Le.gain.value=P*ne*.006,ue.connect(Le),Le.connect(_e.frequency)}_e.connect(me),me.connect(te),_e.start(U),_e.stop(U+X.d+.05)}}function D(P,U,O){let J=n.createBiquadFilter();J.type="lowpass",J.frequency.value=x.voice==="synth"?1100:750;let $=n.createGain();$.gain.setValueAtTime(1e-4,U),$.gain.linearRampToValueAtTime(.026,U+Math.min(1.6,O*.3)),$.gain.setValueAtTime(.026,U+O*.75),$.gain.linearRampToValueAtTime(1e-4,U+O+.35),J.connect($),$.connect(_.inp);for(let X of P)for(let te of[-5,5]){let Q=n.createOscillator();Q.type=x.voice==="synth"?"sawtooth":"triangle",Q.frequency.value=X,Q.detune.value=te,Q.connect(J),Q.start(U),Q.stop(U+O+.4)}}function M(){let P=x.scale,U=x.rhythm||[1,0,1,0,1,0,1,0],O=P.length-2,J=(me,Le)=>Le.some(De=>{let we=Math.log2(P[me]/De);return Math.abs(we-Math.round(we))<.02}),$=(me,Le)=>{for(let De=0;De<P.length;De++)for(let we of[me+De,me-De])if(we>=1&&we<=O&&J(we,Le))return we;return Tt(me,1,O)},X=Math.floor(P.length/2),te=(me,Le)=>{let De=[],we=-1;for(let Ue=0;Ue<8;Ue++){if(!U[Ue]||Ue>0&&Math.random()<.15||Le&&Ue>=5){De.push(-1);continue}X=Ue===0?$(X,me):Tt(X+_n([-2,-1,-1,1,1,2]),1,O),De.push(X),we=Ue}return Le&&we>=0&&(De[we]=$(De[we],me),X=De[we]),De},Q=me=>x.chords[me%x.chords.length],ue=te(Q(0)),q=te(Q(1)),ne=ue.find(me=>me>=0),de=ne===void 0?0:$(ne,Q(2))-ne,_e=ue.map(me=>me<0?-1:Tt(me+de,1,O));return X=_e.filter(me=>me>=0).pop()??X,[...ue,...q,..._e,...te(Q(3),!0)]}function A(){if(!n||n.state!=="running"||!_)return;let P=x.beat;for(;g<n.currentTime+.4;){let U=Math.floor(y/8)%4,O=y%8,J=x.chords[U%x.chords.length];if(f){O===0&&(D(J,g,P*8),R(J[0]>120?J[0]/2:J[0],g,.07,"bass")),O===4&&R(J[1]>150?J[1]/2:J[1],g,.04,"bass"),x.arp&&(R(J[m%J.length]*(m%6<3?2:4),g,.024,"synth"),m++);let $=v[U*8+O];$>=0&&R(x.scale[$],g,.05,x.voice)}y++,g+=P,y%32===0&&++p%3===0&&(v=M())}}function N(P,U,O,J="bandpass",$=null,X=.8){let te=n.currentTime,Q=n.createBufferSource();Q.buffer=d;let ue=n.createBiquadFilter();ue.type=J,ue.frequency.setValueAtTime(U,te),ue.Q.value=X,$&&ue.frequency.exponentialRampToValueAtTime($,te+P);let q=n.createGain();q.gain.setValueAtTime(1e-4,te),q.gain.exponentialRampToValueAtTime(O,te+.02),q.gain.exponentialRampToValueAtTime(1e-4,te+P),Q.connect(ue),ue.connect(q),q.connect(r),Q.start(te,Math.random()),Q.stop(te+P+.05)}let W=P=>se.music.scale[Tt(P,0,se.music.scale.length-1)],re=(P,U,O,J="bell")=>R(P,U,O,J,r);return{init:I,setWorld:S,get musicOn(){return f},toggleMusic(){return f=!f,_s.set("bbw_music",f),s&&s.gain.setTargetAtTime(f?1:0,n.currentTime,.3),f},wind(P){n&&(o.gain.setTargetAtTime(.01+P*.002+Ye.wind*.02,n.currentTime,.5),a.frequency.setTargetAtTime(300+P*30+Ye.wind*200,n.currentTime,.5))},weather(P){n&&l.gain.setTargetAtTime(P*.05,n.currentTime,.8)},radio(P){n&&c.gain.setTargetAtTime(P*.012,n.currentTime,.3)},turbo(P){n&&(h.gain.setTargetAtTime(P>0?.05:0,n.currentTime,P>0?.15:.4),u.frequency.setTargetAtTime(250+P*28,n.currentTime,.3))},turboStart(){n&&N(.7,300,.1,"bandpass",2600,1.2)},sense(P){n&&re(W(5+Math.round(P*4))*2,n.currentTime,.01+P*.018,"glass")},quest(){if(!n)return;let P=n.currentTime;[4,6,8].forEach((U,O)=>re(W(U)*2,P+O*.1,.05))},fuel(){if(!n)return;let P=n.currentTime;[0,5,9].forEach((U,O)=>re(330*Math.pow(2,U/12),P+O*.05,.05,"pluck")),N(.25,900,.04,"bandpass",2400)},step(P,U=1){n&&(P==="water"?N(.2,1200,.03*U,"bandpass",500,.7):N(.12,P==="ice"?2600:900,(P==="ice"?.012:.03)*U,"bandpass",P==="ice"?1800:400,1.2))},jingle(P=1){if(!n)return;let U=n.currentTime;for(let O=0;O<3;O++)re(Ke(2200,3400),U+O*.025,.008*P,"kalimba")},tick(){n&&N(.03,5e3,.006,"highpass",null,.5)},jump(){n&&N(.35,700,.05,"bandpass",1500)},land(){n&&N(.25,500,.06,"lowpass",150)},bump(){n&&N(.5,500,.12,"lowpass",120)},bug(P,U){if(!n)return;let O=n.currentTime,J=3+Math.min(U,6);for(let $=0;$<=P;$++)re(W(J+$*2)*2,O+$*.07,.06)},submit(){if(!n)return;let P=n.currentTime;[3,5,7,8,10].forEach((U,O)=>re(W(U),P+O*.12,.07)),N(.3,6e3,.02,"highpass")},card(){if(!n)return;let P=n.currentTime;for(let U=0;U<7;U++)re(W(U+2),P+U*.06,.05,"koto")},power(){if(!n)return;let P=n.currentTime;[0,4,7,12].forEach((U,O)=>re(440*Math.pow(2,U/12),P+O*.08,.05,"pluck"))},level(){if(!n)return;let P=n.currentTime;[0,4,7,12,16,19,24].forEach((U,O)=>re(261.63*Math.pow(2,U/12),P+O*.09,.06))},warp(){if(!n)return;N(2.2,200,.12,"bandpass",4e3,1.5);let P=n.currentTime;[0,7,12,19].forEach((U,O)=>re(220*Math.pow(2,U/12),P+.4+O*.15,.05,"glass"))},chirp(){if(!n)return;let P=n.currentTime;[0,1].forEach(U=>re(Ke(1700,2500),P+U*.09,.012,"flute"))},swap(){n&&(N(.4,1500,.05,"bandpass",600),this.jingle(2))},pause(P){n&&(P?n.suspend():n.resume())}}})(),Ne={state:"loading",chain:0,chainT:0,warping:!1},Kt=Object.fromEntries(Object.keys(zn).map(n=>[n,0])),Te=0,mp=null;function fi(n,e=3200){let t=Me("toast");t.innerHTML=n,t.classList.add("show"),clearTimeout(mp),mp=setTimeout(()=>t.classList.remove("show"),e)}var t0=[],uu=!1;function Cu(n,e,t=3200){t0.push([n,e,t]),uu||n0()}function n0(){let n=t0.shift(),e=Me("banner");if(!n){uu=!1;return}uu=!0;let[t,i,s]=n;Me("bannerTitle").textContent=t,Me("bannerSub").textContent=i||"",e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),setTimeout(()=>{e.classList.remove("show"),setTimeout(n0,650)},s)}function $r(n,e,t,i){for(j.xp+=n,e!==void 0&&Xo(e,t+.8,i,`+${n} XP`,"#b8f3ff");j.xp>=Ml(j.level);){j.xp-=Ml(j.level),j.level++,nt.level();let s=Os(j.level),r=Os(j.level-1);Cu(`Level ${j.level}`,s!==r?`New rank: ${s} \u2728`:s,3600);for(let o=0;o<6;o++)Zt.burst(E.x,E.y+2,E.z,_n([16765286,6087167,16743096,8257434]),20,6,3,1.6);j.level>=5&&Ot("level5"),j.level>=12&&Ot("level12"),s0()}vn(),vs=!0}function Ot(n){if(j.ach.includes(n))return;let e=bl.find(i=>i.id===n);if(!e)return;j.ach.push(n),vn();let t=Me("achToast");t.innerHTML=`<span class="ai">${e.icon}</span><div><small>Achievement unlocked</small><b>${Nt(e.name)}</b><span>${Nt(e.desc)}</span></div>`,t.classList.remove("show"),t.offsetWidth,t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),4200),nt.card()}function i0(){return 1+Math.min(Ne.chain-1,8)*.25}var gp=null;function G1(n,e){let t=Me("card");t.querySelector(".cg").textContent=No[n.group]||"",t.querySelector(".ch").textContent=n.handle,t.querySelector(".cn").textContent=n.name||"",t.querySelector(".cc").textContent=n.contribution,t.querySelector(".cf").textContent=e?`\u{1F4C7} New Codex card \xB7 ${Ms()} / ${hi.length+1}`:"\u{1F4C7} Already in your Codex",t.classList.toggle("ct",Go(n)),t.classList.remove("show"),t.offsetWidth,t.classList.add("show"),clearTimeout(gp),gp=setTimeout(()=>t.classList.remove("show"),e?9e3:5e3)}var Ms=()=>[...Hn].filter(n=>n===Jn.handle||hi.some(e=>e.handle===n)).length;function xp(n,e,t,i,s,r){let o=!Hn.has(n.handle);if(o){Hn.add(n.handle),j.shrines[e]=n.handle,vn(),$r(r,t,i,s),nt.card();let a=Ms()-1;a>=5&&Ot("codex5"),a>=20&&Ot("codex20")}G1(n,o)}var du=0;function s0(){Ri(qo,Jn.handle,`Lv ${j.level} \xB7 ${Os(j.level)}`,"#c8f6ff",.9),qo.scale.multiplyScalar(.55),du=6}var r0=()=>Object.values(j.bugs).reduce((n,e)=>n+(e||0),0),$l={bugs:r0,submitted:()=>j.submitted,cards:()=>Ms(),fuel:()=>j.cans,dist:()=>j.dist,powers:()=>j.orbs},yp=[{text:"Ride to a soft light and catch a bug",kind:"bug",stat:"bugs",n:1,xp:30},{text:"Bring your report to a lodge (orange light)",kind:"lodge",stat:"submitted",n:1,xp:50},{text:"Visit a Hacker Shrine or a radio tower",kind:"card",stat:"cards",n:1,xp:60}],V1=[{text:"Find {n} bugs",kind:"bug",stat:"bugs",n:[3,4,5],xp:14},{text:"Submit {n} reports at a lodge",kind:"lodge",stat:"submitted",n:[3,4],xp:18},{text:"Pick up {n} fuel cans",kind:"fuel",stat:"fuel",n:[2,3],xp:12},{text:"Meet someone new at a shrine or tower",kind:"card",stat:"cards",n:[1],xp:70},{text:"Wander {n} m, anywhere you like",kind:null,stat:"dist",n:[400,600,800],xp:.08},{text:"Grab a power-up",kind:"power",stat:"powers",n:[1],xp:50}],Xr={t:0,text:""};function _p(){let n=j.questStep||0,e=n<yp.length,t,i;if(e)t=yp[n],i=t.n;else{let s=j.quest&&j.quest.src;t=_n(V1.filter(r=>r.text!==s&&!(r.stat==="cards"&&Ms()>hi.length))),i=_n(t.n)}j.quest={src:t.text,text:t.text.replace("{n}",i),kind:t.kind,stat:t.stat,n:i,base:$l[t.stat](),xp:Math.round(e?t.xp:t.xp*i)},vn()}function W1(){(!j.quest||!$l[j.quest.stat])&&_p();let n=j.quest;$l[n.stat]()-n.base<n.n||(j.questStep=(j.questStep||0)+1,Xr.t=3,Xr.text=`${n.text} \xB7 +${n.xp} XP`,nt.quest(),$r(n.xp),_p())}var vs=!0;function X1(n){if(vs){vs=!1,Me("rank").textContent=`Lv ${j.level} \xB7 ${Os(j.level)}`,Me("xpfill").style.width=`${Tt(j.xp/Ml(j.level),0,1)*100}%`,Me("bounty").textContent=es(j.bounty);let h=j.reports.reduce((u,d)=>u+d.b,0);Me("reports").innerHTML=j.reports.length?`\u{1F4DD} ${j.reports.length} report${j.reports.length>1?"s":""} to hand in \xB7 <b>${es(h)}</b>`:"",Me("codexCount").textContent=`${Ms()}/${hi.length+1}`,Me("hud").classList.add("wake"),clearTimeout(Mp),Mp=setTimeout(()=>Me("hud").classList.remove("wake"),5e3)}let e="";for(let[h,u]of Object.entries(Kt))u>0&&(e+=`<div class="pw" style="--c:${zn[h].css}">${zn[h].icon} ${zn[h].name}<div class="bar"><i style="width:${u/zn[h].dur*100}%"></i></div></div>`);Qp()&&(e+='<div class="pw" style="--c:#ffe9a8">\u2604 Lucky skies \xB7 2\xD7 XP</div>'),e!==bp&&(bp=e,Me("powers").innerHTML=e);let t=Me("chain");Ne.chain>=2&&Ne.chainT>0?(t.classList.add("show"),Me("chainText").textContent=`Chain \xD7${Ne.chain} \xB7 ${i0().toFixed(2).replace(/\.?0+$/,"")}\xD7 bounty`,Me("chainFill").style.width=`${Ne.chainT/o0*100}%`):t.classList.remove("show");let i=j.fuel/Br.max,s=Math.round(i*200)/2;s!==Ep&&(Ep=s,Me("fuelFill").style.width=`${s}%`),Me("fuel").classList.toggle("empty",j.fuel<=0),Me("fuel").classList.toggle("burn",E.turbo),W1();let r=qr[qs],o=j.quest,a=n?Math.max(5,Math.round(n.d/5)*5):0,l;if(Xr.t>0)l=`<span class="done">\u2713 ${Nt(Xr.text)}</span>`;else if(r.id!=="auto")l=`${r.icon} ${Nt(r.name)} <i>\xB7 ${n?a+" m":"none nearby"}</i>`;else{let h=$l[o.stat]()-o.base;l=Nt(o.text)+(o.n>1?` <i>${o.stat==="dist"?Math.floor(Tt(h,0,o.n)/10)*10:Tt(h,0,o.n)}/${Number(o.n)||0}</i>`:""),n&&(n.kind==="lodge"||n.kind==="home")&&o.kind!=="lodge"?l=`Hand in your ${j.reports.length} reports <i>\xB7 ${Jl[n.kind].icon} ${a} m</i>`:n&&n.kind!=="bug"&&(l+=` <i>\xB7 ${Jl[n.kind].icon} ${a} m</i>`)}l!==vp&&(vp=l,Me("objective").innerHTML=l);let c=n&&n.kind==="bug";Me("arrow").style.opacity=n?c?.6:1:.15,Me("arrow").style.color=n&&!c?n.color:"",Me("ring").classList.toggle("near",!!c&&n.d<45)}var vp="",Mp=null,bp="",Ep=-1,o0=14,q1=Me("radar").getContext("2d");function Y1(n){let e=q1,t=160,i=74,s=80,r=80,o=Kt.radar>0?260:130,a=i/o;e.clearRect(0,0,t,t),e.save(),e.beginPath(),e.arc(s,r,i,0,Math.PI*2),e.fillStyle="rgba(10,14,36,0.62)",e.fill(),e.clip(),e.strokeStyle="rgba(160,220,255,0.18)",e.lineWidth=1;for(let p of[i/3,i*2/3])e.beginPath(),e.arc(s,r,p,0,Math.PI*2),e.stroke();e.beginPath(),e.moveTo(s-i,r),e.lineTo(s+i,r),e.moveTo(s,r-i),e.lineTo(s,r+i),e.stroke();let l=y0($t),c=qr[qs].id==="fuel"||j.fuel<30,h=Math.cos(n),u=Math.sin(n),d=(p,_)=>{let x=p-E.x,v=_-E.z;return[s+(x*h-v*u)*a,r-(-x*u-v*h)*a]},f=(p,_,x,v,I)=>{let[S,R]=d(p,_),D=Math.hypot(S-s,R-r);return D>i-3&&(S=s+(S-s)/D*(i-3),R=r+(R-r)/D*(i-3),v*=.7),e.fillStyle=x,e.beginPath(),I==="sq"?e.rect(S-v,R-v,v*2,v*2):I==="di"?(e.moveTo(S,R-v*1.3),e.lineTo(S+v,R),e.lineTo(S,R+v*1.3),e.lineTo(S-v,R)):I==="tri"?(e.moveTo(S,R-v*1.3),e.lineTo(S+v*1.1,R+v),e.lineTo(S-v*1.1,R+v)):I==="house"?(e.moveTo(S,R-v*1.4),e.lineTo(S+v*1.2,R-v*.2),e.lineTo(S+v,R-v*.2),e.lineTo(S+v,R+v),e.lineTo(S-v,R+v),e.lineTo(S-v,R-v*.2),e.lineTo(S-v*1.2,R-v*.2)):e.arc(S,R,v,0,Math.PI*2),e.fill(),[S,R]},g=j.reports.length>0,y=1+.25*Math.sin(Te*5),m=(p,_,x=0)=>Math.abs(p-E.x)<o+x&&Math.abs(_-E.z)<o+x;for(let p of di.values()){let _=p.info;if(_){_.lodge&&m(_.lodge.x,_.lodge.z,g?200:0)&&f(_.lodge.x,_.lodge.z,"#ffb070",3.8*(g?y:1),"house"),_.shrine&&m(_.shrine.x,_.shrine.z)&&f(_.shrine.x,_.shrine.z,_.shrine.unlocked?"#ffd38a":"#ffffff",3.4,"di"),_.tower&&m(_.tower.x,_.tower.z)&&f(_.tower.x,_.tower.z,"#ff8ad0",3.6,"tri");for(let x of _.bugs)!x.taken&&m(x.x,x.z)&&f(x.x,x.z,Yi[x.s].css,2.2+x.s*.5);if(_.orb&&m(_.orb.x,_.orb.z)&&f(_.orb.x,_.orb.z,zn[_.orb.type].css,3.2),c)for(let x of _.fuels)!x.taken&&m(x.x,x.z)&&f(x.x,x.z,"#ff9a40",1.8,"sq");_.warp&&m(_.warp.x,_.warp.z,400)&&f(_.warp.x,_.warp.z,`rgba(200,140,255,${.6+.4*Math.sin(Te*5)})`,4.5,"di")}}if(et&&f(et.x,et.z,"#9ff0ff",4.2,"house"),$t&&l>0){let[p,_]=(()=>{let[x,v]=d($t.x,$t.z),I=Math.hypot(x-s,v-r);return I>i-3&&(x=s+(x-s)/I*(i-3),v=r+(v-r)/I*(i-3)),[x,v]})();e.strokeStyle=$t.color,l>1&&(e.lineWidth=1.2,e.setLineDash([3,4]),e.beginPath(),e.moveTo(s,r),e.lineTo(p,_),e.stroke(),e.setLineDash([])),e.lineWidth=1.5,e.beginPath(),e.arc(p,_,7+Math.sin(Te*3)*1,0,Math.PI*2),e.stroke()}e.restore(),e.strokeStyle="rgba(160,220,255,0.45)",e.lineWidth=1.5,e.beginPath(),e.arc(s,r,i,0,Math.PI*2),e.stroke(),e.fillStyle="#fff",e.beginPath(),e.moveTo(s,r-6),e.lineTo(s+4.5,r+5),e.lineTo(s,r+2.5),e.lineTo(s-4.5,r+5),e.fill()}function Qi(n){for(let t of document.querySelectorAll(".screen"))t.classList.toggle("show",t.id===n);let e=n&&Me(n).querySelector("button.primary");e&&setTimeout(()=>e.focus({preventScroll:!0}),50)}function jo(){Me("controlsHelp").innerHTML=Ys?"Drag the left side to ride \xB7 \u2912 hop \xB7 hold \u{1F525} for turbo<br><small>\u{1F9ED} shows markers to a place when you want them</small>":"<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> ride &nbsp; <kbd>Shift</kbd> faster &nbsp; <kbd>Space</kbd> hop &nbsp; <kbd>F</kbd> turbo<br><small><kbd>N</kbd> guide markers &nbsp; <kbd>E</kbd> switch ride &nbsp; <kbd>K</kbd> Codex &nbsp; <kbd>H</kbd> photo &nbsp; <kbd>P</kbd> rest &nbsp; <kbd>M</kbd> music &nbsp; drag mouse to look</small>";for(let n of document.querySelectorAll("[data-q]"))n.classList.toggle("on",n.dataset.q===Wo);for(let n of document.querySelectorAll("[data-mount]"))n.classList.toggle("on",n.dataset.mount===E.mount);for(let n of document.querySelectorAll("[data-avatar]"))n.classList.toggle("on",n.dataset.avatar===j.avatar);Me("worldRow").innerHTML=yi.map(n=>{let e=j.worlds.includes(n.id);return`<button data-world="${n.id}" class="${n.id===se.id?"on":""}" ${e?"":"disabled"} title="${Nt(e?n.tagline:"Find a Zero-Day Warp to unlock")}">${e?n.icon:"\u{1F512}"} ${Nt(e?n.name:"???")}</button>`}).join("");for(let n of document.querySelectorAll("[data-world]"))n.addEventListener("click",()=>{!n.disabled&&n.dataset.world!==se.id&&(Pu(yi.find(e=>e.id===n.dataset.world),!1),jo())});Me("profileLine").textContent=`${Jn.handle} \xB7 Lv ${j.level} ${Os(j.level)} \xB7 ${es(j.bounty)} earned \xB7 ${Ms()}/${hi.length+1} Codex cards`,Me("btnMusic").classList.toggle("off",!nt.musicOn)}var Hs="all";function a0(){let n={all:"All hackers",ct:"\u{1F399} Critical Thinking",legend:"\u{1F3C6} Legends",educator:"\u{1F4DA} Educators",ach:"\u{1F3C5} Achievements",stats:"\u{1F4CA} Stats"};Me("codexTabs").innerHTML=Object.entries(n).map(([t,i])=>`<button data-tab="${t}" class="${t===Hs?"on":""}">${i}</button>`).join("");for(let t of document.querySelectorAll("[data-tab]"))t.addEventListener("click",()=>{Hs=t.dataset.tab,a0()});Me("codexSummary").textContent=`${Ms()} of ${hi.length+1} cards \xB7 ${j.ach.length} of ${bl.length} achievements`;let e="";if(Hs==="ach")e=bl.map(t=>{let i=j.ach.includes(t.id);return`<div class="cardx ${i?"":"locked"}"><div class="cg">${i?t.icon:"\u{1F512}"} Achievement</div><div class="ch">${Nt(t.name)}</div><div class="cc">${Nt(t.desc)}</div></div>`}).join("");else if(Hs==="stats"){let t=j.bugs;e=`<div class="stats">${[["Total bounty",es(j.bounty)],["Reports submitted",j.submitted],["Bugs found",`${r0()} (${t.zeroday||0} zero-day \xB7 ${t.critical} critical \xB7 ${t.high} high \xB7 ${t.medium} medium \xB7 ${t.low} low)`],["Animal friends",j.animals.length?j.animals.join(", "):"\u2014"],["Best chain",`\xD7${j.bestChain}`],["Distance travelled",`${(j.dist/1e3).toFixed(2)} km`],["Worlds visited",`${j.worlds.length} / ${yi.length}`],["Weather seen",j.weathers.map(s=>ps[s].icon).join(" ")||"\u2014"],["Warps taken",j.warps]].map(([s,r])=>`<div><span>${Nt(s)}</span><b>${Nt(r)}</b></div>`).join("")}</div><p class="tagline">\u{1F4A1} ${Nt(_n(Qf))}</p>`}else e=[Jn,...hi].filter(i=>Hs==="all"||(Hs==="ct"?Go(i)||i.group==="you":i.group===Hs||i.group==="you")).map(i=>Hn.has(i.handle)?`<div class="cardx ${Go(i)?"ct":""} ${i.group==="you"?"you":""}"><div class="cg">${Nt(No[i.group])}</div><div class="ch">${Nt(i.handle)}</div><div class="cn">${Nt(i.name||"")}</div><div class="cc">${Nt(i.contribution)}</div></div>`:`<div class="cardx locked"><div class="cg">${Nt(No[i.group])}</div><div class="ch">\u{1F512} ???</div><div class="cc">${Go(i)?"Tune in at a podcast tower to unlock.":"Visit a glowing Hacker Shrine to unlock."}</div></div>`).join("");Me("codexGrid").innerHTML=e}var fu="pause";function ec(n){Ne.state==="play"&&(Ne.state="paused",nt.pause(!0),n="play"),fu=n||"pause",a0(),Qi("codex")}function l0(){fu==="play"?(Ne.state="play",nt.pause(!1),Qi(null)):Qi(fu==="menu"?"menu":"pause")}function c0(){nt.init(),Ne.state="play",Qi(null),Me("hud").hidden=!1,Ql(),s0(),vs=!0,_s.get("bbw_intro",!1)?fi(`<small>Welcome back</small>${Nt(se.name)}`,2500):(_s.set("bbw_intro",!0),fi(`<small>Welcome, ${Nt(Jn.handle)}</small>Follow the little arrow at the top, or just wander. There's no rush here.`,5e3)),Fl=j.dist,Me("hint").innerHTML=Ys?"Drag the left side to ride \xB7 \u2912 to hop":"<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> ride &nbsp;\xB7&nbsp; <kbd>Shift</kbd> faster &nbsp;\xB7&nbsp; <kbd>Space</kbd> hop",Me("hint").classList.add("show")}var Fl=-1;function tc(){Ne.state==="play"&&(Ne.state="paused",nt.pause(!0),Me("pauseStats").textContent=`${Os(j.level)} \xB7 ${es(j.bounty)} earned \xB7 ${j.submitted} reports \xB7 ${Ms()} Codex cards. Take all the time you need.`,Qi("pause"))}function h0(){Ne.state==="paused"&&(Ne.state="play",nt.pause(!1),Qi(null))}function $1(){Ne.state="menu",nt.pause(!1),Me("hud").hidden=!0,jo(),Qi("menu")}function u0(){Ne.state==="play"&&(E.mount=E.mount==="reindeer"?"bike":"reindeer",j.mount=E.mount,vn(),Ql(),nt.swap(),Zt.burst(E.x,E.y+1,E.z,16777215,40,3,2,1))}function Z1(n){for(let e=0;e<3e3;e+=8){let t=e*.37,i=Math.cos(t)*e,s=Math.sin(t)*e,r=ht(i,s);if(r>2&&r<20&&Hp(i,s)<se.forest[0]+.05&&Math.abs(ht(i+3,s)-ht(i-3,s))<1&&Math.abs(ht(i,s+3)-ht(i,s-3))<1)return[i,s]}return[0,0]}function J1(){let n=se.sky;Yt.uZenith.value.set(...n.zenith),Yt.uMid.value.set(...n.mid),Yt.uFog.value.set(...n.horizon),Yt.uA1.value.set(...n.aurora[0]),Yt.uA2.value.set(...n.aurora[1]),Yt.uStars.value=n.stars,Yt.uSun.value.set(...n.sun).normalize(),Yt.uSunColor.value.set(...n.sunColor),Yt.uSunSize.value=n.sunSize,Yt.uSunGlow.value=n.sunGlow,Yt.uCloudColor.value.set(...n.cloudColor),Yt.uRetro.value=n.retro,Yt.uAurora.value=n.auroraBase,Dl.setRGB(...n.horizon),Mt.fog.color.copy(Dl),Mt.background=Dl.clone(),Ul.color.set(se.hemi[0]),Ul.groundColor.set(se.hemi[1]),Ul.intensity=se.hemi[2],jn.color.set(se.dir[0]),jn.intensity=se.dir[1],Su.color.set(se.lantern),Mn.toneMappingExposure=se.exposure,Vl&&(Vl.strength=se.bloom),xn.grid.value=se.grid,se.gridColor&&(xn.gridC1.value.set(...se.gridColor),xn.gridC2.value.set(...se.gridColor2)),jl.material=se.water==="ice"?k.ice:se.water==="mirror"?k.mirror:k.water,se.water==="water"&&k.water.color.set(se.waterColor),k.rock.color.set(se.snowy?16777215:se.rockTint),se.trail&&k.trail.color.setRGB(...se.trail),ys.rear.userData.rimGlow.visible=ys.front.userData.rimGlow.visible=se.grid>0;for(let e of Yp){e.trees.geometry=Ko[se.tree],e.trees.material=se.tree==="crystal"?k.crystal:k.tree,e.treeLod=null,e.rocks.geometry=se.snowy?Xl.snowy:Xl.plain,e.cover&&(e.cover.geometry=kp[se.tree],e.cover.material=se.tree==="crystal"?k.crystal:k.cover);let t=Tu[se.id],i=Au[se.id];e.props.geometry=t.geo,e.propGlow.geometry=t.glow||Gr,e.monument.geometry=i.geo,e.monGlow.geometry=i.glow||Gr,e.spin.geometry=i.spin?i.spin.geo:Gr,i.spin&&e.spin.position.set(...i.spin.pos)}k.wood.color.set(se.lodge[0]),k.roof.color.set(se.lodge[1]),k.propGlow.color.setScalar(se.id==="neon"?.9:2.4),xn.sparkle.value=se.snowy?1:se.sparkle||0,wl&&wl.dispose(),Yt.uClouds.value=.1,Yt.uMeteors.value=0,wl=u1.fromScene(Op,.03),Mt.environment=wl.texture}function Pu(n,e){se=n,j.world=se.id,j.worlds.includes(se.id)||(j.worlds.push(se.id),j.worlds.length>=yi.length&&Ot("worlds_all")),vn();for(let[o,a]of di)$p(a),ou.push(a);di.clear(),Js.clear(),cu.clear(),J1(),nt.setWorld(),cM(),yM();let[t,i]=Z1(se);et={x:t-7,z:i-10};let s=ht(et.x,et.z);ji.position.set(et.x,Math.max(s,.5)-.15,et.z),ji.rotation.y=Math.atan2(et.x-t,et.z-i),ji.visible=!0,Ru(ji,!0,!0);let r=j.pos[se.id];r&&Number.isFinite(r.x)&&!e&&ht(r.x,r.z)>.3&&ht(r.x,r.z)<30?(E.x=r.x,E.z=r.z,E.heading=r.h||0):(E.x=t,E.z=i,E.heading=Math.atan2(-(et.x-t),-(et.z-i))+.6),E.y=cn(E.x,E.z),E.speed=0,E.vel.set(0,0,0),E.vy=0,E.grounded=!0,xu=!1,Kp(se.weathers[0],!0),au=!0,Zp(E.x,E.z,30)}function K1(){if(Ne.warping)return;Ne.warping=!0,nt.warp(),j.warps++,Ot("warp1"),vn();let n=yi.filter(i=>!j.worlds.includes(i.id)),e=n.length?n[0]:_n(yi.filter(i=>i.id!==se.id)),t=Me("warp");t.classList.remove("out"),t.classList.add("in"),setTimeout(()=>{Pu(e,!0),setTimeout(()=>{t.classList.remove("in"),t.classList.add("out"),Ne.warping=!1,Cu(`${e.icon} ${e.name}`,e.tagline,4200),$r(200,E.x,E.y+1,E.z)},350)},1300)}var un={},wt={throttle:0,steer:0,sprint:!1,jump:!1,jumpHeld:!1,turbo:!1},Zl={jump:!1,turbo:!1},Ws=0,Wr=.4,pu=8.5,d0=0;addEventListener("keydown",n=>{if(un[n.code]=!0,!n.repeat){if(n.code==="KeyM"){nt.init(),Me("btnMusic").classList.toggle("off",!nt.toggleMusic());return}if(Ne.state==="menu"&&n.code==="Enter"){c0();return}if(Ne.state==="paused"&&Me("codex").classList.contains("show")&&(n.code==="Escape"||n.code==="KeyK")){l0();return}if(Ne.state==="paused"&&(n.code==="KeyP"||n.code==="Escape")){h0();return}Ne.state==="play"&&(n.code==="Space"&&(n.preventDefault(),wt.jump=!0),(n.code==="KeyE"||n.code==="KeyR")&&u0(),n.code==="KeyK"&&ec("play"),n.code==="KeyH"&&document.body.classList.toggle("photo"),(n.code==="KeyP"||n.code==="Escape")&&tc(),n.code==="KeyC"&&(Ws=0,Wr=.4),(n.code==="KeyN"||n.code==="Tab")&&(n.preventDefault(),x0()),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault())}});addEventListener("keyup",n=>{un[n.code]=!1});addEventListener("blur",()=>{for(let n in un)un[n]=!1;tc()});document.addEventListener("visibilitychange",()=>{document.hidden&&tc()});var Ji=null;$s.addEventListener("pointerdown",n=>{Ne.state==="play"&&(Ji={id:n.pointerId,x:n.clientX,y:n.clientY},$s.setPointerCapture(n.pointerId))});$s.addEventListener("pointermove",n=>{!Ji||n.pointerId!==Ji.id||(Ws-=(n.clientX-Ji.x)*.006,Wr=Tt(Wr+(n.clientY-Ji.y)*.004,.05,1.2),Ji.x=n.clientX,Ji.y=n.clientY,d0=Te)});$s.addEventListener("pointerup",()=>{Ji=null});$s.addEventListener("pointercancel",()=>{Ji=null});$s.addEventListener("wheel",n=>{pu=Tt(pu+n.deltaY*.01,4,18)},{passive:!0});var Qt={id:null,ox:0,oy:0,x:0,y:0},Yo=Me("stickZone"),f0=Me("stickKnob");Yo.addEventListener("pointerdown",n=>{n.preventDefault(),nt.init(),Qt.id=n.pointerId;let e=Me("stickBase").getBoundingClientRect();Qt.ox=e.left+e.width/2,Qt.oy=e.top+e.height/2,Yo.setPointerCapture(n.pointerId),m0(n)});Yo.addEventListener("pointermove",n=>{n.pointerId===Qt.id&&m0(n)});var p0=n=>{n.pointerId===Qt.id&&(Qt.id=null,Qt.x=Qt.y=0,f0.style.transform="")};Yo.addEventListener("pointerup",p0);Yo.addEventListener("pointercancel",p0);function m0(n){let e=n.clientX-Qt.ox,t=n.clientY-Qt.oy,i=Math.hypot(e,t),s=50;i>s&&(e*=s/i,t*=s/i),Qt.x=e/s,Qt.y=t/s,f0.style.transform=`translate(${e}px, ${t}px)`}function g0(n,e,t){let i=Me(n);i.addEventListener("pointerdown",r=>{r.preventDefault(),nt.init(),Zl[e]=!0,t&&t();try{i.setPointerCapture(r.pointerId)}catch{}});let s=()=>{Zl[e]=!1};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s),i.addEventListener("lostpointercapture",s)}g0("btnJump","jump",()=>{wt.jump=!0});g0("btnTurbo","turbo");function j1(){wt.throttle=(un.KeyW||un.ArrowUp?1:0)-(un.KeyS||un.ArrowDown?1:0),wt.steer=(un.KeyA||un.ArrowLeft?1:0)-(un.KeyD||un.ArrowRight?1:0),wt.sprint=!!(un.ShiftLeft||un.ShiftRight),wt.jumpHeld=!!un.Space||Zl.jump,wt.turbo=!!(un.KeyF||un.KeyQ)||Zl.turbo,Qt.id!==null&&(wt.throttle=Tt(-Qt.y*1.15,-1,1),wt.steer=Tt(-Qt.x*1.1,-1,1),wt.sprint=Math.hypot(Qt.x,Qt.y)>.92&&Qt.y<-.5),wt.turbo&&wt.throttle<=0&&Qt.id===null&&(wt.throttle=1)}var vt=new L,Oo=new L,$t=null,Zh=0,Jh=0,Kh=0,jh=0,Qh=0,eu=0,tu=0,qr=[{id:"auto",icon:"\u{1F9ED}",name:"Calm"},{id:"lodge",icon:"\u{1F3E0}",name:"Triage Lodge"},{id:"fuel",icon:"\u26FD",name:"Fuel"},{id:"power",icon:"\u2728",name:"Power-ups"},{id:"card",icon:"\u{1F4C7}",name:"Shrines & radio"},{id:"warp",icon:"\u{1F300}",name:"Warp"},{id:"home",icon:"\u{1F3E1}",name:"Home lab"}],qs=0;function x0(){qs=(qs+1)%qr.length;let n=qr[qs];Me("btnNav").textContent=n.icon,fi(`<small>Guide</small>${n.icon} ${Nt(n.name)}${n.id==="auto"?": markers off, just the little arrow":": markers on"}`,1800)}function y0(n){return n?qr[qs].id!=="auto"?2:n.kind==="bug"?0:1:0}var Jl={lodge:{icon:"\u{1F3E0}",label:"Triage Lodge",color:"#ffb070"},home:{icon:"\u{1F3E1}",label:"Home lab",color:"#9ff0ff"},bug:{icon:"\u{1F41E}",label:"Bug",color:"#ffd166"},fuel:{icon:"\u26FD",label:"Fuel",color:"#ff9a40"},power:{icon:"\u2728",label:"Power-up",color:"#9affd8"},card:{icon:"\u{1F4C7}",label:"Codex card",color:"#ffd38a"},warp:{icon:"\u{1F300}",label:"Zero-Day Warp",color:"#d8b0ff"}};function Q1(){let n=qr[qs].id;if(n!=="auto")return Tl(n);let e=j.quest,t=j.reports.length;n=t>=3||t&&e&&e.kind==="lodge"?"lodge":e&&e.kind&&e.kind!=="lodge"?e.kind:"bug";let i=Tl(n);return!i&&n!=="bug"&&(i=Tl("bug")),!i&&t&&(i=Tl("lodge")),i}function Tl(n){let e=null,t=(i,s,r,o,a,l)=>{let c=Math.hypot(s-E.x,r-E.z);(!e||c<e.d)&&(e={kind:i,x:s,z:r,y:o,d:c,color:a||Jl[i].color,label:l})};for(let i of di.values()){let s=i.info;if(s){if(n==="lodge"&&s.lodge&&t("lodge",s.lodge.x,s.lodge.z,ht(s.lodge.x,s.lodge.z)+6),n==="bug")for(let r of s.bugs)r.taken||t("bug",r.x,r.z,r.y,Yi[r.s].css,`${Yi[r.s].name} bug`);if(n==="fuel")for(let r of s.fuels)r.taken||t("fuel",r.x,r.z,r.y);n==="power"&&s.orb&&t("power",s.orb.x,s.orb.z,s.orb.y,zn[s.orb.type].css,zn[s.orb.type].name),n==="card"&&(s.shrine&&!s.shrine.unlocked&&t("card",s.shrine.x,s.shrine.z,ht(s.shrine.x,s.shrine.z)+5,null,"Hacker Shrine"),s.tower&&!s.tower.unlocked&&t("card",s.tower.x,s.tower.z,ht(s.tower.x,s.tower.z)+8,"#ff8ad0","Radio tower")),n==="warp"&&s.warp&&t("warp",s.warp.x,s.warp.z,s.warp.y)}}return et&&(n==="home"||n==="lodge"&&(!e||e.d>Math.hypot(et.x-E.x,et.z-E.z)))&&(e=null,t("home",et.x,et.z,ht(et.x,et.z)+6)),e}var mu={x:0,z:0,r:3.4},eM=[mu];function tM(n){j1();let e=k1[E.mount],t=ht(E.x,E.z);E.surface=t<.05?se.water==="water"?"water":"ice":"land";let i=Kt.boost>0?1.6:1,s=E.turbo;E.turbo=wt.turbo&&j.fuel>0&&wt.throttle>0,E.turbo?(j.fuel=Math.max(0,j.fuel-Br.drain*n),vs=!0,s||(nt.turboStart(),Ot("turbo")),j.fuel===0&&fi("\u26FD Out of fuel. Grab more cans (orange glow) to turbo again",2600)):wt.turbo&&s===!1&&j.fuel<=0&&!Ne.noFuelHint&&(Ne.noFuelHint=!0,fi("\u26FD Your tank is empty. Collect fuel cans to use turbo",2600));let r=0;E.turbo?r=e.run*Br.turbo*i:wt.throttle>0?r=(wt.sprint?e.run:e.walk)*wt.throttle*i:wt.throttle<0&&(r=-2.5),E.surface==="water"&&(r*=.6),vt.set(-Math.sin(E.heading),0,-Math.cos(E.heading));let o=cn(E.x,E.z),a=(cn(E.x+vt.x*1.5,E.z+vt.z*1.5)-o)/1.5;r>0&&(r*=Tt(1-a*(E.mount==="bike"?1.6:1),.25,E.mount==="bike"?1.5:1.15)),E.mount==="bike"&&wt.throttle===0&&a<-.05&&(r=Math.min(e.run,E.speed-a*6*n*10));let l=E.surface==="ice"||se.water==="mirror"&&E.surface!=="land",c=E.turbo?2.6:l?.6:r===0?2.6:e.accel;E.bumpT>0&&(E.bumpT-=n,r=Math.min(r,1)),E.speed+=(r-E.speed)*Jt(c,n);let h=E.mount==="reindeer"?Tt(.45+Math.abs(E.speed)/6,.45,1):Tt(Math.abs(E.speed)/4,.15,1);E.steerIn=We(E.steerIn,wt.steer,Jt(Qt.id!==null?22:14,n)),E.heading+=E.steerIn*e.turn*h*n*(E.speed<-.1?-1:1)*(l?.7:1),E.steerVis=We(E.steerVis,wt.steer,Jt(8,n)),vt.set(-Math.sin(E.heading),0,-Math.cos(E.heading)),E.vel.lerp(Oo.copy(vt).multiplyScalar(E.speed),Jt(l?.9:9,n));let u=E.x+E.vel.x*n,d=E.z+E.vel.z*n,f=Jp(u,d);et&&(mu.x=et.x,mu.z=et.z);for(let D=et?-1:0;D<f.length;D++)for(let M of D<0?eM:f[D].colliders){let A=u-M.x,N=d-M.z,W=M.r+.55,re=A*A+N*N;if(re<W*W&&re>1e-6){let P=Math.sqrt(re);u=M.x+A/P*W,d=M.z+N/P*W,Math.abs(E.speed)>7&&E.bumpT<=0&&(A*vt.x+N*vt.z)/P<-.6&&(E.bumpT=.25,E.speed*=.7,nt.bump(),Zt.burst(M.x,M.tree?3:1.2,M.z,se.tree==="sakura"&&M.tree?16761048:se.tree==="autumn"&&M.tree?15245376:16777215,M.tree?40:18,2.5,2.5,1.4))}}let g=cn(u,d);E.grounded&&g-o>1.2*Math.max(.3,Math.hypot(u-E.x,d-E.z))+.15&&(E.speed*=.5,u=E.x,d=E.z);let y=Math.hypot(u-E.x,d-E.z);E.x=u,E.z=d,tu+=y,j.dist+=y,tu>50&&(tu=0,j.dist>=5e3&&Ot("dist5k"),j.pos[se.id]={x:E.x,z:E.z,h:E.heading},vn());let m=cn(E.x,E.z)-(E.surface==="water"?.35:0),p=Kt.moon>0,_=p?8.5:se.lowG?12:22,x=e.jump*(p?1.25:1);wt.jump&&(E.grounded?(E.vy=x,E.grounded=!1,E.airJumps=0,nt.jump()):Kt.doublejump>0&&E.airJumps<1&&(E.vy=x*.95,E.airJumps++,nt.jump(),nt.power(),Ot("airjump"),Zt.burst(E.x,E.y+.3,E.z,16751196,36,3.5,.5,.8))),wt.jump=!1,E.gliding=!1,E.grounded?m<E.y-.6&&Math.abs(E.speed)>6?(E.grounded=!1,E.vy=0):E.y=We(E.y,m,Jt(20,n)):(E.vy-=_*n,Kt.glide>0&&wt.jumpHeld&&E.vy<-1.4&&(E.vy=We(E.vy,-1.4,Jt(8,n)),E.gliding=!0,Ot("glider")),E.y+=E.vy*n,E.y<=m&&(E.y=m,E.grounded=!0,E.vy=0,E.airJumps=0,nt.land(),Zt.burst(E.x,m+.1,E.z,E.surface==="water"?13625599:15266047,14,2,3,.6),E.surface==="water"&&dp(E.x,E.z)));let v=E.mount==="bike"?.6:.8,I=cn(E.x+vt.x*v,E.z+vt.z*v),S=cn(E.x-vt.x*v,E.z-vt.z*v);E.pitch=We(E.pitch,E.grounded?Math.atan2(I-S,v*2):Tt(E.vy*.04,-.3,.3),Jt(8,n)),E.roll=We(E.roll,E.steerVis*Tt(E.speed/(E.mount==="bike"?10:14),0,1)*(E.mount==="bike"?.35:.12),Jt(6,n)),Ci.position.set(E.x,E.y,E.z),Ci.rotation.set(E.pitch,E.heading,E.roll),nM(n);let R=Math.abs(E.speed);if(E.mount==="reindeer"){if(E.gait+=n*(R*1.3+.2),Zh+=n*R*.55,Zh>1&&E.grounded&&(Zh=0,nt.step(E.surface,R>9?1.4:1),se.trail&&E.surface==="land"))for(let D of[-1,1])cu.add(E.x+Math.cos(E.heading)*.22*D,E.z-Math.sin(E.heading)*.22*D,E.heading,1,1.4);Jh+=n*R*.35,Jh>1&&(Jh=0,nt.jingle(R>9?1.5:1)),se.cold&&(Qh-=n,Qh<=0&&(Qh=Ke(1.4,2.2),Si.breath.getWorldPosition(Oo),Zt.burst(Oo.x,Oo.y,Oo.z,14674175,6,.4,-.25,1.3,[vt.x*.6,.2,vt.z*.6])))}else E.crank+=n*(wt.throttle>0?R*1.6:0),Kh+=n*(wt.throttle>0?0:R*3),Kh>1&&(Kh=0,nt.tick()),jh+=y,jh>.35&&se.trail&&E.surface==="land"&&E.grounded&&(jh=0,cu.add(E.x,E.z,E.heading,.45,2.6));if(E.surface==="water"&&R>1&&(eu-=n,eu<=0&&(eu=.25,Zt.burst(E.x,.2,E.z,13625599,6,1.5,4,.5),Math.random()<.5&&dp(E.x,E.z))),(Kt.boost>0||E.turbo)&&R>4)for(let D=0;D<(E.turbo?4:2);D++)Zt.burst(E.x+vt.x*14+Ke(-6,6),E.y+Ke(.5,4),E.z+vt.z*14+Ke(-6,6),E.turbo?16756832:8257434,1,0,0,.5,[-vt.x*40,0,-vt.z*40]);if(E.turbo){let D=E.x-vt.x*(E.mount==="bike"?.9:1.4),M=E.z-vt.z*(E.mount==="bike"?.9:1.4);Zt.burst(D,E.y+.7,M,_n([16742944,16756800,16730656]),3,0,-.5,.45,[-vt.x*6+Ke(-.6,.6),Ke(.3,1.2),-vt.z*6+Ke(-.6,.6)])}if(E.gliding&&Zt.burst(E.x,E.y+1.2,E.z,10158040,2,0,0,.8,[-vt.x*2,.3,-vt.z*2]),Kt.moon>0&&!E.grounded&&Math.random()<.3&&Zt.burst(E.x,E.y+.5,E.z,13687039,1,.5,0,1.2),E.grounded&&R>11&&E.surface==="land"&&Math.random()<n*28&&(Cp.setRGB(...se.ground.flat).multiplyScalar(se.snowy?.9:.45),Zt.burst(E.x-vt.x*.9+Ke(-.3,.3),E.y+.15,E.z-vt.z*.9+Ke(-.3,.3),Cp,1,0,2,.7,[-vt.x*1.5,Ke(.8,1.8),-vt.z*1.5])),$t&&$t.kind==="bug"&&$t.d<45){let D=Gt(45,5,$t.d);Al+=n*(.45+D*2),Al>1&&(Al=0,nt.sense(D))}else Al=.7;Fl>=0&&j.dist-Fl>70&&(Fl=-1,Me("hint").classList.remove("show")),nt.wind(R),nt.turbo(E.turbo?R:0)}var Al=0;function nM(n){let e=Kt.double>0?2:1,t=Qp()?2:1;Ne.chainT>0&&(Ne.chainT-=n,Ne.chainT<=0&&(Ne.chain=0));let i=0,s=Kt.magnet>0?30:Kt.radar>0?16:0,r=Jt(Kt.magnet>0?4:2.2,n);for(let o of Jp(E.x,E.z)){let a=o.info;if(a){for(let l of a.fuels){if(l.taken)continue;let c=Math.hypot(l.x-E.x,l.z-E.z);if(Kt.magnet>0&&c<s&&(l.x=We(l.x,E.x,r),l.z=We(l.z,E.z,r),l.y=We(l.y,E.y+1,r),l.obj.position.set(l.x-o.group.position.x,l.y,l.z-o.group.position.z),l.obj.updateMatrix(),c=Math.hypot(l.x-E.x,l.z-E.z)),c<2.8&&Math.abs(l.y-(E.y+1))<3.5){l.taken=!0,l.obj.visible=!1,Vr.add(l.key);let h=j.fuel;j.fuel=Math.min(Br.max,j.fuel+Br.perCan),j.cans=(j.cans||0)+1,nt.fuel(),Zt.burst(l.x,l.y,l.z,16751168,26,2.5,1,.9),Xo(l.x,l.y+.4,l.z,`\u26FD +${Math.round(j.fuel-h)}%`,"#ffb060"),Ne.fuelHint||(Ne.fuelHint=!0,fi(`<small>\u26FD Fuel</small>Hold <b>${Ys?"\u{1F525}":"F"}</b> to turbo. Each orange can adds a little more.`,4e3)),vs=!0,vn()}}for(let l of a.bugs){if(l.taken)continue;let c=Math.hypot(l.x-E.x,l.z-E.z);if(s>0&&c<s){let h=r;l.x=We(l.x,E.x,h),l.z=We(l.z,E.z,h),l.y=We(l.y,E.y+1.3,h),l.obj.position.set(l.x-o.group.position.x,l.y,l.z-o.group.position.z),l.obj.updateMatrix(),c=Math.hypot(l.x-E.x,l.z-E.z)}if(c<3&&Math.abs(l.y-(E.y+1.3))<3.2){l.taken=!0,l.obj.visible=!1,vu.add(l.key),Ne.chain=Ne.chainT>0?Ne.chain+1:1,Ne.chainT=o0;let h=Yi[l.s],u=i0(),d=Math.round(Math.round(Ke(h.bounty[0],h.bounty[1])/10)*10*u*e);if(j.reports.push({s:l.s,b:d}),j.bugs[h.id]=(j.bugs[h.id]||0)+1,Ne.chain>j.bestChain&&(j.bestChain=Ne.chain),nt.bug(l.s,Ne.chain),Zt.burst(l.x,l.y,l.z,h.color,30+l.s*20,3+l.s,1,1.2),Xo(l.x,l.y+.4,l.z,`<b>${h.name}</b> ${es(d)}`,h.css),$r(Math.round(h.xp*u*e*t),l.x,l.y-.2,l.z),Ot("first_bug"),l.s===3&&Ot("critical"),h.id==="zeroday"){Ot("zeroday"),Cu("Zero-Day found!",`the rarest bug of all \xB7 ${es(d)}`,3600);for(let f=0;f<4;f++)Zt.burst(l.x,l.y+f*.6,l.z,_n([11563263,16777215,16743096]),40,6,1,1.8)}Ne.chain>=5&&Ot("chain5"),Ne.chain>=10&&Ot("chain10"),vs=!0,vn()}}if(a.lodge&&j.reports.length&&Math.hypot(a.lodge.x-E.x,a.lodge.z-E.z)<8){let l=!a.lodge.done;a.lodge.done=!0,Mu.add(a.lodge.key),Ru(o.lodge,!0,!1),wp(a.lodge.x,a.lodge.z,!1,l)}if(a.shrine&&Math.hypot(a.shrine.x-E.x,a.shrine.z-E.z)<5.5&&!a.shrine.seen){a.shrine.seen=!0;let l=!Hn.has(a.shrine.hacker.handle);xp(a.shrine.hacker,a.shrine.key,a.shrine.x,3,a.shrine.z,100),a.shrine.unlocked=!0,Wp(o.shrine,a.shrine.hacker,!0),l&&Zt.burst(a.shrine.x,3,a.shrine.z,16765834,80,4,.5,1.8)}if(a.tower){let l=Math.hypot(a.tower.x-E.x,a.tower.z-E.z);if(i=Math.max(i,Gt(30,8,l)),l<7.5&&!a.tower.seen){a.tower.seen=!0;let c=!Hn.has(a.tower.hacker.handle);xp(a.tower.hacker,a.tower.key,a.tower.x,6,a.tower.z,120),Ot("podcast"),a.tower.unlocked=!0,Xp(o.tower,a.tower.hacker,!0),c&&Zt.burst(a.tower.x,17,a.tower.z,16747216,90,5,.5,2)}}if(a.orb&&Math.hypot(a.orb.x-E.x,a.orb.z-E.z)<3){let l=a.orb.type,c=zn[l];Kt[l]=c.dur,Vr.add(a.orb.key),o.orb.visible=!1,j.orbs=(j.orbs||0)+1,Zt.burst(a.orb.x,a.orb.y,a.orb.z,c.color,60,4,.5,1.2),nt.power(),fi(`<small>${c.icon} ${Nt(c.name)}</small>${Nt(c.desc)}`,3e3),j.powersUsed.includes(l)||(j.powersUsed.push(l),j.powersUsed.length>=5&&Ot("powers3"),vn()),a.orb=null}a.warp&&Math.hypot(a.warp.x-E.x,a.warp.z-E.z)<2.8&&(Vr.add(a.warp.key),o.warp.visible=!1,a.warp=null,K1())}}et&&j.reports.length&&Math.hypot(et.x-E.x,et.z-E.z)<8&&wp(et.x,et.z,!0),nt.radio(i)}function wp(n,e,t,i){let s=Math.round(j.reports.reduce((a,l)=>a+l.b,0)*(i?1.1:1)),r=j.reports.length;j.bounty+=s,j.submitted+=r,j.reports=[],nt.submit(),Zt.burst(n,2.5,e,8257434,90,4.5,1,1.8),Xo(n,4,e,`<b>Triaged \u2713</b> +${es(s)}`,"#7dff9a"),$r(15*r+Math.round(s/400),n,3,e);let o=['Triager: "Thanks for the clear write-up!" \u2705',"Report resolved. The program team says thank you \u{1F49A}","Bounty awarded. Nice find!","Valid & resolved. The internet is a little safer tonight \u{1F319}","Triaged within minutes. Lovely clear steps to reproduce."];fi(`<small>${t?"Submitted from your home lab":"Triage Lodge"}</small>${r} report${r>1?"s":""} \xB7 <b>${es(s)}</b>${i?" \xB7 new lodge +10%":""}<br>${_n(o)}`,4200),Ot("first_report"),j.bounty>=1e4&&Ot("bounty10k"),j.bounty>=1e5&&Ot("bounty100k"),vs=!0,vn()}var Rn={hipX:0,hipZ:0,shX:0,pelX:0};function iM(n){let e=Math.abs(E.speed);if(E.mount==="reindeer"){let r=E.gait,o=e>8.5,a=Tt(e/6,0,1)*(o?.75:.5),l=o?[0,.35,Math.PI,Math.PI+.35]:[0,Math.PI,Math.PI,0];Si.legs.forEach((h,u)=>{let d=r+l[u];h.hip.rotation.x=Math.sin(d)*a*(E.grounded?1:.2)+(E.grounded?0:h.front?-.7:.7),h.knee.rotation.x=(h.front?1:-1)*Math.max(0,-Math.cos(d))*a*1.3+(E.grounded?0:h.front?1.2:-.6)}),Si.body.position.y=1.25+Math.abs(Math.sin(r))*(o?.1:.04)*Tt(e/5,0,1),Si.body.rotation.x=o?Math.sin(r)*.06:0,Si.neck.rotation.x=-.65+Math.sin(r*2)*.04*Tt(e/5,0,1)+(e<.3?Math.sin(Te*.5)*.08:0),Si.head.rotation.y=E.steerVis*.3+(e<.3?Math.sin(Te*.3)*.25:0),Si.tail.rotation.z=Math.sin(Te*3)*.3,gt.root.position.set(0,Si.body.position.y+.42-.78+.06,.05),Rn.hipX=.4,Rn.hipZ=.5,Rn.shX=.85,Rn.pelX=o?-.08+Math.sin(r)*.05:-.04;let c=Jt(10,n);gt.hipL.rotation.x=We(gt.hipL.rotation.x,Rn.hipX,c),gt.hipR.rotation.x=We(gt.hipR.rotation.x,Rn.hipX,c)}else{let r=E.crank;ys.crankG.rotation.x=-r,ys.rear.rotation.x-=E.speed*n/.4,ys.front.rotation.x-=E.speed*n/.4,ys.steer.rotation.y=E.steerVis*.35,gt.root.position.set(0,1.02-.78+.08,.2),Rn.hipZ=.05,Rn.shX=1.25,Rn.pelX=-.35,gt.hipL.rotation.x=.55+Math.sin(r)*.38,gt.hipR.rotation.x=.55+Math.sin(r+Math.PI)*.38}let t=Jt(10,n);gt.hipL.rotation.z=We(gt.hipL.rotation.z,-Rn.hipZ,t),gt.hipR.rotation.z=We(gt.hipR.rotation.z,Rn.hipZ,t);let i=E.grounded?0:1.4;gt.shL.rotation.x=We(gt.shL.rotation.x,Rn.shX+i*.6,t),gt.shR.rotation.x=We(gt.shR.rotation.x,Rn.shX+i,t);let s=E.gliding?1.3:0;gt.shL.rotation.z=We(gt.shL.rotation.z,-.18-s,t),gt.shR.rotation.z=We(gt.shR.rotation.z,.18+s,t),E.turbo&&(gt.pelvis.rotation.x=We(gt.pelvis.rotation.x,Rn.pelX-.3,t)),gt.pelvis.rotation.x=We(gt.pelvis.rotation.x,Rn.pelX,t),gt.head.rotation.y=We(gt.head.rotation.y,E.steerVis*.35+(e<.3?Math.sin(Te*.4)*.4:0),t),du-=n,qo.visible=Ne.state==="play"&&du>0&&!document.body.classList.contains("photo");for(let r of di.values()){let o=r.info;if(!o)continue;let a=Math.abs(r.group.position.x+32-E.x)+Math.abs(r.group.position.z+32-E.z)<200;if(a!==r.live){r.live=a;for(let c of r.dyn)c.matrixAutoUpdate=a;for(let c of r.lodge.userData.detail)c.visible=a;r.hasSnowman&&(r.snowman.visible=a)}for(let c of o.bugs)if(!c.taken){let h=c.obj.userData;if(h.body.visible=a&&Math.abs(c.x-E.x)+Math.abs(c.z-E.z)<110,h.beam.material.opacity=(.1+c.s*.05)*Gt(6,34,Math.hypot(c.x-E.x,c.z-E.z))*(.85+.15*Math.sin(Te*1.7+c.ph)),!h.body.visible)continue;h.body.position.y=Math.sin(Te*2+c.ph)*.15,h.body.rotation.y=Te*.6+c.ph;for(let u of h.wings)u.w.rotation.z=u.s*(.3+Math.sin(Te*28+c.ph)*.5);h.halo.material.opacity=.45+Math.sin(Te*3+c.ph)*.15}if(a&&o.shrine){let c=r.shrine.userData;c.ring.rotation.z=Te*.8,c.ring.position.y=2.4+Math.sin(Te*1.3)*.5,c.gem.rotation.y=Te*1.5,c.gem.position.y=4.2+Math.sin(Te*2)*.12}if(o.tower){let c=r.tower.userData,h=Math.sin(Te*3)>.6?1:.25;c.light.material.color.setRGB(4*h,.4*h,.5*h),c.halo.material.opacity=.8*h,a&&c.rings.forEach((u,d)=>{let f=(Te*.4+d/3)%1;u.scale.setScalar(1+f*9),u.material.opacity=(1-f)*.55})}if(o.orb){let c=r.orb.userData;c.beam.material.opacity=.2*Gt(4,24,Math.hypot(o.orb.x-E.x,o.orb.z-E.z)),a&&(c.core.rotation.y=Te*1.5,c.core.rotation.x=Te,r.orb.position.y=o.orb.y+Math.sin(Te*2)*.15)}if(a&&o.warp){let c=r.warp.userData;c.knot.rotation.y=Te*1.2,c.knot.rotation.x=Te*.7,c.ring.rotation.x=Te*.9,c.ring.rotation.y=Te*.5}a&&r.landmark.visible&&(r.landmark.userData.star.rotation.y=Te*.8),a&&r.monument.visible&&r.spin.visible&&(r.spin.rotation.z=Te*.5);let l=a;for(let c of o.fuels)if(!c.taken){if(c.obj.visible=l,!l)continue;let h=c.obj.userData;h.spin.rotation.y=Te*1.8+c.x,h.spin.position.y=Math.sin(Te*2.5+c.z)*.12,h.ring.scale.setScalar(1+(Te*.8+c.x)%1*.6),h.ring.material.opacity=.7*(1-(Te*.8+c.x)%1)}if(o.lodge){let c=a,h=r.lodge.userData;if(h.smokeOn!==c){h.smokeOn=c;for(let u of h.smoke)u.visible=c}c&&Tp(r.lodge),Sp(r.lodge,o.lodge.x,o.lodge.z)}}et&&(Tp(ji),Sp(ji,et.x,et.z))}function Sp(n,e,t){let i=n.userData;if(!i.beam.visible)return;let s=j.reports.length>0,r=Math.hypot(e-E.x,t-E.z);i.beam.material.opacity=(s?.5+Math.sin(Te*2)*.08:.13)*Gt(8,35,r),i.beam.scale.x=i.beam.scale.z=s?1.8:1.2}function Tp(n){n.userData.smoke.forEach((e,t)=>{let i=(Te*.25+t/6)%1;e.position.set(1.4+Math.sin(i*4+t)*.4+i*1.5*Ye.wind*2,6.3+i*6,.6+i*.8),e.scale.setScalar(.6+i*2.8),e.material.opacity=Math.sin(i*Math.PI)*.35})}var sM={fox:{body:[.9,.36,.32],leg:.32,head:.2,snout:.16,ears:"point",tail:"bushy",speed:2.2,size:1.3},hare:{body:[.5,.3,.28],leg:.14,head:.15,snout:.05,ears:"long",tail:"puff",speed:2.4,hop:!0,size:1.6},deer:{body:[1.25,.5,.4],leg:.78,head:.2,snout:.2,ears:"point",tail:"puff",neck:.5,speed:1.9},camel:{body:[1.8,.7,.55],leg:1.15,head:.25,snout:.26,ears:"round",tail:"thin",neck:.95,hump:!0,speed:1.3},panda:{body:[1.05,.7,.7],leg:.3,head:.36,snout:.1,ears:"round",tail:"puff",speed:.8},turtle:{body:[.8,.32,.6],leg:.1,head:.14,snout:.04,ears:"none",tail:"none",shell:!0,speed:.45,size:1.4}},rM={tundra:[["fox",15922687,16777215,"Arctic fox","\u{1F98A}"],["hare",16777215,15791359,"Snow hare","\u{1F407}"],["deer",9071178,15128253,"Caribou","\u{1F98C}",{antlers:!0,socks:3811872}]],sakura:[["deer",11565642,15786184,"Sika deer","\u{1F98C}",{spots:!0,socks:4861984}],["hare",13152408,16051424,"Rabbit","\u{1F407}"]],dunes:[["camel",13148256,14729352,"Camel","\u{1F42B}"],["fox",15255696,16773328,"Fennec fox","\u{1F98A}",{ear:2}]],neon:[["fox",5929160,9071304,"Glitch cat","\u{1F408}",{glow:!0}],["hare",9071304,5929160,"Pixel bunny","\u{1F407}",{glow:!0}]],autumn:[["fox",13656106,16773344,"Red fox","\u{1F98A}",{socks:2759188}],["deer",9067060,15126704,"Stag","\u{1F98C}",{antlers:!0,socks:3810328}],["hare",10123866,15259840,"Hare","\u{1F407}"]],lagoon:[["turtle",4880970,8034890,"Sea turtle","\u{1F422}"],["panda",10121288,11569760,"Capybara","\u{1F9AB}",{plain:!0}]],bamboo:[["panda",16777215,1842208,"Panda","\u{1F43C}"],["deer",10516552,15259840,"Muntjac deer","\u{1F98C}",{socks:3811872}]],moon:[["hare",14674175,10535167,"Moon rabbit","\u{1F407}",{glow:!0}]],meadow:[["hare",12097656,16051424,"Cottontail","\u{1F407}"],["deer",11567184,15786184,"Fawn","\u{1F98C}",{spots:!0,socks:4861984}],["fox",14184506,16773344,"Fox","\u{1F98A}",{socks:2759188}]]},oM=new mt({color:16777215});function aM(n,e,t,i={}){let s=sM[n],[r,o,a]=s.body,l=M=>i.glow?new mt({color:new ve(M).multiplyScalar(.9)}):new Oe({color:M,roughness:.95}),c=l(e),h=l(t),u=n==="panda"&&!i.plain,d=u?h:c,f=i.socks?l(i.socks):null,g=new ke,y=new ke;y.position.y=s.leg+o*.5,g.add(y);let m=(M,A,N,W=0,re=0,P=0)=>{let U=new pe(A,N);return U.position.set(W,re,P),M.add(U),U},p=(M=14)=>new Ie(.5,M,Math.max(8,M-4));if(m(y,p(18),c).scale.set(a,o,r),m(y,p(),c,0,o*.05,-r*.3).scale.set(a*.95,o*.98,r*.5),u||m(y,p(),h,0,-o*.14,0).scale.set(a*.8,o*.75,r*.85),u&&m(y,p(),h,0,o*.05,-r*.28).scale.set(a*1.02,o*1,r*.3),s.hump&&m(y,p(),c,0,o*.5,r*.05).scale.set(a*.7,o*.8,r*.4),s.shell&&m(y,new Ie(.5,16,8,0,Math.PI*2,0,Math.PI/2),h,0,-o*.1,0).scale.set(a*1.15,o*1.7,r*1.05),i.spots)for(let M=0;M<9;M++)m(y,new Ie(.035,6,4),h,(M%3-1)*a*.26,o*(.42-Math.abs(M%3-1)*.12),(M/9-.45)*r*.7);let _=s.neck||.1,x=new ke;if(x.position.set(0,o*.18,-r*.42),y.add(x),s.neck){let M=m(x,new Ge(s.head*.45,s.head*.62,_*1.1,10),c,0,_*.45,-_*.2);M.rotation.x=-.4}let v=new ke;v.position.set(0,_*.9+s.head*.3,-_*.4-s.head*.35),x.add(v),m(v,new Ie(s.head,16,12),c),m(v,new Ie(s.head*.55,12,8),u?c:h,0,-s.head*.2,-s.head*.6-s.snout*.4).scale.z=1+s.snout/(s.head*.6),m(v,new Ie(s.head*.13,8,6),k.dark,0,-s.head*.12,-s.head*.95-s.snout);for(let M of[-1,1]){if(u&&(m(v,new Ie(s.head*.22,8,6),h,M*s.head*.42,s.head*.18,-s.head*.74).scale.z=.4),m(v,new Ie(s.head*.11,8,6),k.dark,M*s.head*.45,s.head*.22,-s.head*.82),m(v,new Ie(s.head*.035,6,4),oM,M*s.head*.43,s.head*.27,-s.head*.91),s.ears==="point"){let A=s.head*.75*(i.ear||1),N=s.head*(.8+.3*((i.ear||1)-1));m(v,new Bt(s.head*.32,A,8),c,M*s.head*.5,N,.02).rotation.z=-M*.25,m(v,new Bt(s.head*.18,A*.7,8),h,M*s.head*.5,N-A*.08,-s.head*.09).rotation.z=-M*.25}else s.ears==="long"?m(v,new Zn(s.head*.17,s.head*1.2,4,10),c,M*s.head*.35,s.head*1.35,.03).rotation.z=-M*.15:s.ears==="round"&&m(v,new Ie(s.head*.3,10,8),d,M*s.head*.72,s.head*.72,0);i.antlers&&(v.add(Xs([[M*.07,s.head*.8,.03],[M*.2,s.head+.25,.08],[M*.34,s.head+.5,.02],[M*.36,s.head+.72,-.1]],.022,k.antler)),v.add(Xs([[M*.2,s.head+.25,.08],[M*.2,s.head+.36,-.1],[M*.17,s.head+.44,-.18]],.016,k.antler)),v.add(Xs([[M*.33,s.head+.48,.02],[M*.44,s.head+.6,.1]],.014,k.antler)))}let I=null;s.tail==="bushy"?(I=m(y,p(12),c,0,o*.1,r*.7),I.scale.set(a*.55,a*.55,r*.75),I.rotation.x=.45,m(I,new Ie(.3,10,8),h,0,0,.3)):s.tail==="puff"?I=m(y,new Ie(o*.26,10,8),u?c:h,0,o*.12,r*.5):s.tail==="thin"&&(I=m(y,new Ge(.03,.02,o,5),c,0,-o*.2,r*.5));let S=[],R=s.leg+o*.25,D=a*.13;for(let[M,A]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let N=new ke;N.position.set(M*a*(s.shell?.5:.3),-o*.25,A*r*.3),y.add(N),m(N,new Ge(D,D*.8,R,8),d,0,-R/2,0),f&&m(N,new Ge(D*.9,D*.85,R*.45,8),f,0,-R*.78,0),S.push(N)}return g.scale.setScalar(s.size||1),g.traverse(M=>{M.isMesh&&(M.castShadow=!0)}),{root:g,body:y,head:v,neck:x,legs:S,tail:I,K:s}}var lM=hn.cover?9:5,Vo=[];function cM(){for(let e of Vo)Mt.remove(e.obj.root);Vo.length=0;let n=rM[se.id]||[];if(n.length)for(let e=0;e<lM;e++){let[t,i,s,r,o,a]=n[e%n.length],l=aM(t,i,s,a);l.root.visible=!1,Mt.add(l.root),Vo.push({obj:l,name:r,icon:o,active:!1,x:0,z:0,heading:0,goal:0,speed:0,t:0,mode:"idle",gait:Math.random()*6,met:!1,graze:0})}}var nu=0;function hM(){let n=Vo.find(e=>!e.active);if(n)for(let e=0;e<4;e++){let t=Math.random()*Math.PI*2,i=Ke(38,85),s=E.x+Math.cos(t)*i,r=E.z+Math.sin(t)*i,o=ht(s,r);if(!(o<.8||o>30||Math.abs(ht(s+2,r)-o)+Math.abs(ht(s,r+2)-o)>1.6)&&!(et&&Math.hypot(et.x-s,et.z-r)<12)){Object.assign(n,{active:!0,x:s,z:r,heading:Math.random()*6.28,speed:0,t:Ke(1,4),mode:"idle",met:!1}),n.goal=n.heading,n.obj.root.visible=!0;return}}}function uM(n,e){Xo(n.x,e+1.4,n.z,`${n.icon} ${Nt(n.name)}`,"#ffe9a8"),Zt.burst(n.x,e+1,n.z,16751296,14,1.6,-.6,1.3),nt.chirp(),j.animals.includes(n.name)||(j.animals.push(n.name),$r(25,n.x,e+.6,n.z),vn(),fi(`<small>\u{1F43E} New friend</small>${n.icon} ${Nt(n.name)}`,2600),j.animals.length>=5&&Ot("friends"))}function dM(n){nu-=n,nu<=0&&(nu=.7,hM());for(let e of Vo){if(!e.active)continue;let t=e.x-E.x,i=e.z-E.z,s=Math.hypot(t,i),r=e.obj.K,o=e.obj;if(s>130){e.active=!1,o.root.visible=!1;continue}e.t-=n,s<10&&Math.abs(E.speed)>11&&e.mode!=="flee"?(e.mode="flee",e.t=3,e.goal=Math.atan2(-t,-i)):e.t<=0&&(e.mode==="walk"?(e.mode="idle",e.t=Ke(2,6)):(e.mode="walk",e.t=Ke(3,8),e.goal=e.heading+Ke(-1.5,1.5)));let a=e.mode==="flee"?r.speed*3:e.mode==="walk"?r.speed:0;e.heading+=Hl(e.goal-e.heading)*Jt(3,n),e.speed=We(e.speed,a,Jt(3,n));let l=-Math.sin(e.heading),c=-Math.cos(e.heading),h=e.x+l*e.speed*n,u=e.z+c*e.speed*n,d=ht(h+l*2.5,u+c*2.5),f=ht(e.x,e.z);d<.4||Math.abs(d-f)>2.2?e.goal=e.heading+2.4:Math.hypot(h-E.x,u-E.z)>1.6&&(e.x=h,e.z=u),e.gait+=n*e.speed*3.2/(r.leg+.3);let g=Tt(e.speed/r.speed,0,1.3),y=cn(e.x,e.z);o.root.position.set(e.x,y+(r.hop?Math.abs(Math.sin(e.gait*.5))*.28*Math.min(1,g):0),e.z),o.root.rotation.y=e.heading,o.root.visible=s<105,o.legs.forEach((m,p)=>{m.rotation.x=Math.sin(e.gait+(p===0||p===3?0:Math.PI))*.5*g}),e.graze=We(e.graze,e.mode==="idle"&&s>7&&!r.shell?1:0,Jt(2,n)),o.neck.rotation.x=e.graze*(r.neck?1:.5)+Math.sin(e.gait*2)*.03*g,o.head.rotation.y=e.mode==="idle"&&s<7?Tt(Hl(Math.atan2(t,i)-e.heading),-1,1):0,o.tail&&(o.tail.rotation.y=Math.sin(Te*3+e.gait)*.25),!e.met&&s<4.5&&Math.abs(E.speed)<11&&(e.met=!0,uM(e,y))}vM(n)}var zl=new mt({color:1315868,side:ln}),gu=new pt;gu.setAttribute("position",new Et(new Float32Array([0,0,-.22,0,0,.26,1,0,.12,0,0,.26,.55,0,.42,1,0,.12]),3));var fM=new qi(.5,0).scale(.2,.16,1.1),_0=Array.from({length:9},(n,e)=>{let t=new ke,i=new pe(gu,zl),s=new pe(gu,zl);return s.scale.x=-1,t.add(new pe(fM,zl),i,s),t.userData={l:i,r:s,ph:e*1.7,rad:6+e%3*4,hgt:e%4*1.2},t.visible=!1,Mt.add(t),t}),Ap=new qn(.17,.22).translate(.085,0,0).rotateX(-Math.PI/2),v0=Array.from({length:12},(n,e)=>{let t=new mt({color:16777215,side:ln}),i=new ke,s=new pe(Ap,t),r=new pe(Ap,t);return r.scale.x=-1,i.add(s,r),i.userData={l:s,r,mat:t,ph:e*2.3,x:0,z:0,placed:!1},i.visible=!1,Mt.add(i),i}),wi=n=>new Oe({color:n,roughness:.8});function pM(n){let e=new ke,t=(i,s,r=0,o=0,a=0)=>{let l=new pe(i,s);return l.position.set(r,o,a),e.add(l),l};if(n==="boat")t(new Ge(.55,.3,2.6,8).rotateX(Math.PI/2),wi(9067066),0,.15,0).scale.y=.6,t(new Ge(.04,.04,2.8,6),wi(4863012),0,1.6,-.2),t(new Bt(.95,2.3,3).scale(.04,1,1),wi(16447214),0,1.8,.35);else if(n==="lantern")t(new dt(.55,.06,.55),wi(6965808),0,.03,0),t(new dt(.36,.34,.36),new mt({color:new ve(16756832).multiplyScalar(2.2)}),0,.24,0);else{let i=n==="swan";t(new Ie(.5,12,8),wi(i?16777215:9071176),0,.14,0).scale.set(.5,.42,.85),t(new Ie(.13,10,8),wi(i?16777215:2779722),0,.42,-.34),t(new Bt(.05,.16,6).rotateX(-Math.PI/2),wi(15245360),0,.4,-.5),t(new Ge(.05,.07,.3,6),wi(i?16777215:9071176),0,.28,-.3)}return e}var mM={lagoon:"boat",sakura:"lantern",bamboo:"lantern",autumn:"duck",meadow:"swan"},Bl=[],Ol=[],gs=null;function gM(n,e){let t=new Ie(5,16,12).scale(1,1.18,1),i=t.attributes.position,s=new Float32Array(i.count*3),r=new ve(n),o=new ve(e);for(let h=0;h<i.count;h++){let u=Math.floor((Math.atan2(i.getZ(h),i.getX(h))+Math.PI)/(Math.PI/4)),d=u%2?r:o;s[h*3]=d.r,s[h*3+1]=d.g,s[h*3+2]=d.b}t.setAttribute("color",new Et(s,3));let a=new ke;a.add(new pe(t,new Oe({vertexColors:!0,roughness:.7})));let l=new pe(new dt(1.3,1.1,1.3),wi(8018488));l.position.y=-8,a.add(l);let c=new pe(new Ge(1.6,.7,2.2,10,1,!0),wi(8018488));return c.position.y=-6.3,a.add(c),a}function xM(){let n=new Ie(70,40,24),e=n.attributes.position,t=new Float32Array(e.count*3);for(let i=0;i<e.count;i++){let s=e.getX(i)/70,r=e.getY(i)/70,o=e.getZ(i)/70,a=ft(s*2.2+5+o,r*2.2+3-o*.7,4),l=ft(s*3+20,r*4+o*3+9,3),c=.1,h=.3,u=.7;a>.55&&(c=.2,h=.45,u=.2),(Math.abs(r)>.86||l>.6)&&(c=h=u=.9),t[i*3]=c,t[i*3+1]=h,t[i*3+2]=u}return n.setAttribute("color",new Et(t,3)),new pe(n,new mt({vertexColors:!0,fog:!1}))}function yM(){for(let t of[...Bl,...Ol])Mt.remove(t);gs&&(Mt.remove(gs),gs=null),Bl=[],Ol=[];let n=se.birds;_0.forEach((t,i)=>{t.visible=!!n&&i<n.n,n&&t.scale.setScalar(n.size)}),n&&zl.color.set(n.color),v0.forEach((t,i)=>{t.visible=!!se.flies,t.userData.placed=!1,se.flies&&t.userData.mat.color.set(se.flies[i%se.flies.length])});let e=mM[se.id];if(e)for(let t=0;t<6;t++){let i=pM(e);i.visible=!1,i.userData={placed:!1,dir:Math.random()*6.28,spd:e==="boat"?1.2:e==="lantern"?.15:.5,ph:t*1.3,x:0,z:0},Mt.add(i),Bl.push(i)}if(se.id==="meadow"){let t=[[15224890,16773336],[3836632,16769136],[15769648,16777215]];for(let i=0;i<3;i++){let s=gM(...t[i]),r=Math.random()*6.28,o=Ke(90,190);s.position.set(E.x+Math.cos(r)*o,55+i*9,E.z+Math.sin(r)*o),Mt.add(s),Ol.push(s)}}se.id==="moon"&&(gs=xM(),Mt.add(gs))}var _M=new L(-.45,.42,-.78).normalize();function vM(n){let e=se.birds;if(e){let t=E.x+Math.sin(Te*.045)*70,i=E.z+Math.cos(Te*.032)*70,s=Math.max(cn(t,i),E.y)+24;for(let r=0;r<e.n;r++){let o=_0[r],a=o.userData,l,c,h,u,d,f=.6,g=8;if(e.form==="v"){let m=Te*.05,p=Math.ceil(r/2),_=r%2?1:-1;u=-Math.sin(m),d=Math.cos(m),l=E.x+Math.cos(m)*120-u*p*2.4+d*_*p*1.9,h=E.z+Math.sin(m)*120-d*p*2.4-u*_*p*1.9,c=Math.max(E.y,0)+34+Math.sin(Te*.7+r)*.4,g=5}else{let m=e.form==="soar",p=m?20+r*7:a.rad,_=Te*(m?.16:.45)+a.ph;u=-Math.sin(_),d=Math.cos(_),l=t+Math.cos(_)*p,h=i+Math.sin(_)*p,c=s+a.hgt+(m?8:0)+Math.sin(Te*.8+a.ph)*.8,m&&(f=.12,g=2)}o.position.set(l,c,h),o.rotation.y=Math.atan2(-u,-d);let y=Math.sin(Te*g+a.ph)*f;a.l.rotation.z=y,a.r.rotation.z=-y}}if(se.flies)for(let t of v0){let i=t.userData;if(!i.placed||Math.hypot(i.x-E.x,i.z-E.z)>24){let a=E.heading+Ke(-1.6,1.6),l=Ke(7,18);i.x=E.x-Math.sin(a)*l,i.z=E.z-Math.cos(a)*l,i.placed=!0}let s=Te*.4+i.ph+Math.sin(Te*.9+i.ph)*1.2;i.x+=Math.cos(s)*.9*n,i.z+=Math.sin(s)*.9*n;let r=cn(i.x,i.z);t.position.set(i.x,r+.9+Math.sin(Te*1.3+i.ph)*.45,i.z),t.rotation.y=-s+Math.PI/2;let o=.2+Math.abs(Math.sin(Te*11+i.ph))*1.1;i.l.rotation.z=o,i.r.rotation.z=-o}for(let t of Bl){let i=t.userData;if(!i.placed||Math.hypot(i.x-E.x,i.z-E.z)>190||ht(i.x,i.z)>-.25){let s=Math.random()*6.28,r=Ke(40,150),o=E.x+Math.cos(s)*r,a=E.z+Math.sin(s)*r;if(i.placed=ht(o,a)<-.6,i.placed?(i.x=o,i.z=a):i.dir+=2,t.visible=i.placed,!i.placed)continue}i.dir+=Math.sin(Te*.2+i.ph)*.1*n,i.x+=-Math.sin(i.dir)*i.spd*n,i.z+=-Math.cos(i.dir)*i.spd*n,t.position.set(i.x,Math.sin(Te*1.2+i.ph)*.04,i.z),t.rotation.y=i.dir,t.rotation.z=Math.sin(Te*.9+i.ph)*.04}Ol.forEach((t,i)=>{if(t.position.x+=1.1*n,t.position.y+=Math.sin(Te*.3+i*2)*.15*n,Math.hypot(t.position.x-E.x,t.position.z-E.z)>240){let s=Math.PI+Ke(-1,1),r=Ke(150,210);t.position.x=E.x+Math.cos(s)*r,t.position.z=E.z+Math.sin(s)*r}}),gs&&(gs.position.copy(yn.position).addScaledVector(_M,850),gs.rotation.y=Te*.01)}var Rl=new L,Cl=new L,Kn=new L,Pl=new L,ks=0,xu=!1,Rp=0;function MM(n){if(Ne.state==="menu"||Ne.state==="loading"){let s=Te*.05;Pl.set(E.x,E.y+1.6,E.z),Kn.set(E.x+Math.sin(s)*9,E.y+3.2,E.z+Math.cos(s)*9),Kn.y=Math.max(Kn.y,cn(Kn.x,Kn.z)+1.5)}else{Math.abs(E.speed)>1&&Te-d0>1.5&&(Ws=We(Ws,0,Jt(1.2,n))),ks=We(ks,E.heading,Jt(5.5,n)),ks=E.heading+Hl(ks-E.heading);let s=ks+Ws,r=pu+Math.abs(E.speed)*.12,o=Tt(E.speed*.09,0,2.6);Pl.set(E.x+vt.x*o,E.y+1.9,E.z+vt.z*o),Kn.set(E.x+Math.sin(s)*r*Math.cos(Wr),E.y+1.9+Math.sin(Wr)*r,E.z+Math.cos(s)*r*Math.cos(Wr)),Kn.y=Math.max(Kn.y,cn(Kn.x,Kn.z)+1.2)}xu||(Rl.copy(Kn),Cl.copy(Pl),xu=!0),Rl.lerp(Kn,Jt(Ne.state==="play"?8:1.5,n)),Cl.lerp(Pl,Jt(10,n)),yn.position.copy(Rl),yn.lookAt(Cl),xn.fade.value=Ne.state==="play"?Math.max(0,Rl.distanceTo(Cl)-2.2):0;let e=Math.min(92,58+Math.abs(E.speed)*.35+(Kt.boost>0?8:0)+(E.turbo?10:0));if(Math.abs(yn.fov-e)>.05&&(yn.fov+=(e-yn.fov)*Jt(3,n),yn.updateProjectionMatrix()),ko){let s=Ne.state==="play"?E.turbo?1:Kt.boost>0&&Math.abs(E.speed)>12?.4:0:0;ko.uniforms.uSpeed.value=We(ko.uniforms.uSpeed.value,s,Jt(4,n))}wu.position.copy(yn.position);let t=Yt.uSun.value;if(jn.position.set(E.x+t.x*80,E.y+Math.max(t.y,.35)*80,E.z+t.z*80),jn.target.position.set(E.x,E.y,E.z),Su.position.set(E.x+1.5,E.y+3,E.z+1),jl.position.set(Math.round(E.x/kr)*kr,0,Math.round(E.z/kr)*kr),se.water!=="ice"&&(k.water.normalMap.offset.set(Te*.004,Te*.0025),k.mirror.normalMap.offset.copy(k.water.normalMap.offset)),xn.player.value.set(E.x,E.z),Ne.state==="play"){if(++Rp%6===0||!$t?$t=Q1():$t.d=Math.hypot($t.x-E.x,$t.z-E.z),$t){let s=Math.atan2(-($t.x-E.x),-($t.z-E.z));Me("arrow").style.transform=`rotate(${-Hl(s-(ks+Ws))}rad)`}X1($t),Rp%3===0&&Y1(ks+Ws)}let i=Ne.state==="play"?y0($t):0;SM(i?$t:null,i),RM(i>1?$t:null)}var Or=Me("waypoint"),bM=Me("wpIcon"),EM=Me("wpDist"),wM=Me("wpArrow");function SM(n,e){if(!n||e<2&&n.d<30||document.body.classList.contains("photo")){Or.style.display="none";return}Or.style.display="",xs.set(n.x,n.y+1.5,n.z).project(yn);let t=innerWidth,i=innerHeight,s=t/2,r=i/2,o=(xs.x*.5+.5)*t,a=(-xs.y*.5+.5)*i,l=xs.z>1,c=44,h=Ys?120:110,u=Ys?260:120,d=l||o<c||o>t-c||a<h||a>i-u,f=0;if(d){let y=o-s,m=a-r;l&&(y=-y,m=Math.abs(m)+i);let p=(s-c)/Math.max(1e-6,Math.abs(y)),_=(m<0?r-h:i-u-r)/Math.max(1e-6,Math.abs(m)),x=Math.min(p,_);o=s+y*x,a=r+m*x,f=Math.atan2(m,y)}Or.style.transform=`translate(${o}px, ${a}px) translate(-50%, -50%)`,Or.classList.toggle("edge",d),Or.classList.toggle("soft",e<2),Or.style.setProperty("--c",n.color),wM.style.transform=`rotate(${f}rad) translate(26px, 0)`;let g=Jl[n.kind];bM.textContent=g.icon,EM.textContent=e<2?`${Math.round(n.d/5)*5} m`:`${n.label||g.label} \xB7 ${Math.round(n.d)} m`}var TM=(()=>{let[n,e]=Qn(128);e.lineJoin="round",e.lineCap="round";let t=()=>{e.beginPath(),e.moveTo(22,92),e.lineTo(64,40),e.lineTo(106,92)};e.strokeStyle="rgba(10,12,30,0.75)",e.lineWidth=30,t(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=18,t(),e.stroke();let i=new Yn(n);return i.colorSpace=It,i})(),AM=new qn(1.5,1.5).rotateX(-Math.PI/2),iu=Array.from({length:8},()=>{let n=new pe(AM,new mt({map:TM,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,fog:!0}));return n.visible=!1,n.renderOrder=2,Mt.add(n),n});function RM(n){if(!n||n.d<9||document.body.classList.contains("photo")){for(let s of iu)s.visible=!1;return}let e=(n.x-E.x)/n.d,t=(n.z-E.z)/n.d,i=Math.atan2(-e,-t);Pp.set(n.color),iu.forEach((s,r)=>{let o=6+r*4.5;if(o>n.d-4){s.visible=!1;return}let a=E.x+e*o,l=E.z+t*o;s.position.set(a,cn(a,l)+.12,l),s.rotation.y=i,s.visible=!0,s.material.color.copy(Pp);let c=.5+.5*Math.sin(Te*6-r*.8);s.material.opacity=(.18+c*.3)*(1-r/iu.length*.55),s.scale.setScalar(.85+c*.25)})}var Cp=new ve,Pp=new ve;Me("btnPlay").addEventListener("click",c0);Me("btnPause").addEventListener("click",tc);Me("btnResume").addEventListener("click",h0);Me("btnMenu").addEventListener("click",$1);Me("btnMount").addEventListener("click",u0);Me("btnNav").addEventListener("click",x0);Me("btnCodex").addEventListener("click",()=>ec("play"));Me("btnCodexMenu").addEventListener("click",()=>ec("menu"));Me("btnCodexPause").addEventListener("click",()=>ec("pause"));Me("btnCodexClose").addEventListener("click",l0);Me("btnMusic").addEventListener("click",()=>{nt.init(),Me("btnMusic").classList.toggle("off",!nt.toggleMusic())});Me("card").addEventListener("click",()=>Me("card").classList.remove("show"));for(let n of document.querySelectorAll("[data-q]"))n.addEventListener("click",()=>{n.dataset.q!==Wo&&(bu(),_s.set("bbw_quality",n.dataset.q),location.reload())});for(let n of document.querySelectorAll("[data-mount]"))n.addEventListener("click",()=>{E.mount=n.dataset.mount,j.mount=E.mount,vn(),Ql(),jo()});for(let n of document.querySelectorAll("[data-avatar]"))n.addEventListener("click",()=>{H1(n.dataset.avatar),jo()});Ql();Pu(se,!1);Ci.position.set(E.x,E.y,E.z);Ci.rotation.set(0,E.heading,0);jo();Ne.state="menu";var CM=new Ir,ms=1,Ll=16,Il=3,su=6,ru=-99,yu=!0,Hr=!1,Lp=0;function _u(){let n=Math.max(.6,Up*ms);Mn.setPixelRatio(n),Mn.setSize(innerWidth,innerHeight),Ki&&(Ki.setPixelRatio(n),Ki.setSize(innerWidth,innerHeight)),yu=!0}function PM(n){n>.1||Ne.state!=="play"||(Ll+=(n*1e3-Ll)*.04,Il-=n,!(Il>0)&&(Ll>21&&(ms>.6||!Hr)?(Te-ru<12&&(su=Math.min(90,su*2)),ru=Te,Il=2,Hr?(ms=Math.max(.6,ms*.85),_u()):Hr=!0):Ll<17.6&&(ms<1||Hr)&&Te-ru>su&&(Il=3,ms<1?(ms=Math.min(1,ms*1.12),_u()):Hr=!1)))}function M0(){let n=CM.getDelta(),e=Math.min(n,1/20);LM(e),Lp++,Mn.shadowMap.autoUpdate=!Hr||Lp%2===0,(Ne.state!=="paused"||yu)&&(IM(),yu=!1),PM(n),requestAnimationFrame(M0)}function LM(n){if(Ne.state!=="paused"){if(Te+=n,Yt.uTime.value=Te,xn.time.value=Te,Xr.t>0&&(Xr.t-=n),Ne.state==="play"&&!Ne.warping){tM(n);for(let e in Kt)Kt[e]>0&&(Kt[e]=Math.max(0,Kt[e]-n),Kt[e]===0&&fi(`${zn[e].icon} ${zn[e].name} faded`,1800))}else nt.wind(0),nt.turbo(0);N1(n),iM(n),dM(n),Zt.update(n),F1(n),z1(n),Zp(E.x,E.z,2,4)}MM(Ne.state==="paused"?0:n)}function IM(){Ki?Ki.render():Mn.render(Mt,yn)}Mn.compile(Mt,yn);requestAnimationFrame(()=>{M0(),Ne.state==="menu"&&Qi("menu"),Me("loading").classList.add("fade"),setTimeout(()=>{Me("loading").style.display="none"},1100)});
