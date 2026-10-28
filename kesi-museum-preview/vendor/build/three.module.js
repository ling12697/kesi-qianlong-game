Y™Áäx-ÆÈ‹j◊ù¢Îi∫⁄+äßj[hëÈ‹¢ÈÌ„6€ŒÙ„}˜o+^≤â¢∂◊ù/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const REVISION = '170';

const MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 };
const TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };
const CullFaceNone = 0;
const CullFaceBack = 1;
const CullFaceFront = 2;
const CullFaceFrontBack = 3;
const BasicShadowMap = 0;
const PCFShadowMap = 1;
const PCFSoftShadowMap = 2;
const VSMShadowMap = 3;
const FrontSide = 0;
const BackSide = 1;
const DoubleSide = 2;
const NoBlending = 0;
const NormalBlending = 1;
const AdditiveBlending = 2;
const SubtractiveBlending = 3;
const MultiplyBlending = 4;
const CustomBlending = 5;
const AddEquation = 100;
const SubtractEquation = 101;
const ReverseSubtractEquation = 102;
const MinEquation = 103;
const MaxEquation = 104;
const ZeroFactor = 200;
const OneFactor = 201;
const SrcColorFactor = 202;
const OneMinusSrcColorFactor = 203;
const SrcAlphaFactor = 204;
const OneMinusSrcAlphaFactor = 205;
const DstAlphaFactor = 206;
const OneMinusDstAlphaFactor = 207;
const DstColorFactor = 208;
const OneMinusDstColorFactor = 209;
const SrcAlphaSaturateFactor = 210;
const ConstantColorFactor = 211;
const OneMinusConstantColorFactor = 212;
const ConstantAlphaFactor = 213;
const OneMinusConstantAlphaFactor = 214;
const NeverDepth = 0;
const AlwaysDepth = 1;
const LessDepth = 2;
const LessEqualDepth = 3;
const EqualDepth = 4;
const GreaterEqualDepth = 5;
const GreaterDepth = 6;
const NotEqualDepth = 7;
const MultiplyOperation = 0;
const MixOperation = 1;
const AddOperation = 2;
const NoToneMapping = 0;
const LinearToneMapping = 1;
const ReinhardToneMapping = 2;
const CineonToneMapping = 3;
const ACESFilmicToneMapping = 4;
const CustomToneMapping = 5;
const AgXToneMapping = 6;
const NeutralToneMapping = 7;
const AttachedBindMode = 'attached';
const DetachedBindMode = 'detached';

const UVMapping = 300;
const CubeReflectionMapping = 301;
const CubeRefractionMapping = 302;
const EquirectangularReflectionMapping = 303;
const EquirectangularRefractionMapping = 304;
const CubeUVReflectionMapping = 306;
const RepeatWrapping = 1000;
const ClampToEdgeWrapping = 1001;
const MirroredRepeatWrapping = 1002;
const NearestFilter = 1003;
const NearestMipmapNearestFilter = 1004;
const NearestMipMapNearestFilter = 1004;
const NearestMipmapLinearFilter = 1005;
const NearestMipMapLinearFilter = 1005;
const LinearFilter = 1006;
const LinearMipmapNearestFilter = 1007;
const LinearMipMapNearestFilter = 1007;
const LinearMipmapLinearFilter = 1008;
const LinearMipMapLinearFilter = 1008;
const UnsignedByteType = 1009;
const ByteType = 1010;
const ShortType = 1011;
const UnsignedShortType = 1012;
const IntType = 1013;
const UnsignedIntType = 1014;
const FloatType = 1015;
const HalfFloatType = 1016;
const UnsignedShort4444Type = 1017;
const UnsignedShort5551Type = 1018;
const UnsignedInt248Type = 1020;
const UnsignedInt5999Type = 35902;
const AlphaFormat = 1021;
const RGBFormat = 1022;
const RGBAFormat = 1023;
const LuminanceFormat = 1024;
const LuminanceAlphaFormat = 1025;
const DepthFormat = 1026;
const DepthStencilFormat = 1027;
const RedFormat = 1028;
const RedIntegerFormat = 1029;
const RGFormat = 1030;
const RGIntegerFormat = 1031;
const RGBIntegerFormat = 1032;
const RGBAIntegerFormat = 1033;

const RGB_S3TC_DXT1_Format = 33776;
const RGBA_S3TC_DXT1_Format = 33777;
const RGBA_S3TC_DXT3_Format = 33778;
const RGBA_S3TC_DXT5_Format = 33779;
const RGB_PVRTC_4BPPV1_Format = 35840;
const RGB_PVRTC_2BPPV1_Format = 35841;
const RGBA_PVRTC_4BPPV1_Format = 35842;
const RGBA_PVRTC_2BPPV1_Format = 35843;
const RGB_ETC1_Format = 36196;
const RGB_ETC2_Format = 37492;
const RGBA_ETC2_EAC_Format = 37496;
const RGBA_ASTC_4x4_Format = 37808;
const RGBA_ASTC_5x4_Format = 37809;
const RGBA_ASTC_5x5_Format = 37810;
const RGBA_ASTC_6x5_Format = 37811;
const RGBA_ASTC_6x6_Format = 37812;
const RGBA_ASTC_8x5_Format = 37813;
const RGBA_ASTC_8x6_Format = 37814;
const RGBA_ASTC_8x8_Format = 37815;
const RGBA_ASTC_10x5_Format = 37816;
const RGBA_ASTC_10x6_Format = 37817;
const RGBA_ASTC_10x8_Format = 37818;
const RGBA_ASTC_10x10_Format = 37819;
const RGBA_ASTC_12x10_Format = 37820;
const RGBA_ASTC_12x12_Format = 37821;
const RGBA_BPTC_Format = 36492;
const RGB_BPTC_SIGNED_Format = 36494;
const RGB_BPTC_UNSIGNED_Format = 36495;
const RED_RGTC1_Format = 36283;
const SIGNED_RED_RGTC1_Format = 36284;
const RED_GREEN_RGTC2_Format = 36285;
const SIGNED_RED_GREEN_RGTC2_Format = 36286;
const LoopOnce = 2200;
const LoopRepeat = 2201;
const LoopPingPong = 2202;
const InterpolateDiscrete = 2300;
const InterpolateLinear = 2301;
const InterpolateSmooth = 2302;
const ZeroCurvatureEnding = 2400;
const ZeroSlopeEnding = 2401;
const WrapAroundEnding = 2402;
const NormalAnimationBlendMode = 2500;
const AdditiveAnimationBlendMode = 2501;
const TrianglesDrawMode = 0;
const TriangleStripDrawMode = 1;
const TriangleFanDrawMode = 2;
const BasicDepthPacking = 3200;
const RGBADepthPacking = 3201;
const RGBDepthPacking = 3202;
const RGDepthPacking = 3203;
const TangentSpaceNormalMap = 0;
const ObjectSpaceNormalMap = 1;

// Color space string identifiers, matching CSS Color Module Level 4 and WebGPU names where available.
const NoColorSpace = '';
const SRGBColorSpace = 'srgb';
const LinearSRGBColorSpace = 'srgb-linear';

const LinearTransfer = 'linear';
const SRGBTransfer = 'srgb';

const ZeroStencilOp = 0;
const KeepStencilOp = 7680;
const ReplaceStencilOp = 7681;
const IncrementStencilOp = 7682;
const DecrementStencilOp = 7683;
const IncrementWrapStencilOp = 34055;
const DecrementWrapStencilOp = 34056;
const InvertStencilOp = 5386;

const NeverStencilFunc = 512;
const LessStencilFunc = 513;
const EqualStencilFunc = 514;
const LessEqualStencilFunc = 515;
const GreaterStencilFunc = 516;
const NotEqualStencilFunc = 517;
const GreaterEqualStencilFunc = 518;
const AlwaysStencilFunc = 519;

const NeverCompare = 512;
const LessCompare = 513;
const EqualCompare = 514;
const LessEqualCompare = 515;
const GreaterCompare = 516;
const NotEqualCompare = 517;
const GreaterEqualCompare = 518;
const AlwaysCompare = 519;

const StaticDrawUsage = 35044;
const DynamicDrawUsage = 35048;
const StreamDrawUsage = 35040;
const StaticReadUsage = 35045;
const DynamicReadUsage = 35049;
const StreamReadUsage = 35041;
const StaticCopyUsage = 35046;
const DynamicCopyUsage = 35050;
const StreamCopyUsage = 35042;

const GLSL1 = '100';
const GLSL3 = '300 es';

const WebGLCoordinateSystem = 2000;
const WebGPUCoordinateSystem = 2001;

/**
 * https://github.com/mrdoob/eventdispatcher.js/
 */

class EventDispatcher {

	addEventListener( type, listener ) {

		if ( this._listeners === undefined ) this._listeners = {};

		const listeners = this._listeners;

		if ( listeners[ type ] === undefined ) {

			listeners[ type ] = [];

		}

		if ( listeners[ type ].indexOf( listener ) === - 1 ) {

			listeners[ type ].push( listener );

		}

	}

	hasEventListener( type, listener ) {

		if ( this._listeners === undefined ) return false;

		const listeners = this._listeners;

		return listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1;

	}

	removeEventListener( type, listener ) {

		if ( this._listeners === undefined ) return;

		const listeners = this._listeners;
		const listenerArray = listeners[ type ];

		if ( listenerArray !== undefined ) {

			const index = listenerArray.indexOf( listener );

			if ( index !== - 1 ) {

				listenerArray.splice( index, 1 );

			}

		}

	}

	dispatchEvent( event ) {

		if ( this._listeners === undefined ) return;

		const listeners = this._listeners;
		const listenerArray = listeners[ event.type ];

		if ( listenerArray !== undefined ) {

			event.target = this;

			// Make a copy, in case listeners are removed while iterating.
			const array = listenerArray.slice( 0 );

			for ( let i = 0, l = array.length; i < l; i ++ ) {

				array[ i ].call( this, event );

			}

			event.target = null;

		}

	}

}

const _lut = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff' ];

let _seed = 1234567;


const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
function generateUUID() {

	const d0 = Math.random() * 0xffffffff | 0;
	const d1 = Math.random() * 0xffffffff | 0;
	const d2 = Math.random() * 0xffffffff | 0;
	const d3 = Math.random() * 0xffffffff | 0;
	const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
			_lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
			_lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
			_lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];

	// .toLowerCase() here flattens concatenated strings to save heap memory space.
	return uuid.toLowerCase();

}

function clamp( value, min, max ) {

	return Math.max( min, Math.min( max, value ) );

}

// compute euclidean modulo of m % n
// https://en.wikipedia.org/wiki/Modulo_operation
function euclideanModulo( n, m ) {

	return ( ( n % m ) + m ) % m;

}

// Linear mapping from range <a1, a2> to range <b1, b2>
function mapLinear( x, a1, a2, b1, b2 ) {

	return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );

}

// https://www.gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/
function inverseLerp( x, y, value ) {

	if ( x !== y ) {

		return ( value - x ) / ( y - x );

	} else {

		return 0;

	}

}

// https://en.wikipedia.org/wiki/Linear_interpolation
function lerp( x, y, t ) {

	return ( 1 - t ) * x + t * y;

}

// http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/
function damp( x, y, lambda, dt ) {

	return lerp( x, y, 1 - Math.exp( - lambda * dt ) );

}

// https://www.desmos.com/calculator/vcsjnyz7x4
function pingpong( x, length = 1 ) {

	return length - Math.abs( euclideanModulo( x, length * 2 ) - length );

}

// http://en.wikipedia.org/wiki/Smoothstep
function smoothstep( x, min, max ) {

	if ( x <= min ) return 0;
	if ( x >= max ) return 1;

	x = ( x - min ) / ( max - min );

	return x * x * ( 3 - 2 * x );

}

function smootherstep( x, min, max ) {

	if ( x <= min ) return 0;
	if ( x >= max ) return 1;

	x = ( x - min ) / ( max - min );

	return x * x * x * ( x * ( x * 6 - 15 ) + 10 );

}

// Random integer from <low, high> interval
function randInt( low, high ) {

	return low + Math.floor( Math.random() * ( high - low + 1 ) );

}

// Random float from <low, high> interval
function randFloat( low, high ) {

	return low + Math.random() * ( high - low );

}

// Random float from <-range/2, range/2> interval
function randFloatSpread( range ) {

	return range * ( 0.5 - Math.random() );

}

// Deterministic pseudo-random float in the interval [ 0, 1 ]
function seededRandom( s ) {

	if ( s !== undefined ) _seed = s;

	// Mulberry32 generator

	let t = _seed += 0x6D2B79F5;

	t = Math.imul( t ^ t >>> 15, t | 1 );

	t ^= t + Math.imul( t ^ t >>> 7, t | 61 );

	return ( ( t ^ t >>> 14 ) >>> 0 ) / 4294967296;

}

function degToRad( degrees ) {

	return degrees * DEG2RAD;

}

function radToDeg( radians ) {

	return radians * RAD2DEG;

}

function isPowerOfTwo( value ) {

	return ( value & ( value - 1 ) ) === 0 && value !== 0;

}

function ceilPowerOfTwo( value ) {

	return Math.pow( 2, Math.ceil( Math.log( value ) / Math.LN2 ) );

}

function floorPowerOfTwo( value ) {

	return Math.pow( 2, Math.floor( Math.log( value ) / Math.LN2 ) );

}

function setQuaternionFromProperEuler( q, a, b, c, order ) {

	// Intrinsic Proper Euler Angles - see https://en.wikipedia.org/wiki/Euler_angles

	// rotations are applied to the axes in the order specified by 'order'
	// rotation by angle 'a' is applied first, then by angle 'b', then by angle 'c'
	// angles are in radians

	const cos = Math.cos;
	const sin = Math.sin;

	const c2 = cos( b / 2 );
	const s2 = sin( b / 2 );

	const c13 = cos( ( a + c ) / 2 );
	const s13 = sin( ( a + c ) / 2 );

	const c1_3 = cos( ( a - c ) / 2 );
	const s1_3 = sin( ( a - c ) / 2 );

	const c3_1 = cos( ( c - a ) / 2 );
	const s3_1 = sin( ( c - a ) / 2 );

	switch ( order ) {

		case 'XYX':
			q.set( c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13 );
			break;

		case 'YZY':
			q.set( s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13 );
			break;

		case 'ZXZ':
			q.set( s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13 );
			break;

		case 'XZX':
			q.set( c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13 );
			break;

		case 'YXY':
			q.set( s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13 );
			break;

		case 'ZYZ':
			q.set( s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13 );
			break;

		default:
			console.warn( 'THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + order );

	}

}

function denormalize( value, array ) {

	switch ( array.constructor ) {

		case Float32Array:

			return value;

		case Uint32Array:

			return value / 4294967295.0;

		case Uint16Array:

			return value / 65535.0;

		case Uint8Array:

			return value / 255.0;

		case Int32Array:

			return Math.max( value / 2147483647.0, - 1.0 );

		case Int16Array:

			return Math.max( value / 32767.0, - 1.0 );

		case Int8Array:

			return Math.max( value / 127.0, - 1.0 );

		default:

			throw new Error( 'Invalid component type.' );

	}

}

function normalize( value, array ) {

	switch ( array.constructor ) {

		case Float32Array:

			return value;

		case Uint32Array:

			return Math.round( value * 4294967295.0 );

		case Uint16Array:

			return Math.round( value * 65535.0 );

		case Uint8Array:

			return Math.round( value * 255.0 );

		case Int32Array:

			return Math.round( value * 2147483647.0 );

		case Int16Array:

			return Math.round( value * 32767.0 );

		case Int8Array:

			return Math.round( value * 127.0 );

		default:

			throw new Error( 'Invalid component type.' );

	}

}

const MathUtils = {
	DEG2RAD: DEG2RAD,
	RAD2DEG: RAD2DEG,
	generateUUID: generateUUID,
	clamp: clamp,
	euclideanModulo: euclideanModulo,
	mapLinear: mapLinear,
	inverseLerp: inverseLerp,
	lerp: lerp,
	damp: damp,
	pingpong: pingpong,
	smoothstep: smoothstep,
	smootherstep: smootherstep,
	randInt: randInt,
	randFloat: randFloat,
	randFloatSpread: randFloatSpread,
	seededRandom: seededRandom,
	degToRad: degToRad,
	radToDeg: radToDeg,
	isPowerOfTwo: isPowerOfTwo,
	ceilPowerOfTwo: ceilPowerOfTwo,
	floorPowerOfTwo: floorPowerOfTwo,
	setQuaternionFromProperEuler: setQuaternionFromProperEuler,
	normalize: normalize,
	denormalize: denormalize
};

class Vector2 {

	constructor( x = 0, y = 0 ) {

		Vector2.prototype.isVector2 = true;

		this.x = x;
		this.y = y;

	}

	get width() {

		return this.x;

	}

	set width( value ) {

		this.x = value;

	}

	get height() {

		return this.y;

	}

	set height( value ) {

		this.y = value;

	}

	set( x, y ) {

		this.x = x;
		this.y = y;

		return this;

	}

	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;

		return this;

	}

	setX( x ) {

		this.x = x;

		return this;

	}

	setY( y ) {

		this.y = y;

		return this;

	}

	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	clone() {

		return new this.constructor( this.x, this.y );

	}

	copy( v ) {

		this.x = v.x;
		this.y = v.y;

		return this;

	}

	add( v ) {

		this.x += v.x;
		this.y += v.y;

		return this;

	}

	addScalar( s ) {

		this.x += s;
		this.y += s;

		return this;

	}

	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;

		return this;

	}

	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;

		return this;

	}

	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;

		return this;

	}

	subScalar( s ) {

		this.x -= s;
		this.y -= s;

		return this;

	}

	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;

		return this;

	}

	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;

		return this;

	}

	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;

		return this;

	}

	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;

		return this;

	}

	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	applyMatrix3( m ) {

		const x = this.x, y = this.y;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ];
		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ];

		return this;

	}

	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );

		return this;

	}

	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );

		return this;

	}

	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );

		return this;

	}

	clampScalar( minVal, maxVal ) {

		this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
		this.y = Math.max( minVal, Math.min( maxVal, this.y ) );

		return this;

	}

	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	}

	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );

		return this;

	}

	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );

		return this;

	}

	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );

		return this;

	}

	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );

		return this;

	}

	negate() {

		this.x = - this.x;
		this.y = - this.y;

		return this;

	}

	dot( v ) {

		return this.x * v.x + this.y * v.y;

	}

	cross( v ) {

		return this.x * v.y - this.y * v.x;

	}

	lengthSq() {

		return this.x * this.x + this.y * this.y;

	}

	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y );

	}

	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y );

	}

	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	angle() {

		// computes the angle in radians with respect to the positive x-axis

		const angle = Math.atan2( - this.y, - this.x ) + Math.PI;

		return angle;

	}

	angleTo( v ) {

		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

		if ( denominator === 0 ) return Math.PI / 2;

		const theta = this.dot( v ) / denominator;

		// clamp, to handle numerical problems

		return Math.acos( clamp( theta, - 1, 1 ) );

	}

	distanceTo( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	}

	distanceToSquared( v ) {

		const dx = this.x - v.x, dy = this.y - v.y;
		return dx * dx + dy * dy;

	}

	manhattanDistanceTo( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y );

	}

	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;

		return this;

	}

	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;

		return this;

	}

	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) );

	}

	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );

		return this;

	}

	rotateAround( center, angle ) {

		const c = Math.cos( angle ), s = Math.sin( angle );

		const x = this.x - center.x;
		const y = this.y - center.y;

		this.x = x * c - y * s + center.x;
		this.y = x * s + y * c + center.y;

		return this;

	}

	random() {

		this.x = Math.random();
		this.y = Math.random();

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;

	}

}

class Matrix3 {

	constructor( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

		Matrix3.prototype.isMatrix3 = true;

		this.elements = [

			1, 0, 0,
			0, 1, 0,
			0, 0, 1

		];

		if ( n11 !== undefined ) {

			this.set( n11, n12, n13, n21, n22, n23, n31, n32, n33 );

		}

	}

	set( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

		const te = this.elements;

		te[ 0 ] = n11; te[ 1 ] = n21; te[ 2 ] = n31;
		te[ 3 ] = n12; te[ 4 ] = n22; te[ 5 ] = n32;
		te[ 6 ] = n13; te[ 7 ] = n23; te[ 8 ] = n33;

		return this;

	}

	identity() {

		this.set(

			1, 0, 0,
			0, 1, 0,
			0, 0, 1

		);

		return this;

	}

	copy( m ) {

		const te = this.elements;
		const me = m.elements;

		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ];
		te[ 3 ] = me[ 3 ]; te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ];
		te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ]; te[ 8 ] = me[ 8 ];

		return this;

	}

	extractBasis( xAxis, yAxis, zAxis ) {

		xAxis.setFromMatrix3Column( this, 0 );
		yAxis.setFromMatrix3Column( this, 1 );
		zAxis.setFromMatrix3Column( this, 2 );

		return this;

	}

	setFromMatrix4( m ) {

		const me = m.elements;

		this.set(

			me[ 0 ], me[ 4 ], me[ 8 ],
			me[ 1 ], me[ 5 ], me[ 9 ],
			me[ 2 ], me[ 6 ], me[ 10 ]

		);

		return this;

	}

	multiply( m ) {

		return this.multiplyMatrices( this, m );

	}

	premultiply( m ) {

		return this.multiplyMatrices( m, this );

	}

	multiplyMatrices( a, b ) {

		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;

		const a11 = ae[ 0 ], a12 = ae[ 3 ], a13 = ae[ 6 ];
		const a21 = ae[ 1 ], a22 = ae[ 4 ], a23 = ae[ 7 ];
		const a31 = ae[ 2 ], a32 = ae[ 5 ], a33 = ae[ 8 ];

		const b11 = be[ 0 ], b12 = be[ 3 ], b13 = be[ 6 ];
		const b21 = be[ 1 ], b22 = be[ 4 ], b23 = be[ 7 ];
		const b31 = be[ 2 ], b32 = be[ 5 ], b33 = be[ 8 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31;
		te[ 3 ] = a11 * b12 + a12 * b22 + a13 * b32;
		te[ 6 ] = a11 * b13 + a12 * b23 + a13 * b33;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31;
		te[ 4 ] = a21 * b12 + a22 * b22 + a23 * b32;
		te[ 7 ] = a21 * b13 + a22 * b23 + a23 * b33;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31;
		te[ 5 ] = a31 * b12 + a32 * b22 + a33 * b32;
		te[ 8 ] = a31 * b13 + a32 * b23 + a33 * b33;

		return this;

	}

	multiplyScalar( s ) {

		const te = this.elements;

		te[ 0 ] *= s; te[ 3 ] *= s; te[ 6 ] *= s;
		te[ 1 ] *= s; te[ 4 ] *= s; te[ 7 ] *= s;
		te[ 2 ] *= s; te[ 5 ] *= s; te[ 8 ] *= s;

		return this;

	}

	determinant() {

		const te = this.elements;

		const a = te[ 0 ], b = te[ 1 ], c = te[ 2 ],
			d = te[ 3 ], e = te[ 4 ], f = te[ 5 ],
			g = te[ 6 ], h = te[ 7 ], i = te[ 8 ];

		return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;

	}

	invert() {

		const te = this.elements,

			n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ],
			n12 = te[ 3 ], n22 = te[ 4 ], n32 = te[ 5 ],
			n13 = te[ 6 ], n23 = te[ 7 ], n33 = te[ 8 ],

			t11 = n33 * n22 - n32 * n23,
			t12 = n32 * n13 - n33 * n12,
			t13 = n23 * n12 - n22 * n13,

			det = n11 * t11 + n21 * t12 + n31 * t13;

		if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0 );

		const detInv = 1 / det;

		te[ 0 ] = t11 * detInv;
		te[ 1 ] = ( n31 * n23 - n33 * n21 ) * detInv;
		te[ 2 ] = ( n32 * n21 - n31 * n22 ) * detInv;

		te[ 3 ] = t12 * detInv;
		te[ 4 ] = ( n33 * n11 - n31 * n13 ) * detInv;
		te[ 5 ] = ( n31 * n12 - n32 * n11 ) * detInv;

		te[ 6 ] = t13 * detInv;
		te[ 7 ] = ( n21 * n13 - n23 * n11 ) * detInv;
		te[ 8 ] = ( n22 * n11 - n21 * n12 ) * detInv;

		return this;

	}

	transpose() {

		let tmp;
		const m = this.elements;

		tmp = m[ 1 ]; m[ 1 ] = m[ 3 ]; m[ 3 ] = tmp;
		tmp = m[ 2 ]; m[ 2 ] = m[ 6 ]; m[ 6 ] = tmp;
		tmp = m[ 5 ]; m[ 5 ] = m[ 7 ]; m[ 7 ] = tmp;

		return this;

	}

	getNormalMatrix( matrix4 ) {

		return this.setFromMatrix4( matrix4 ).invert().transpose();

	}

	transposeIntoArray( r ) {

		const m = this.elements;

		r[ 0 ] = m[ 0 ];
		r[ 1 ] = m[ 3 ];
		r[ 2 ] = m[ 6 ];
		r[ 3 ] = m[ 1 ];
		r[ 4 ] = m[ 4 ];
		r[ 5 ] = m[ 7 ];
		r[ 6 ] = m[ 2 ];
		r[ 7 ] = m[ 5 ];
		r[ 8 ] = m[ 8 ];

		return this;

	}

	setUvTransform( tx, ty, sx, sy, rotation, cx, cy ) {

		const c = Math.cos( rotation );
		const s = Math.sin( rotation );

		this.set(
			sx * c, sx * s, - sx * ( c * cx + s * cy ) + cx + tx,
			- sy * s, sy * c, - sy * ( - s * cx + c * cy ) + cy + ty,
			0, 0, 1
		);

		return this;

	}

	//

	scale( sx, sy ) {

		this.premultiply( _m3.makeScale( sx, sy ) );

		return this;

	}

	rotate( theta ) {

		this.premultiply( _m3.makeRotation( - theta ) );

		return this;

	}

	translate( tx, ty ) {

		this.premultiply( _m3.makeTranslation( tx, ty ) );

		return this;

	}

	// for 2D Transforms

	makeTranslation( x, y ) {

		if ( x.isVector2 ) {

			this.set(

				1, 0, x.x,
				0, 1, x.y,
				0, 0, 1

			);

		} else {

			this.set(

				1, 0, x,
				0, 1, y,
				0, 0, 1

			);

		}

		return this;

	}

	makeRotation( theta ) {

		// counterclockwise

		const c = Math.cos( theta );
		const s = Math.sin( theta );

		this.set(

			c, - s, 0,
			s, c, 0,
			0, 0, 1

		);

		return this;

	}

	makeScale( x, y ) {

		this.set(

			x, 0, 0,
			0, y, 0,
			0, 0, 1

		);

		return this;

	}

	//

	equals( matrix ) {

		const te = this.elements;
		const me = matrix.elements;

		for ( let i = 0; i < 9; i ++ ) {

			if ( te[ i ] !== me[ i ] ) return false;

		}

		return true;

	}

	fromArray( array, offset = 0 ) {

		for ( let i = 0; i < 9; i ++ ) {

			this.elements[ i ] = array[ i + offset ];

		}

		return this;

	}

	toArray( array = [], offset = 0 ) {

		const te = this.elements;

		array[ offset ] = te[ 0 ];
		array[ offset + 1 ] = te[ 1 ];
		array[ offset + 2 ] = te[ 2 ];

		array[ offset + 3 ] = te[ 3 ];
		array[ offset + 4 ] = te[ 4 ];
		array[ offset + 5 ] = te[ 5 ];

		array[ offset + 6 ] = te[ 6 ];
		array[ offset + 7 ] = te[ 7 ];
		array[ offset + 8 ] = te[ 8 ];

		return array;

	}

	clone() {

		return new this.constructor().fromArray( this.elements );

	}

}

const _m3 = /*@__PURE__*/ new Matrix3();

function arrayNeedsUint32( array ) {

	// assumes larger values usually on last

	for ( let i = array.length - 1; i >= 0; -- i ) {

		if ( array[ i ] >= 65535 ) return true; // account for PRIMITIVE_RESTART_FIXED_INDEX, #24565

	}

	return false;

}

const TYPED_ARRAYS = {
	Int8Array: Int8Array,
	Uint8Array: Uint8Array,
	Uint8ClampedArray: Uint8ClampedArray,
	Int16Array: Int16Array,
	Uint16Array: Uint16Array,
	Int32Array: Int32Array,
	Uint32Array: Uint32Array,
	Float32Array: Float32Array,
	Float64Array: Float64Array
};

function getTypedArray( type, buffer ) {

	return new TYPED_ARRAYS[ type ]( buffer );

}

function createElementNS( name ) {

	return document.createElementNS( 'http://www.w3.org/1999/xhtml', name );

}

function createCanvasElement() {

	const canvas = createElementNS( 'canvas' );
	canvas.style.display = 'block';
	return canvas;

}

const _cache = {};

function warnOnce( message ) {

	if ( message in _cache ) return;

	_cache[ message ] = true;

	console.warn( message );

}

function probeAsync( gl, sync, interval ) {

	return new Promise( function ( resolve, reject ) {

		function probe() {

			switch ( gl.clientWaitSync( sync, gl.SYNC_FLUSH_COMMANDS_BIT, 0 ) ) {

				case gl.WAIT_FAILED:
					reject();
					break;

				case gl.TIMEOUT_EXPIRED:
					setTimeout( probe, interval );
					break;

				default:
					resolve();

			}

		}

		setTimeout( probe, interval );

	} );

}

function toNormalizedProjectionMatrix( projectionMatrix ) {

	const m = projectionMatrix.elements;

	// Convert [-1, 1] to [0, 1] projection matrix
	m[ 2 ] = 0.5 * m[ 2 ] + 0.5 * m[ 3 ];
	m[ 6 ] = 0.5 * m[ 6 ] + 0.5 * m[ 7 ];
	m[ 10 ] = 0.5 * m[ 10 ] + 0.5 * m[ 11 ];
	m[ 14 ] = 0.5 * m[ 14 ] + 0.5 * m[ 15 ];

}

function toReversedProjectionMatrix( projectionMatrix ) {

	const m = projectionMatrix.elements;
	const isPerspectiveMatrix = m[ 11 ] === - 1;

	// Reverse [0, 1] projection matrix
	if ( isPerspectiveMatrix ) {

		m[ 10 ] = - m[ 10 ] - 1;
		m[ 14 ] = - m[ 14 ];

	} else {

		m[ 10 ] = - m[ 10 ];
		m[ 14 ] = - m[ 14 ] + 1;

	}

}

const ColorManagement = {

	enabled: true,

	workingColorSpace: LinearSRGBColorSpace,

	/**
	 * Implementations of supported color spaces.
	 *
	 * Required:
	 *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
	 *	- whitePoint: reference white [ x y ]
	 *	- transfer: transfer function (pre-defined)
	 *	- toXYZ: Matrix3 RGB to XYZ transform
	 *	- fromXYZ: Matrix3 XYZ to RGB transform
	 *	- luminanceCoefficients: RGB luminance coefficients
	 *
	 * Optional:
	 *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
	 *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
	 *
	 * Reference:
	 * - https://www.russellcottrell.com/photo/matrixCalculator.htm
	 */
	spaces: {},

	convert: function ( color, sourceColorSpace, targetColorSpace ) {

		if ( this.enabled === false || sourceColorSpace === targetColorSpace || ! sourceColorSpace || ! targetColorSpace ) {

			return color;

		}

		if ( this.spaces[ sourceColorSpace ].transfer === SRGBTransfer ) {

			color.r = SRGBToLinear( color.r );
			color.g = SRGBToLinear( color.g );
			color.b = SRGBToLinear( color.b );

		}

		if ( this.spaces[ sourceColorSpace ].primaries !== this.spaces[ targetColorSpace ].primaries ) {

			color.applyMatrix3( this.spaces[ sourceColorSpace ].toXYZ );
			color.applyMatrix3( this.spaces[ targetColorSpace ].fromXYZ );

		}

		if ( this.spaces[ targetColorSpace ].transfer === SRGBTransfer ) {

			color.r = LinearToSRGB( color.r );
			color.g = LinearToSRGB( color.g );
			color.b = LinearToSRGB( color.b );

		}

		return color;

	},

	fromWorkingColorSpace: function ( color, targetColorSpace ) {

		return this.convert( color, this.workingColorSpace, targetColorSpace );

	},

	toWorkingColorSpace: function ( color, sourceColorSpace ) {

		return this.convert( color, sourceColorSpace, this.workingColorSpace );

	},

	getPrimaries: function ( colorSpace ) {

		return this.spaces[ colorSpace ].primaries;

	},

	getTransfer: function ( colorSpace ) {

		if ( colorSpace === NoColorSpace ) return LinearTransfer;

		return this.spaces[ colorSpace ].transfer;

	},

	getLuminanceCoefficients: function ( target, colorSpace = this.workingColorSpace ) {

		return target.fromArray( this.spaces[ colorSpace ].luminanceCoefficients );

	},

	define: function ( colorSpaces ) {

		Object.assign( this.spaces, colorSpaces );

	},

	// Internal APIs

	_getMatrix: function ( targetMatrix, sourceColorSpace, targetColorSpace ) {

		return targetMatrix
			.copy( this.spaces[ sourceColorSpace ].toXYZ )
			.multiply( this.spaces[ targetColorSpace ].fromXYZ );

	},

	_getDrawingBufferColorSpace: function ( colorSpace ) {

		return this.spaces[ colorSpace ].outputColorSpaceConfig.drawingBufferColorSpace;

	},

	_getUnpackColorSpace: function ( colorSpace = this.workingColorSpace ) {

		return this.spaces[ colorSpace ].workingColorSpaceConfig.unpackColorSpace;

	}

};

function SRGBToLinear( c ) {

	return ( c < 0.04045 ) ? c * 0.0773993808 : Math.pow( c * 0.9478672986 + 0.0521327014, 2.4 );

}

function LinearToSRGB( c ) {

	return ( c < 0.0031308 ) ? c * 12.92 : 1.055 * ( Math.pow( c, 0.41666 ) ) - 0.055;

}

/******************************************************************************
 * sRGB definitions
 */

const REC709_PRIMARIES = [ 0.640, 0.330, 0.300, 0.600, 0.150, 0.060 ];
const REC709_LUMINANCE_COEFFICIENTS = [ 0.2126, 0.7152, 0.0722 ];
const D65 = [ 0.3127, 0.3290 ];

const LINEAR_REC709_TO_XYZ = /*@__PURE__*/ new Matrix3().set(
	0.4123908, 0.3575843, 0.1804808,
	0.2126390, 0.7151687, 0.0721923,
	0.0193308, 0.1191948, 0.9505322
);

const XYZ_TO_LINEAR_REC709 = /*@__PURE__*/ new Matrix3().set(
	3.2409699, - 1.5373832, - 0.4986108,
	- 0.9692436, 1.8759675, 0.0415551,
	0.0556301, - 0.2039770, 1.0569715
);

ColorManagement.define( {

	[ LinearSRGBColorSpace ]: {
		primaries: REC709_PRIMARIES,
		whitePoint: D65,
		transfer: LinearTransfer,
		toXYZ: LINEAR_REC709_TO_XYZ,
		fromXYZ: XYZ_TO_LINEAR_REC709,
		luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
		workingColorSpaceConfig: { unpackColorSpace: SRGBColorSpace },
		outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
	},

	[ SRGBColorSpace ]: {
		primaries: REC709_PRIMARIES,
		whitePoint: D65,
		transfer: SRGBTransfer,
		toXYZ: LINEAR_REC709_TO_XYZ,
		fromXYZ: XYZ_TO_LINEAR_REC709,
		luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
		outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
	},

} );

let _canvas;

class ImageUtils {

	static getDataURL( image ) {

		if ( /^data:/i.test( image.src ) ) {

			return image.src;

		}

		if ( typeof HTMLCanvasElement === 'undefined' ) {

			return image.src;

		}

		let canvas;

		if ( image instanceof HTMLCanvasElement ) {

			canvas = image;

		} else {

			if ( _canvas === undefined ) _canvas = createElementNS( 'canvas' );

			_canvas.width = image.width;
			_canvas.height = image.height;

			const context = _canvas.getContext( '2d' );

			if ( image instanceof ImageData ) {

				context.putImageData( image, 0, 0 );

			} else {

				context.drawImage( image, 0, 0, image.width, image.height );

			}

			canvas = _canvas;

		}

		if ( canvas.width > 2048 || canvas.height > 2048 ) {

			console.warn( 'THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons', image );

			return canvas.toDataURL( 'image/jpeg', 0.6 );

		} else {

			return canvas.toDataURL( 'image/png' );

		}

	}

	static sRGBToLinear( image ) {

		if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
			( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
			( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

			const canvas = createElementNS( 'canvas' );

			canvas.width = image.width;
			canvas.height = image.height;

			const context = canvas.getContext( '2d' );
			context.drawImage( image, 0, 0, image.width, image.height );

			const imageData = context.getImageData( 0, 0, image.width, image.height );
			const data = imageData.data;

			for ( let i = 0; i < data.length; i ++ ) {

				data[ i ] = SRGBToLinear( data[ i ] / 255 ) * 255;

			}

			context.putImageData( imageData, 0, 0 );

			return canvas;

		} else if ( image.data ) {

			const data = image.data.slice( 0 );

			for ( let i = 0; i < data.length; i ++ ) {

				if ( data instanceof Uint8Array || data instanceof Uint8ClampedArray ) {

					data[ i ] = Math.floor( SRGBToLinear( data[ i ] / 255 ) * 255 );

				} else {

					// assuming float

					data[ i ] = SRGBToLinear( data[ i ] );

				}

			}

			return {
				data: data,
				width: image.width,
				height: image.height
			};

		} else {

			console.warn( 'THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.' );
			return image;

		}

	}

}

let _sourceId = 0;

class Source {

	constructor( data = null ) {

		this.isSource = true;

		Object.defineProperty( this, 'id', { value: _sourceId ++ } );

		this.uuid = generateUUID();

		this.data = data;
		this.dataReady = true;

		this.version = 0;

	}

	set needsUpdate( value ) {

		if ( value === true ) this.version ++;

	}

	toJSON( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( ! isRootObject && meta.images[ this.uuid ] !== undefined ) {

			return meta.images[ this.uuid ];

		}

		const output = {
			uuid: this.uuid,
			url: ''
		};

		const data = this.data;

		if ( data !== null ) {

			let url;

			if ( Array.isArray( data ) ) {

				// cube texture

				url = [];

				for ( let i = 0, l = data.length; i < l; i ++ ) {

					if ( data[ i ].isDataTexture ) {

						url.push( serializeImage( data[ i ].image ) );

					} else {

						url.push( serializeImage( data[ i ] ) );

					}

				}

			} else {

				// texture

				url = serializeImage( data );

			}

			output.url = url;

		}

		if ( ! isRootObject ) {

			meta.images[ this.uuid ] = output;

		}

		return output;

	}

}

function serializeImage( image ) {

	if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
		( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
		( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

		// default images

		return ImageUtils.getDataURL( image );

	} else {

		if ( image.data ) {

			// images of DataTexture

			return {
				data: Array.from( image.data ),
				width: image.width,
				height: image.height,
				type: image.data.constructor.name
			};

		} else {

			console.warn( 'THREE.Texture: Unable to serialize Texture.' );
			return {};

		}

	}

}

let _textureId = 0;

class Texture extends EventDispatcher {

	constructor( image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = Texture.DEFAULT_ANISOTROPY, colorSpace = NoColorSpace ) {

		super();

		this.isTexture = true;

		Object.defineProperty( this, 'id', { value: _textureId ++ } );

		this.uuid = generateUUID();

		this.name = '';

		this.source = new Source( image );
		this.mipmaps = [];

		this.mapping = mapping;
		this.channel = 0;

		this.wrapS = wrapS;
		this.wrapT = wrapT;

		this.magFilter = magFilter;
		this.minFilter = minFilter;

		this.anisotropy = anisotropy;

		this.format = format;
		this.internalFormat = null;
		this.type = type;

		this.offset = new Vector2( 0, 0 );
		this.repeat = new Vector2( 1, 1 );
		this.center = new Vector2( 0, 0 );
		this.rotation = 0;

		this.matrixAutoUpdate = true;
		this.matrix = new Matrix3();

		this.generateMipmaps = true;
		this.premultiplyAlpha = false;
		this.flipY = true;
		this.unpackAlignment = 4;	// valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

		this.colorSpace = colorSpace;

		this.userData = {};

		this.version = 0;
		this.onUpdate = null;

		this.isRenderTargetTexture = false; // indicates whether a texture belongs to a render target or not
		this.pmremVersion = 0; // indicates whether this texture should be processed by PMREMGenerator or not (only relevant for render target textures)

	}

	get image() {

		return this.source.data;

	}

	set image( value = null ) {

		this.source.data = value;

	}

	updateMatrix() {

		this.matrix.setUvTransform( this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y );

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( source ) {

		this.name = source.name;

		this.source = source.source;
		this.mipmaps = source.mipmaps.slice( 0 );

		this.mapping = source.mapping;
		this.channel = source.channel;

		this.wrapS = source.wrapS;
		this.wrapT = source.wrapT;

		this.magFilter = source.magFilter;
		this.minFilter = source.minFilter;

		this.anisotropy = source.anisotropy;

		this.format = source.format;
		this.internalFormat = source.internalFormat;
		this.type = source.type;

		this.offset.copy( source.offset );
		this.repeat.copy( source.repeat );
		this.center.copy( source.center );
		this.rotation = source.rotation;

		this.matrixAutoUpdate = source.matrixAutoUpdate;
		this.matrix.copy( source.matrix );

		this.generateMipmaps = source.generateMipmaps;
		this.premultiplyAlpha = source.premultiplyAlpha;
		this.flipY = source.flipY;
		this.unpackAlignment = source.unpackAlignment;
		this.colorSpace = source.colorSpace;

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		this.needsUpdate = true;

		return this;

	}

	toJSON( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( ! isRootObject && meta.textures[ this.uuid ] !== undefined ) {

			return meta.textures[ this.uuid ];

		}

		const output = {

			metadata: {
				version: 4.6,
				type: 'Texture',
				generator: 'Texture.toJSON'
			},

			uuid: this.uuid,
			name: this.name,

			image: this.source.toJSON( meta ).uuid,

			mapping: this.mapping,
			channel: this.channel,

			repeat: [ this.repeat.x, this.repeat.y ],
			offset: [ this.offset.x, this.offset.y ],
			center: [ this.center.x, this.center.y ],
			rotation: this.rotation,

			wrap: [ this.wrapS, this.wrapT ],

			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			colorSpace: this.colorSpace,

			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,

			flipY: this.flipY,

			generateMipmaps: this.generateMipmaps,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment

		};

		if ( Object.keys( this.userData ).length > 0 ) output.userData = this.userData;

		if ( ! isRootObject ) {

			meta.textures[ this.uuid ] = output;

		}

		return output;

	}

	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

	transformUv( uv ) {

		if ( this.mapping !== UVMapping ) return uv;

		uv.applyMatrix3( this.matrix );

		if ( uv.x < 0 || uv.x > 1 ) {

			switch ( this.wrapS ) {

				case RepeatWrapping:

					uv.x = uv.x - Math.floor( uv.x );
					break;

				case ClampToEdgeWrapping:

					uv.x = uv.x < 0 ? 0 : 1;
					break;

				case MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.x ) % 2 ) === 1 ) {

						uv.x = Math.ceil( uv.x ) - uv.x;

					} else {

						uv.x = uv.x - Math.floor( uv.x );

					}

					break;

			}

		}

		if ( uv.y < 0 || uv.y > 1 ) {

			switch ( this.wrapT ) {

				case RepeatWrapping:

					uv.y = uv.y - Math.floor( uv.y );
					break;

				case ClampToEdgeWrapping:

					uv.y = uv.y < 0 ? 0 : 1;
					break;

				case MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.y ) % 2 ) === 1 ) {

						uv.y = Math.ceil( uv.y ) - uv.y;

					} else {

						uv.y = uv.y - Math.floor( uv.y );

					}

					break;

			}

		}

		if ( this.flipY ) {

			uv.y = 1 - uv.y;

		}

		return uv;

	}

	set needsUpdate( value ) {

		if ( value === true ) {

			this.version ++;
			this.source.needsUpdate = true;

		}

	}

	set needsPMREMUpdate( value ) {

		if ( value === true ) {

			this.pmremVersion ++;

		}

	}

}

Texture.DEFAULT_IMAGE = null;
Texture.DEFAULT_MAPPING = UVMapping;
Texture.DEFAULT_ANISOTROPY = 1;

class Vector4 {

	constructor( x = 0, y = 0, z = 0, w = 1 ) {

		Vector4.prototype.isVector4 = true;

		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;

	}

	get width() {

		return this.z;

	}

	set width( value ) {

		this.z = value;

	}

	get height() {

		return this.w;

	}

	set height( value ) {

		this.w = value;

	}

	set( x, y, z, w ) {

		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;

		return this;

	}

	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;
		this.z = scalar;
		this.w = scalar;

		return this;

	}

	setX( x ) {

		this.x = x;

		return this;

	}

	setY( y ) {

		this.y = y;

		return this;

	}

	setZ( z ) {

		this.z = z;

		return this;

	}

	setW( w ) {

		this.w = w;

		return this;

	}

	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			case 2: this.z = value; break;
			case 3: this.w = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	clone() {

		return new this.constructor( this.x, this.y, this.z, this.w );

	}

	copy( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		this.w = ( v.w !== undefined ) ? v.w : 1;

		return this;

	}

	add( v ) {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		this.w += v.w;

		return this;

	}

	addScalar( s ) {

		this.x += s;
		this.y += s;
		this.z += s;
		this.w += s;

		return this;

	}

	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;
		this.w = a.w + b.w;

		return this;

	}

	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;
		this.w += v.w * s;

		return this;

	}

	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		this.w -= v.w;

		return this;

	}

	subScalar( s ) {

		this.x -= s;
		this.y -= s;
		this.z -= s;
		this.w -= s;

		return this;

	}

	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;
		this.w = a.w - b.w;

		return this;

	}

	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;
		this.w *= v.w;

		return this;

	}

	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		this.w *= scalar;

		return this;

	}

	applyMatrix4( m ) {

		const x = this.x, y = this.y, z = this.z, w = this.w;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] * w;
		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] * w;
		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] * w;
		this.w = e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] * w;

		return this;

	}

	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;
		this.w /= v.w;

		return this;

	}

	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	setAxisAngleFromQuaternion( q ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm

		// q is assumed to be normalized

		this.w = 2 * Math.acos( q.w );

		const s = Math.sqrt( 1 - q.w * q.w );

		if ( s < 0.0001 ) {

			this.x = 1;
			this.y = 0;
			this.z = 0;

		} else {

			this.x = q.x / s;
			this.y = q.y / s;
			this.z = q.z / s;

		}

		return this;

	}

	setAxisAngleFromRotationMatrix( m ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		let angle, x, y, z; // variables for result
		const epsilon = 0.01,		// margin to allow for rounding errors
			epsilon2 = 0.1,		// margin to distinguish between 0 and 180 degrees

			te = m.elements,

			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

		if ( ( Math.abs( m12 - m21 ) < epsilon ) &&
		     ( Math.abs( m13 - m31 ) < epsilon ) &&
		     ( Math.abs( m23 - m32 ) < epsilon ) ) {

			// singularity found
			// first check for identity matrix which must have +1 for all terms
			// in leading diagonal and zero in other terms

			if ( ( Math.abs( m12 + m21 ) < epsilon2 ) &&
			     ( Math.abs( m13 + m31 ) < epsilon2 ) &&
			     ( Math.abs( m23 + m32 ) < epsilon2 ) &&
			     ( Math.abs( m11 + m22 + m33 - 3 ) < epsilon2 ) ) {

				// this singularity is identity matrix so angle = 0

				this.set( 1, 0, 0, 0 );

				return this; // zero angle, arbitrary axis

			}

			// otherwise this singularity is angle = 180

			angle = Math.PI;

			const xx = ( m11 + 1 ) / 2;
			const yy = ( m22 + 1 ) / 2;
			const zz = ( m33 + 1 ) / 2;
			const xy = ( m12 + m21 ) / 4;
			const xz = ( m13 + m31 ) / 4;
			const yz = ( m23 + m32 ) / 4;

			if ( ( xx > yy ) && ( xx > zz ) ) {

				// m11 is the largest diagonal term

				if ( xx < epsilon ) {

					x = 0;
					y = 0.707106781;
					z = 0.707106781;

				} else {

					x = Math.sqrt( xx );
					y = xy / x;
					z = xz / x;

				}

			} else if ( yy > zz ) {

				// m22 is the largest diagonal term

				if ( yy < epsilon ) {

					x = 0.707106781;
					y = 0;
					z = 0.707106781;

				} else {

					y = Math.sqrt( yy );
					x = xy / y;
					z = yz / y;

				}

			} else {

				// m33 is the largest diagonal term so base result on this

				if ( zz < epsilon ) {

					x = 0.707106781;
					y = 0.707106781;
					z = 0;

				} else {

					z = Math.sqrt( zz );
					x = xz / z;
					y = yz / z;

				}

			}

			this.set( x, y, z, angle );

			return this; // return 180 deg rotation

		}

		// as we have reached here there are no singularities so we can handle normally

		let s = Math.sqrt( ( m32 - m23 ) * ( m32 - m23 ) +
			( m13 - m31 ) * ( m13 - m31 ) +
			( m21 - m12 ) * ( m21 - m12 ) ); // used to normalize

		if ( Math.abs( s ) < 0.001 ) s = 1;

		// prevent divide by zero, should not happen if matrix is orthogonal and should be
		// caught by singularity test above, but I've left it in just in case

		this.x = ( m32 - m23 ) / s;
		this.y = ( m13 - m31 ) / s;
		this.z = ( m21 - m12 ) / s;
		this.w = Math.acos( ( m11 + m22 + m33 - 1 ) / 2 );

		return this;

	}

	setFromMatrixPosition( m ) {

		const e = m.elements;

		this.x = e[ 12 ];
		this.y = e[ 13 ];
		this.z = e[ 14 ];
		this.w = e[ 15 ];

		return this;

	}

	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );
		this.z = Math.min( this.z, v.z );
		this.w = Math.min( this.w, v.w );

		return this;

	}

	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );
		this.z = Math.max( this.z, v.z );
		this.w = Math.max( this.w, v.w );

		return this;

	}

	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );
		this.z = Math.max( min.z, Math.min( max.z, this.z ) );
		this.w = Math.max( min.w, Math.min( max.w, this.w ) );

		return this;

	}

	clampScalar( minVal, maxVal ) {

		this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
		this.y = Math.max( minVal, Math.min( maxVal, this.y ) );
		this.z = Math.max( minVal, Math.min( maxVal, this.z ) );
		this.w = Math.max( minVal, Math.min( maxVal, this.w ) );

		return this;

	}

	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	}

	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
		this.z = Math.floor( this.z );
		this.w = Math.floor( this.w );

		return this;

	}

	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );
		this.z = Math.ceil( this.z );
		this.w = Math.ceil( this.w );

		return this;

	}

	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );
		this.z = Math.round( this.z );
		this.w = Math.round( this.w );

		return this;

	}

	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );
		this.z = Math.trunc( this.z );
		this.w = Math.trunc( this.w );

		return this;

	}

	negate() {

		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;
		this.w = - this.w;

		return this;

	}

	dot( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;

	}

	lengthSq() {

		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;

	}

	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w );

	}

	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z ) + Math.abs( this.w );

	}

	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		this.z += ( v.z - this.z ) * alpha;
		this.w += ( v.w - this.w ) * alpha;

		return this;

	}

	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;
		this.z = v1.z + ( v2.z - v1.z ) * alpha;
		this.w = v1.w + ( v2.w - v1.w ) * alpha;

		return this;

	}

	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) && ( v.w === this.w ) );

	}

	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];
		this.z = array[ offset + 2 ];
		this.w = array[ offset + 3 ];

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;
		array[ offset + 2 ] = this.z;
		array[ offset + 3 ] = this.w;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );
		this.z = attribute.getZ( index );
		this.w = attribute.getW( index );

		return this;

	}

	random() {

		this.x = Math.random();
		this.y = Math.random();
		this.z = Math.random();
		this.w = Math.random();

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;
		yield this.z;
		yield this.w;

	}

}

/*
 In options, we can specify:
 * Texture parameters for an auto-generated target texture
 * depthBuffer/stencilBuffer: Booleans to indicate if we should generate these buffers
*/
class RenderTarget extends EventDispatcher {

	constructor( width = 1, height = 1, options = {} ) {

		super();

		this.isRenderTarget = true;

		this.width = width;
		this.height = height;
		this.depth = 1;

		this.scissor = new Vector4( 0, 0, width, height );
		this.scissorTest = false;

		this.viewport = new Vector4( 0, 0, width, height );

		const image = { width: width, height: height, depth: 1 };

		options = Object.assign( {
			generateMipmaps: false,
			internalFormat: null,
			minFilter: LinearFilter,
			depthBuffer: true,
			stencilBuffer: false,
			resolveDepthBuffer: true,
			resolveStencilBuffer: true,
			depthTexture: null,
			samples: 0,
			count: 1
		}, options );

		const texture = new Texture( image, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.colorSpace );

		texture.flipY = false;
		texture.generateMipmaps = options.generateMipmaps;
		texture.internalFormat = options.internalFormat;

		this.textures = [];

		const count = options.count;
		for ( let i = 0; i < count; i ++ ) {

			this.textures[ i ] = texture.clone();
			this.textures[ i ].isRenderTargetTexture = true;

		}

		this.depthBuffer = options.depthBuffer;
		this.stencilBuffer = options.stencilBuffer;

		this.resolveDepthBuffer = options.resolveDepthBuffer;
		this.resolveStencilBuffer = options.resolveStencilBuffer;

		this.depthTexture = options.depthTexture;

		this.samples = options.samples;

	}

	get texture() {

		return this.textures[ 0 ];

	}

	set texture( value ) {

		this.textures[ 0 ] = value;

	}

	setSize( width, height, depth = 1 ) {

		if ( this.width !== width || this.height !== height || this.depth !== depth ) {

			this.width = width;
			this.height = height;
			this.depth = depth;

			for ( let i = 0, il = this.textures.length; i < il; i ++ ) {

				this.textures[ i ].image.width = width;
				this.textures[ i ].image.height = height;
				this.textures[ i ].image.depth = depth;

			}

			this.dispose();

		}

		this.viewport.set( 0, 0, width, height );
		this.scissor.set( 0, 0, width, height );

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( source ) {

		this.width = source.width;
		this.height = source.height;
		this.depth = source.depth;

		this.scissor.copy( source.scissor );
		this.scissorTest = source.scissorTest;

		this.viewport.copy( source.viewport );

		this.textures.length = 0;

		for ( let i = 0, il = source.textures.length; i < il; i ++ ) {

			this.textures[ i ] = source.textures[ i ].clone();
			this.textures[ i ].isRenderTargetTexture = true;

		}

		// ensure image object is not shared, see #20328

		const image = Object.assign( {}, source.texture.image );
		this.texture.source = new Source( image );

		this.depthBuffer = source.depthBuffer;
		this.stencilBuffer = source.stencilBuffer;

		this.resolveDepthBuffer = source.resolveDepthBuffer;
		this.resolveStencilBuffer = source.resolveStencilBuffer;

		if ( source.depthTexture !== null ) this.depthTexture = source.depthTexture.clone();

		this.samples = source.samples;

		return this;

	}

	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

}

class WebGLRenderTarget extends RenderTarget {

	constructor( width = 1, height = 1, options = {} ) {

		super( width, height, options );

		this.isWebGLRenderTarget = true;

	}

}

class DataArrayTexture extends Texture {

	constructor( data = null, width = 1, height = 1, depth = 1 ) {

		super( null );

		this.isDataArrayTexture = true;

		this.image = { data, width, height, depth };

		this.magFilter = NearestFilter;
		this.minFilter = NearestFilter;

		this.wrapR = ClampToEdgeWrapping;

		this.generateMipmaps = false;
		this.flipY = false;
		this.unpackAlignment = 1;

		this.layerUpdates = new Set();

	}

	addLayerUpdate( layerIndex ) {

		this.layerUpdates.add( layerIndex );

	}

	clearLayerUpdates() {

		this.layerUpdates.clear();

	}

}

class WebGLArrayRenderTarget extends WebGLRenderTarget {

	constructor( width = 1, height = 1, depth = 1, options = {} ) {

		super( width, height, options );

		this.isWebGLArrayRenderTarget = true;

		this.depth = depth;

		this.texture = new DataArrayTexture( null, width, height, depth );

		this.texture.isRenderTargetTexture = true;

	}

}

class Data3DTexture extends Texture {

	constructor( data = null, width = 1, height = 1, depth = 1 ) {

		// We're going to add .setXXX() methods for setting properties later.
		// Users can still set in DataTexture3D directly.
		//
		//	const texture = new THREE.DataTexture3D( data, width, height, depth );
		// 	texture.anisotropy = 16;
		//
		// See #14839

		super( null );

		this.isData3DTexture = true;

		this.image = { data, width, height, depth };

		this.magFilter = NearestFilter;
		this.minFilter = NearestFilter;

		this.wrapR = ClampToEdgeWrapping;

		this.generateMipmaps = false;
		this.flipY = false;
		this.unpackAlignment = 1;

	}

}

class WebGL3DRenderTarget extends WebGLRenderTarget {

	constructor( width = 1, height = 1, depth = 1, options = {} ) {

		super( width, height, options );

		this.isWebGL3DRenderTarget = true;

		this.depth = depth;

		this.texture = new Data3DTexture( null, width, height, depth );

		this.texture.isRenderTargetTexture = true;

	}

}

class Quaternion {

	constructor( x = 0, y = 0, z = 0, w = 1 ) {

		this.isQuaternion = true;

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

	}

	static slerpFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t ) {

		// fuzz-free, array-based Quaternion SLERP operation

		let x0 = src0[ srcOffset0 + 0 ],
			y0 = src0[ srcOffset0 + 1 ],
			z0 = src0[ srcOffset0 + 2 ],
			w0 = src0[ srcOffset0 + 3 ];

		const x1 = src1[ srcOffset1 + 0 ],
			y1 = src1[ srcOffset1 + 1 ],
			z1 = src1[ srcOffset1 + 2 ],
			w1 = src1[ srcOffset1 + 3 ];

		if ( t === 0 ) {

			dst[ dstOffset + 0 ] = x0;
			dst[ dstOffset + 1 ] = y0;
			dst[ dstOffset + 2 ] = z0;
			dst[ dstOffset + 3 ] = w0;
			return;

		}

		if ( t === 1 ) {

			dst[ dstOffset + 0 ] = x1;
			dst[ dstOffset + 1 ] = y1;
			dst[ dstOffset + 2 ] = z1;
			dst[ dstOffset + 3 ] = w1;
			return;

		}

		if ( w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1 ) {

			let s = 1 - t;
			const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
				dir = ( cos >= 0 ? 1 : - 1 ),
				sqrSin = 1 - cos * cos;

			// Skip the Slerp for tiny steps to avoid numeric problems:
			if ( sqrSin > Number.EPSILON ) {

				const sin = Math.sqrt( sqrSin ),
					len = Math.atan2( sin, cos * dir );

				s = Math.sin( s * len ) / sin;
				t = Math.sin( t * len ) / sin;

			}

			const tDir = t * dir;

			x0 = x0 * s + x1 * tDir;
			y0 = y0 * s + y1 * tDir;
			z0 = z0 * s + z1 * tDir;
			w0 = w0 * s + w1 * tDir;

			// Normalize in case we just did a lerp:
			if ( s === 1 - t ) {

				const f = 1 / Math.sqrt( x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0 );

				x0 *= f;
				y0 *= f;
				z0 *= f;
				w0 *= f;

			}

		}

		dst[ dstOffset ] = x0;
		dst[ dstOffset + 1 ] = y0;
		dst[ dstOffset + 2 ] = z0;
		dst[ dstOffset + 3 ] = w0;

	}

	static multiplyQuaternionsFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1 ) {

		const x0 = src0[ srcOffset0 ];
		const y0 = src0[ srcOffset0 + 1 ];
		const z0 = src0[ srcOffset0 + 2 ];
		const w0 = src0[ srcOffset0 + 3 ];

		const x1 = src1[ srcOffset1 ];
		const y1 = src1[ srcOffset1 + 1 ];
		const z1 = src1[ srcOffset1 + 2 ];
		const w1 = src1[ srcOffset1 + 3 ];

		dst[ dstOffset ] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
		dst[ dstOffset + 1 ] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
		dst[ dstOffset + 2 ] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
		dst[ dstOffset + 3 ] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;

		return dst;

	}

	get x() {

		return this._x;

	}

	set x( value ) {

		this._x = value;
		this._onChangeCallback();

	}

	get y() {

		return this._y;

	}

	set y( value ) {

		this._y = value;
		this._onChangeCallback();

	}

	get z() {

		return this._z;

	}

	set z( value ) {

		this._z = value;
		this._onChangeCallback();

	}

	get w() {

		return this._w;

	}

	set w( value ) {

		this._w = value;
		this._onChangeCallback();

	}

	set( x, y, z, w ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

		this._onChangeCallback();

		return this;

	}

	clone() {

		return new this.constructor( this._x, this._y, this._z, this._w );

	}

	copy( quaternion ) {

		this._x = quaternion.x;
		this._y = quaternion.y;
		this._z = quaternion.z;
		this._w = quaternion.w;

		this._onChangeCallback();

		return this;

	}

	setFromEuler( euler, update = true ) {

		const x = euler._x, y = euler._y, z = euler._z, order = euler._order;

		// http://www.mathworks.com/matlabcentral/fileexchange/
		// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
		//	content/SpinCalc.m

		const cos = Math.cos;
		const sin = Math.sin;

		const c1 = cos( x / 2 );
		const c2 = cos( y / 2 );
		const c3 = cos( z / 2 );

		const s1 = sin( x / 2 );
		const s2 = sin( y / 2 );
		const s3 = sin( z / 2 );

		switch ( order ) {

			case 'XYZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'YXZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'ZXY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'ZYX':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'YZX':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'XZY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			default:
				console.warn( 'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + order );

		}

		if ( update === true ) this._onChangeCallback();

		return this;

	}

	setFromAxisAngle( axis, angle ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

		// assumes axis is normalized

		const halfAngle = angle / 2, s = Math.sin( halfAngle );

		this._x = axis.x * s;
		this._y = axis.y * s;
		this._z = axis.z * s;
		this._w = Math.cos( halfAngle );

		this._onChangeCallback();

		return this;

	}

	setFromRotationMatrix( m ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		const te = m.elements,

			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ],

			trace = m11 + m22 + m33;

		if ( trace > 0 ) {

			const s = 0.5 / Math.sqrt( trace + 1.0 );

			this._w = 0.25 / s;
			this._x = ( m32 - m23 ) * s;
			this._y = ( m13 - m31 ) * s;
			this._z = ( m21 - m12 ) * s;

		} else if ( m11 > m22 && m11 > m33 ) {

			const s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

			this._w = ( m32 - m23 ) / s;
			this._x = 0.25 * s;
			this._y = ( m12 + m21 ) / s;
			this._z = ( m13 + m31 ) / s;

		} else if ( m22 > m33 ) {

			const s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

			this._w = ( m13 - m31 ) / s;
			this._x = ( m12 + m21 ) / s;
			this._y = 0.25 * s;
			this._z = ( m23 + m32 ) / s;

		} else {

			const s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

			this._w = ( m21 - m12 ) / s;
			this._x = ( m13 + m31 ) / s;
			this._y = ( m23 + m32 ) / s;
			this._z = 0.25 * s;

		}

		this._onChangeCallback();

		return this;

	}

	setFromUnitVectors( vFrom, vTo ) {

		// assumes direction vectors vFrom and vTo are normalized

		let r = vFrom.dot( vTo ) + 1;

		if ( r < Number.EPSILON ) {

			// vFrom and vTo point in opposite directions

			r = 0;

			if ( Math.abs( vFrom.x ) > Math.abs( vFrom.z ) ) {

				this._x = - vFrom.y;
				this._y = vFrom.x;
				this._z = 0;
				this._w = r;

			} else {

				this._x = 0;
				this._y = - vFrom.z;
				this._z = vFrom.y;
				this._w = r;

			}

		} else {

			// crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3

			this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
			this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
			this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
			this._w = r;

		}

		return this.normalize();

	}

	angleTo( q ) {

		return 2 * Math.acos( Math.abs( clamp( this.dot( q ), - 1, 1 ) ) );

	}

	rotateTowards( q, step ) {

		const angle = this.angleTo( q );

		if ( angle === 0 ) return this;

		const t = Math.min( 1, step / angle );

		this.slerp( q, t );

		return this;

	}

	identity() {

		return this.set( 0, 0, 0, 1 );

	}

	invert() {

		// quaternion is assumed to have unit length

		return this.conjugate();

	}

	conjugate() {

		this._x *= - 1;
		this._y *= - 1;
		this._z *= - 1;

		this._onChangeCallback();

		return this;

	}

	dot( v ) {

		return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;

	}

	lengthSq() {

		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;

	}

	length() {

		return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );

	}

	normalize() {

		let l = this.length();

		if ( l === 0 ) {

			this._x = 0;
			this._y = 0;
			this._z = 0;
			this._w = 1;

		} else {

			l = 1 / l;

			this._x = this._x * l;
			this._y = this._y * l;
			this._z = this._z * l;
			this._w = this._w * l;

		}

		this._onChangeCallback();

		return this;

	}

	multiply( q ) {

		return this.multiplyQuaternions( this, q );

	}

	premultiply( q ) {

		return this.multiplyQuaternions( q, this );

	}

	multiplyQuaternions( a, b ) {

		// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

		const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
		const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;

		this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
		this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
		this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
		this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

		this._onChangeCallback();

		return this;

	}

	slerp( qb, t ) {

		if ( t === 0 ) return this;
		if ( t === 1 ) return this.copy( qb );

		const x = this._x, y = this._y, z = this._z, w = this._w;

		// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

		let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

		if ( cosHalfTheta < 0 ) {

			this._w = - qb._w;
			this._x = - qb._x;
			this._y = - qb._y;
			this._z = - qb._z;

			cosHalfTheta = - cosHalfTheta;

		} else {

			this.copy( qb );

		}

		if ( cosHalfTheta >= 1.0 ) {

			this._w = w;
			this._x = x;
			this._y = y;
			this._z = z;

			return this;

		}

		const sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

		if ( sqrSinHalfTheta <= Number.EPSILON ) {

			const s = 1 - t;
			this._w = s * w + t * this._w;
			this._x = s * x + t * this._x;
			this._y = s * y + t * this._y;
			this._z = s * z + t * this._z;

			this.normalize(); // normalize calls _onChangeCallback()

			return this;

		}

		const sinHalfTheta = Math.sqrt( sqrSinHalfTheta );
		const halfTheta = Math.atan2( sinHalfTheta, cosHalfTheta );
		const ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
			ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

		this._w = ( w * ratioA + this._w * ratioB );
		this._x = ( x * ratioA + this._x * ratioB );
		this._y = ( y * ratioA + this._y * ratioB );
		this._z = ( z * ratioA + this._z * ratioB );

		this._onChangeCallback();

		return this;

	}

	slerpQuaternions( qa, qb, t ) {

		return this.copy( qa ).slerp( qb, t );

	}

	random() {

		// sets this quaternion to a uniform random unit quaternnion

		// Ken Shoemake
		// Uniform random rotations
		// D. Kirk, editor, Graphics Gems III, pages 124-132. Academic Press, New York, 1992.

		const theta1 = 2 * Math.PI * Math.random();
		const theta2 = 2 * Math.PI * Math.random();

		const x0 = Math.random();
		const r1 = Math.sqrt( 1 - x0 );
		const r2 = Math.sqrt( x0 );

		return this.set(
			r1 * Math.sin( theta1 ),
			r1 * Math.cos( theta1 ),
			r2 * Math.sin( theta2 ),
			r2 * Math.cos( theta2 ),
		);

	}

	equals( quaternion ) {

		return ( quaternion._x === this._x ) && ( quaternion._y === this._y ) && ( quaternion._z === this._z ) && ( quaternion._w === this._w );

	}

	fromArray( array, offset = 0 ) {

		this._x = array[ offset ];
		this._y = array[ offset + 1 ];
		this._z = array[ offset + 2 ];
		this._w = array[ offset + 3 ];

		this._onChangeCallback();

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this._x;
		array[ offset + 1 ] = this._y;
		array[ offset + 2 ] = this._z;
		array[ offset + 3 ] = this._w;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this._x = attribute.getX( index );
		this._y = attribute.getY( index );
		this._z = attribute.getZ( index );
		this._w = attribute.getW( index );

		this._onChangeCallback();

		return this;

	}

	toJSON() {

		return this.toArray();

	}

	_onChange( callback ) {

		this._onChangeCallback = callback;

		return this;

	}

	_onChangeCallback() {}

	*[ Symbol.iterator ]() {

		yield this._x;
		yield this._y;
		yield this._z;
		yield this._w;

	}

}

class Vector3 {

	constructor( x = 0, y = 0, z = 0 ) {

		Vector3.prototype.isVector3 = true;

		this.x = x;
		this.y = y;
		this.z = z;

	}

	set( x, y, z ) {

		if ( z === undefined ) z = this.z; // sprite.scale.set(x,y)

		this.x = x;
		this.y = y;
		this.z = z;

		return this;

	}

	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;
		this.z = scalar;

		return this;

	}

	setX( x ) {

		this.x = x;

		return this;

	}

	setY( y ) {

		this.y = y;

		return this;

	}

	setZ( z ) {

		this.z = z;

		return this;

	}

	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			case 2: this.z = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	clone() {

		return new this.constructor( this.x, this.y, this.z );

	}

	copy( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;

		return this;

	}

	add( v ) {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;

		return this;

	}

	addScalar( s ) {

		this.x += s;
		this.y += s;
		this.z += s;

		return this;

	}

	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;

		return this;

	}

	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;

		return this;

	}

	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;

		return this;

	}

	subScalar( s ) {

		this.x -= s;
		this.y -= s;
		this.z -= s;

		return this;

	}

	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;

		return this;

	}

	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;

		return this;

	}

	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;

		return this;

	}

	multiplyVectors( a, b ) {

		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;

		return this;

	}

	applyEuler( euler ) {

		return this.applyQuaternion( _quaternion$4.setFromEuler( euler ) );

	}

	applyAxisAngle( axis, angle ) {

		return this.applyQuaternion( _quaternion$4.setFromAxisAngle( axis, angle ) );

	}

	applyMatrix3( m ) {

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
		this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

		return this;

	}

	applyNormalMatrix( m ) {

		return this.applyMatrix3( m ).normalize();

	}

	applyMatrix4( m ) {

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		const w = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] );

		this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] ) * w;
		this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] ) * w;
		this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * w;

		return this;

	}

	applyQuaternion( q ) {

		// quaternion q is assumed to have unit length

		const vx = this.x, vy = this.y, vz = this.z;
		const qx = q.x, qy = q.y, qz = q.z, qw = q.w;

		// t = 2 * cross( q.xyz, v );
		const tx = 2 * ( qy * vz - qz * vy );
		const ty = 2 * ( qz * vx - qx * vz );
		const tz = 2 * ( qx * vy - qy * vx );

		// v + q.w * t + cross( q.xyz, t );
		this.x = vx + qw * tx + qy * tz - qz * ty;
		this.y = vy + qw * ty + qz * tx - qx * tz;
		this.z = vz + qw * tz + qx * ty - qy * tx;

		return this;

	}

	project( camera ) {

		return this.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );

	}

	unproject( camera ) {

		return this.applyMatrix4( camera.projectionMatrixInverse ).applyMatrix4( camera.matrixWorld );

	}

	transformDirection( m ) {

		// input: THREE.Matrix4 affine matrix
		// vector interpreted as a direction

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z;
		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z;
		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;

		return this.normalize();

	}

	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;

		return this;

	}

	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );
		this.z = Math.min( this.z, v.z );

		return this;

	}

	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );
		this.z = Math.max( this.z, v.z );

		return this;

	}

	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );
		this.z = Math.max( min.z, Math.min( max.z, this.z ) );

		return this;

	}

	clampScalar( minVal, maxVal ) {

		this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
		this.y = Math.max( minVal, Math.min( maxVal, this.y ) );
		this.z = Math.max( minVal, Math.min( maxVal, this.z ) );

		return this;

	}

	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	}

	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
		this.z = Math.floor( this.z );

		return this;

	}

	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );
		this.z = Math.ceil( this.z );

		return this;

	}

	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );
		this.z = Math.round( this.z );

		return this;

	}

	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );
		this.z = Math.trunc( this.z );

		return this;

	}

	negate() {

		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;

		return this;

	}

	dot( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z;

	}

	// TODO lengthSquared?

	lengthSq() {

		return this.x * this.x + this.y * this.y + this.z * this.z;

	}

	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

	}

	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

	}

	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		this.z += ( v.z - this.z ) * alpha;

		return this;

	}

	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;
		this.z = v1.z + ( v2.z - v1.z ) * alpha;

		return this;

	}

	cross( v ) {

		return this.crossVectors( this, v );

	}

	crossVectors( a, b ) {

		const ax = a.x, ay = a.y, az = a.z;
		const bx = b.x, by = b.y, bz = b.z;

		this.x = ay * bz - az * by;
		this.y = az * bx - ax * bz;
		this.z = ax * by - ay * bx;

		return this;

	}

	projectOnVector( v ) {

		const denominator = v.lengthSq();

		if ( denominator === 0 ) return this.set( 0, 0, 0 );

		const scalar = v.dot( this ) / denominator;

		return this.copy( v ).multiplyScalar( scalar );

	}

	projectOnPlane( planeNormal ) {

		_vector$c.copy( this ).projectOnVector( planeNormal );

		return this.sub( _vector$c );

	}

	reflect( normal ) {

		// reflect incident vector off plane orthogonal to normal
		// normal is assumed to have unit length

		return this.sub( _vector$c.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );

	}

	angleTo( v ) {

		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

		if ( denominator === 0 ) return Math.PI / 2;

		const theta = this.dot( v ) / denominator;

		// clamp, to handle numerical problems

		return Math.acos( clamp( theta, - 1, 1 ) );

	}

	distanceTo( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	}

	distanceToSquared( v ) {

		const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;

		return dx * dx + dy * dy + dz * dz;

	}

	manhattanDistanceTo( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y ) + Math.abs( this.z - v.z );

	}

	setFromSpherical( s ) {

		return this.setFromSphericalCoords( s.radius, s.phi, s.theta );

	}

	setFromSphericalCoords( radius, phi, theta ) {

		const sinPhiRadius = Math.sin( phi ) * radius;

		this.x = sinPhiRadius * Math.sin( theta );
		this.y = Math.cos( phi ) * radius;
		this.z = sinPhiRadius * Math.cos( theta );

		return this;

	}

	setFromCylindrical( c ) {

		return this.setFromCylindricalCoords( c.radius, c.theta, c.y );

	}

	setFromCylindricalCoords( radius, theta, y ) {

		this.x = radius * Math.sin( theta );
		this.y = y;
		this.z = radius * Math.cos( theta );

		return this;

	}

	setFromMatrixPosition( m ) {

		const e = m.elements;

		this.x = e[ 12 ];
		this.y = e[ 13 ];
		this.z = e[ 14 ];

		return this;

	}

	setFromMatrixScale( m ) {

		const sx = this.setFromMatrixColumn( m, 0 ).length();
		const sy = this.setFromMatrixColumn( m, 1 ).length();
		const sz = this.setFromMatrixColumn( m, 2 ).length();

		this.x = sx;
		this.y = sy;
		this.z = sz;

		return this;

	}

	setFromMatrixColumn( m, index ) {

		return this.fromArray( m.elements, index * 4 );

	}

	setFromMatrix3Column( m, index ) {

		return this.fromArray( m.elements, index * 3 );

	}

	setFromEuler( e ) {

		this.x = e._x;
		this.y = e._y;
		this.z = e._z;

		return this;

	}

	setFromColor( c ) {

		this.x = c.r;
		this.y = c.g;
		this.z = c.b;

		return this;

	}

	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) );

	}

	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];
		this.z = array[ offset + 2 ];

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;
		array[ offset + 2 ] = this.z;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );
		this.z = attribute.getZ( index );

		return this;

	}

	random() {

		this.x = Math.random();
		this.y = Math.random();
		this.z = Math.random();

		return this;

	}

	randomDirection() {

		// https://mathworld.wolfram.com/SpherePointPicking.html

		const theta = Math.random() * Math.PI * 2;
		const u = Math.random() * 2 - 1;
		const c = Math.sqrt( 1 - u * u );

		this.x = c * Math.cos( theta );
		this.y = u;
		this.z = c * Math.sin( theta );

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;
		yield this.z;

	}

}

const _vector$c = /*@__PURE__*/ new Vector3();
const _quaternion$4 = /*@__PURE__*/ new Quaternion();

class Box3 {

	constructor( min = new Vector3( + Infinity, + Infinity, + Infinity ), max = new Vector3( - Infinity, - Infinity, - Infinity ) ) {

		this.isBox3 = true;

		this.min = min;
		this.max = max;

	}

	set( min, max ) {

		this.min.copy( min );
		this.max.copy( max );

		return this;

	}

	setFromArray( array ) {

		this.makeEmpty();

		for ( let i = 0, il = array.length; i < il; i += 3 ) {

			this.expandByPoint( _vector$b.fromArray( array, i ) );

		}

		return this;

	}

	setFromBufferAttribute( attribute ) {

		this.makeEmpty();

		for ( let i = 0, il = attribute.count; i < il; i ++ ) {

			this.expandByPoint( _vector$b.fromBufferAttribute( attribute, i ) );

		}

		return this;

	}

	setFromPoints( points ) {

		this.makeEmpty();

		for ( let i = 0, il = points.length; i < il; i ++ ) {

			this.expandByPoint( points[ i ] );

		}

		return this;

	}

	setFromCenterAndSize( center, size ) {

		const halfSize = _vector$b.copy( size ).multiplyScalar( 0.5 );

		this.min.copy( center ).sub( halfSize );
		this.max.copy( center ).add( halfSize );

		return this;

	}

	setFromObject( object, precise = false ) {

		this.makeEmpty();

		return this.expandByObject( object, precise );

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( box ) {

		this.min.copy( box.min );
		this.max.copy( box.max );

		return this;

	}

	makeEmpty() {

		this.min.x = this.min.y = this.min.z = + Infinity;
		this.max.x = this.max.y = this.max.z = - Infinity;

		return this;

	}

	isEmpty() {

		// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes

		return ( this.max.x < this.min.x ) || ( this.max.y < this.min.y ) || ( this.max.z < this.min.z );

	}

	getCenter( target ) {

		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.addVectors( this.min, this.max ).multiplyScalar( 0.5 );

	}

	getSize( target ) {

		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.subVectors( this.max, this.min );

	}

	expandByPoint( point ) {

		this.min.min( point );
		this.max.max( point );

		return this;

	}

	expandByVector( vector ) {

		this.min.sub( vector );
		this.max.add( vector );

		return this;

	}

	expandByScalar( scalar ) {

		this.min.addScalar( - scalar );
		this.max.addScalar( scalar );

		return this;

	}

	expandByObject( object, precise = false ) {

		// Computes the world-axis-aligned bounding box of an object (including its children),
		// accounting for both the object's, and children's, world transforms

		object.updateWorldMatrix( false, false );

		const geometry = object.geometry;

		if ( geometry !== undefined ) {

			const positionAttribute = geometry.getAttribute( 'position' );

			// precise AABB computation based on vertex data requires at least a position attribute.
			// instancing isn't supported so far and uses the normal (conservative) code path.

			if ( precise === true && positionAttribute !== undefined && object.isInstancedMesh !== true ) {

				for ( let i = 0, l = positionAttribute.count; i < l; i ++ ) {

					if ( object.isMesh === true ) {

						object.getVertexPosition( i, _vector$b );

					} else {

						_vector$b.fromBufferAttribute( positionAttribute, i );

					}

					_vector$b.applyMatrix4( object.matrixWorld );
					this.expandByPoint( _vector$b );

				}

			} else {

				if ( object.boundingBox !== undefined ) {

					// object-level bounding box

					if ( object.boundingBox === null ) {

						object.computeBoundingBox();

					}

					_box$4.copy( object.boundingBox );


				} else {

					// geometry-level bounding box

					if ( geometry.boundingBox === null ) {

						geometry.computeBoundingBox();

					}

					_box$4.copy( geometry.boundingBox );

				}

				_box$4.applyMatrix4( object.matrixWorld );

				this.union( _box$4 );

			}

		}

		const children = object.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			this.expandByObject( children[ i ], precise );

		}

		return this;

	}

	containsPoint( point ) {

		return point.x >= this.min.x && point.x <= this.max.x &&
			point.y >= this.min.y && point.y <= this.max.y &&
			point.z >= this.min.z && point.z <= this.max.z;

	}

	containsBox( box ) {

		return this.min.x <= box.min.x && box.max.x <= this.max.x &&
			this.min.y <= box.min.y && box.max.y <= this.max.y &&
			this.min.z <= box.min.z && box.max.z <= this.max.z;

	}

	getParameter( point, target ) {

		// This can potentially have a divide by zero if the box
		// has a size dimension of 0.

		return target.set(
			( point.x - this.min.x ) / ( this.max.x - this.min.x ),
			( point.y - this.min.y ) / ( this.max.y - this.min.y ),
			( point.z - this.min.z ) / ( this.max.z - this.min.z )
		);

	}

	intersectsBox( box ) {

		// using 6 splitting planes to rule out intersections.
		return box.max.x >= this.min.x && box.min.x <= this.max.x &&
			box.max.y >= this.min.y && box.min.y <= this.max.y &&
			box.max.z >= this.min.z && box.min.z <= this.max.z;

	}

	intersectsSphere( sphere ) {

		// Find the point on the AABB closest to the sphere center.
		this.clampPoint( sphere.center, _vector$b );

		// If that point is inside the sphere, the AABB and sphere intersect.
		return _vector$b.distanceToSquared( sphere.center ) <= ( sphere.radius * sphere.radius );

	}

	intersectsPlane( plane ) {

		// We compute the minimum and maximum dot product values. If those values
		// are on the same side (back or front) of the plane, then there is no intersection.

		let min, max;

		if ( plane.normal.x > 0 ) {

			min = plane.normal.x * this.min.x;
			max = plane.normal.x * this.max.x;

		} else {

			min = plane.normal.x * this.max.x;
			max = plane.normal.x * this.min.x;

		}

		if ( plane.normal.y > 0 ) {

			min += plane.normal.y * this.min.y;
			max += plane.normal.y * this.max.y;

		} else {

			min += plane.normal.y * this.max.y;
			max += plane.normal.y * this.min.y;

		}

		if ( plane.normal.z > 0 ) {

			min += plane.normal.z * this.min.z;
			max += plane.normal.z * this.max.z;

		} else {

			min += plane.normal.z * this.max.z;
			max += plane.normal.z * this.min.z;

		}

		return ( min <= - plane.constant && max >= - plane.constant );

	}

	intersectsTriangle( triangle ) {

		if ( this.isEmpty() ) {

			return false;

		}

		// compute box center and extents
		this.getCenter( _center );
		_extents.subVectors( this.max, _center );

		// translate triangle to aabb origin
		_v0$3.subVectors( triangle.a, _center );
		_v1$7.subVectors( triangle.b, _center );
		_v2$4.subVectors( triangle.c, _center );

		// compute edge vectors for triangle
		_f0.subVectors( _v1$7, _v0$3 );
		_f1.subVectors( _v2$4, _v1$7 );
		_f2.subVectors( _v0$3, _v2$4 );

		// test against axes that are given by cross product combinations of the edges of the triangle and the edges of the aabb
		// make an axis testing of each of the 3 sides of the aabb against each of the 3 sides of the triangle = 9 axis of separation
		// axis_ij = u_i x f_j (u0, u1, u2 = face normals of aabb = x,y,z axes vectors since aabb is axis aligned)
		let axes = [
			0, - _f0.z, _f0.y, 0, - _f1.z, _f1.y, 0, - _f2.z, _f2.y,
			_f0.z, 0, - _f0.x, _f1.z, 0, - _f1.x, _f2.z, 0, - _f2.x,
			- _f0.y, _f0.x, 0, - _f1.y, _f1.x, 0, - _f2.y, _f2.x, 0
		];
		if ( ! satForAxes( axes, _v0$3, _v1$7, _v2$4, _extents ) ) {

			return false;

		}

		// test 3 face normals from the aabb
		axes = [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];
		if ( ! satForAxes( axes, _v0$3, _v1$7, _v2$4, _extents ) ) {

			return false;

		}

		// finally testing the face normal of the triangle
		// use already existing triangle edge vectors here
		_triangleNormal.crossVectors( _f0, _f1 );
		axes = [ _triangleNormal.x, _triangleNormal.y, _triangleNormal.z ];

		return satForAxes( axes, _v0$3, _v1$7, _v2$4, _extents );

	}

	clampPoint( point, target ) {

		return target.copy( point ).clamp( this.min, this.max );

	}

	distanceToPoint( point ) {

		return this.clampPoint( point, _vector$b ).distanceTo( point );

	}

	getBoundingSphere( target ) {

		if ( this.isEmpty() ) {

			target.makeEmpty();

		} else {

			this.getCenter( target.center );

			target.radius = this.getSize( _vector$b ).length() * 0.5;

		}

		return target;

	}

	intersect( box ) {

		this.min.max( box.min );
		this.max.min( box.max );

		// ensure that if there is no overlap, the result is fully empty, not slightly empty with non-inf/+inf values that will cause subsequence intersects to erroneously return valid values.
		if ( this.isEmpty() ) this.makeEmpty();

		return this;

	}

	union( box ) {

		this.min.min( box.min );
		this.max.max( box.max );

		return this;

	}

	applyMatrix4( matrix ) {

		// transform of empty box is an empty box.
		if ( this.isEmpty() ) return this;

		// NOTE: I am using a binary pattern to specify all 2^3 combinations below
		_points[ 0 ].set( this.min.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 000
		_points[ 1 ].set( this.min.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 001
		_points[ 2 ].set( this.min.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 010
		_points[ 3 ].set( this.min.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 011
		_points[ 4 ].set( this.max.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 100
		_points[ 5 ].set( this.max.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 101
		_points[ 6 ].set( this.max.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 110
		_points[ 7 ].set( this.max.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 111

		this.setFromPoints( _points );

		return this;

	}

	translate( offset ) {

		this.min.add( offset );
		this.max.add( offset );

		return this;

	}

	equals( box ) {

		return box.min.equals( this.min ) && box.max.equals( this.max );

	}

}

const _points = [
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3()
];

const _vector$b = /*@__PURE__*/ new Vector3();

const _box$4 = /*@__PURE__*/ new Box3();

// triangle centered vertices

const _v0$3 = /*@__PURE__*/ new Vector3();
const _v1$7 = /*@__PURE__*/ new Vector3();
const _v2$4 = /*@__PURE__*/ new Vector3();

// triangle edge vectors

const _f0 = /*@__PURE__*/ new Vector3();
const _f1 = /*@__PURE__*/ new Vector3();
const _f2 = /*@__PURE__*/ new Vector3();

const _center = /*@__PURE__*/ new Vector3();
const _extents = /*@__PURE__*/ new Vector3();
const _triangleNormal = /*@__PURE__*/ new Vector3();
const _testAxis = /*@__PURE__*/ new Vector3();

function satForAxes( axes, v0, v1, v2, extents ) {

	for ( let i = 0, j = axes.length - 3; i <= j; i += 3 ) {

		_testAxis.fromArray( axes, i );
		// project the aabb onto the separating axis
		const r = extents.x * Math.abs( _testAxis.x ) + extents.y * Math.abs( _testAxis.y ) + extents.z * Math.abs( _testAxis.z );
		// project all 3 vertices of the triangle onto the separating axis
		const p0 = v0.dot( _testAxis );
		const p1 = v1.dot( _testAxis );
		const p2 = v2.dot( _testAxis );
		// actual test, basically see if either of the most extreme of the triangle points intersects r
		if ( Math.max( - Math.max( p0, p1, p2 ), Math.min( p0, p1, p2 ) ) > r ) {

			// points of the projected triangle are outside the projected half-length of the aabb
			// the axis is separating and we can exit
			return false;

		}

	}

	return true;

}

const _box$3 = /*@__PURE__*/ new Box3();
const _v1$6 = /*@__PURE__*/ new Vector3();
const _v2$3 = /*@__PURE__*/ new Vector3();

class Sphere {

	constructor( center = new Vector3(), radius = - 1 ) {

		this.isSphere = true;

		this.center = center;
		this.radius = radius;

	}

	set( center, radius ) {

		this.center.copy( center );
		this.radius = radius;

		return this;

	}

	setFromPoints( points, optionalCenter ) {

		const center = this.center;

		if ( optionalCenter !== undefined ) {

			center.copy( optionalCenter );

		} else {

			_box$3.setFromPoints( points ).getCenter( center );

		}

		let maxRadiusSq = 0;

		for ( let i = 0, il = points.length; i < il; i ++ ) {

			maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( points[ i ] ) );

		}

		this.radius = Math.sqrt( maxRadiusSq );

		return this;

	}

	copy( sphere ) {

		this.center.copy( sphere.center );
		this.radius = sphere.radius;

		return this;

	}

	isEmpty() {

		return ( this.radius < 0 );

	}

	makeEmpty() {

		this.center.set( 0, 0, 0 );
		this.radius = - 1;

		return this;

	}

	containsPoint( point ) {

		return ( point.distanceToSquared( this.center ) <= ( this.radius * this.radius ) );

	}

	distanceToPoint( point ) {

		return ( point.distanceTo( this.center ) - this.radius );

	}

	intersectsSphere( sphere ) {

		const radiusSum = this.radius + sphere.radius;

		return sphere.center.distanceToSquared( this.center ) <= ( radiusSum * radiusSum );

	}

	intersectsBox( box ) {

		return box.intersectsSphere( this );

	}

	intersectsPlane( plane ) {

		return Math.abs( plane.distanceToPoint( this.center ) ) <= this.radius;

	}

	clampPoint( point, target ) {

		const deltaLengthSq = this.center.distanceToSquared( point );

		target.copy( point );

		if ( deltaLengthSq > ( this.radius * this.radius ) ) {

			target.sub( this.center ).normalize();
			target.multiplyScalar( this.radius ).add( this.center );

		}

		return target;

	}

	getBoundingBox( target ) {

		if ( this.isEmpty() ) {

			// Empty sphere produces empty bounding box
			target.makeEmpty();
			return target;

		}

		target.set( this.center, this.center );
		target.expandByScalar( this.radius );

		return target;

	}

	applyMatrix4( matrix ) {

		this.center.applyMatrix4( matrix );
		this.radius = this.radius * matrix.getMaxScaleOnAxis();

		return this;

	}

	translate( offset ) {

		this.center.add( offset );

		return this;

	}

	expandByPoint( point ) {

		if ( this.isEmpty() ) {

			this.center.copy( point );

			this.radius = 0;

			return this;

		}

		_v1$6.subVectors( point, this.center );

		const lengthSq = _v1$6.lengthSq();

		if ( lengthSq > ( this.radius * this.radius ) ) {

			// calculate the minimal sphere

			const length = Math.sqrt( lengthSq );

			const delta = ( length - this.radius ) * 0.5;

			this.center.addScaledVector( _v1$6, delta / length );

			this.radius += delta;

		}

		return this;

	}

	union( sphere ) {

		if ( sphere.isEmpty() ) {

			return this;

		}

		if ( this.isEmpty() ) {

			this.copy( sphere );

			return this;

		}

		if ( this.center.equals( sphere.center ) === true ) {

			 this.radius = Math.max( this.radius, sphere.radius );

		} else {

			_v2$3.subVectors( sphere.center, this.center ).setLength( sphere.radius );

			this.expandByPoint( _v1$6.copy( sphere.center ).add( _v2$3 ) );

			this.expandByPoint( _v1$6.copy( sphere.center ).sub( _v2$3 ) );

		}

		return this;

	}

	equals( sphere ) {

		return sphere.center.equals( this.center ) && ( sphere.radius === this.radius );

	}

	clone() {

		return new this.constructor().copy( this );

	}

}

const _vector$a = /*@__PURE__*/ new Vector3();
const _segCenter = /*@__PURE__*/ new Vector3();
const _segDir = /*@__PURE__*/ new Vector3();
const _diff = /*@__PURE__*/ new Vector3();

const _edge1 = /*@__PURE__*/ new Vector3();
const _edge2 = /*@__PURE__*/ new Vector3();
const _normal$1 = /*@__PURE__*/ new Vector3();

class Ray {

	constructor( origin = new Vector3(), direction = new Vector3( 0, 0, - 1 ) ) {

		this.origin = origin;
		this.direction = direction;

	}

	set( origin, direction ) {

		this.origin.copy( origin );
		this.direction.copy( direction );

		return this;

	}

	copy( ray ) {

		this.origin.copy( ray.origin );
		this.direction.copy( ray.direction );

		return this;

	}

	at( t, target ) {

		return target.copy( this.origin ).addScaledVector( this.direction, t );

	}

	lookAt( v ) {

		this.direction.copy( v ).sub( this.origin ).normalize();

		return this;

	}

	recast( t ) {

		this.origin.copy( this.at( t, _vector$a ) );

		return this;

	}

	closestPointToPoint( point, target ) {

		target.subVectors( point, this.origin );

		const directionDistance = target.dot( this.direction );

		if ( directionDistance < 0 ) {

			return target.copy( this.origin );

		}

		return target.copy( this.origin ).addScaledVector( this.direction, directionDistance );

	}

	distanceToPoint( point ) {

		return Math.sqrt( this.distanceSqToPoint( point ) );

	}

	distanceSqToPoint( point ) {

		const directionDistance = _vector$a.subVectors( point, this.origin ).dot( this.direction );

		// point behind the ray

		if ( directionDistance < 0 ) {

			return this.origin.distanceToSquared( point );

		}

		_vector$a.copy( this.origin ).addScaledVector( this.direction, directionDistance );

		return _vector$a.distanceToSquared( point );

	}

	distanceSqToSegment( v0, v1, optionalPointOnRay, optionalPointOnSegment ) {

		// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteDistRaySegment.h
		// It returns the min distance between the ray and the segment
		// defined by v0 and v1
		// It can also set two optional targets :
		// - The closest point on the ray
		// - The closest point on the segment

		_segCenter.copy( v0 ).add( v1 ).multiplyScalar( 0.5 );
		_segDir.copy( v1 ).sub( v0 ).normalize();
		_diff.copy( this.origin ).sub( _segCenter );

		const segExtent = v0.distanceTo( v1 ) * 0.5;
		const a01 = - this.direction.dot( _segDir );
		const b0 = _diff.dot( this.direction );
		const b1 = - _diff.dot( _segDir );
		const c = _diff.lengthSq();
		const det = Math.abs( 1 - a01 * a01 );
		let s0, s1, sqrDist, extDet;

		if ( det > 0 ) {

			// The ray and segment are not parallel.

			s0 = a01 * b1 - b0;
			s1 = a01 * b0 - b1;
			extDet = segExtent * det;

			if ( s0 >= 0 ) {

				if ( s1 >= - extDet ) {

					if ( s1 <= extDet ) {

						// region 0
						// Minimum at interior points of ray and segment.

						const invDet = 1 / det;
						s0 *= invDet;
						s1 *= invDet;
						sqrDist = s0 * ( s0 + a01 * s1 + 2 * b0 ) + s1 * ( a01 * s0 + s1 + 2 * b1 ) + c;

					} else {

						// region 1

						s1 = segExtent;
						s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
						sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

					}

				} else {

					// region 5

					s1 = - segExtent;
					s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

				}

			} else {

				if ( s1 <= - extDet ) {

					// region 4

					s0 = Math.max( 0, - ( - a01 * segExtent + b0 ) );
					s1 = ( s0 > 0 ) ? - segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

				} else if ( s1 <= extDet ) {

					// region 3

					s0 = 0;
					s1 = Math.min( Math.max( - segExtent, - b1 ), segExtent );
					sqrDist = s1 * ( s1 + 2 * b1 ) + c;

				} else {

					// region 2

					s0 = Math.max( 0, - ( a01 * segExtent + b0 ) );
					s1 = ( s0 > 0 ) ? segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

				}

			}

		} else {

			// Ray and segment are parallel.

			s1 = ( a01 > 0 ) ? - segExtent : segExtent;
			s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
			sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

		}

		if ( optionalPointOnRay ) {

			optionalPointOnRay.copy( this.origin ).addScaledVector( this.direction, s0 );

		}

		if ( optionalPointOnSegment ) {

			optionalPointOnSegment.copy( _segCenter ).addScaledVector( _segDir, s1 );

		}

		return sqrDist;

	}

	intersectSphere( sphere, target ) {

		_vector$a.subVectors( sphere.center, this.origin );
		const tca = _vector$a.dot( this.direction );
		const d2 = _vector$a.dot( _vector$a ) - tca * tca;
		const radius2 = sphere.radius * sphere.radius;

		if ( d2 > radius2 ) return null;

		const thc = Math.sqrt( radius2 - d2 );

		// t0 = first intersect point - entrance on front of sphere
		const t0 = tca - thc;

		// t1 = second intersect point - exit point on back of sphere
		const t1 = tca + thc;

		// test to see if t1 is behind the ray - if so, return null
		if ( t1 < 0 ) return null;

		// test to see if t0 is behind the ray:
		// if it is, the ray is inside the sphere, so return the second exit point scaled by t1,
		// in order to always return an intersect point that is in front of the ray.
		if ( t0 < 0 ) return this.at( t1, target );

		// else t0 is in front of the ray, so return the first collision point scaled by t0
		return this.at( t0, target );

	}

	intersectsSphere( sphere ) {

		return this.distanceSqToPoint( sphere.center ) <= ( sphere.radius * sphere.radius );

	}

	distanceToPlane( plane ) {

		const denominator = plane.normal.dot( this.direction );

		if ( denominator === 0 ) {

			// line is coplanar, return origin
			if ( plane.distanceToPoint( this.origin ) === 0 ) {

				return 0;

			}

			// Null is preferable to undefined since undefined means.... it is undefined

			return null;

		}

		const t = - ( this.origin.dot( plane.normal ) + plane.constant ) / denominator;

		// Return if the ray never intersects the plane

		return t >= 0 ? t : null;

	}

	intersectPlane( plane, target ) {

		const t = this.distanceToPlane( plane );

		if ( t === null ) {

			return null;

		}

		return this.at( t, target );

	}

	intersectsPlane( plane ) {

		// check if the ray lies on the plane first

		const distToPoint = plane.distanceToPoint( this.origin );

		if ( distToPoint === 0 ) {

			return true;

		}

		const denominator = plane.normal.dot( this.direction );

		if ( denominator * distToPoint < 0 ) {

			return true;

		}

		// ray origin is behind the plane (and is pointing behind it)

		return false;

	}

	intersectBox( box, target ) {

		let tmin, tmax, tymin, tymax, tzmin, tzmax;

		const invdirx = 1 / this.direction.x,
			invdiry = 1 / this.direction.y,
			invdirz = 1 / this.direction.z;

		const origin = this.origin;

		if ( invdirx >= 0 ) {

			tmin = ( box.min.x - origin.x ) * invdirx;
			tmax = ( box.max.x - origin.x ) * invdirx;

		} else {

			tmin = ( box.max.x - origin.x ) * invdirx;
			tmax = ( box.min.x - origin.x ) * invdirx;

		}

		if ( invdiry >= 0 ) {

			tymin = ( box.min.y - origin.y ) * invdiry;
			tymax = ( box.max.y - origin.y ) * invdiry;

		} else {

			tymin = ( box.max.y - origin.y ) * invdiry;
			tymax = ( box.min.y - origin.y ) * invdiry;

		}

		if ( ( tmin > tymax ) || ( tymin > tmax ) ) return null;

		if ( tymin > tmin || isNaN( tmin ) ) tmin = tymin;

		if ( tymax < tmax || isNaN( tmax ) ) tmax = tymax;

		if ( invdirz >= 0 ) {

			tzmin = ( box.min.z - origin.z ) * invdirz;
			tzmax = ( box.max.z - origin.z ) * invdirz;

		} else {

			tzmin = ( box.max.z - origin.z ) * invdirz;
			tzmax = ( box.min.z - origin.z ) * invdirz;

		}

		if ( ( tmin > tzmax ) || ( tzmin > tmax ) ) return null;

		if ( tzmin > tmin || tmin !== tmin ) tmin = tzmin;

		if ( tzmax < tmax || tmax !== tmax ) tmax = tzmax;

		//return point closest to the ray (positive side)

		if ( tmax < 0 ) return null;

		return this.at( tmin >= 0 ? tmin : tmax, target );

	}

	intersectsBox( box ) {

		return this.intersectBox( box, _vector$a ) !== null;

	}

	intersectTriangle( a, b, c, backfaceCulling, target ) {

		// Compute the offset origin, edges, and normal.

		// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h

		_edge1.subVectors( b, a );
		_edge2.subVectors( c, a );
		_normal$1.crossVectors( _edge1, _edge2 );

		// Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
		// E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
		//   |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
		//   |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
		//   |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)
		let DdN = this.direction.dot( _normal$1 );
		let sign;

		if ( DdN > 0 ) {

			if ( backfaceCulling ) return null;
			sign = 1;

		} else if ( DdN < 0 ) {

			sign = - 1;
			DdN = - DdN;

		} else {

			return null;

		}

		_diff.subVectors( this.origin, a );
		const DdQxE2 = sign * this.direction.dot( _edge2.crossVectors( _diff, _edge2 ) );

		// b1 < 0, no intersection
		if ( DdQxE2 < 0 ) {

			return null;

		}

		const DdE1xQ = sign * this.direction.dot( _edge1.cross( _diff ) );

		// b2 < 0, no intersection
		if ( DdE1xQ < 0 ) {

			return null;

		}

		// b1+b2 > 1, no intersection
		if ( DdQxE2 + DdE1xQ > DdN ) {

			return null;

		}

		// Line intersects triangle, check if ray does.
		const QdN = - sign * _diff.dot( _normal$1 );

		// t < 0, no intersection
		if ( QdN < 0 ) {

			return null;

		}

		// Ray intersects triangle.
		return this.at( QdN / DdN, target );

	}

	applyMatrix4( matrix4 ) {

		this.origin.applyMatrix4( matrix4 );
		this.direction.transformDirection( matrix4 );

		return this;

	}

	equals( ray ) {

		return ray.origin.equals( this.origin ) && ray.direction.equals( this.direction );

	}

	clone() {

		return new this.constructor().copy( this );

	}

}

class Matrix4 {

	constructor( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

		Matrix4.prototype.isMatrix4 = true;

		this.elements = [

			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		];

		if ( n11 !== undefined ) {

			this.set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 );

		}

	}

	set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

		const te = this.elements;

		te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
		te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
		te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
		te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

		return this;

	}

	identity() {

		this.set(

			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	clone() {

		return new Matrix4().fromArray( this.elements );

	}

	copy( m ) {

		const te = this.elements;
		const me = m.elements;

		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ]; te[ 3 ] = me[ 3 ];
		te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ]; te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ];
		te[ 8 ] = me[ 8 ]; te[ 9 ] = me[ 9 ]; te[ 10 ] = me[ 10 ]; te[ 11 ] = me[ 11 ];
		te[ 12 ] = me[ 12 ]; te[ 13 ] = me[ 13 ]; te[ 14 ] = me[ 14 ]; te[ 15 ] = me[ 15 ];

		return this;

	}

	copyPosition( m ) {

		const te = this.elements, me = m.elements;

		te[ 12 ] = me[ 12 ];
		te[ 13 ] = me[ 13 ];
		te[ 14 ] = me[ 14 ];

		return this;

	}

	setFromMatrix3( m ) {

		const me = m.elements;

		this.set(

			me[ 0 ], me[ 3 ], me[ 6 ], 0,
			me[ 1 ], me[ 4 ], me[ 7 ], 0,
			me[ 2 ], me[ 5 ], me[ 8 ], 0,
			0, 0, 0, 1

		);

		return this;

	}

	extractBasis( xAxis, yAxis, zAxis ) {

		xAxis.setFromMatrixColumn( this, 0 );
		yAxis.setFromMatrixColumn( this, 1 );
		zAxis.setFromMatrixColumn( this, 2 );

		return this;

	}

	makeBasis( xAxis, yAxis, zAxis ) {

		this.set(
			xAxis.x, yAxis.x, zAxis.x, 0,
			xAxis.y, yAxis.y, zAxis.y, 0,
			xAxis.z, yAxis.z, zAxis.z, 0,
			0, 0, 0, 1
		);

		return this;

	}

	extractRotation( m ) {

		// this method does not support reflection matrices

		const te = this.elements;
		const me = m.elements;

		const scaleX = 1 / _v1$5.setFromMatrixColumn( m, 0 ).length();
		const scaleY = 1 / _v1$5.setFromMatrixColumn( m, 1 ).length();
		const scaleZ = 1 / _v1$5.setFromMatrixColumn( m, 2 ).length();

		te[ 0 ] = me[ 0 ] * scaleX;
		te[ 1 ] = me[ 1 ] * scaleX;
		te[ 2 ] = me[ 2 ] * scaleX;
		te[ 3 ] = 0;

		te[ 4 ] = me[ 4 ] * scaleY;
		te[ 5 ] = me[ 5 ] * scaleY;
		te[ 6 ] = me[ 6 ] * scaleY;
		te[ 7 ] = 0;

		te[ 8 ] = me[ 8 ] * scaleZ;
		te[ 9 ] = me[ 9 ] * scaleZ;
		te[ 10 ] = me[ 10 ] * scaleZ;
		te[ 11 ] = 0;

		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	}

	makeRotationFromEuler( euler ) {

		const te = this.elements;

		const x = euler.x, y = euler.y, z = euler.z;
		const a = Math.cos( x ), b = Math.sin( x );
		const c = Math.cos( y ), d = Math.sin( y );
		const e = Math.cos( z ), f = Math.sin( z );

		if ( euler.order === 'XYZ' ) {

			const ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = - c * f;
			te[ 8 ] = d;

			te[ 1 ] = af + be * d;
			te[ 5 ] = ae - bf * d;
			te[ 9 ] = - b * c;

			te[ 2 ] = bf - ae * d;
			te[ 6 ] = be + af * d;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YXZ' ) {

			const ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce + df * b;
			te[ 4 ] = de * b - cf;
			te[ 8 ] = a * d;

			te[ 1 ] = a * f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b;

			te[ 2 ] = cf * b - de;
			te[ 6 ] = df + ce * b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZXY' ) {

			const ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce - df * b;
			te[ 4 ] = - a * f;
			te[ 8 ] = de + cf * b;

			te[ 1 ] = cf + de * b;
			te[ 5 ] = a * e;
			te[ 9 ] = df - ce * b;

			te[ 2 ] = - a * d;
			te[ 6 ] = b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZYX' ) {

			const ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = be * d - af;
			te[ 8 ] = ae * d + bf;

			te[ 1 ] = c * f;
			te[ 5 ] = bf * d + ae;
			te[ 9 ] = af * d - be;

			te[ 2 ] = - d;
			te[ 6 ] = b * c;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YZX' ) {

			const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = bd - ac * f;
			te[ 8 ] = bc * f + ad;

			te[ 1 ] = f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b * e;

			te[ 2 ] = - d * e;
			te[ 6 ] = ad * f + bc;
			te[ 10 ] = ac - bd * f;

		} else if ( euler.order === 'XZY' ) {

			const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = - f;
			te[ 8 ] = d * e;

			te[ 1 ] = ac * f + bd;
			te[ 5 ] = a * e;
			te[ 9 ] = ad * f - bc;

			te[ 2 ] = bc * f - ad;
			te[ 6 ] = b * e;
			te[ 10 ] = bd * f + ac;

		}

		// bottom row
		te[ 3 ] = 0;
		te[ 7 ] = 0;
		te[ 11 ] = 0;

		// last column
		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	}

	makeRotationFromQuaternion( q ) {

		return this.compose( _zero, q, _one );

	}

	lookAt( eye, target, up ) {

		const te = this.elements;

		_z.subVectors( eye, target );

		if ( _z.lengthSq() === 0 ) {

			// eye and target are in the same position

			_z.z = 1;

		}

		_z.normalize();
		_x.crossVectors( up, _z );

		if ( _x.lengthSq() === 0 ) {

			// up and z are parallel

			if ( Math.abs( up.z ) === 1 ) {

				_z.x += 0.0001;

			} else {

				_z.z += 0.0001;

			}

			_z.normalize();
			_x.crossVectors( up, _z );

		}

		_x.normalize();
		_y.crossVectors( _z, _x );

		te[ 0 ] = _x.x; te[ 4 ] = _y.x; te[ 8 ] = _z.x;
		te[ 1 ] = _x.y; te[ 5 ] = _y.y; te[ 9 ] = _z.y;
		te[ 2 ] = _x.z; te[ 6 ] = _y.z; te[ 10 ] = _z.z;

		return this;

	}

	multiply( m ) {

		return this.multiplyMatrices( this, m );

	}

	premultiply( m ) {

		return this.multiplyMatrices( m, this );

	}

	multiplyMatrices( a, b ) {

		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;

		const a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
		const a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
		const a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
		const a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

		const b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
		const b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
		const b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
		const b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

		te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

		return this;

	}

	multiplyScalar( s ) {

		const te = this.elements;

		te[ 0 ] *= s; te[ 4 ] *= s; te[ 8 ] *= s; te[ 12 ] *= s;
		te[ 1 ] *= s; te[ 5 ] *= s; te[ 9 ] *= s; te[ 13 ] *= s;
		te[ 2 ] *= s; te[ 6 ] *= s; te[ 10 ] *= s; te[ 14 ] *= s;
		te[ 3 ] *= s; te[ 7 ] *= s; te[ 11 ] *= s; te[ 15 ] *= s;

		return this;

	}

	determinant() {

		const te = this.elements;

		const n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
		const n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
		const n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
		const n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

		//TODO: make this more efficient
		//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

		return (
			n41 * (
				+ n14 * n23 * n32
				 - n13 * n24 * n32
				 - n14 * n22 * n33
				 + n12 * n24 * n33
				 + n13 * n22 * n34
				 - n12 * n23 * n34
			) +
			n42 * (
				+ n11 * n23 * n34
				 - n11 * n24 * n33
				 + n14 * n21 * n33
				 - n13 * n21 * n34
				 + n13 * n24 * n31
				 - n14 * n23 * n31
			) +
			n43 * (
				+ n11 * n24 * n32
				 - n11 * n22 * n34
				 - n14 * n21 * n32
				 + n12 * n21 * n34
				 + n14 * n22 * n31
				 - n12 * n24 * n31
			) +
			n44 * (
				- n13 * n22 * n31
				 - n11 * n23 * n32
				 + n11 * n22 * n33
				 + n13 * n21 * n32
				 - n12 * n21 * n33
				 + n12 * n23 * n31
			)

		);

	}

	transpose() {

		const te = this.elements;
		let tmp;

		tmp = te[ 1 ]; te[ 1 ] = te[ 4 ]; te[ 4 ] = tmp;
		tmp = te[ 2 ]; te[ 2 ] = te[ 8 ]; te[ 8 ] = tmp;
		tmp = te[ 6 ]; te[ 6 ] = te[ 9 ]; te[ 9 ] = tmp;

		tmp = te[ 3 ]; te[ 3 ] = te[ 12 ]; te[ 12 ] = tmp;
		tmp = te[ 7 ]; te[ 7 ] = te[ 13 ]; te[ 13 ] = tmp;
		tmp = te[ 11 ]; te[ 11 ] = te[ 14 ]; te[ 14 ] = tmp;

		return this;

	}

	setPosition( x, y, z ) {

		const te = this.elements;

		if ( x.isVector3 ) {

			te[ 12 ] = x.x;
			te[ 13 ] = x.y;
			te[ 14 ] = x.z;

		} else {

			te[ 12 ] = x;
			te[ 13 ] = y;
			te[ 14 ] = z;

		}

		return this;

	}

	invert() {

		// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
		const te = this.elements,

			n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ], n41 = te[ 3 ],
			n12 = te[ 4 ], n22 = te[ 5 ], n32 = te[ 6 ], n42 = te[ 7 ],
			n13 = te[ 8 ], n23 = te[ 9 ], n33 = te[ 10 ], n43 = te[ 11 ],
			n14 = te[ 12 ], n24 = te[ 13 ], n34 = te[ 14 ], n44 = te[ 15 ],

			t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
			t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
			t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
			t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

		const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

		if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );

		const detInv = 1 / det;

		te[ 0 ] = t11 * detInv;
		te[ 1 ] = ( n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44 ) * detInv;
		te[ 2 ] = ( n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44 ) * detInv;
		te[ 3 ] = ( n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43 ) * detInv;

		te[ 4 ] = t12 * detInv;
		te[ 5 ] = ( n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44 ) * detInv;
		te[ 6 ] = ( n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44 ) * detInv;
		te[ 7 ] = ( n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43 ) * detInv;

		te[ 8 ] = t13 * detInv;
		te[ 9 ] = ( n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44 ) * detInv;
		te[ 10 ] = ( n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44 ) * detInv;
		te[ 11 ] = ( n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43 ) * detInv;

		te[ 12 ] = t14 * detInv;
		te[ 13 ] = ( n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34 ) * detInv;
		te[ 14 ] = ( n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34 ) * detInv;
		te[ 15 ] = ( n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33 ) * detInv;

		return this;

	}

	scale( v ) {

		const te = this.elements;
		const x = v.x, y = v.y, z = v.z;

		te[ 0 ] *= x; te[ 4 ] *= y; te[ 8 ] *= z;
		te[ 1 ] *= x; te[ 5 ] *= y; te[ 9 ] *= z;
		te[ 2 ] *= x; te[ 6 ] *= y; te[ 10 ] *= z;
		te[ 3 ] *= x; te[ 7 ] *= y; te[ 11 ] *= z;

		return this;

	}

	getMaxScaleOnAxis() {

		const te = this.elements;

		const scaleXSq = te[ 0 ] * te[ 0 ] + te[ 1 ] * te[ 1 ] + te[ 2 ] * te[ 2 ];
		const scaleYSq = te[ 4 ] * te[ 4 ] + te[ 5 ] * te[ 5 ] + te[ 6 ] * te[ 6 ];
		const scaleZSq = te[ 8 ] * te[ 8 ] + te[ 9 ] * te[ 9 ] + te[ 10 ] * te[ 10 ];

		return Math.sqrt( Math.max( scaleXSq, scaleYSq, scaleZSq ) );

	}

	makeTranslation( x, y, z ) {

		if ( x.isVector3 ) {

			this.set(

				1, 0, 0, x.x,
				0, 1, 0, x.y,
				0, 0, 1, x.z,
				0, 0, 0, 1

			);

		} else {

			this.set(

				1, 0, 0, x,
				0, 1, 0, y,
				0, 0, 1, z,
				0, 0, 0, 1

			);

		}

		return this;

	}

	makeRotationX( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			1, 0, 0, 0,
			0, c, - s, 0,
			0, s, c, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeRotationY( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			 c, 0, s, 0,
			 0, 1, 0, 0,
			- s, 0, c, 0,
			 0, 0, 0, 1

		);

		return this;

	}

	makeRotationZ( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			c, - s, 0, 0,
			s, c, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeRotationAxis( axis, angle ) {

		// Based on http://www.gamedev.net/reference/articles/article1199.asp

		const c = Math.cos( angle );
		const s = Math.sin( angle );
		const t = 1 - c;
		const x = axis.x, y = axis.y, z = axis.z;
		const tx = t * x, ty = t * y;

		this.set(

			tx * x + c, tx * y - s * z, tx * z + s * y, 0,
			tx * y + s * z, ty * y + c, ty * z - s * x, 0,
			tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeScale( x, y, z ) {

		this.set(

			x, 0, 0, 0,
			0, y, 0, 0,
			0, 0, z, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeShear( xy, xz, yx, yz, zx, zy ) {

		this.set(

			1, yx, zx, 0,
			xy, 1, zy, 0,
			xz, yz, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	compose( position, quaternion, scale ) {

		const te = this.elements;

		const x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
		const x2 = x + x,	y2 = y + y, z2 = z + z;
		const xx = x * x2, xy = x * y2, xz = x * z2;
		const yy = y * y2, yz = y * z2, zz = z * z2;
		const wx = w * x2, wy = w * y2, wz = w * z2;

		const sx = scale.x, sy = scale.y, sz = scale.z;

		te[ 0 ] = ( 1 - ( yy + zz ) ) * sx;
		te[ 1 ] = ( xy + wz ) * sx;
		te[ 2 ] = ( xz - wy ) * sx;
		te[ 3 ] = 0;

		te[ 4 ] = ( xy - wz ) * sy;
		te[ 5 ] = ( 1 - ( xx + zz ) ) * sy;
		te[ 6 ] = ( yz + wx ) * sy;
		te[ 7 ] = 0;

		te[ 8 ] = ( xz + wy ) * sz;
		te[ 9 ] = ( yz - wx ) * sz;
		te[ 10 ] = ( 1 - ( xx + yy ) ) * sz;
		te[ 11 ] = 0;

		te[ 12 ] = position.x;
		te[ 13 ] = position.y;
		te[ 14 ] = position.z;
		te[ 15 ] = 1;

		return this;

	}

	decompose( position, quaternion, scale ) {

		const te = this.elements;

		let sx = _v1$5.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
		const sy = _v1$5.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
		const sz = _v1$5.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

		// if determine is negative, we need to invert one scale
		const det = this.determinant();
		if ( det < 0 ) sx = - sx;

		position.x = te[ 12 ];
		position.y = te[ 13 ];
		position.z = te[ 14 ];

		// scale the rotation part
		_m1$4.copy( this );

		const invSX = 1 / sx;
		const invSY = 1 / sy;
		const invSZ = 1 / sz;

		_m1$4.elements[ 0 ] *= invSX;
		_m1$4.elements[ 1 ] *= invSX;
		_m1$4.elements[ 2 ] *= invSX;

		_m1$4.elements[ 4 ] *= invSY;
		_m1$4.elements[ 5 ] *= invSY;
		_m1$4.elements[ 6 ] *= invSY;

		_m1$4.elements[ 8 ] *= invSZ;
		_m1$4.elements[ 9 ] *= invSZ;
		_m1$4.elements[ 10 ] *= invSZ;

		quaternion.setFromRotationMatrix( _m1$4 );

		scale.x = sx;
		scale.y = sy;
		scale.z = sz;

		return this;

	}

	makePerspective( left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem ) {

		const te = this.elements;
		const x = 2 * near / ( right - left );
		const y = 2 * near / ( top - bottom );

		const a = ( right + left ) / ( right - left );
		const b = ( top + bottom ) / ( top - bottom );

		let c, d;

		if ( coordinateSystem === WebGLCoordinateSystem ) {

			c = - ( far + near ) / ( far - near );
			d = ( - 2 * far * near ) / ( far - near );

		} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

			c = - far / ( far - near );
			d = ( - far * near ) / ( far - near );

		} else {

			throw new Error( 'THREE.Matrix4.makePerspective(): Invalid coordinate system: ' + coordinateSystem );

		}

		te[ 0 ] = x;	te[ 4 ] = 0;	te[ 8 ] = a; 	te[ 12 ] = 0;
		te[ 1 ] = 0;	te[ 5 ] = y;	te[ 9 ] = b; 	te[ 13 ] = 0;
		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = c; 	te[ 14 ] = d;
		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = - 1;	te[ 15 ] = 0;

		return this;

	}

	makeOrthographic( left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem ) {

		const te = this.elements;
		const w = 1.0 / ( right - left );
		const h = 1.0 / ( top - bottom );
		const p = 1.0 / ( far - near );

		const x = ( right + left ) * w;
		const y = ( top + bottom ) * h;

		let z, zInv;

		if ( coordinateSystem === WebGLCoordinateSystem ) {

			z = ( far + near ) * p;
			zInv = - 2 * p;

		} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

			z = near * p;
			zInv = - 1 * p;

		} else {

			throw new Error( 'THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ' + coordinateSystem );

		}

		te[ 0 ] = 2 * w;	te[ 4 ] = 0;		te[ 8 ] = 0; 		te[ 12 ] = - x;
		te[ 1 ] = 0; 		te[ 5 ] = 2 * h;	te[ 9 ] = 0; 		te[ 13 ] = - y;
		te[ 2 ] = 0; 		te[ 6 ] = 0;		te[ 10 ] = zInv;	te[ 14 ] = - z;
		te[ 3 ] = 0; 		te[ 7 ] = 0;		te[ 11 ] = 0;		te[ 15 ] = 1;

		return this;

	}

	equals( matrix ) {

		const te = this.elements;
		const me = matrix.elements;

		for ( let i = 0; i < 16; i ++ ) {

			if ( te[ i ] !== me[ i ] ) return false;

		}

		return true;

	}

	fromArray( array, offset = 0 ) {

		for ( let i = 0; i < 16; i ++ ) {

			this.elements[ i ] = array[ i + offset ];

		}

		return this;

	}

	toArray( array = [], offset = 0 ) {

		const te = this.elements;

		array[ offset ] = te[ 0 ];
		array[ offset + 1 ] = te[ 1 ];
		array[ offset + 2 ] = te[ 2 ];
		array[ offset + 3 ] = te[ 3 ];

		array[ offset + 4 ] = te[ 4 ];
		array[ offset + 5 ] = te[ 5 ];
		array[ offset + 6 ] = te[ 6 ];
		array[ offset + 7 ] = te[ 7 ];

		array[ offset + 8 ] = te[ 8 ];
		array[ offset + 9 ] = te[ 9 ];
		array[ offset + 10 ] = te[ 10 ];
		array[ offset + 11 ] = te[ 11 ];

		array[ offset + 12 ] = te[ 12 ];
		array[ offset + 13 ] = te[ 13 ];
		array[ offset + 14 ] = te[ 14 ];
		array[ offset + 15 ] = te[ 15 ];

		return array;

	}

}

const _v1$5 = /*@__PURE__*/ new Vector3();
const _m1$4 = /*@__PURE__*/ new Matrix4();
const _zero = /*@__PURE__*/ new Vector3( 0, 0, 0 );
const _one = /*@__PURE__*/ new Vector3( 1, 1, 1 );
const _x = /*@__PURE__*/ new Vector3();
const _y = /*@__PURE__*/ new Vector3();
const _z = /*@__PURE__*/ new Vector3();

const _matrix$2 = /*@__PURE__*/ new Matrix4();
const _quaternion$3 = /*@__PURE__*/ new Quaternion();

class Euler {

	constructor( x = 0, y = 0, z = 0, order = Euler.DEFAULT_ORDER ) {

		this.isEuler = true;

		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;

	}

	get x() {

		return this._x;

	}

	set x( value ) {

		this._x = value;
		this._onChangeCallback();

	}

	get y() {

		return this._y;

	}

	set y( value ) {

		this._y = value;
		this._onChangeCallback();

	}

	get z() {

		return this._z;

	}

	set z( value ) {

		this._z = value;
		this._onChangeCallback();

	}

	get order() {

		return this._order;

	}

	set order( value ) {

		this._order = value;
		this._onChangeCallback();

	}

	set( x, y, z, order = this._order ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;

		this._onChangeCallback();

		return this;

	}

	clone() {

		return new this.constructor( this._x, this._y, this._z, this._order );

	}

	copy( euler ) {

		this._x = euler._x;
		this._y = euler._y;
		this._z = euler._z;
		this._order = euler._order;

		this._onChangeCallback();

		return this;

	}

	setFromRotationMatrix( m, order = this._order, update = true ) {

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		const te = m.elements;
		const m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ];
		const m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ];
		const m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

		switch ( order ) {

			case 'XYZ':

				this._y = Math.asin( clamp( m13, - 1, 1 ) );

				if ( Math.abs( m13 ) < 0.9999999 ) {

					this._x = Math.atan2( - m23, m33 );
					this._z = Math.atan2( - m12, m11 );

				} else {

					this._x = Math.atan2( m32, m22 );
					this._z = 0;

				}

				break;

			case 'YXZ':

				this._x = Math.asin( - clamp( m23, - 1, 1 ) );

				if ( Math.abs( m23 ) < 0.9999999 ) {

					this._y = Math.atan2( m13, m33 );
					this._z = Math.atan2( m21, m22 );

				} else {

					this._y = Math.atan2( - m31, m11 );
					this._z = 0;

				}

				break;

			case 'ZXY':

				this._x = Math.asin( clamp( m32, - 1, 1 ) );

				if ( Math.abs( m32 ) < 0.9999999 ) {

					this._y = Math.atan2( - m31, m33 );
					this._z = Math.atan2( - m12, m22 );

				} else {

					this._y = 0;
					this._z = Math.atan2( m21, m11 );

				}

				break;

			case 'ZYX':

				this._y = Math.asin( - clamp( m31, - 1, 1 ) );

				if ( Math.abs( m31 ) < 0.9999999 ) {

					this._x = Math.atan2( m32, m33 );
					this._z = Math.atan2( m21, m11 );

				} else {

					this._x = 0;
					this._z = Math.atan2( - m12, m22 );

				}

				break;

			case 'YZX':

				this._z = Math.asin( clamp( m21, - 1, 1 ) );

				if ( Math.abs( m21 ) < 0.9999999 ) {

					this._x = Math.atan2( - m23, m22 );
					this._y = Math.atan2( - m31, m11 );

				} else {

					this._x = 0;
					this._y = Math.atan2( m13, m33 );

				}

				break;

			case 'XZY':

				this._z = Math.asin( - clamp( m12, - 1, 1 ) );

				if ( Math.abs( m12 ) < 0.9999999 ) {

					this._x = Math.atan2( m32, m22 );
					this._y = Math.atan2( m13, m11 );

				} else {

					this._x = Math.atan2( - m23, m33 );
					this._y = 0;

				}

				break;

			default:

				console.warn( 'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + order );

		}

		this._order = order;

		if ( update === true ) this._onChangeCallback();

		return this;

	}

	setFromQuaternion( q, order, update ) {

		_matrix$2.makeRotationFromQuaternion( q );

		return this.setFromRotationMatrix( _matrix$2, order, update );

	}

	setFromVector3( v, order = this._order ) {

		return this.set( v.x, v.y, v.z, order );

	}

	reorder( newOrder ) {

		// WARNING: this discards revolution information -bhouston

		_quaternion$3.setFromEuler( this );

		return this.setFromQuaternion( _quaternion$3, newOrder );

	}

	equals( euler ) {

		return ( euler._x === this._x ) && ( euler._y === this._y ) && ( euler._z === this._z ) && ( euler._order === this._order );

	}

	fromArray( array ) {

		this._x = array[ 0 ];
		this._y = array[ 1 ];
		this._z = array[ 2 ];
		if ( array[ 3 ] !== undefined ) this._order = array[ 3 ];

		this._onChangeCallback();

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this._x;
		array[ offset + 1 ] = this._y;
		array[ offset + 2 ] = this._z;
		array[ offset + 3 ] = this._order;

		return array;

	}

	_onChange( callback ) {

		this._onChangeCallback = callback;

		return this;

	}

	_onChangeCallback() {}

	*[ Symbol.iterator ]() {

		yield this._x;
		yield this._y;
		yield this._z;
		yield this._order;

	}

}

Euler.DEFAULT_ORDER = 'XYZ';

class Layers {

	constructor() {

		this.mask = 1 | 0;

	}

	set( channel ) {

		this.mask = ( 1 << channel | 0 ) >>> 0;

	}

	enable( channel ) {

		this.mask |= 1 << channel | 0;

	}

	enableAll() {

		this.mask = 0xffffffff | 0;

	}

	toggle( channel ) {

		this.mask ^= 1 << channel | 0;

	}

	disable( channel ) {

		this.mask &= ~ ( 1 << channel | 0 );

	}

	disableAll() {

		this.mask = 0;

	}

	test( layers ) {

		return ( this.mask & layers.mask ) !== 0;

	}

	isEnabled( channel ) {

		return ( this.mask & ( 1 << channel | 0 ) ) !== 0;

	}

}

let _object3DId = 0;

const _v1$4 = /*@__PURE__*/ new Vector3();
const _q1 = /*@__PURE__*/ new Quaternion();
const _m1$3 = /*@__PURE__*/ new Matrix4();
const _target = /*@__PURE__*/ new Vector3();

const _position$3 = /*@__PURE__*/ new Vector3();
const _scale$2 = /*@__PURE__*/ new Vector3();
const _quaternion$2 = /*@__PURE__*/ new Quaternion();

const _xAxis = /*@__PURE__*/ new Vector3( 1, 0, 0 );
const _yAxis = /*@__PURE__*/ new Vector3( 0, 1, 0 );
const _zAxis = /*@__PURE__*/ new Vector3( 0, 0, 1 );

const _addedEvent = { type: 'added' };
const _removedEvent = { type: 'removed' };

const _childaddedEvent = { type: 'childadded', child: null };
const _childremovedEvent = { type: 'childremoved', child: null };

class Object3D extends EventDispatcher {

	constructor() {

		super();

		this.isObject3D = true;

		Object.defineProperty( this, 'id', { value: _object3DId ++ } );

		this.uuid = generateUUID();

		this.name = '';
		this.type = 'Object3D';

		this.parent = null;
		this.children = [];

		this.up = Object3D.DEFAULT_UP.clone();

		const position = new Vector3();
		const rotation = new Euler();
		const quaternion = new Quaternion();
		const scale = new Vector3( 1, 1, 1 );

		function onRotationChange() {

			quaternion.setFromEuler( rotation, false );

		}

		function onQuaternionChange() {

			rotation.setFromQuaternion( quaternion, undefined, false );

		}

		rotation._onChange( onRotationChange );
		quaternion._onChange( onQuaternionChange );

		Object.defineProperties( this, {
			position: {
				configurable: true,
				enumerable: true,
				value: position
			},
			rotation: {
				configurable: true,
				enumerable: true,
				value: rotation
			},
			quaternion: {
				configurable: true,
				enumerable: true,
				value: quaternion
			},
			scale: {
				configurable: true,
				enumerable: true,
				value: scale
			},
			modelViewMatrix: {
				value: new Matrix4()
			},
			normalMatrix: {
				value: new Matrix3()
			}
		} );

		this.matrix = new Matrix4();
		this.matrixWorld = new Matrix4();

		this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE;

		this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE; // checked by the renderer
		this.matrixWorldNeedsUpdate = false;

		this.layers = new Layers();
		this.visible = true;

		this.castShadow = false;
		this.receiveShadow = false;

		this.frustumCulled = true;
		this.renderOrder = 0;

		this.animations = [];

		this.userData = {};

	}

	onBeforeShadow( /* renderer, object, camera, shadowCamera, geometry, depthMaterial, group */ ) {}

	onAfterShadow( /* renderer, object, camera, shadowCamera, geometry, depthMaterial, group */ ) {}

	onBeforeRender( /* renderer, scene, camera, geometry, material, group */ ) {}

	onAfterRender( /* renderer, scene, camera, geometry, material, group */ ) {}

	applyMatrix4( matrix ) {

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		this.matrix.premultiply( matrix );

		this.matrix.decompose( this.position, this.quaternion, this.scale );

	}

	applyQuaternion( q ) {

		this.quaternion.premultiply( q );

		return this;

	}

	setRotationFromAxisAngle( axis, angle ) {

		// assumes axis is normalized

		this.quaternion.setFromAxisAngle( axis, angle );

	}

	setRotationFromEuler( euler ) {

		this.quaternion.setFromEuler( euler, true );

	}

	setRotationFromMatrix( m ) {

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		this.quaternion.setFromRotationMatrix( m );

	}

	setRotationFromQuaternion( q ) {

		// assumes q is normalized

		this.quaternion.copy( q );

	}

	rotateOnAxis( axis, angle ) {

		// rotate object on axis in object space
		// axis is assumed to be normalized

		_q1.setFromAxisAngle( axis, angle );

		this.quaternion.multiply( _q1 );

		return this;

	}

	rotateOnWorldAxis( axis, angle ) {

		// rotate object on axis in world space
		// axis is assumed to be normalized
		// method assumes no rotated parent

		_q1.setFromAxisAngle( axis, angle );

		this.quaternion.premultiply( _q1 );

		return this;

	}

	rotateX( angle ) {

		return this.rotateOnAxis( _xAxis, angle );

	}

	rotateY( angle ) {

		return this.rotateOnAxis( _yAxis, angle );

	}

	rotateZ( angle ) {

		return this.rotateOnAxis( _zAxis, angle );

	}

	translateOnAxis( axis, distance ) {

		// translate object by distance along axis in object space
		// axis is assumed to be normalized

		_v1$4.copy( axis ).applyQuaternion( this.quaternion );

		this.position.add( _v1$4.multiplyScalar( distance ) );

		return this;

	}

	translateX( distance ) {

		return this.translateOnAxis( _xAxis, distance );

	}

	translateY( distance ) {

		return this.translateOnAxis( _yAxis, distance );

	}

	translateZ( distance ) {

		return this.translateOnAxis( _zAxis, distance );

	}

	localToWorld( vector ) {

		this.updateWorldMatrix( true, false );

		return vector.applyMatrix4( this.matrixWorld );

	}

	worldToLocal( vector ) {

		this.updateWorldMatrix( true, false );

		return vector.applyMatrix4( _m1$3.copy( this.matrixWorld ).invert() );

	}

	lookAt( x, y, z ) {

		// This method does not support objects having non-uniformly-scaled parent(s)

		if ( x.isVector3 ) {

			_target.copy( x );

		} else {

			_target.set( x, y, z );

		}

		const parent = this.parent;

		this.updateWorldMatrix( true, false );

		_position$3.setFromMatrixPosition( this.matrixWorld );

		if ( this.isCamera || this.isLight ) {

			_m1$3.lookAt( _position$3, _target, this.up );

		} else {

			_m1$3.lookAt( _target, _position$3, this.up );

		}

		this.quaternion.setFromRotationMatrix( _m1$3 );

		if ( parent ) {

			_m1$3.extractRotation( parent.matrixWorld );
			_q1.setFromRotationMatrix( _m1$3 );
			this.quaternion.premultiply( _q1.invert() );

		}

	}

	add( object ) {

		if ( arguments.length > 1 ) {

			for ( let i = 0; i < arguments.length; i ++ ) {

				this.add( arguments[ i ] );

			}

			return this;

		}

		if ( object === this ) {

			console.error( 'THREE.Object3D.add: object can\'t be added as a child of itself.', object );
			return this;

		}

		if ( object && object.isObject3D ) {

			object.removeFromParent();
			object.parent = this;
			this.children.push( object );

			object.dispatchEvent( _addedEvent );

			_childaddedEvent.child = object;
			this.dispatchEvent( _childaddedEvent );
			_childaddedEvent.child = null;

		} else {

			console.error( 'THREE.Object3D.add: object not an instance of THREE.Object3D.', object );

		}

		return this;

	}

	remove( object ) {

		if ( arguments.length > 1 ) {

			for ( let i = 0; i < arguments.length; i ++ ) {

				this.remove( arguments[ i ] );

			}

			return this;

		}

		const index = this.children.indexOf( object );

		if ( index !== - 1 ) {

			object.parent = null;
			this.children.splice( index, 1 );

			object.dispatchEvent( _removedEvent );

			_childremovedEvent.child = object;
			this.dispatchEvent( _childremovedEvent );
			_childremovedEvent.child = null;

		}

		return this;

	}

	removeFromParent() {

		const parent = this.parent;

		if ( parent !== null ) {

			parent.remove( this );

		}

		return this;

	}

	clear() {

		return this.remove( ... this.children );

	}

	attach( object ) {

		// adds object as a child of this, while maintaining the object's world transform

		// Note: This method does not support scene graphs having non-uniformly-scaled nodes(s)

		this.updateWorldMatrix( true, false );

		_m1$3.copy( this.matrixWorld ).invert();

		if ( object.parent !== null ) {

			object.parent.updateWorldMatrix( true, false );

			_m1$3.multiply( object.parent.matrixWorld );

		}

		object.applyMatrix4( _m1$3 );

		object.removeFromParent();
		object.parent = this;
		this.children.push( object );

		object.updateWorldMatrix( false, true );

		object.dispatchEvent( _addedEvent );

		_childaddedEvent.child = object;
		this.dispatchEvent( _childaddedEvent );
		_childaddedEvent.child = null;

		return this;

	}

	getObjectById( id ) {

		return this.getObjectByProperty( 'id', id );

	}

	getObjectByName( name ) {

		return this.getObjectByProperty( 'name', name );

	}

	getObjectByProperty( name, value ) {

		if ( this[ name ] === value ) return this;

		for ( let i = 0, l = this.children.length; i < l; i ++ ) {

			const child = this.children[ i ];
			const object = child.getObjectByProperty( name, value );

			if ( object !== undefined ) {

				return object;

			}

		}

		return undefined;

	}

	getObjectsByProperty( name, value, result = [] ) {

		if ( this[ name ] === value ) result.push( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].getObjectsByProperty( name, value, result );

		}

		return result;

	}

	getWorldPosition( target ) {

		this.updateWorldMatrix( true, false );

		return target.setFromMatrixPosition( this.matrixWorld );

	}

	getWorldQuaternion( target ) {

		this.updateWorldMatrix( true, false );

		this.matrixWorld.decompose( _position$3, target, _scale$2 );

		return target;

	}

	getWorldScale( target ) {

		this.updateWorldMatrix( true, false );

		this.matrixWorld.decompose( _position$3, _quaternion$2, target );

		return target;

	}

	getWorldDirection( target ) {

		this.updateWorldMatrix( true, false );

		const e = this.matrixWorld.elements;

		return target.set( e[ 8 ], e[ 9 ], e[ 10 ] ).normalize();

	}

	raycast( /* raycaster, intersects */ ) {}

	traverse( callback ) {

		callback( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverse( callback );

		}

	}

	traverseVisible( callback ) {

		if ( this.visible === false ) return;

		callback( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverseVisible( callback );

		}

	}

	traverseAncestors( callback ) {

		const parent = this.parent;

		if ( parent !== null ) {

			callback( parent );

			parent.traverseAncestors( callback );

		}

	}

	updateMatrix() {

		this.matrix.compose( this.position, this.quaternion, this.scale );

		this.matrixWorldNeedsUpdate = true;

	}

	updateMatrixWorld( force ) {

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		if ( this.matrixWorldNeedsUpdate || force ) {

			if ( this.matrixWorldAutoUpdate === true ) {

				if ( this.parent === null ) {

					this.matrixWorld.copy( this.matrix );

				} else {

					this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

				}

			}

			this.matrixWorldNeedsUpdate = false;

			force = true;

		}

		// make sure descendants are updated if required

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			const child = children[ i ];

			child.updateMatrixWorld( force );

		}

	}

	updateWorldMatrix( updateParents, updateChildren ) {

		const parent = this.parent;

		if ( updateParents === true && parent !== null ) {

			parent.updateWorldMatrix( true, false );

		}

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		if ( this.matrixWorldAutoUpdate === true ) {

			if ( this.parent === null ) {

				this.matrixWorld.copy( this.matrix );

			} else {

				this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

			}

		}

		// make sure descendants are updated

		if ( updateChildren === true ) {

			const children = this.children;

			for ( let i = 0, l = children.length; i < l; i ++ ) {

				const child = children[ i ];

				child.updateWorldMatrix( false, true );

			}

		}

	}

	toJSON( meta ) {

		// meta is a string when called from JSON.stringify
		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		const output = {};

		// meta is a hash used to collect geometries, materials.
		// not providing it implies that this is the root object
		// being serialized.
		if ( isRootObject ) {

			// initialize meta obj
			meta = {
				geometries: {},
				materials: {},
				textures: {},
				images: {},
				shapes: {},
				skeletons: {},
				animations: {},
				nodes: {}
			};

			output.metadata = {
				version: 4.6,
				type: 'Object',
				generator: 'Object3D.toJSON'
			};

		}

		// standard Object3D serialization

		const object = {};

		object.uuid = this.uuid;
		object.type = this.type;

		if ( this.name !== '' ) object.name = this.name;
		if ( this.castShadow === true ) object.castShadow = true;
		if ( this.receiveShadow === true ) object.receiveShadow = true;
		if ( this.visible === false ) object.visible = false;
		if ( this.frustumCulled === false ) object.frustumCulled = false;
		if ( this.renderOrder !== 0 ) object.renderOrder = this.renderOrder;
		if ( Object.keys( this.userData ).length > 0 ) object.userData = this.userData;

		object.layers = this.layers.mask;
		object.matrix = this.matrix.toArray();
		object.up = this.up.toArray();

		if ( this.matrixAutoUpdate === false ) object.matrixAutoUpdate = false;

		// object specific properties

		if ( this.isInstancedMesh ) {

			object.type = 'InstancedMesh';
			object.count = this.count;
			object.instanceMatrix = this.instanceMatrix.toJSON();
			if ( this.instanceColor !== null ) object.instanceColor = this.instanceColor.toJSON();

		}

		if ( this.isBatchedMesh ) {

			object.type = 'BatchedMesh';
			object.perObjectFrustumCulled = this.perObjectFrustumCulled;
			object.sortObjects = this.sortObjects;

			object.drawRanges = this._drawRanges;
			object.reservedRanges = this._reservedRanges;

			object.visibility = this._visibility;
			object.active = this._active;
			object.bounds = this._bounds.map( bound => ( {
				boxInitialized: bound.boxInitialized,
				boxMin: bound.box.min.toArray(),
				boxMax: bound.box.max.toArray(),

				sphereInitialized: bound.sphereInitialized,
				sphereRadius: bound.sphere.radius,
				sphereCenter: bound.sphere.center.toArray()
			} ) );

			object.maxInstanceCount = this._maxInstanceCount;
			object.maxVertexCount = this._maxVertexCount;
			object.maxIndexCount = this._maxIndexCount;

			object.geometryInitialized = this._geometryInitialized;
			object.geometryCount = this._geometryCount;

			object.matricesTexture = this._matricesTexture.toJSON( meta );

			if ( this._colorsTexture !== null ) object.colorsTexture = this._colorsTexture.toJSON( meta );

			if ( this.boundingSphere !== null ) {

				object.boundingSphere = {
					center: object.boundingSphere.center.toArray(),
					radius: object.boundingSphere.radius
				};

			}

			if ( this.boundingBox !== null ) {

				object.boundingBox = {
					min: object.boundingBox.min.toArray(),
					max: object.boundingBox.max.toArray()
				};

			}

		}

		//

		function serialize( library, element ) {

			if ( library[ element.uuid ] === undefined ) {

				library[ element.uuid ] = element.toJSON( meta );

			}

			return element.uuid;

		}

		if ( this.isScene ) {

			if ( this.background ) {

				if ( this.background.isColor ) {

					object.background = this.background.toJSON();

				} else if ( this.background.isTexture ) {

					object.background = this.background.toJSON( meta ).uuid;

				}

			}

			if ( this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true ) {

				object.environment = this.environment.toJSON( meta ).uuid;

			}

		} else if ( this.isMesh || this.isLine || this.isPoints ) {

			object.geometry = serialize( meta.geometries, this.geometry );

			const parameters = this.geometry.parameters;

			if ( parameters !== undefined && parameters.shapes !== undefined ) {

				const shapes = parameters.shapes;

				if ( Array.isArray( shapes ) ) {

					for ( let i = 0, l = shapes.length; i < l; i ++ ) {

						const shape = shapes[ i ];

						serialize( meta.shapes, shape );

					}

				} else {

					serialize( meta.shapes, shapes );

				}

			}

		}

		if ( this.isSkinnedMesh ) {

			object.bindMode = this.bindMode;
			object.bindMatrix = this.bindMatrix.toArray();

			if ( this.skeleton !== undefined ) {

				serialize( meta.skeletons, this.skeleton );

				object.skeleton = this.skeleton.uuid;

			}

		}

		if ( this.material !== undefined ) {

			if ( Array.isArray( this.material ) ) {

				const uuids = [];

				for ( let i = 0, l = this.material.length; i < l; i ++ ) {

					uuids.push( serialize( meta.materials, this.material[ i ] ) );

				}

				object.material = uuids;

			} else {

				object.material = serialize( meta.materials, this.material );

			}

		}

		//

		if ( this.children.length > 0 ) {

			object.children = [];

			for ( let i = 0; i < this.children.length; i ++ ) {

				object.children.push( this.children[ i ].toJSON( meta ).object );

			}

		}

		//

		if ( this.animations.length > 0 ) {

			object.animations = [];

			for ( let i = 0; i < this.animations.length; i ++ ) {

				const animation = this.animations[ i ];

				object.animations.push( serialize( meta.animations, animation ) );

			}

		}

		if ( isRootObject ) {

			const geometries = extractFromCache( meta.geometries );
			const materials = extractFromCache( meta.materials );
			const textures = extractFromCache( meta.textures );
			const images = extractFromCache( meta.images );
			const shapes = extractFromCache( meta.shapes );
			const skeletons = extractFromCache( meta.skeletons );
			const animations = extractFromCache( meta.animations );
			const nodes = extractFromCache( meta.nodes );

			if ( geometries.length > 0 ) output.geometries = geometries;
			if ( materials.length > 0 ) output.materials = materials;
			if ( textures.length > 0 ) output.textures = textures;
			if ( images.length > 0 ) output.images = images;
			if ( shapes.length > 0 ) output.shapes = shapes;
			if ( skeletons.length > 0 ) output.skeletons = skeletons;
			if ( animations.length > 0 ) output.animations = animations;
			if ( nodes.length > 0 ) output.nodes = nodes;

		}

		output.object = object;

		return output;

		// extract data from the cache hash
		// remove metadata on each item
		// and return as array
		function extractFromCache( cache ) {

			const values = [];
			for ( const key in cache ) {

				const data = cache[ key ];
				delete data.metadata;
				values.push( data );

			}

			return values;

		}

	}

	clone( recursive ) {

		return new this.constructor().copy( this, recursive );

	}

	copy( source, recursive = true ) {

		this.name = source.name;

		this.up.copy( source.up );

		this.position.copy( source.position );
		this.rotation.order = source.rotation.order;
		this.quaternion.copy( source.quaternion );
		this.scale.copy( source.scale );

		this.matrix.copy( source.matrix );
		this.matrixWorld.copy( source.matrixWorld );

		this.matrixAutoUpdate = source.matrixAutoUpdate;

		this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;
		this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;

		this.layers.mask = source.layers.mask;
		this.visible = source.visible;

		this.castShadow = source.castShadow;
		this.receiveShadow = source.receiveShadow;

		this.frustumCulled = source.frustumCulled;
		this.renderOrder = source.renderOrder;

		this.animations = source.animations.slice();

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		if ( recursive === true ) {

			for ( let i = 0; i < source.children.length; i ++ ) {

				const child = source.children[ i ];
				this.add( child.clone() );

			}

		}

		return this;

	}

}

Object3D.DEFAULT_UP = /*@__PURE__*/ new Vector3( 0, 1, 0 );
Object3D.DEFAULT_MATRIX_AUTO_UPDATE = true;
Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;

const _v0$2 = /*@__PURE__*/ new Vector3();
const _v1$3 = /*@__PURE__*/ new Vector3();
const _v2$2 = /*@__PURE__*/ new Vector3();
const _v3$2 = /*@__PURE__*/ new Vector3();

const _vab = /*@__PURE__*/ new Vector3();
const _vac = /*@__PURE__*/ new Vector3();
const _vbc = /*@__PURE__*/ new Vector3();
const _vap = /*@__PURE__*/ new Vector3();
const _vbp = /*@__PURE__*/ new Vector3();
const _vcp = /*@__PURE__*/ new Vector3();

const _v40 = /*@__PURE__*/ new Vector4();
const _v41 = /*@__PURE__*/ new Vector4();
const _v42 = /*@__PURE__*/ new Vector4();

class Triangle {

	constructor( a = new Vector3(), b = new Vector3(), c = new Vector3() ) {

		this.a = a;
		this.b = b;
		this.c = c;

	}

	static getNormal( a, b, c, target ) {

		target.subVectors( c, b );
		_v0$2.subVectors( a, b );
		target.cross( _v0$2 );

		const targetLengthSq = target.lengthSq();
		if ( targetLengthSq > 0 ) {

			return target.multiplyScalar( 1 / Math.sqrt( targetLengthSq ) );

		}

		return target.set( 0, 0, 0 );

	}

	// static/instance method to calculate barycentric coordinates
	// based on: http://www.blackpawn.com/texts/pointinpoly/default.html
	static getBarycoord( point, a, b, c, target ) {

		_v0$2.subVectors( c, a );
		_v1$3.subVectors( b, a );
		_v2$2.subVectors( point, a );

		const dot00 = _v0$2.dot( _v0$2 );
		const dot01 = _v0$2.dot( _v1$3 );
		const dot02 = _v0$2.dot( _v2$2 );
		const dot11 = _v1$3.dot( _v1$3 );
		const dot12 = _v1$3.dot( _v2$2 );

		const denom = ( dot00 * dot11 - dot01 * dot01 );

		// collinear or singular triangle
		if ( denom === 0 ) {

			target.set( 0, 0, 0 );
			return null;

		}

		const invDenom = 1 / denom;
		const u = ( dot11 * dot02 - dot01 * dot12 ) * invDenom;
		const v = ( dot00 * dot12 - dot01 * dot02 ) * invDenom;

		// barycentric coordinates must always sum to 1
		return target.set( 1 - u - v, v, u );

	}

	static containsPoint( point, a, b, c ) {

		// if the triangle is degenerate then we can't contain a point
		if ( this.getBarycoord( point, a, b, c, _v3$2 ) === null ) {

			return false;

		}

		return ( _v3$2.x >= 0 ) && ( _v3$2.y >= 0 ) && ( ( _v3$2.x + _v3$2.y ) <= 1 );

	}

	static getInterpolation( point, p1, p2, p3, v1, v2, v3, target ) {

		if ( this.getBarycoord( point, p1, p2, p3, _v3$2 ) === null ) {

			target.x = 0;
			target.y = 0;
			if ( 'z' in target ) target.z = 0;
			if ( 'w' in target ) target.w = 0;
			return null;

		}

		target.setScalar( 0 );
		target.addScaledVector( v1, _v3$2.x );
		target.addScaledVector( v2, _v3$2.y );
		target.addScaledVector( v3, _v3$2.z );

		return target;

	}

	static getInterpolatedAttribute( attr, i1, i2, i3, barycoord, target ) {

		_v40.setScalar( 0 );
		_v41.setScalar( 0 );
		_v42.setScalar( 0 );

		_v40.fromBufferAttribute( attr, i1 );
		_v41.fromBufferAttribute( attr, i2 );
		_v42.fromBufferAttribute( attr, i3 );

		target.setScalar( 0 );
		target.addScaledVector( _v40, barycoord.x );
		target.addScaledVector( _v41, barycoord.y );
		target.addScaledVector( _v42, barycoord.z );

		return target;

	}

	static isFrontFacing( a, b, c, direction ) {

		_v0$2.subVectors( c, b );
		_v1$3.subVectors( a, b );

		// strictly front facing
		return ( _v0$2.cross( _v1$3 ).dot( direction ) < 0 ) ? true : false;

	}

	set( a, b, c ) {

		this.a.copy( a );
		this.b.copy( b );
		this.c.copy( c );

		return this;

	}

	setFromPointsAndIndices( points, i0, i1, i2 ) {

		this.a.copy( points[ i0 ] );
		this.b.copy( points[ i1 ] );
		this.c.copy( points[ i2 ] );

		return this;

	}

	setFromAttributeAndIndices( attribute, i0, i1, i2 ) {

		this.a.fromBufferAttribute( attribute, i0 );
		this.b.fromBufferAttribute( attribute, i1 );
		this.c.fromBufferAttribute( attribute, i2 );

		return this;

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( triangle ) {

		this.a.copy( triangle.a );
		this.b.copy( triangle.b );
		this.c.copy( triangle.c );

		return this;

	}

	getArea() {

		_v0$2.subVectors( this.c, this.b );
		_v1$3.subVectors( this.a, this.b );

		return _v0$2.cross( _v1$3 ).length() * 0.5;

	}

	getMidpoint( target ) {

		return target.addVectors( this.a, this.b ).add( this.c ).multiplyScalar( 1 / 3 );

	}

	getNormal( target ) {

		return Triangle.getNormal( this.a, this.b, this.c, target );

	}

	getPlane( target ) {

		return target.setFromCoplanarPoints( this.a, this.b, this.c );

	}

	getBarycoord( point, target ) {

		return Triangle.getBarycoord( point, this.a, this.b, this.c, target );

	}

	getInterpolation( point, v1, v2, v3, target ) {

		return Triangle.getInterpolation( point, this.a, this.b, this.c, v1, v2, v3, target );

	}

	containsPoint( point ) {

		return Triangle.containsPoint( point, this.a, this.b, this.c );

	}

	isFrontFacing( direction ) {

		return Triangle.isFrontFacing( this.a, this.b, this.c, direction );

	}

	intersectsBox( box ) {

		return box.intersectsTriangle( this );

	}

	closestPointToPoint( p, target ) {

		const a = this.a, b = this.b, c = this.c;
		let v, w;

		// algorithm thanks to Real-Time Collision Detection by Christer Ericson,
		// published by Morgan Kaufmann Publishers, (c) 2005 Elsevier Inc.,
		// under the accompanying license; see chapter 5.1.5 for detailed explanation.
		// basically, we're distinguishing which of the voronoi regions of the triangle
		// the point lies in with the minimum amount of redundant computation.

		_vab.subVectors( b, a );
		_vac.subVectors( c, a );
		_vap.subVectors( p, a );
		const d1 = _vab.dot( _vap );
		const d2 = _vac.dot( _vap );
		if ( d1 <= 0 && d2 <= 0 ) {

			// vertex region of A; barycentric coords (1, 0, 0)
			return target.copy( a );

		}

		_vbp.subVectors( p, b );
		const d3 = _vab.dot( _vbp );
		const d4 = _vac.dot( _vbp );
		if ( d3 >= 0 && d4 <= d3 ) {

			// vertex region of B; barycentric coords (0, 1, 0)
			return target.copy( b );

		}

		const vc = d1 * d4 - d3 * d2;
		if ( vc <= 0 && d1 >= 0 && d3 <= 0 ) {

			v = d1 / ( d1 - d3 );
			// edge region of AB; barycentric coords (1-v, v, 0)
			return target.copy( a ).addScaledVector( _vab, v );

		}

		_vcp.subVectors( p, c );
		const d5 = _vab.dot( _vcp );
		const d6 = _vac.dot( _vcp );
		if ( d6 >= 0 && d5 <= d6 ) {

			// vertex region of C; barycentric coords (0, 0, 1)
			return target.copy( c );

		}

		const vb = d5 * d2 - d1 * d6;
		if ( vb <= 0 && d2 >= 0 && d6 <= 0 ) {

			w = d2 / ( d2 - d6 );
			// edge region of AC; barycentric coords (1-w, 0, w)
			return target.copy( a ).addScaledVector( _vac, w );

		}

		const va = d3 * d6 - d5 * d4;
		if ( va <= 0 && ( d4 - d3 ) >= 0 && ( d5 - d6 ) >= 0 ) {

			_vbc.subVectors( c, b );
			w = ( d4 - d3 ) / ( ( d4 - d3 ) + ( d5 - d6 ) );
			// edge region of BC; barycentric coords (0, 1-w, w)
			return target.copy( b ).addScaledVector( _vbc, w ); // edge region of BC

		}

		// face region
		const denom = 1 / ( va + vb + vc );
		// u = va * denom
		v = vb * denom;
		w = vc * denom;

		return target.copy( a ).addScaledVector( _vab, v ).addScaledVector( _vac, w );

	}

	equals( triangle ) {

		return triangle.a.equals( this.a ) && triangle.b.equals( this.b ) && triangle.c.equals( this.c );

	}

}

const _colorKeywords = { 'aliceblue': 0xF0F8FF, 'antiquewhite': 0xFAEBD7, 'aqua': 0x00FFFF, 'aquamarine': 0x7FFFD4, 'azure': 0xF0FFFF,
	'beige': 0xF5F5DC, 'bisque': 0xFFE4C4, 'black': 0x000000, 'blanchedalmond': 0xFFEBCD, 'blue': 0x0000FF, 'blueviolet': 0x8A2BE2,
	'brown': 0xA52A2A, 'burlywood': 0xDEB887, 'cadetblue': 0x5F9EA0, 'chartreuse': 0x7FFF00, 'chocolate': 0xD2691E, 'coral': 0xFF7F50,
	'cornflowerblue': 0x6495ED, 'cornsilk': 0xFFF8DC, 'crimson': 0xDC143C, 'cyan': 0x00FFFF, 'darkblue': 0x00008B, 'darkcyan': 0x008B8B,
	'darkgoldenrod': 0xB8860B, 'darkgray': 0xA9A9A9, 'darkgreen': 0x006400, 'darkgrey': 0xA9A9A9, 'darkkhaki': 0xBDB76B, 'darkmagenta': 0x8B008B,
	'darkolivegreen': 0x556B2F, 'darkorange': 0xFF8C00, 'darkorchid': 0x9932CC, 'darkred': 0x8B0000, 'darksalmon': 0xE9967A, 'darkseagreen': 0x8FBC8F,
	'darkslateblue': 0x483D8B, 'darkslategray': 0x2F4F4F, 'darkslategrey': 0x2F4F4F, 'darkturquoise': 0x00CED1, 'darkviolet': 0x9400D3,
	'deeppink': 0xFF1493, 'deepskyblue': 0x00BFFF, 'dimgray': 0x696969, 'dimgrey': 0x696969, 'dodgerblue': 0x1E90FF, 'firebrick': 0xB22222,
	'floralwhite': 0xFFFAF0, 'forestgreen': 0x228B22, 'fuchsia': 0xFF00FF, 'gainsboro': 0xDCDCDC, 'ghostwhite': 0xF8F8FF, 'gold': 0xFFD700,
	'goldenrod': 0xDAA520, 'gray': 0x808080, 'green': 0x008000, 'greenyellow': 0xADFF2F, 'grey': 0x808080, 'honeydew': 0xF0FFF0, 'hotpink': 0xFF69B4,
	'indianred': 0xCD5C5C, 'indigo': 0x4B0082, 'ivory': 0xFFFFF0, 'khaki': 0xF0E68C, 'lavender': 0xE6E6FA, 'lavenderblush': 0xFFF0F5, 'lawngreen': 0x7CFC00,
	'lemonchiffon': 0xFFFACD, 'lightblue': 0xADD8E6, 'lightcoral': 0xF08080, 'lightcyan': 0xE0FFFF, 'lightgoldenrodyellow': 0xFAFAD2, 'lightgray': 0xD3D3D3,
	'lightgreen': 0x90EE90, 'lightgrey': 0xD3D3D3, 'lightpink': 0xFFB6C1, 'lightsalmon': 0xFFA07A, 'lightseagreen': 0x20B2AA, 'lightskyblue': 0x87CEFA,
	'lightslategray': 0x778899, 'lightslategrey': 0x778899, 'lightsteelblue': 0xB0C4DE, 'lightyellow': 0xFFFFE0, 'lime': 0x00FF00, 'limegreen': 0x32CD32,
	'linen': 0xFAF0E6, 'magenta': 0xFF00FF, 'maroon': 0x800000, 'mediumaquamarine': 0x66CDAA, 'mediumblue': 0x0000CD, 'mediumorchid': 0xBA55D3,
	'mediumpurple': 0x9370DB, 'mediumseagreen': 0x3CB371, 'mediumslateblue': 0x7B68EE, 'mediumspringgreen': 0x00FA9A, 'mediumturquoise': 0x48D1CC,
	'mediumvioletred': 0xC71585, 'midnightblue': 0x191970, 'mintcream': 0xF5FFFA, 'mistyrose': 0xFFE4E1, 'moccasin': 0xFFE4B5, 'navajowhite': 0xFFDEAD,
	'navy': 0x000080, 'oldlace': 0xFDF5E6, 'olive': 0x808000, 'olivedrab': 0x6B8E23, 'orange': 0xFFA500, 'orangered': 0xFF4500, 'orchid': 0xDA70D6,
	'palegoldenrod': 0xEEE8AA, 'palegreen': 0x98FB98, 'paleturquoise': 0xAFEEEE, 'palevioletred': 0xDB7093, 'papayawhip': 0xFFEFD5, 'peachpuff': 0xFFDAB9,
	'peru': 0xCD853F, 'pink': 0xFFC0CB, 'plum': 0xDDA0DD, 'powderblue': 0xB0E0E6, 'purple': 0x800080, 'rebeccapurple': 0x663399, 'red': 0xFF0000, 'rosybrown': 0xBC8F8F,
	'royalblue': 0x4169E1, 'saddlebrown': 0x8B4513, 'salmon': 0xFA8072, 'sandybrown': 0xF4A460, 'seagreen': 0x2E8B57, 'seashell': 0xFFF5EE,
	'sienna': 0xA0522D, 'silver': 0xC0C0C0, 'skyblue': 0x87CEEB, 'slateblue': 0x6A5ACD, 'slategray': 0x708090, 'slategrey': 0x708090, 'snow': 0xFFFAFA,
	'springgreen': 0x00FF7F, 'steelblue': 0x4682B4, 'tan': 0xD2B48C, 'teal': 0x008080, 'thistle': 0xD8BFD8, 'tomato': 0xFF6347, 'turquoise': 0x40E0D0,
	'violet': 0xEE82EE, 'wheat': 0xF5DEB3, 'white': 0xFFFFFF, 'whitesmoke': 0xF5F5F5, 'yellow': 0xFFFF00, 'yellowgreen': 0x9ACD32 };

const _hslA = { h: 0, s: 0, l: 0 };
const _hslB = { h: 0, s: 0, l: 0 };

function hue2rgb( p, q, t ) {

	if ( t < 0 ) t += 1;
	if ( t > 1 ) t -= 1;
	if ( t < 1 / 6 ) return p + ( q - p ) * 6 * t;
	if ( t < 1 / 2 ) return q;
	if ( t < 2 / 3 ) return p + ( q - p ) * 6 * ( 2 / 3 - t );
	return p;

}

class Color {

	constructor( r, g, b ) {

		this.isColor = true;

		this.r = 1;
		this.g = 1;
		this.b = 1;

		return this.set( r, g, b );

	}

	set( r, g, b ) {

		if ( g === undefined && b === undefined ) {

			// r is THREE.Color, hex or string

			const value = r;

			if ( value && value.isColor ) {

				this.copy( value );

			} else if ( typeof value === 'number' ) {

				this.setHex( value );

			} else if ( typeof value === 'string' ) {

				this.setStyle( value );

			}

		} else {

			this.setRGB( r, g, b );

		}

		return this;

	}

	setScalar( scalar ) {

		this.r = scalar;
		this.g = scalar;
		this.b = scalar;

		return this;

	}

	setHex( hex, colorSpace = SRGBColorSpace ) {

		hex = Math.floor( hex );

		this.r = ( hex >> 16 & 255 ) / 255;
		this.g = ( hex >> 8 & 255 ) / 255;
		this.b = ( hex & 255 ) / 255;

		ColorManagement.toWorkingColorSpace( this, colorSpace );

		return this;

	}

	setRGB( r, g, b, colorSpace = ColorManagement.workingColorSpace ) {

		this.r = r;
		this.g = g;
		this.b = b;

		ColorManagement.toWorkingColorSpace( this, colorSpace );

		return this;

	}

	setHSL( h, s, l, colorSpace = ColorManagement.workingColorSpace ) {

		// h,s,l ranges are in 0.0 - 1.0
		h = euclideanModulo( h, 1 );
		s = clamp( s, 0, 1 );
		l = clamp( l, 0, 1 );

		if ( s === 0 ) {

			this.r = this.g = this.b = l;

		} else {

			const p = l <= 0.5 ? l * ( 1 + s ) : l + s - ( l * s );
			const q = ( 2 * l ) - p;

			this.r = hue2rgb( q, p, h + 1 / 3 );
			this.g = hue2rgb( q, p, h );
			this.b = hue2rgb( q, p, h - 1 / 3 );

		}

		ColorManagement.toWorkingColorSpace( this, colorSpace );

		return this;

	}

	setStyle( style, colorSpace = SRGBColorSpace ) {

		function handleAlpha( string ) {

			if ( string === undefined ) return;

			if ( parseFloat( string ) < 1 ) {

				console.warn( 'THREE.Color: Alpha component of ' + style + ' will be ignored.' );

			}

		}


		let m;

		if ( m = /^(\w+)\(([^\)]*)\)/.exec( style ) ) {

			// rgb / hsl

			let color;
			const name = m[ 1 ];
			const components = m[ 2 ];

			switch ( name ) {

				case 'rgb':
				case 'rgba':

					if ( color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

						// rgb(255,0,0) rgba(255,0,0,0.5)

						handleAlpha( color[ 4 ] );

						return this.setRGB(
							Math.min( 255, parseInt( color[ 1 ], 10 ) ) / 255,
							Math.min( 255, parseInt( color[ 2 ], 10 ) ) / 255,
							Math.min( 255, parseInt( color[ 3 ], 10 ) ) / 255,
							colorSpace
						);

					}

					if ( color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

						// rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)

						handleAlpha( color[ 4 ] );

						return this.setRGB(
							Math.min( 100, parseInt( color[ 1 ], 10 ) ) / 100,
							Math.min( 100, parseInt( color[ 2 ], 10 ) ) / 100,
							Math.min( 100, parseInt( color[ 3 ], 10 ) ) / 100,
							colorSpace
						);

					}

					break;

				case 'hsl':
				case 'hsla':

					if ( color = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

						// hsl(120,50%,50%) hsla(120,50%,50%,0.5)

						handleAlpha( color[ 4 ] );

						return this.setHSL(
							parseFloat( color[ 1 ] ) / 360,
							parseFloat( color[ 2 ] ) / 100,
							parseFloat( color[ 3 ] ) / 100,
							colorSpace
						);

					}

					break;

				default:

					console.warn( 'THREE.Color: Unknown color model ' + style );

			}

		} else if ( m = /^\#([A-Fa-f\d]+)$/.exec( style ) ) {

			// hex color

			const hex = m[ 1 ];
			const size = hex.length;

			if ( size === 3 ) {

				// #ff0
				return this.setRGB(
					parseInt( hex.charAt( 0 ), 16 ) / 15,
					parseInt( hex.charAt( 1 ), 16 ) / 15,
					parseInt( hex.charAt( 2 ), 16 ) / 15,
					colorSpace
				);

			} else if ( size === 6 ) {

				// #ff0000
				return this.setHex( parseInt( hex, 16 ), colorSpace );

			} else {

				console.warn( 'THREE.Color: Invalid hex color ' + style );

			}

		} else if ( style && style.length > 0 ) {

			return this.setColorName( style, colorSpace );

		}

		return this;

	}

	setColorName( style, colorSpace = SRGBColorSpace ) {

		// color keywords
		const hex = _colorKeywords[ style.toLowerCase() ];

		if ( hex !== undefined ) {

			// red
			this.setHex( hex, colorSpace );

		} else {

			// unknown color
			console.warn( 'THREE.Color: Unknown color ' + style );

		}

		return this;

	}

	clone() {

		return new this.constructor( this.r, this.g, this.b );

	}

	copy( color ) {

		this.r = color.r;
		this.g = color.g;
		this.b = color.b;

		return this;

	}

	copySRGBToLinear( color ) {

		this.r = SRGBToLinear( color.r );
		this.g = SRGBToLinear( color.g );
		this.b = SRGBToLinear( color.b );

		return this;

	}

	copyLinearToSRGB( color ) {

		this.r = LinearToSRGB( color.r );
		this.g = LinearToSRGB( color.g );
		this.b = LinearToSRGB( color.b );

		return this;

	}

	convertSRGBToLinear() {

		this.copySRGBToLinear( this );

		return this;

	}

	convertLinearToSRGB() {

		this.copyLinearToSRGB( this );

		return this;

	}

	getHex( colorSpace = SRGBColorSpace ) {

		ColorManagement.fromWorkingColorSpace( _color.copy( this ), colorSpace );

		return Math.round( clamp( _color.r * 255, 0, 255 ) ) * 65536 + Math.round( clamp( _color.g * 255, 0, 255 ) ) * 256 + Math.round( clamp( _color.b * 255, 0, 255 ) );

	}

	getHexString( colorSpace = SRGBColorSpace ) {

		return ( '000000' + this.getHex( colorSpace ).toString( 16 ) ).slice( - 6 );

	}

	getHSL( target, colorSpace = ColorManagement.workingColorSpace ) {

		// h,s,l ranges are in 0.0 - 1.0

		ColorManagement.fromWorkingColorSpace( _color.copy( this ), colorSpace );

		const r = _color.r, g = _color.g, b = _color.b;

		const max = Math.max( r, g, b );
		const min = Math.min( r, g, b );

		let hue, saturation;
		const lightness = ( min + max ) / 2.0;

		if ( min === max ) {

			hue = 0;
			saturation = 0;

		} else {

			const delta = max - min;

			saturation = lightness <= 0.5 ? delta / ( max + min ) : delta / ( 2 - max - min );

			switch ( max ) {

				case r: hue = ( g - b ) / delta + ( g < b ? 6 : 0 ); break;
				case g: hue = ( b - r ) / delta + 2; break;
				case b: hue = ( r - g ) / delta + 4; break;

			}

			hue /= 6;

		}

		target.h = hue;
		target.s = saturation;
		target.l = lightness;

		return target;

	}

	getRGB( target, colorSpace = ColorManagement.workingColorSpace ) {

		ColorManagement.fromWorkingColorSpace( _color.copy( this ), colorSpace );

		target.r = _color.r;
		target.g = _color.g;
		target.b = _color.b;

		return target;

	}

	getStyle( colorSpace = SRGBColorSpace ) {

		ColorManagement.fromWorkingColorSpace( _color.copy( this ), colorSpace );

		const r = _color.r, g = _color.g, b = _color.b;

		if ( colorSpace !== SRGBColorSpace ) {

			// Requires CSS Color Module Level 4 (https://www.w3.org/TR/css-color-4/).
			return `color(${ colorSpace } ${ r.toFixed( 3 ) } ${ g.toFixed( 3 ) } ${ b.toFixed( 3 ) })`;

		}

		return `rgb(${ Math.round( r * 255 ) },${ Math.round( g * 255 ) },${ Math.round( b * 255 ) })`;

	}

	offsetHSL( h, s, l ) {

		this.getHSL( _hslA );

		return this.setHSL( _hslA.h + h, _hslA.s + s, _hslA.l + l );

	}

	add( color ) {

		this.r += color.r;
		this.g += color.g;
		this.b += color.b;

		return this;

	}

	addColors( color1, color2 ) {

		this.r = color1.r + color2.r;
		this.g = color1.g + color2.g;
		this.b = color1.b + color2.b;

		return this;

	}

	addScalar( s ) {

		this.r += s;
		this.g += s;
		this.b += s;

		return this;

	}

	sub( color ) {

		this.r = Math.max( 0, this.r - color.r );
		this.g = Math.max( 0, this.g - color.g );
		this.b = Math.max( 0, this.b - color.b );

		return this;

	}

	multiply( color ) {

		this.r *= color.r;
		this.g *= color.g;
		this.b *= color.b;

		return this;

	}

	multiplyScalar( s ) {

		this.r *= s;
		this.g *= s;
		this.b *= s;

		return this;

	}

	lerp( color, alpha ) {

		this.r += ( color.r - this.r ) * alpha;
		this.g += ( color.g - this.g ) * alpha;
		this.b += ( color.b - this.b ) * alpha;

		return this;

	}

	lerpColors( color1, color2, alpha ) {

		this.r = color1.r + ( color2.r - color1.r ) * alpha;
		this.g = color1.g + ( color2.g - color1.g ) * alpha;
		this.b = color1.b + ( color2.b - color1.b ) * alpha;

		return this;

	}

	lerpHSL( color, alpha ) {

		this.getHSL( _hslA );
		color.getHSL( _hslB );

		const h = lerp( _hslA.h, _hslB.h, alpha );
		const s = lerp( _hslA.s, _hslB.s, alpha );
		const l = lerp( _hslA.l, _hslB.l, alpha );

		this.setHSL( h, s, l );

		return this;

	}

	setFromVector3( v ) {

		this.r = v.x;
		this.g = v.y;
		this.b = v.z;

		return this;

	}

	applyMatrix3( m ) {

		const r = this.r, g = this.g, b = this.b;
		const e = m.elements;

		this.r = e[ 0 ] * r + e[ 3 ] * g + e[ 6 ] * b;
		this.g = e[ 1 ] * r + e[ 4 ] * g + e[ 7 ] * b;
		this.b = e[ 2 ] * r + e[ 5 ] * g + e[ 8 ] * b;

		return this;

	}

	equals( c ) {

		return ( c.r === this.r ) && ( c.g === this.g ) && ( c.b === this.b );

	}

	fromArray( array, offset = 0 ) {

		this.r = array[ offset ];
		this.g = array[ offset + 1 ];
		this.b = array[ offset + 2 ];

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.r;
		array[ offset + 1 ] = this.g;
		array[ offset + 2 ] = this.b;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this.r = attribute.getX( index );
		this.g = attribute.getY( index );
		this.b = attribute.getZ( index );

		return this;

	}

	toJSON() {

		return this.getHex();

	}

	*[ Symbol.iterator ]() {

		yield this.r;
		yield this.g;
		yield this.b;

	}

}

const _color = /*@__PURE__*/ new Color();

Color.NAMES = _colorKeywords;

let _materialId = 0;

class Material extends EventDispatcher {

	static get type() {

		return 'Material';

	}

	get type() {

		return this.constructor.type;

	}

	set type( _value ) { /* */ }

	constructor() {

		super();

		this.isMaterial = true;

		Object.defineProperty( this, 'id', { value: _materialId ++ } );

		this.uuid = generateUUID();

		this.name = '';

		this.blending = NormalBlending;
		this.side = FrontSide;
		this.vertexColors = false;

		this.opacity = 1;
		this.transparent = false;
		this.alphaHash = false;

		this.blendSrc = SrcAlphaFactor;
		this.blendDst = OneMinusSrcAlphaFactor;
		this.blendEquation = AddEquation;
		this.blendSrcAlpha = null;
		this.blendDstAlpha = null;
		this.blendEquationAlpha = null;
		this.blendColor = new Color( 0, 0, 0 );
		this.blendAlpha = 0;

		this.depthFunc = LessEqualDepth;
		this.depthTest = true;
		this.depthWrite = true;

		this.stencilWriteMask = 0xff;
		this.stencilFunc = AlwaysStencilFunc;
		this.stencilRef = 0;
		this.stencilFuncMask = 0xff;
		this.stencilFail = KeepStencilOp;
		this.stencilZFail = KeepStencilOp;
		this.stencilZPass = KeepStencilOp;
		this.stencilWrite = false;

		this.clippingPlanes = null;
		this.clipIntersection = false;
		this.clipShadows = false;

		this.shadowSide = null;

		this.colorWrite = true;

		this.precision = null; // override the renderer's default precision for this material

		this.polygonOffset = false;
		this.polygonOffsetFactor = 0;
		this.polygonOffsetUnits = 0;

		this.dithering = false;

		this.alphaToCoverage = false;
		this.premultipliedAlpha = false;
		this.forceSinglePass = false;

		this.visible = true;

		this.toneMapped = true;

		this.userData = {};

		this.version = 0;

		this._alphaTest = 0;

	}

	get alphaTest() {

		return this._alphaTest;

	}

	set alphaTest( value ) {

		if ( this._alphaTest > 0 !== value > 0 ) {

			this.version ++;

		}

		this._alphaTest = value;

	}

	// onBeforeRender and onBeforeCompile only supported in WebGLRenderer

	onBeforeRender( /* renderer, scene, camera, geometry, object, group */ ) {}

	onBeforeCompile( /* shaderobject, renderer */ ) {}

	customProgramCacheKey() {

		return this.onBeforeCompile.toString();

	}

	setValues( values ) {

		if ( values === undefined ) return;

		for ( const key in values ) {

			const newValue = values[ key ];

			if ( newValue === undefined ) {

				console.warn( `THREE.Material: parameter '${ key }' has value of undefined.` );
				continue;

			}

			const currentValue = this[ key ];

			if ( currentValue === undefined ) {

				console.warn( `THREE.Material: '${ key }' is not a property of THREE.${ this.type }.` );
				continue;

			}

			if ( currentValue && currentValue.isColor ) {

				currentValue.set( newValue );

			} else if ( ( currentValue && currentValue.isVector3 ) && ( newValue && newValue.isVector3 ) ) {

				currentValue.copy( newValue );

			} else {

				this[ key ] = newValue;

			}

		}

	}

	toJSON( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( isRootObject ) {

			meta = {
				textures: {},
				images: {}
			};

		}

		const data = {
			metadata: {
				version: 4.6,
				type: 'Material',
				generator: 'Material.toJSON'
			}
		};

		// standard Material serialization
		data.uuid = this.uuid;
		data.type = this.type;

		if ( this.name !== '' ) data.name = this.name;

		if ( this.color && this.color.isColor ) data.color = this.color.getHex();

		if ( this.roughness !== undefined ) data.roughness = this.roughness;
		if ( this.metalness !== undefined ) data.metalness = this.metalness;

		if ( this.sheen !== undefined ) data.sheen = this.sheen;
		if ( this.sheenColor && this.sheenColor.isColor ) data.sheenColor = this.sheenColor.getHex();
		if ( this.sheenRoughness !== undefined ) data.sheenRoughness = this.sheenRoughness;
		if ( this.emissive && this.emissive.isColor ) data.emissive = this.emissive.getHex();
		if ( this.emissiveIntensity !== undefined && this.emissiveIntensity !== 1 ) data.emissiveIntensity = this.emissiveIntensity;

		if ( this.specular && this.specular.isColor ) data.specular = this.specular.getHex();
		if ( this.specularIntensity !== undefined ) data.specularIntensity = this.specularIntensity;
		if ( this.specularColor && this.specularColor.isColor ) data.specularColor = this.specularColor.getHex();
		if ( this.shininess !== undefined ) data.shininess = this.shininess;
		if ( this.clearcoat !== undefined ) data.clearcoat = this.clearcoat;
		if ( this.clearcoatRoughness !== undefined ) data.clearcoatRoughness = this.clearcoatRoughness;

		if ( this.clearcoatMap && this.clearcoatMap.isTexture ) {

			data.clearcoatMap = this.clearcoatMap.toJSON( meta ).uuid;

		}

		if ( this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture ) {

			data.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON( meta ).uuid;

		}

		if ( this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture ) {

			data.clearcoatNormalMap = this.clearcoatNormalMap.toJSON( meta ).uuid;
			data.clearcoatNormalScale = this.clearcoatNormalScale.toArray();

		}

		if ( this.dispersion !== undefined ) data.dispersion = this.dispersion;

		if ( this.iridescence !== undefined ) data.iridescence = this.iridescence;
		if ( this.iridescenceIOR !== undefined ) data.iridescenceIOR = this.iridescenceIOR;
		if ( this.iridescenceThicknessRange !== undefined ) data.iridescenceThicknessRange = this.iridescenceThicknessRange;

		if ( this.iridescenceMap && this.iridescenceMap.isTexture ) {

			data.iridescenceMap = this.iridescenceMap.toJSON( meta ).uuid;

		}

		if ( this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture ) {

			data.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON( meta ).uuid;

		}

		if ( this.anisotropy !== undefined ) data.anisotropy = this.anisotropy;
		if ( this.anisotropyRotation !== undefined ) data.anisotropyRotation = this.anisotropyRotation;

		if ( this.anisotropyMap && this.anisotropyMap.isTexture ) {

			data.anisotropyMap = this.anisotropyMap.toJSON( meta ).uuid;

		}

		if ( this.map && this.map.isTexture ) data.map = this.map.toJSON( meta ).uuid;
		if ( this.matcap && this.matcap.isTexture ) data.matcap = this.matcap.toJSON( meta ).uuid;
		if ( this.alphaMap && this.alphaMap.isTexture ) data.alphaMap = this.alphaMap.toJSON( meta ).uuid;

		if ( this.lightMap && this.lightMap.isTexture ) {

			data.lightMap = this.lightMap.toJSON( meta ).uuid;
			data.lightMapIntensity = this.lightMapIntensity;

		}

		if ( this.aoMap && this.aoMap.isTexture ) {

			data.aoMap = this.aoMap.toJSON( meta ).uuid;
			data.aoMapIntensity = this.aoMapIntensity;

		}

		if ( this.bumpMap && this.bumpMap.isTexture ) {

			data.bumpMap = this.bumpMap.toJSON( meta ).uuid;
			data.bumpScale = this.bumpScale;

		}

		if ( this.normalMap && this.normalMap.isTexture ) {

			data.normalMap = this.normalMap.toJSON( meta ).uuid;
			data.normalMapType = this.normalMapType;
			data.normalScale = this.normalScale.toArray();

		}

		if ( this.displacementMap && this.displacementMap.isTexture ) {

			data.displacementMap = this.displacementMap.toJSON( meta ).uuid;
			data.displacementScale = this.displacementScale;
			data.displacementBias = this.displacementBias;

		}

		if ( this.roughnessMap && this.roughnessMap.isTexture ) data.roughnessMap = this.roughnessMap.toJSON( meta ).uuid;
		if ( this.metalnessMap && this.metalnessMap.isTexture ) data.metalnessMap = this.metalnessMap.toJSON( meta ).uuid;

		if ( this.emissiveMap && this.emissiveMap.isTexture ) data.emissiveMap = this.emissiveMap.toJSON( meta ).uuid;
		if ( this.specularMap && this.specularMap.isTexture ) data.specularMap = this.specularMap.toJSON( meta ).uuid;
		if ( this.specularIntensityMap && this.specularIntensityMap.isTexture ) data.specularIntensityMap = this.specularIntensityMap.toJSON( meta ).uuid;
		if ( this.specularColorMap && this.specularColorMap.isTexture ) data.specularColorMap = this.specularColorMap.toJSON( meta ).uuid;

		if ( this.envMap && this.envMap.isTexture ) {

			data.envMap = this.envMap.toJSON( meta ).uuid;

			if ( this.combine !== undefined ) data.combine = this.combine;

		}

		if ( this.envMapRotation !== undefined ) data.envMapRotation = this.envMapRotation.toArray();
		if ( this.envMapIntensity !== undefined ) data.envMapIntensity = this.envMapIntensity;
		if ( this.reflectivity !== undefined ) data.reflectivity = this.reflectivity;
		if ( this.refractionRatio !== undefined ) data.refractionRatio = this.refractionRatio;

		if ( this.gradientMap && this.gradientMap.isTexture ) {

			data.gradientMap = this.gradientMap.toJSON( meta ).uuid;

		}

		if ( this.transmission !== undefined ) data.transmission = this.transmission;
		if ( this.transmissionMap && this.transmissionMap.isTexture ) data.transmissionMap = this.transmissionMap.toJSON( meta ).uuid;
		if ( this.thickness !== undefined ) data.thickness = this.thickness;
		if ( this.thicknessMap && this.thicknessMap.isTexture ) data.thicknessMap = this.thicknessMap.toJSON( meta ).uuid;
		if ( this.attenuationDistance !== undefined && this.attenuationDistance !== Infinity ) data.attenuationDistance = this.attenuationDistance;
		if ( this.attenuationColor !== undefined ) data.attenuationColor = this.attenuationColor.getHex();

		if ( this.size !== undefined ) data.size = this.size;
		if ( this.shadowSide !== null ) data.shadowSide = this.shadowSide;
		if ( this.sizeAttenuation !== undefined ) data.sizeAttenuation = this.sizeAttenuation;

		if ( this.blending !== NormalBlending ) data.blending = this.blending;
		if ( this.side !== FrontSide ) data.side = this.side;
		if ( this.vertexColors === true ) data.vertexColors = true;

		if ( this.opacity < 1 ) data.opacity = this.opacity;
		if ( this.transparent === true ) data.transparent = true;

		if ( this.blendSrc !== SrcAlphaFactor ) data.blendSrc = this.blendSrc;
		if ( this.blendDst !== OneMinusSrcAlphaFactor ) data.blendDst = this.blendDst;
		if ( this.blendEquation !== AddEquation ) data.blendEquation = this.blendEquation;
		if ( this.blendSrcAlpha !== null ) data.blendSrcAlpha = this.blendSrcAlpha;
		if ( this.blendDstAlpha !== null ) data.blendDstAlpha = this.blendDstAlpha;
		if ( this.blendEquationAlpha !== null ) data.blendEquationAlpha = this.blendEquationAlpha;
		if ( this.blendColor && this.blendColor.isColor ) data.blendColor = this.blendColor.getHex();
		if ( this.blendAlpha !== 0 ) data.blendAlpha = this.blendAlpha;

		if ( this.depthFunc !== LessEqualDepth ) data.depthFunc = this.depthFunc;
		if ( this.depthTest === false ) data.depthTest = this.depthTest;
		if ( this.depthWrite === false ) data.depthWrite = this.depthWrite;
		if ( this.colorWrite === false ) data.colorWrite = this.colorWrite;

		if ( this.stencilWriteMask !== 0xff ) data.stencilWriteMask = this.stencilWriteMask;
		if ( this.stencilFunc !== AlwaysStencilFunc ) data.stencilFunc = this.stencilFunc;
		if ( this.stencilRef !== 0 ) data.stencilRef = this.stencilRef;
		if ( this.stencilFuncMask !== 0xff ) data.stencilFuncMask = this.stencilFuncMask;
		if ( this.stencilFail !== KeepStencilOp ) data.stencilFail = this.stencilFail;
		if ( this.stencilZFail !== KeepStencilOp ) data.stencilZFail = this.stencilZFail;
		if ( this.stencilZPass !== KeepStencilOp ) data.stencilZPass = this.stencilZPass;
		if ( this.stencilWrite === true ) data.stencilWrite = this.stencilWrite;

		// rotation (SpriteMaterial)
		if ( this.rotation !== undefined && this.rotation !== 0 ) data.rotation = this.rotation;

		if ( this.polygonOffset === true ) data.polygonOffset = true;
		if ( this.polygonOffsetFactor !== 0 ) data.polygonOffsetFactor = this.polygonOffsetFactor;
		if ( this.polygonOffsetUnits !== 0 ) data.polygonOffsetUnits = this.polygonOffsetUnits;

		if ( this.linewidth !== undefined && this.linewidth !== 1 ) data.linewidth = this.linewidth;
		if ( this.dashSize !== undefined ) data.dashSize = this.dashSize;
		if ( this.gapSize !== undefined ) data.gapSize = this.gapSize;
		if ( this.scale !== undefined ) data.scale = this.scale;

		if ( this.dithering === true ) data.dithering = true;

		if ( this.alphaTest > 0 ) data.alphaTest = this.alphaTest;
		if ( this.alphaHash === true ) data.alphaHash = true;
		if ( this.alphaToCoverage === true ) data.alphaToCoverage = true;
		if ( this.premultipliedAlpha === true ) data.premultipliedAlpha = true;
		if ( this.forceSinglePass === true ) data.forceSinglePass = true;

		if ( this.wireframe === true ) data.wireframe = true;
		if ( this.wireframeLinewidth > 1 ) data.wireframeLinewidth = this.wireframeLinewidth;
		if ( this.wireframeLinecap !== 'round' ) data.wireframeLinecap = this.wireframeLinecap;
		if ( this.wireframeLinejoin !== 'round' ) data.wireframeLinejoin = this.wireframeLinejoin;

		if ( this.flatShading === true ) data.flatShading = true;

		if ( this.visible === false ) data.visible = false;

		if ( this.toneMapped === false ) data.toneMapped = false;

		if ( this.fog === false ) data.fog = false;

		if ( Object.keys( this.userData ).length > 0 ) data.userData = this.userData;

		// TODO: Copied from Object3D.toJSON

		function extractFromCache( cache ) {

			const values = [];

			for ( const key in cache ) {

				const data = cache[ key ];
				delete data.metadata;
				values.push( data );

			}

			return values;

		}

		if ( isRootObject ) {

			const textures = extractFromCache( meta.textures );
			const images = extractFromCache( meta.images );

			if ( textures.length > 0 ) data.textures = textures;
			if ( images.length > 0 ) data.images = images;

		}

		return data;

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( source ) {

		this.name = source.name;

		this.blending = source.blending;
		this.side = source.side;
		this.vertexColors = source.vertexColors;

		this.opacity = source.opacity;
		this.transparent = source.transparent;

		this.blendSrc = source.blendSrc;
		this.blendDst = source.blendDst;
		this.blendEquation = source.blendEquation;
		this.blendSrcAlpha = source.blendSrcAlpha;
		this.blendDstAlpha = source.blendDstAlpha;
		this.blendEquationAlpha = source.blendEquationAlpha;
		this.blendColor.copy( source.blendColor );
		this.blendAlpha = source.blendAlpha;

		this.depthFunc = source.depthFunc;
		this.depthTest = source.depthTest;
		this.depthWrite = source.depthWrite;

		this.stencilWriteMask = source.stencilWriteMask;
		this.stencilFunc = source.stencilFunc;
		this.stencilRef = source.stencilRef;
		this.stencilFuncMask = source.stencilFuncMask;
		this.stencilFail = source.stencilFail;
		this.stencilZFail = source.stencilZFail;
		this.stencilZPass = source.stencilZPass;
		this.stencilWrite = source.stencilWrite;

		const srcPlanes = source.clippingPlanes;
		let dstPlanes = null;

		if ( srcPlanes !== null ) {

			const n = srcPlanes.length;
			dstPlanes = new Array( n );

			for ( let i = 0; i !== n; ++ i ) {

				dstPlanes[ i ] = srcPlanes[ i ].clone();

			}

		}

		this.clippingPlanes = dstPlanes;
		this.clipIntersection = source.clipIntersection;
		this.clipShadows = source.clipShadows;

		this.shadowSide = source.shadowSide;

		this.colorWrite = source.colorWrite;

		this.precision = source.precision;

		this.polygonOffset = source.polygonOffset;
		this.polygonOffsetFactor = source.polygonOffsetFactor;
		this.polygonOffsetUnits = source.polygonOffsetUnits;

		this.dithering = source.dithering;

		this.alphaTest = source.alphaTest;
		this.alphaHash = source.alphaHash;
		this.alphaToCoverage = source.alphaToCoverage;
		this.premultipliedAlpha = source.premultipliedAlpha;
		this.forceSinglePass = source.forceSinglePass;

		this.visible = source.visible;

		this.toneMapped = source.toneMapped;

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		return this;

	}

	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

	set needsUpdate( value ) {

		if ( value === true ) this.version ++;

	}

	onBuild( /* shaderobject, renderer */ ) {

		console.warn( 'Material: onBuild() has been removed.' ); // @deprecated, r166

	}

}

class MeshBasicMaterial extends Material {

	static get type() {

		return 'MeshBasicMaterial';

	}

	constructor( parameters ) {

		super();

		this.isMeshBasicMaterial = true;

		this.color = new Color( 0xffffff ); // emissive

		this.map = null;

		this.lightMap = null;
		this.lightMapIntensity = 1.0;

		this.aoMap = null;
		this.aoMapIntensity = 1.0;

		this.specularMap = null;

		this.alphaMap = null;

		this.envMap = null;
		this.envMapRotation = new Euler();
		this.combine = MultiplyOperation;
		this.reflectivity = 1;
		this.refractionRatio = 0.98;

		this.wireframe = false;
		this.wireframeLinewidth = 1;
		this.wireframeLinecap = 'round';
		this.wireframeLinejoin = 'round';

		this.fog = true;

		this.setValues( parameters );

	}

	copy( source ) {

		super.copy( source );

		this.color.copy( source.color );

		this.map = source.map;

		this.lightMap = source.lightMap;
		this.lightMapIntensity = source.lightMapIntensity;

		this.aoMap = source.aoMap;
		this.aoMapIntensity = source.aoMapIntensity;

		this.specularMap = source.specularMap;

		this.alphaMap = source.alphaMap;

		this.envMap = source.envMap;
		this.envMapRotation.copy( source.envMapRotation );
		this.combine = source.combine;
		this.reflectivity = source.reflectivity;
		this.refractionRatio = source.refractionRatio;

		this.wireframe = source.wireframe;
		this.wireframeLinewidth = source.wireframeLinewidth;
		this.wireframeLinecap = source.wireframeLinecap;
		this.wireframeLinejoin = source.wireframeLinejoin;

		this.fog = source.fog;

		return this;

	}

}

// Fast Half Float Conversions, http://www.fox-toolkit.org/ftp/fasthalffloatconversion.pdf

const _tables = /*@__PURE__*/ _generateTables();

function _generateTables() {

	// float32 to float16 helpers

	const buffer = new ArrayBuffer( 4 );
	const floatView = new Float32Array( buffer );
	const uint32View = new Uint32Array( buffer );

	const baseTable = new Uint32Array( 512 );
	const shiftTable = new Uint32Array( 512 );

	for ( let i = 0; i < 256; ++ i ) {

		const e = i - 127;

		// very small number (0, -0)

		if ( e < - 27 ) {

			baseTable[ i ] = 0x0000;
			baseTable[ i | 0x100 ] = 0x8000;
			shiftTable[ i ] = 24;
			shiftTable[ i | 0x100 ] = 24;

			// small number (denorm)

		} else if ( e < - 14 ) {

			baseTable[ i ] = 0x0400 >> ( - e - 14 );
			baseTable[ i | 0x100 ] = ( 0x0400 >> ( - e - 14 ) ) | 0x8000;
			shiftTable[ i ] = - e - 1;
			shiftTable[ i | 0x100 ] = - e - 1;

			// normal number

		} else if ( e <= 15 ) {

			baseTable[ i ] = ( e + 15 ) << 10;
			baseTable[ i | 0x100 ] = ( ( e + 15 ) << 10 ) | 0x8000;
			shiftTable[ i ] = 13;
			shiftTable[ i | 0x100 ] = 13;

			// large number (Infinity, -Infinity)

		} else if ( e < 128 ) {

			baseTable[ i ] = 0x7c00;
			baseTable[ i | 0x100 ] = 0xfc00;
			shiftTable[ i ] = 24;
			shiftTable[ i | 0x100 ] = 24;

			// stay (NaN, Infinity, -Infinity)

		} else {

			baseTable[ i ] = 0x7c00;
			baseTable[ i | 0x100 ] = 0xfc00;
			shiftTable[ i ] = 13;
			shiftTable[ i | 0x100 ] = 13;

		}

	}

	// float16 to float32 helpers

	const mantissaTable = new Uint32Array( 2048 );
	const exponentTable = new Uint32Array( 64 );
	const offsetTable = new Uint32Array( 64 );

	for ( let i = 1; i < 1024; ++ i ) {

		let m = i << 13; // zero pad mantissa bits
		let e = 0; // zero exponent

		// normalized
		while ( ( m & 0x00800000 ) === 0 ) {

			m <<= 1;
			e -= 0x00800000; // decrement exponent

		}

		m &= ~ 0x00800000; // clear leading 1 bit
		e += 0x38800000; // adjust bias

		mantissaTable[ i ] = m | e;

	}

	for ( let i = 1024; i < 2048; ++ i ) {

		mantissaTable[ i ] = 0x38000000 + ( ( i - 1024 ) << 13 );

	}

	for ( let i = 1; i < 31; ++ i ) {

		exponentTable[ i ] = i << 23;

	}

	exponentTable[ 31 ] = 0x47800000;
	exponentTable[ 32 ] = 0x80000000;

	for ( let i = 33; i < 63; ++ i ) {

		exponentTable[ i ] = 0x80000000 + ( ( i - 32 ) << 23 );

	}

	exponentTable[ 63 ] = 0xc7800000;

	for ( let i = 1; i < 64; ++ i ) {

		if ( i !== 32 ) {

			offsetTable[ i ] = 1024;

		}

	}

	return {
		floatView: floatView,
		uint32View: uint32View,
		baseTable: baseTable,
		shiftTable: shiftTable,
		mantissaTable: mantissaTable,
		exponentTable: exponentTable,
		offsetTable: offsetTable
	};

}

// float32 to float16

function toHalfFloat( val ) {

	if ( Math.abs( val ) > 65504 ) console.warn( 'THREE.DataUtils.toHalfFloat(): Value out of range.' );

	val = clamp( val, - 65504, 65504 );

	_tables.floatView[ 0 ] = val;
	const f = _tables.uint32View[ 0 ];
	const e = ( f >> 23 ) & 0x1ff;
	return _tables.baseTable[ e ] + ( ( f & 0x007fffff ) >> _tables.shiftTable[ e ] );

}

// float16 to float32

function fromHalfFloat( val ) {

	const m = val >> 10;
	_tables.uint32View[ 0 ] = _tables.mantissaTable[ _tables.offsetTable[ m ] + ( val & 0x3ff ) ] + _tables.exponentTable[ m ];
	return _tables.floatView[ 0 ];

}

const DataUtils = {
	toHalfFloat: toHalfFloat,
	fromHalfFloat: fromHalfFloat,
};

const _vector$9 = /*@__PURE__*/ new Vector3();
const _vector2$1 = /*@__PURE__*/ new Vector2();

class BufferAttribute {

	constructor( array, itemSize, normalized = false ) {

		if ( Array.isArray( array ) ) {

			throw new TypeError( 'THREE.BufferAttribute: array should be a Typed Array.' );

		}

		this.isBufferAttribute = true;

		this.name = '';

		this.array = array;
		this.itemSize = itemSize;
		this.count = array !== undefined ? array.length / itemSize : 0;
		this.normalized = normalized;

		this.usage = StaticDrawUsage;
		this.updateRanges = [];
		this.gpuType = FloatType;

		this.version = 0;

	}

	onUploadCallback() {}

	set needsUpdate( value ) {

		if ( value === true ) this.version ++;

	}

	setUsage( value ) {

		this.usage = value;

		return this;

	}

	addUpdateRange( start, count ) {

		this.updateRanges.push( { start, count } );

	}

	clearUpdateRanges() {

		this.updateRanges.length = 0;

	}

	copy( source ) {

		this.name = source.name;
		this.array = new source.array.constructor( source.array );
		this.itemSize = source.itemSize;
		this.count = source.count;
		this.normalized = source.normalized;

		this.usage = source.usage;
		this.gpuType = source.gpuType;

		return this;

	}

	copyAt( index1, attribute, index2 ) {

		index1 *= this.itemSize;
		index2 *= attribute.itemSize;

		for ( let i = 0, l = this.itemSize; i < l; i ++ ) {

			this.array[ index1 + i ] = attribute.array[ index2 + i ];

		}

		return this;

	}

	copyArray( array ) {

		this.array.set( array );

		return this;

	}

	applyMatrix3( m ) {

		if ( this.itemSize === 2 ) {

			for ( let i = 0, l = this.count; i < l; i ++ ) {

				_vector2$1.fromBufferAttribute( this, i );
				_vector2$1.applyMatrix3( m );

				this.setXY( i, _vector2$1.x, _vector2$1.y );

			}

		} else if ( this.itemSize === 3 ) {

			for ( let i = 0, l = this.count; i < l; i ++ ) {

				_vector$9.fromBufferAttribute( this, i );
				_vector$9.applyMatrix3( m );

				this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

			}

		}

		return this;

	}

	applyMatrix4( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$9.fromBufferAttribute( this, i );

			_vector$9.applyMatrix4( m );

			this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

		}

		return this;

	}

	applyNormalMatrix( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$9.fromBufferAttribute( this, i );

			_vector$9.applyNormalMatrix( m );

			this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

		}

		return this;

	}

	transformDirection( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$9.fromBufferAttribute( this, i );

			_vector$9.transformDirection( m );

			this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

		}

		return this;

	}

	set( value, offset = 0 ) {

		// Matching BufferAttribute constructor, do not normalize the array.
		this.array.set( value, offset );

		return this;

	}

	getComponent( index, component ) {

		let value = this.array[ index * this.itemSize + component ];

		if ( this.normalized ) value = denormalize( value, this.array );

		return value;

	}

	setComponent( index, component, value ) {

		if ( this.normalized ) value = normalize( value, this.array );

		this.array[ index * this.itemSize + component ] = value;

		return this;

	}

	getX( index ) {

		let x = this.array[ index * this.itemSize ];

		if ( this.normalized ) x = denormalize( x, this.array );

		return x;

	}

	setX( index, x ) {

		if ( this.normalized ) x = normalize( x, this.array );

		this.array[ index * this.itemSize ] = x;

		return this;

	}

	getY( index ) {

		let y = this.array[ index * this.itemSize + 1 ];

		if ( this.normalized ) y = denormalize( y, this.array );

		return y;

	}

	setY( index, y ) {

		if ( this.normalized ) y = normalize( y, this.array );

		this.array[ index * this.itemSize + 1 ] = y;

		return this;

	}

	getZ( index ) {

		let z = this.array[ index * this.itemSize + 2 ];

		if ( this.normalized ) z = denormalize( z, this.array );

		return z;

	}

	setZ( index, z ) {

		if ( this.normalized ) z = normalize( z, this.array );

		this.array[ index * this.itemSize + 2 ] = z;

		return this;

	}

	getW( index ) {

		let w = this.array[ index * this.itemSize + 3 ];

		if ( this.normalized ) w = denormalize( w, this.array );

		return w;

	}

	setW( index, w ) {

		if ( this.normalized ) w = normalize( w, this.array );

		this.array[ index * this.itemSize + 3 ] = w;

		return this;

	}

	setXY( index, x, y ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );

		}

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;

		return this;

	}

	setXYZ( index, x, y, z ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );
			z = normalize( z, this.array );

		}

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;
		this.array[ index + 2 ] = z;

		return this;

	}

	setXYZW( index, x, y, z, w ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );
			z = normalize( z, this.array );
			w = normalize( w, this.array );

		}

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;
		this.array[ index + 2 ] = z;
		this.array[ index + 3 ] = w;

		return this;

	}

	onUpload( callback ) {

		this.onUploadCallback = callback;

		return this;

	}

	clone() {

		return new this.constructor( this.array, this.itemSize ).copy( this );

	}

	toJSON() {

		const data = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from( this.array ),
			normalized: this.normalized
		};

		if ( this.name !== '' ) data.name = this.name;
		if ( this.usage !== StaticDrawUsage ) data.usage = this.usage;

		return data;

	}

}

//

class Int8BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Int8Array( array ), itemSize, normalized );

	}

}

class Uint8BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint8Array( array ), itemSize, normalized );

	}

}

class Uint8ClampedBufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint8ClampedArray( array ), itemSize, normalized );

	}

}

class Int16BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Int16Array( array ), itemSize, normalized );

	}

}

class Uint16BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint16Array( array ), itemSize, normalized );

	}

}

class Int32BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Int32Array( array ), itemSize, normalized );

	}

}

class Uint32BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint32Array( array ), itemSize, normalized );

	}

}

class Float16BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint16Array( array ), itemSize, normalized );

		this.isFloat16BufferAttribute = true;

	}

	getX( index ) {

		let x = fromHalfFloat( this.array[ index * this.itemSize ] );

		if ( this.normalized ) x = denormalize( x, this.array );

		return x;

	}

	setX( index, x ) {

		if ( this.normalized ) x = normalize( x, this.array );

		this.array[ index * this.itemSize ] = toHalfFloat( x );

		return this;

	}

	getY( index ) {

		let y = fromHalfFloat( this.array[ index * this.itemSize + 1 ] );

		if ( this.normalized ) y = denormalize( y, this.array );

		return y;

	}

	setY( index, y ) {

		if ( this.normalized ) y = normalize( y, this.array );

		this.array[ index * this.itemSize + 1 ] = toHalfFloat( y );

		return this;

	}

	getZ( index ) {

		let z = fromHalfFloat( this.array[ index * this.itemSize + 2 ] );

		if ( this.normalized ) z = denormalize( z, this.array );

		return z;

	}

	setZ( index, z ) {

		if ( this.normalized ) z = normalize( z, this.array );

		this.array[ index * this.itemSize + 2 ] = toHalfFloat( z );

		return this;

	}

	getW( index ) {

		let w = fromHalfFloat( this.array[ index * this.itemSize + 3 ] );

		if ( this.normalized ) w = denormalize( w, this.array );

		return w;

	}

	setW( index, w ) {

		if ( this.normalized ) w = normalize( w, this.array );

		this.array[ index * this.itemSize + 3 ] = toHalfFloat( w );

		return this;

	}

	setXY( index, x, y ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );

		}

		this.array[ index + 0 ] = toHalfFloat( x );
		this.array[ index + 1 ] = toHalfFloat( y );

		return this;

	}

	setXYZ( index, x, y, z ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );
			z = normalize( z, this.array );

		}

		this.array[ index + 0 ] = toHalfFloat( x );
		this.array[ index + 1 ] = toHalfFloat( y );
		this.array[ index + 2 ] = toHalfFloat( z );

		return this;

	}

	setXYZW( index, x, y, z, w ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );
			z = normalize( z, this.array );
			w = normalize( w, this.array );

		}

		this.array[ index + 0 ] = toHalfFloat( x );
		this.array[ index + 1 ] = toHalfFloat( y );
		this.array[ index + 2 ] = toHalfFloat( z );
		this.array[ index + 3 ] = toHalfFloat( w );

		return this;

	}

}


class Float32BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Float32Array( array ), itemSize, normalized );

	}

}

let _id$2 = 0;

const _m1$2 = /*@__PURE__*/ new Matrix4();
const _obj = /*@__PURE__*/ new Object3D();
const _offset = /*@__PURE__*/ new Vector3();
const _box$2 = /*@__PURE__*/ new Box3();
const _boxMorphTargets = /*@__PURE__*/ new Box3();
const _vector$8 = /*@__PURE__*/ new Vector3();

class BufferGeometry extends EventDispatcher {

	constructor() {

		super();

		this.isBufferGeometry = true;

		Object.defineProperty( this, 'id', { value: _id$2 ++ } );

		this.uuid = generateUUID();

		this.name = '';
		this.type = 'BufferGeometry';

		this.index = null;
		this.indirect = null;
		this.attributes = {};

		this.morphAttributes = {};
		this.morphTargetsRelative = false;

		this.groups = [];

		this.boundingBox = null;
		this.boundingSphere = null;

		this.drawRange = { start: 0, count: Infinity };

		this.userData = {};

	}

	getIndex() {

		return this.index;

	}

	setIndex( index ) {

		if ( Array.isArray( index ) ) {

			this.index = new ( arrayNeedsUint32( index ) ? Uint32BufferAttribute : Uint16BufferAttribute )( index, 1 );

		} else {

			this.index = index;

		}

		return this;

	}

	setIndirect( indirect ) {

		this.indirect = indirect;

		return this;

	}

	getIndirect() {

		return this.indirect;

	}

	getAttribute( name ) {

		return this.attributes[ name ];

	}

	setAttribute( name, attribute ) {

		this.attributes[ name ] = attribute;

		return this;

	}

	deleteAttribute( name ) {

		delete this.attributes[ name ];

		return this;

	}

	hasAttribute( name ) {

		return this.attributes[ name ] !== undefined;

	}

	addGroup( start, count, materialIndex = 0 ) {

		this.groups.push( {

			start: start,
			count: count,
			materialIndex: materialIndex

		} );

	}

	clearGroups() {

		this.groups = [];

	}

	setDrawRange( start, count ) {

		this.drawRange.start = start;
		this.drawRange.count = count;

	}

	applyMatrix4( matrix ) {

		const position = this.attributes.position;

		if ( position !== undefined ) {

			position.applyMatrix4( matrix );

			position.needsUpdate = true;

		}

		const normal = this.attributes.normal;

		if ( normal !== undefined ) {

			const normalMatrix = new Matrix3().getNormalMatrix( matrix );

			normal.applyNormalMatrix( normalMatrix );

			normal.needsUpdate = true;

		}

		const tangent = this.attributes.tangent;

		if ( tangent !== undefined ) {

			tangent.transformDirection( matrix );

			tangent.needsUpdate = true;

		}

		if ( this.boundingBox !== null ) {

			this.computeBoundingBox();

		}

		if ( this.boundingSphere !== null ) {

			this.computeBoundingSphere();

		}

		return this;

	}

	applyQuaternion( q ) {

		_m1$2.makeRotationFromQuaternion( q );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	rotateX( angle ) {

		// rotate geometry around world x-axis

		_m1$2.makeRotationX( angle );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	rotateY( angle ) {

		// rotate geometry around world y-axis

		_m1$2.makeRotationY( angle );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	rotateZ( angle ) {

		// rotate geometry around world z-axis

		_m1$2.makeRotationZ( angle );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	translate( x, y, z ) {

		// translate geometry

		_m1$2.makeTranslation( x, y, z );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	scale( x, y, z ) {

		// scale geometry

		_m1$2.makeScale( x, y, z );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	lookAt( vector ) {

		_obj.lookAt( vector );

		_obj.updateMatrix();

		this.applyMatrix4( _obj.matrix );

		return this;

	}

	center() {

		this.computeBoundingBox();

		this.boundingBox.getCenter( _offset ).negate();

		this.translate( _offset.x, _offset.y, _offset.z );

		return this;

	}

	setFromPoints( points ) {

		const positionAttribute = this.getAttribute( 'position' );

		if ( positionAttribute === undefined ) {

			const position = [];

			for ( let i = 0, l = points.length; i < l; i ++ ) {

				const point = points[ i ];
				position.push( point.x, point.y, point.z || 0 );

			}

			this.setAttribute( 'position', new Float32BufferAttribute( position, 3 ) );

		} else {

			for ( let i = 0, l = positionAttribute.count; i < l; i ++ ) {

				const point = points[ i ];
				positionAttribute.setXYZ( i, point.x, point.y, point.z || 0 );

			}

			if ( points.length > positionAttribute.count ) {

				console.warn( 'THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.' );

			}

			positionAttribute.needsUpdate = true;

		}

		return this;

	}

	computeBoundingBox() {

		if ( this.boundingBox === null ) {

			this.boundingBox = new Box3();

		}

		const position = this.attributes.position;
		const morphAttributesPosition = this.morphAttributes.position;

		if ( position && position.isGLBufferAttribute ) {

			console.error( 'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.', this );

			this.boundingBox.set(
				new Vector3( - Infinity, - Infinity, - Infinity ),
				new Vector3( + Infinity, + Infinity, + Infinity )
			);

			return;

		}

		if ( position !== undefined ) {

			this.boundingBox.setFromBufferAttribute( position );

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					_box$2.setFromBufferAttribute( morphAttribute );

					if ( this.morphTargetsRelative ) {

						_vector$8.addVectors( this.boundingBox.min, _box$2.min );
						this.boundingBox.expandByPoint( _vector$8 );

						_vector$8.addVectors( this.boundingBox.max, _box$2.max );
						this.boundingBox.expandByPoint( _vector$8 );

					} else {

						this.boundingBox.expandByPoint( _box$2.min );
						this.boundingBox.expandByPoint( _box$2.max );

					}

				}

			}

		} else {

			this.boundingBox.makeEmpty();

		}

		if ( isNaN( this.boundingBox.min.x ) || isNaN( this.boundingBox.min.y ) || isNaN( this.boundingBox.min.z ) ) {

			console.error( 'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this );

		}

	}

	computeBoundingSphere() {

		if ( this.boundingSphere === null ) {

			this.boundingSphere = new Sphere();

		}

		const position = this.attributes.position;
		const morphAttributesPosition = this.morphAttributes.position;

		if ( position && position.isGLBufferAttribute ) {

			console.error( 'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.', this );

			this.boundingSphere.set( new Vector3(), Infinity );

			return;

		}

		if ( position ) {

			// first, find the center of the bounding sphere

			const center = this.boundingSphere.center;

			_box$2.setFromBufferAttribute( position );

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					_boxMorphTargets.setFromBufferAttribute( morphAttribute );

					if ( this.morphTargetsRelative ) {

						_vector$8.addVectors( _box$2.min, _boxMorphTargets.min );
						_box$2.expandByPoint( _vector$8 );

						_vector$8.addVectors( _box$2.max, _boxMorphTargets.max );
						_box$2.expandByPoint( _vector$8 );

					} else {

						_box$2.expandByPoint( _boxMorphTargets.min );
						_box$2.expandByPoint( _boxMorphTargets.max );

					}

				}

			}

			_box$2.getCenter( center );

			// second, try to find a boundingSphere with a radius smaller than the
			// boundingSphere of the boundingBox: sqrt(3) smaller in the best case

			let maxRadiusSq = 0;

			for ( let i = 0, il = position.count; i < il; i ++ ) {

				_vector$8.fromBufferAttribute( position, i );

				maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( _vector$8 ) );

			}

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					const morphTargetsRelative = this.morphTargetsRelative;

					for ( let j = 0, jl = morphAttribute.count; j < jl; j ++ ) {

						_vector$8.fromBufferAttribute( morphAttribute, j );

						if ( morphTargetsRelative ) {

							_offset.fromBufferAttribute( position, j );
							_vector$8.add( _offset );

						}

						maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( _vector$8 ) );

					}

				}

			}

			this.boundingSphere.radius = Math.sqrt( maxRadiusSq );

			if ( isNaN( this.boundingSphere.radius ) ) {

				console.error( 'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this );

			}

		}

	}

	computeTangents() {

		const index = this.index;
		const attributes = this.attributes;

		// based on http://www.terathon.com/code/tangent.html
		// (per vertex tangents)

		if ( index === null ||
			 attributes.position === undefined ||
			 attributes.normal === undefined ||
			 attributes.uv === undefined ) {

			console.error( 'THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)' );
			return;

		}

		const positionAttribute = attributes.position;
		const normalAttribute = attributes.normal;
		const uvAttribute = attributes.uv;

		if ( this.hasAttribute( 'tangent' ) === false ) {

			this.setAttribute( 'tangent', new BufferAttribute( new Float32Array( 4 * positionAttribute.count ), 4 ) );

		}

		const tangentAttribute = this.getAttribute( 'tangent' );

		const tan1 = [], tan2 = [];

		for ( let i = 0; i < positionAttribute.count; i ++ ) {

			tan1[ i ] = new Vector3();
			tan2[ i ] = new Vector3();

		}

		const vA = new Vector3(),
			vB = new Vector3(),
			vC = new Vector3(),

			uvA = new Vector2(),
			uvB = new Vector2(),
			uvC = new Vector2(),

			sdir = new Vector3(),
			tdir = new Vector3();

		function handleTriangle( a, b, c ) {

			vA.fromBufferAttribute( positionAttribute, a );
			vB.fromBufferAttribute( positionAttribute, b );
			vC.fromBufferAttribute( positionAttribute, c );

			uvA.fromBufferAttribute( uvAttribute, a );
			uvB.fromBufferAttribute( uvAttribute, b );
			uvC.fromBufferAttribute( uvAttribute, c );

			vB.sub( vA );
			vC.sub( vA );

			uvB.sub( uvA );
			uvC.sub( uvA );

			const r = 1.0 / ( uvB.x * uvC.y - uvC.x * uvB.y );

			// silently ignore degenerate uv triangles having coincident or colinear vertices

			if ( ! isFinite( r ) ) return;

			sdir.copy( vB ).multiplyScalar( uvC.y ).addScaledVector( vC, - uvB.y ).multiplyScalar( r );
			tdir.copy( vC ).multiplyScalar( uvB.x ).addScaledVector( vB, - uvC.x ).multiplyScalar( r );

			tan1[ a ].add( sdir );
			tan1[ b ].add( sdir );
			tan1[ c ].add( sdir );

			tan2[ a ].add( tdir );
			tan2[ b ].add( tdir );
			tan2[ c ].add( tdir );

		}

		let groups = this.groups;

		if ( groups.length === 0 ) {

			groups = [ {
				start: 0,
				count: index.count
			} ];

		}

		for ( let i = 0, il = groups.length; i < il; ++ i ) {

			const group = groups[ i ];

			const start = group.start;
			const count = group.count;

			for ( let j = start, jl = start + count; j < jl; j += 3 ) {

				handleTriangle(
					index.getX( j + 0 ),
					index.getX( j + 1 ),
					index.getX( j + 2 )
				);

			}

		}

		const tmp = new Vector3(), tmp2 = new Vector3();
		const n = new Vector3(), n2 = new Vector3();

		function handleVertex( v ) {

			n.fromBufferAttribute( normalAttribute, v );
			n2.copy( n );

			const t = tan1[ v ];

			// Gram-Schmidt orthogonalize

			tmp.copy( t );
			tmp.sub( n.multiplyScalar( n.dot( t ) ) ).normalize();

			// Calculate handedness

			tmp2.crossVectors( n2, t );
			const test = tmp2.dot( tan2[ v ] );
			const w = ( test < 0.0 ) ? - 1.0 : 1.0;

			tangentAttribute.setXYZW( v, tmp.x, tmp.y, tmp.z, w );

		}

		for ( let i = 0, il = groups.length; i < il; ++ i ) {

			const group = groups[ i ];

			const start = group.start;
			const count = group.count;

			for ( let j = start, jl = start + count; j < jl; j += 3 ) {

				handleVertex( index.getX( j + 0 ) );
				handleVertex( index.getX( j + 1 ) );
				handleVertex( index.getX( j + 2 ) );

			}

		}

	}

	computeVertexNormals() {

		const index = this.index;
		const positionAttribute = this.getAttribute( 'position' );

		if ( positionAttribute !== undefined ) {

			let normalAttribute = this.getAttribute( 'normal' );

			if ( normalAttribute === undefined ) {

				normalAttribute = new BufferAttribute( new Float32Array( positionAttribute.count * 3 ), 3 );
				this.setAttribute( 'normal', normalAttribute );

			} else {

				// reset existing normals to zero

				for ( let i = 0, il = normalAttribute.count; i < il; i ++ ) {

					normalAttribute.setXYZ( i, 0, 0, 0 );

				}

			}

			const pA = new Vector3(), pB = new Vector3(), pC = new Vector3();
			const nA = new Vector3(), nB = new Vector3(), nC = new Vector3();
			const cb = new Vector3(), ab = new Vector3();

			// indexed elements

			if ( index ) {

				for ( let i = 0, il = index.count; i < il; i += 3 ) {

					const vA = index.getX( i + 0 );
					const vB = index.getX( i + 1 );
					const vC = index.getX( i + 2 );

					pA.fromBufferAttribute( positionAttribute, vA );
					pB.fromBufferAttribute( positionAttribute, vB );
					pC.fromBufferAttribute( positionAttribute, vC );

					cb.subVectors( pC, pB );
					ab.subVectors( pA, pB );
					cb.cross( ab );

					nA.fromBufferAttribute( normalAttribute, vA );
					nB.fromBufferAttribute( normalAttribute, vB );
					nC.fromBufferAttribute( normalAttribute, vC );

					nA.add( cb );
					nB.add( cb );
					nC.add( cb );

					normalAttribute.setXYZ( vA, nA.x, nA.y, nA.z );
					normalAttribute.setXYZ( vB, nB.x, nB.y, nB.z );
					normalAttribute.setXYZ( vC, nC.x, nC.y, nC.z );

				}

			} else {

				// non-indexed elements (unconnected triangle soup)

				for ( let i = 0, il = positionAttribute.count; i < il; i += 3 ) {

					pA.fromBufferAttribute( positionAttribute, i + 0 );
					pB.fromBufferAttribute( positionAttribute, i + 1 );
					pC.fromBufferAttribute( positionAttribute, i + 2 );

					cb.subVectors( pC, pB );
					ab.subVectors( pA, pB );
					cb.cross( ab );

					normalAttribute.setXYZ( i + 0, cb.x, cb.y, cb.z );
					normalAttribute.setXYZ( i + 1, cb.x, cb.y, cb.z );
					normalAttribute.setXYZ( i + 2, cb.x, cb.y, cb.z );

				}

			}

			this.normalizeNormals();

			normalAttribute.needsUpdate = true;

		}

	}

	normalizeNormals() {

		const normals = this.attributes.normal;

		for ( let i = 0, il = normals.count; i < il; i ++ ) {

			_vector$8.fromBufferAttribute( normals, i );

			_vector$8.normalize();

			normals.setXYZ( i, _vector$8.x, _vector$8.y, _vector$8.z );

		}

	}

	toNonIndexed() {

		function convertBufferAttribute( attribute, indices ) {

			const array = attribute.array;
			const itemSize = attribute.itemSize;
			const normalized = attribute.normalized;

			const array2 = new array.constructor( indices.length * itemSize );

			let index = 0, index2 = 0;

			for ( let i = 0, l = indices.length; i < l; i ++ ) {

				if ( attribute.isInterleavedBufferAttribute ) {

					index = indices[ i ] * attribute.data.stride + attribute.offset;

				} else {

					index = indices[ i ] * itemSize;

				}

				for ( let j = 0; j < itemSize; j ++ ) {

					array2[ index2 ++ ] = array[ index ++ ];

				}

			}

			return new BufferAttribute( array2, itemSize, normalized );

		}

		//

		if ( this.index === null ) {

			console.warn( 'THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.' );
			return this;

		}

		const geometry2 = new BufferGeometry();

		const indices = this.index.array;
		const attributes = this.attributes;

		// attributes

		for ( const name in attributes ) {

			const attribute = attributes[ name ];

			const newAttribute = convertBufferAttribute( attribute, indices );

			geometry2.setAttribute( name, newAttribute );

		}

		// morph attributes

		const morphAttributes = this.morphAttributes;

		for ( const name in morphAttributes ) {

			const morphArray = [];
			const morphAttribute = morphAttributes[ name ]; // morphAttribute: array of Float32BufferAttributes

			for ( let i = 0, il = morphAttribute.length; i < il; i ++ ) {

				const attribute = morphAttribute[ i ];

				const newAttribute = convertBufferAttribute( attribute, indices );

				morphArray.push( newAttribute );

			}

			geometry2.morphAttributes[ name ] = morphArray;

		}

		geometry2.morphTargetsRelative = this.morphTargetsRelative;

		// groups

		const groups = this.groups;

		for ( let i = 0, l = groups.length; i < l; i ++ ) {

			const group = groups[ i ];
			geometry2.addGroup( group.start, group.count, group.materialIndex );

		}

		return geometry2;

	}

	toJSON() {

		const data = {
			metadata: {
				version: 4.6,
				type: 'BufferGeometry',
				generator: 'BufferGeometry.toJSON'
			}
		};

		// standard BufferGeometry serialization

		data.uuid = this.uuid;
		data.type = this.type;
		if ( this.name !== '' ) data.name = this.name;
		if ( Object.keys( this.userData ).length > 0 ) data.userData = this.userData;

		if ( this.parameters !== undefined ) {

			const parameters = this.parameters;

			for ( const key in parameters ) {

				if ( parameters[ key ] !== undefined ) data[ key ] = parameters[ key ];

			}

			return data;

		}

		// for simplicity the code assumes attributes are not shared across geometries, see #15811

		data.data = { attributes: {} };

		const index = this.index;

		if ( index !== null ) {

			data.data.index = {
				type: index.array.constructor.name,
				array: Array.prototype.slice.call( index.array )
			};

		}

		const attributes = this.attributes;

		for ( const key in attributes ) {

			const attribute = attributes[ key ];

			data.data.attributes[ key ] = attribute.toJSON( data.data );

		}

		const morphAttributes = {};
		let hasMorphAttributes = false;

		for ( const key in this.morphAttributes ) {

			const attributeArray = this.morphAttributes[ key ];

			const array = [];

			for ( let i = 0, il = attributeArray.length; i < il; i ++ ) {

				const attribute = attributeArray[ i ];

				array.push( attribute.toJSON( data.data ) );

			}

			if ( array.length > 0 ) {

				morphAttributes[ key ] = array;

				hasMorphAttributes = true;

			}

		}

		if ( hasMorphAttributes ) {

			data.data.morphAttributes = morphAttributes;
			data.data.morphTargetsRelative = this.morphTargetsRelative;

		}

		const groups = this.groups;

		if ( groups.length > 0 ) {

			data.data.groups = JSON.parse( JSON.stringify( groups ) );

		}

		const boundingSphere = this.boundingSphere;

		if ( boundingSphere !== null ) {

			data.data.boundingSphere = {
				center: boundingSphere.center.toArray(),
				radius: boundingSphere.radius
			};

		}

		return data;

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( source ) {

		// reset

		this.index = null;
		this.attributes = {};
		this.morphAttributes = {};
		this.groups = [];
		this.boundingBox = null;
		this.boundingSphere = null;

		// used for storing cloned, shared data

		const data = {};

		// name

		this.name = source.name;

		// index

		const index = source.index;

		if ( index !== null ) {

			this.setIndex( index.clone( data ) );

		}

		// attributes

		const attributes = source.attributes;

		for ( const name in attributes ) {

			const attribute = attributes[ name ];
			this.setAttribute( name, attribute.clone( data ) );

		}

		// morph attributes

		const morphAttributes = source.morphAttributes;

		for ( const name in morphAttributes ) {

			const array = [];
			const morphAttribute = morphAttributes[ name ]; // morphAttribute: array of Float32BufferAttributes

			for ( let i = 0, l = morphAttribute.length; i < l; i ++ ) {

				array.push( morphAttribute[ i ].clone( data ) );

			}

			this.morphAttributes[ name ] = array;

		}

		this.morphTargetsRelative = source.morphTargetsRelative;

		// groups

		const groups = source.groups;

		for ( let i = 0, l = groups.length; i < l; i ++ ) {

			const group = groups[ i ];
			this.addGroup( group.start, group.count, group.materialIndex );

		}

		// bounding box

		const boundingBox = source.boundingBox;

		if ( boundingBox !== null ) {

			this.boundingBox = boundingBox.clone();

		}

		// bounding sphere

		const boundingSphere = source.boundingSphere;

		if ( boundingSphere !== null ) {

			this.boundingSphere = boundingSphere.clone();

		}

		// draw range

		this.drawRange.start = source.drawRange.start;
		this.drawRange.count = source.drawRange.count;

		// user data

		this.userData = source.userData;

		return this;

	}

	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

}

const _inverseMatrix$3 = /*@__PURE__*/ new Matrix4();
const _ray$3 = /*@__PURE__*/ new Ray();
const _sphere$6 = /*@__PURE__*/ new Sphere();
const _sphereHitAt = /*@__PURE__*/ new Vector3();

const _vA$1 = /*@__PURE__*/ new Vector3();
const _vB$1 = /*@__PURE__*/ new Vector3();
const _vC$1 = /*@__PURE__*/ new Vector3();

const _tempA = /*@__PURE__*/ new Vector3();
const _morphA = /*@__PURE__*/ new Vector3();

const _intersectionPoint = /*@__PURE__*/ new Vector3();
const _intersectionPointWorld = /*@__PURE__*/ new Vector3();

class Mesh extends Object3D {

	constructor( geometry = new BufferGeometry(), material = new MeshBasicMaterial() ) {

		super();

		this.isMesh = true;

		this.type = 'Mesh';

		this.geometry = geometry;
		this.material = material;

		this.updateMorphTargets();

	}

	copy( source, recursive ) {

		super.copy( source, recursive );

		if ( source.morphTargetInfluences !== undefined ) {

			this.morphTargetInfluences = source.morphTargetInfluences.slice();

		}

		if ( source.morphTargetDictionary !== undefined ) {

			this.morphTargetDictionary = Object.assign( {}, source.morphTargetDictionary );

		}

		this.material = Array.isArray( source.material ) ? source.material.slice() : source.material;
		this.geometry = source.geometry;

		return this;

	}

	updateMorphTargets() {

		const geometry = this.geometry;

		const morphAttributes = geometry.morphAttributes;
		const keys = Object.keys( morphAttributes );

		if ( keys.length > 0 ) {

			const morphAttribute = morphAttributes[ keys[ 0 ] ];

			if ( morphAttribute !== undefined ) {

				this.morphTargetInfluences = [];
				this.morphTargetDictionary = {};

				for ( let m = 0, ml = morphAttribute.length; m < ml; m ++ ) {

					const name = morphAttribute[ m ].name || String( m );

					this.morphTargetInfluences.push( 0 );
					this.morphTargetDictionary[ name ] = m;

				}

			}

		}

	}

	getVertexPosition( index, target ) {

		const geometry = this.geometry;
		const position = geometry.attributes.position;
		const morphPosition = geometry.morphAttributes.position;
		const morphTargetsRelative = geometry.morphTargetsRelative;

		target.fromBufferAttribute( position, index );

		const morphInfluences = this.morphTargetInfluences;

		if ( morphPosition && morphInfluences ) {

			_morphA.set( 0, 0, 0 );

			for ( let i = 0, il = morphPosition.length; i < il; i ++ ) {

				const influence = morphInfluences[ i ];
				const morphAttribute = morphPosition[ i ];

				if ( influence === 0 ) continue;

				_tempA.fromBufferAttribute( morphAttribute, index );

				if ( morphTargetsRelative ) {

					_morphA.addScaledVector( _tempA, influence );

				} else {

					_morphA.addScaledVector( _tempA.sub( target ), influence );

				}

			}

			target.add( _morphA );

		}

		return target;

	}

	raycast( raycaster, intersects ) {

		const geometry = this.geometry;
		const material = this.material;
		const matrixWorld = this.matrixWorld;

		if ( material === undefined ) return;

		// test with bounding sphere in world space

		if ( geometry.boundingSphere === null ) geometry.computeBoundingSphere();

		_sphere$6.copy( geometry.boundingSphere );
		_sphere$6.applyMatrix4( matrixWorld );

		// check distance from ray origin to bounding sphere

		_ray$3.copy( raycaster.ray ).recast( raycaster.near );

		if ( _sphere$6.containsPoint( _ray$3.origin ) === false ) {

			if ( _ray$3.intersectSphere( _sphere$6, _sphereHitAt ) === null ) return;

			if ( _ray$3.origin.distanceToSquared( _sphereHitAt ) > ( raycaster.far - raycaster.near ) ** 2 ) return;

		}

		// convert ray to local space of mesh

		_inverseMatrix$3.copy( matrixWorld ).invert();
		_ray$3.copy( raycaster.ray ).applyMatrix4( _inverseMatrix$3 );

		// test with bounding box in local space

		if ( geometry.boundingBox !== null ) {

			if ( _ray$3.intersectsBox( geometry.boundingBox ) === false ) return;

		}

		// test for intersections with geometry

		this._computeIntersections( raycaster, intersects, _ray$3 );

	}

	_computeIntersections( raycaster, intersects, rayLocalSpace ) {

		let intersection;

		const geometry = this.geometry;
		const material = this.material;

		const index = geometry.index;
		const position = geometry.attributes.position;
		const uv = geometry.attributes.uv;
		const uv1 = geometry.attributes.uv1;
		const normal = geometry.attributes.normal;
		const groups = geometry.groups;
		const drawRange = geometry.drawRange;

		if ( index !== null ) {

			// indexed buffer geometry

			if ( Array.isArray( material ) ) {

				for ( let i = 0, il = groups.length; i < il; i ++ ) {

					const group = groups[ i ];
					const groupMaterial = material[ group.materialIndex ];

					const start = Math.max( group.start, drawRange.start );
					const end = Math.min( index.count, Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) ) );

					for ( let j = start, jl = end; j < jl; j += 3 ) {

						const a = index.getX( j );
						const b = index.getX( j + 1 );
						const c = index.getX( j + 2 );

						intersection = checkGeometryIntersection( this, groupMaterial, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c );

						if ( intersection ) {

							intersection.faceIndex = Math.floor( j / 3 ); // triangle number in indexed buffer semantics
							intersection.face.materialIndex = group.materialIndex;
							intersects.push( intersection );

						}

					}

				}

			} else {

				const start = Math.max( 0, drawRange.start );
				const end = Math.min( index.count, ( drawRange.start + drawRange.count ) );

				for ( let i = start, il = end; i < il; i += 3 ) {

					const a = index.getX( i );
					const b = index.getX( i + 1 );
					const c = index.getX( i + 2 );

					intersection = checkGeometryIntersection( this, material, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c );

					if ( intersection ) {

						intersection.faceIndex = Math.floor( i / 3 ); // triangle number in indexed buffer semantics
						intersects.push( intersection );

					}

				}

			}

		} else if ( position !== undefined ) {

			// non-indexed buffer geometry

			if ( Array.isArray( material ) ) {

				for ( let i = 0, il = groups.length; i < il; i ++ ) {

					const group = groups[ i ];
					const groupMaterial = material[ group.materialIndex ];

					const start = Math.max( group.start, drawRange.start );
					const end = Math.min( position.count, Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) ) );

					for ( let j = start, jl = end; j < jl; j += 3 ) {

						const a = j;
						const b = j + 1;
						const c = j + 2;

						intersection = checkGeometryIntersection( this, groupMaterial, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c );

						if ( intersection ) {

							intersection.faceIndex = Math.floor( j / 3 ); // triangle number in non-indexed buffer semantics
							intersection.face.materialIndex = group.materialIndex;
							intersects.push( intersection );

						}

					}

				}

			} else {

				const start = Math.max( 0, drawRange.start );
				const end = Math.min( position.count, ( drawRange.start + drawRange.count ) );

				for ( let i = start, il = end; i < il; i += 3 ) {

					const a = i;
					const b = i + 1;
					const c = i + 2;

					intersection = checkGeometryIntersection( this, material, raycaster, rayLocalSpace, uv, uv1, normal, a, b, c );

					if ( intersection ) {

						intersection.faceIndex = Math.floor( i / 3 ); // triangle number in non-indexed buffer semantics
						intersects.push( intersection );

					}

				}

			}

		}

	}

}

function checkIntersection$1( object, material, raycaster, ray, pA, pB, pC, point ) {

	let intersect;

	if ( material.side === BackSide ) {

		intersect = ray.intersectTriangle( pC, pB, pA, true, point );

	} else {

		intersect = ray.intersectTriangle( pA, pB, pC, ( material.side === FrontSide ), point );

	}

	if ( intersect === null ) return null;

	_intersectionPointWorld.copy( point );
	_intersectionPointWorld.applyMatrix4( object.matrixWorld );

	const distance = raycaster.ray.origin.distanceTo( _intersectionPointWorld );

	if ( distance < raycaster.near || distance > raycaster.far ) return null;

	return {
		distance: distance,
		point: _intersectionPointWorld.clone(),
		object: object
	};

}

function checkGeometryIntersection( object, material, raycaster, ray, uv, uv1, normal, a, b, c ) {

	object.getVertexPosition( a, _vA$1 );
	object.getVertexPosition( b, _vB$1 );
	object.getVertexPosition( c, _vC$1 );

	const intersection = checkIntersection$1( object, material, raycaster, ray, _vA$1, _vB$1, _vC$1, _intersectionPoint );

	if ( intersection ) {

		const barycoord = new Vector3();
		Triangle.getBarycoord( _intersectionPoint, _vA$1, _vB$1, _vC$1, barycoord );

		if ( uv ) {

			intersection.uv = Triangle.getInterpolatedAttribute( uv, a, b, c, barycoord, new Vector2() );

		}

		if ( uv1 ) {

			intersection.uv1 = Triangle.getInterpolatedAttribute( uv1, a, b, c, barycoord, new Vector2() );

		}

		if ( normal ) {

			intersection.normal = Triangle.getInterpolatedAttribute( normal, a, b, c, barycoord, new Vector3() );

			if ( intersection.normal.dot( ray.direction ) > 0 ) {

				intersection.normal.multiplyScalar( - 1 );

			}

		}

		const face = {
			a: a,
			b: b,
			c: c,
			normal: new Vector3(),
			materialIndex: 0
		};

		Triangle.getNormal( _vA$1, _vB$1, _vC$1, face.normal );

		intersection.face = face;
		intersection.barycoord = barycoord;

	}

	return intersection;

}

class BoxGeometry extends BufferGeometry {

	constructor( width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1 ) {

		super();

		this.type = 'BoxGeometry';

		this.parameters = {
			width: width,
			height: height,
			depth: depth,
			widthSegments: widthSegments,
			heightSegments: heightSegments,
			depthSegments: depthSegments
		};

		const scope = this;

		// segments

		widthSegments = Math.floor( widthSegments );
		heightSegments = Math.floor( heightSegments );
		depthSegments = Math.floor( depthSegments );

		// buffers

		const indices = [];
		const vertices = [];
		const normals = [];
		const uvs = [];

		// helper variables

		let numberOfVertices = 0;
		let groupStart = 0;

		// build each side of the box geometry

		buildPlane( 'z', 'y', 'x', - 1, - 1, depth, height, width, depthSegments, heightSegments, 0 ); // px
		buildPlane( 'z', 'y', 'x', 1, - 1, depth, height, - width, depthSegments, heightSegments, 1 ); // nx
		buildPlane( 'x', 'z', 'y', 1, 1, width, depth, height, widthSegments, depthSegments, 2 ); // py
		buildPlane( 'x', 'z', 'y', 1, - 1, width, depth, - height, widthSegments, depthSegments, 3 ); // ny
		buildPlane( 'x', 'y', 'z', 1, - 1, width, height, depth, widthSegments, heightSegments, 4 ); // pz
		buildPlane( 'x', 'y', 'z', - 1, - 1, width, height, - depth, widthSegments, heightSegments, 5 ); // nz

		// build geometry

		this.setIndex( indices );
		this.setAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) );
		this.setAttribute( 'normal', new Float32BufferAttribute( normals, 3 ) );
		this.setAttribute( 'uv', new Float32BufferAttribute( uvs, 2 ) );

		function buildPlane( u, v, w, udir, vdir, width, height, depth, gridX, gridY, materialIndex ) {

			const segmentWidth = width / gridX;
			const segmentHeight = height / gridY;

			const widthHalf = width / 2;
			const heightHalf = height / 2;
			const depthHalf = depth / 2;

			const gridX1 = gridX + 1;
			const gridY1 = gridY + 1;

			let vertexCounter = 0;
			let groupCount = 0;

			const vector = new Vector3();

			// generate vertices, normals and uvs

			for ( let iy = 0; iy < gridY1; iy ++ ) {

				const y = iy * segmentHeight - heightHalf;

				for ( let ix = 0; ix < gridX1; ix ++ ) {

					const x = ix * segmentWidth - widthHalf;

					// set values to correct vector component

					vector[ u ] = x * udir;
					vector[ v ] = y * vdir;
					vector[ w ] = depthHalf;

					// now apply vector to vertex buffer

					vertices.push( vector.x, vector.y, vector.z );

					// set values to correct vector component

					vector[ u ] = 0;
					vector[ v ] = 0;
					vector[ w ] = depth > 0 ? 1 : - 1;

					// now apply vector to normal buffer

					normals.push( vector.x, vector.y, vector.z );

					// uvs

					uvs.push( ix / gridX );
					uvs.push( 1 - ( iy / gridY ) );

					// counters

					vertexCounter += 1;

				}

			}

			// indices

			// 1. you need three indices to draw a single face
			// 2. a single segment consists of two faces
			// 3. so we need to generate six (2*3) indices per segment

			for ( let iy = 0; iy < gridY; iy ++ ) {

				for ( let ix = 0; ix < gridX; ix ++ ) {

					const a = numberOfVertices + ix + gridX1 * iy;
					const b = numberOfVertices + ix + gridX1 * ( iy + 1 );
					const c = numberOfVertices + ( ix + 1 ) + gridX1 * ( iy + 1 );
					const d = numberOfVertices + ( ix + 1 ) + gridX1 * iy;

					// faces

					indices.push( a, b, d );
					indices.push( b, c, d );

					// increase counter

					groupCount += 6;

				}

			}

			// add a group to the geometry. this will ensure multi material support

			scope.addGroup( groupStart, groupCount, materialIndex );

			// calculate new start value for groups

			groupStart += groupCount;

			// update total number of vertices

			numberOfVertices += vertexCounter;

		}

	}

	copy( source ) {

		super.copy( source );

		this.parameters = Object.assign( {}, source.parameters );

		return this;

	}

	static fromJSON( data ) {

		return new BoxGeometry( data.width, data.height, data.depth, data.widthSegments, data.heightSegments, data.depthSegments );

	}

}

/**
 * Uniform Utilities
 */

function cloneUniforms( src ) {

	const dst = {};

	for ( const u in src ) {

		dst[ u ] = {};

		for ( const p in src[ u ] ) {

			const property = src[ u ][ p ];

			if ( property && ( property.isColor ||
				property.isMatrix3 || property.isMatrix4 ||
				property.isVector2 || property.isVector3 || property.isVector4 ||
				property.isTexture || property.isQuaternion ) ) {

				if ( property.isRenderTargetTexture ) {

					console.warn( 'UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().' );
					dst[ u ][ p ] = null;

				} else {

					dst[ u ][ p ] = property.clone();

				}

			} else if ( Array.isArray( property ) ) {

				dst[ u ][ p ] = property.slice();

			} else {

				dst[ u ][ p ] = property;

			}

		}

	}

	return dst;

}

function mergeUniforms( uniforms ) {

	const merged = {};

	for ( let u = 0; u < uniforms.length; u ++ ) {

		const tmp = cloneUniforms( uniforms[ u ] );

		for ( const p in tmp ) {

			merged[ p ] = tmp[ p ];

		}

	}

	return merged;

}

function cloneUniformsGroups( src ) {

	const dst = [];

	for ( let u = 0; u < src.length; u ++ ) {

		dst.push( src[ u ].clone() );

	}

	return dst;

}

function getUnlitUniformColorSpace( renderer ) {

	const currentRenderTarget = renderer.getRenderTarget();

	if ( currentRenderTarget === null ) {

		// https://github.com/mrdoob/three.js/pull/23937#issuecomment-1111067398
		return renderer.outputColorSpace;

	}

	// https://github.com/mrdoob/three.js/issues/27868
	if ( currentRenderTarget.isXRRenderTarget === true ) {

		return currentRenderTarget.texture.colorSpace;

	}

	return ColorManagement.workingColorSpace;

}

// Legacy

const UniformsUtils = { clone: cloneUniforms, merge: mergeUniforms };

var default_vertex = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";

var default_fragment = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";

class ShaderMaterial extends Material {

	static get type() {

		return 'ShaderMaterial';

	}

	constructor( parameters ) {

		super();

		this.isShaderMaterial = true;

		this.defines = {};
		this.uniforms = {};
		this.uniformsGroups = [];

		this.vertexShader = default_vertex;
		this.fragmentShader = default_fragment;

		this.linewidth = 1;

		this.wireframe = false;
		this.wireframeLinewidth = 1;

		this.fog = false; // set to use scene fog
		this.lights = false; // set to use scene lights
		this.clipping = false; // set to use user-defined clipping planes

		this.forceSinglePass = true;

		this.extensions = {
			clipCullDistance: false, // set to use vertex shader clipping
			multiDraw: false // set to use vertex shader multi_draw / enable gl_DrawID
		};

		// When rendered geometry doesn't include these attributes but the material does,
		// use these default values in WebGL. This avoids errors when buffer data is missing.
		this.defaultAttributeValues = {
			'color': [ 1, 1, 1 ],
			'uv': [ 0, 0 ],
			'uv1': [ 0, 0 ]
		};

		this.index0AttributeName = undefined;
		this.uniformsNeedUpdate = false;

		this.glslVersion = null;

		if ( parameters !== undefined ) {

			this.setValues( parameters );

		}

	}

	copy( source ) {

		super.copy( source );

		this.fragmentShader = source.fragmentShader;
		this.vertexShader = source.vertexShader;

		this.uniforms = cloneUniforms( source.uniforms );
		this.uniformsGroups = cloneUniformsGroups( source.uniformsGroups );

		this.defines = Object.assign( {}, source.defines );

		this.wireframe = source.wireframe;
		this.wireframeLinewidth = source.wireframeLinewidth;

		this.fog = source.fog;
		this.lights = source.lights;
		this.clipping = source.clipping;

		this.extensions = Object.assign( {}, source.extensions );

		this.glslVersion = source.glslVersion;

		return this;

	}

	toJSON( meta ) {

		const data = super.toJSON( meta );

		data.glslVersion = this.glslVersion;
		data.uniforms = {};

		for ( const name in this.uniforms ) {

			const uniform = this.uniforms[ name ];
			const value = uniform.value;

			if ( value && value.isTexture ) {

				data.uniforms[ name ] = {
					type: 't',
					value: value.toJSON( meta ).uuid
				};

			} else if ( value && value.isColor ) {

				data.uniforms[ name ] = {
					type: 'c',
					value: value.getHex()
				};

			} else if ( value && value.isVector2 ) {

				data.uniforms[ name ] = {
					type: 'v2',
					value: value.toArray()
				};

			} else if ( value && value.isVector3 ) {

				data.uniforms[ name ] = {
					type: 'v3',
					value: value.toArray()
				};

			} else if ( value && value.isVector4 ) {

				data.uniforms[ name ] = {
					type: 'v4',
					value: value.toArray()
				};

			} else if ( value && value.isMatrix3 ) {

				data.uniforms[ name ] = {
					type: 'm3',
					value: value.toArray()
				};

			} else if ( value && value.isMatrix4 ) {

				data.uniforms[ name ] = {
					type: 'm4',
					value: value.toArray()
				};

			} else {

				data.uniforms[ name ] = {
					value: value
				};

				// note: the array variants v2v, v3v, v4v, m4v and tv are not supported so far

			}

		}

		if ( Object.keys( this.defines ).length > 0 ) data.defines = this.defines;

		data.vertexShader = this.vertexShader;
		data.fragmentShader = this.fragmentShader;

		data.lights = this.lights;
		data.clipping = this.clipping;

		const extensions = {};

		for ( const key in this.extensions ) {

			if ( this.extensions[ key ] === true ) extensions[ key ] = true;

		}

		if ( Object.keys( extensions ).length > 0 ) data.extensions = extensions;

		return data;

	}

}

class Camera extends Object3D {

	constructor() {

		super();

		this.isCamera = true;

		this.type = 'Camera';

		this.matrixWorldInverse = new Matrix4();

		this.projectionMatrix = new Matrix4();
		this.projectionMatrixInverse = new Matrix4();

		this.coordinateSystem = WebGLCoordinateSystem;

	}

	copy( source, recursive ) {

		super.copy( source, recursive );

		this.matrixWorldInverse.copy( source.matrixWorldInverse );

		this.projectionMatrix.copy( source.projectionMatrix );
		this.projectionMatrixInverse.copy( source.projectionMatrixInverse );

		this.coordinateSystem = source.coordinateSystem;

		return this;

	}

	getWorldDirection( target ) {

		return super.getWorldDirection( target ).negate();

	}

	updateMatrixWorld( force ) {

		super.updateMatrixWorld( force );

		this.matrixWorldInverse.copy( this.matrixWorld ).invert();

	}

	updateWorldMatrix( updateParents, updateChildren ) {

		super.updateWorldMatrix( updateParents, updateChildren );

		this.matrixWorldInverse.copy( this.matrixWorld ).invert();

	}

	clone() {

		return new this.constructor().copy( this );

	}

}

const _v3$1 = /*@__PURE__*/ new Vector3();
const _minTarget = /*@__PURE__*/ new Vector2();
const _maxTarget = /*@__PURE__*/ new Vector2();


class PerspectiveCamera extends Camera {

	constructor( fov = 50, aspect = 1, near = 0.1, far = 2000 ) {

		super();

		this.isPerspectiveCamera = true;

		this.type = 'PerspectiveCamera';

		this.fov = fov;
		this.zoom = 1;

		this.near = near;
		this.far = far;
		this.focus = 10;

		this.aspect = aspect;
		this.view = null;

		this.filmGauge = 35;	// width of the film (default in millimeters)
		this.filmOffset = 0;	// horizontal film offset (same unit as gauge)

		this.updateProjectionMatrix();

	}

	copy( source, recursive ) {

		super.copy( source, recursive );

		this.fov = source.fov;
		this.zoom = source.zoom;

		this.near = source.near;
		this.far = source.far;
		this.focus = source.focus;

		this.aspect = source.aspect;
		this.view = source.view === null ? null : Object.assign( {}, source.view );

		this.filmGauge = source.filmGauge;
		this.filmOffset = source.filmOffset;

		return this;

	}

	/**
	 * Sets the FOV by focal length in respect to the current .filmGauge.
	 *
	 * The default film gauge is 35, so that the focal length can be specified for
	 * a 35mm (full frame) camera.
	 *
	 * Values for focal length and film gauge must have the same unit.
	 */
	setFocalLength( focalLength ) {

		/** see {@link http://www.bobatkins.com/photography/technical/field_of_view.html} */
		const vExtentSlope = 0.5 * this.getFilmHeight() / focalLength;

		this.fov = RAD2DEG * 2 * Math.atan( vExtentSlope );
		this.updateProjectionMatrix();

	}

	/**
	 * Calculates the focal length from the current .fov and .filmGauge.
	 */
	getFocalLength() {

		const vExtentSlope = Math.tan( DEG2RAD * 0.5 * this.fov );

		return 0.5 * this.getFilmHeight() / vExtentSlope;

	}

	getEffectiveFOV() {

		return RAD2DEG * 2 * Math.atan(
			Math.tan( DEG2RAD * 0.5 * this.fov ) / this.zoom );

	}

	getFilmWidth() {

		// film not completely covered in portrait format (aspect < 1)
		return this.filmGauge * Math.min( this.aspect, 1 );

	}

	getFilmHeight() {

		// film not completely covered in landscape format (aspect > 1)
		return this.filmGauge / Math.max( this.aspect, 1 );

	}

	/**
	 * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
	 * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
	 */
	getViewBounds( distance, minTarget, maxTarget ) {

		_v3$1.set( - 1, - 1, 0.5 ).applyMatrix4( this.projectionMatrixInverse );

		minTarget.set( _v3$1.x, _v3$1.y ).multiplyScalar( - distance / _v3$1.z );

		_v3$1.set( 1, 1, 0.5 ).applyMatrix4( this.projectionMatrixInverse );

		maxTarget.set( _v3$1.x, _v3$1.y ).multiplyScalar( - distance / _v3$1.z );

	}

	/**
	 * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
	 * Copies the result into the target Vector2, where x is width and y is height.
	 */
	getViewSize( distance, target ) {

		this.getViewBounds( distance, _minTarget, _maxTarget );

		return target.subVectors( _maxTarget, _minTarget );

	}

	/**
	 * Sets an offset in a larger frustum. This is useful for multi-window or
	 * multi-monitor/multi-machine setups.
	 *
	 * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
	 * the monitors are in grid like this
	 *
	 *   +---+---+---+
	 *   | A | B | C |
	 *   +---+---+---+
	 *   | D | E | F |
	 *   +---+---+---+
	 *
	 * then for each monitor you would call it like this
	 *
	 *   const w = 1920;
	 *   const h = 1080;
	 *   const fullWidth = w * 3;
	 *   const fullHeight = h * 2;
	 *
	 *   --A--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
	 *   --B--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
	 *   --C--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
	 *   --D--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
	 *   --E--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
	 *   --F--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
	 *
	 *   Note there is no reason monitors have to be the same size or in a grid.
	 */
	setViewOffset( fullWidth, fullHeight, x, y, width, height ) {

		this.aspect = fullWidth / fullHeight;

		if ( this.view === null ) {

			this.view = {
				enabled: true,
				fullWidth: 1,
				fullHeight: 1,
				offsetX: 0,
				offsetY: 0,
				width: 1,
				height: 1
			};

		}

		this.view.enabled = true;
		this.view.fullWidth = fullWidth;
		this.view.fullHeight = fullHeight;
		this.view.offsetX = x;
		this.view.offsetY = y;
		this.view.width = width;
		this.view.height = height;

		this.updateProjectionMatrix();

	}

	clearViewOffset() {

		if ( this.view !== null ) {

			this.view.enabled = false;

		}

		this.updateProjectionMatrix();

	}

	updateProjectionMatrix() {

		const near = this.near;
		let top = near * Math.tan( DEG2RAD * 0.5 * this.fov ) / this.zoom;
		let height = 2 * top;
		let width = this.aspect * height;
		let left = - 0.5 * width;
		const view = this.view;

		if ( this.view !== null && this.view.enabled ) {

			const fullWidth = view.fullWidth,
				fullHeight = view.fullHeight;

			left += view.offsetX * width / fullWidth;
			top -= view.offsetY * height / fullHeight;
			width *= view.width / fullWidth;
			height *= view.height / fullHeight;

		}

		const skew = this.filmOffset;
		if ( skew !== 0 ) left += near * skew / this.getFilmWidth();

		this.projectionMatrix.makePerspective( left, left + width, top, top - height, near, this.far, this.coordinateSystem );

		this.projectionMatrixInverse.copy( this.projectionMatrix ).invert();

	}

	toJSON( meta ) {

		const data = super.toJSON( meta );

		data.object.fov = this.fov;
		data.object.zoom = this.zoom;

		data.object.near = this.near;
		data.object.far = this.far;
		data.object.focus = this.focus;

		data.object.aspect = this.aspect;

		if ( this.view !== null ) data.object.view = Object.assign( {}, this.view );

		data.object.filmGauge = this.filmGauge;
		data.object.filmOffset = this.filmOffset;

		return data;

	}

}

const fov = - 90; // negative fov is not an error
const aspect = 1;

class CubeCamera extends Object3D {

	constructor( near, far, renderTarget ) {

		super();

		this.type = 'CubeCamera';

		this.renderTarget = renderTarget;
		this.coordinateSystem = null;
		this.activeMipmapLevel = 0;

		const cameraPX = new PerspectiveCamera( fov, aspect, near, far );
		cameraPX.layers = this.layers;
		this.add( cameraPX );

		const cameraNX = new PerspectiveCamera( fov, aspect, near, far );
		cameraNX.layers = this.layers;
		this.add( cameraNX );

		const cameraPY = new PerspectiveCamera( fov, aspect, near, far );
		cameraPY.layers = this.layers;
		this.add( cameraPY );

		const cameraNY = new PerspectiveCamera( fov, aspect, near, far );
		cameraNY.layers = this.layers;
		this.add( cameraNY );

		const cameraPZ = new PerspectiveCamera( fov, aspect, near, far );
		cameraPZ.layers = this.layers;
		this.add( cameraPZ );

		const cameraNZ = new PerspectiveCamera( fov, aspect, near, far );
		cameraNZ.layers = this.layers;
		this.add( cameraNZ );

	}

	updateCoordinateSystem() {

		const coordinateSystem = this.coordinateSystem;

		const cameras = this.children.concat();

		const [ cameraPX, cameraNX, cameraPY, cameraNY, cameraPZ, cameraNZ ] = cameras;

		for ( const camera of cameras ) this.remove( camera );

		if ( coordinateSystem === WebGLCoordinateSystem ) {

			cameraPX.up.set( 0, 1, 0 );
			cameraPX.lookAt( 1, 0, 0 );

			cameraNX.up.set( 0, 1, 0 );
			cameraNX.lookAt( - 1, 0, 0 );

			cameraPY.up.set( 0, 0, - 1 );
			cameraPY.lookAt( 0, 1, 0 );

			cameraNY.up.set( 0, 0, 1 );
			cameraNY.lookAt( 0, - 1, 0 );

			cameraPZ.up.set( 0, 1, 0 );
			cameraPZ.lookAt( 0, 0, 1 );

			cameraNZ.up.set( 0, 1, 0 );
			cameraNZ.lookAt( 0, 0, - 1 );

		} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

			cameraPX.up.set( 0, - 1, 0 );
			cameraPX.lookAt( - 1, 0, 0 );

			cameraNX.up.set( 0, - 1, 0 );
			cameraNX.lookAt( 1, 0, 0 );

			cameraPY.up.set( 0, 0, 1 );
			cameraPY.lookAt( 0, 1, 0 );

			cameraNY.up.set( 0, 0, - 1 );
			cameraNY.lookAt( 0, - 1, 0 );

			cameraPZ.up.set( 0, - 1, 0 );
			cameraPZ.lookAt( 0, 0, 1 );

			cameraNZ.up.set( 0, - 1, 0 );
			cameraNZ.lookAt( 0, 0, - 1 );

		} else {

			throw new Error( 'THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: ' + coordinateSystem );

		}

		for ( const camera of cameras ) {

			this.add( camera );

			camera.updateMatrixWorld();

		}

	}

	update( renderer, scene ) {

		if ( this.parent === null ) this.updateMatrixWorld();

		const { renderTarget, activeMipmapLevel } = this;

		if ( this.coordinateSystem !== renderer.coordinateSystem ) {

			this.coordinateSystem = renderer.coordinateSystem;

			this.updateCoordinateSystem();

		}

		const [ cameraPX, cameraNX, cameraPY, cameraNY, cameraPZ, cameraNZ ] = this.children;

		const currentRenderTarget = renderer.getRenderTarget();
		const currentActiveCubeFace = renderer.getActiveCubeFace();
		const currentActiveMipmapLevel = renderer.getActiveMipmapLevel();

		const currentXrEnabled = renderer.xr.enabled;

		renderer.xr.enabled = false;

		const generateMipmaps = renderTarget.texture.generateMipmaps;

		renderTarget.texture.generateMipmaps = false;

		renderer.setRenderTarget( renderTarget, 0, activeMipmapLevel );
		renderer.render( scene, cameraPX );

		renderer.setRenderTarget( renderTarget, 1, activeMipmapLevel );
		renderer.render( scene, cameraNX );

		renderer.setRenderTarget( renderTarget, 2, activeMipmapLevel );
		renderer.render( scene, cameraPY );

		renderer.setRenderTarget( renderTarget, 3, activeMipmapLevel );
		renderer.render( scene, cameraNY );

		renderer.setRenderTarget( renderTarget, 4, activeMipmapLevel );
		renderer.render( scene, cameraPZ );

		// mipmaps are generated during the last call of render()
		// at this point, all sides of the cube render target are defined

		renderTarget.texture.generateMipmaps = generateMipmaps;

		renderer.setRenderTarget( renderTarget, 5, activeMipmapLevel );
		renderer.render( scene, cameraNZ );

		renderer.setRenderTarget( currentRenderTarget, currentActiveCubeFace, currentActiveMipmapLevel );

		renderer.xr.enabled = currentXrEnabled;

		renderTarget.texture.needsPMREMUpdate = true;

	}

}

class CubeTexture extends Texture {

	constructor( images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, colorSpace ) {

		images = images !== undefined ? images : [];
		mapping = mapping !== undefined ? mapping : CubeReflectionMapping;

		super( images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, colorSpace );

		this.isCubeTexture = true;

		this.flipY = false;

	}

	get images() {

		return this.image;

	}

	set images( value ) {

		this.image = value;

	}

}

class WebGLCubeRenderTarget extends WebGLRenderTarget {

	constructor( size = 1, options = {} ) {

		super( size, size, options );

		this.isWebGLCubeRenderTarget = true;

		const image = { width: size, height: size, depth: 1 };
		const images = [ image, image, image, image, image, image ];

		this.texture = new CubeTexture( images, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.colorSpace );

		// By convention -- likely based on the RenderMan spec from the 1990's -- cube maps are specified by WebGL (and three.js)
		// in a coordinate system in which positive-x is to the right when looking up the positive-z axis -- in other words,
		// in a left-handed coordinate system. By continuing this convention, preexisting cube maps continued to render correctly.

		// three.js uses a right-handed coordinate system. So environment maps used in three.js appear to have px and nx swapped
		// and the flag isRenderTargetTexture controls this conversion. The flip is not required when using WebGLCubeRenderTarget.texture
		// as a cube texture (this is detected when isRenderTargetTexture is set to true for cube textures).

		this.texture.isRenderTargetTexture = true;

		this.texture.generateMipmaps = options.generateMipmaps !== undefined ? options.generateMipmaps : false;
		this.texture.minFilter = options.minFilter !== undefined ? options.minFilter : LinearFilter;

	}

	fromEquirectangularTexture( renderer, texture ) {

		this.texture.type = texture.type;
		this.texture.colorSpace = texture.colorSpace;

		this.texture.generateMipmaps = texture.generateMipmaps;
		this.texture.minFilter = texture.minFilter;
		this.texture.magFilter = texture.magFilter;

		const shader = {

			uniforms: {
				tEquirect: { value: null },
			},

			vertexShader: /* glsl */`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,

			fragmentShader: /* glsl */`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
		};

		const geometry = new BoxGeometry( 5, 5, 5 );

		const material = new ShaderMaterial( {

			name: 'CubemapFromEquirect',

			uniforms: cloneUniforms( shader.uniforms ),
			vertexShader: shader.vertexShader,
			fragmentShader: shader.fragmentShader,
			side: BackSide,
			blending: NoBlending

		} );

		material.uniforms.tEquirect.value = texture;

		const mesh = new Mesh( geometry, material );

		const currentMinFilter = texture.minFilter;

		// Avoid blurred poles
		if ( texture.minFilter === LinearMipmapLinearFilter ) texture.minFilter = LinearFilter;

		const camera = new CubeCamera( 1, 10, this );
		camera.update( renderer, mesh );

		texture.minFilter = currentMinFilter;

		mesh.geometry.dispose();
		mesh.material.dispose();

		return this;

	}

	clear( renderer, color, depth, stencil ) {

		const currentRenderTarget = renderer.getRenderTarget();

		for ( let i = 0; i < 6; i ++ ) {

			renderer.setRenderTarget( this, i );

			renderer.clear( color, depth, stencil );

		}

		renderer.setRenderTarget( currentRenderTarget );

	}

}

const _vector1 = /*@__PURE__*/ new Vector3();
const _vector2 = /*@__PURE__*/ new Vector3();
const _normalMatrix = /*@__PURE__*/ new Matrix3();

class Plane {

	constructor( normal = new Vector3( 1, 0, 0 ), constant = 0 ) {

		this.isPlane = true;

		// normal is assumed to be normalized

		this.normal = normal;
		this.constant = constant;

	}

	set( normal, constant ) {

		this.normal.copy( normal );
		this.constant = constant;

		return this;

	}

	setComponents( x, y, z, w ) {

		this.normal.set( x, y, z );
		this.constant = w;

		return this;

	}

	setFromNormalAndCoplanarPoint( normal, point ) {

		this.normal.copy( normal );
		this.constant = - point.dot( this.normal );

		return this;

	}

	setFromCoplanarPoints( a, b, c ) {

		const normal = _vector1.subVectors( c, b ).cross( _vector2.subVectors( a, b ) ).normalize();

		// Q: should an error be thrown if normal is zero (e.g. degenerate plane)?

		this.setFromNormalAndCoplanarPoint( normal, a );

		return this;

	}

	copy( plane ) {

		this.normal.copy( plane.normal );
		this.constant = plane.constant;

		return this;

	}

	normalize() {

		// Note: will lead to a divide by zero if the plane is invalid.

		const inverseNormalLength = 1.0 / this.normal.length();
		this.normal.multiplyScalar( inverseNormalLength );
		this.constant *= inverseNormalLength;

		return this;

	}

	negate() {

		this.constant *= - 1;
		this.normal.negate();

		return this;

	}

	distanceToPoint( point ) {

		return this.normal.dot( point ) + this.constant;

	}

	distanceToSphere( sphere ) {

		return this.distanceToPoint( sphere.center ) - sphere.radius;

	}

	projectPoint( point, target ) {

		return target.copy( point ).addScaledVector( this.normal, - this.distanceToPoint( point ) );

	}

	intersectLine( line, target ) {

		const direction = line.delta( _vector1 );

		const denominator = this.normal.dot( direction );

		if ( denominator === 0 ) {

			// line is coplanar, return origin
			if ( this.distanceToPoint( line.start ) === 0 ) {

				return target.copy( line.start );

			}

			// Unsure if this is the correct method to handle this case.
			return null;

		}

		const t = - ( line.start.dot( this.normal ) + this.constant ) / denominator;

		if ( t < 0 || t > 1 ) {

			return null;

		}

		return target.copy( line.start ).addScaledVector( direction, t );

	}

	intersectsLine( line ) {

		// Note: this tests if a line intersects the plane, not whether it (or its end-points) are coplanar with it.

		const startSign = this.distanceToPoint( line.start );
		const endSign = this.distanceToPoint( line.end );

		return ( startSign < 0 && endSign > 0 ) || ( endSign < 0 && startSign > 0 );

	}

	intersectsBox( box ) {

		return box.intersectsPlane( this );

	}

	intersectsSphere( sphere ) {

		return sphere.intersectsPlane( this );

	}

	coplanarPoint( target ) {

		return target.copy( this.normal ).multiplyScalar( - this.constant );

	}

	applyMatrix4( matrix, optionalNormalMatrix ) {

		const normalMatrix = optionalNormalMatrix || _normalMatrix.getNormalMatrix( matrix );

		const referencePoint = this.coplanarPoint( _vector1 ).applyMatrix4( matrix );

		const normal = this.normal.applyMatrix3( normalMatrix ).normalize();

		this.constant = - referencePoint.dot( normal );

		return this;

	}

	translate( offset ) {

		this.constant -= offset.dot( this.normal );

		return this;

	}

	equals( plane ) {

		return plane.normal.equals( this.normal ) && ( plane.constant === this.constant );

	}

	clone() {

		return new this.constructor().copy( this );

	}

}

const _sphere$5 = /*@__PURE__*/ new Sphere();
const _vector$7 = /*@__PURE__*/ new Vector3();

class Frustum {

	constructor( p0 = new Plane(), p1 = new Plane(), p2 = new Plane(), p3 = new Plane(), p4 = new Plane(), p5 = new Plane() ) {

		this.planes = [ p0, p1, p2, p3, p4, p5 ];

	}

	set( p0, p1, p2, p3, p4, p5 ) {

		const planes = this.planes;

		planes[ 0 ].copy( p0 );
		planes[ 1 ].copy( p1 );
		planes[ 2 ].copy( p2 );
		planes[ 3 ].copy( p3 );
		planes[ 4 ].copy( p4 );
		planes[ 5 ].copy( p5 );

		return this;

	}

	copy( frustum ) {

		const planes = this.planes;

		for ( let i = 0; i < 6; i ++ ) {

			planes[ i ].copy( frustum.planes[ i ] );

		}

		return this;

	}

	setFromProjectionMatrix( m, coordinateSystem = WebGLCoordinateSystem ) {

		const planes = this.planes;
		const me = m.elements;
		const me0 = me[ 0 ], me1 = me[ 1 ], me2 = me[ 2 ], me3 = me[ 3 ];
		const me4 = me[ 4 ], me5 = me[ 5 ], me6 = me[ 6 ], me7 = me[ 7 ];
		const me8 = me[ 8 ], me9 = me[ 9 ], me10 = me[ 10 ], me11 = me[ 11 ];
		const me12 = me[ 12 ], me13 = me[ 13 ], me14 = me[ 14 ], me15 = me[ 15 ];

		planes[ 0 ].setComponents( me3 - me0, me7 - me4, me11 - me8, me15 - me12 ).normalize();
		planes[ 1 ].setComponents( me3 + me0, me7 + me4, me11 + me8, me15 + me12 ).normalize();
		planes[ 2 ].setComponents( me3 + me1, me7 + me5, me11 + me9, me15 + me13 ).normalize();
		planes[ 3 ].setComponents( me3 - me1, me7 - me5, me11 - me9, me15 - me13 ).normalize();
		planes[ 4 ].setComponents( me3 - me2, me7 - me6, me11 - me10, me15 - me14 ).normalize();

		if ( coordinateSystem === WebGLCoordinateSystem ) {

			planes[ 5 ].setComponents( me3 + me2, me7 + me6, me11 + me10, me15 + me14 ).normalize();

		} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

			planes[ 5 ].setComponents( me2, me6, me10, me14 ).normalize();

		} else {

			throw new Error( 'THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: ' + coordinateSystem );

		}

		return this;

	}

	intersectsObject( object ) {

		if ( object.boundingSphere !== undefined ) {

			if ( object.boundingSphere === null ) object.computeBoundingSphere();

			_sphere$5.copy( object.boundingSphere ).applyMatrix4( object.matrixWorld );

		} else {

			const geometry = object.geometry;

			if ( geometry.boundingSphere === null ) geometry.computeBoundingSphere();

			_sphere$5.copy( geometry.boundingSphere ).applyMatrix4( object.matrixWorld );

		}

		return this.intersectsSphere( _sphere$5 );

	}

	intersectsSprite( sprite ) {

		_sphere$5.center.set( 0, 0, 0 );
		_sphere$5.radius = 0.7071067811865476;
		_sphere$5.applyMatrix4( sprite.matrixWorld );

		return this.intersectsSphere( _sphere$5 );

	}

	intersectsSphere( sphere ) {

		const planes = this.planes;
		const center = sphere.center;
		const negRadius = - sphere.radius;

		for ( let i = 0; i < 6; i ++ ) {

			const distance = planes[ i ].distanceToPoint( center );

			if ( distance < negRadius ) {

				return false;

			}

		}

		return true;

	}

	intersectsBox( box ) {

		const planes = this.planes;

		for ( let i = 0; i < 6; i ++ ) {

			const plane = planes[ i ];

			// corner at max distance

			_vector$7.x = plane.normal.x > 0 ? box.max.x : box.min.x;
			_vector$7.y = plane.normal.y > 0 ? box.max.y : box.min.y;
			_vector$7.z = plane.normal.z > 0 ? box.max.z : box.min.z;

			if ( plane.distanceToPoint( _vector$7 ) < 0 ) {

				return false;

			}

		}

		return true;

	}

	containsPoint( point ) {

		const planes = this.planes;

		for ( let i = 0; i < 6; i ++ ) {

			if ( planes[ i ].distanceToPoint( point ) < 0 ) {

				return false;

			}

		}

		return true;

	}

	clone() {

		return new this.constructor().copy( this );

	}

}

function WebGLAnimation() {

	let context = null;
	let isAnimating = false;
	let animationLoop = null;
	let requestId = null;

	function onAnimationFrame( time, frame ) {

		animationLoop( time, frame );

		requestId = context.requestAnimationFrame( onAnimationFrame );

	}

	return {

		start: function () {

			if ( isAnimating === true ) return;
			if ( animationLoop === null ) return;

			requestId = context.requestAnimationFrame( onAnimationFrame );

			isAnimating = true;

		},

		stop: function () {

			context.cancelAnimationFrame( requestId );

			isAnimating = false;

		},

		setAnimationLoop: function ( callback ) {

			animationLoop = callback;

		},

		setContext: function ( value ) {

			context = value;

		}

	};

}

function WebGLAttributes( gl ) {

	const buffers = new WeakMap();

	function createBuffer( attribute, bufferType ) {

		const array = attribute.array;
		const usage = attribute.usage;
		const size = array.byteLength;

		const buffer = gl.createBuffer();

		gl.bindBuffer( bufferType, buffer );
		gl.bufferData( bufferType, array, usage );

		attribute.onUploadCallback();

		let type;

		if ( array instanceof Float32Array ) {

			type = gl.FLOAT;

		} else if ( array instanceof Uint16Array ) {

			if ( attribute.isFloat16BufferAttribute ) {

				type = gl.HALF_FLOAT;

			} else {

				type = gl.UNSIGNED_SHORT;

			}

		} else if ( array instanceof Int16Array ) {

			type = gl.SHORT;

		} else if ( array instanceof Uint32Array ) {

			type = gl.UNSIGNED_INT;

		} else if ( array instanceof Int32Array ) {

			type = gl.INT;

		} else if ( array instanceof Int8Array ) {

			type = gl.BYTE;

		} else if ( array instanceof Uint8Array ) {

			type = gl.UNSIGNED_BYTE;

		} else if ( array instanceof Uint8ClampedArray ) {

			type = gl.UNSIGNED_BYTE;

		} else {

			throw new Error( 'THREE.WebGLAttributes: Unsupported buffer data format: ' + array );

		}

		return {
			buffer: buffer,
			type: type,
			bytesPerElement: array.BYTES_PER_ELEMENT,
			version: attribute.version,
			size: size
		};

	}

	function updateBuffer( buffer, attribute, bufferType ) {

		const array = attribute.array;
		const updateRanges = attribute.updateRanges;

		gl.bindBuffer( bufferType, buffer );

		if ( updateRanges.length === 0 ) {

			// Not using update ranges
			gl.bufferSubData( bufferType, 0, array );

		} else {

			// Before applying update ranges, we merge any adjacent / overlapping
			// ranges to reduce load on `gl.bufferSubData`. Empirically, this has led
			// to performance improvements for applications which make heavy use of
			// update ranges. Likely due to GPU command overhead.
			//
			// Note that to reduce garbage collection between frames, we merge the
			// update ranges in-place. This is safe because this method will clear the
			// update ranges once updated.

			updateRanges.sort( ( a, b ) => a.start - b.start );

			// To merge the update ranges in-place, we work from left to right in the
			// existing updateRanges array, merging ranges. This may result in a final
			// array which is smaller than the original. This index tracks the last
			// index representing a merged range, any data after this index can be
			// trimmed once the merge algorithm is completed.
			let mergeIndex = 0;

			for ( let i = 1; i < updateRanges.length; i ++ ) {

				const previousRange = updateRanges[ mergeIndex ];
				const range = updateRanges[ i ];

				// We add one here to merge adjacent ranges. This is safe because ranges
				// operate over positive integers.
				if ( range.start <= previousRange.start + previousRange.count + 1 ) {

					previousRange.count = Math.max(
						previousRange.count,
						range.start + range.count - previousRange.start
					);

				} else {

					++ mergeIndex;
					updateRanges[ mergeIndex ] = range;

				}

			}

			// Trim the array to only contain the merged ranges.
			updateRanges.length = mergeIndex + 1;

			for ( let i = 0, l = updateRanges.length; i < l; i ++ ) {

				const range = updateRanges[ i ];

				gl.bufferSubData( bufferType, range.start * array.BYTES_PER_ELEMENT,
					array, range.start, range.count );

			}

			attribute.clearUpdateRanges();

		}

		attribute.onUploadCallback();

	}

	//

	function get( attribute ) {

		if ( attribute.isInterleavedBufferAttribute ) attribute = attribute.data;

		return buffers.get( attribute );

	}

	function remove( attribute ) {

		if ( attribute.isInterleavedBufferAttribute ) attribute = attribute.data;

		const data = buffers.get( attribute );

		if ( data ) {

			gl.deleteBuffer( data.buffer );

			buffers.delete( attribute );

		}

	}

	function update( attribute, bufferType ) {

		if ( attribute.isInterleavedBufferAttribute ) attribute = attribute.data;

		if ( attribute.isGLBufferAttribute ) {

			const cached = buffers.get( attribute );

			if ( ! cached || cached.version < attribute.version ) {

				buffers.set( attribute, {
					buffer: attribute.buffer,
					type: attribute.type,
					bytesPerElement: attribute.elementSize,
					version: attribute.version
				} );

			}

			return;

		}

		const data = buffers.get( attribute );

		if ( data === undefined ) {

			buffers.set( attribute, createBuffer( attribute, bufferType ) );

		} else if ( data.version < attribute.version ) {

			if ( data.size !== attribute.array.byteLength ) {

				throw new Error( 'THREE.WebGLAttributes: The size of the buffer attribute\'s array buffer does not match the original size. Resizing buffer attributes is not supported.' );

			}

			updateBuffer( data.buffer, attribute, bufferType );

			data.version = attribute.version;

		}

	}

	return {

		get: get,
		remove: remove,
		update: update

	};

}

class PlaneGeometry extends BufferGeometry {

	constructor( width = 1, height = 1, widthSegments = 1, heightSegments = 1 ) {

		super();

		this.type = 'PlaneGeometry';

		this.parameters = {
			width: width,
			height: height,
			widthSegments: widthSegments,
			heightSegments: heightSegments
		};

		const width_half = width / 2;
		const height_half = height / 2;

		const gridX = Math.floor( widthSegments );
		const gridY = Math.floor( heightSegments );

		const gridX1 = gridX + 1;
		const gridY1 = gridY + 1;

		const segment_width = width / gridX;
		const segment_height = height / gridY;

		//

		const indices = [];
		const vertices = [];
		const normals = [];
		const uvs = [];

		for ( let iy = 0; iy < gridY1; iy ++ ) {

			const y = iy * segment_height - height_half;

			for ( let ix = 0; ix < gridX1; ix ++ ) {

				const x = ix * segment_width - width_half;

				vertices.push( x, - y, 0 );

				normals.push( 0, 0, 1 );

				uvs.push( ix / gridX );
				uvs.push( 1 - ( iy / gridY ) );

			}

		}

		for ( let iy = 0; iy < gridY; iy ++ ) {

			for ( let ix = 0; ix < gridX; ix ++ ) {

				const a = ix + gridX1 * iy;
				const b = ix + gridX1 * ( iy + 1 );
				const c = ( ix + 1 ) + gridX1 * ( iy + 1 );
				const d = ( ix + 1 ) + gridX1 * iy;

				indices.push( a, b, d );
				indices.push( b, c, d );

			}

		}

		this.setIndex( indices );
		this.setAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) );
		this.setAttribute( 'normal', new Float32BufferAttribute( normals, 3 ) );
		this.setAttribute( 'uv', new Float32BufferAttribute( uvs, 2 ) );

	}

	copy( source ) {

		super.copy( source );

		this.parameters = Object.assign( {}, source.parameters );

		return this;

	}

	static fromJSON( data ) {

		return new PlaneGeometry( data.width, data.height, data.widthSegments, data.heightSegments );

	}

}

var alphahash_fragment = "#ifdef USE_ALPHAHASH\n\tif ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif";

var alphahash_pars_fragment = "#ifdef USE_ALPHAHASH\n\tconst float ALPHA_HASH_SCALE = 0.05;\n\tfloat hash2D( vec2 value ) {\n\t\treturn fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n\t}\n\tfloat hash3D( vec3 value ) {\n\t\treturn hash2D( vec2( hash2D( value.xy ), value.z ) );\n\t}\n\tfloat getAlphaHashThreshold( vec3 position ) {\n\t\tfloat maxDeriv = max(\n\t\t\tlength( dFdx( position.xyz ) ),\n\t\t\tlength( dFdy( position.xyz ) )\n\t\t);\n\t\tfloat pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n\t\tvec2 pixScales = vec2(\n\t\t\texp2( floor( log2( pixScale ) ) ),\n\t\t\texp2( ceil( log2( pixScale ) ) )\n\t\t);\n\t\tvec2 alpha = vec2(\n\t\t\thash3D( floor( pixScales.x * position.xyz ) ),\n\t\t\thash3D( floor( pixScales.y * position.xyz ) )\n\t\t);\n\t\tfloat lerpFactor = fract( log2( pixScale ) );\n\t\tfloat x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n\t\tfloat a = min( lerpFactor, 1.0 - lerpFactor );\n\t\tvec3 cases = vec3(\n\t\t\tx * x / ( 2.0 * a * ( 1.0 - a ) ),\n\t\t\t( x - 0.5 * a ) / ( 1.0 - a ),\n\t\t\t1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n\t\t);\n\t\tfloat threshold = ( x < ( 1.0 - a ) )\n\t\t\t? ( ( x < a ) ? cases.x : cases.y )\n\t\t\t: cases.z;\n\t\treturn clamp( threshold , 1.0e-6, 1.0 );\n\t}\n#endif";

var alphamap_fragment = "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif";

var alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif";

var alphatest_fragment = "#ifdef USE_ALPHATEST\n\t#ifdef ALPHA_TO_COVERAGE\n\tdiffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\tif ( diffuseColor.a < alphaTest ) discard;\n\t#endif\n#endif";

var alphatest_pars_fragment = "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif";

var aomap_fragment = "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_CLEARCOAT ) \n\t\tclearcoatSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_SHEEN ) \n\t\tsheenSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif";

var aomap_pars_fragment = "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif";

var batching_pars_vertex = "#ifdef USE_BATCHING\n\t#if ! defined( GL_ANGLE_multi_draw )\n\t#define gl_DrawID _gl_DrawID\n\tuniform int _gl_DrawID;\n\t#endif\n\tuniform highp sampler2D batchingTexture;\n\tuniform highp usampler2D batchingIdTexture;\n\tmat4 getBatchingMatrix( const in float i ) {\n\t\tint size = textureSize( batchingTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n\tfloat getIndirectIndex( const in int i ) {\n\t\tint size = textureSize( batchingIdTexture, 0 ).x;\n\t\tint x = i % size;\n\t\tint y = i / size;\n\t\treturn float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n\t}\n#endif\n#ifdef USE_BATCHING_COLOR\n\tuniform sampler2D batchingColorTexture;\n\tvec3 getBatchingColor( const in float i ) {\n\t\tint size = textureSize( batchingColorTexture, 0 ).x;\n\t\tint j = int( i );\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\treturn texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n\t}\n#endif";

var batching_vertex = "#ifdef USE_BATCHING\n\tmat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif";

var begin_vertex = "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n\tvPosition = vec3( position );\n#endif";

var beginnormal_vertex = "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif";

var bsdfs = "float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated";

var iridescence_fragment = "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\treturn vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif";

var bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n\t\tvec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif";

var clipping_planes_fragment = "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#ifdef ALPHA_TO_COVERAGE\n\t\tfloat distanceToPlane, distanceGradient;\n\t\tfloat clipOpacity = 1.0;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\tclipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\tif ( clipOpacity == 0.0 ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tfloat unionClipOpacity = 1.0;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\t\tunionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tclipOpacity *= 1.0 - unionClipOpacity;\n\t\t#endif\n\t\tdiffuseColor.a *= clipOpacity;\n\t\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tbool clipped = true;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tif ( clipped ) discard;\n\t\t#endif\n\t#endif\n#endif";

var clipping_planes_pars_fragment = "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif";

var clipping_planes_pars_vertex = "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif";

var clipping_planes_vertex = "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif";

var color_fragment = "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif";

var color_pars_fragment = "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif";

var color_pars_vertex = "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvarying vec3 vColor;\n#endif";

var color_vertex = "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n\tvec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n\tvColor.xyz *= batchingColor.xyz;\n#endif";

var common = "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n\tvarying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated";

var cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif";

var defaultnormal_vertex = "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n\tmat3 bm = mat3( batchingMatrix );\n\ttransformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n\ttransformedNormal = bm * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = bm * transformedTangent;\n\t#endif\n#endif\n#ifdef USE_INSTANCING\n\tmat3 im = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n\ttransformedNormal = im * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = im * transformedTangent;\n\t#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\ttransformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif";

var displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif";

var displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif";

var emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n\t\temissiveColor = sRGBTransferEOTF( emissiveColor );\n\t#endif\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif";

var emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif";

var colorspace_fragment = "gl_FragColor = linearToOutputTexel( gl_FragColor );";

var colorspace_pars_fragment = "vec4 LinearTransferOETF( in vec4 value ) {\n\treturn value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}";

var envmap_fragment = "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif";

var envmap_common_pars_fragment = "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform mat3 envMapRotation;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif";

var envmap_pars_fragment = "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif";

var envmap_pars_vertex = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif";

var envmap_vertex = "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif";

var fog_vertex = "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif";

var fog_pars_vertex = "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif";

var fog_fragment = "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif";

var fog_pars_fragment = "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif";

var gradientmap_pars_fragment = "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}";

var lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif";

var lights_lambert_fragment = "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;";

var lights_lambert_pars_fragment = "varying vec3 vViewPosition;\nstruct LambertMaterial Îmy⁄⁄$z{-ÆÈ‹j◊ùôR€S[›ô[Y[ù»
N¬ÇÇBB_BÇÇÇBBKÀ»€‹ô]ô[ŸY€Y[ùÀHõ‹àHúõ€ùHõ‹àHòX⁄¬ÇÇBBYõ‹à
]àH»àô]ô[ŸY€Y[ùŒ»à
 »
H¬ÇÇBBBKÀŸõ‹à
àHô]ô[ŸY€Y[ùŒ»àà»àKH
H¬ÇÇBBBX€€ú›Hà»ô]ô[ŸY€Y[ùŒ¬ÇBBBX€€ú›àHô]ô[X⁄€ô\‹»
àX]ò€‹ 
àX]îH»à
N¬ÇBBBX€€ú›ú»Hô]ô[⁄^ôH
àX]ú⁄[ä
àX]îH»à
H
»ô]ô[ŸôúŸ]¬ÇÇBBBKÀ»€€ùòX›⁄\BÇÇBBBYõ‹à
]HH[H€€ù›\ãõ[ô›»H[»H
 »
H¬ÇÇBBBBX€€ú›ô\ùHÿÿ[Tä€€ù›\ñ»HK€€ù›\ì[›ô[Y[ù÷»HKú»
N¬ÇÇBBBB]äô\ùûô\ùûKHà
N¬ÇÇBBB_BÇÇBBBKÀ»^[ô€\¬ÇÇBBBYõ‹à
]HH€\Àõ[ô›»»
 »
H¬ÇÇBBBBX€€ú›Z€HH€\÷»N¬ÇBBBB[€ôR€S[›ô[Y[ù»H€\”[›ô[Y[ù÷»N¬ÇÇBBBBYõ‹à
]HH[HZ€Kõ[ô›»H[»H
 »
H¬ÇÇBBBBBX€€ú›ô\ùHÿÿ[TäZ€V»HK€ôR€S[›ô[Y[ù÷»HKú»
N¬ÇÇBBBBB]äô\ùûô\ùûKHà
N¬ÇÇBBBB_BÇÇBBB_BÇÇBB_BÇÇBBX€€ú›ú»Hô]ô[⁄^ôH
»ô]ô[ŸôúŸ]¬ÇÇBBKÀ»òX⁄»òX⁄[ô»ô\ùXŸ\¬ÇÇBBYõ‹à
]HH»Hõ[é»H
 »
H¬ÇÇBBBX€€ú›ô\ùHô]ô[[òXõY»ÿÿ[Täô\ùXŸ\÷»HKô\ùXŸ\”[›ô[Y[ù÷»HKú»
Hàô\ùXŸ\÷»HN¬ÇÇBBBZYà
H^ùYPûT]
H¬ÇÇBBBB]äô\ùûô\ùûK
N¬ÇÇBBB_H[ŸH¬ÇÇBBBBKÀ»äô\ùûô\ùûH
»^ùYT÷»KûK^ùYT÷»Kû
N¬ÇÇBBBB[õ‹õX[ò€‹J‹[ôUXôKõõ‹õX[÷»H
Kõ][\Tÿÿ[\äô\ùû
N¬ÇBBBBXö[õ‹õX[ò€‹J‹[ôUXôKòö[õ‹õX[÷»H
Kõ][\Tÿÿ[\äô\ùûH
N¬ÇÇBBBB\‹⁄][€åãò€‹J^ùYT÷»H
KòY
õ‹õX[
KòY
ö[õ‹õX[
N¬ÇÇBBBB]ä‹⁄][€åãû‹⁄][€åãûK‹⁄][€åãûà
N¬ÇÇBBB_BÇÇBB_BÇÇBBKÀ»Y›\Yô\ùXŸ\ÀããÇÇBBKÀ»[ò€Y[ô»úõ€ùòX⁄[ô»ô\ùXŸ\¬ÇÇBBYõ‹à
]»HN»»H›\Œ»»
 »
H¬ÇÇBBBYõ‹à
]HH»Hõ[é»H
 »
H¬ÇÇBBBBX€€ú›ô\ùHô]ô[[òXõY»ÿÿ[Täô\ùXŸ\÷»HKô\ùXŸ\”[›ô[Y[ù÷»HKú»
Hàô\ùXŸ\÷»HN¬ÇÇBBBBZYà
H^ùYPûT]
H¬ÇÇBBBBB]äô\ùûô\ùûK\»›\»
à»
N¬ÇÇBBBB_H[ŸH¬ÇÇBBBBBKÀ»äô\ùûô\ùûH
»^ùYT÷»»HHKûK^ùYT÷»»HHKû
N¬ÇÇBBBBB[õ‹õX[ò€‹J‹[ôUXôKõõ‹õX[÷»»H
Kõ][\Tÿÿ[\äô\ùû
N¬ÇBBBBBXö[õ‹õX[ò€‹J‹[ôUXôKòö[õ‹õX[÷»»H
Kõ][\Tÿÿ[\äô\ùûH
N¬ÇÇBBBBB\‹⁄][€åãò€‹J^ùYT÷»»H
KòY
õ‹õX[
KòY
ö[õ‹õX[
N¬ÇÇBBBBB]ä‹⁄][€åãû‹⁄][€åãûK‹⁄][€åãûà
N¬ÇÇBBBB_BÇÇBBB_BÇÇBB_BÇÇÇBBKÀ»Yô]ô[ŸY€Y[ù»[ô\¬ÇÇBBKÀŸõ‹à
àHN»àHô]ô[ŸY€Y[ùŒ»à
 »
H¬ÇBBYõ‹à
]àHô]ô[ŸY€Y[ù»HN»àèH»àKH
H¬ÇÇBBBX€€ú›Hà»ô]ô[ŸY€Y[ùŒ¬ÇBBBX€€ú›àHô]ô[X⁄€ô\‹»
àX]ò€‹ 
àX]îH»à
N¬ÇBBBX€€ú›ú»Hô]ô[⁄^ôH
àX]ú⁄[ä
àX]îH»à
H
»ô]ô[ŸôúŸ]¬ÇÇBBBKÀ»€€ùòX›⁄\BÇÇBBBYõ‹à
]HH[H€€ù›\ãõ[ô›»H[»H
 »
H¬ÇÇBBBBX€€ú›ô\ùHÿÿ[Tä€€ù›\ñ»HK€€ù›\ì[›ô[Y[ù÷»HKú»
N¬ÇBBBB]äô\ùûô\ùûK\
»à
N¬ÇÇBBB_BÇÇBBBKÀ»^[ô€\¬ÇÇBBBYõ‹à
]HH€\Àõ[ô›»»
 »
H¬ÇÇBBBBX€€ú›Z€HH€\÷»N¬ÇBBBB[€ôR€S[›ô[Y[ù»H€\”[›ô[Y[ù÷»N¬ÇÇBBBBYõ‹à
]HH[HZ€Kõ[ô›»H[»H
 »
H¬ÇÇBBBBBX€€ú›ô\ùHÿÿ[TäZ€V»HK€ôR€S[›ô[Y[ù÷»HKú»
N¬ÇÇBBBBBZYà
H^ùYPûT]
H¬ÇÇBBBBBB]äô\ùûô\ùûK\
»à
N¬ÇÇBBBBB_H[ŸH¬ÇÇBBBBBB]äô\ùûô\ùûH
»^ùYT÷»›\»HHKûK^ùYT÷»›\»HHKû
»à
N¬ÇÇBBBBB_BÇÇBBBB_BÇÇBBB_BÇÇBB_BÇÇBBK àòXŸ\»
ã¬ÇÇBBKÀ»‹[ôõ›€HòXŸ\¬ÇÇBBXùZ[YòXŸ\ 
N¬ÇÇBBKÀ»⁄Y\»òXŸ\¬ÇÇBBXùZ[⁄YQòXŸ\ 
N¬ÇÇÇBBKÀÀÀÀ»[ù\õò[ù[ò›[€ú¬ÇÇBBYù[ò›[€àùZ[YòXŸ\ 
H¬ÇÇBBBX€€ú››\ùHô\ùXŸ\–\úò^Kõ[ô›»Œ¬ÇÇBBBZYà
ô]ô[[òXõY
H¬ÇÇBBBB[]^Y\àH»À»›\»
»BÇBBBB[]ŸôúŸ]Hõ[à
à^Y\é¬ÇÇBBBBKÀ»õ›€HòXŸ\¬ÇÇBBBBYõ‹à
]HH»Hõ[é»H
 »
H¬ÇÇBBBBBX€€ú›òXŸHHòXŸ\÷»HN¬ÇBBBBBYå òXŸV»àH
»ŸôúŸ]òXŸV»HH
»ŸôúŸ]òXŸV»H
»ŸôúŸ]
N¬ÇÇBBBB_BÇÇBBBB[^Y\àH›\»
»ô]ô[ŸY€Y[ù»
àé¬ÇBBBB[ŸôúŸ]Hõ[à
à^Y\é¬ÇÇBBBBKÀ»‹òXŸ\¬ÇÇBBBBYõ‹à
]HH»Hõ[é»H
 »
H¬ÇÇBBBBBX€€ú›òXŸHHòXŸ\÷»HN¬ÇBBBBBYå òXŸV»H
»ŸôúŸ]òXŸV»HH
»ŸôúŸ]òXŸV»àH
»ŸôúŸ]
N¬ÇÇBBBB_BÇÇBBB_H[ŸH¬ÇÇBBBBKÀ»õ›€HòXŸ\¬ÇÇBBBBYõ‹à
]HH»Hõ[é»H
 »
H¬ÇÇBBBBBX€€ú›òXŸHHòXŸ\÷»HN¬ÇBBBBBYå òXŸV»àKòXŸV»HKòXŸV»H
N¬ÇÇBBBB_BÇÇBBBBKÀ»‹òXŸ\¬ÇÇBBBBYõ‹à
]HH»Hõ[é»H
 »
H¬ÇÇBBBBBX€€ú›òXŸHHòXŸ\÷»HN¬ÇBBBBBYå òXŸV»H
»õ[à
à›\ÀòXŸV»HH
»õ[à
à›\ÀòXŸV»àH
»õ[à
à›\»
N¬ÇÇBBBB_BÇÇBBB_BÇÇBBB\ÿ€‹KòY‹õ›\
›\ùô\ùXŸ\–\úò^Kõ[ô›»»H›\ù
N¬ÇÇBB_BÇÇBBKÀ»‹ôX]HòXŸ\»õ‹àHã\⁄Y\»ŸàH⁄\BÇÇBBYù[ò›[€àùZ[⁄YQòXŸ\ 
H¬ÇÇBBBX€€ú››\ùHô\ùXŸ\–\úò^Kõ[ô›»Œ¬ÇBBB[]^Y\õŸôúŸ]H¬ÇBBB\⁄Y]ÿ[ €€ù›\ã^Y\õŸôúŸ]
N¬ÇBBB[^Y\õŸôúŸ]
œH€€ù›\ãõ[ô›¬ÇÇBBBYõ‹à
]HH€\Àõ[ô›»»
 »
H¬ÇÇBBBBX€€ú›Z€HH€\÷»N¬ÇBBBB\⁄Y]ÿ[ Z€K^Y\õŸôúŸ]
N¬ÇÇBBBBKÀÀùYBÇBBBB[^Y\õŸôúŸ]
œHZ€Kõ[ô›¬ÇÇBBB_BÇÇÇBBB\ÿ€‹KòY‹õ›\
›\ùô\ùXŸ\–\úò^Kõ[ô›»»H›\ùH
N¬ÇÇÇBB_BÇÇBBYù[ò›[€à⁄Y]ÿ[ €€ù›\ã^Y\õŸôúŸ]
H¬ÇÇBBB[]HH€€ù›\ãõ[ô›¬ÇÇBBB]⁄[H
KHHèH
H¬ÇÇBBBBX€€ú›àHN¬ÇBBBB[]»HHHN¬ÇBBBBZYà
»
H»H€€ù›\ãõ[ô›HN¬ÇÇBBBBKÀÿ€€ú€€KõŸ 	ÿâÀKãKLKÀô\ùXŸ\Àõ[ô›
N¬ÇÇBBBBYõ‹à
]»H€H
›\»
»ô]ô[ŸY€Y[ù»
àà
N»»€»»
 »
H¬ÇÇBBBBBX€€ú›€[åHHõ[à
àŒ¬ÇBBBBBX€€ú›€[åàHõ[à
à
»
»H
N¬ÇÇBBBBBX€€ú›HH^Y\õŸôúŸ]
»à
»€[åKÇBBBBBBXàH^Y\õŸôúŸ]
»»
»€[åKÇBBBBBBX»H^Y\õŸôúŸ]
»»
»€[åãÇBBBBBBYH^Y\õŸôúŸ]
»à
»€[åé¬ÇÇBBBBBYç
KãÀ
N¬ÇÇBBBB_BÇÇBBB_BÇÇBB_BÇÇBBYù[ò›[€àäKà
H¬ÇÇBBB\XŸZ€\ãú\⁄

N¬ÇBBB\XŸZ€\ãú\⁄
H
N¬ÇBBB\XŸZ€\ãú\⁄
à
N¬ÇÇBB_BÇÇÇBBYù[ò›[€àå Kã»
H¬ÇÇBBBXYô\ù^
H
N¬ÇBBBXYô\ù^
à
N¬ÇBBBXYô\ù^
»
N¬ÇÇBBBX€€ú›ô^[ô^Hô\ùXŸ\–\úò^Kõ[ô›»Œ¬ÇBBBX€€ú›]ú»H]ôŸ[ãôŸ[ô\ò]U‹Uäÿ€‹Kô\ùXŸ\–\úò^Kô^[ô^HÀô^[ô^Hãô^[ô^HH
N¬ÇÇBBBXYUä]ú÷»H
N¬ÇBBBXYUä]ú÷»HH
N¬ÇBBBXYUä]ú÷»àH
N¬ÇÇBB_BÇÇBBYù[ò›[€àç
KãÀ
H¬ÇÇBBBXYô\ù^
H
N¬ÇBBBXYô\ù^
à
N¬ÇBBBXYô\ù^

N¬ÇÇBBBXYô\ù^
à
N¬ÇBBBXYô\ù^
»
N¬ÇBBBXYô\ù^

N¬ÇÇÇBBBX€€ú›ô^[ô^Hô\ùXŸ\–\úò^Kõ[ô›»Œ¬ÇBBBX€€ú›]ú»H]ôŸ[ãôŸ[ô\ò]T⁄YUÿ[Uäÿ€‹Kô\ùXŸ\–\úò^Kô^[ô^Hãô^[ô^HÀô^[ô^Hãô^[ô^HH
N¬ÇÇBBBXYUä]ú÷»H
N¬ÇBBBXYUä]ú÷»HH
N¬ÇBBBXYUä]ú÷»»H
N¬ÇÇBBBXYUä]ú÷»HH
N¬ÇBBBXYUä]ú÷»àH
N¬ÇBBBXYUä]ú÷»»H
N¬ÇÇBB_BÇÇBBYù[ò›[€àYô\ù^
[ô^
H¬ÇÇBBB]ô\ùXŸ\–\úò^Kú\⁄
XŸZ€\ñ»[ô^
à»
»H
N¬ÇBBB]ô\ùXŸ\–\úò^Kú\⁄
XŸZ€\ñ»[ô^
à»
»HH
N¬ÇBBB]ô\ùXŸ\–\úò^Kú\⁄
XŸZ€\ñ»[ô^
à»
»àH
N¬ÇÇBB_BÇÇÇBBYù[ò›[€àYUäôX›‹åà
H¬ÇÇBBB]]ê\úò^Kú\⁄
ôX›‹åãû
N¬ÇBBB]]ê\úò^Kú\⁄
ôX›‹åãûH
N¬ÇÇBB_BÇÇB_BÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àú\ò[Y]\ú»HÿöôX›ò\‹⁄Y€äﬂK€›\òŸKú\ò[Y]\ú»
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ]“î””ä
H¬ÇÇBX€€ú›]HH›\\ãù“î””ä
N¬ÇÇBX€€ú›⁄\\»H\Àú\ò[Y]\úÀú⁄\\Œ¬ÇBX€€ú›‹[€ú»H\Àú\ò[Y]\úÀõ‹[€úŒ¬ÇÇB\ô]\õà“î””âJ⁄\\À‹[€úÀ]H
N¬ÇÇ_BÇÇ\›]X»úõ€Rî””ä]K⁄\\»
H¬ÇÇBX€€ú›Ÿ[€Y]ûT⁄\\»H◊N¬ÇÇBYõ‹à
]àHõH]Kú⁄\\Àõ[ô›»àõ»à
 »
H¬ÇÇBBX€€ú›⁄\HH⁄\\÷»]Kú⁄\\÷»àHN¬ÇÇBBYŸ[€Y]ûT⁄\\Àú\⁄
⁄\H
N¬ÇÇB_BÇÇBX€€ú›^ùYT]H]Kõ‹[€úÀô^ùYT]¬ÇÇBZYà
^ùYT]OOH[ôYö[ôY
H¬ÇÇBBY]Kõ‹[€úÀô^ùYT]Hô]»›\ùô\÷»^ùYT]ù\HJ
Kôúõ€Rî””ä^ùYT]
N¬ÇÇB_BÇÇB\ô]\õàô]»^ùYQŸ[€Y]ûJŸ[€Y]ûT⁄\\À]Kõ‹[€ú»
N¬ÇÇ_BÇüBÇò€€ú›€‹õUëŸ[ô\ò]‹àH¬ÇÇYŸ[ô\ò]U‹Uéàù[ò›[€à
Ÿ[€Y]ûKô\ùXŸ\À[ô^K[ô^ã[ô^»
H¬ÇÇBX€€ú›WﬁHô\ùXŸ\÷»[ô^H
à»N¬ÇBX€€ú›WﬁHHô\ùXŸ\÷»[ô^H
à»
»HN¬ÇBX€€ú›óﬁHô\ùXŸ\÷»[ô^à
à»N¬ÇBX€€ú›óﬁHHô\ùXŸ\÷»[ô^à
à»
»HN¬ÇBX€€ú›◊ﬁHô\ùXŸ\÷»[ô^»
à»N¬ÇBX€€ú›◊ﬁHHô\ùXŸ\÷»[ô^»
à»
»HN¬ÇÇB\ô]\õà¬ÇBB[ô]»ôX›‹åäWﬁWﬁH
KÇBB[ô]»ôX›‹åäóﬁóﬁH
KÇBB[ô]»ôX›‹åä◊ﬁ◊ﬁH
BÇBWN¬ÇÇ_KÇÇYŸ[ô\ò]T⁄YUÿ[Uéàù[ò›[€à
Ÿ[€Y]ûKô\ùXŸ\À[ô^K[ô^ã[ô^À[ô^
H¬ÇÇBX€€ú›WﬁHô\ùXŸ\÷»[ô^H
à»N¬ÇBX€€ú›WﬁHHô\ùXŸ\÷»[ô^H
à»
»HN¬ÇBX€€ú›WﬁàHô\ùXŸ\÷»[ô^H
à»
»àN¬ÇBX€€ú›óﬁHô\ùXŸ\÷»[ô^à
à»N¬ÇBX€€ú›óﬁHHô\ùXŸ\÷»[ô^à
à»
»HN¬ÇBX€€ú›óﬁàHô\ùXŸ\÷»[ô^à
à»
»àN¬ÇBX€€ú›◊ﬁHô\ùXŸ\÷»[ô^»
à»N¬ÇBX€€ú›◊ﬁHHô\ùXŸ\÷»[ô^»
à»
»HN¬ÇBX€€ú›◊ﬁàHô\ùXŸ\÷»[ô^»
à»
»àN¬ÇBX€€ú›ﬁHô\ùXŸ\÷»[ô^
à»N¬ÇBX€€ú›ﬁHHô\ùXŸ\÷»[ô^
à»
»HN¬ÇBX€€ú›ﬁàHô\ùXŸ\÷»[ô^
à»
»àN¬ÇÇBZYà
X]òXú WﬁHHóﬁH
HX]òXú WﬁHóﬁ
H
H¬ÇÇBB\ô]\õà¬ÇBBB[ô]»ôX›‹åäWﬁHHWﬁà
KÇBBB[ô]»ôX›‹åäóﬁHHóﬁà
KÇBBB[ô]»ôX›‹åä◊ﬁHH◊ﬁà
KÇBBB[ô]»ôX›‹åäﬁHHﬁà
BÇBBWN¬ÇÇB_H[ŸH¬ÇÇBB\ô]\õà¬ÇBBB[ô]»ôX›‹åäWﬁKHHWﬁà
KÇBBB[ô]»ôX›‹åäóﬁKHHóﬁà
KÇBBB[ô]»ôX›‹åä◊ﬁKHH◊ﬁà
KÇBBB[ô]»ôX›‹åäﬁKHHﬁà
BÇBBWN¬ÇÇB_BÇÇ_BÇüN¬Çôù[ò›[€à“î””âJ⁄\\À‹[€úÀ]H
H¬ÇÇY]Kú⁄\\»H◊N¬ÇÇZYà
\úò^Kö\–\úò^J⁄\\»
H
H¬ÇÇBYõ‹à
]HHH⁄\\Àõ[ô›»H»H
 »
H¬ÇÇBBX€€ú›⁄\HH⁄\\÷»HN¬ÇÇBBY]Kú⁄\\Àú\⁄
⁄\Kù]ZY
N¬ÇÇB_BÇÇ_H[ŸH¬ÇÇBY]Kú⁄\\Àú\⁄
⁄\\Àù]ZY
N¬ÇÇ_BÇÇY]Kõ‹[€ú»HÿöôX›ò\‹⁄Y€äﬂK‹[€ú»
N¬ÇÇZYà
‹[€úÀô^ùYT]OOH[ôYö[ôY
H]Kõ‹[€úÀô^ùYT]H‹[€úÀô^ùYT]ù“î””ä
N¬ÇÇ\ô]\õà]N¬ÇüBÇò€\‹»X€‹ÿZYõ€ëŸ[€Y]ûH^[ô»€ZYõ€ëŸ[€Y]ûH¬ÇÇX€€ú›ùX›‹äòY]\»HK]Z[H
H¬ÇÇBX€€ú›H
H
»X]ú‹\ù
H
H
H»é¬ÇÇBX€€ú›ô\ùXŸ\»H¬ÇBBKHKLKKHKHLKHÇBBLHKLKLHKHLKHÇBB]HK]KKHHKKHBÇBWN¬ÇÇBX€€ú›[ôXŸ\»H¬ÇBBLLKKLKKLKÀLÀLLLLKÇBBLKKKMKLKLLKLãLLÀãMÀKÇBBLÀKLÀãLÀããLÀãLÀKÇBBMKKLãLKMããLNãÀNKBÇBWN¬ÇÇB\›\\äô\ùXŸ\À[ôXŸ\ÀòY]\À]Z[
N¬ÇÇB]\Àù\HH	“X€‹ÿZYõ€ëŸ[€Y]ûIŒ¬ÇÇB]\Àú\ò[Y]\ú»H¬ÇBB\òY]\ŒàòY]\ÀÇBBY]Z[à]Z[ÇB_N¬ÇÇ_BÇÇ\›]X»úõ€Rî””ä]H
H¬ÇÇB\ô]\õàô]»X€‹ÿZYõ€ëŸ[€Y]ûJ]KúòY]\À]Kô]Z[
N¬ÇÇ_BÇüBÇò€\‹»ÿ›ZYõ€ëŸ[€Y]ûH^[ô»€ZYõ€ëŸ[€Y]ûH¬ÇÇX€€ú›ùX›‹äòY]\»HK]Z[H
H¬ÇÇBX€€ú›ô\ùXŸ\»H¬ÇBBLKKHKLKÇBBLHKLKLHBÇBWN¬ÇÇBX€€ú›[ôXŸ\»H¬ÇBBLãLÀLÀKÇBBLKãLKãKLKKÀÇBBLKÀLKÇÇBWN¬ÇÇB\›\\äô\ùXŸ\À[ôXŸ\ÀòY]\À]Z[
N¬ÇÇB]\Àù\HH	”ÿ›ZYõ€ëŸ[€Y]ûIŒ¬ÇÇB]\Àú\ò[Y]\ú»H¬ÇBB\òY]\ŒàòY]\ÀÇBBY]Z[à]Z[ÇB_N¬ÇÇ_BÇÇ\›]X»úõ€Rî””ä]H
H¬ÇÇB\ô]\õàô]»ÿ›ZYõ€ëŸ[€Y]ûJ]KúòY]\À]Kô]Z[
N¬ÇÇ_BÇüBÇò€\‹»ö[ô—Ÿ[€Y]ûH^[ô»ùYôô\ëŸ[€Y]ûH¬ÇÇX€€ú›ùX›‹ä[õô\îòY]\»HçK›]\îòY]\»HK]TŸY€Y[ù»HÃãTŸY€Y[ù»HK]T›\ùH]S[ô›HX]îH
àà
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àù\HH	‘ö[ô—Ÿ[€Y]ûIŒ¬ÇÇB]\Àú\ò[Y]\ú»H¬ÇBBZ[õô\îòY]\Œà[õô\îòY]\ÀÇBB[›]\îòY]\Œà›]\îòY]\ÀÇBB]]TŸY€Y[ùŒà]TŸY€Y[ùÀÇBB\TŸY€Y[ùŒàTŸY€Y[ùÀÇBB]]T›\ùà]T›\ùÇBB]]S[ô›à]S[ô›ÇB_N¬ÇÇB]]TŸY€Y[ù»HX]õX^
À]TŸY€Y[ù»
N¬ÇB\TŸY€Y[ù»HX]õX^
KTŸY€Y[ù»
N¬ÇÇBKÀ»ùYôô\ú¬ÇÇBX€€ú›[ôXŸ\»H◊N¬ÇBX€€ú›ô\ùXŸ\»H◊N¬ÇBX€€ú›õ‹õX[»H◊N¬ÇBX€€ú›]ú»H◊N¬ÇÇBKÀ»€€YH[\àò\öXXõ\¬ÇÇB[]òY]\»H[õô\îòY]\Œ¬ÇBX€€ú›òY]\‘›\H

›]\îòY]\»H[õô\îòY]\»
H»TŸY€Y[ù»
N¬ÇBX€€ú›ô\ù^Hô]»ôX›‹å 
N¬ÇBX€€ú›]àHô]»ôX›‹åä
N¬ÇÇBKÀ»Ÿ[ô\ò]Hô\ùXŸ\Àõ‹õX[»[ô]ú¬ÇÇBYõ‹à
]àH»àHTŸY€Y[ùŒ»à
 »
H¬ÇÇBBYõ‹à
]HH»HH]TŸY€Y[ùŒ»H
 »
H¬ÇÇBBBKÀ»ò[Y\»\ôHŸ[ô\ò]Húõ€HH[ú⁄YHŸàHö[ô»»H›]⁄YBÇÇBBBX€€ú›ŸY€Y[ùH]T›\ù
»H»]TŸY€Y[ù»
à]S[ô›¬ÇÇBBBKÀ»ô\ù^ÇÇBBB]ô\ù^ûHòY]\»
àX]ò€‹ ŸY€Y[ù
N¬ÇBBB]ô\ù^ûHHòY]\»
àX]ú⁄[äŸY€Y[ù
N¬ÇÇBBB]ô\ùXŸ\Àú\⁄
ô\ù^ûô\ù^ûKô\ù^ûà
N¬ÇÇBBBKÀ»õ‹õX[ÇÇBBB[õ‹õX[Àú\⁄
H
N¬ÇÇBBBKÀ»]ÇÇÇBBB]]ãûH
ô\ù^û»›]\îòY]\»
»H
H»é¬ÇBBB]]ãûHH
ô\ù^ûH»›]\îòY]\»
»H
H»é¬ÇÇBBB]]úÀú\⁄
]ãû]ãûH
N¬ÇÇBB_BÇÇBBKÀ»[ò‹ôX\ŸHHòY]\»õ‹àô^õ›»Ÿàô\ùXŸ\¬ÇÇBB\òY]\»
œHòY]\‘›\¬ÇÇB_BÇÇBKÀ»[ôXŸ\¬ÇÇBYõ‹à
]àH»àTŸY€Y[ùŒ»à
 »
H¬ÇÇBBX€€ú›]TŸY€Y[ù]ô[Hà
à
]TŸY€Y[ù»
»H
N¬ÇÇBBYõ‹à
]HH»H]TŸY€Y[ùŒ»H
 »
H¬ÇÇBBBX€€ú›ŸY€Y[ùHH
»]TŸY€Y[ù]ô[¬ÇÇBBBX€€ú›HHŸY€Y[ù¬ÇBBBX€€ú›àHŸY€Y[ù
»]TŸY€Y[ù»
»N¬ÇBBBX€€ú›»HŸY€Y[ù
»]TŸY€Y[ù»
»é¬ÇBBBX€€ú›HŸY€Y[ù
»N¬ÇÇBBBKÀ»òXŸ\¬ÇÇBBBZ[ôXŸ\Àú\⁄
Kã
N¬ÇBBBZ[ôXŸ\Àú\⁄
ãÀ
N¬ÇÇBB_BÇÇB_BÇÇBKÀ»ùZ[Ÿ[€Y]ûBÇÇB]\ÀúŸ][ô^
[ôXŸ\»
N¬ÇB]\ÀúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]Jô\ùXŸ\À»
H
N¬ÇB]\ÀúŸ]]öXù]J	€õ‹õX[	Àô]»õÿ]ÃêùYôô\ê]öXù]Jõ‹õX[À»
H
N¬ÇB]\ÀúŸ]]öXù]J	›]âÀô]»õÿ]ÃêùYôô\ê]öXù]J]úÀà
H
N¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àú\ò[Y]\ú»HÿöôX›ò\‹⁄Y€äﬂK€›\òŸKú\ò[Y]\ú»
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\›]X»úõ€Rî””ä]H
H¬ÇÇB\ô]\õàô]»ö[ô—Ÿ[€Y]ûJ]Kö[õô\îòY]\À]Kõ›]\îòY]\À]Kù]TŸY€Y[ùÀ]KúTŸY€Y[ùÀ]Kù]T›\ù]Kù]S[ô›
N¬ÇÇ_BÇüBÇò€\‹»⁄\QŸ[€Y]ûH^[ô»ùYôô\ëŸ[€Y]ûH¬ÇÇX€€ú›ùX›‹ä⁄\\»Hô]»⁄\J»ô]»ôX›‹åäçH
Kô]»ôX›‹åäHçKHçH
Kô]»ôX›‹åäçKHçH
HH
K›\ùôTŸY€Y[ù»HLà
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àù\HH	‘⁄\QŸ[€Y]ûIŒ¬ÇÇB]\Àú\ò[Y]\ú»H¬ÇBB\⁄\\Œà⁄\\ÀÇBBX›\ùôTŸY€Y[ùŒà›\ùôTŸY€Y[ù¬ÇB_N¬ÇÇBKÀ»ùYôô\ú¬ÇÇBX€€ú›[ôXŸ\»H◊N¬ÇBX€€ú›ô\ùXŸ\»H◊N¬ÇBX€€ú›õ‹õX[»H◊N¬ÇBX€€ú›]ú»H◊N¬ÇÇBKÀ»[\àò\öXXõ\¬ÇÇB[]‹õ›\›\ùH¬ÇB[]‹õ›\€›[ùH¬ÇÇBKÀ»[›»⁄[ô€H[ô\úò^Hò[Y\»õ‹àú⁄\\»à\ò[Y]\ÇÇÇBZYà
\úò^Kö\–\úò^J⁄\\»
HOOHò[ŸH
H¬ÇÇBBXY⁄\J⁄\\»
N¬ÇÇB_H[ŸH¬ÇÇBBYõ‹à
]HH»H⁄\\Àõ[ô›»H
 »
H¬ÇÇBBBXY⁄\J⁄\\÷»HH
N¬ÇÇBBB]\ÀòY‹õ›\
‹õ›\›\ù‹õ›\€›[ùH
N»À»[òXõ\»][SX]\öX[›\‹ùÇÇBBBY‹õ›\›\ù
œH‹õ›\€›[ù¬ÇBBBY‹õ›\€›[ùH¬ÇÇBB_BÇÇB_BÇÇBKÀ»ùZ[Ÿ[€Y]ûBÇÇB]\ÀúŸ][ô^
[ôXŸ\»
N¬ÇB]\ÀúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]Jô\ùXŸ\À»
H
N¬ÇB]\ÀúŸ]]öXù]J	€õ‹õX[	Àô]»õÿ]ÃêùYôô\ê]öXù]Jõ‹õX[À»
H
N¬ÇB]\ÀúŸ]]öXù]J	›]âÀô]»õÿ]ÃêùYôô\ê]öXù]J]úÀà
H
N¬ÇÇÇBKÀ»[\àù[ò›[€ú¬ÇÇBYù[ò›[€àY⁄\J⁄\H
H¬ÇÇBBX€€ú›[ô^ŸôúŸ]Hô\ùXŸ\Àõ[ô›»Œ¬ÇBBX€€ú›⁄[ù»H⁄\Kô^òX›⁄[ù ›\ùôTŸY€Y[ù»
N¬ÇÇBB[]⁄\Uô\ùXŸ\»H⁄[ùÀú⁄\N¬ÇBBX€€ú›⁄\R€\»H⁄[ùÀö€\Œ¬ÇÇBBKÀ»⁄X⁄»\ôX›[€àŸàô\ùXŸ\¬ÇÇBBZYà
⁄\U][Àö\–€ÿ⁄’⁄\ŸJ⁄\Uô\ùXŸ\»
HOOHò[ŸH
H¬ÇÇBBB\⁄\Uô\ùXŸ\»H⁄\Uô\ùXŸ\Àúô]ô\úŸJ
N¬ÇÇBB_BÇÇBBYõ‹à
]HHH⁄\R€\Àõ[ô›»H»H
 »
H¬ÇÇBBBX€€ú›⁄\R€HH⁄\R€\÷»HN¬ÇÇBBBZYà
⁄\U][Àö\–€ÿ⁄’⁄\ŸJ⁄\R€H
HOOHùYH
H¬ÇÇBBBB\⁄\R€\÷»HHH⁄\R€Kúô]ô\úŸJ
N¬ÇÇBBB_BÇÇBB_BÇÇBBX€€ú›òXŸ\»H⁄\U][ÀùöX[ô›[]T⁄\J⁄\Uô\ùXŸ\À⁄\R€\»
N¬ÇÇBBKÀ»õ⁄[àô\ùXŸ\»Ÿà[õô\à[ô›]\à]»»H⁄[ô€H\úò^BÇÇBBYõ‹à
]HHH⁄\R€\Àõ[ô›»H»H
 »
H¬ÇÇBBBX€€ú›⁄\R€HH⁄\R€\÷»HN¬ÇBBB\⁄\Uô\ùXŸ\»H⁄\Uô\ùXŸ\Àò€€òÿ]
⁄\R€H
N¬ÇÇBB_BÇÇBBKÀ»ô\ùXŸ\Àõ‹õX[À]ú¬ÇÇBBYõ‹à
]HHH⁄\Uô\ùXŸ\Àõ[ô›»H»H
 »
H¬ÇÇBBBX€€ú›ô\ù^H⁄\Uô\ùXŸ\÷»HN¬ÇÇBBB]ô\ùXŸ\Àú\⁄
ô\ù^ûô\ù^ûK
N¬ÇBBB[õ‹õX[Àú\⁄
H
N¬ÇBBB]]úÀú\⁄
ô\ù^ûô\ù^ûH
N»À»€‹õ]ú¬ÇÇBB_BÇÇBBKÀ»[ôXŸ\¬ÇÇBBYõ‹à
]HHHòXŸ\Àõ[ô›»H»H
 »
H¬ÇÇBBBX€€ú›òXŸHHòXŸ\÷»HN¬ÇÇBBBX€€ú›HHòXŸV»H
»[ô^ŸôúŸ]¬ÇBBBX€€ú›àHòXŸV»HH
»[ô^ŸôúŸ]¬ÇBBBX€€ú›»HòXŸV»àH
»[ô^ŸôúŸ]¬ÇÇBBBZ[ôXŸ\Àú\⁄
Kã»
N¬ÇBBBY‹õ›\€›[ù
œHŒ¬ÇÇBB_BÇÇB_BÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àú\ò[Y]\ú»HÿöôX›ò\‹⁄Y€äﬂK€›\òŸKú\ò[Y]\ú»
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ]“î””ä
H¬ÇÇBX€€ú›]HH›\\ãù“î””ä
N¬ÇÇBX€€ú›⁄\\»H\Àú\ò[Y]\úÀú⁄\\Œ¬ÇÇB\ô]\õà“î””ä⁄\\À]H
N¬ÇÇ_BÇÇ\›]X»úõ€Rî””ä]K⁄\\»
H¬ÇÇBX€€ú›Ÿ[€Y]ûT⁄\\»H◊N¬ÇÇBYõ‹à
]àHõH]Kú⁄\\Àõ[ô›»àõ»à
 »
H¬ÇÇBBX€€ú›⁄\HH⁄\\÷»]Kú⁄\\÷»àHN¬ÇÇBBYŸ[€Y]ûT⁄\\Àú\⁄
⁄\H
N¬ÇÇB_BÇÇB\ô]\õàô]»⁄\QŸ[€Y]ûJŸ[€Y]ûT⁄\\À]Kò›\ùôTŸY€Y[ù»
N¬ÇÇ_BÇüBÇôù[ò›[€à“î””ä⁄\\À]H
H¬ÇÇY]Kú⁄\\»H◊N¬ÇÇZYà
\úò^Kö\–\úò^J⁄\\»
H
H¬ÇÇBYõ‹à
]HHH⁄\\Àõ[ô›»H»H
 »
H¬ÇÇBBX€€ú›⁄\HH⁄\\÷»HN¬ÇÇBBY]Kú⁄\\Àú\⁄
⁄\Kù]ZY
N¬ÇÇB_BÇÇ_H[ŸH¬ÇÇBY]Kú⁄\\Àú\⁄
⁄\\Àù]ZY
N¬ÇÇ_BÇÇ\ô]\õà]N¬ÇüBÇò€\‹»‹\ôQŸ[€Y]ûH^[ô»ùYôô\ëŸ[€Y]ûH¬ÇÇX€€ú›ùX›‹äòY]\»HK⁄YŸY€Y[ù»HÃãZY⁄ŸY€Y[ù»HMãT›\ùHS[ô›HX]îH
àã]T›\ùH]S[ô›HX]îH
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àù\HH	‘‹\ôQŸ[€Y]ûIŒ¬ÇÇB]\Àú\ò[Y]\ú»H¬ÇBB\òY]\ŒàòY]\ÀÇBB]⁄YŸY€Y[ùŒà⁄YŸY€Y[ùÀÇBBZZY⁄ŸY€Y[ùŒàZY⁄ŸY€Y[ùÀÇBB\T›\ùàT›\ùÇBB\S[ô›àS[ô›ÇBB]]T›\ùà]T›\ùÇBB]]S[ô›à]S[ô›ÇB_N¬ÇÇB]⁄YŸY€Y[ù»HX]õX^
ÀX]ôõ€‹ä⁄YŸY€Y[ù»
H
N¬ÇBZZY⁄ŸY€Y[ù»HX]õX^
ãX]ôõ€‹äZY⁄ŸY€Y[ù»
H
N¬ÇÇBX€€ú›]Q[ôHX]õZ[ä]T›\ù
»]S[ô›X]îH
N¬ÇÇB[][ô^H¬ÇBX€€ú›‹öYH◊N¬ÇÇBX€€ú›ô\ù^Hô]»ôX›‹å 
N¬ÇBX€€ú›õ‹õX[Hô]»ôX›‹å 
N¬ÇÇBKÀ»ùYôô\ú¬ÇÇBX€€ú›[ôXŸ\»H◊N¬ÇBX€€ú›ô\ùXŸ\»H◊N¬ÇBX€€ú›õ‹õX[»H◊N¬ÇBX€€ú›]ú»H◊N¬ÇÇBKÀ»Ÿ[ô\ò]Hô\ùXŸ\Àõ‹õX[»[ô]ú¬ÇÇBYõ‹à
]^HH»^HHZY⁄ŸY€Y[ùŒ»^H
 »
H¬ÇÇBBX€€ú›ô\ùXŸ\‘õ›»H◊N¬ÇÇBBX€€ú›àH^H»ZY⁄ŸY€Y[ùŒ¬ÇÇBBKÀ»‹X⁄X[ÿ\ŸHõ‹àH€\¬ÇÇBB[]SŸôúŸ]H¬ÇÇBBZYà
^HOOH	âà]T›\ùOOH
H¬ÇÇBBB]SŸôúŸ]HçH»⁄YŸY€Y[ùŒ¬ÇÇBB_H[ŸHYà
^HOOHZY⁄ŸY€Y[ù»	âà]Q[ôOOHX]îH
H¬ÇÇBBB]SŸôúŸ]HHçH»⁄YŸY€Y[ùŒ¬ÇÇBB_BÇÇBBYõ‹à
]^H»^H⁄YŸY€Y[ùŒ»^
 »
H¬ÇÇBBBX€€ú›HH^»⁄YŸY€Y[ùŒ¬ÇÇBBBKÀ»ô\ù^ÇÇBBB]ô\ù^ûHHòY]\»
àX]ò€‹ T›\ù
»H
àS[ô›
H
àX]ú⁄[ä]T›\ù
»à
à]S[ô›
N¬ÇBBB]ô\ù^ûHHòY]\»
àX]ò€‹ ]T›\ù
»à
à]S[ô›
N¬ÇBBB]ô\ù^ûàHòY]\»
àX]ú⁄[äT›\ù
»H
àS[ô›
H
àX]ú⁄[ä]T›\ù
»à
à]S[ô›
N¬ÇÇBBB]ô\ùXŸ\Àú\⁄
ô\ù^ûô\ù^ûKô\ù^ûà
N¬ÇÇBBBKÀ»õ‹õX[ÇÇBBB[õ‹õX[ò€‹Jô\ù^
Kõõ‹õX[^ôJ
N¬ÇBBB[õ‹õX[Àú\⁄
õ‹õX[ûõ‹õX[ûKõ‹õX[ûà
N¬ÇÇBBBKÀ»]ÇÇÇBBB]]úÀú\⁄
H
»SŸôúŸ]HHà
N¬ÇÇBBB]ô\ùXŸ\‘õ›Àú\⁄
[ô^
 »
N¬ÇÇBB_BÇÇBBY‹öYú\⁄
ô\ùXŸ\‘õ›»
N¬ÇÇB_BÇÇBKÀ»[ôXŸ\¬ÇÇBYõ‹à
]^HH»^HZY⁄ŸY€Y[ùŒ»^H
 »
H¬ÇÇBBYõ‹à
]^H»^⁄YŸY€Y[ùŒ»^
 »
H¬ÇÇBBBX€€ú›HH‹öY»^HV»^
»HN¬ÇBBBX€€ú›àH‹öY»^HV»^N¬ÇBBBX€€ú›»H‹öY»^H
»HV»^N¬ÇBBBX€€ú›H‹öY»^H
»HV»^
»HN¬ÇÇBBBZYà
^HOOH]T›\ùà
H[ôXŸ\Àú\⁄
Kã
N¬ÇBBBZYà
^HOOHZY⁄ŸY€Y[ù»HH]Q[ôX]îH
H[ôXŸ\Àú\⁄
ãÀ
N¬ÇÇBB_BÇÇB_BÇÇBKÀ»ùZ[Ÿ[€Y]ûBÇÇB]\ÀúŸ][ô^
[ôXŸ\»
N¬ÇB]\ÀúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]Jô\ùXŸ\À»
H
N¬ÇB]\ÀúŸ]]öXù]J	€õ‹õX[	Àô]»õÿ]ÃêùYôô\ê]öXù]Jõ‹õX[À»
H
N¬ÇB]\ÀúŸ]]öXù]J	›]âÀô]»õÿ]ÃêùYôô\ê]öXù]J]úÀà
H
N¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àú\ò[Y]\ú»HÿöôX›ò\‹⁄Y€äﬂK€›\òŸKú\ò[Y]\ú»
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\›]X»úõ€Rî””ä]H
H¬ÇÇB\ô]\õàô]»‹\ôQŸ[€Y]ûJ]KúòY]\À]Kù⁄YŸY€Y[ùÀ]KöZY⁄ŸY€Y[ùÀ]KúT›\ù]KúS[ô›]Kù]T›\ù]Kù]S[ô›
N¬ÇÇ_BÇüBÇò€\‹»]òZYõ€ëŸ[€Y]ûH^[ô»€ZYõ€ëŸ[€Y]ûH¬ÇÇX€€ú›ùX›‹äòY]\»HK]Z[H
H¬ÇÇBX€€ú›ô\ùXŸ\»H¬ÇBBLKKKKHKHKKKHKKHKLKHKHBÇBWN¬ÇÇBX€€ú›[ôXŸ\»H¬ÇBBLãKLÀãLKÀLãÀBÇBWN¬ÇÇB\›\\äô\ùXŸ\À[ôXŸ\ÀòY]\À]Z[
N¬ÇÇB]\Àù\HH	’]òZYõ€ëŸ[€Y]ûIŒ¬ÇÇB]\Àú\ò[Y]\ú»H¬ÇBB\òY]\ŒàòY]\ÀÇBBY]Z[à]Z[ÇB_N¬ÇÇ_BÇÇ\›]X»úõ€Rî””ä]H
H¬ÇÇB\ô]\õàô]»]òZYõ€ëŸ[€Y]ûJ]KúòY]\À]Kô]Z[
N¬ÇÇ_BÇüBÇò€\‹»‹ù\—Ÿ[€Y]ûH^[ô»ùYôô\ëŸ[€Y]ûH¬ÇÇX€€ú›ùX›‹äòY]\»HKXôHHçòYX[ŸY€Y[ù»HLãXù[\îŸY€Y[ù»H\ò»HX]îH
àà
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àù\HH	’‹ù\—Ÿ[€Y]ûIŒ¬ÇÇB]\Àú\ò[Y]\ú»H¬ÇBB\òY]\ŒàòY]\ÀÇBB]XôNàXôKÇBB\òYX[ŸY€Y[ùŒàòYX[ŸY€Y[ùÀÇBB]Xù[\îŸY€Y[ùŒàXù[\îŸY€Y[ùÀÇBBX\òŒà\ò¬ÇB_N¬ÇÇB\òYX[ŸY€Y[ù»HX]ôõ€‹äòYX[ŸY€Y[ù»
N¬ÇB]Xù[\îŸY€Y[ù»HX]ôõ€‹äXù[\îŸY€Y[ù»
N¬ÇÇBKÀ»ùYôô\ú¬ÇÇBX€€ú›[ôXŸ\»H◊N¬ÇBX€€ú›ô\ùXŸ\»H◊N¬ÇBX€€ú›õ‹õX[»H◊N¬ÇBX€€ú›]ú»H◊N¬ÇÇBKÀ»[\àò\öXXõ\¬ÇÇBX€€ú›Ÿ[ù\àHô]»ôX›‹å 
N¬ÇBX€€ú›ô\ù^Hô]»ôX›‹å 
N¬ÇBX€€ú›õ‹õX[Hô]»ôX›‹å 
N¬ÇÇBKÀ»Ÿ[ô\ò]Hô\ùXŸ\Àõ‹õX[»[ô]ú¬ÇÇBYõ‹à
]àH»àHòYX[ŸY€Y[ùŒ»à
 »
H¬ÇÇBBYõ‹à
]HH»HHXù[\îŸY€Y[ùŒ»H
 »
H¬ÇÇBBBX€€ú›HHH»Xù[\îŸY€Y[ù»
à\òŒ¬ÇBBBX€€ú›àHà»òYX[ŸY€Y[ù»
àX]îH
àé¬ÇÇBBBKÀ»ô\ù^ÇÇBBB]ô\ù^ûH
òY]\»
»XôH
àX]ò€‹ à
H
H
àX]ò€‹ H
N¬ÇBBB]ô\ù^ûHH
òY]\»
»XôH
àX]ò€‹ à
H
H
àX]ú⁄[äH
N¬ÇBBB]ô\ù^ûàHXôH
àX]ú⁄[äà
N¬ÇÇBBB]ô\ùXŸ\Àú\⁄
ô\ù^ûô\ù^ûKô\ù^ûà
N¬ÇÇBBBKÀ»õ‹õX[ÇÇBBBXŸ[ù\ãûHòY]\»
àX]ò€‹ H
N¬ÇBBBXŸ[ù\ãûHHòY]\»
àX]ú⁄[äH
N¬ÇBBB[õ‹õX[ú›XïôX›‹ú ô\ù^Ÿ[ù\à
Kõõ‹õX[^ôJ
N¬ÇÇBBB[õ‹õX[Àú\⁄
õ‹õX[ûõ‹õX[ûKõ‹õX[ûà
N¬ÇÇBBBKÀ»]ÇÇÇBBB]]úÀú\⁄
H»Xù[\îŸY€Y[ù»
N¬ÇBBB]]úÀú\⁄
à»òYX[ŸY€Y[ù»
N¬ÇÇBB_BÇÇB_BÇÇBKÀ»Ÿ[ô\ò]H[ôXŸ\¬ÇÇBYõ‹à
]àHN»àHòYX[ŸY€Y[ùŒ»à
 »
H¬ÇÇBBYõ‹à
]HHN»HHXù[\îŸY€Y[ùŒ»H
 »
H¬ÇÇBBBKÀ»[ôXŸ\¬ÇÇBBBX€€ú›HH
Xù[\îŸY€Y[ù»
»H
H
àà
»HHN¬ÇBBBX€€ú›àH
Xù[\îŸY€Y[ù»
»H
H
à
àHH
H
»HHN¬ÇBBBX€€ú›»H
Xù[\îŸY€Y[ù»
»H
H
à
àHH
H
»N¬ÇBBBX€€ú›H
Xù[\îŸY€Y[ù»
»H
H
àà
»N¬ÇÇBBBKÀ»òXŸ\¬ÇÇBBBZ[ôXŸ\Àú\⁄
Kã
N¬ÇBBBZ[ôXŸ\Àú\⁄
ãÀ
N¬ÇÇBB_BÇÇB_BÇÇBKÀ»ùZ[Ÿ[€Y]ûBÇÇB]\ÀúŸ][ô^
[ôXŸ\»
N¬ÇB]\ÀúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]Jô\ùXŸ\À»
H
N¬ÇB]\ÀúŸ]]öXù]J	€õ‹õX[	Àô]»õÿ]ÃêùYôô\ê]öXù]Jõ‹õX[À»
H
N¬ÇB]\ÀúŸ]]öXù]J	›]âÀô]»õÿ]ÃêùYôô\ê]öXù]J]úÀà
H
N¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àú\ò[Y]\ú»HÿöôX›ò\‹⁄Y€äﬂK€›\òŸKú\ò[Y]\ú»
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\›]X»úõ€Rî””ä]H
H¬ÇÇB\ô]\õàô]»‹ù\—Ÿ[€Y]ûJ]KúòY]\À]KùXôK]KúòYX[ŸY€Y[ùÀ]KùXù[\îŸY€Y[ùÀ]Kò\ò»
N¬ÇÇ_BÇüBÇò€\‹»‹ù\“€õ›Ÿ[€Y]ûH^[ô»ùYôô\ëŸ[€Y]ûH¬ÇÇX€€ú›ùX›‹äòY]\»HKXôHHçXù[\îŸY€Y[ù»HçòYX[ŸY€Y[ù»HHãHH»
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àù\HH	’‹ù\“€õ›Ÿ[€Y]ûIŒ¬ÇÇB]\Àú\ò[Y]\ú»H¬ÇBB\òY]\ŒàòY]\ÀÇBB]XôNàXôKÇBB]Xù[\îŸY€Y[ùŒàXù[\îŸY€Y[ùÀÇBB\òYX[ŸY€Y[ùŒàòYX[ŸY€Y[ùÀÇBB\àÇBB\NàBÇB_N¬ÇÇB]Xù[\îŸY€Y[ù»HX]ôõ€‹äXù[\îŸY€Y[ù»
N¬ÇB\òYX[ŸY€Y[ù»HX]ôõ€‹äòYX[ŸY€Y[ù»
N¬ÇÇBKÀ»ùYôô\ú¬ÇÇBX€€ú›[ôXŸ\»H◊N¬ÇBX€€ú›ô\ùXŸ\»H◊N¬ÇBX€€ú›õ‹õX[»H◊N¬ÇBX€€ú›]ú»H◊N¬ÇÇBKÀ»[\àò\öXXõ\¬ÇÇBX€€ú›ô\ù^Hô]»ôX›‹å 
N¬ÇBX€€ú›õ‹õX[Hô]»ôX›‹å 
N¬ÇÇBX€€ú›HHô]»ôX›‹å 
N¬ÇBX€€ú›àHô]»ôX›‹å 
N¬ÇÇBX€€ú›àHô]»ôX›‹å 
N¬ÇBX€€ú›Hô]»ôX›‹å 
N¬ÇBX€€ú›àHô]»ôX›‹å 
N¬ÇÇBKÀ»Ÿ[ô\ò]Hô\ùXŸ\Àõ‹õX[»[ô]ú¬ÇÇBYõ‹à
]HH»HHXù[\îŸY€Y[ùŒ»
 »H
H¬ÇÇBBKÀ»HòYX[àùHà\»\ŸY»ÿ[›[]HH‹⁄][€à€àH‹ù\»›\ùôHŸàH›\úô[ùXù[\àŸY€Y[ùÇÇBBX€€ú›HHH»Xù[\îŸY€Y[ù»
à
àX]îH
àé¬ÇÇBBKÀ»õ›»ŸHÿ[›[]H€»⁄[ùÀàH\»›\à›\úô[ù‹⁄][€à€àH›\ùôKà\»H]Hò\ù\àZXYÇÇBBKÀ»\ŸH⁄[ù»\ôH\ŸY»‹ôX]HH‹X⁄X[ò€€‹ô[ò]H‹XŸHã⁄X⁄\»ôXŸ\‹ÿ\ûH»ÿ[›[]HH€‹úôX›ô\ù^‹⁄][€ú¬ÇÇBBXÿ[›[]T‹⁄][€ì€ê›\ùôJKKòY]\ÀH
N¬ÇBBXÿ[›[]T‹⁄][€ì€ê›\ùôJH
»åKKòY]\Àà
N¬ÇÇBBKÀ»ÿ[›[]H‹ù€õ‹õX[ò\⁄\¬ÇÇBBUú›XïôX›‹ú ãH
N¬ÇBBSãòYôX›‹ú ãH
N¬ÇBBPãò‹õ‹‹’ôX›‹ú à
N¬ÇBBSãò‹õ‹‹’ôX›‹ú ã
N¬ÇÇBBKÀ»õ‹õX[^ôHããàÿ[àôHY€õ‹ôYŸH€â›\ŸH]ÇÇBBPãõõ‹õX[^ôJ
N¬ÇBBSãõõ‹õX[^ôJ
N¬ÇÇBBYõ‹à
]àH»àHòYX[ŸY€Y[ùŒ»
 »à
H¬ÇÇBBBKÀ»õ›»ÿ[›[]HHô\ùXŸ\Àà^H\ôHõ›[ô»[‹ôH[à[à^ù\⁄[€àŸàH‹ù\»›\ùôKÇÇBBBKÀ»ôXÿ]\ŸHŸH^ùYHH⁄\H[àHK\[ôK\ôH\»õ»ôYY»ÿ[›[]HHã]ò[YKÇÇÇBBBX€€ú›àHà»òYX[ŸY€Y[ù»
àX]îH
àé¬ÇBBBX€€ú›ﬁHHXôH
àX]ò€‹ à
N¬ÇBBBX€€ú›ﬁHHXôH
àX]ú⁄[äà
N¬ÇÇBBBKÀ»õ›»ÿ[›[]HHö[ò[ô\ù^‹⁄][€ãÇÇBBBKÀ»ö\ú›ŸH‹öY[ùH^ù\⁄[€à⁄]›\àò\⁄\»ôX›‹úÀ[àŸHY]»H›\úô[ù‹⁄][€à€àH›\ùôBÇÇBBB]ô\ù^ûHKû
»
ﬁ
àãû
»ﬁH
àãû
N¬ÇBBB]ô\ù^ûHHKûH
»
ﬁ
àãûH
»ﬁH
àãûH
N¬ÇBBB]ô\ù^ûàHKûà
»
ﬁ
àãûà
»ﬁH
àãûà
N¬ÇÇBBB]ô\ùXŸ\Àú\⁄
ô\ù^ûô\ù^ûKô\ù^ûà
N¬ÇÇBBBKÀ»õ‹õX[
H\»[ÿ^\»HŸ[ù\ã€‹öY⁄[àŸàH^ù\⁄[€ã\»ŸHÿ[à\ŸH]»ÿ[›[]HHõ‹õX[
BÇÇBBB[õ‹õX[ú›XïôX›‹ú ô\ù^H
Kõõ‹õX[^ôJ
N¬ÇÇBBB[õ‹õX[Àú\⁄
õ‹õX[ûõ‹õX[ûKõ‹õX[ûà
N¬ÇÇBBBKÀ»]ÇÇÇBBB]]úÀú\⁄
H»Xù[\îŸY€Y[ù»
N¬ÇBBB]]úÀú\⁄
à»òYX[ŸY€Y[ù»
N¬ÇÇBB_BÇÇB_BÇÇBKÀ»Ÿ[ô\ò]H[ôXŸ\¬ÇÇBYõ‹à
]àHN»àHXù[\îŸY€Y[ùŒ»à
 »
H¬ÇÇBBYõ‹à
]HHN»HHòYX[ŸY€Y[ùŒ»H
 »
H¬ÇÇBBBKÀ»[ôXŸ\¬ÇÇBBBX€€ú›HH
òYX[ŸY€Y[ù»
»H
H
à
àHH
H
»
HHH
N¬ÇBBBX€€ú›àH
òYX[ŸY€Y[ù»
»H
H
àà
»
HHH
N¬ÇBBBX€€ú›»H
òYX[ŸY€Y[ù»
»H
H
àà
»N¬ÇBBBX€€ú›H
òYX[ŸY€Y[ù»
»H
H
à
àHH
H
»N¬ÇÇBBBKÀ»òXŸ\¬ÇÇBBBZ[ôXŸ\Àú\⁄
Kã
N¬ÇBBBZ[ôXŸ\Àú\⁄
ãÀ
N¬ÇÇBB_BÇÇB_BÇÇBKÀ»ùZ[Ÿ[€Y]ûBÇÇB]\ÀúŸ][ô^
[ôXŸ\»
N¬ÇB]\ÀúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]Jô\ùXŸ\À»
H
N¬ÇB]\ÀúŸ]]öXù]J	€õ‹õX[	Àô]»õÿ]ÃêùYôô\ê]öXù]Jõ‹õX[À»
H
N¬ÇB]\ÀúŸ]]öXù]J	›]âÀô]»õÿ]ÃêùYôô\ê]öXù]J]úÀà
H
N¬ÇÇBKÀ»\»ù[ò›[€àÿ[›[]\»H›\úô[ù‹⁄][€à€àH‹ù\»›\ùôBÇÇBYù[ò›[€àÿ[›[]T‹⁄][€ì€ê›\ùôJKKòY]\À‹⁄][€à
H¬ÇÇBBX€€ú››HHX]ò€‹ H
N¬ÇBBX€€ú››HHX]ú⁄[äH
N¬ÇBBX€€ú›]S›ô\îHH»
àN¬ÇBBX€€ú›‹»HX]ò€‹ ]S›ô\î
N¬ÇÇBB\‹⁄][€ãûHòY]\»
à
à
»‹»
H
àçH
à›N¬ÇBB\‹⁄][€ãûHHòY]\»
à
à
»‹»
H
à›H
àçN¬ÇBB\‹⁄][€ãûàHòY]\»
àX]ú⁄[ä]S›ô\î
H
àçN¬ÇÇB_BÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àú\ò[Y]\ú»HÿöôX›ò\‹⁄Y€äﬂK€›\òŸKú\ò[Y]\ú»
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\›]X»úõ€Rî””ä]H
H¬ÇÇB\ô]\õàô]»‹ù\“€õ›Ÿ[€Y]ûJ]KúòY]\À]KùXôK]KùXù[\îŸY€Y[ùÀ]KúòYX[ŸY€Y[ùÀ]Kú]KúH
N¬ÇÇ_BÇüBÇò€\‹»XôQŸ[€Y]ûH^[ô»ùYôô\ëŸ[€Y]ûH¬ÇÇX€€ú›ùX›‹ä]Hô]»]XYò]X–ô^öY\ê›\ùôL ô]»ôX›‹å HKHK
Kô]»ôX›‹å HKK
Kô]»ôX›‹å KK
H
KXù[\îŸY€Y[ù»HçòY]\»HKòYX[ŸY€Y[ù»H€‹ŸYHò[ŸH
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àù\HH	’XôQŸ[€Y]ûIŒ¬ÇÇB]\Àú\ò[Y]\ú»H¬ÇBB\]à]ÇBB]Xù[\îŸY€Y[ùŒàXù[\îŸY€Y[ùÀÇBB\òY]\ŒàòY]\ÀÇBB\òYX[ŸY€Y[ùŒàòYX[ŸY€Y[ùÀÇBBX€‹ŸYà€‹ŸYÇB_N¬ÇÇBX€€ú›úò[Y\»H]ò€€\]Qúô[ô]úò[Y\ Xù[\îŸY€Y[ùÀ€‹ŸY
N¬ÇÇBKÀ»^‹ŸH[ù\õò[¬ÇÇB]\Àù[ôŸ[ù»Húò[Y\Àù[ôŸ[ùŒ¬ÇB]\Àõõ‹õX[»Húò[Y\Àõõ‹õX[Œ¬ÇB]\Àòö[õ‹õX[»Húò[Y\Àòö[õ‹õX[Œ¬ÇÇBKÀ»[\àò\öXXõ\¬ÇÇBX€€ú›ô\ù^Hô]»ôX›‹å 
N¬ÇBX€€ú›õ‹õX[Hô]»ôX›‹å 
N¬ÇBX€€ú›]àHô]»ôX›‹åä
N¬ÇB[]Hô]»ôX›‹å 
N¬ÇÇBKÀ»ùYôô\ÇÇÇBX€€ú›ô\ùXŸ\»H◊N¬ÇBX€€ú›õ‹õX[»H◊N¬ÇBX€€ú›]ú»H◊N¬ÇBX€€ú›[ôXŸ\»H◊N¬ÇÇBKÀ»‹ôX]HùYôô\à]BÇÇBYŸ[ô\ò]PùYôô\ë]J
N¬ÇÇBKÀ»ùZ[Ÿ[€Y]ûBÇÇB]\ÀúŸ][ô^
[ôXŸ\»
N¬ÇB]\ÀúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]Jô\ùXŸ\À»
H
N¬ÇB]\ÀúŸ]]öXù]J	€õ‹õX[	Àô]»õÿ]ÃêùYôô\ê]öXù]Jõ‹õX[À»
H
N¬ÇB]\ÀúŸ]]öXù]J	›]âÀô]»õÿ]ÃêùYôô\ê]öXù]J]úÀà
H
N¬ÇÇBKÀ»ù[ò›[€ú¬ÇÇBYù[ò›[€àŸ[ô\ò]PùYôô\ë]J
H¬ÇÇBBYõ‹à
]HH»HXù[\îŸY€Y[ùŒ»H
 »
H¬ÇÇBBBYŸ[ô\ò]TŸY€Y[ù
H
N¬ÇÇBB_BÇÇBBKÀ»YàHŸ[€Y]ûH\»õ›€‹ŸYŸ[ô\ò]HH\›õ›»Ÿàô\ùXŸ\»[ôõ‹õX[¬ÇBBKÀ»]HôY›[\à‹⁄][€à€àH⁄]ô[à]ÇBBKÀ¬ÇBBKÀ»YàHŸ[€Y]ûH\»€‹ŸY\Xÿ]HHö\ú›õ›»Ÿàô\ùXŸ\»[ôõ‹õX[»
]ú»⁄[Yôô\äBÇÇBBYŸ[ô\ò]TŸY€Y[ù

€‹ŸYOOHò[ŸH
H»Xù[\îŸY€Y[ù»à
N¬ÇÇBBKÀ»]ú»\ôHŸ[ô\ò]Y[àHŸ\\ò]Hù[ò›[€ãÇÇBBKÀ»\»XZŸ\»]X\ﬁH€€\]H€‹úôX›ò[Y\»õ‹à€‹ŸYŸ[€Y]öY\¬ÇÇBBYŸ[ô\ò]UUú 
N¬ÇÇBBKÀ»ö[ò[H‹ôX]HòXŸ\¬ÇÇBBYŸ[ô\ò]R[ôXŸ\ 
N¬ÇÇB_BÇÇBYù[ò›[€àŸ[ô\ò]TŸY€Y[ù
H
H¬ÇÇBBKÀ»ŸH\ŸHŸ]⁄[ù]»ÿ[\H]ô[õH\›öXù]Y⁄[ù»úõ€HH⁄]ô[à]ÇÇBBTH]ôŸ]⁄[ù]
H»Xù[\îŸY€Y[ùÀ
N¬ÇÇBBKÀ»ô]öY]ôH€‹úô\‹€ô[ô»õ‹õX[[ôö[õ‹õX[ÇÇBBX€€ú›àHúò[Y\Àõõ‹õX[÷»HN¬ÇBBX€€ú›àHúò[Y\Àòö[õ‹õX[÷»HN¬ÇÇBBKÀ»Ÿ[ô\ò]Hõ‹õX[»[ôô\ùXŸ\»õ‹àH›\úô[ùŸY€Y[ùÇÇBBYõ‹à
]àH»àHòYX[ŸY€Y[ùŒ»à
 »
H¬ÇÇBBBX€€ú›àHà»òYX[ŸY€Y[ù»
àX]îH
àé¬ÇÇBBBX€€ú›⁄[àHX]ú⁄[äà
N¬ÇBBBX€€ú›€‹»HHX]ò€‹ à
N¬ÇÇBBBKÀ»õ‹õX[ÇÇBBB[õ‹õX[ûH
€‹»
àãû
»⁄[à
àãû
N¬ÇBBB[õ‹õX[ûHH
€‹»
àãûH
»⁄[à
àãûH
N¬ÇBBB[õ‹õX[ûàH
€‹»
àãûà
»⁄[à
àãûà
N¬ÇBBB[õ‹õX[õõ‹õX[^ôJ
N¬ÇÇBBB[õ‹õX[Àú\⁄
õ‹õX[ûõ‹õX[ûKõ‹õX[ûà
N¬ÇÇBBBKÀ»ô\ù^ÇÇBBB]ô\ù^ûHû
»òY]\»
àõ‹õX[û¬ÇBBB]ô\ù^ûHHûH
»òY]\»
àõ‹õX[ûN¬ÇBBB]ô\ù^ûàHûà
»òY]\»
àõ‹õX[ûé¬ÇÇBBB]ô\ùXŸ\Àú\⁄
ô\ù^ûô\ù^ûKô\ù^ûà
N¬ÇÇBB_BÇÇB_BÇÇBYù[ò›[€àŸ[ô\ò]R[ôXŸ\ 
H¬ÇÇBBYõ‹à
]àHN»àHXù[\îŸY€Y[ùŒ»à
 »
H¬ÇÇBBBYõ‹à
]HHN»HHòYX[ŸY€Y[ùŒ»H
 »
H¬ÇÇBBBBX€€ú›HH
òYX[ŸY€Y[ù»
»H
H
à
àHH
H
»
HHH
N¬ÇBBBBX€€ú›àH
òYX[ŸY€Y[ù»
»H
H
àà
»
HHH
N¬ÇBBBBX€€ú›»H
òYX[ŸY€Y[ù»
»H
H
àà
»N¬ÇBBBBX€€ú›H
òYX[ŸY€Y[ù»
»H
H
à
àHH
H
»N¬ÇÇBBBBKÀ»òXŸ\¬ÇÇBBBBZ[ôXŸ\Àú\⁄
Kã
N¬ÇBBBBZ[ôXŸ\Àú\⁄
ãÀ
N¬ÇÇBBB_BÇÇBB_BÇÇB_BÇÇBYù[ò›[€àŸ[ô\ò]UUú 
H¬ÇÇBBYõ‹à
]HH»HHXù[\îŸY€Y[ùŒ»H
 »
H¬ÇÇBBBYõ‹à
]àH»àHòYX[ŸY€Y[ùŒ»à
 »
H¬ÇÇBBBB]]ãûHH»Xù[\îŸY€Y[ùŒ¬ÇBBBB]]ãûHHà»òYX[ŸY€Y[ùŒ¬ÇÇBBBB]]úÀú\⁄
]ãû]ãûH
N¬ÇÇBBB_BÇÇBB_BÇÇB_BÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àú\ò[Y]\ú»HÿöôX›ò\‹⁄Y€äﬂK€›\òŸKú\ò[Y]\ú»
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ]“î””ä
H¬ÇÇBX€€ú›]HH›\\ãù“î””ä
N¬ÇÇBY]Kú]H\Àú\ò[Y]\úÀú]ù“î””ä
N¬ÇÇB\ô]\õà]N¬ÇÇ_BÇÇ\›]X»úõ€Rî””ä]H
H¬ÇÇBKÀ»\»€õH€‹ö‹»õ‹àùZ[Z[à›\ùô\»
KôÀàÿ]][õ€P›\ùôL KÇÇBKÀ»\Ÿ\àYö[ôY›\ùô\»‹à[ú›[òŸ\»Ÿà›\ùôT]⁄[õ›ôH\Ÿ\öX[^ôYÇÇB\ô]\õàô]»XôQŸ[€Y]ûJÇBB[ô]»›\ùô\÷»]Kú]ù\HJ
Kôúõ€Rî””ä]Kú]
KÇBBY]KùXù[\îŸY€Y[ùÀÇBBY]KúòY]\ÀÇBBY]KúòYX[ŸY€Y[ùÀÇBBY]Kò€‹ŸYÇBJN¬ÇÇ_BÇüBÇò€\‹»⁄\ôYúò[YQŸ[€Y]ûH^[ô»ùYôô\ëŸ[€Y]ûH¬ÇÇX€€ú›ùX›‹äŸ[€Y]ûHHù[
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àù\HH	’⁄\ôYúò[YQŸ[€Y]ûIŒ¬ÇÇB]\Àú\ò[Y]\ú»H¬ÇBBYŸ[€Y]ûNàŸ[€Y]ûBÇB_N¬ÇÇBZYà
Ÿ[€Y]ûHOOHù[
H¬ÇÇBBKÀ»ùYôô\ÇÇÇBBX€€ú›ô\ùXŸ\»H◊N¬ÇBBX€€ú›YŸ\»Hô]»Ÿ]

N¬ÇÇBBKÀ»[\àò\öXXõ\¬ÇÇBBX€€ú››\ùHô]»ôX›‹å 
N¬ÇBBX€€ú›[ôHô]»ôX›‹å 
N¬ÇÇBBZYà
Ÿ[€Y]ûKö[ô^OOHù[
H¬ÇÇBBBKÀ»[ô^YùYôô\ëŸ[€Y]ûBÇÇBBBX€€ú›‹⁄][€àHŸ[€Y]ûKò]öXù]\Àú‹⁄][€é¬ÇBBBX€€ú›[ôXŸ\»HŸ[€Y]ûKö[ô^¬ÇBBB[]‹õ›\»HŸ[€Y]ûKô‹õ›\Œ¬ÇÇBBBZYà
‹õ›\Àõ[ô›OOH
H¬ÇÇBBBBY‹õ›\»H»»›\ùà€›[ùà[ôXŸ\Àò€›[ùX]\öX[[ô^àHN¬ÇÇBBB_BÇÇBBBKÀ»‹ôX]HH]H›ùX›\ôH]€€ùZ[ú»[YŸ\»⁄]›]\Xÿ]\¬ÇÇBBBYõ‹à
]»H€H‹õ›\Àõ[ô›»»€»
 »»
H¬ÇÇBBBBX€€ú›‹õ›\H‹õ›\÷»»N¬ÇÇBBBBX€€ú›‹õ›\›\ùH‹õ›\ú›\ù¬ÇBBBBX€€ú›‹õ›\€›[ùH‹õ›\ò€›[ù¬ÇÇBBBBYõ‹à
]HH‹õ›\›\ùH
‹õ›\›\ù
»‹õ›\€›[ù
N»H»H
œH»
H¬ÇÇBBBBBYõ‹à
]àH»àŒ»à
 »
H¬ÇÇBBBBBBX€€ú›[ô^HH[ôXŸ\ÀôŸ]
H
»à
N¬ÇBBBBBBX€€ú›[ô^àH[ôXŸ\ÀôŸ]
H
»
à
»H
H	H»
N¬ÇÇBBBBBB\›\ùôúõ€PùYôô\ê]öXù]J‹⁄][€ã[ô^H
N¬ÇBBBBBBY[ôôúõ€PùYôô\ê]öXù]J‹⁄][€ã[ô^à
N¬ÇÇBBBBBBZYà
\’[ö\]YQYŸJ›\ù[ôYŸ\»
HOOHùYH
H¬ÇÇBBBBBBB]ô\ùXŸ\Àú\⁄
›\ùû›\ùûK›\ùûà
N¬ÇBBBBBBB]ô\ùXŸ\Àú\⁄
[ôû[ôûK[ôûà
N¬ÇÇBBBBBB_BÇÇBBBBB_BÇÇBBBB_BÇÇBBB_BÇÇBB_H[ŸH¬ÇÇBBBKÀ»õ€ãZ[ô^YùYôô\ëŸ[€Y]ûBÇÇBBBX€€ú›‹⁄][€àHŸ[€Y]ûKò]öXù]\Àú‹⁄][€é¬ÇÇBBBYõ‹à
]HHH
‹⁄][€ãò€›[ù»»
N»H»H
 »
H¬ÇÇBBBBYõ‹à
]àH»àŒ»à
 »
H¬ÇÇBBBBBKÀ»ôYHYŸ\»\àöX[ô€K[àYŸH\»ô\ô\Ÿ[ùY\»
[ô^K[ô^äBÇBBBBBKÀ»KôÀàHö\ú›öX[ô€H\»Hõ€›⁄[ô»YŸ\Œà
JK
KäK
ã
BÇÇBBBBBX€€ú›[ô^HH»
àH
»é¬ÇBBBBBX€€ú›[ô^àH»
àH
»

à
»H
H	H»
N¬ÇÇBBBBB\›\ùôúõ€PùYôô\ê]öXù]J‹⁄][€ã[ô^H
N¬ÇBBBBBY[ôôúõ€PùYôô\ê]öXù]J‹⁄][€ã[ô^à
N¬ÇÇBBBBBZYà
\’[ö\]YQYŸJ›\ù[ôYŸ\»
HOOHùYH
H¬ÇÇBBBBBB]ô\ùXŸ\Àú\⁄
›\ùû›\ùûK›\ùûà
N¬ÇBBBBBB]ô\ùXŸ\Àú\⁄
[ôû[ôûK[ôûà
N¬ÇÇBBBBB_BÇÇBBBB_BÇÇBBB_BÇÇBB_BÇÇBBKÀ»ùZ[Ÿ[€Y]ûBÇÇBB]\ÀúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]Jô\ùXŸ\À»
H
N¬ÇÇB_BÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àú\ò[Y]\ú»HÿöôX›ò\‹⁄Y€äﬂK€›\òŸKú\ò[Y]\ú»
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇôù[ò›[€à\’[ö\]YQYŸJ›\ù[ôYŸ\»
H¬ÇÇX€€ú›\⁄HH	‹›\ùûK	‹›\ùû_K	‹›\ùûüKIŸ[ôûK	Ÿ[ôû_K	Ÿ[ôûüX¬ÇX€€ú›\⁄àH	Ÿ[ôûK	Ÿ[ôû_K	Ÿ[ôûüKI‹›\ùûK	‹›\ùû_K	‹›\ùûüX»À»€⁄[ò⁄Y[ùYŸBÇÇZYà
YŸ\Àö\ \⁄H
HOOHùYHYŸ\Àö\ \⁄à
HOOHùYH
H¬ÇÇB\ô]\õàò[ŸN¬ÇÇ_H[ŸH¬ÇÇBYYŸ\ÀòY
\⁄H
N¬ÇBYYŸ\ÀòY
\⁄à
N¬ÇB\ô]\õàùYN¬ÇÇ_BÇüBÇùò\àŸ[€Y]öY\»H à◊◊‘TëW◊ ã”ÿöôX›ôúôY^ôJ¬ÇW◊‹õ›◊◊Œàù[ÇPõﬁŸ[€Y]ûNàõﬁŸ[€Y]ûKÇPÿ\›[QŸ[€Y]ûNàÿ\›[QŸ[€Y]ûKÇP⁄\ò€QŸ[€Y]ûNà⁄\ò€QŸ[€Y]ûKÇP€€ôQŸ[€Y]ûNà€€ôQŸ[€Y]ûKÇPﬁ[[ô\ëŸ[€Y]ûNàﬁ[[ô\ëŸ[€Y]ûKÇQŸXÿZYõ€ëŸ[€Y]ûNàŸXÿZYõ€ëŸ[€Y]ûKÇQYŸ\—Ÿ[€Y]ûNàYŸ\—Ÿ[€Y]ûKÇQ^ùYQŸ[€Y]ûNà^ùYQŸ[€Y]ûKÇRX€‹ÿZYõ€ëŸ[€Y]ûNàX€‹ÿZYõ€ëŸ[€Y]ûKÇS]QŸ[€Y]ûNà]QŸ[€Y]ûKÇSÿ›ZYõ€ëŸ[€Y]ûNàÿ›ZYõ€ëŸ[€Y]ûKÇT[ôQŸ[€Y]ûNà[ôQŸ[€Y]ûKÇT€ZYõ€ëŸ[€Y]ûNà€ZYõ€ëŸ[€Y]ûKÇTö[ô—Ÿ[€Y]ûNàö[ô—Ÿ[€Y]ûKÇT⁄\QŸ[€Y]ûNà⁄\QŸ[€Y]ûKÇT‹\ôQŸ[€Y]ûNà‹\ôQŸ[€Y]ûKÇU]òZYõ€ëŸ[€Y]ûNà]òZYõ€ëŸ[€Y]ûKÇU‹ù\—Ÿ[€Y]ûNà‹ù\—Ÿ[€Y]ûKÇU‹ù\“€õ›Ÿ[€Y]ûNà‹ù\“€õ›Ÿ[€Y]ûKÇUXôQŸ[€Y]ûNàXôQŸ[€Y]ûKÇU⁄\ôYúò[YQŸ[€Y]ûNà⁄\ôYúò[YQŸ[€Y]ûBüJN¬Çò€\‹»⁄Y›”X]\öX[^[ô»X]\öX[¬ÇÇ\›]X»Ÿ]\J
H¬ÇÇB\ô]\õà	‘⁄Y›”X]\öX[	Œ¬ÇÇ_BÇÇX€€ú›ùX›‹ä\ò[Y]\ú»
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àö\‘⁄Y›”X]\öX[HùYN¬ÇÇB]\Àò€€‹àHô]»€€‹ä
N¬ÇB]\Àùò[ú‹\ô[ùHùYN¬ÇÇB]\ÀôõŸ»HùYN¬ÇÇB]\ÀúŸ]ò[Y\ \ò[Y]\ú»
N¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àò€€‹ãò€‹J€›\òŸKò€€‹à
N¬ÇÇB]\ÀôõŸ»H€›\òŸKôõŸŒ¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€\‹»ò]‘⁄Y\ìX]\öX[^[ô»⁄Y\ìX]\öX[¬ÇÇ\›]X»Ÿ]\J
H¬ÇÇB\ô]\õà	‘ò]‘⁄Y\ìX]\öX[	Œ¬ÇÇ_BÇÇX€€ú›ùX›‹ä\ò[Y]\ú»
H¬ÇÇB\›\\ä\ò[Y]\ú»
N¬ÇÇB]\Àö\‘ò]‘⁄Y\ìX]\öX[HùYN¬ÇÇ_BÇüBÇò€\‹»Y\⁄›[ô\ôX]\öX[^[ô»X]\öX[¬ÇÇ\›]X»Ÿ]\J
H¬ÇÇB\ô]\õà	”Y\⁄›[ô\ôX]\öX[	Œ¬ÇÇ_BÇÇX€€ú›ùX›‹ä\ò[Y]\ú»
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àö\”Y\⁄›[ô\ôX]\öX[HùYN¬ÇÇB]\ÀôYö[ô\»H»	‘’SëTë	Œà	…»N¬ÇÇB]\Àò€€‹àHô]»€€‹äôôôôôà
N»À»Yôù\ŸBÇB]\Àúõ›Y⁄ô\‹»HKå¬ÇB]\ÀõY][ô\‹»Hå¬ÇÇB]\ÀõX\Hù[¬ÇÇB]\ÀõY⁄X\Hù[¬ÇB]\ÀõY⁄X\[ù[ú⁄]HHKå¬ÇÇB]\Àò[”X\Hù[¬ÇB]\Àò[”X\[ù[ú⁄]HHKå¬ÇÇB]\Àô[Z\‹⁄]ôHHô]»€€‹ä
N¬ÇB]\Àô[Z\‹⁄]ôR[ù[ú⁄]HHKå¬ÇB]\Àô[Z\‹⁄]ôSX\Hù[¬ÇÇB]\Àòù[\X\Hù[¬ÇB]\Àòù[\ÿÿ[HHN¬ÇÇB]\Àõõ‹õX[X\Hù[¬ÇB]\Àõõ‹õX[X\\HH[ôŸ[ù‹XŸSõ‹õX[X\¬ÇB]\Àõõ‹õX[ÿÿ[HHô]»ôX›‹åäKH
N¬ÇÇB]\Àô\‹XŸ[Y[ùX\Hù[¬ÇB]\Àô\‹XŸ[Y[ùÿÿ[HHN¬ÇB]\Àô\‹XŸ[Y[ùöX\»H¬ÇÇB]\Àúõ›Y⁄ô\‹”X\Hù[¬ÇÇB]\ÀõY][ô\‹”X\Hù[¬ÇÇB]\Àò[SX\Hù[¬ÇÇB]\Àô[ùìX\Hù[¬ÇB]\Àô[ùìX\õ›][€àHô]»][\ä
N¬ÇB]\Àô[ùìX\[ù[ú⁄]HHKå¬ÇÇB]\Àù⁄\ôYúò[YHHò[ŸN¬ÇB]\Àù⁄\ôYúò[YS[ô]⁄YHN¬ÇB]\Àù⁄\ôYúò[YS[ôXÿ\H	‹õ›[ô	Œ¬ÇB]\Àù⁄\ôYúò[YS[ôZõ⁄[àH	‹õ›[ô	Œ¬ÇÇB]\Àôõ]⁄Y[ô»Hò[ŸN¬ÇÇB]\ÀôõŸ»HùYN¬ÇÇB]\ÀúŸ]ò[Y\ \ò[Y]\ú»
N¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\ÀôYö[ô\»H»	‘’SëTë	Œà	…»N¬ÇÇB]\Àò€€‹ãò€‹J€›\òŸKò€€‹à
N¬ÇB]\Àúõ›Y⁄ô\‹»H€›\òŸKúõ›Y⁄ô\‹Œ¬ÇB]\ÀõY][ô\‹»H€›\òŸKõY][ô\‹Œ¬ÇÇB]\ÀõX\H€›\òŸKõX\¬ÇÇB]\ÀõY⁄X\H€›\òŸKõY⁄X\¬ÇB]\ÀõY⁄X\[ù[ú⁄]HH€›\òŸKõY⁄X\[ù[ú⁄]N¬ÇÇB]\Àò[”X\H€›\òŸKò[”X\¬ÇB]\Àò[”X\[ù[ú⁄]HH€›\òŸKò[”X\[ù[ú⁄]N¬ÇÇB]\Àô[Z\‹⁄]ôKò€‹J€›\òŸKô[Z\‹⁄]ôH
N¬ÇB]\Àô[Z\‹⁄]ôSX\H€›\òŸKô[Z\‹⁄]ôSX\¬ÇB]\Àô[Z\‹⁄]ôR[ù[ú⁄]HH€›\òŸKô[Z\‹⁄]ôR[ù[ú⁄]N¬ÇÇB]\Àòù[\X\H€›\òŸKòù[\X\¬ÇB]\Àòù[\ÿÿ[HH€›\òŸKòù[\ÿÿ[N¬ÇÇB]\Àõõ‹õX[X\H€›\òŸKõõ‹õX[X\¬ÇB]\Àõõ‹õX[X\\HH€›\òŸKõõ‹õX[X\\N¬ÇB]\Àõõ‹õX[ÿÿ[Kò€‹J€›\òŸKõõ‹õX[ÿÿ[H
N¬ÇÇB]\Àô\‹XŸ[Y[ùX\H€›\òŸKô\‹XŸ[Y[ùX\¬ÇB]\Àô\‹XŸ[Y[ùÿÿ[HH€›\òŸKô\‹XŸ[Y[ùÿÿ[N¬ÇB]\Àô\‹XŸ[Y[ùöX\»H€›\òŸKô\‹XŸ[Y[ùöX\Œ¬ÇÇB]\Àúõ›Y⁄ô\‹”X\H€›\òŸKúõ›Y⁄ô\‹”X\¬ÇÇB]\ÀõY][ô\‹”X\H€›\òŸKõY][ô\‹”X\¬ÇÇB]\Àò[SX\H€›\òŸKò[SX\¬ÇÇB]\Àô[ùìX\H€›\òŸKô[ùìX\¬ÇB]\Àô[ùìX\õ›][€ãò€‹J€›\òŸKô[ùìX\õ›][€à
N¬ÇB]\Àô[ùìX\[ù[ú⁄]HH€›\òŸKô[ùìX\[ù[ú⁄]N¬ÇÇB]\Àù⁄\ôYúò[YHH€›\òŸKù⁄\ôYúò[YN¬ÇB]\Àù⁄\ôYúò[YS[ô]⁄YH€›\òŸKù⁄\ôYúò[YS[ô]⁄Y¬ÇB]\Àù⁄\ôYúò[YS[ôXÿ\H€›\òŸKù⁄\ôYúò[YS[ôXÿ\¬ÇB]\Àù⁄\ôYúò[YS[ôZõ⁄[àH€›\òŸKù⁄\ôYúò[YS[ôZõ⁄[é¬ÇÇB]\Àôõ]⁄Y[ô»H€›\òŸKôõ]⁄Y[ôŒ¬ÇÇB]\ÀôõŸ»H€›\òŸKôõŸŒ¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€\‹»Y\⁄\⁄Xÿ[X]\öX[^[ô»Y\⁄›[ô\ôX]\öX[¬ÇÇ\›]X»Ÿ]\J
H¬ÇÇB\ô]\õà	”Y\⁄\⁄Xÿ[X]\öX[	Œ¬ÇÇ_BÇÇX€€ú›ùX›‹ä\ò[Y]\ú»
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àö\”Y\⁄\⁄Xÿ[X]\öX[HùYN¬ÇÇB]\ÀôYö[ô\»H¬ÇÇBBI‘’SëTë	Œà	…ÀÇBBI‘T“P–S	Œà	…¬ÇÇB_N¬ÇÇB]\Àò[ö\€›õ‹Tõ›][€àH¬ÇB]\Àò[ö\€›õ‹SX\Hù[¬ÇÇB]\Àò€X\ò€ÿ]X\Hù[¬ÇB]\Àò€X\ò€ÿ]õ›Y⁄ô\‹»Hå¬ÇB]\Àò€X\ò€ÿ]õ›Y⁄ô\‹”X\Hù[¬ÇB]\Àò€X\ò€ÿ]õ‹õX[ÿÿ[HHô]»ôX›‹åäKH
N¬ÇB]\Àò€X\ò€ÿ]õ‹õX[X\Hù[¬ÇÇB]\Àö[‹àHKçN¬ÇÇBSÿöôX›ôYö[ôTõ‹\ùJ\À	‹ôYõX›]ö]IÀ¬ÇBBYŸ]àù[ò›[€à

H¬ÇÇBBB\ô]\õà
€[\
ãçH
à
\Àö[‹àHH
H»
\Àö[‹à
»H
KH
H
N¬ÇÇBB_KÇBB\Ÿ]àù[ò›[€à
ôYõX›]ö]H
H¬ÇÇBBB]\Àö[‹àH
H
»ç
àôYõX›]ö]H
H»
HHç
àôYõX›]ö]H
N¬ÇÇBB_BÇB_H
N¬ÇÇB]\Àö\öY\ÿŸ[òŸSX\Hù[¬ÇB]\Àö\öY\ÿŸ[òŸRS‘àHKåŒ¬ÇB]\Àö\öY\ÿŸ[òŸUX⁄€ô\‹‘ò[ôŸHH»LN¬ÇB]\Àö\öY\ÿŸ[òŸUX⁄€ô\‹”X\Hù[¬ÇÇB]\Àú⁄Y[ê€€‹àHô]»€€‹ä
N¬ÇB]\Àú⁄Y[ê€€‹ìX\Hù[¬ÇB]\Àú⁄Y[îõ›Y⁄ô\‹»HKå¬ÇB]\Àú⁄Y[îõ›Y⁄ô\‹”X\Hù[¬ÇÇB]\Àùò[ú€Z\‹⁄[€ìX\Hù[¬ÇÇB]\ÀùX⁄€ô\‹»H¬ÇB]\ÀùX⁄€ô\‹”X\Hù[¬ÇB]\Àò][ùX][€ë\›[òŸHH[ôö[ö]N¬ÇB]\Àò][ùX][€ê€€‹àHô]»€€‹äKKH
N¬ÇÇB]\Àú‹X›[\í[ù[ú⁄]HHKå¬ÇB]\Àú‹X›[\í[ù[ú⁄]SX\Hù[¬ÇB]\Àú‹X›[\ê€€‹àHô]»€€‹äKKH
N¬ÇB]\Àú‹X›[\ê€€‹ìX\Hù[¬ÇÇB]\Àóÿ[ö\€›õ‹HH¬ÇB]\Àóÿ€X\ò€ÿ]H¬ÇB]\ÀóŸ\‹\ú⁄[€àH¬ÇB]\Àó⁄\öY\ÿŸ[òŸHH¬ÇB]\Àó‹⁄Y[àHå¬ÇB]\Àó›ò[ú€Z\‹⁄[€àH¬ÇÇB]\ÀúŸ]ò[Y\ \ò[Y]\ú»
N¬ÇÇ_BÇÇYŸ][ö\€›õ‹J
H¬ÇÇB\ô]\õà\Àóÿ[ö\€›õ‹N¬ÇÇ_BÇÇ\Ÿ][ö\€›õ‹Jò[YH
H¬ÇÇBZYà
\Àóÿ[ö\€›õ‹HàOOHò[YHà
H¬ÇÇBB]\Àùô\ú⁄[€à
 Œ¬ÇÇB_BÇÇB]\Àóÿ[ö\€›õ‹HHò[YN¬ÇÇ_BÇÇYŸ]€X\ò€ÿ]

H¬ÇÇB\ô]\õà\Àóÿ€X\ò€ÿ]¬ÇÇ_BÇÇ\Ÿ]€X\ò€ÿ]
ò[YH
H¬ÇÇBZYà
\Àóÿ€X\ò€ÿ]àOOHò[YHà
H¬ÇÇBB]\Àùô\ú⁄[€à
 Œ¬ÇÇB_BÇÇB]\Àóÿ€X\ò€ÿ]Hò[YN¬ÇÇ_BÇÇYŸ]\öY\ÿŸ[òŸJ
H¬ÇÇB\ô]\õà\Àó⁄\öY\ÿŸ[òŸN¬ÇÇ_BÇÇ\Ÿ]\öY\ÿŸ[òŸJò[YH
H¬ÇÇBZYà
\Àó⁄\öY\ÿŸ[òŸHàOOHò[YHà
H¬ÇÇBB]\Àùô\ú⁄[€à
 Œ¬ÇÇB_BÇÇB]\Àó⁄\öY\ÿŸ[òŸHHò[YN¬ÇÇ_BÇÇYŸ]\‹\ú⁄[€ä
H¬ÇÇB\ô]\õà\ÀóŸ\‹\ú⁄[€é¬ÇÇ_BÇÇ\Ÿ]\‹\ú⁄[€äò[YH
H¬ÇÇBZYà
\ÀóŸ\‹\ú⁄[€ààOOHò[YHà
H¬ÇÇBB]\Àùô\ú⁄[€à
 Œ¬ÇÇB_BÇÇB]\ÀóŸ\‹\ú⁄[€àHò[YN¬ÇÇ_BÇÇYŸ]⁄Y[ä
H¬ÇÇB\ô]\õà\Àó‹⁄Y[é¬ÇÇ_BÇÇ\Ÿ]⁄Y[äò[YH
H¬ÇÇBZYà
\Àó‹⁄Y[ààOOHò[YHà
H¬ÇÇBB]\Àùô\ú⁄[€à
 Œ¬ÇÇB_BÇÇB]\Àó‹⁄Y[àHò[YN¬ÇÇ_BÇÇYŸ]ò[ú€Z\‹⁄[€ä
H¬ÇÇB\ô]\õà\Àó›ò[ú€Z\‹⁄[€é¬ÇÇ_BÇÇ\Ÿ]ò[ú€Z\‹⁄[€äò[YH
H¬ÇÇBZYà
\Àó›ò[ú€Z\‹⁄[€ààOOHò[YHà
H¬ÇÇBB]\Àùô\ú⁄[€à
 Œ¬ÇÇB_BÇÇB]\Àó›ò[ú€Z\‹⁄[€àHò[YN¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\ÀôYö[ô\»H¬ÇÇBBI‘’SëTë	Œà	…ÀÇBBI‘T“P–S	Œà	…¬ÇÇB_N¬ÇÇB]\Àò[ö\€›õ‹HH€›\òŸKò[ö\€›õ‹N¬ÇB]\Àò[ö\€›õ‹Tõ›][€àH€›\òŸKò[ö\€›õ‹Tõ›][€é¬ÇB]\Àò[ö\€›õ‹SX\H€›\òŸKò[ö\€›õ‹SX\¬ÇÇB]\Àò€X\ò€ÿ]H€›\òŸKò€X\ò€ÿ]¬ÇB]\Àò€X\ò€ÿ]X\H€›\òŸKò€X\ò€ÿ]X\¬ÇB]\Àò€X\ò€ÿ]õ›Y⁄ô\‹»H€›\òŸKò€X\ò€ÿ]õ›Y⁄ô\‹Œ¬ÇB]\Àò€X\ò€ÿ]õ›Y⁄ô\‹”X\H€›\òŸKò€X\ò€ÿ]õ›Y⁄ô\‹”X\¬ÇB]\Àò€X\ò€ÿ]õ‹õX[X\H€›\òŸKò€X\ò€ÿ]õ‹õX[X\¬ÇB]\Àò€X\ò€ÿ]õ‹õX[ÿÿ[Kò€‹J€›\òŸKò€X\ò€ÿ]õ‹õX[ÿÿ[H
N¬ÇÇB]\Àô\‹\ú⁄[€àH€›\òŸKô\‹\ú⁄[€é¬ÇB]\Àö[‹àH€›\òŸKö[‹é¬ÇÇB]\Àö\öY\ÿŸ[òŸHH€›\òŸKö\öY\ÿŸ[òŸN¬ÇB]\Àö\öY\ÿŸ[òŸSX\H€›\òŸKö\öY\ÿŸ[òŸSX\¬ÇB]\Àö\öY\ÿŸ[òŸRS‘àH€›\òŸKö\öY\ÿŸ[òŸRS‘é¬ÇB]\Àö\öY\ÿŸ[òŸUX⁄€ô\‹‘ò[ôŸHH»ããú€›\òŸKö\öY\ÿŸ[òŸUX⁄€ô\‹‘ò[ôŸHN¬ÇB]\Àö\öY\ÿŸ[òŸUX⁄€ô\‹”X\H€›\òŸKö\öY\ÿŸ[òŸUX⁄€ô\‹”X\¬ÇÇB]\Àú⁄Y[àH€›\òŸKú⁄Y[é¬ÇB]\Àú⁄Y[ê€€‹ãò€‹J€›\òŸKú⁄Y[ê€€‹à
N¬ÇB]\Àú⁄Y[ê€€‹ìX\H€›\òŸKú⁄Y[ê€€‹ìX\¬ÇB]\Àú⁄Y[îõ›Y⁄ô\‹»H€›\òŸKú⁄Y[îõ›Y⁄ô\‹Œ¬ÇB]\Àú⁄Y[îõ›Y⁄ô\‹”X\H€›\òŸKú⁄Y[îõ›Y⁄ô\‹”X\¬ÇÇB]\Àùò[ú€Z\‹⁄[€àH€›\òŸKùò[ú€Z\‹⁄[€é¬ÇB]\Àùò[ú€Z\‹⁄[€ìX\H€›\òŸKùò[ú€Z\‹⁄[€ìX\¬ÇÇB]\ÀùX⁄€ô\‹»H€›\òŸKùX⁄€ô\‹Œ¬ÇB]\ÀùX⁄€ô\‹”X\H€›\òŸKùX⁄€ô\‹”X\¬ÇB]\Àò][ùX][€ë\›[òŸHH€›\òŸKò][ùX][€ë\›[òŸN¬ÇB]\Àò][ùX][€ê€€‹ãò€‹J€›\òŸKò][ùX][€ê€€‹à
N¬ÇÇB]\Àú‹X›[\í[ù[ú⁄]HH€›\òŸKú‹X›[\í[ù[ú⁄]N¬ÇB]\Àú‹X›[\í[ù[ú⁄]SX\H€›\òŸKú‹X›[\í[ù[ú⁄]SX\¬ÇB]\Àú‹X›[\ê€€‹ãò€‹J€›\òŸKú‹X›[\ê€€‹à
N¬ÇB]\Àú‹X›[\ê€€‹ìX\H€›\òŸKú‹X›[\ê€€‹ìX\¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€\‹»Y\⁄€ô”X]\öX[^[ô»X]\öX[¬ÇÇ\›]X»Ÿ]\J
H¬ÇÇB\ô]\õà	”Y\⁄€ô”X]\öX[	Œ¬ÇÇ_BÇÇX€€ú›ùX›‹ä\ò[Y]\ú»
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àö\”Y\⁄€ô”X]\öX[HùYN¬ÇÇB]\Àò€€‹àHô]»€€‹äôôôôôà
N»À»Yôù\ŸBÇB]\Àú‹X›[\àHô]»€€‹äLLLLLH
N¬ÇB]\Àú⁄[ö[ô\‹»HÃ¬ÇÇB]\ÀõX\Hù[¬ÇÇB]\ÀõY⁄X\Hù[¬ÇB]\ÀõY⁄X\[ù[ú⁄]HHKå¬ÇÇB]\Àò[”X\Hù[¬ÇB]\Àò[”X\[ù[ú⁄]HHKå¬ÇÇB]\Àô[Z\‹⁄]ôHHô]»€€‹ä
N¬ÇB]\Àô[Z\‹⁄]ôR[ù[ú⁄]HHKå¬ÇB]\Àô[Z\‹⁄]ôSX\Hù[¬ÇÇB]\Àòù[\X\Hù[¬ÇB]\Àòù[\ÿÿ[HHN¬ÇÇB]\Àõõ‹õX[X\Hù[¬ÇB]\Àõõ‹õX[X\\HH[ôŸ[ù‹XŸSõ‹õX[X\¬ÇB]\Àõõ‹õX[ÿÿ[HHô]»ôX›‹åäKH
N¬ÇÇB]\Àô\‹XŸ[Y[ùX\Hù[¬ÇB]\Àô\‹XŸ[Y[ùÿÿ[HHN¬ÇB]\Àô\‹XŸ[Y[ùöX\»H¬ÇÇB]\Àú‹X›[\ìX\Hù[¬ÇÇB]\Àò[SX\Hù[¬ÇÇB]\Àô[ùìX\Hù[¬ÇB]\Àô[ùìX\õ›][€àHô]»][\ä
N¬ÇB]\Àò€€Xö[ôHH][\S‹\ò][€é¬ÇB]\ÀúôYõX›]ö]HHN¬ÇB]\ÀúôYúòX›[€îò][»HéN¬ÇÇB]\Àù⁄\ôYúò[YHHò[ŸN¬ÇB]\Àù⁄\ôYúò[YS[ô]⁄YHN¬ÇB]\Àù⁄\ôYúò[YS[ôXÿ\H	‹õ›[ô	Œ¬ÇB]\Àù⁄\ôYúò[YS[ôZõ⁄[àH	‹õ›[ô	Œ¬ÇÇB]\Àôõ]⁄Y[ô»Hò[ŸN¬ÇÇB]\ÀôõŸ»HùYN¬ÇÇB]\ÀúŸ]ò[Y\ \ò[Y]\ú»
N¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àò€€‹ãò€‹J€›\òŸKò€€‹à
N¬ÇB]\Àú‹X›[\ãò€‹J€›\òŸKú‹X›[\à
N¬ÇB]\Àú⁄[ö[ô\‹»H€›\òŸKú⁄[ö[ô\‹Œ¬ÇÇB]\ÀõX\H€›\òŸKõX\¬ÇÇB]\ÀõY⁄X\H€›\òŸKõY⁄X\¬ÇB]\ÀõY⁄X\[ù[ú⁄]HH€›\òŸKõY⁄X\[ù[ú⁄]N¬ÇÇB]\Àò[”X\H€›\òŸKò[”X\¬ÇB]\Àò[”X\[ù[ú⁄]HH€›\òŸKò[”X\[ù[ú⁄]N¬ÇÇB]\Àô[Z\‹⁄]ôKò€‹J€›\òŸKô[Z\‹⁄]ôH
N¬ÇB]\Àô[Z\‹⁄]ôSX\H€›\òŸKô[Z\‹⁄]ôSX\¬ÇB]\Àô[Z\‹⁄]ôR[ù[ú⁄]HH€›\òŸKô[Z\‹⁄]ôR[ù[ú⁄]N¬ÇÇB]\Àòù[\X\H€›\òŸKòù[\X\¬ÇB]\Àòù[\ÿÿ[HH€›\òŸKòù[\ÿÿ[N¬ÇÇB]\Àõõ‹õX[X\H€›\òŸKõõ‹õX[X\¬ÇB]\Àõõ‹õX[X\\HH€›\òŸKõõ‹õX[X\\N¬ÇB]\Àõõ‹õX[ÿÿ[Kò€‹J€›\òŸKõõ‹õX[ÿÿ[H
N¬ÇÇB]\Àô\‹XŸ[Y[ùX\H€›\òŸKô\‹XŸ[Y[ùX\¬ÇB]\Àô\‹XŸ[Y[ùÿÿ[HH€›\òŸKô\‹XŸ[Y[ùÿÿ[N¬ÇB]\Àô\‹XŸ[Y[ùöX\»H€›\òŸKô\‹XŸ[Y[ùöX\Œ¬ÇÇB]\Àú‹X›[\ìX\H€›\òŸKú‹X›[\ìX\¬ÇÇB]\Àò[SX\H€›\òŸKò[SX\¬ÇÇB]\Àô[ùìX\H€›\òŸKô[ùìX\¬ÇB]\Àô[ùìX\õ›][€ãò€‹J€›\òŸKô[ùìX\õ›][€à
N¬ÇB]\Àò€€Xö[ôHH€›\òŸKò€€Xö[ôN¬ÇB]\ÀúôYõX›]ö]HH€›\òŸKúôYõX›]ö]N¬ÇB]\ÀúôYúòX›[€îò][»H€›\òŸKúôYúòX›[€îò][Œ¬ÇÇB]\Àù⁄\ôYúò[YHH€›\òŸKù⁄\ôYúò[YN¬ÇB]\Àù⁄\ôYúò[YS[ô]⁄YH€›\òŸKù⁄\ôYúò[YS[ô]⁄Y¬ÇB]\Àù⁄\ôYúò[YS[ôXÿ\H€›\òŸKù⁄\ôYúò[YS[ôXÿ\¬ÇB]\Àù⁄\ôYúò[YS[ôZõ⁄[àH€›\òŸKù⁄\ôYúò[YS[ôZõ⁄[é¬ÇÇB]\Àôõ]⁄Y[ô»H€›\òŸKôõ]⁄Y[ôŒ¬ÇÇB]\ÀôõŸ»H€›\òŸKôõŸŒ¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€\‹»Y\⁄€€ìX]\öX[^[ô»X]\öX[¬ÇÇ\›]X»Ÿ]\J
H¬ÇÇB\ô]\õà	”Y\⁄€€ìX]\öX[	Œ¬ÇÇ_BÇÇX€€ú›ùX›‹ä\ò[Y]\ú»
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àö\”Y\⁄€€ìX]\öX[HùYN¬ÇÇB]\ÀôYö[ô\»H»	’””âŒà	…»N¬ÇÇB]\Àò€€‹àHô]»€€‹äôôôôôà
N¬ÇÇB]\ÀõX\Hù[¬ÇB]\Àô‹òYY[ùX\Hù[¬ÇÇB]\ÀõY⁄X\Hù[¬ÇB]\ÀõY⁄X\[ù[ú⁄]HHKå¬ÇÇB]\Àò[”X\Hù[¬ÇB]\Àò[”X\[ù[ú⁄]HHKå¬ÇÇB]\Àô[Z\‹⁄]ôHHô]»€€‹ä
N¬ÇB]\Àô[Z\‹⁄]ôR[ù[ú⁄]HHKå¬ÇB]\Àô[Z\‹⁄]ôSX\Hù[¬ÇÇB]\Àòù[\X\Hù[¬ÇB]\Àòù[\ÿÿ[HHN¬ÇÇB]\Àõõ‹õX[X\Hù[¬ÇB]\Àõõ‹õX[X\\HH[ôŸ[ù‹XŸSõ‹õX[X\¬ÇB]\Àõõ‹õX[ÿÿ[HHô]»ôX›‹åäKH
N¬ÇÇB]\Àô\‹XŸ[Y[ùX\Hù[¬ÇB]\Àô\‹XŸ[Y[ùÿÿ[HHN¬ÇB]\Àô\‹XŸ[Y[ùöX\»H¬ÇÇB]\Àò[SX\Hù[¬ÇÇB]\Àù⁄\ôYúò[YHHò[ŸN¬ÇB]\Àù⁄\ôYúò[YS[ô]⁄YHN¬ÇB]\Àù⁄\ôYúò[YS[ôXÿ\H	‹õ›[ô	Œ¬ÇB]\Àù⁄\ôYúò[YS[ôZõ⁄[àH	‹õ›[ô	Œ¬ÇÇB]\ÀôõŸ»HùYN¬ÇÇB]\ÀúŸ]ò[Y\ \ò[Y]\ú»
N¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àò€€‹ãò€‹J€›\òŸKò€€‹à
N¬ÇÇB]\ÀõX\H€›\òŸKõX\¬ÇB]\Àô‹òYY[ùX\H€›\òŸKô‹òYY[ùX\¬ÇÇB]\ÀõY⁄X\H€›\òŸKõY⁄X\¬ÇB]\ÀõY⁄X\[ù[ú⁄]HH€›\òŸKõY⁄X\[ù[ú⁄]N¬ÇÇB]\Àò[”X\H€›\òŸKò[”X\¬ÇB]\Àò[”X\[ù[ú⁄]HH€›\òŸKò[”X\[ù[ú⁄]N¬ÇÇB]\Àô[Z\‹⁄]ôKò€‹J€›\òŸKô[Z\‹⁄]ôH
N¬ÇB]\Àô[Z\‹⁄]ôSX\H€›\òŸKô[Z\‹⁄]ôSX\¬ÇB]\Àô[Z\‹⁄]ôR[ù[ú⁄]HH€›\òŸKô[Z\‹⁄]ôR[ù[ú⁄]N¬ÇÇB]\Àòù[\X\H€›\òŸKòù[\X\¬ÇB]\Àòù[\ÿÿ[HH€›\òŸKòù[\ÿÿ[N¬ÇÇB]\Àõõ‹õX[X\H€›\òŸKõõ‹õX[X\¬ÇB]\Àõõ‹õX[X\\HH€›\òŸKõõ‹õX[X\\N¬ÇB]\Àõõ‹õX[ÿÿ[Kò€‹J€›\òŸKõõ‹õX[ÿÿ[H
N¬ÇÇB]\Àô\‹XŸ[Y[ùX\H€›\òŸKô\‹XŸ[Y[ùX\¬ÇB]\Àô\‹XŸ[Y[ùÿÿ[HH€›\òŸKô\‹XŸ[Y[ùÿÿ[N¬ÇB]\Àô\‹XŸ[Y[ùöX\»H€›\òŸKô\‹XŸ[Y[ùöX\Œ¬ÇÇB]\Àò[SX\H€›\òŸKò[SX\¬ÇÇB]\Àù⁄\ôYúò[YHH€›\òŸKù⁄\ôYúò[YN¬ÇB]\Àù⁄\ôYúò[YS[ô]⁄YH€›\òŸKù⁄\ôYúò[YS[ô]⁄Y¬ÇB]\Àù⁄\ôYúò[YS[ôXÿ\H€›\òŸKù⁄\ôYúò[YS[ôXÿ\¬ÇB]\Àù⁄\ôYúò[YS[ôZõ⁄[àH€›\òŸKù⁄\ôYúò[YS[ôZõ⁄[é¬ÇÇB]\ÀôõŸ»H€›\òŸKôõŸŒ¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€\‹»Y\⁄õ‹õX[X]\öX[^[ô»X]\öX[¬ÇÇ\›]X»Ÿ]\J
H¬ÇÇB\ô]\õà	”Y\⁄õ‹õX[X]\öX[	Œ¬ÇÇ_BÇÇX€€ú›ùX›‹ä\ò[Y]\ú»
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àö\”Y\⁄õ‹õX[X]\öX[HùYN¬ÇÇB]\Àòù[\X\Hù[¬ÇB]\Àòù[\ÿÿ[HHN¬ÇÇB]\Àõõ‹õX[X\Hù[¬ÇB]\Àõõ‹õX[X\\HH[ôŸ[ù‹XŸSõ‹õX[X\¬ÇB]\Àõõ‹õX[ÿÿ[HHô]»ôX›‹åäKH
N¬ÇÇB]\Àô\‹XŸ[Y[ùX\Hù[¬ÇB]\Àô\‹XŸ[Y[ùÿÿ[HHN¬ÇB]\Àô\‹XŸ[Y[ùöX\»H¬ÇÇB]\Àù⁄\ôYúò[YHHò[ŸN¬ÇB]\Àù⁄\ôYúò[YS[ô]⁄YHN¬ÇÇB]\Àôõ]⁄Y[ô»Hò[ŸN¬ÇÇB]\ÀúŸ]ò[Y\ \ò[Y]\ú»
N¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àòù[\X\H€›\òŸKòù[\X\¬ÇB]\Àòù[\ÿÿ[HH€›\òŸKòù[\ÿÿ[N¬ÇÇB]\Àõõ‹õX[X\H€›\òŸKõõ‹õX[X\¬ÇB]\Àõõ‹õX[X\\HH€›\òŸKõõ‹õX[X\\N¬ÇB]\Àõõ‹õX[ÿÿ[Kò€‹J€›\òŸKõõ‹õX[ÿÿ[H
N¬ÇÇB]\Àô\‹XŸ[Y[ùX\H€›\òŸKô\‹XŸ[Y[ùX\¬ÇB]\Àô\‹XŸ[Y[ùÿÿ[HH€›\òŸKô\‹XŸ[Y[ùÿÿ[N¬ÇB]\Àô\‹XŸ[Y[ùöX\»H€›\òŸKô\‹XŸ[Y[ùöX\Œ¬ÇÇB]\Àù⁄\ôYúò[YHH€›\òŸKù⁄\ôYúò[YN¬ÇB]\Àù⁄\ôYúò[YS[ô]⁄YH€›\òŸKù⁄\ôYúò[YS[ô]⁄Y¬ÇÇB]\Àôõ]⁄Y[ô»H€›\òŸKôõ]⁄Y[ôŒ¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€\‹»Y\⁄[Xô\ùX]\öX[^[ô»X]\öX[¬ÇÇ\›]X»Ÿ]\J
H¬ÇÇB\ô]\õà	”Y\⁄[Xô\ùX]\öX[	Œ¬ÇÇ_BÇÇX€€ú›ùX›‹ä\ò[Y]\ú»
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àö\”Y\⁄[Xô\ùX]\öX[HùYN¬ÇÇB]\Àò€€‹àHô]»€€‹äôôôôôà
N»À»Yôù\ŸBÇÇB]\ÀõX\Hù[¬ÇÇB]\ÀõY⁄X\Hù[¬ÇB]\ÀõY⁄X\[ù[ú⁄]HHKå¬ÇÇB]\Àò[”X\Hù[¬ÇB]\Àò[”X\[ù[ú⁄]HHKå¬ÇÇB]\Àô[Z\‹⁄]ôHHô]»€€‹ä
N¬ÇB]\Àô[Z\‹⁄]ôR[ù[ú⁄]HHKå¬ÇB]\Àô[Z\‹⁄]ôSX\Hù[¬ÇÇB]\Àòù[\X\Hù[¬ÇB]\Àòù[\ÿÿ[HHN¬ÇÇB]\Àõõ‹õX[X\Hù[¬ÇB]\Àõõ‹õX[X\\HH[ôŸ[ù‹XŸSõ‹õX[X\¬ÇB]\Àõõ‹õX[ÿÿ[HHô]»ôX›‹åäKH
N¬ÇÇB]\Àô\‹XŸ[Y[ùX\Hù[¬ÇB]\Àô\‹XŸ[Y[ùÿÿ[HHN¬ÇB]\Àô\‹XŸ[Y[ùöX\»H¬ÇÇB]\Àú‹X›[\ìX\Hù[¬ÇÇB]\Àò[SX\Hù[¬ÇÇB]\Àô[ùìX\Hù[¬ÇB]\Àô[ùìX\õ›][€àHô]»][\ä
N¬ÇB]\Àò€€Xö[ôHH][\S‹\ò][€é¬ÇB]\ÀúôYõX›]ö]HHN¬ÇB]\ÀúôYúòX›[€îò][»HéN¬ÇÇB]\Àù⁄\ôYúò[YHHò[ŸN¬ÇB]\Àù⁄\ôYúò[YS[ô]⁄YHN¬ÇB]\Àù⁄\ôYúò[YS[ôXÿ\H	‹õ›[ô	Œ¬ÇB]\Àù⁄\ôYúò[YS[ôZõ⁄[àH	‹õ›[ô	Œ¬ÇÇB]\Àôõ]⁄Y[ô»Hò[ŸN¬ÇÇB]\ÀôõŸ»HùYN¬ÇÇB]\ÀúŸ]ò[Y\ \ò[Y]\ú»
N¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àò€€‹ãò€‹J€›\òŸKò€€‹à
N¬ÇÇB]\ÀõX\H€›\òŸKõX\¬ÇÇB]\ÀõY⁄X\H€›\òŸKõY⁄X\¬ÇB]\ÀõY⁄X\[ù[ú⁄]HH€›\òŸKõY⁄X\[ù[ú⁄]N¬ÇÇB]\Àò[”X\H€›\òŸKò[”X\¬ÇB]\Àò[”X\[ù[ú⁄]HH€›\òŸKò[”X\[ù[ú⁄]N¬ÇÇB]\Àô[Z\‹⁄]ôKò€‹J€›\òŸKô[Z\‹⁄]ôH
N¬ÇB]\Àô[Z\‹⁄]ôSX\H€›\òŸKô[Z\‹⁄]ôSX\¬ÇB]\Àô[Z\‹⁄]ôR[ù[ú⁄]HH€›\òŸKô[Z\‹⁄]ôR[ù[ú⁄]N¬ÇÇB]\Àòù[\X\H€›\òŸKòù[\X\¬ÇB]\Àòù[\ÿÿ[HH€›\òŸKòù[\ÿÿ[N¬ÇÇB]\Àõõ‹õX[X\H€›\òŸKõõ‹õX[X\¬ÇB]\Àõõ‹õX[X\\HH€›\òŸKõõ‹õX[X\\N¬ÇB]\Àõõ‹õX[ÿÿ[Kò€‹J€›\òŸKõõ‹õX[ÿÿ[H
N¬ÇÇB]\Àô\‹XŸ[Y[ùX\H€›\òŸKô\‹XŸ[Y[ùX\¬ÇB]\Àô\‹XŸ[Y[ùÿÿ[HH€›\òŸKô\‹XŸ[Y[ùÿÿ[N¬ÇB]\Àô\‹XŸ[Y[ùöX\»H€›\òŸKô\‹XŸ[Y[ùöX\Œ¬ÇÇB]\Àú‹X›[\ìX\H€›\òŸKú‹X›[\ìX\¬ÇÇB]\Àò[SX\H€›\òŸKò[SX\¬ÇÇB]\Àô[ùìX\H€›\òŸKô[ùìX\¬ÇB]\Àô[ùìX\õ›][€ãò€‹J€›\òŸKô[ùìX\õ›][€à
N¬ÇB]\Àò€€Xö[ôHH€›\òŸKò€€Xö[ôN¬ÇB]\ÀúôYõX›]ö]HH€›\òŸKúôYõX›]ö]N¬ÇB]\ÀúôYúòX›[€îò][»H€›\òŸKúôYúòX›[€îò][Œ¬ÇÇB]\Àù⁄\ôYúò[YHH€›\òŸKù⁄\ôYúò[YN¬ÇB]\Àù⁄\ôYúò[YS[ô]⁄YH€›\òŸKù⁄\ôYúò[YS[ô]⁄Y¬ÇB]\Àù⁄\ôYúò[YS[ôXÿ\H€›\òŸKù⁄\ôYúò[YS[ôXÿ\¬ÇB]\Àù⁄\ôYúò[YS[ôZõ⁄[àH€›\òŸKù⁄\ôYúò[YS[ôZõ⁄[é¬ÇÇB]\Àôõ]⁄Y[ô»H€›\òŸKôõ]⁄Y[ôŒ¬ÇÇB]\ÀôõŸ»H€›\òŸKôõŸŒ¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€\‹»Y\⁄X]ÿ\X]\öX[^[ô»X]\öX[¬ÇÇ\›]X»Ÿ]\J
H¬ÇÇB\ô]\õà	”Y\⁄X]ÿ\X]\öX[	Œ¬ÇÇ_BÇÇX€€ú›ùX›‹ä\ò[Y]\ú»
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àö\”Y\⁄X]ÿ\X]\öX[HùYN¬ÇÇB]\ÀôYö[ô\»H»	”PU–T	Œà	…»N¬ÇÇB]\Àò€€‹àHô]»€€‹äôôôôôà
N»À»Yôù\ŸBÇÇB]\ÀõX]ÿ\Hù[¬ÇÇB]\ÀõX\Hù[¬ÇÇB]\Àòù[\X\Hù[¬ÇB]\Àòù[\ÿÿ[HHN¬ÇÇB]\Àõõ‹õX[X\Hù[¬ÇB]\Àõõ‹õX[X\\HH[ôŸ[ù‹XŸSõ‹õX[X\¬ÇB]\Àõõ‹õX[ÿÿ[HHô]»ôX›‹åäKH
N¬ÇÇB]\Àô\‹XŸ[Y[ùX\Hù[¬ÇB]\Àô\‹XŸ[Y[ùÿÿ[HHN¬ÇB]\Àô\‹XŸ[Y[ùöX\»H¬ÇÇB]\Àò[SX\Hù[¬ÇÇB]\Àôõ]⁄Y[ô»Hò[ŸN¬ÇÇB]\ÀôõŸ»HùYN¬ÇÇB]\ÀúŸ]ò[Y\ \ò[Y]\ú»
N¬ÇÇ_BÇÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\ÀôYö[ô\»H»	”PU–T	Œà	…»N¬ÇÇB]\Àò€€‹ãò€‹J€›\òŸKò€€‹à
N¬ÇÇB]\ÀõX]ÿ\H€›\òŸKõX]ÿ\¬ÇÇB]\ÀõX\H€›\òŸKõX\¬ÇÇB]\Àòù[\X\H€›\òŸKòù[\X\¬ÇB]\Àòù[\ÿÿ[HH€›\òŸKòù[\ÿÿ[N¬ÇÇB]\Àõõ‹õX[X\H€›\òŸKõõ‹õX[X\¬ÇB]\Àõõ‹õX[X\\HH€›\òŸKõõ‹õX[X\\N¬ÇB]\Àõõ‹õX[ÿÿ[Kò€‹J€›\òŸKõõ‹õX[ÿÿ[H
N¬ÇÇB]\Àô\‹XŸ[Y[ùX\H€›\òŸKô\‹XŸ[Y[ùX\¬ÇB]\Àô\‹XŸ[Y[ùÿÿ[HH€›\òŸKô\‹XŸ[Y[ùÿÿ[N¬ÇB]\Àô\‹XŸ[Y[ùöX\»H€›\òŸKô\‹XŸ[Y[ùöX\Œ¬ÇÇB]\Àò[SX\H€›\òŸKò[SX\¬ÇÇB]\Àôõ]⁄Y[ô»H€›\òŸKôõ]⁄Y[ôŒ¬ÇÇB]\ÀôõŸ»H€›\òŸKôõŸŒ¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€\‹»[ôQ\⁄YX]\öX[^[ô»[ôPò\⁄X”X]\öX[¬ÇÇ\›]X»Ÿ]\J
H¬ÇÇB\ô]\õà	”[ôQ\⁄YX]\öX[	Œ¬ÇÇ_BÇÇX€€ú›ùX›‹ä\ò[Y]\ú»
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àö\”[ôQ\⁄YX]\öX[HùYN¬ÇÇB]\Àúÿÿ[HHN¬ÇB]\Àô\⁄⁄^ôHHŒ¬ÇB]\Àôÿ\⁄^ôHHN¬ÇÇB]\ÀúŸ]ò[Y\ \ò[Y]\ú»
N¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àúÿÿ[HH€›\òŸKúÿÿ[N¬ÇB]\Àô\⁄⁄^ôHH€›\òŸKô\⁄⁄^ôN¬ÇB]\Àôÿ\⁄^ôHH€›\òŸKôÿ\⁄^ôN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇãÀ»€€ùô\ù»[à\úò^H»H‹X⁄YöX»\Bôù[ò›[€à€€ùô\ù\úò^J\úò^K\Kõ‹òŸP€€ôH
H¬ÇÇZYà
H\úò^HÀ»]	›[ôYö[ôY	»[ô	€ù[	»\‹¬ÇBHHõ‹òŸP€€ôH	âà\úò^Kò€€ú›ùX›‹àOOH\H
Hô]\õà\úò^N¬ÇÇZYà
\[Ÿà\KêñUT◊‘Tó—SSQSïOOH	€ù[Xô\â»
H¬ÇÇB\ô]\õàô]»\J\úò^H
N»À»‹ôX]H\Y\úò^BÇÇ_BÇÇ\ô]\õà\úò^Kúõ››\Kú€XŸKòÿ[
\úò^H
N»À»‹ôX]H\úò^BÇüBÇôù[ò›[€à\’\Y\úò^JÿöôX›
H¬ÇÇ\ô]\õà\úò^PùYôô\ãö\’öY] ÿöôX›
H	âÇÇBHH
ÿöôX›[ú›[òŸ[Ÿà]UöY]»
N¬ÇüBÇãÀ»ô]\õú»[à\úò^HûH⁄X⁄[Y\»[ôò[Y\»ÿ[àôH€‹ùYôù[ò›[€àŸ]Ÿ^Yúò[YS‹ô\ä[Y\»
H¬ÇÇYù[ò›[€à€€\\ôU[YJKà
H¬ÇÇB\ô]\õà[Y\÷»HHH[Y\÷»àN¬ÇÇ_BÇÇX€€ú›àH[Y\Àõ[ô›¬ÇX€€ú›ô\›[Hô]»\úò^Jà
N¬ÇYõ‹à
]HH»HOOHé»
 »H
Hô\›[»HHHN¬ÇÇ\ô\›[ú€‹ù
€€\\ôU[YH
N¬ÇÇ\ô]\õàô\›[¬ÇüBÇãÀ»\Ÿ\»H\úò^Hô]ö[›\€Hô]\õôYûH	ŸŸ]Ÿ^Yúò[YS‹ô\â»»€‹ù]Bôù[ò›[€à€‹ùY\úò^Jò[Y\À›öYK‹ô\à
H¬ÇÇX€€ú›ïò[Y\»Hò[Y\Àõ[ô›¬ÇX€€ú›ô\›[Hô]»ò[Y\Àò€€ú›ùX›‹äïò[Y\»
N¬ÇÇYõ‹à
]HH›ŸôúŸ]H»›ŸôúŸ]OOHïò[Y\Œ»
 »H
H¬ÇÇBX€€ú›‹ò”ŸôúŸ]H‹ô\ñ»HH
à›öYN¬ÇÇBYõ‹à
]àH»àOOH›öYN»
 »à
H¬ÇÇBB\ô\›[»›ŸôúŸ]
 »HHò[Y\÷»‹ò”ŸôúŸ]
»àN¬ÇÇB_BÇÇ_BÇÇ\ô]\õàô\›[¬ÇüBÇãÀ»ù[ò›[€àõ‹à\ú⁄[ô»S‘»Ÿ^Yúò[YHõ‹õX]¬ôù[ò›[€àõ][íî””äú€€íŸ^\À[Y\Àò[Y\Àò[YTõ‹\ùSò[YH
H¬ÇÇ[]HHKŸ^HHú€€íŸ^\÷»N¬ÇÇ]⁄[H
Ÿ^HOOH[ôYö[ôY	âàŸ^V»ò[YTõ‹\ùSò[YHHOOH[ôYö[ôY
H¬ÇÇBZŸ^HHú€€íŸ^\÷»H
 »N¬ÇÇ_BÇÇZYà
Ÿ^HOOH[ôYö[ôY
Hô]\õé»À»õ»]BÇÇ[]ò[YHHŸ^V»ò[YTõ‹\ùSò[YHN¬ÇZYà
ò[YHOOH[ôYö[ôY
Hô]\õé»À»õ»]BÇÇZYà
\úò^Kö\–\úò^Jò[YH
H
H¬ÇÇBY»¬ÇÇBB]ò[YHHŸ^V»ò[YTõ‹\ùSò[YHN¬ÇÇBBZYà
ò[YHOOH[ôYö[ôY
H¬ÇÇBBB][Y\Àú\⁄
Ÿ^Kù[YH
N¬ÇBBB]ò[Y\Àú\⁄ò\Jò[Y\Àò[YH
N»À»\⁄[[[Y[ù¬ÇÇBB_BÇÇBBZŸ^HHú€€íŸ^\÷»H
 »N¬ÇÇB_H⁄[H
Ÿ^HOOH[ôYö[ôY
N¬ÇÇ_H[ŸHYà
ò[YKù–\úò^HOOH[ôYö[ôY
H¬ÇÇBKÀ»ããò\‹›[YHëQKìX]Z\⁄ÇÇBY»¬ÇÇBB]ò[YHHŸ^V»ò[YTõ‹\ùSò[YHN¬ÇÇBBZYà
ò[YHOOH[ôYö[ôY
H¬ÇÇBBB][Y\Àú\⁄
Ÿ^Kù[YH
N¬ÇBBB]ò[YKù–\úò^Jò[Y\Àò[Y\Àõ[ô›
N¬ÇÇBB_BÇÇBBZŸ^HHú€€íŸ^\÷»H
 »N¬ÇÇB_H⁄[H
Ÿ^HOOH[ôYö[ôY
N¬ÇÇ_H[ŸH¬ÇÇBKÀ»›\ù⁄\ŸH\⁄\ÀZ\¬ÇÇBY»¬ÇÇBB]ò[YHHŸ^V»ò[YTõ‹\ùSò[YHN¬ÇÇBBZYà
ò[YHOOH[ôYö[ôY
H¬ÇÇBBB][Y\Àú\⁄
Ÿ^Kù[YH
N¬ÇBBB]ò[Y\Àú\⁄
ò[YH
N¬ÇÇBB_BÇÇBBZŸ^HHú€€íŸ^\÷»H
 »N¬ÇÇB_H⁄[H
Ÿ^HOOH[ôYö[ôY
N¬ÇÇ_BÇüBÇôù[ò›[€à›Xò€\
€›\òŸP€\ò[YK›\ùúò[YK[ôúò[YKú»HÃ
H¬ÇÇX€€ú›€\H€›\òŸP€\ò€€ôJ
N¬ÇÇX€\õò[YHHò[YN¬ÇÇX€€ú›òX⁄‹»H◊N¬ÇÇYõ‹à
]HH»H€\ùòX⁄‹Àõ[ô›»
 »H
H¬ÇÇBX€€ú›òX⁄»H€\ùòX⁄‹÷»HN¬ÇBX€€ú›ò[YT⁄^ôHHòX⁄ÀôŸ]ò[YT⁄^ôJ
N¬ÇÇBX€€ú›[Y\»H◊N¬ÇBX€€ú›ò[Y\»H◊N¬ÇÇBYõ‹à
]àH»àòX⁄Àù[Y\Àõ[ô›»
 »à
H¬ÇÇBBX€€ú›úò[YHHòX⁄Àù[Y\÷»àH
àúŒ¬ÇÇBBZYà
úò[YH›\ùúò[YHúò[YHèH[ôúò[YH
H€€ù[ùYN¬ÇÇBB][Y\Àú\⁄
òX⁄Àù[Y\÷»àH
N¬ÇÇBBYõ‹à
]»H»»ò[YT⁄^ôN»
 »»
H¬ÇÇBBB]ò[Y\Àú\⁄
òX⁄Àùò[Y\÷»à
àò[YT⁄^ôH
»»H
N¬ÇÇBB_BÇÇB_BÇÇBZYà
[Y\Àõ[ô›OOH
H€€ù[ùYN¬ÇÇB]òX⁄Àù[Y\»H€€ùô\ù\úò^J[Y\ÀòX⁄Àù[Y\Àò€€ú›ùX›‹à
N¬ÇB]òX⁄Àùò[Y\»H€€ùô\ù\úò^Jò[Y\ÀòX⁄Àùò[Y\Àò€€ú›ùX›‹à
N¬ÇÇB]òX⁄‹Àú\⁄
òX⁄»
N¬ÇÇ_BÇÇX€\ùòX⁄‹»HòX⁄‹Œ¬ÇÇKÀ»ö[ôZ[ö[][Hù[Y\»ò[YHX‹õ‹‹»[òX⁄‹»[àHö[[YY€\ÇÇ[]Z[î›\ù[YHH[ôö[ö]N¬ÇÇYõ‹à
]HH»H€\ùòX⁄‹Àõ[ô›»
 »H
H¬ÇÇBZYà
Z[î›\ù[YHà€\ùòX⁄‹÷»HKù[Y\÷»H
H¬ÇÇBB[Z[î›\ù[YHH€\ùòX⁄‹÷»HKù[Y\÷»N¬ÇÇB_BÇÇ_BÇÇKÀ»⁄Yù[òX⁄‹»›X⁄]€\ôY⁄[ú»]LÇÇYõ‹à
]HH»H€\ùòX⁄‹Àõ[ô›»
 »H
H¬ÇÇBX€\ùòX⁄‹÷»HKú⁄Yù
HH
àZ[î›\ù[YH
N¬ÇÇ_BÇÇX€\úô\Ÿ]\ò][€ä
N¬ÇÇ\ô]\õà€\¬ÇüBÇôù[ò›[€àXZŸP€\Y]]ôJ\ôŸ]€\ôYô\ô[òŸQúò[YHHôYô\ô[òŸP€\H\ôŸ]€\ú»HÃ
H¬ÇÇZYà
ú»H
Hú»HÃ¬ÇÇX€€ú›ù[UòX⁄‹»HôYô\ô[òŸP€\ùòX⁄‹Àõ[ô›¬ÇX€€ú›ôYô\ô[òŸU[YHHôYô\ô[òŸQúò[YH»úŒ¬ÇÇKÀ»XZŸHXX⁄òX⁄…‹»ò[Y\»ô[]]ôH»Hò[Y\»]HôYô\ô[òŸHúò[YBÇYõ‹à
]HH»Hù[UòX⁄‹Œ»
 »H
H¬ÇÇBX€€ú›ôYô\ô[òŸUòX⁄»HôYô\ô[òŸP€\ùòX⁄‹÷»HN¬ÇBX€€ú›ôYô\ô[òŸUòX⁄’\HHôYô\ô[òŸUòX⁄Àïò[YU\Sò[YN¬ÇÇBKÀ»⁄⁄\\»òX⁄»Yà]	‹»õ€ã[ù[Y\öX¬ÇBZYà
ôYô\ô[òŸUòX⁄’\HOOH	ÿõ€€	»ôYô\ô[òŸUòX⁄’\HOOH	‹›ö[ô…»
H€€ù[ùYN¬ÇÇBKÀ»ö[ôHòX⁄»[àH\ôŸ]€\⁄‹ŸHò[YH[ô\HX]⁄\»HôYô\ô[òŸHòX⁄¬ÇBX€€ú›\ôŸ]òX⁄»H\ôŸ]€\ùòX⁄‹Àôö[ô
ù[ò›[€à
òX⁄»
H¬ÇÇBB\ô]\õàòX⁄Àõò[YHOOHôYô\ô[òŸUòX⁄Àõò[YBÇBBBIâàòX⁄Àïò[YU\Sò[YHOOHôYô\ô[òŸUòX⁄’\N¬ÇÇB_H
N¬ÇÇBZYà
\ôŸ]òX⁄»OOH[ôYö[ôY
H€€ù[ùYN¬ÇÇB[]ôYô\ô[òŸSŸôúŸ]H¬ÇBX€€ú›ôYô\ô[òŸUò[YT⁄^ôHHôYô\ô[òŸUòX⁄ÀôŸ]ò[YT⁄^ôJ
N¬ÇÇBZYà
ôYô\ô[òŸUòX⁄Àò‹ôX]R[ù\ú€[ùö\“[ù\ú€[ùòX›‹ûSY]Ÿ”ê›XöX‘‹[ôH
H¬ÇÇBB\ôYô\ô[òŸSŸôúŸ]HôYô\ô[òŸUò[YT⁄^ôH»Œ¬ÇÇB_BÇÇB[]\ôŸ]ŸôúŸ]H¬ÇBX€€ú›\ôŸ]ò[YT⁄^ôHH\ôŸ]òX⁄ÀôŸ]ò[YT⁄^ôJ
N¬ÇÇBZYà
\ôŸ]òX⁄Àò‹ôX]R[ù\ú€[ùö\“[ù\ú€[ùòX›‹ûSY]Ÿ”ê›XöX‘‹[ôH
H¬ÇÇBB]\ôŸ]ŸôúŸ]H\ôŸ]ò[YT⁄^ôH»Œ¬ÇÇB_BÇÇBX€€ú›\›[ô^HôYô\ô[òŸUòX⁄Àù[Y\Àõ[ô›HN¬ÇB[]ôYô\ô[òŸUò[YN¬ÇÇBKÀ»ö[ôHò[YH»›XùòX››]ŸàHòX⁄¬ÇBZYà
ôYô\ô[òŸU[YHHôYô\ô[òŸUòX⁄Àù[Y\÷»H
H¬ÇÇBBKÀ»ôYô\ô[òŸHúò[YH\»X\õY\à[àHö\ú›Ÿ^Yúò[YK€»ù\›\ŸHHö\ú›Ÿ^Yúò[YBÇBBX€€ú››\ù[ô^HôYô\ô[òŸSŸôúŸ]¬ÇBBX€€ú›[ô[ô^HôYô\ô[òŸUò[YT⁄^ôHHôYô\ô[òŸSŸôúŸ]¬ÇBB\ôYô\ô[òŸUò[YHHôYô\ô[òŸUòX⁄Àùò[Y\Àú€XŸJ›\ù[ô^[ô[ô^
N¬ÇÇB_H[ŸHYà
ôYô\ô[òŸU[YHèHôYô\ô[òŸUòX⁄Àù[Y\÷»\›[ô^H
H¬ÇÇBBKÀ»ôYô\ô[òŸHúò[YH\»Yù\àH\›Ÿ^Yúò[YK€»ù\›\ŸHH\›Ÿ^Yúò[YBÇBBX€€ú››\ù[ô^H\›[ô^
àôYô\ô[òŸUò[YT⁄^ôH
»ôYô\ô[òŸSŸôúŸ]¬ÇBBX€€ú›[ô[ô^H›\ù[ô^
»ôYô\ô[òŸUò[YT⁄^ôHHôYô\ô[òŸSŸôúŸ]¬ÇBB\ôYô\ô[òŸUò[YHHôYô\ô[òŸUòX⁄Àùò[Y\Àú€XŸJ›\ù[ô^[ô[ô^
N¬ÇÇB_H[ŸH¬ÇÇBBKÀ»[ù\ú€]H»HôYô\ô[òŸHò[YBÇBBX€€ú›[ù\ú€[ùHôYô\ô[òŸUòX⁄Àò‹ôX]R[ù\ú€[ù

N¬ÇBBX€€ú››\ù[ô^HôYô\ô[òŸSŸôúŸ]¬ÇBBX€€ú›[ô[ô^HôYô\ô[òŸUò[YT⁄^ôHHôYô\ô[òŸSŸôúŸ]¬ÇBBZ[ù\ú€[ùô]ò[X]JôYô\ô[òŸU[YH
N¬ÇBB\ôYô\ô[òŸUò[YHH[ù\ú€[ùúô\›[ùYôô\ãú€XŸJ›\ù[ô^[ô[ô^
N¬ÇÇB_BÇÇBKÀ»€€öùYÿ]HH]X]\õö[€ÇÇBZYà
ôYô\ô[òŸUòX⁄’\HOOH	‹]X]\õö[€â»
H¬ÇÇBBX€€ú›ôYô\ô[òŸT]X]Hô]»]X]\õö[€ä
Kôúõ€P\úò^JôYô\ô[òŸUò[YH
Kõõ‹õX[^ôJ
Kò€€öùYÿ]J
N¬ÇBB\ôYô\ô[òŸT]X]ù–\úò^JôYô\ô[òŸUò[YH
N¬ÇÇB_BÇÇBKÀ»›XùòX›HôYô\ô[òŸHò[YHúõ€H[ŸàHòX⁄»ò[Y\¬ÇÇBX€€ú›ù[U[Y\»H\ôŸ]òX⁄Àù[Y\Àõ[ô›¬ÇBYõ‹à
]àH»àù[U[Y\Œ»
 »à
H¬ÇÇBBX€€ú›ò[YT›\ùHà
à\ôŸ]ò[YT⁄^ôH
»\ôŸ]ŸôúŸ]¬ÇÇBBZYà
ôYô\ô[òŸUòX⁄’\HOOH	‹]X]\õö[€â»
H¬ÇÇBBBKÀ»][\HH€€öùYÿ]Hõ‹à]X]\õö[€àòX⁄»\\¬ÇBBBT]X]\õö[€ãõ][\T]X]\õö[€ú—õ]
ÇBBBB]\ôŸ]òX⁄Àùò[Y\ÀÇBBBB]ò[YT›\ùÇBBBB\ôYô\ô[òŸUò[YKÇBBBBLÇBBBB]\ôŸ]òX⁄Àùò[Y\ÀÇBBBB]ò[YT›\ùÇBBBJN¬ÇÇBB_H[ŸH¬ÇÇBBBX€€ú›ò[YQ[ôH\ôŸ]ò[YT⁄^ôHH\ôŸ]ŸôúŸ]
àé¬ÇÇBBBKÀ»›XùòX›XX⁄ò[YHõ‹à[›\àù[Y\öX»òX⁄»\\¬ÇBBBYõ‹à
]»H»»ò[YQ[ô»
 »»
H¬ÇÇBBBB]\ôŸ]òX⁄Àùò[Y\÷»ò[YT›\ù
»»HOHôYô\ô[òŸUò[YV»»N¬ÇÇBBB_BÇÇBB_BÇÇB_BÇÇ_BÇÇ]\ôŸ]€\òõ[ô[ŸHHY]]ôP[ö[X][€êõ[ô[ŸN¬ÇÇ\ô]\õà\ôŸ]€\¬ÇüBÇò€€ú›[ö[X][€ï][»H¬ÇX€€ùô\ù\úò^Nà€€ùô\ù\úò^KÇZ\’\Y\úò^Nà\’\Y\úò^KÇYŸ]Ÿ^Yúò[YS‹ô\éàŸ]Ÿ^Yúò[YS‹ô\ãÇ\€‹ùY\úò^Nà€‹ùY\úò^KÇYõ][íî””éàõ][íî””ãÇ\›Xò€\à›Xò€\Ç[XZŸP€\Y]]ôNàXZŸP€\Y]]ôBüN¬Çã äÇà
àXú›òX›ò\ŸH€\‹»Ÿà[ù\ú€[ù»›ô\à\ò[Y]öX»ÿ[\\ÀÇà
Çà
àH\ò[Y]\à€XZ[à\»€ôH[Y[ú⁄[€ò[\Xÿ[HH[YH‹àH]à
à[€ô»H›\ùôHYö[ôYûHH]KÇà
Çà
àHÿ[\Hò[Y\»ÿ[à]ôH[ûH[Y[ú⁄[€ò[]H[ô\ö]ôY€\‹Ÿ\»X^Bà
à\H‹X⁄X[[ù\úô]][€ú»»H]KÇà
Çà
à\»€\‹»õ›öY\»H[ù\ùò[ŸYZ»[àH[\]HY]ŸYô\úö[ô¬à
àHX›X[[ù\ú€][€à»\ö]ôY€\‹Ÿ\ÀÇà
Çà
à[YH€€\^]H\» JHõ‹à[ôX\àXÿŸ\‹»‹õ‹‹⁄[ô»][‹›€»⁄[ù¬à
à[ô Ÿ»äHõ‹àò[ô€HXÿŸ\‹À⁄\ôHà\»Hù[Xô\àŸà‹⁄][€úÀÇà
Çà
àôYô\ô[òŸ\ŒÇà
Çà
àBZãÀ›››Àõ€Ÿ\⁄Y€ãò€€K›[\]K[Y]Ÿ\]\õãö[à
Çà
ã¬Çò€\‹»[ù\ú€[ù¬ÇÇX€€ú›ùX›‹ä\ò[Y]\î‹⁄][€úÀÿ[\Uò[Y\Àÿ[\T⁄^ôKô\›[ùYôô\à
H¬ÇÇB]\Àú\ò[Y]\î‹⁄][€ú»H\ò[Y]\î‹⁄][€úŒ¬ÇB]\ÀóÿÿX⁄Y[ô^H¬ÇÇB]\Àúô\›[ùYôô\àHô\›[ùYôô\àOOH[ôYö[ôY¬ÇBB\ô\›[ùYôô\ààô]»ÿ[\Uò[Y\Àò€€ú›ùX›‹äÿ[\T⁄^ôH
N¬ÇB]\Àúÿ[\Uò[Y\»Hÿ[\Uò[Y\Œ¬ÇB]\Àùò[YT⁄^ôHHÿ[\T⁄^ôN¬ÇÇB]\ÀúŸ][ô‹»Hù[¬ÇB]\ÀëYò][Ÿ][ô‹◊»HﬂN¬ÇÇ_BÇÇY]ò[X]J
H¬ÇÇBX€€ú›H\Àú\ò[Y]\î‹⁄][€úŒ¬ÇB[]LHH\ÀóÿÿX⁄Y[ô^ÇBB]HH»LHKÇBB]H»LHHHN¬ÇÇB]ò[Y]W⁄[ù\ùò[à¬ÇÇBB\ŸYZŒà¬ÇÇBBB[]öY⁄¬ÇÇBBB[[ôX\ó‹ÿÿ[éà¬ÇÇBBBBKÀÀHŸYHãÀ⁄ú‹\ôãò€€Kÿ€€\\ö\€€ã]À][ôYö[ôYÃ¬ÇBBBBKÀÀH€›Ÿ\à€ŸNÇÇBBBBKÀÀBÇBBBBKÀÀHBBBZYà
èHHHOOH[ôYö[ôY
H¬ÇBBBBYõ‹ùÿ\ô‹ÿÿ[éàYà
H
H
H
H¬ÇÇBBBBBYõ‹à
]⁄]ôU\]HLH
»é»»
H¬ÇÇBBBBBBZYà
HOOH[ôYö[ôY
H¬ÇÇBBBBBBBZYà

HúôXZ»õ‹ùÿ\ô‹ÿÿ[é¬ÇÇBBBBBBBKÀ»Yù\à[ôÇÇBBBBBBBZLHHõ[ô›¬ÇBBBBBBB]\ÀóÿÿX⁄Y[ô^HLN¬ÇBBBBBBB\ô]\õà\Àò€‹Tÿ[\Uò[YW LHHH
N¬ÇÇBBBBBB_BÇÇBBBBBBZYà
LHOOH⁄]ôU\]
HúôXZŒ»À»\»€‹ÇÇBBBBBB]HN¬ÇBBBBBB]HH»
 »LHN¬ÇÇBBBBBBZYà
H
H¬ÇÇBBBBBBBKÀ»ŸH]ôH\úö]ôY]H€›Y⁄[ù\ùò[ÇBBBBBBBXúôXZ»ŸYZŒ¬ÇÇBBBBBB_BÇÇBBBBB_BÇÇBBBBBKÀ»ô\\ôHö[ò\ûHŸX\ò⁄€àHöY⁄⁄YHŸàH[ô^ÇBBBBB\öY⁄Hõ[ô›¬ÇBBBBBXúôXZ»[ôX\ó‹ÿÿ[é¬ÇÇBBBB_BÇÇBBBBKÀÀH€›Ÿ\à€ŸNÇÇBBBBKÀÀBBBBBZYà
OOH[ôYö[ôY
H¬ÇBBBBZYà
H
èH
H
H¬ÇÇBBBBBKÀ»€‹[ôœ¬ÇÇBBBBBX€€ú›Y€ÿò[H»HN¬ÇÇBBBBBZYà
Y€ÿò[
H¬ÇÇBBBBBBZLHHé»À»
»K\⁄[ô»Hÿÿ[àõ‹àH]Z[¬ÇBBBBBB]HY€ÿò[¬ÇÇBBBBB_BÇÇBBBBBKÀ»[ôX\àô]ô\úŸHÿÿ[ÇÇÇBBBBBYõ‹à
]⁄]ôU\]HLHHé»»
H¬ÇÇBBBBBBZYà
OOH[ôYö[ôY
H¬ÇÇBBBBBBBKÀ»ôYõ‹ôH›\ùÇÇBBBBBBB]\ÀóÿÿX⁄Y[ô^H¬ÇBBBBBBB\ô]\õà\Àò€‹Tÿ[\Uò[YW 
N¬ÇÇBBBBBB_BÇÇBBBBBBZYà
LHOOH⁄]ôU\]
HúôXZŒ»À»\»€‹ÇÇBBBBBB]HH¬ÇBBBBBB]H»KHLHHHN¬ÇÇBBBBBBZYà
èH
H¬ÇÇBBBBBBBKÀ»ŸH]ôH\úö]ôY]H€›Y⁄[ù\ùò[ÇBBBBBBBXúôXZ»ŸYZŒ¬ÇÇBBBBBB_BÇÇBBBBB_BÇÇBBBBBKÀ»ô\\ôHö[ò\ûHŸX\ò⁄€àHYù⁄YHŸàH[ô^ÇBBBBB\öY⁄HLN¬ÇBBBBBZLHH¬ÇBBBBBXúôXZ»[ôX\ó‹ÿÿ[é¬ÇÇBBBB_BÇÇBBBBKÀ»H[ù\ùò[\»ò[YÇÇBBBBXúôXZ»ò[Y]W⁄[ù\ùò[¬ÇÇBBB_HÀ»[ôX\àÿÿ[ÇÇÇBBBKÀ»ö[ò\ûHŸX\ò⁄ÇÇBBB]⁄[H
LHöY⁄
H¬ÇÇBBBBX€€ú›ZYH
LH
»öY⁄
HèèàN¬ÇÇBBBBZYà
»ZYH
H¬ÇÇBBBBB\öY⁄HZY¬ÇÇBBBB_H[ŸH¬ÇÇBBBBBZLHHZY
»N¬ÇÇBBBB_BÇÇBBB_BÇÇBBB]HH»LHN¬ÇBBB]H»LHHHN¬ÇÇBBBKÀ»⁄X⁄»õ›[ô\ûHÿ\Ÿ\ÀYÿZ[ÇÇÇBBBZYà
OOH[ôYö[ôY
H¬ÇÇBBBB]\ÀóÿÿX⁄Y[ô^H¬ÇBBBB\ô]\õà\Àò€‹Tÿ[\Uò[YW 
N¬ÇÇBBB_BÇÇBBBZYà
HOOH[ôYö[ôY
H¬ÇÇBBBBZLHHõ[ô›¬ÇBBBB]\ÀóÿÿX⁄Y[ô^HLN¬ÇBBBB\ô]\õà\Àò€‹Tÿ[\Uò[YW LHHH
N¬ÇÇBBB_BÇÇBB_HÀ»ŸYZ¬ÇÇBB]\ÀóÿÿX⁄Y[ô^HLN¬ÇÇBB]\Àö[ù\ùò[⁄[ôŸY LKH
N¬ÇÇB_HÀ»ò[Y]W⁄[ù\ùò[ÇÇB\ô]\õà\Àö[ù\ú€]W LKH
N¬ÇÇ_BÇÇYŸ]Ÿ][ô‹◊ 
H¬ÇÇB\ô]\õà\ÀúŸ][ô‹»\ÀëYò][Ÿ][ô‹◊Œ¬ÇÇ_BÇÇX€‹Tÿ[\Uò[YW [ô^
H¬ÇÇBKÀ»€‹Y\»Hÿ[\Hò[YH»Hô\›[ùYôô\ÇÇÇBX€€ú›ô\›[H\Àúô\›[ùYôô\ãÇBB]ò[Y\»H\Àúÿ[\Uò[Y\ÀÇBB\›öYHH\Àùò[YT⁄^ôKÇBB[ŸôúŸ]H[ô^
à›öYN¬ÇÇBYõ‹à
]HH»HOOH›öYN»
 »H
H¬ÇÇBB\ô\›[»HHHò[Y\÷»ŸôúŸ]
»HN¬ÇÇB_BÇÇB\ô]\õàô\›[¬ÇÇ_BÇÇKÀ»[\]HY]Ÿ»õ‹à\ö]ôY€\‹Ÿ\ŒÇÇÇZ[ù\ú€]W  àLKH
ã»
H¬ÇÇB]õ›»ô]»\úõ‹ä	ÿÿ[»Xú›òX›Y]Ÿ	»
N¬ÇBKÀ»[\[Y[ù][€ú»⁄[ô]\õà\Àúô\›[ùYôô\ÇÇÇ_BÇÇZ[ù\ùò[⁄[ôŸY  àLKH
ã»
H¬ÇÇBKÀ»[\BÇÇ_BÇüBÇã äÇà
àò\›[ô⁄[\H›XöX»‹[ôH[ù\ú€[ùÇà
Çà
à]ÿ\»\ö]ôYúõ€HH\õZ]X[à€€ú›ùX›[€àŸ][ô»Hö\ú›\ö]ò]]ôBà
à]XX⁄ÿ[\H‹⁄][€à»H[ôX\à€‹Hô]ŸY[àôZY⁄õ‹ö[ô»‹⁄][€ú¬à
à›ô\àZ\à\ò[Y]\à[ù\ùò[Çà
ã¬Çò€\‹»›XöX“[ù\ú€[ù^[ô»[ù\ú€[ù¬ÇÇX€€ú›ùX›‹ä\ò[Y]\î‹⁄][€úÀÿ[\Uò[Y\Àÿ[\T⁄^ôKô\›[ùYôô\à
H¬ÇÇB\›\\ä\ò[Y]\î‹⁄][€úÀÿ[\Uò[Y\Àÿ[\T⁄^ôKô\›[ùYôô\à
N¬ÇÇB]\Àó›ŸZY⁄ô]àHH¬ÇB]\Àó€ŸôúŸ]ô]àHH¬ÇB]\Àó›ŸZY⁄ô^HH¬ÇB]\Àó€ŸôúŸ]ô^HH¬ÇÇB]\ÀëYò][Ÿ][ô‹◊»H¬ÇÇBBY[ô[ô‘›\ùàô\õ–›\ùò]\ôQ[ô[ôÀÇBBY[ô[ô—[ôàô\õ–›\ùò]\ôQ[ô[ô¬ÇÇB_N¬ÇÇ_BÇÇZ[ù\ùò[⁄[ôŸY LKH
H¬ÇÇBX€€ú›H\Àú\ò[Y]\î‹⁄][€úŒ¬ÇB[]Tô]àHLHHãÇBBZSô^HLH
»KÇÇBB]ô]àH»Tô]àKÇBB]ô^H»Sô^N¬ÇÇBZYà
ô]àOOH[ôYö[ôY
H¬ÇÇBB\›⁄]⁄
\ÀôŸ]Ÿ][ô‹◊ 
Kô[ô[ô‘›\ù
H¬ÇÇBBBXÿ\ŸHô\õ‘€‹Q[ô[ôŒÇÇÇBBBBKÀ»â 
HHÇBBBBZTô]àHLN¬ÇBBBB]ô]àHà
àHN¬ÇÇBBBBXúôXZŒ¬ÇÇBBBXÿ\ŸH‹ò\\õ›[ô[ô[ôŒÇÇÇBBBBKÀ»\ŸHH›\à[ôŸàH›\ùôBÇBBBBZTô]àHõ[ô›Hé¬ÇBBBB]ô]àH
»»Tô]àHH»Tô]à
»HN¬ÇÇBBBBXúôXZŒ¬ÇÇBBBYYò][àÀ»ô\õ–›\ùò]\ôQ[ô[ô¬ÇÇBBBBKÀ»â… 
HHKöÀòKàò]\ò[‹[ôBÇBBBBZTô]àHLN¬ÇBBBB]ô]àHN¬ÇÇBB_BÇÇB_BÇÇBZYà
ô^OOH[ôYö[ôY
H¬ÇÇBB\›⁄]⁄
\ÀôŸ]Ÿ][ô‹◊ 
Kô[ô[ô—[ô
H¬ÇÇBBBXÿ\ŸHô\õ‘€‹Q[ô[ôŒÇÇÇBBBBKÀ»â äHHÇBBBBZSô^HLN¬ÇBBBB]ô^Hà
àHH¬ÇÇBBBBXúôXZŒ¬ÇÇBBBXÿ\ŸH‹ò\\õ›[ô[ô[ôŒÇÇÇBBBBKÀ»\ŸHH›\à[ôŸàH›\ùôBÇBBBBZSô^HN¬ÇBBBB]ô^HH
»»HHH»N¬ÇÇBBBBXúôXZŒ¬ÇÇBBBYYò][àÀ»ô\õ–›\ùò]\ôQ[ô[ô¬ÇÇBBBBKÀ»â… äHHKöÀòKàò]\ò[‹[ôBÇBBBBZSô^HLHHN¬ÇBBBB]ô^H¬ÇÇBB_BÇÇB_BÇÇBX€€ú›[ëH
HH
H
àçKÇBB\›öYHH\Àùò[YT⁄^ôN¬ÇÇB]\Àó›ŸZY⁄ô]àH[ë»
Hô]à
N¬ÇB]\Àó›ŸZY⁄ô^H[ë»
ô^HH
N¬ÇB]\Àó€ŸôúŸ]ô]àHTô]à
à›öYN¬ÇB]\Àó€ŸôúŸ]ô^HSô^
à›öYN¬ÇÇ_BÇÇZ[ù\ú€]W LKH
H¬ÇÇBX€€ú›ô\›[H\Àúô\›[ùYôô\ãÇBB]ò[Y\»H\Àúÿ[\Uò[Y\ÀÇBB\›öYHH\Àùò[YT⁄^ôKÇÇBB[ÃHHLH
à›öYKB[ÃHÃHH›öYKÇBB[‘H\Àó€ŸôúŸ]ô]ã[”àH\Àó€ŸôúŸ]ô^ÇBB]‘H\Àó›ŸZY⁄ô]ã]”àH\Àó›ŸZY⁄ô^ÇÇBB\H
H
H»
HH
KÇBB\H
àÇBB\H
à¬ÇÇBKÀ»]ò[X]H€[õ€ZX[¬ÇÇBX€€ú›‘HH‘
à
»à
à‘
àH‘
à¬ÇBX€€ú›ÃH
H
»‘
H
à
»
HKçHHà
à‘
H
à
»
HçH
»‘
H
à
»N¬ÇBX€€ú›ÃHH
HHH”à
H
à
»
KçH
»”à
H
à
»çH
à¬ÇBX€€ú›”àH”à
àH”à
à¬ÇÇBKÀ»€€Xö[ôH]H[ôX\õBÇÇBYõ‹à
]HH»HOOH›öYN»
 »H
H¬ÇÇBB\ô\›[»HHBÇBBBB\‘
àò[Y\÷»‘
»HH
¬ÇBBBB\Ã
àò[Y\÷»Ã
»HH
¬ÇBBBB\ÃH
àò[Y\÷»ÃH
»HH
¬ÇBBBB\”à
àò[Y\÷»”à
»HN¬ÇÇB_BÇÇB\ô]\õàô\›[¬ÇÇ_BÇüBÇò€\‹»[ôX\í[ù\ú€[ù^[ô»[ù\ú€[ù¬ÇÇX€€ú›ùX›‹ä\ò[Y]\î‹⁄][€úÀÿ[\Uò[Y\Àÿ[\T⁄^ôKô\›[ùYôô\à
H¬ÇÇB\›\\ä\ò[Y]\î‹⁄][€úÀÿ[\Uò[Y\Àÿ[\T⁄^ôKô\›[ùYôô\à
N¬ÇÇ_BÇÇZ[ù\ú€]W LKH
H¬ÇÇBX€€ú›ô\›[H\Àúô\›[ùYôô\ãÇBB]ò[Y\»H\Àúÿ[\Uò[Y\ÀÇBB\›öYHH\Àùò[YT⁄^ôKÇÇBB[ŸôúŸ]HHLH
à›öYKÇBB[ŸôúŸ]HŸôúŸ]HH›öYKÇÇBB]ŸZY⁄HH
H
H»
HH
KÇBB]ŸZY⁄HHHŸZY⁄N¬ÇÇBYõ‹à
]HH»HOOH›öYN»
 »H
H¬ÇÇBB\ô\›[»HHBÇBBBB]ò[Y\÷»ŸôúŸ]
»HH
àŸZY⁄
¬ÇBBBB]ò[Y\÷»ŸôúŸ]H
»HH
àŸZY⁄N¬ÇÇB_BÇÇB\ô]\õàô\›[¬ÇÇ_BÇüBÇã äÇà
Çà
à[ù\ú€[ù]]ò[X]\»»Hÿ[\Hò[YH]H‹⁄][€àôXŸY[ô¬à
àH\ò[Y]\ãÇà
ã¬Çò€\‹»\ÿ‹ô]R[ù\ú€[ù^[ô»[ù\ú€[ù¬ÇÇX€€ú›ùX›‹ä\ò[Y]\î‹⁄][€úÀÿ[\Uò[Y\Àÿ[\T⁄^ôKô\›[ùYôô\à
H¬ÇÇB\›\\ä\ò[Y]\î‹⁄][€úÀÿ[\Uò[Y\Àÿ[\T⁄^ôKô\›[ùYôô\à
N¬ÇÇ_BÇÇZ[ù\ú€]W LH ãH
ã»
H¬ÇÇB\ô]\õà\Àò€‹Tÿ[\Uò[YW LHHH
N¬ÇÇ_BÇüBÇò€\‹»Ÿ^Yúò[YUòX⁄»¬ÇÇX€€ú›ùX›‹äò[YK[Y\Àò[Y\À[ù\ú€][€à
H¬ÇÇBZYà
ò[YHOOH[ôYö[ôY
Hõ›»ô]»\úõ‹ä	’ëQKíŸ^Yúò[YUòX⁄ŒàòX⁄»ò[YH\»[ôYö[ôY	»
N¬ÇBZYà
[Y\»OOH[ôYö[ôY[Y\Àõ[ô›OOH
Hõ›»ô]»\úõ‹ä	’ëQKíŸ^Yúò[YUòX⁄Œàõ»Ÿ^Yúò[Y\»[àòX⁄»ò[YY	»
»ò[YH
N¬ÇÇB]\Àõò[YHHò[YN¬ÇÇB]\Àù[Y\»H€€ùô\ù\úò^J[Y\À\Àï[YPùYôô\ï\H
N¬ÇB]\Àùò[Y\»H€€ùô\ù\úò^Jò[Y\À\Àïò[YPùYôô\ï\H
N¬ÇÇB]\ÀúŸ][ù\ú€][€ä[ù\ú€][€à\ÀëYò][[ù\ú€][€à
N¬ÇÇ_BÇÇKÀ»Ÿ\öX[^ò][€à
[à›]X»€€ù^ôXÿ]\ŸHŸà€€ú›ùX›‹à[ùõÿÿ][€ÇÇKÀ»[ô]]€X]X»[ùõÿÿ][€àŸàù“î””äNÇÇÇ\›]X»“î””äòX⁄»
H¬ÇÇBX€€ú›òX⁄’\HHòX⁄Àò€€ú›ùX›‹é¬ÇÇB[]ú€€é¬ÇÇBKÀ»\ö]ôY€\‹Ÿ\»ÿ[àYö[ôHH›]X»“î””àY]ŸÇBZYà
òX⁄’\Kù“î””àOOH\Àù“î””à
H¬ÇÇBBZú€€àHòX⁄’\Kù“î””äòX⁄»
N¬ÇÇB_H[ŸH¬ÇÇBBKÀ»ûHYò][ŸH\‹›[YHH]Hÿ[àôHŸ\öX[^ôY\ÀZ\¬ÇBBZú€€àH¬ÇÇBBBI€ò[YIŒàòX⁄Àõò[YKÇBBBI›[Y\…Œà€€ùô\ù\úò^JòX⁄Àù[Y\À\úò^H
KÇBBBI›ò[Y\…Œà€€ùô\ù\úò^JòX⁄Àùò[Y\À\úò^H
BÇÇBB_N¬ÇÇBBX€€ú›[ù\ú€][€àHòX⁄ÀôŸ][ù\ú€][€ä
N¬ÇÇBBZYà
[ù\ú€][€àOOHòX⁄ÀëYò][[ù\ú€][€à
H¬ÇÇBBBZú€€ãö[ù\ú€][€àH[ù\ú€][€é¬ÇÇBB_BÇÇB_BÇÇBZú€€ãù\HHòX⁄Àïò[YU\Sò[YN»À»X[ô]‹ûBÇÇB\ô]\õàú€€é¬ÇÇ_BÇÇR[ù\ú€[ùòX›‹ûSY]Ÿ\ÿ‹ô]Jô\›[
H¬ÇÇB\ô]\õàô]»\ÿ‹ô]R[ù\ú€[ù
\Àù[Y\À\Àùò[Y\À\ÀôŸ]ò[YT⁄^ôJ
Kô\›[
N¬ÇÇ_BÇÇR[ù\ú€[ùòX›‹ûSY]Ÿ[ôX\äô\›[
H¬ÇÇB\ô]\õàô]»[ôX\í[ù\ú€[ù
\Àù[Y\À\Àùò[Y\À\ÀôŸ]ò[YT⁄^ôJ
Kô\›[
N¬ÇÇ_BÇÇR[ù\ú€[ùòX›‹ûSY]Ÿ€[€›
ô\›[
H¬ÇÇB\ô]\õàô]»›XöX“[ù\ú€[ù
\Àù[Y\À\Àùò[Y\À\ÀôŸ]ò[YT⁄^ôJ
Kô\›[
N¬ÇÇ_BÇÇ\Ÿ][ù\ú€][€ä[ù\ú€][€à
H¬ÇÇB[]òX›‹ûSY]Ÿ¬ÇÇB\›⁄]⁄
[ù\ú€][€à
H¬ÇÇBBXÿ\ŸH[ù\ú€]Q\ÿ‹ô]NÇÇÇBBBYòX›‹ûSY]ŸH\Àí[ù\ú€[ùòX›‹ûSY]Ÿ\ÿ‹ô]N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH[ù\ú€]S[ôX\éÇÇÇBBBYòX›‹ûSY]ŸH\Àí[ù\ú€[ùòX›‹ûSY]Ÿ[ôX\é¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH[ù\ú€]T€[€›ÇÇÇBBBYòX›‹ûSY]ŸH\Àí[ù\ú€[ùòX›‹ûSY]Ÿ€[€›¬ÇÇBBBXúôXZŒ¬ÇÇB_BÇÇBZYà
òX›‹ûSY]ŸOOH[ôYö[ôY
H¬ÇÇBBX€€ú›Y\‹ÿYŸHH	›[ú›\‹ùY[ù\ú€][€àõ‹à	»
¬ÇBBB]\Àïò[YU\Sò[YH
»	»Ÿ^Yúò[YHòX⁄»ò[YY	»
»\Àõò[YN¬ÇÇBBZYà
\Àò‹ôX]R[ù\ú€[ùOOH[ôYö[ôY
H¬ÇÇBBBKÀ»ò[òX⁄»»Yò][[õ\‹»HYò][]Ÿ[à\»Y\‹ŸY\ÇBBBZYà
[ù\ú€][€àOOH\ÀëYò][[ù\ú€][€à
H¬ÇÇBBBB]\ÀúŸ][ù\ú€][€ä\ÀëYò][[ù\ú€][€à
N¬ÇÇBBB_H[ŸH¬ÇÇBBBB]õ›»ô]»\úõ‹äY\‹ÿYŸH
N»À»ò][[à\»ÿ\ŸBÇÇBBB_BÇÇBB_BÇÇBBX€€ú€€Kùÿ\õä	’ëQKíŸ^Yúò[YUòX⁄ŒâÀY\‹ÿYŸH
N¬ÇBB\ô]\õà\Œ¬ÇÇB_BÇÇB]\Àò‹ôX]R[ù\ú€[ùHòX›‹ûSY]Ÿ¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇYŸ][ù\ú€][€ä
H¬ÇÇB\›⁄]⁄
\Àò‹ôX]R[ù\ú€[ù
H¬ÇÇBBXÿ\ŸH\Àí[ù\ú€[ùòX›‹ûSY]Ÿ\ÿ‹ô]NÇÇÇBBB\ô]\õà[ù\ú€]Q\ÿ‹ô]N¬ÇÇBBXÿ\ŸH\Àí[ù\ú€[ùòX›‹ûSY]Ÿ[ôX\éÇÇÇBBB\ô]\õà[ù\ú€]S[ôX\é¬ÇÇBBXÿ\ŸH\Àí[ù\ú€[ùòX›‹ûSY]Ÿ€[€›ÇÇÇBBB\ô]\õà[ù\ú€]T€[€›¬ÇÇB_BÇÇ_BÇÇYŸ]ò[YT⁄^ôJ
H¬ÇÇB\ô]\õà\Àùò[Y\Àõ[ô›»\Àù[Y\Àõ[ô›¬ÇÇ_BÇÇKÀ»[›ôH[Ÿ^Yúò[Y\»Z]\àõ‹ùÿ\ô»‹àòX⁄›ÿ\ô»[à[YBÇ\⁄Yù
[YSŸôúŸ]
H¬ÇÇBZYà
[YSŸôúŸ]OOHå
H¬ÇÇBBX€€ú›[Y\»H\Àù[Y\Œ¬ÇÇBBYõ‹à
]HHàH[Y\Àõ[ô›»HOOHé»
 »H
H¬ÇÇBBB][Y\÷»HH
œH[YSŸôúŸ]¬ÇÇBB_BÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇKÀ»ÿÿ[H[Ÿ^Yúò[YH[Y\»ûHHòX›‹à
\ŸYù[õ‹àúò[YHOàŸX€€ô»€€ùô\ú⁄[€ú BÇ\ÿÿ[J[YTÿÿ[H
H¬ÇÇBZYà
[YTÿÿ[HOOHKå
H¬ÇÇBBX€€ú›[Y\»H\Àù[Y\Œ¬ÇÇBBYõ‹à
]HHàH[Y\Àõ[ô›»HOOHé»
 »H
H¬ÇÇBBB][Y\÷»HH
èH[YTÿÿ[N¬ÇÇBB_BÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇKÀ»ô[[›ô\»Ÿ^Yúò[Y\»ôYõ‹ôH[ôYù\à[ö[X][€à⁄]›]⁄[ô⁄[ô»[ûHò[Y\»⁄][àHò[ôŸH‹›\ù[YK[ô[YWKÇÇKÀ»ST‘ïSïàŸH»õ›⁄Yù\õ›[ôŸ^\»»H›\ùŸàHòX⁄»[YKôXÿ]\ŸHõ‹à[ù\ú€]YŸ^\»\»⁄[⁄[ôŸHZ\àò[Y\¬Ç]ö[J›\ù[YK[ô[YH
H¬ÇÇBX€€ú›[Y\»H\Àù[Y\ÀÇBB[íŸ^\»H[Y\Àõ[ô›¬ÇÇB[]úõ€HHÇBB]»HíŸ^\»HN¬ÇÇB]⁄[H
úõ€HOOHíŸ^\»	âà[Y\÷»úõ€HH›\ù[YH
H¬ÇÇBBJ »úõ€N¬ÇÇB_BÇÇB]⁄[H
»OOHHH	âà[Y\÷»»Hà[ô[YH
H¬ÇÇBBKKHŒ¬ÇÇB_BÇÇBJ »Œ»À»[ò€\⁄]ôHOà^€\⁄]ôHõ›[ôÇÇBZYà
úõ€HOOH»OOHíŸ^\»
H¬ÇÇBBKÀ»[\HòX⁄‹»\ôHõ‹òöY[ã€»ŸY\]X\›€ôHŸ^Yúò[YBÇBBZYà
úõ€HèH»
H¬ÇÇBBB]»HX]õX^
ÀH
N¬ÇBBBYúõ€HH»HN¬ÇÇBB_BÇÇBBX€€ú››öYHH\ÀôŸ]ò[YT⁄^ôJ
N¬ÇBB]\Àù[Y\»H[Y\Àú€XŸJúõ€K»
N¬ÇBB]\Àùò[Y\»H\Àùò[Y\Àú€XŸJúõ€H
à›öYK»
à›öYH
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇKÀ»[ú›\ôHŸH»õ›Ÿ]Hÿ\òòYŸR[ëÿ\òòYŸS›]⁄]X][€ãXZŸH›\ôHòX⁄‹»\ôH]X\›Z[ö[X[HöXXõBÇ]ò[Y]J
H¬ÇÇB[]ò[YHùYN¬ÇÇBX€€ú›ò[YT⁄^ôHH\ÀôŸ]ò[YT⁄^ôJ
N¬ÇBZYà
ò[YT⁄^ôHHX]ôõ€‹äò[YT⁄^ôH
HOOH
H¬ÇÇBBX€€ú€€Kô\úõ‹ä	’ëQKíŸ^Yúò[YUòX⁄Œà[ùò[Yò[YH⁄^ôH[àòX⁄ÀâÀ\»
N¬ÇBB]ò[YHò[ŸN¬ÇÇB_BÇÇBX€€ú›[Y\»H\Àù[Y\ÀÇBB]ò[Y\»H\Àùò[Y\ÀÇÇBB[íŸ^\»H[Y\Àõ[ô›¬ÇÇBZYà
íŸ^\»OOH
H¬ÇÇBBX€€ú€€Kô\úõ‹ä	’ëQKíŸ^Yúò[YUòX⁄ŒàòX⁄»\»[\KâÀ\»
N¬ÇBB]ò[YHò[ŸN¬ÇÇB_BÇÇB[]ô]ï[YHHù[¬ÇÇBYõ‹à
]HH»HOOHíŸ^\Œ»H
 »
H¬ÇÇBBX€€ú››\úï[YHH[Y\÷»HN¬ÇÇBBZYà
\[Ÿà›\úï[YHOOH	€ù[Xô\â»	âà\”òSä›\úï[YH
H
H¬ÇÇBBBX€€ú€€Kô\úõ‹ä	’ëQKíŸ^Yúò[YUòX⁄Œà[YH\»õ›Hò[Yù[Xô\ãâÀ\ÀK›\úï[YH
N¬ÇBBB]ò[YHò[ŸN¬ÇBBBXúôXZŒ¬ÇÇBB_BÇÇBBZYà
ô]ï[YHOOHù[	âàô]ï[YHà›\úï[YH
H¬ÇÇBBBX€€ú€€Kô\úõ‹ä	’ëQKíŸ^Yúò[YUòX⁄Œà›]Ÿà‹ô\àŸ^\ÀâÀ\ÀK›\úï[YKô]ï[YH
N¬ÇBBB]ò[YHò[ŸN¬ÇBBBXúôXZŒ¬ÇÇBB_BÇÇBB\ô]ï[YHH›\úï[YN¬ÇÇB_BÇÇBZYà
ò[Y\»OOH[ôYö[ôY
H¬ÇÇBBZYà
\’\Y\úò^Jò[Y\»
H
H¬ÇÇBBBYõ‹à
]HHàHò[Y\Àõ[ô›»HOOHé»
 »H
H¬ÇÇBBBBX€€ú›ò[YHHò[Y\÷»HN¬ÇÇBBBBZYà
\”òSäò[YH
H
H¬ÇÇBBBBBX€€ú€€Kô\úõ‹ä	’ëQKíŸ^Yúò[YUòX⁄Œàò[YH\»õ›Hò[Yù[Xô\ãâÀ\ÀKò[YH
N¬ÇBBBBB]ò[YHò[ŸN¬ÇBBBBBXúôXZŒ¬ÇÇBBBB_BÇÇBBB_BÇÇBB_BÇÇB_BÇÇB\ô]\õàò[Y¬ÇÇ_BÇÇKÀ»ô[[›ô\»\]Z]ò[[ùŸ\]Y[ùX[Ÿ^\»\»€€[[€à[à[‹ú\ôŸ]Ÿ\]Y[òŸ\¬ÇKÀ»
KKK
HKOà
KK
BÇ[‹[Z^ôJ
H¬ÇÇBKÀ»[Y\»‹àò[Y\»X^HôH⁄\ôY⁄]›\àòX⁄‹À€»›ô\ù‹ö][ô»\»[úÿYôBÇBX€€ú›[Y\»H\Àù[Y\Àú€XŸJ
KÇBB]ò[Y\»H\Àùò[Y\Àú€XŸJ
KÇBB\›öYHH\ÀôŸ]ò[YT⁄^ôJ
KÇÇBB\€[€›[ù\ú€][€àH\ÀôŸ][ù\ú€][€ä
HOOH[ù\ú€]T€[€›ÇÇBB[\›[ô^H[Y\Àõ[ô›HN¬ÇÇB[]‹ö]R[ô^HN¬ÇÇBYõ‹à
]HHN»H\›[ô^»
 »H
H¬ÇÇBB[]ŸY\Hò[ŸN¬ÇÇBBX€€ú›[YHH[Y\÷»HN¬ÇBBX€€ú›[YSô^H[Y\÷»H
»HN¬ÇÇBBKÀ»ô[[›ôHYòXŸ[ùŸ^Yúò[Y\»ÿ⁄Y[Y]Hÿ[YH[YBÇÇBBZYà
[YHOOH[YSô^	âà
HOOHH[YHOOH[Y\÷»H
H
H¬ÇÇBBBZYà
H€[€›[ù\ú€][€à
H¬ÇÇBBBBKÀ»ô[[›ôH[õôXŸ\‹ÿ\ûHŸ^Yúò[Y\»ÿ[YH\»Z\àôZY⁄õ‹ú¬ÇÇBBBBX€€ú›ŸôúŸ]HH
à›öYKÇBBBBB[ŸôúŸ]HŸôúŸ]H›öYKÇBBBBB[ŸôúŸ]àHŸôúŸ]
»›öYN¬ÇÇBBBBYõ‹à
]àH»àOOH›öYN»
 »à
H¬ÇÇBBBBBX€€ú›ò[YHHò[Y\÷»ŸôúŸ]
»àN¬ÇÇBBBBBZYà
ò[YHOOHò[Y\÷»ŸôúŸ]
»àHÇBBBBBB]ò[YHOOHò[Y\÷»ŸôúŸ]à
»àH
H¬ÇÇBBBBBBZŸY\HùYN¬ÇBBBBBBXúôXZŒ¬ÇÇBBBBB_BÇÇBBBB_BÇÇBBB_H[ŸH¬ÇÇBBBBZŸY\HùYN¬ÇÇBBB_BÇÇBB_BÇÇBBKÀ»[ã\XŸH€€\X›[€ÇÇÇBBZYà
ŸY\
H¬ÇÇBBBZYà
HOOH‹ö]R[ô^
H¬ÇÇBBBB][Y\÷»‹ö]R[ô^HH[Y\÷»HN¬ÇÇBBBBX€€ú›ôXYŸôúŸ]HH
à›öYKÇBBBBB]‹ö]SŸôúŸ]H‹ö]R[ô^
à›öYN¬ÇÇBBBBYõ‹à
]àH»àOOH›öYN»
 »à
H¬ÇÇBBBBB]ò[Y\÷»‹ö]SŸôúŸ]
»àHHò[Y\÷»ôXYŸôúŸ]
»àN¬ÇÇBBBB_BÇÇBBB_BÇÇBBBJ »‹ö]R[ô^¬ÇÇBB_BÇÇB_BÇÇBKÀ»õ\⁄\›Ÿ^Yúò[YH
€€\X›[€à€⁄‹»ZXY
BÇÇBZYà
\›[ô^à
H¬ÇÇBB][Y\÷»‹ö]R[ô^HH[Y\÷»\›[ô^N¬ÇÇBBYõ‹à
]ôXYŸôúŸ]H\›[ô^
à›öYK‹ö]SŸôúŸ]H‹ö]R[ô^
à›öYKàH»àOOH›öYN»
 »à
H¬ÇÇBBB]ò[Y\÷»‹ö]SŸôúŸ]
»àHHò[Y\÷»ôXYŸôúŸ]
»àN¬ÇÇBB_BÇÇBBJ »‹ö]R[ô^¬ÇÇB_BÇÇBZYà
‹ö]R[ô^OOH[Y\Àõ[ô›
H¬ÇÇBB]\Àù[Y\»H[Y\Àú€XŸJ‹ö]R[ô^
N¬ÇBB]\Àùò[Y\»Hò[Y\Àú€XŸJ‹ö]R[ô^
à›öYH
N¬ÇÇB_H[ŸH¬ÇÇBB]\Àù[Y\»H[Y\Œ¬ÇBB]\Àùò[Y\»Hò[Y\Œ¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇX€€ôJ
H¬ÇÇBX€€ú›[Y\»H\Àù[Y\Àú€XŸJ
N¬ÇBX€€ú›ò[Y\»H\Àùò[Y\Àú€XŸJ
N¬ÇÇBX€€ú›\YŸ^Yúò[YUòX⁄»H\Àò€€ú›ùX›‹é¬ÇBX€€ú›òX⁄»Hô]»\YŸ^Yúò[YUòX⁄ \Àõò[YK[Y\Àò[Y\»
N¬ÇÇBKÀ»[ù\ú€[ù\ô›[Y[ù»€€ú›ùX›‹à\»õ›ÿ]ôY€»€‹HHòX›‹ûHY]Ÿ\ôX›KÇÇB]òX⁄Àò‹ôX]R[ù\ú€[ùH\Àò‹ôX]R[ù\ú€[ù¬ÇÇB\ô]\õàòX⁄Œ¬ÇÇ_BÇüBÇíŸ^Yúò[YUòX⁄Àúõ››\Kï[YPùYôô\ï\HHõÿ]Ãê\úò^N¬íŸ^Yúò[YUòX⁄Àúõ››\Kïò[YPùYôô\ï\HHõÿ]Ãê\úò^N¬íŸ^Yúò[YUòX⁄Àúõ››\KëYò][[ù\ú€][€àH[ù\ú€]S[ôX\é¬Çã äÇà
àHòX⁄»Ÿàõ€€X[àŸ^Yúò[YHò[Y\ÀÇà
ã¬ò€\‹»õ€€X[íŸ^Yúò[YUòX⁄»^[ô»Ÿ^Yúò[YUòX⁄»¬ÇÇKÀ»õ»[ù\ú€][€à\ò[Y]\àôXÿ]\ŸH€õH[ù\ú€]Q\ÿ‹ô]H\»ò[YÇÇX€€ú›ùX›‹äò[YK[Y\Àò[Y\»
H¬ÇÇB\›\\äò[YK[Y\Àò[Y\»
N¬ÇÇ_BÇüBÇêõ€€X[íŸ^Yúò[YUòX⁄Àúõ››\Kïò[YU\Sò[YHH	ÿõ€€	Œ¬êõ€€X[íŸ^Yúò[YUòX⁄Àúõ››\Kïò[YPùYôô\ï\HH\úò^N¬êõ€€X[íŸ^Yúò[YUòX⁄Àúõ››\KëYò][[ù\ú€][€àH[ù\ú€]Q\ÿ‹ô]N¬êõ€€X[íŸ^Yúò[YUòX⁄Àúõ››\Kí[ù\ú€[ùòX›‹ûSY]Ÿ[ôX\àH[ôYö[ôY¬êõ€€X[íŸ^Yúò[YUòX⁄Àúõ››\Kí[ù\ú€[ùòX›‹ûSY]Ÿ€[€›H[ôYö[ôY¬Çã äÇà
àHòX⁄»ŸàŸ^Yúò[YHò[Y\»]ô\ô\Ÿ[ù€€‹ãÇà
ã¬ò€\‹»€€‹íŸ^Yúò[YUòX⁄»^[ô»Ÿ^Yúò[YUòX⁄»ﬂBÇê€€‹íŸ^Yúò[YUòX⁄Àúõ››\Kïò[YU\Sò[YHH	ÿ€€‹âŒ¬Çã äÇà
àHòX⁄»Ÿàù[Y\öX»Ÿ^Yúò[YHò[Y\ÀÇà
ã¬ò€\‹»ù[Xô\íŸ^Yúò[YUòX⁄»^[ô»Ÿ^Yúò[YUòX⁄»ﬂBÇìù[Xô\íŸ^Yúò[YUòX⁄Àúõ››\Kïò[YU\Sò[YHH	€ù[Xô\âŒ¬Çã äÇà
à‹\öXÿ[[ôX\à[ö]]X]\õö[€à[ù\ú€[ùÇà
ã¬Çò€\‹»]X]\õö[€ì[ôX\í[ù\ú€[ù^[ô»[ù\ú€[ù¬ÇÇX€€ú›ùX›‹ä\ò[Y]\î‹⁄][€úÀÿ[\Uò[Y\Àÿ[\T⁄^ôKô\›[ùYôô\à
H¬ÇÇB\›\\ä\ò[Y]\î‹⁄][€úÀÿ[\Uò[Y\Àÿ[\T⁄^ôKô\›[ùYôô\à
N¬ÇÇ_BÇÇZ[ù\ú€]W LKH
H¬ÇÇBX€€ú›ô\›[H\Àúô\›[ùYôô\ãÇBB]ò[Y\»H\Àúÿ[\Uò[Y\ÀÇBB\›öYHH\Àùò[YT⁄^ôKÇÇBBX[HH
H
H»
HH
N¬ÇÇB[]ŸôúŸ]HLH
à›öYN¬ÇÇBYõ‹à
][ôHŸôúŸ]
»›öYN»ŸôúŸ]OOH[ô»ŸôúŸ]
œH
H¬ÇÇBBT]X]\õö[€ãú€\úõ]
ô\›[ò[Y\ÀŸôúŸ]H›öYKò[Y\ÀŸôúŸ][H
N¬ÇÇB_BÇÇB\ô]\õàô\›[¬ÇÇ_BÇüBÇã äÇà
àHòX⁄»Ÿà]X]\õö[€àŸ^Yúò[YHò[Y\ÀÇà
ã¬ò€\‹»]X]\õö[€íŸ^Yúò[YUòX⁄»^[ô»Ÿ^Yúò[YUòX⁄»¬ÇÇR[ù\ú€[ùòX›‹ûSY]Ÿ[ôX\äô\›[
H¬ÇÇB\ô]\õàô]»]X]\õö[€ì[ôX\í[ù\ú€[ù
\Àù[Y\À\Àùò[Y\À\ÀôŸ]ò[YT⁄^ôJ
Kô\›[
N¬ÇÇ_BÇüBÇî]X]\õö[€íŸ^Yúò[YUòX⁄Àúõ››\Kïò[YU\Sò[YHH	‹]X]\õö[€âŒ¬ãÀ»ò[YPùYôô\ï\H\»[ö\ö]YãÀ»Yò][[ù\ú€][€à\»[ö\ö]Y¬î]X]\õö[€íŸ^Yúò[YUòX⁄Àúõ››\Kí[ù\ú€[ùòX›‹ûSY]Ÿ€[€›H[ôYö[ôY¬Çã äÇà
àHòX⁄»][ù\ú€]\»›ö[ô‹¬à
ã¬ò€\‹»›ö[ô“Ÿ^Yúò[YUòX⁄»^[ô»Ÿ^Yúò[YUòX⁄»¬ÇÇKÀ»õ»[ù\ú€][€à\ò[Y]\àôXÿ]\ŸH€õH[ù\ú€]Q\ÿ‹ô]H\»ò[YÇÇX€€ú›ùX›‹äò[YK[Y\Àò[Y\»
H¬ÇÇB\›\\äò[YK[Y\Àò[Y\»
N¬ÇÇ_BÇüBÇî›ö[ô“Ÿ^Yúò[YUòX⁄Àúõ››\Kïò[YU\Sò[YHH	‹›ö[ô…Œ¬î›ö[ô“Ÿ^Yúò[YUòX⁄Àúõ››\Kïò[YPùYôô\ï\HH\úò^N¬î›ö[ô“Ÿ^Yúò[YUòX⁄Àúõ››\KëYò][[ù\ú€][€àH[ù\ú€]Q\ÿ‹ô]N¬î›ö[ô“Ÿ^Yúò[YUòX⁄Àúõ››\Kí[ù\ú€[ùòX›‹ûSY]Ÿ[ôX\àH[ôYö[ôY¬î›ö[ô“Ÿ^Yúò[YUòX⁄Àúõ››\Kí[ù\ú€[ùòX›‹ûSY]Ÿ€[€›H[ôYö[ôY¬Çã äÇà
àHòX⁄»ŸàôX›‹ôYŸ^Yúò[YHò[Y\ÀÇà
ã¬ò€\‹»ôX›‹íŸ^Yúò[YUòX⁄»^[ô»Ÿ^Yúò[YUòX⁄»ﬂBÇïôX›‹íŸ^Yúò[YUòX⁄Àúõ››\Kïò[YU\Sò[YHH	›ôX›‹âŒ¬Çò€\‹»[ö[X][€ê€\¬ÇÇX€€ú›ùX›‹äò[YHH	…À\ò][€àHHKòX⁄‹»H◊Kõ[ô[ŸHHõ‹õX[[ö[X][€êõ[ô[ŸH
H¬ÇÇB]\Àõò[YHHò[YN¬ÇB]\ÀùòX⁄‹»HòX⁄‹Œ¬ÇB]\Àô\ò][€àH\ò][€é¬ÇB]\Àòõ[ô[ŸHHõ[ô[ŸN¬ÇÇB]\Àù]ZYHŸ[ô\ò]UURQ

N¬ÇÇBKÀ»\»YX[ú»]⁄›[öY›\ôH›]]»\ò][€àûHÿÿ[õö[ô»HòX⁄‹¬ÇBZYà
\Àô\ò][€à
H¬ÇÇBB]\Àúô\Ÿ]\ò][€ä
N¬ÇÇB_BÇÇ_BÇÇÇ\›]X»\úŸJú€€à
H¬ÇÇBX€€ú›òX⁄‹»H◊KÇBBZú€€ïòX⁄‹»Hú€€ãùòX⁄‹ÀÇBBYúò[YU[YHHKå»
ú€€ãôú»Kå
N¬ÇÇBYõ‹à
]HHàHú€€ïòX⁄‹Àõ[ô›»HOOHé»
 »H
H¬ÇÇBB]òX⁄‹Àú\⁄
\úŸRŸ^Yúò[YUòX⁄ ú€€ïòX⁄‹÷»HH
Kúÿÿ[Júò[YU[YH
H
N¬ÇÇB_BÇÇBX€€ú›€\Hô]»\ ú€€ãõò[YKú€€ãô\ò][€ãòX⁄‹Àú€€ãòõ[ô[ŸH
N¬ÇBX€\ù]ZYHú€€ãù]ZY¬ÇÇB\ô]\õà€\¬ÇÇ_BÇÇ\›]X»“î””ä€\
H¬ÇÇBX€€ú›òX⁄‹»H◊KÇBBX€\òX⁄‹»H€\ùòX⁄‹Œ¬ÇÇBX€€ú›ú€€àH¬ÇÇBBI€ò[YIŒà€\õò[YKÇBBIŸ\ò][€âŒà€\ô\ò][€ãÇBBI›òX⁄‹…ŒàòX⁄‹ÀÇBBI›]ZY	Œà€\ù]ZYÇBBIÿõ[ô[ŸIŒà€\òõ[ô[ŸBÇÇB_N¬ÇÇBYõ‹à
]HHàH€\òX⁄‹Àõ[ô›»HOOHé»
 »H
H¬ÇÇBB]òX⁄‹Àú\⁄
Ÿ^Yúò[YUòX⁄Àù“î””ä€\òX⁄‹÷»HH
H
N¬ÇÇB_BÇÇB\ô]\õàú€€é¬ÇÇ_BÇÇ\›]X»‹ôX]Qúõ€S[‹ú\ôŸ]Ÿ\]Y[òŸJò[YK[‹ú\ôŸ]Ÿ\]Y[òŸKúÀõ”€‹
H¬ÇÇBX€€ú›ù[S[‹ú\ôŸ]»H[‹ú\ôŸ]Ÿ\]Y[òŸKõ[ô›¬ÇBX€€ú›òX⁄‹»H◊N¬ÇÇBYõ‹à
]HH»Hù[S[‹ú\ôŸ]Œ»H
 »
H¬ÇÇBB[][Y\»H◊N¬ÇBB[]ò[Y\»H◊N¬ÇÇBB][Y\Àú\⁄
ÇBBBJH
»ù[S[‹ú\ôŸ]»HH
H	Hù[S[‹ú\ôŸ]ÀÇBBBZKÇBBBJH
»H
H	Hù[S[‹ú\ôŸ]»
N¬ÇÇBB]ò[Y\Àú\⁄
K
N¬ÇÇBBX€€ú›‹ô\àHŸ]Ÿ^Yúò[YS‹ô\ä[Y\»
N¬ÇBB][Y\»H€‹ùY\úò^J[Y\ÀK‹ô\à
N¬ÇBB]ò[Y\»H€‹ùY\úò^Jò[Y\ÀK‹ô\à
N¬ÇÇBBKÀ»Yà\ôH\»HŸ^H]Hö\ú›úò[YK\Xÿ]H]\»BÇBBKÀ»\›úò[YH\»Ÿ[õ‹à\ôôX›€‹ÇÇBBZYà
Hõ”€‹	âà[Y\÷»HOOH
H¬ÇÇBBB][Y\Àú\⁄
ù[S[‹ú\ôŸ]»
N¬ÇBBB]ò[Y\Àú\⁄
ò[Y\÷»H
N¬ÇÇBB_BÇÇBB]òX⁄‹Àú\⁄
ÇBBB[ô]»ù[Xô\íŸ^Yúò[YUòX⁄ ÇBBBBIÀõ[‹ú\ôŸ][ôõY[òŸ\÷…»
»[‹ú\ôŸ]Ÿ\]Y[òŸV»HKõò[YH
»	◊IÀÇBBBB][Y\Àò[Y\¬ÇBBBJKúÿÿ[JKå»ú»
H
N¬ÇÇB_BÇÇB\ô]\õàô]»\ ò[YKHKòX⁄‹»
N¬ÇÇ_BÇÇ\›]X»ö[ôûSò[YJÿöôX›‹ê€\\úò^Kò[YH
H¬ÇÇB[]€\\úò^HHÿöôX›‹ê€\\úò^N¬ÇÇBZYà
H\úò^Kö\–\úò^JÿöôX›‹ê€\\úò^H
H
H¬ÇÇBBX€€ú›»HÿöôX›‹ê€\\úò^N¬ÇBBX€\\úò^HHÀôŸ[€Y]ûH	âàÀôŸ[€Y]ûKò[ö[X][€ú»Àò[ö[X][€úŒ¬ÇÇB_BÇÇBYõ‹à
]HH»H€\\úò^Kõ[ô›»H
 »
H¬ÇÇBBZYà
€\\úò^V»HKõò[YHOOHò[YH
H¬ÇÇBBB\ô]\õà€\\úò^V»HN¬ÇÇBB_BÇÇB_BÇÇB\ô]\õàù[¬ÇÇ_BÇÇ\›]X»‹ôX]P€\—úõ€S[‹ú\ôŸ]Ÿ\]Y[òŸ\ [‹ú\ôŸ]ÀúÀõ”€‹
H¬ÇÇBX€€ú›[ö[X][€ï”[‹ú\ôŸ]»HﬂN¬ÇÇBKÀ»\›Y⁄]ŒãÀ‹ôYŸ^LKò€€K»€àöX⁄»Ÿ\]Y[òŸ\¬ÇBKÀ»›X⁄õ[Z[ô€◊ŸõPWÃÀõ[Z[ô€◊‹ù[åWÃÀ‹ôX]NBÇBX€€ú›]\õàH◊ä◊ÀWJè J◊J IŒ¬ÇÇBKÀ»€‹ù[‹ú\ôŸ]ò[Y\»[ù»[ö[X][€à‹õ›\»ò\ŸYÇBKÀ»]\õú»ZŸHÿ[◊ÃKÿ[◊Ããù[óÃKù[óÃÇÇBYõ‹à
]HH[H[‹ú\ôŸ]Àõ[ô›»H[»H
 »
H¬ÇÇBBX€€ú›[‹ú\ôŸ]H[‹ú\ôŸ]÷»HN¬ÇBBX€€ú›\ù»H[‹ú\ôŸ]õò[YKõX]⁄
]\õà
N¬ÇÇBBZYà
\ù»	âà\ùÀõ[ô›àH
H¬ÇÇBBBX€€ú›ò[YHH\ù÷»HN¬ÇÇBBB[][ö[X][€ì[‹ú\ôŸ]»H[ö[X][€ï”[‹ú\ôŸ]÷»ò[YHN¬ÇÇBBBZYà
H[ö[X][€ì[‹ú\ôŸ]»
H¬ÇÇBBBBX[ö[X][€ï”[‹ú\ôŸ]÷»ò[YHHH[ö[X][€ì[‹ú\ôŸ]»H◊N¬ÇÇBBB_BÇÇBBBX[ö[X][€ì[‹ú\ôŸ]Àú\⁄
[‹ú\ôŸ]
N¬ÇÇBB_BÇÇB_BÇÇBX€€ú›€\»H◊N¬ÇÇBYõ‹à
€€ú›ò[YH[à[ö[X][€ï”[‹ú\ôŸ]»
H¬ÇÇBBX€\Àú\⁄
\Àê‹ôX]Qúõ€S[‹ú\ôŸ]Ÿ\]Y[òŸJò[YK[ö[X][€ï”[‹ú\ôŸ]÷»ò[YHKúÀõ”€‹
H
N¬ÇÇB_BÇÇB\ô]\õà€\Œ¬ÇÇ_BÇÇKÀ»\úŸHH[ö[X][€ãöY\ò\ò⁄Hõ‹õX]Ç\›]X»\úŸP[ö[X][€ä[ö[X][€ãõ€ô\»
H¬ÇÇBZYà
H[ö[X][€à
H¬ÇÇBBX€€ú€€Kô\úõ‹ä	’ëQKê[ö[X][€ê€\àõ»[ö[X][€à[àî””ìÿY\à]Kâ»
N¬ÇBB\ô]\õàù[¬ÇÇB_BÇÇBX€€ú›Yõ€ô[\UòX⁄»Hù[ò›[€à
òX⁄’\KòX⁄”ò[YK[ö[X][€íŸ^\Àõ‹\ùSò[YK\›òX⁄‹»
H¬ÇÇBBKÀ»€õHô]\õàòX⁄»Yà\ôH\ôHX›X[HŸ^\ÀÇÇBBZYà
[ö[X][€íŸ^\Àõ[ô›OOH
H¬ÇÇBBBX€€ú›[Y\»H◊N¬ÇBBBX€€ú›ò[Y\»H◊N¬ÇÇBBBYõ][íî””ä[ö[X][€íŸ^\À[Y\Àò[Y\Àõ‹\ùSò[YH
N¬ÇÇBBBKÀ»[\HŸ^\»\ôHö[\ôY›]€»⁄X⁄»YÿZ[ÇÇBBBZYà
[Y\Àõ[ô›OOH
H¬ÇÇBBBBY\›òX⁄‹Àú\⁄
ô]»òX⁄’\JòX⁄”ò[YK[Y\Àò[Y\»
H
N¬ÇÇBBB_BÇÇBB_BÇÇB_N¬ÇÇBX€€ú›òX⁄‹»H◊N¬ÇÇBX€€ú›€\ò[YHH[ö[X][€ãõò[YH	ŸYò][	Œ¬ÇBX€€ú›ú»H[ö[X][€ãôú»Ã¬ÇBX€€ú›õ[ô[ŸHH[ö[X][€ãòõ[ô[ŸN¬ÇÇBKÀ»]]€X]X»[ô›]\õZ[ò][€à[à[ö[X][€ê€\ÇÇB[]\ò][€àH[ö[X][€ãõ[ô›HN¬ÇÇBX€€ú›Y\ò\ò⁄UòX⁄‹»H[ö[X][€ãöY\ò\ò⁄H◊N¬ÇÇBYõ‹à
]H»Y\ò\ò⁄UòX⁄‹Àõ[ô›»
 »
H¬ÇÇBBX€€ú›[ö[X][€íŸ^\»HY\ò\ò⁄UòX⁄‹÷»KöŸ^\Œ¬ÇÇBBKÀ»⁄⁄\[\HòX⁄‹¬ÇBBZYà
H[ö[X][€íŸ^\»[ö[X][€íŸ^\Àõ[ô›OOH
H€€ù[ùYN¬ÇÇBBKÀ»õÿŸ\‹»[‹ú\ôŸ]¬ÇBBZYà
[ö[X][€íŸ^\÷»Kõ[‹ú\ôŸ]»
H¬ÇÇBBBKÀ»öY›\ôH›][[‹ú\ôŸ]»\ŸY[à\»òX⁄¬ÇBBBX€€ú›[‹ú\ôŸ]ò[Y\»HﬂN¬ÇÇBBB[]Œ¬ÇÇBBBYõ‹à
»H»»[ö[X][€íŸ^\Àõ[ô›»»
 »
H¬ÇÇBBBBZYà
[ö[X][€íŸ^\÷»»Kõ[‹ú\ôŸ]»
H¬ÇÇBBBBBYõ‹à
]HH»H[ö[X][€íŸ^\÷»»Kõ[‹ú\ôŸ]Àõ[ô›»H
 »
H¬ÇÇBBBBBB[[‹ú\ôŸ]ò[Y\÷»[ö[X][€íŸ^\÷»»Kõ[‹ú\ôŸ]÷»HHHHHN¬ÇÇBBBBB_BÇÇBBBB_BÇÇBBB_BÇÇBBBKÀ»‹ôX]HHòX⁄»õ‹àXX⁄[‹ú\ôŸ]⁄][ô\õ¬ÇBBBKÀ»[‹ú\ôŸ][ôõY[òŸ\»^Ÿ\õ‹àHŸ^\»[à⁄X⁄ÇBBBKÀ»H[‹ú\ôŸ]\»ò[YYÇÇBBBYõ‹à
€€ú›[‹ú\ôŸ]ò[YH[à[‹ú\ôŸ]ò[Y\»
H¬ÇÇBBBBX€€ú›[Y\»H◊N¬ÇBBBBX€€ú›ò[Y\»H◊N¬ÇÇBBBBYõ‹à
]HH»HOOH[ö[X][€íŸ^\÷»»Kõ[‹ú\ôŸ]Àõ[ô›»
 »H
H¬ÇÇBBBBBX€€ú›[ö[X][€íŸ^HH[ö[X][€íŸ^\÷»»N¬ÇÇBBBBB][Y\Àú\⁄
[ö[X][€íŸ^Kù[YH
N¬ÇBBBBB]ò[Y\Àú\⁄

[ö[X][€íŸ^Kõ[‹ú\ôŸ]OOH[‹ú\ôŸ]ò[YH
H»Hà
N¬ÇÇBBBB_BÇÇBBBB]òX⁄‹Àú\⁄
ô]»ù[Xô\íŸ^Yúò[YUòX⁄ 	Àõ[‹ú\ôŸ][ôõY[òŸV…»
»[‹ú\ôŸ]ò[YH
»	◊IÀ[Y\Àò[Y\»
H
N¬ÇÇBBB_BÇÇBBBY\ò][€àH[‹ú\ôŸ]ò[Y\Àõ[ô›
àúŒ¬ÇÇBB_H[ŸH¬ÇÇBBBKÀ»ããò\‹›[YH⁄Ÿ[][[ö[X][€ÇÇÇBBBX€€ú›õ€ôSò[YHH	Àòõ€ô\÷…»
»õ€ô\÷»Kõò[YH
»	◊IŒ¬ÇÇBBBXYõ€ô[\UòX⁄ ÇBBBBUôX›‹íŸ^Yúò[YUòX⁄Àõ€ôSò[YH
»	Àú‹⁄][€âÀÇBBBBX[ö[X][€íŸ^\À	‹‹…ÀòX⁄‹»
N¬ÇÇBBBXYõ€ô[\UòX⁄ ÇBBBBT]X]\õö[€íŸ^Yúò[YUòX⁄Àõ€ôSò[YH
»	Àú]X]\õö[€âÀÇBBBBX[ö[X][€íŸ^\À	‹õ›	ÀòX⁄‹»
N¬ÇÇBBBXYõ€ô[\UòX⁄ ÇBBBBUôX›‹íŸ^Yúò[YUòX⁄Àõ€ôSò[YH
»	Àúÿÿ[IÀÇBBBBX[ö[X][€íŸ^\À	‹ÿ€	ÀòX⁄‹»
N¬ÇÇBB_BÇÇB_BÇÇBZYà
òX⁄‹Àõ[ô›OOH
H¬ÇÇBB\ô]\õàù[¬ÇÇB_BÇÇBX€€ú›€\Hô]»\ €\ò[YK\ò][€ãòX⁄‹Àõ[ô[ŸH
N¬ÇÇB\ô]\õà€\¬ÇÇ_BÇÇ\ô\Ÿ]\ò][€ä
H¬ÇÇBX€€ú›òX⁄‹»H\ÀùòX⁄‹Œ¬ÇB[]\ò][€àH¬ÇÇBYõ‹à
]HHàHòX⁄‹Àõ[ô›»HOOHé»
 »H
H¬ÇÇBBX€€ú›òX⁄»H\ÀùòX⁄‹÷»HN¬ÇÇBBY\ò][€àHX]õX^
\ò][€ãòX⁄Àù[Y\÷»òX⁄Àù[Y\Àõ[ô›HHH
N¬ÇÇB_BÇÇB]\Àô\ò][€àH\ò][€é¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ]ö[J
H¬ÇÇBYõ‹à
]HH»H\ÀùòX⁄‹Àõ[ô›»H
 »
H¬ÇÇBB]\ÀùòX⁄‹÷»HKùö[J\Àô\ò][€à
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ]ò[Y]J
H¬ÇÇB[]ò[YHùYN¬ÇÇBYõ‹à
]HH»H\ÀùòX⁄‹Àõ[ô›»H
 »
H¬ÇÇBB]ò[YHò[Y	âà\ÀùòX⁄‹÷»HKùò[Y]J
N¬ÇÇB_BÇÇB\ô]\õàò[Y¬ÇÇ_BÇÇ[‹[Z^ôJ
H¬ÇÇBYõ‹à
]HH»H\ÀùòX⁄‹Àõ[ô›»H
 »
H¬ÇÇBB]\ÀùòX⁄‹÷»HKõ‹[Z^ôJ
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇX€€ôJ
H¬ÇÇBX€€ú›òX⁄‹»H◊N¬ÇÇBYõ‹à
]HH»H\ÀùòX⁄‹Àõ[ô›»H
 »
H¬ÇÇBB]òX⁄‹Àú\⁄
\ÀùòX⁄‹÷»HKò€€ôJ
H
N¬ÇÇB_BÇÇB\ô]\õàô]»\Àò€€ú›ùX›‹ä\Àõò[YK\Àô\ò][€ãòX⁄‹À\Àòõ[ô[ŸH
N¬ÇÇ_BÇÇ]“î””ä
H¬ÇÇB\ô]\õà\Àò€€ú›ùX›‹ãù“î””ä\»
N¬ÇÇ_BÇüBÇôù[ò›[€àŸ]òX⁄’\Qõ‹ïò[YU\Sò[YJ\Sò[YH
H¬ÇÇ\›⁄]⁄
\Sò[YKù”›Ÿ\êÿ\ŸJ
H
H¬ÇÇBXÿ\ŸH	‹ÿÿ[\âŒÇÇBXÿ\ŸH	Ÿ›XõIŒÇÇBXÿ\ŸH	Ÿõÿ]	ŒÇÇBXÿ\ŸH	€ù[Xô\âŒÇÇBXÿ\ŸH	⁄[ùYŸ\âŒÇÇÇBB\ô]\õàù[Xô\íŸ^Yúò[YUòX⁄Œ¬ÇÇBXÿ\ŸH	›ôX›‹âŒÇÇBXÿ\ŸH	›ôX›‹åâŒÇÇBXÿ\ŸH	›ôX›‹å…ŒÇÇBXÿ\ŸH	›ôX›‹ç	ŒÇÇÇBB\ô]\õàôX›‹íŸ^Yúò[YUòX⁄Œ¬ÇÇBXÿ\ŸH	ÿ€€‹âŒÇÇÇBB\ô]\õà€€‹íŸ^Yúò[YUòX⁄Œ¬ÇÇBXÿ\ŸH	‹]X]\õö[€âŒÇÇÇBB\ô]\õà]X]\õö[€íŸ^Yúò[YUòX⁄Œ¬ÇÇBXÿ\ŸH	ÿõ€€	ŒÇÇBXÿ\ŸH	ÿõ€€X[âŒÇÇÇBB\ô]\õàõ€€X[íŸ^Yúò[YUòX⁄Œ¬ÇÇBXÿ\ŸH	‹›ö[ô…ŒÇÇÇBB\ô]\õà›ö[ô“Ÿ^Yúò[YUòX⁄Œ¬ÇÇ_BÇÇ]õ›»ô]»\úõ‹ä	’ëQKíŸ^Yúò[YUòX⁄Œà[ú›\‹ùY\Sò[YNà	»
»\Sò[YH
N¬ÇüBÇôù[ò›[€à\úŸRŸ^Yúò[YUòX⁄ ú€€à
H¬ÇÇZYà
ú€€ãù\HOOH[ôYö[ôY
H¬ÇÇB]õ›»ô]»\úõ‹ä	’ëQKíŸ^Yúò[YUòX⁄ŒàòX⁄»\H[ôYö[ôYÿ[àõ›\úŸI»
N¬ÇÇ_BÇÇX€€ú›òX⁄’\HHŸ]òX⁄’\Qõ‹ïò[YU\Sò[YJú€€ãù\H
N¬ÇÇZYà
ú€€ãù[Y\»OOH[ôYö[ôY
H¬ÇÇBX€€ú›[Y\»H◊Kò[Y\»H◊N¬ÇÇBYõ][íî””äú€€ãöŸ^\À[Y\Àò[Y\À	›ò[YI»
N¬ÇÇBZú€€ãù[Y\»H[Y\Œ¬ÇBZú€€ãùò[Y\»Hò[Y\Œ¬ÇÇ_BÇÇKÀ»\ö]ôY€\‹Ÿ\»ÿ[àYö[ôHH›]X»\úŸHY]ŸÇZYà
òX⁄’\Kú\úŸHOOH[ôYö[ôY
H¬ÇÇB\ô]\õàòX⁄’\Kú\úŸJú€€à
N¬ÇÇ_H[ŸH¬ÇÇBKÀ»ûHYò][ŸH\‹›[YHH€€ú›ùX›‹à€€\]XõH⁄]Hò\ŸBÇB\ô]\õàô]»òX⁄’\Jú€€ãõò[YKú€€ãù[Y\Àú€€ãùò[Y\Àú€€ãö[ù\ú€][€à
N¬ÇÇ_BÇüBÇò€€ú›ÿX⁄HH¬ÇÇY[òXõYàò[ŸKÇÇYö[\ŒàﬂKÇÇXYàù[ò›[€à
Ÿ^Kö[H
H¬ÇÇBZYà
\Àô[òXõYOOHò[ŸH
Hô]\õé¬ÇÇBKÀ»€€ú€€KõŸ 	’ëQKêÿX⁄IÀ	–Y[ô»Ÿ^NâÀŸ^H
N¬ÇÇB]\Àôö[\÷»Ÿ^HHHö[N¬ÇÇ_KÇÇYŸ]àù[ò›[€à
Ÿ^H
H¬ÇÇBZYà
\Àô[òXõYOOHò[ŸH
Hô]\õé¬ÇÇBKÀ»€€ú€€KõŸ 	’ëQKêÿX⁄IÀ	–⁄X⁄⁄[ô»Ÿ^NâÀŸ^H
N¬ÇÇB\ô]\õà\Àôö[\÷»Ÿ^HN¬ÇÇ_KÇÇ\ô[[›ôNàù[ò›[€à
Ÿ^H
H¬ÇÇBY[]H\Àôö[\÷»Ÿ^HN¬ÇÇ_KÇÇX€X\éàù[ò›[€à

H¬ÇÇB]\Àôö[\»HﬂN¬ÇÇ_BÇüN¬Çò€\‹»ÿY[ô”X[òYŸ\à¬ÇÇX€€ú›ùX›‹ä€ìÿY€îõŸ‹ô\‹À€ë\úõ‹à
H¬ÇÇBX€€ú›ÿ€‹HH\Œ¬ÇÇB[]\”ÿY[ô»Hò[ŸN¬ÇB[]][\”ÿYYH¬ÇB[]][\’›[H¬ÇB[]\õ[ŸYöY\àH[ôYö[ôY¬ÇBX€€ú›[ô\ú»H◊N¬ÇÇBKÀ»ôYô\à»ÕMéHõ‹àHôX\€€à⁄HŸH€â›Ÿ]õ€î›\ùÇBKÀ»[àH€€ú›ùX›‹ÇÇÇB]\Àõ€î›\ùH[ôYö[ôY¬ÇB]\Àõ€ìÿYH€ìÿY¬ÇB]\Àõ€îõŸ‹ô\‹»H€îõŸ‹ô\‹Œ¬ÇB]\Àõ€ë\úõ‹àH€ë\úõ‹é¬ÇÇB]\Àö][T›\ùHù[ò›[€à
\õ
H¬ÇÇBBZ][\’›[
 Œ¬ÇÇBBZYà
\”ÿY[ô»OOHò[ŸH
H¬ÇÇBBBZYà
ÿ€‹Kõ€î›\ùOOH[ôYö[ôY
H¬ÇÇBBBB\ÿ€‹Kõ€î›\ù
\õ][\”ÿYY][\’›[
N¬ÇÇBBB_BÇÇBB_BÇÇBBZ\”ÿY[ô»HùYN¬ÇÇB_N¬ÇÇB]\Àö][Q[ôHù[ò›[€à
\õ
H¬ÇÇBBZ][\”ÿYY
 Œ¬ÇÇBBZYà
ÿ€‹Kõ€îõŸ‹ô\‹»OOH[ôYö[ôY
H¬ÇÇBBB\ÿ€‹Kõ€îõŸ‹ô\‹ \õ][\”ÿYY][\’›[
N¬ÇÇBB_BÇÇBBZYà
][\”ÿYYOOH][\’›[
H¬ÇÇBBBZ\”ÿY[ô»Hò[ŸN¬ÇÇBBBZYà
ÿ€‹Kõ€ìÿYOOH[ôYö[ôY
H¬ÇÇBBBB\ÿ€‹Kõ€ìÿY

N¬ÇÇBBB_BÇÇBB_BÇÇB_N¬ÇÇB]\Àö][Q\úõ‹àHù[ò›[€à
\õ
H¬ÇÇBBZYà
ÿ€‹Kõ€ë\úõ‹àOOH[ôYö[ôY
H¬ÇÇBBB\ÿ€‹Kõ€ë\úõ‹ä\õ
N¬ÇÇBB_BÇÇB_N¬ÇÇB]\Àúô\€€ôUTìHù[ò›[€à
\õ
H¬ÇÇBBZYà
\õ[ŸYöY\à
H¬ÇÇBBB\ô]\õà\õ[ŸYöY\ä\õ
N¬ÇÇBB_BÇÇBB\ô]\õà\õ¬ÇÇB_N¬ÇÇB]\ÀúŸ]Tì[ŸYöY\àHù[ò›[€à
ò[úŸõ‹õH
H¬ÇÇBB]\õ[ŸYöY\àHò[úŸõ‹õN¬ÇÇBB\ô]\õà\Œ¬ÇÇB_N¬ÇÇB]\ÀòY[ô\àHù[ò›[€à
ôYŸ^ÿY\à
H¬ÇÇBBZ[ô\úÀú\⁄
ôYŸ^ÿY\à
N¬ÇÇBB\ô]\õà\Œ¬ÇÇB_N¬ÇÇB]\Àúô[[›ôR[ô\àHù[ò›[€à
ôYŸ^
H¬ÇÇBBX€€ú›[ô^H[ô\úÀö[ô^ŸäôYŸ^
N¬ÇÇBBZYà
[ô^OOHHH
H¬ÇÇBBBZ[ô\úÀú‹XŸJ[ô^à
N¬ÇÇBB_BÇÇBB\ô]\õà\Œ¬ÇÇB_N¬ÇÇB]\ÀôŸ][ô\àHù[ò›[€à
ö[H
H¬ÇÇBBYõ‹à
]HHH[ô\úÀõ[ô›»H»H
œHà
H¬ÇÇBBBX€€ú›ôYŸ^H[ô\ú÷»HN¬ÇBBBX€€ú›ÿY\àH[ô\ú÷»H
»HN¬ÇÇBBBZYà
ôYŸ^ô€ÿò[
HôYŸ^õ\›[ô^H»À»ŸYHÃMŒLåÇÇBBBZYà
ôYŸ^ù\›
ö[H
H
H¬ÇÇBBBB\ô]\õàÿY\é¬ÇÇBBB_BÇÇBB_BÇÇBB\ô]\õàù[¬ÇÇB_N¬ÇÇ_BÇüBÇò€€ú›Yò][ÿY[ô”X[òYŸ\àH ê◊‘TëW◊ ã»ô]»ÿY[ô”X[òYŸ\ä
N¬Çò€\‹»ÿY\à¬ÇÇX€€ú›ùX›‹äX[òYŸ\à
H¬ÇÇB]\ÀõX[òYŸ\àH
X[òYŸ\àOOH[ôYö[ôY
H»X[òYŸ\ààYò][ÿY[ô”X[òYŸ\é¬ÇÇB]\Àò‹õ‹‹”‹öY⁄[àH	ÿ[õ€û[[›\…Œ¬ÇB]\Àù⁄]‹ôY[ùX[»Hò[ŸN¬ÇB]\Àú]H	…Œ¬ÇB]\Àúô\€›\òŸT]H	…Œ¬ÇB]\Àúô\]Y\›XY\àHﬂN¬ÇÇ_BÇÇ[ÿY
 à\õ€ìÿY€îõŸ‹ô\‹À€ë\úõ‹à
ã»
HﬂBÇÇ[ÿY\ﬁ[ò \õ€îõŸ‹ô\‹»
H¬ÇÇBX€€ú›ÿ€‹HH\Œ¬ÇÇB\ô]\õàô]»õ€Z\ŸJù[ò›[€à
ô\€€ôKôZôX›
H¬ÇÇBB\ÿ€‹KõÿY
\õô\€€ôK€îõŸ‹ô\‹ÀôZôX›
N¬ÇÇB_H
N¬ÇÇ_BÇÇ\\úŸJ à]H
ã»
HﬂBÇÇ\Ÿ]‹õ‹‹”‹öY⁄[ä‹õ‹‹”‹öY⁄[à
H¬ÇÇB]\Àò‹õ‹‹”‹öY⁄[àH‹õ‹‹”‹öY⁄[é¬ÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]⁄]‹ôY[ùX[ ò[YH
H¬ÇÇB]\Àù⁄]‹ôY[ùX[»Hò[YN¬ÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]]
]
H¬ÇÇB]\Àú]H]¬ÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]ô\€›\òŸT]
ô\€›\òŸT]
H¬ÇÇB]\Àúô\€›\òŸT]Hô\€›\òŸT]¬ÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]ô\]Y\›XY\äô\]Y\›XY\à
H¬ÇÇB]\Àúô\]Y\›XY\àHô\]Y\›XY\é¬ÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇìÿY\ãëQêUS”PUTíPS”êSQHH	◊◊—QêUS	Œ¬Çò€€ú›ÿY[ô»HﬂN¬Çò€\‹»\úõ‹à^[ô»\úõ‹à¬ÇÇX€€ú›ùX›‹äY\‹ÿYŸKô\‹€úŸH
H¬ÇÇB\›\\äY\‹ÿYŸH
N¬ÇB]\Àúô\‹€úŸHHô\‹€úŸN¬ÇÇ_BÇüBÇò€\‹»ö[SÿY\à^[ô»ÿY\à¬ÇÇX€€ú›ùX›‹äX[òYŸ\à
H¬ÇÇB\›\\äX[òYŸ\à
N¬ÇÇ_BÇÇ[ÿY
\õ€ìÿY€îõŸ‹ô\‹À€ë\úõ‹à
H¬ÇÇBZYà
\õOOH[ôYö[ôY
H\õH	…Œ¬ÇÇBZYà
\Àú]OOH[ôYö[ôY
H\õH\Àú]
»\õ¬ÇÇB]\õH\ÀõX[òYŸ\ãúô\€€ôUTì
\õ
N¬ÇÇBX€€ú›ÿX⁄YHÿX⁄KôŸ]
\õ
N¬ÇÇBZYà
ÿX⁄YOOH[ôYö[ôY
H¬ÇÇBB]\ÀõX[òYŸ\ãö][T›\ù
\õ
N¬ÇÇBB\Ÿ][Y[›]


HOà¬ÇÇBBBZYà
€ìÿY
H€ìÿY
ÿX⁄Y
N¬ÇÇBBB]\ÀõX[òYŸ\ãö][Q[ô
\õ
N¬ÇÇBB_K
N¬ÇÇBB\ô]\õàÿX⁄Y¬ÇÇB_BÇÇBKÀ»⁄X⁄»Yàô\]Y\›\»\Xÿ]BÇÇBZYà
ÿY[ô÷»\õHOOH[ôYö[ôY
H¬ÇÇBB[ÿY[ô÷»\õKú\⁄
¬ÇÇBBB[€ìÿYà€ìÿYÇBBB[€îõŸ‹ô\‹Œà€îõŸ‹ô\‹ÀÇBBB[€ë\úõ‹éà€ë\úõ‹ÇÇÇBB_H
N¬ÇÇBB\ô]\õé¬ÇÇB_BÇÇBKÀ»[ö]X[\ŸH\úò^Hõ‹à\Xÿ]Hô\]Y\›¬ÇB[ÿY[ô÷»\õHH◊N¬ÇÇB[ÿY[ô÷»\õKú\⁄
¬ÇBB[€ìÿYà€ìÿYÇBB[€îõŸ‹ô\‹Œà€îõŸ‹ô\‹ÀÇBB[€ë\úõ‹éà€ë\úõ‹ãÇB_H
N¬ÇÇBKÀ»‹ôX]Hô\]Y\›ÇBX€€ú›ô\HHô]»ô\]Y\›
\õ¬ÇBBZXY\úŒàô]»XY\ú \Àúô\]Y\›XY\à
KÇBBX‹ôY[ùX[Œà\Àù⁄]‹ôY[ùX[»»	⁄[ò€YI»à	‹ÿ[YK[‹öY⁄[âÀÇBBKÀ»[àXõ‹ù€€ùõ€\à€›[ôHYY⁄][àHù]\ôHÇÇB_H
N¬ÇÇBKÀ»ôX€‹ô›]\»
]õ⁄Y]HòXŸH
BÇBX€€ú›Z[YU\HH\ÀõZ[YU\N¬ÇBX€€ú›ô\‹€úŸU\HH\Àúô\‹€úŸU\N¬ÇÇBKÀ»›\ùHô]⁄ÇBYô]⁄
ô\H
BÇBBKù[äô\‹€úŸHOà¬ÇÇBBBZYà
ô\‹€úŸKú›]\»OOHåô\‹€úŸKú›]\»OOH
H¬ÇÇBBBBKÀ»€€YHúõ›‹Ÿ\ú»ô]\õà›]\»⁄[à\⁄[ô»õ€ãZõ›ÿ€€ÇBBBBKÀ»KôÀà	Ÿö[NãÀ…»‹à	Ÿ]NãÀ…Àà[ôH\»›XÿŸ\‹ÀÇÇÇBBBBZYà
ô\‹€úŸKú›]\»OOH
H¬ÇÇBBBBBX€€ú€€Kùÿ\õä	’ëQKëö[SÿY\éà›]\»ôXŸZ]ôYâ»
N¬ÇÇBBBB_BÇÇBBBBKÀ»€‹öÿ\õ›[ôà⁄X⁄⁄[ô»Yàô\‹€úŸKòõŸHOOH[ôYö[ôYõ‹à[\^Húõ›‹Ÿ\àÃåÕMÇÇBBBBZYà
\[ŸàôXYXõT›ôX[HOOH	›[ôYö[ôY	»ô\‹€úŸKòõŸHOOH[ôYö[ôYô\‹€úŸKòõŸKôŸ]ôXY\àOOH[ôYö[ôY
H¬ÇÇBBBBB\ô]\õàô\‹€úŸN¬ÇÇBBBB_BÇÇBBBBX€€ú›ÿ[òX⁄‹»HÿY[ô÷»\õN¬ÇBBBBX€€ú›ôXY\àHô\‹€úŸKòõŸKôŸ]ôXY\ä
N¬ÇÇBBBBKÀ»ô⁄[ûôYY»Qö[KT⁄^ôH⁄X⁄¬ÇBBBBKÀ»ŒãÀ‹Ÿ\ùô\ôò][ò€€K‹]Y\›[€úÀÕéÕK›⁄KYŸ\À[ô⁄[û\ô[[›ôKX€€ù[ù[[ô›ZXY\ãYõ‹ãX⁄[öŸYX€€ù[ùÇBBBBX€€ú›€€ù[ù[ô›Hô\‹€úŸKöXY\úÀôŸ]
	÷Qö[KT⁄^ôI»
Hô\‹€úŸKöXY\úÀôŸ]
	–€€ù[ùS[ô›	»
N¬ÇBBBBX€€ú››[H€€ù[ù[ô›»\úŸR[ù
€€ù[ù[ô›
Hà¬ÇBBBBX€€ú›[ô›€€\]XõHH›[OOH¬ÇBBBB[]ÿYYH¬ÇÇBBBBKÀ»\ö[ŸXÿ[HôXY]H[ù»Hô]»›ôX[HòX⁄⁄[ô»⁄[H›€õÿYõŸ‹ô\‹¬ÇBBBBX€€ú››ôX[HHô]»ôXYXõT›ôX[J¬ÇBBBBB\›\ù
€€ùõ€\à
H¬ÇÇBBBBBB\ôXY]J
N¬ÇÇBBBBBBYù[ò›[€àôXY]J
H¬ÇÇBBBBBBB\ôXY\ãúôXY

Kù[ä
»€ôKò[YHH
HOà¬ÇÇBBBBBBBBZYà
€ôH
H¬ÇÇBBBBBBBBBX€€ùõ€\ãò€‹ŸJ
N¬ÇÇBBBBBBBB_H[ŸH¬ÇÇBBBBBBBBB[ÿYY
œHò[YKòû]S[ô›¬ÇÇBBBBBBBBBX€€ú›]ô[ùHô]»õŸ‹ô\‹—]ô[ù
	‹õŸ‹ô\‹…À»[ô›€€\]XõKÿYY›[H
N¬ÇBBBBBBBBBYõ‹à
]HH[Hÿ[òX⁄‹Àõ[ô›»H[»H
 »
H¬ÇÇBBBBBBBBBBX€€ú›ÿ[òX⁄»Hÿ[òX⁄‹÷»HN¬ÇBBBBBBBBBBZYà
ÿ[òX⁄Àõ€îõŸ‹ô\‹»
Hÿ[òX⁄Àõ€îõŸ‹ô\‹ ]ô[ù
N¬ÇÇBBBBBBBBB_BÇÇBBBBBBBBBX€€ùõ€\ãô[ú]Y]YJò[YH
N¬ÇBBBBBBBBB\ôXY]J
N¬ÇÇBBBBBBBB_BÇÇBBBBBBB_K
H
HOà¬ÇÇBBBBBBBBX€€ùõ€\ãô\úõ‹äH
N¬ÇÇBBBBBBB_H
N¬ÇÇBBBBBB_BÇÇBBBBB_BÇÇBBBB_H
N¬ÇÇBBBB\ô]\õàô]»ô\‹€úŸJ›ôX[H
N¬ÇÇBBB_H[ŸH¬ÇÇBBBB]õ›»ô]»\úõ‹äô]⁄õ‹àâ‹ô\‹€úŸKù\õHàô\‹€ôY⁄]	‹ô\‹€úŸKú›]\ﬂNà	‹ô\‹€úŸKú›]\’^Xô\‹€úŸH
N¬ÇÇBBB_BÇÇBB_H
BÇBBKù[äô\‹€úŸHOà¬ÇÇBBB\›⁄]⁄
ô\‹€úŸU\H
H¬ÇÇBBBBXÿ\ŸH	ÿ\úò^XùYôô\âŒÇÇÇBBBBB\ô]\õàô\‹€úŸKò\úò^PùYôô\ä
N¬ÇÇBBBBXÿ\ŸH	ÿõÿâŒÇÇÇBBBBB\ô]\õàô\‹€úŸKòõÿä
N¬ÇÇBBBBXÿ\ŸH	Ÿÿ›[Y[ù	ŒÇÇÇBBBBB\ô]\õàô\‹€úŸKù^

BÇBBBBBBKù[ä^Oà¬ÇÇBBBBBBBX€€ú›\úŸ\àHô]»”T\úŸ\ä
N¬ÇBBBBBBB\ô]\õà\úŸ\ãú\úŸQúõ€T›ö[ô ^Z[YU\H
N¬ÇÇBBBBBB_H
N¬ÇÇBBBBXÿ\ŸH	⁄ú€€âŒÇÇÇBBBBB\ô]\õàô\‹€úŸKöú€€ä
N¬ÇÇBBBBYYò][ÇÇÇBBBBBZYà
Z[YU\HOOH[ôYö[ôY
H¬ÇÇBBBBBB\ô]\õàô\‹€úŸKù^

N¬ÇÇBBBBB_H[ŸH¬ÇÇBBBBBBKÀ»€öYôà[ò€Ÿ[ô¬ÇBBBBBBX€€ú›ôHHÿ⁄\úŸ]Hè ◊é»ó◊JäHèÀ⁄N¬ÇBBBBBBX€€ú›^X»HôKô^X Z[YU\H
N¬ÇBBBBBBX€€ú›Xô[H^X»	âà^X÷»HH»^X÷»HKù”›Ÿ\êÿ\ŸJ
Hà[ôYö[ôY¬ÇBBBBBBX€€ú›X€Ÿ\àHô]»^X€Ÿ\äXô[
N¬ÇBBBBBB\ô]\õàô\‹€úŸKò\úò^PùYôô\ä
Kù[äXàOàX€Ÿ\ãôX€ŸJXà
H
N¬ÇÇBBBBB_BÇÇBBB_BÇÇBB_H
BÇBBKù[ä]HOà¬ÇÇBBBKÀ»Y»ÿX⁄H€õH€à›XÿŸ\‹À€»]ŸH»õ›ÿX⁄BÇBBBKÀ»\úõ‹àô\‹€úŸHõŸY\»\»õ‹\àô\‹€úŸ\»»ô\]Y\›ÀÇÇBBBPÿX⁄KòY
\õ]H
N¬ÇÇBBBX€€ú›ÿ[òX⁄‹»HÿY[ô÷»\õN¬ÇBBBY[]HÿY[ô÷»\õN¬ÇÇBBBYõ‹à
]HH[Hÿ[òX⁄‹Àõ[ô›»H[»H
 »
H¬ÇÇBBBBX€€ú›ÿ[òX⁄»Hÿ[òX⁄‹÷»HN¬ÇBBBBZYà
ÿ[òX⁄Àõ€ìÿY
Hÿ[òX⁄Àõ€ìÿY
]H
N¬ÇÇBBB_BÇÇBB_H
BÇBBKòÿ]⁄
\úàOà¬ÇÇBBBKÀ»Xõ‹ù\úõ‹ú»[ô›\à\úõ‹ú»\ôH[ôYHÿ[YBÇÇBBBX€€ú›ÿ[òX⁄‹»HÿY[ô÷»\õN¬ÇÇBBBZYà
ÿ[òX⁄‹»OOH[ôYö[ôY
H¬ÇÇBBBBKÀ»⁄[à€ìÿYÿ\»ÿ[Y[ô\õÿ\»[]Y[àÿY[ôÿÇBBBB]\ÀõX[òYŸ\ãö][Q\úõ‹ä\õ
N¬ÇBBBB]õ›»\úé¬ÇÇBBB_BÇÇBBBY[]HÿY[ô÷»\õN¬ÇÇBBBYõ‹à
]HH[Hÿ[òX⁄‹Àõ[ô›»H[»H
 »
H¬ÇÇBBBBX€€ú›ÿ[òX⁄»Hÿ[òX⁄‹÷»HN¬ÇBBBBZYà
ÿ[òX⁄Àõ€ë\úõ‹à
Hÿ[òX⁄Àõ€ë\úõ‹ä\úà
N¬ÇÇBBB_BÇÇBBB]\ÀõX[òYŸ\ãö][Q\úõ‹ä\õ
N¬ÇÇBB_H
BÇBBKôö[ò[J

HOà¬ÇÇBBB]\ÀõX[òYŸ\ãö][Q[ô
\õ
N¬ÇÇBB_H
N¬ÇÇB]\ÀõX[òYŸ\ãö][T›\ù
\õ
N¬ÇÇ_BÇÇ\Ÿ]ô\‹€úŸU\Jò[YH
H¬ÇÇB]\Àúô\‹€úŸU\HHò[YN¬ÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]Z[YU\Jò[YH
H¬ÇÇB]\ÀõZ[YU\HHò[YN¬ÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€\‹»[ö[X][€ìÿY\à^[ô»ÿY\à¬ÇÇX€€ú›ùX›‹äX[òYŸ\à
H¬ÇÇB\›\\äX[òYŸ\à
N¬ÇÇ_BÇÇ[ÿY
\õ€ìÿY€îõŸ‹ô\‹À€ë\úõ‹à
H¬ÇÇBX€€ú›ÿ€‹HH\Œ¬ÇÇBX€€ú›ÿY\àHô]»ö[SÿY\ä\ÀõX[òYŸ\à
N¬ÇB[ÿY\ãúŸ]]
\Àú]
N¬ÇB[ÿY\ãúŸ]ô\]Y\›XY\ä\Àúô\]Y\›XY\à
N¬ÇB[ÿY\ãúŸ]⁄]‹ôY[ùX[ \Àù⁄]‹ôY[ùX[»
N¬ÇB[ÿY\ãõÿY
\õù[ò›[€à
^
H¬ÇÇBB]ûH¬ÇÇBBB[€ìÿY
ÿ€‹Kú\úŸJî””ãú\úŸJ^
H
H
N¬ÇÇBB_Hÿ]⁄
H
H¬ÇÇBBBZYà
€ë\úõ‹à
H¬ÇÇBBBB[€ë\úõ‹äH
N¬ÇÇBBB_H[ŸH¬ÇÇBBBBX€€ú€€Kô\úõ‹äH
N¬ÇÇBBB_BÇÇBBB\ÿ€‹KõX[òYŸ\ãö][Q\úõ‹ä\õ
N¬ÇÇBB_BÇÇB_K€îõŸ‹ô\‹À€ë\úõ‹à
N¬ÇÇ_BÇÇ\\úŸJú€€à
H¬ÇÇBX€€ú›[ö[X][€ú»H◊N¬ÇÇBYõ‹à
]HH»Hú€€ãõ[ô›»H
 »
H¬ÇÇBBX€€ú›€\H[ö[X][€ê€\ú\úŸJú€€ñ»HH
N¬ÇÇBBX[ö[X][€úÀú\⁄
€\
N¬ÇÇB_BÇÇB\ô]\õà[ö[X][€úŒ¬ÇÇ_BÇüBÇã äÇà
àXú›òX›ò\ŸH€\‹»»õÿ⁄»ò\ŸY^\ô\»ÿY\à
ÀúãããäBà
Çà
à›Xà€\‹Ÿ\»]ôH»[\[Y[ùH\úŸJ
HY]Ÿ⁄X⁄⁄[ôH\ŸY[àÿY

KÇà
ã¬Çò€\‹»€€\ô\‹ŸY^\ôSÿY\à^[ô»ÿY\à¬ÇÇX€€ú›ùX›‹äX[òYŸ\à
H¬ÇÇB\›\\äX[òYŸ\à
N¬ÇÇ_BÇÇ[ÿY
\õ€ìÿY€îõŸ‹ô\‹À€ë\úõ‹à
H¬ÇÇBX€€ú›ÿ€‹HH\Œ¬ÇÇBX€€ú›[XYŸ\»H◊N¬ÇÇBX€€ú›^\ôHHô]»€€\ô\‹ŸY^\ôJ
N¬ÇÇBX€€ú›ÿY\àHô]»ö[SÿY\ä\ÀõX[òYŸ\à
N¬ÇB[ÿY\ãúŸ]]
\Àú]
N¬ÇB[ÿY\ãúŸ]ô\‹€úŸU\J	ÿ\úò^XùYôô\â»
N¬ÇB[ÿY\ãúŸ]ô\]Y\›XY\ä\Àúô\]Y\›XY\à
N¬ÇB[ÿY\ãúŸ]⁄]‹ôY[ùX[ ÿ€‹Kù⁄]‹ôY[ùX[»
N¬ÇÇB[]ÿYYH¬ÇÇBYù[ò›[€àÿY^\ôJH
H¬ÇÇBB[ÿY\ãõÿY
\õ»HKù[ò›[€à
ùYôô\à
H¬ÇÇBBBX€€ú›^]\»Hÿ€‹Kú\úŸJùYôô\ãùYH
N¬ÇÇBBBZ[XYŸ\÷»HHH¬ÇBBBB]⁄Yà^]\Àù⁄YÇBBBBZZY⁄à^]\ÀöZY⁄ÇBBBBYõ‹õX]à^]\Àôõ‹õX]ÇBBBB[Z\X\Œà^]\ÀõZ\X\¬ÇBBB_N¬ÇÇBBB[ÿYY
œHN¬ÇÇBBBZYà
ÿYYOOHà
H¬ÇÇBBBBZYà
^]\ÀõZ\X\€›[ùOOHH
H^\ôKõZ[ëö[\àH[ôX\ëö[\é¬ÇÇBBBB]^\ôKö[XYŸHH[XYŸ\Œ¬ÇBBBB]^\ôKôõ‹õX]H^]\Àôõ‹õX]¬ÇBBBB]^\ôKõôYY’\]HHùYN¬ÇÇBBBBZYà
€ìÿY
H€ìÿY
^\ôH
N¬ÇÇBBB_BÇÇBB_K€îõŸ‹ô\‹À€ë\úõ‹à
N¬ÇÇB_BÇÇBZYà
\úò^Kö\–\úò^J\õ
H
H¬ÇÇBBYõ‹à
]HH[H\õõ[ô›»H[»
 »H
H¬ÇÇBBB[ÿY^\ôJH
N¬ÇÇBB_BÇÇB_H[ŸH¬ÇÇBBKÀ»€€\ô\‹ŸY›Xô[X\^\ôH›‹ôY[àH⁄[ô€H»ö[BÇÇBB[ÿY\ãõÿY
\õù[ò›[€à
ùYôô\à
H¬ÇÇBBBX€€ú›^]\»Hÿ€‹Kú\úŸJùYôô\ãùYH
N¬ÇÇBBBZYà
^]\Àö\–›Xô[X\
H¬ÇÇBBBBX€€ú›òXŸ\»H^]\ÀõZ\X\Àõ[ô›»^]\ÀõZ\X\€›[ù¬ÇÇBBBBYõ‹à
]àH»àòXŸ\Œ»à
 »
H¬ÇÇBBBBBZ[XYŸ\÷»àHH»Z\X\Œà◊HN¬ÇÇBBBBBYõ‹à
]HH»H^]\ÀõZ\X\€›[ù»H
 »
H¬ÇÇBBBBBBZ[XYŸ\÷»àKõZ\X\Àú\⁄
^]\ÀõZ\X\÷»à
à^]\ÀõZ\X\€›[ù
»HH
N¬ÇBBBBBBZ[XYŸ\÷»àKôõ‹õX]H^]\Àôõ‹õX]¬ÇBBBBBBZ[XYŸ\÷»àKù⁄YH^]\Àù⁄Y¬ÇBBBBBBZ[XYŸ\÷»àKöZY⁄H^]\ÀöZY⁄¬ÇÇBBBBB_BÇÇBBBB_BÇÇBBBB]^\ôKö[XYŸHH[XYŸ\Œ¬ÇÇBBB_H[ŸH¬ÇÇBBBB]^\ôKö[XYŸKù⁄YH^]\Àù⁄Y¬ÇBBBB]^\ôKö[XYŸKöZY⁄H^]\ÀöZY⁄¬ÇBBBB]^\ôKõZ\X\»H^]\ÀõZ\X\Œ¬ÇÇBBB_BÇÇBBBZYà
^]\ÀõZ\X\€›[ùOOHH
H¬ÇÇBBBB]^\ôKõZ[ëö[\àH[ôX\ëö[\é¬ÇÇBBB_BÇÇBBB]^\ôKôõ‹õX]H^]\Àôõ‹õX]¬ÇBBB]^\ôKõôYY’\]HHùYN¬ÇÇBBBZYà
€ìÿY
H€ìÿY
^\ôH
N¬ÇÇBB_K€îõŸ‹ô\‹À€ë\úõ‹à
N¬ÇÇB_BÇÇB\ô]\õà^\ôN¬ÇÇ_BÇüBÇò€\‹»[XYŸSÿY\à^[ô»ÿY\à¬ÇÇX€€ú›ùX›‹äX[òYŸ\à
H¬ÇÇB\›\\äX[òYŸ\à
N¬ÇÇ_BÇÇ[ÿY
\õ€ìÿY€îõŸ‹ô\‹À€ë\úõ‹à
H¬ÇÇBZYà
\Àú]OOH[ôYö[ôY
H\õH\Àú]
»\õ¬ÇÇB]\õH\ÀõX[òYŸ\ãúô\€€ôUTì
\õ
N¬ÇÇBX€€ú›ÿ€‹HH\Œ¬ÇÇBX€€ú›ÿX⁄YHÿX⁄KôŸ]
\õ
N¬ÇÇBZYà
ÿX⁄YOOH[ôYö[ôY
H¬ÇÇBB\ÿ€‹KõX[òYŸ\ãö][T›\ù
\õ
N¬ÇÇBB\Ÿ][Y[›]
ù[ò›[€à

H¬ÇÇBBBZYà
€ìÿY
H€ìÿY
ÿX⁄Y
N¬ÇÇBBB\ÿ€‹KõX[òYŸ\ãö][Q[ô
\õ
N¬ÇÇBB_K
N¬ÇÇBB\ô]\õàÿX⁄Y¬ÇÇB_BÇÇBX€€ú›[XYŸHH‹ôX]Q[[Y[ùî 	⁄[Y…»
N¬ÇÇBYù[ò›[€à€í[XYŸSÿY

H¬ÇÇBB\ô[[›ôQ]ô[ù\›[ô\ú 
N¬ÇÇBBPÿX⁄KòY
\õ\»
N¬ÇÇBBZYà
€ìÿY
H€ìÿY
\»
N¬ÇÇBB\ÿ€‹KõX[òYŸ\ãö][Q[ô
\õ
N¬ÇÇB_BÇÇBYù[ò›[€à€í[XYŸQ\úõ‹ä]ô[ù
H¬ÇÇBB\ô[[›ôQ]ô[ù\›[ô\ú 
N¬ÇÇBBZYà
€ë\úõ‹à
H€ë\úõ‹ä]ô[ù
N¬ÇÇBB\ÿ€‹KõX[òYŸ\ãö][Q\úõ‹ä\õ
N¬ÇBB\ÿ€‹KõX[òYŸ\ãö][Q[ô
\õ
N¬ÇÇB_BÇÇBYù[ò›[€àô[[›ôQ]ô[ù\›[ô\ú 
H¬ÇÇBBZ[XYŸKúô[[›ôQ]ô[ù\›[ô\ä	€ÿY	À€í[XYŸSÿYò[ŸH
N¬ÇBBZ[XYŸKúô[[›ôQ]ô[ù\›[ô\ä	Ÿ\úõ‹âÀ€í[XYŸQ\úõ‹ãò[ŸH
N¬ÇÇB_BÇÇBZ[XYŸKòY]ô[ù\›[ô\ä	€ÿY	À€í[XYŸSÿYò[ŸH
N¬ÇBZ[XYŸKòY]ô[ù\›[ô\ä	Ÿ\úõ‹âÀ€í[XYŸQ\úõ‹ãò[ŸH
N¬ÇÇBZYà
\õú€XŸJH
HOOH	Ÿ]Nâ»
H¬ÇÇBBZYà
\Àò‹õ‹‹”‹öY⁄[àOOH[ôYö[ôY
H[XYŸKò‹õ‹‹”‹öY⁄[àH\Àò‹õ‹‹”‹öY⁄[é¬ÇÇB_BÇÇB\ÿ€‹KõX[òYŸ\ãö][T›\ù
\õ
N¬ÇÇBZ[XYŸKú‹ò»H\õ¬ÇÇB\ô]\õà[XYŸN¬ÇÇ_BÇüBÇò€\‹»›XôU^\ôSÿY\à^[ô»ÿY\à¬ÇÇX€€ú›ùX›‹äX[òYŸ\à
H¬ÇÇB\›\\äX[òYŸ\à
N¬ÇÇ_BÇÇ[ÿY
\õÀ€ìÿY€îõŸ‹ô\‹À€ë\úõ‹à
H¬ÇÇBX€€ú›^\ôHHô]»›XôU^\ôJ
N¬ÇB]^\ôKò€€‹î‹XŸHH‘ë–ê€€‹î‹XŸN¬ÇÇBX€€ú›ÿY\àHô]»[XYŸSÿY\ä\ÀõX[òYŸ\à
N¬ÇB[ÿY\ãúŸ]‹õ‹‹”‹öY⁄[ä\Àò‹õ‹‹”‹öY⁄[à
N¬ÇB[ÿY\ãúŸ]]
\Àú]
N¬ÇÇB[]ÿYYH¬ÇÇBYù[ò›[€àÿY^\ôJH
H¬ÇÇBB[ÿY\ãõÿY
\õ÷»HKù[ò›[€à
[XYŸH
H¬ÇÇBBB]^\ôKö[XYŸ\÷»HHH[XYŸN¬ÇÇBBB[ÿYY
 Œ¬ÇÇBBBZYà
ÿYYOOHà
H¬ÇÇBBBB]^\ôKõôYY’\]HHùYN¬ÇÇBBBBZYà
€ìÿY
H€ìÿY
^\ôH
N¬ÇÇBBB_BÇÇBB_K[ôYö[ôY€ë\úõ‹à
N¬ÇÇB_BÇÇBYõ‹à
]HH»H\õÀõ[ô›»
 »H
H¬ÇÇBB[ÿY^\ôJH
N¬ÇÇB_BÇÇB\ô]\õà^\ôN¬ÇÇ_BÇüBÇã äÇà
àXú›òX›ò\ŸH€\‹»»ÿYŸ[ô\öX»ö[ò\ûH^\ô\»õ‹õX]»
ôÿôKãããäBà
Çà
à›Xà€\‹Ÿ\»]ôH»[\[Y[ùH\úŸJ
HY]Ÿ⁄X⁄⁄[ôH\ŸY[àÿY

KÇà
ã¬Çò€\‹»]U^\ôSÿY\à^[ô»ÿY\à¬ÇÇX€€ú›ùX›‹äX[òYŸ\à
H¬ÇÇB\›\\äX[òYŸ\à
N¬ÇÇ_BÇÇ[ÿY
\õ€ìÿY€îõŸ‹ô\‹À€ë\úõ‹à
H¬ÇÇBX€€ú›ÿ€‹HH\Œ¬ÇÇBX€€ú›^\ôHHô]»]U^\ôJ
N¬ÇÇBX€€ú›ÿY\àHô]»ö[SÿY\ä\ÀõX[òYŸ\à
N¬ÇB[ÿY\ãúŸ]ô\‹€úŸU\J	ÿ\úò^XùYôô\â»
N¬ÇB[ÿY\ãúŸ]ô\]Y\›XY\ä\Àúô\]Y\›XY\à
N¬ÇB[ÿY\ãúŸ]]
\Àú]
N¬ÇB[ÿY\ãúŸ]⁄]‹ôY[ùX[ ÿ€‹Kù⁄]‹ôY[ùX[»
N¬ÇB[ÿY\ãõÿY
\õù[ò›[€à
ùYôô\à
H¬ÇÇBB[]^]N¬ÇÇBB]ûH¬ÇÇBBB]^]HHÿ€‹Kú\úŸJùYôô\à
N¬ÇÇBB_Hÿ]⁄
\úõ‹à
H¬ÇÇBBBZYà
€ë\úõ‹àOOH[ôYö[ôY
H¬ÇÇBBBB[€ë\úõ‹ä\úõ‹à
N¬ÇÇBBB_H[ŸH¬ÇÇBBBBX€€ú€€Kô\úõ‹ä\úõ‹à
N¬ÇBBBB\ô]\õé¬ÇÇBBB_BÇÇBB_BÇÇBBZYà
^]Kö[XYŸHOOH[ôYö[ôY
H¬ÇÇBBB]^\ôKö[XYŸHH^]Kö[XYŸN¬ÇÇBB_H[ŸHYà
^]Kô]HOOH[ôYö[ôY
H¬ÇÇBBB]^\ôKö[XYŸKù⁄YH^]Kù⁄Y¬ÇBBB]^\ôKö[XYŸKöZY⁄H^]KöZY⁄¬ÇBBB]^\ôKö[XYŸKô]HH^]Kô]N¬ÇÇBB_BÇÇBB]^\ôKù‹ò\»H^]Kù‹ò\»OOH[ôYö[ôY»^]Kù‹ò\»à€[\—YŸU‹ò\[ôŒ¬ÇBB]^\ôKù‹ò\H^]Kù‹ò\OOH[ôYö[ôY»^]Kù‹ò\à€[\—YŸU‹ò\[ôŒ¬ÇÇBB]^\ôKõXY—ö[\àH^]KõXY—ö[\àOOH[ôYö[ôY»^]KõXY—ö[\àà[ôX\ëö[\é¬ÇBB]^\ôKõZ[ëö[\àH^]KõZ[ëö[\àOOH[ôYö[ôY»^]KõZ[ëö[\àà[ôX\ëö[\é¬ÇÇBB]^\ôKò[ö\€›õ‹HH^]Kò[ö\€›õ‹HOOH[ôYö[ôY»^]Kò[ö\€›õ‹HàN¬ÇÇBBZYà
^]Kò€€‹î‹XŸHOOH[ôYö[ôY
H¬ÇÇBBB]^\ôKò€€‹î‹XŸHH^]Kò€€‹î‹XŸN¬ÇÇBB_BÇÇBBZYà
^]Kôõ\HOOH[ôYö[ôY
H¬ÇÇBBB]^\ôKôõ\HH^]Kôõ\N¬ÇÇBB_BÇÇBBZYà
^]Kôõ‹õX]OOH[ôYö[ôY
H¬ÇÇBBB]^\ôKôõ‹õX]H^]Kôõ‹õX]¬ÇÇBB_BÇÇBBZYà
^]Kù\HOOH[ôYö[ôY
H¬ÇÇBBB]^\ôKù\HH^]Kù\N¬ÇÇBB_BÇÇBBZYà
^]KõZ\X\»OOH[ôYö[ôY
H¬ÇÇBBB]^\ôKõZ\X\»H^]KõZ\X\Œ¬ÇBBB]^\ôKõZ[ëö[\àH[ôX\ìZ\X\[ôX\ëö[\é»À»ô\›[XXõKããÇÇÇBB_BÇÇBBZYà
^]KõZ\X\€›[ùOOHH
H¬ÇÇBBB]^\ôKõZ[ëö[\àH[ôX\ëö[\é¬ÇÇBB_BÇÇBBZYà
^]KôŸ[ô\ò]SZ\X\»OOH[ôYö[ôY
H¬ÇÇBBB]^\ôKôŸ[ô\ò]SZ\X\»H^]KôŸ[ô\ò]SZ\X\Œ¬ÇÇBB_BÇÇBB]^\ôKõôYY’\]HHùYN¬ÇÇBBZYà
€ìÿY
H€ìÿY
^\ôK^]H
N¬ÇÇB_K€îõŸ‹ô\‹À€ë\úõ‹à
N¬ÇÇÇB\ô]\õà^\ôN¬ÇÇ_BÇüBÇò€\‹»^\ôSÿY\à^[ô»ÿY\à¬ÇÇX€€ú›ùX›‹äX[òYŸ\à
H¬ÇÇB\›\\äX[òYŸ\à
N¬ÇÇ_BÇÇ[ÿY
\õ€ìÿY€îõŸ‹ô\‹À€ë\úõ‹à
H¬ÇÇBX€€ú›^\ôHHô]»^\ôJ
N¬ÇÇBX€€ú›ÿY\àHô]»[XYŸSÿY\ä\ÀõX[òYŸ\à
N¬ÇB[ÿY\ãúŸ]‹õ‹‹”‹öY⁄[ä\Àò‹õ‹‹”‹öY⁄[à
N¬ÇB[ÿY\ãúŸ]]
\Àú]
N¬ÇÇB[ÿY\ãõÿY
\õù[ò›[€à
[XYŸH
H¬ÇÇBB]^\ôKö[XYŸHH[XYŸN¬ÇBB]^\ôKõôYY’\]HHùYN¬ÇÇBBZYà
€ìÿYOOH[ôYö[ôY
H¬ÇÇBBB[€ìÿY
^\ôH
N¬ÇÇBB_BÇÇB_K€îõŸ‹ô\‹À€ë\úõ‹à
N¬ÇÇB\ô]\õà^\ôN¬ÇÇ_BÇüBÇò€\‹»Y⁄^[ô»ÿöôX›—¬ÇÇX€€ú›ùX›‹ä€€‹ã[ù[ú⁄]HHH
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àö\”Y⁄HùYN¬ÇÇB]\Àù\HH	”Y⁄	Œ¬ÇÇB]\Àò€€‹àHô]»€€‹ä€€‹à
N¬ÇB]\Àö[ù[ú⁄]HH[ù[ú⁄]N¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇBKÀ»[\H\ôH[àò\ŸH€\‹Œ»€€YH›Xò€\‹Ÿ\»›ô\úöYKÇÇÇ_BÇÇX€‹J€›\òŸKôX›\ú⁄]ôH
H¬ÇÇB\›\\ãò€‹J€›\òŸKôX›\ú⁄]ôH
N¬ÇÇB]\Àò€€‹ãò€‹J€›\òŸKò€€‹à
N¬ÇB]\Àö[ù[ú⁄]HH€›\òŸKö[ù[ú⁄]N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ]“î””äY]H
H¬ÇÇBX€€ú›]HH›\\ãù“î””äY]H
N¬ÇÇBY]KõÿöôX›ò€€‹àH\Àò€€‹ãôŸ]^

N¬ÇBY]KõÿöôX›ö[ù[ú⁄]HH\Àö[ù[ú⁄]N¬ÇÇBZYà
\Àô‹õ›[ô€€‹àOOH[ôYö[ôY
H]KõÿöôX›ô‹õ›[ô€€‹àH\Àô‹õ›[ô€€‹ãôŸ]^

N¬ÇÇBZYà
\Àô\›[òŸHOOH[ôYö[ôY
H]KõÿöôX›ô\›[òŸHH\Àô\›[òŸN¬ÇBZYà
\Àò[ô€HOOH[ôYö[ôY
H]KõÿöôX›ò[ô€HH\Àò[ô€N¬ÇBZYà
\ÀôXÿ^HOOH[ôYö[ôY
H]KõÿöôX›ôXÿ^HH\ÀôXÿ^N¬ÇBZYà
\Àú[ù[XúòHOOH[ôYö[ôY
H]KõÿöôX›ú[ù[XúòHH\Àú[ù[XúòN¬ÇÇBZYà
\Àú⁄Y›»OOH[ôYö[ôY
H]KõÿöôX›ú⁄Y›»H\Àú⁄Y›Àù“î””ä
N¬ÇBZYà
\Àù\ôŸ]OOH[ôYö[ôY
H]KõÿöôX›ù\ôŸ]H\Àù\ôŸ]ù]ZY¬ÇÇB\ô]\õà]N¬ÇÇ_BÇüBÇò€\‹»[Z\‹\ôSY⁄^[ô»Y⁄¬ÇÇX€€ú›ùX›‹ä⁄ﬁP€€‹ã‹õ›[ô€€‹ã[ù[ú⁄]H
H¬ÇÇB\›\\ä⁄ﬁP€€‹ã[ù[ú⁄]H
N¬ÇÇB]\Àö\“[Z\‹\ôSY⁄HùYN¬ÇÇB]\Àù\HH	“[Z\‹\ôSY⁄	Œ¬ÇÇB]\Àú‹⁄][€ãò€‹JÿöôX›—ëQêUS’T
N¬ÇB]\Àù\]SX]ö^

N¬ÇÇB]\Àô‹õ›[ô€€‹àHô]»€€‹ä‹õ›[ô€€‹à
N¬ÇÇ_BÇÇX€‹J€›\òŸKôX›\ú⁄]ôH
H¬ÇÇB\›\\ãò€‹J€›\òŸKôX›\ú⁄]ôH
N¬ÇÇB]\Àô‹õ›[ô€€‹ãò€‹J€›\òŸKô‹õ›[ô€€‹à
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€€ú›‹õ⁄îÿ‹ôY[ìX]ö^	HH ê◊‘TëW◊ ã»ô]»X]ö^

N¬ò€€ú›€Y⁄‹⁄][€ï€‹õ	HH ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬ò€€ú›€€⁄’\ôŸ]	HH ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬Çò€\‹»Y⁄⁄Y›»¬ÇÇX€€ú›ùX›‹äÿ[Y\òH
H¬ÇÇB]\Àòÿ[Y\òHHÿ[Y\òN¬ÇÇB]\Àö[ù[ú⁄]HHN¬ÇÇB]\ÀòöX\»H¬ÇB]\Àõõ‹õX[öX\»H¬ÇB]\ÀúòY]\»HN¬ÇB]\Àòõ\îÿ[\\»H¬ÇÇB]\ÀõX\⁄^ôHHô]»ôX›‹åäLLãLLà
N¬ÇÇB]\ÀõX\Hù[¬ÇB]\ÀõX\\‹»Hù[¬ÇB]\ÀõX]ö^Hô]»X]ö^

N¬ÇÇB]\Àò]]’\]HHùYN¬ÇB]\ÀõôYY’\]HHò[ŸN¬ÇÇB]\ÀóŸúù\›[HHô]»úù\›[J
N¬ÇB]\ÀóŸúò[YQ^[ù»Hô]»ôX›‹åäKH
N¬ÇÇB]\Àó›öY]‹‹ù€›[ùHN¬ÇÇB]\Àó›öY]‹‹ù»H¬ÇÇBB[ô]»ôX›‹ç
KH
BÇÇBWN¬ÇÇ_BÇÇYŸ]öY]‹‹ù€›[ù

H¬ÇÇB\ô]\õà\Àó›öY]‹‹ù€›[ù¬ÇÇ_BÇÇYŸ]úù\›[J
H¬ÇÇB\ô]\õà\ÀóŸúù\›[N¬ÇÇ_BÇÇ]\]SX]öXŸ\ Y⁄
H¬ÇÇBX€€ú›⁄Y›–ÿ[Y\òHH\Àòÿ[Y\òN¬ÇBX€€ú›⁄Y›”X]ö^H\ÀõX]ö^¬ÇÇBW€Y⁄‹⁄][€ï€‹õ	KúŸ]úõ€SX]ö^‹⁄][€äY⁄õX]ö^€‹õ
N¬ÇB\⁄Y›–ÿ[Y\òKú‹⁄][€ãò€‹J€Y⁄‹⁄][€ï€‹õ	H
N¬ÇÇBW€€⁄’\ôŸ]	KúŸ]úõ€SX]ö^‹⁄][€äY⁄ù\ôŸ]õX]ö^€‹õ
N¬ÇB\⁄Y›–ÿ[Y\òKõ€⁄–]
€€⁄’\ôŸ]	H
N¬ÇB\⁄Y›–ÿ[Y\òKù\]SX]ö^€‹õ

N¬ÇÇBW‹õ⁄îÿ‹ôY[ìX]ö^	Kõ][\SX]öXŸ\ ⁄Y›–ÿ[Y\òKúõ⁄ôX›[€ìX]ö^⁄Y›–ÿ[Y\òKõX]ö^€‹õ[ùô\úŸH
N¬ÇB]\ÀóŸúù\›[KúŸ]úõ€Tõ⁄ôX›[€ìX]ö^
‹õ⁄îÿ‹ôY[ìX]ö^	H
N¬ÇÇB\⁄Y›”X]ö^úŸ]
ÇBBLçKååçKÇBBLåçKåçKÇBBLååçKçKÇBBLåååKåÇBJN¬ÇÇB\⁄Y›”X]ö^õ][\J‹õ⁄îÿ‹ôY[ìX]ö^	H
N¬ÇÇ_BÇÇYŸ]öY]‹‹ù
öY]‹‹ù[ô^
H¬ÇÇB\ô]\õà\Àó›öY]‹‹ù÷»öY]‹‹ù[ô^N¬ÇÇ_BÇÇYŸ]úò[YQ^[ù 
H¬ÇÇB\ô]\õà\ÀóŸúò[YQ^[ùŒ¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇBZYà
\ÀõX\
H¬ÇÇBB]\ÀõX\ô\‹‹ŸJ
N¬ÇÇB_BÇÇBZYà
\ÀõX\\‹»
H¬ÇÇBB]\ÀõX\\‹Àô\‹‹ŸJ
N¬ÇÇB_BÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB]\Àòÿ[Y\òHH€›\òŸKòÿ[Y\òKò€€ôJ
N¬ÇÇB]\Àö[ù[ú⁄]HH€›\òŸKö[ù[ú⁄]N¬ÇÇB]\ÀòöX\»H€›\òŸKòöX\Œ¬ÇB]\ÀúòY]\»H€›\òŸKúòY]\Œ¬ÇÇB]\ÀõX\⁄^ôKò€‹J€›\òŸKõX\⁄^ôH
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇX€€ôJ
H¬ÇÇB\ô]\õàô]»\Àò€€ú›ùX›‹ä
Kò€‹J\»
N¬ÇÇ_BÇÇ]“î””ä
H¬ÇÇBX€€ú›ÿöôX›HﬂN¬ÇÇBZYà
\Àö[ù[ú⁄]HOOHH
HÿöôX›ö[ù[ú⁄]HH\Àö[ù[ú⁄]N¬ÇBZYà
\ÀòöX\»OOH
HÿöôX›òöX\»H\ÀòöX\Œ¬ÇBZYà
\Àõõ‹õX[öX\»OOH
HÿöôX›õõ‹õX[öX\»H\Àõõ‹õX[öX\Œ¬ÇBZYà
\ÀúòY]\»OOHH
HÿöôX›úòY]\»H\ÀúòY]\Œ¬ÇBZYà
\ÀõX\⁄^ôKûOOHLLà\ÀõX\⁄^ôKûHOOHLLà
HÿöôX›õX\⁄^ôHH\ÀõX\⁄^ôKù–\úò^J
N¬ÇÇB[ÿöôX›òÿ[Y\òHH\Àòÿ[Y\òKù“î””äò[ŸH
KõÿöôX›¬ÇBY[]HÿöôX›òÿ[Y\òKõX]ö^¬ÇÇB\ô]\õàÿöôX›¬ÇÇ_BÇüBÇò€\‹»‹›Y⁄⁄Y›»^[ô»Y⁄⁄Y›»¬ÇÇX€€ú›ùX›‹ä
H¬ÇÇB\›\\äô]»\ú‹X›]ôPÿ[Y\òJLKçKL
H
N¬ÇÇB]\Àö\‘‹›Y⁄⁄Y›»HùYN¬ÇÇB]\Àôõÿ›\»HN¬ÇÇ_BÇÇ]\]SX]öXŸ\ Y⁄
H¬ÇÇBX€€ú›ÿ[Y\òHH\Àòÿ[Y\òN¬ÇÇBX€€ú›õ›àHêQëQ»
àà
àY⁄ò[ô€H
à\Àôõÿ›\Œ¬ÇBX€€ú›\‹X›H\ÀõX\⁄^ôKù⁄Y»\ÀõX\⁄^ôKöZY⁄¬ÇBX€€ú›ò\àHY⁄ô\›[òŸHÿ[Y\òKôò\é¬ÇÇBZYà
õ›àOOHÿ[Y\òKôõ›à\‹X›OOHÿ[Y\òKò\‹X›ò\àOOHÿ[Y\òKôò\à
H¬ÇÇBBXÿ[Y\òKôõ›àHõ›é¬ÇBBXÿ[Y\òKò\‹X›H\‹X›¬ÇBBXÿ[Y\òKôò\àHò\é¬ÇBBXÿ[Y\òKù\]Tõ⁄ôX›[€ìX]ö^

N¬ÇÇB_BÇÇB\›\\ãù\]SX]öXŸ\ Y⁄
N¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àôõÿ›\»H€›\òŸKôõÿ›\Œ¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€\‹»‹›Y⁄^[ô»Y⁄¬ÇÇX€€ú›ùX›‹ä€€‹ã[ù[ú⁄]K\›[òŸHH[ô€HHX]îH»À[ù[XúòHHXÿ^HHà
H¬ÇÇB\›\\ä€€‹ã[ù[ú⁄]H
N¬ÇÇB]\Àö\‘‹›Y⁄HùYN¬ÇÇB]\Àù\HH	‘‹›Y⁄	Œ¬ÇÇB]\Àú‹⁄][€ãò€‹JÿöôX›—ëQêUS’T
N¬ÇB]\Àù\]SX]ö^

N¬ÇÇB]\Àù\ôŸ]Hô]»ÿöôX›—

N¬ÇÇB]\Àô\›[òŸHH\›[òŸN¬ÇB]\Àò[ô€HH[ô€N¬ÇB]\Àú[ù[XúòHH[ù[XúòN¬ÇB]\ÀôXÿ^HHXÿ^N¬ÇÇB]\ÀõX\Hù[¬ÇÇB]\Àú⁄Y›»Hô]»‹›Y⁄⁄Y› 
N¬ÇÇ_BÇÇYŸ]›Ÿ\ä
H¬ÇÇBKÀ»€€\]HHY⁄	‹»[Z[õ›\»›Ÿ\à
[à[Y[ú Húõ€H]»[ù[ú⁄]H
[àÿ[ô[JBÇBKÀ»ûH€€ùô[ù[€àõ‹àH‹›Y⁄[Z[õ›\»›Ÿ\à
JHH3‡
à[Z[õ›\»[ù[ú⁄]H
Ÿ
BÇB\ô]\õà\Àö[ù[ú⁄]H
àX]îN¬ÇÇ_BÇÇ\Ÿ]›Ÿ\ä›Ÿ\à
H¬ÇÇBKÀ»Ÿ]HY⁄	‹»[ù[ú⁄]H
[àÿ[ô[JHúõ€HH\⁄\ôY[Z[õ›\»›Ÿ\à
[à[Y[ú BÇB]\Àö[ù[ú⁄]HH›Ÿ\à»X]îN¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇB]\Àú⁄Y›Àô\‹‹ŸJ
N¬ÇÇ_BÇÇX€‹J€›\òŸKôX›\ú⁄]ôH
H¬ÇÇB\›\\ãò€‹J€›\òŸKôX›\ú⁄]ôH
N¬ÇÇB]\Àô\›[òŸHH€›\òŸKô\›[òŸN¬ÇB]\Àò[ô€HH€›\òŸKò[ô€N¬ÇB]\Àú[ù[XúòHH€›\òŸKú[ù[XúòN¬ÇB]\ÀôXÿ^HH€›\òŸKôXÿ^N¬ÇÇB]\Àù\ôŸ]H€›\òŸKù\ôŸ]ò€€ôJ
N¬ÇÇB]\Àú⁄Y›»H€›\òŸKú⁄Y›Àò€€ôJ
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€€ú›‹õ⁄îÿ‹ôY[ìX]ö^H ê◊‘TëW◊ ã»ô]»X]ö^

N¬ò€€ú›€Y⁄‹⁄][€ï€‹õH ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬ò€€ú›€€⁄’\ôŸ]H ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬Çò€\‹»⁄[ùY⁄⁄Y›»^[ô»Y⁄⁄Y›»¬ÇÇX€€ú›ùX›‹ä
H¬ÇÇB\›\\äô]»\ú‹X›]ôPÿ[Y\òJLKçKL
H
N¬ÇÇB]\Àö\‘⁄[ùY⁄⁄Y›»HùYN¬ÇÇB]\ÀóŸúò[YQ^[ù»Hô]»ôX›‹åäà
N¬ÇÇB]\Àó›öY]‹‹ù€›[ùHé¬ÇÇB]\Àó›öY]‹‹ù»H¬ÇBBKÀ»\ŸHöY]‹‹ù»X\H›XôK[X\€ù»Hë^\ôH⁄]BÇBBKÀ»õ€›⁄[ô»‹öY[ù][€éÇÇBBKÀ¬ÇBBKÀ»ñÇÇBBKÀ»HBÇBBKÀ¬ÇBBKÀ»H‹⁄]]ôH\ôX›[€ÇÇBBKÀ»HôYÿ]]ôH\ôX›[€ÇÇBBKÀ»HH‹⁄]]ôHH\ôX›[€ÇÇBBKÀ»HHôYÿ]]ôHH\ôX›[€ÇÇBBKÀ»àH‹⁄]]ôHà\ôX›[€ÇÇBBKÀ»àHôYÿ]]ôHà\ôX›[€ÇÇÇBBKÀ»‹⁄]]ôHÇBB[ô]»ôX›‹ç
ãKKH
KÇBBKÀ»ôYÿ]]ôHÇBB[ô]»ôX›‹ç
KKH
KÇBBKÀ»‹⁄]]ôHÇÇBB[ô]»ôX›‹ç
ÀKKH
KÇBBKÀ»ôYÿ]]ôHÇÇBB[ô]»ôX›‹ç
KKKH
KÇBBKÀ»‹⁄]]ôHBÇBB[ô]»ôX›‹ç
ÀKH
KÇBBKÀ»ôYÿ]]ôHBÇBB[ô]»ôX›‹ç
KKH
BÇBWN¬ÇÇB]\Àóÿ›XôQ\ôX›[€ú»H¬ÇBB[ô]»ôX›‹å K
Kô]»ôX›‹å HK
Kô]»ôX›‹å H
KÇBB[ô]»ôX›‹å HH
Kô]»ôX›‹å K
Kô]»ôX›‹å HK
BÇBWN¬ÇÇB]\Àóÿ›XôU\»H¬ÇBB[ô]»ôX›‹å K
Kô]»ôX›‹å K
Kô]»ôX›‹å K
KÇBB[ô]»ôX›‹å K
Kô]»ôX›‹å H
K[ô]»ôX›‹å HH
BÇBWN¬ÇÇ_BÇÇ]\]SX]öXŸ\ Y⁄öY]‹‹ù[ô^H
H¬ÇÇBX€€ú›ÿ[Y\òHH\Àòÿ[Y\òN¬ÇBX€€ú›⁄Y›”X]ö^H\ÀõX]ö^¬ÇÇBX€€ú›ò\àHY⁄ô\›[òŸHÿ[Y\òKôò\é¬ÇÇBZYà
ò\àOOHÿ[Y\òKôò\à
H¬ÇÇBBXÿ[Y\òKôò\àHò\é¬ÇBBXÿ[Y\òKù\]Tõ⁄ôX›[€ìX]ö^

N¬ÇÇB_BÇÇBW€Y⁄‹⁄][€ï€‹õúŸ]úõ€SX]ö^‹⁄][€äY⁄õX]ö^€‹õ
N¬ÇBXÿ[Y\òKú‹⁄][€ãò€‹J€Y⁄‹⁄][€ï€‹õ
N¬ÇÇBW€€⁄’\ôŸ]ò€‹Jÿ[Y\òKú‹⁄][€à
N¬ÇBW€€⁄’\ôŸ]òY
\Àóÿ›XôQ\ôX›[€ú÷»öY]‹‹ù[ô^H
N¬ÇBXÿ[Y\òKù\ò€‹J\Àóÿ›XôU\÷»öY]‹‹ù[ô^H
N¬ÇBXÿ[Y\òKõ€⁄–]
€€⁄’\ôŸ]
N¬ÇBXÿ[Y\òKù\]SX]ö^€‹õ

N¬ÇÇB\⁄Y›”X]ö^õXZŸUò[ú€][€äH€Y⁄‹⁄][€ï€‹õûH€Y⁄‹⁄][€ï€‹õûKH€Y⁄‹⁄][€ï€‹õûà
N¬ÇÇBW‹õ⁄îÿ‹ôY[ìX]ö^õ][\SX]öXŸ\ ÿ[Y\òKúõ⁄ôX›[€ìX]ö^ÿ[Y\òKõX]ö^€‹õ[ùô\úŸH
N¬ÇB]\ÀóŸúù\›[KúŸ]úõ€Tõ⁄ôX›[€ìX]ö^
‹õ⁄îÿ‹ôY[ìX]ö^
N¬ÇÇ_BÇüBÇò€\‹»⁄[ùY⁄^[ô»Y⁄¬ÇÇX€€ú›ùX›‹ä€€‹ã[ù[ú⁄]K\›[òŸHHXÿ^HHà
H¬ÇÇB\›\\ä€€‹ã[ù[ú⁄]H
N¬ÇÇB]\Àö\‘⁄[ùY⁄HùYN¬ÇÇB]\Àù\HH	‘⁄[ùY⁄	Œ¬ÇÇB]\Àô\›[òŸHH\›[òŸN¬ÇB]\ÀôXÿ^HHXÿ^N¬ÇÇB]\Àú⁄Y›»Hô]»⁄[ùY⁄⁄Y› 
N¬ÇÇ_BÇÇYŸ]›Ÿ\ä
H¬ÇÇBKÀ»€€\]HHY⁄	‹»[Z[õ›\»›Ÿ\à
[à[Y[ú Húõ€H]»[ù[ú⁄]H
[àÿ[ô[JBÇBKÀ»õ‹à[à\€›õ‹X»Y⁄€›\òŸK[Z[õ›\»›Ÿ\à
JHH3‡[Z[õ›\»[ù[ú⁄]H
Ÿ
BÇB\ô]\õà\Àö[ù[ú⁄]H
à
àX]îN¬ÇÇ_BÇÇ\Ÿ]›Ÿ\ä›Ÿ\à
H¬ÇÇBKÀ»Ÿ]HY⁄	‹»[ù[ú⁄]H
[àÿ[ô[JHúõ€HH\⁄\ôY[Z[õ›\»›Ÿ\à
[à[Y[ú BÇB]\Àö[ù[ú⁄]HH›Ÿ\à»

àX]îH
N¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇB]\Àú⁄Y›Àô\‹‹ŸJ
N¬ÇÇ_BÇÇX€‹J€›\òŸKôX›\ú⁄]ôH
H¬ÇÇB\›\\ãò€‹J€›\òŸKôX›\ú⁄]ôH
N¬ÇÇB]\Àô\›[òŸHH€›\òŸKô\›[òŸN¬ÇB]\ÀôXÿ^HH€›\òŸKôXÿ^N¬ÇÇB]\Àú⁄Y›»H€›\òŸKú⁄Y›Àò€€ôJ
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€\‹»\ôX›[€ò[Y⁄⁄Y›»^[ô»Y⁄⁄Y›»¬ÇÇX€€ú›ùX›‹ä
H¬ÇÇB\›\\äô]»‹ùŸ‹ò\X–ÿ[Y\òJHKKKHKçKL
H
N¬ÇÇB]\Àö\—\ôX›[€ò[Y⁄⁄Y›»HùYN¬ÇÇ_BÇüBÇò€\‹»\ôX›[€ò[Y⁄^[ô»Y⁄¬ÇÇX€€ú›ùX›‹ä€€‹ã[ù[ú⁄]H
H¬ÇÇB\›\\ä€€‹ã[ù[ú⁄]H
N¬ÇÇB]\Àö\—\ôX›[€ò[Y⁄HùYN¬ÇÇB]\Àù\HH	—\ôX›[€ò[Y⁄	Œ¬ÇÇB]\Àú‹⁄][€ãò€‹JÿöôX›—ëQêUS’T
N¬ÇB]\Àù\]SX]ö^

N¬ÇÇB]\Àù\ôŸ]Hô]»ÿöôX›—

N¬ÇÇB]\Àú⁄Y›»Hô]»\ôX›[€ò[Y⁄⁄Y› 
N¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇB]\Àú⁄Y›Àô\‹‹ŸJ
N¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àù\ôŸ]H€›\òŸKù\ôŸ]ò€€ôJ
N¬ÇB]\Àú⁄Y›»H€›\òŸKú⁄Y›Àò€€ôJ
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€\‹»[XöY[ùY⁄^[ô»Y⁄¬ÇÇX€€ú›ùX›‹ä€€‹ã[ù[ú⁄]H
H¬ÇÇB\›\\ä€€‹ã[ù[ú⁄]H
N¬ÇÇB]\Àö\–[XöY[ùY⁄HùYN¬ÇÇB]\Àù\HH	–[XöY[ùY⁄	Œ¬ÇÇ_BÇüBÇò€\‹»ôX›\ôXSY⁄^[ô»Y⁄¬ÇÇX€€ú›ùX›‹ä€€‹ã[ù[ú⁄]K⁄YHLZY⁄HL
H¬ÇÇB\›\\ä€€‹ã[ù[ú⁄]H
N¬ÇÇB]\Àö\‘ôX›\ôXSY⁄HùYN¬ÇÇB]\Àù\HH	‘ôX›\ôXSY⁄	Œ¬ÇÇB]\Àù⁄YH⁄Y¬ÇB]\ÀöZY⁄HZY⁄¬ÇÇ_BÇÇYŸ]›Ÿ\ä
H¬ÇÇBKÀ»€€\]HHY⁄	‹»[Z[õ›\»›Ÿ\à
[à[Y[ú Húõ€H]»[ù[ú⁄]H
[àö] BÇB\ô]\õà\Àö[ù[ú⁄]H
à\Àù⁄Y
à\ÀöZY⁄
àX]îN¬ÇÇ_BÇÇ\Ÿ]›Ÿ\ä›Ÿ\à
H¬ÇÇBKÀ»Ÿ]HY⁄	‹»[ù[ú⁄]H
[àö] Húõ€HH\⁄\ôY[Z[õ›\»›Ÿ\à
[à[Y[ú BÇB]\Àö[ù[ú⁄]HH›Ÿ\à»
\Àù⁄Y
à\ÀöZY⁄
àX]îH
N¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àù⁄YH€›\òŸKù⁄Y¬ÇB]\ÀöZY⁄H€›\òŸKöZY⁄¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ]“î””äY]H
H¬ÇÇBX€€ú›]HH›\\ãù“î””äY]H
N¬ÇÇBY]KõÿöôX›ù⁄YH\Àù⁄Y¬ÇBY]KõÿöôX›öZY⁄H\ÀöZY⁄¬ÇÇB\ô]\õà]N¬ÇÇ_BÇüBÇã äÇà
àö[X\ûHôYô\ô[òŸNÇà
àŒãÀŸ‹ò\X‹Àú›[ôõ‹ôôYK‹\\úÀŸ[ùõX\Ÿ[ùõX\úÇà
Çà
àŸX€€ô\ûHôYô\ô[òŸNÇà
àŒãÀ›››Àú€ÿ[ãõ‹ôÀ‹XõXÿ][€úÀ‘›\Y“ÕãúÇà
ã¬ÇãÀ»ÀXò[ô“Yö[ôYûHH€ŸYôöX⁄Y[ù¬Çò€\‹»‹\öXÿ[\õ[€öX‹Ã»¬ÇÇX€€ú›ùX›‹ä
H¬ÇÇB]\Àö\‘‹\öXÿ[\õ[€öX‹Ã»HùYN¬ÇÇB]\Àò€ŸYôöX⁄Y[ù»H◊N¬ÇÇBYõ‹à
]HH»HN»H
 »
H¬ÇÇBB]\Àò€ŸYôöX⁄Y[ùÀú\⁄
ô]»ôX›‹å 
H
N¬ÇÇB_BÇÇ_BÇÇ\Ÿ]
€ŸYôöX⁄Y[ù»
H¬ÇÇBYõ‹à
]HH»HN»H
 »
H¬ÇÇBB]\Àò€ŸYôöX⁄Y[ù÷»HKò€‹J€ŸYôöX⁄Y[ù÷»HH
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ^ô\õ 
H¬ÇÇBYõ‹à
]HH»HN»H
 »
H¬ÇÇBB]\Àò€ŸYôöX⁄Y[ù÷»HKúŸ]

N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇKÀ»Ÿ]HòYX[òŸH[àH\ôX›[€àŸàHõ‹õX[ÇKÀ»\ôŸ]\»HôX›‹å¬ÇYŸ]]
õ‹õX[\ôŸ]
H¬ÇÇBKÀ»õ‹õX[\»\‹›[YY»ôH[ö][ô›ÇÇBX€€ú›Hõ‹õX[ûHHõ‹õX[ûKàHõ‹õX[ûé¬ÇÇBX€€ú›€ŸYôàH\Àò€ŸYôöX⁄Y[ùŒ¬ÇÇBKÀ»ò[ôÇB]\ôŸ]ò€‹J€ŸYôñ»H
Kõ][\Tÿÿ[\äåéåMH
N¬ÇÇBKÀ»ò[ôBÇB]\ôŸ]òYÿÿ[YôX›‹ä€ŸYôñ»HKçå»
àH
N¬ÇB]\ôŸ]òYÿÿ[YôX›‹ä€ŸYôñ»àKçå»
àà
N¬ÇB]\ôŸ]òYÿÿ[YôX›‹ä€ŸYôñ»»Kçå»
à
N¬ÇÇBKÀ»ò[ôÇÇB]\ôŸ]òYÿÿ[YôX›‹ä€ŸYôñ»KKåLçM
à

àH
H
N¬ÇB]\ôŸ]òYÿÿ[YôX›‹ä€ŸYôñ»HKKåLçM
à
H
àà
H
N¬ÇB]\ôŸ]òYÿÿ[YôX›‹ä€ŸYôñ»àKåÃMLŒLà
à
Àå
àà
ààHKå
H
N¬ÇB]\ôŸ]òYÿÿ[YôX›‹ä€ŸYôñ»»KKåLçM
à

àà
H
N¬ÇB]\ôŸ]òYÿÿ[YôX›‹ä€ŸYôñ»KçMåçÕ
à

àHH
àH
H
N¬ÇÇB\ô]\õà\ôŸ]¬ÇÇ_BÇÇKÀ»Ÿ]H\úòYX[òŸH
òYX[òŸH€€ùõ€ôY⁄]€‹⁄[ôHÿôJH[àH\ôX›[€àŸàHõ‹õX[ÇKÀ»\ôŸ]\»HôX›‹å¬ÇKÀ»ŒãÀŸ‹ò\X‹Àú›[ôõ‹ôôYK‹\\úÀŸ[ùõX\Ÿ[ùõX\úÇÇYŸ]\úòYX[òŸP]
õ‹õX[\ôŸ]
H¬ÇÇBKÀ»õ‹õX[\»\‹›[YY»ôH[ö][ô›ÇÇBX€€ú›Hõ‹õX[ûHHõ‹õX[ûKàHõ‹õX[ûé¬ÇÇBX€€ú›€ŸYôàH\Àò€ŸYôöX⁄Y[ùŒ¬ÇÇBKÀ»ò[ôÇB]\ôŸ]ò€‹J€ŸYôñ»H
Kõ][\Tÿÿ[\äéååç»
N»À»3‡
àåéåMBÇÇBKÀ»ò[ôBÇB]\ôŸ]òYÿÿ[YôX›‹ä€ŸYôñ»HKãå
àçLLMçç
àH
N»À»
à
à3‡»»
H
àçå¬ÇB]\ôŸ]òYÿÿ[YôX›‹ä€ŸYôñ»àKãå
àçLLMçç
àà
N¬ÇB]\ôŸ]òYÿÿ[YôX›‹ä€ŸYôñ»»Kãå
àçLLMçç
à
N¬ÇÇBKÀ»ò[ôÇÇB]\ôŸ]òYÿÿ[YôX›‹ä€ŸYôñ»Kãå
àçéL»
à
àH
N»À»
3‡»
H
àKåLçMÇB]\ôŸ]òYÿÿ[YôX›‹ä€ŸYôñ»HKãå
àçéL»
àH
àà
N¬ÇB]\ôŸ]òYÿÿ[YôX›‹ä€ŸYôñ»àKçÕÃLçH
àà
ààHåçÕÃ
N»À»
3‡»
H
àåÃMLŒLà
à¬ÇB]\ôŸ]òYÿÿ[YôX›‹ä€ŸYôñ»»Kãå
àçéL»
à
àà
N¬ÇB]\ôŸ]òYÿÿ[YôX›‹ä€ŸYôñ»KçéL»
à

àHH
àH
H
N»À»
3‡»
H
àçMåçÕÇÇB\ô]\õà\ôŸ]¬ÇÇ_BÇÇXY
⁄
H¬ÇÇBYõ‹à
]HH»HN»H
 »
H¬ÇÇBB]\Àò€ŸYôöX⁄Y[ù÷»HKòY
⁄ò€ŸYôöX⁄Y[ù÷»HH
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇXYÿÿ[Y“
⁄»
H¬ÇÇBYõ‹à
]HH»HN»H
 »
H¬ÇÇBB]\Àò€ŸYôöX⁄Y[ù÷»HKòYÿÿ[YôX›‹ä⁄ò€ŸYôöX⁄Y[ù÷»HK»
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\ÿÿ[J»
H¬ÇÇBYõ‹à
]HH»HN»H
 »
H¬ÇÇBB]\Àò€ŸYôöX⁄Y[ù÷»HKõ][\Tÿÿ[\ä»
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ[\ú
⁄[H
H¬ÇÇBYõ‹à
]HH»HN»H
 »
H¬ÇÇBB]\Àò€ŸYôöX⁄Y[ù÷»HKõ\ú
⁄ò€ŸYôöX⁄Y[ù÷»HK[H
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇY\]X[ ⁄
H¬ÇÇBYõ‹à
]HH»HN»H
 »
H¬ÇÇBBZYà
H\Àò€ŸYôöX⁄Y[ù÷»HKô\]X[ ⁄ò€ŸYôöX⁄Y[ù÷»HH
H
H¬ÇÇBBB\ô]\õàò[ŸN¬ÇÇBB_BÇÇB_BÇÇB\ô]\õàùYN¬ÇÇ_BÇÇX€‹J⁄
H¬ÇÇB\ô]\õà\ÀúŸ]
⁄ò€ŸYôöX⁄Y[ù»
N¬ÇÇ_BÇÇX€€ôJ
H¬ÇÇB\ô]\õàô]»\Àò€€ú›ùX›‹ä
Kò€‹J\»
N¬ÇÇ_BÇÇYúõ€P\úò^J\úò^KŸôúŸ]H
H¬ÇÇBX€€ú›€ŸYôöX⁄Y[ù»H\Àò€ŸYôöX⁄Y[ùŒ¬ÇÇBYõ‹à
]HH»HN»H
 »
H¬ÇÇBBX€ŸYôöX⁄Y[ù÷»HKôúõ€P\úò^J\úò^KŸôúŸ]
»
H
à»
H
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ]–\úò^J\úò^HH◊KŸôúŸ]H
H¬ÇÇBX€€ú›€ŸYôöX⁄Y[ù»H\Àò€ŸYôöX⁄Y[ùŒ¬ÇÇBYõ‹à
]HH»HN»H
 »
H¬ÇÇBBX€ŸYôöX⁄Y[ù÷»HKù–\úò^J\úò^KŸôúŸ]
»
H
à»
H
N¬ÇÇB_BÇÇB\ô]\õà\úò^N¬ÇÇ_BÇÇKÀ»]ò[X]HHò\⁄\»ù[ò›[€ú¬ÇKÀ»⁄ò\⁄\»\»[à\úò^V»HBÇ\›]X»Ÿ]ò\⁄\–]
õ‹õX[⁄ò\⁄\»
H¬ÇÇBKÀ»õ‹õX[\»\‹›[YY»ôH[ö][ô›ÇÇBX€€ú›Hõ‹õX[ûHHõ‹õX[ûKàHõ‹õX[ûé¬ÇÇBKÀ»ò[ôÇB\⁄ò\⁄\÷»HHåéåMN¬ÇÇBKÀ»ò[ôBÇB\⁄ò\⁄\÷»HHHçå»
àN¬ÇB\⁄ò\⁄\÷»àHHçå»
àé¬ÇB\⁄ò\⁄\÷»»HHçå»
à¬ÇÇBKÀ»ò[ôÇÇB\⁄ò\⁄\÷»HHKåLçM
à
àN¬ÇB\⁄ò\⁄\÷»HHHKåLçM
àH
àé¬ÇB\⁄ò\⁄\÷»àHHåÃMLŒLà
à
»
àà
ààHH
N¬ÇB\⁄ò\⁄\÷»»HHKåLçM
à
àé¬ÇB\⁄ò\⁄\÷»HHçMåçÕ
à

àHH
àH
N¬ÇÇ_BÇüBÇò€\‹»Y⁄õÿôH^[ô»Y⁄¬ÇÇX€€ú›ùX›‹ä⁄Hô]»‹\öXÿ[\õ[€öX‹Ã 
K[ù[ú⁄]HHH
H¬ÇÇB\›\\ä[ôYö[ôY[ù[ú⁄]H
N¬ÇÇB]\Àö\”Y⁄õÿôHHùYN¬ÇÇB]\Àú⁄H⁄¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àú⁄ò€‹J€›\òŸKú⁄
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇYúõ€Rî””äú€€à
H¬ÇÇB]\Àö[ù[ú⁄]HHú€€ãö[ù[ú⁄]N»À»—Œà[›ôH\»ö]»Y⁄ôúõ€Rî””ä
N¬ÇB]\Àú⁄ôúõ€P\úò^Jú€€ãú⁄
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ]“î””äY]H
H¬ÇÇBX€€ú›]HH›\\ãù“î””äY]H
N¬ÇÇBY]KõÿöôX›ú⁄H\Àú⁄ù–\úò^J
N¬ÇÇB\ô]\õà]N¬ÇÇ_BÇüBÇò€\‹»X]\öX[ÿY\à^[ô»ÿY\à¬ÇÇX€€ú›ùX›‹äX[òYŸ\à
H¬ÇÇB\›\\äX[òYŸ\à
N¬ÇB]\Àù^\ô\»HﬂN¬ÇÇ_BÇÇ[ÿY
\õ€ìÿY€îõŸ‹ô\‹À€ë\úõ‹à
H¬ÇÇBX€€ú›ÿ€‹HH\Œ¬ÇÇBX€€ú›ÿY\àHô]»ö[SÿY\äÿ€‹KõX[òYŸ\à
N¬ÇB[ÿY\ãúŸ]]
ÿ€‹Kú]
N¬ÇB[ÿY\ãúŸ]ô\]Y\›XY\äÿ€‹Kúô\]Y\›XY\à
N¬ÇB[ÿY\ãúŸ]⁄]‹ôY[ùX[ ÿ€‹Kù⁄]‹ôY[ùX[»
N¬ÇB[ÿY\ãõÿY
\õù[ò›[€à
^
H¬ÇÇBB]ûH¬ÇÇBBB[€ìÿY
ÿ€‹Kú\úŸJî””ãú\úŸJ^
H
H
N¬ÇÇBB_Hÿ]⁄
H
H¬ÇÇBBBZYà
€ë\úõ‹à
H¬ÇÇBBBB[€ë\úõ‹äH
N¬ÇÇBBB_H[ŸH¬ÇÇBBBBX€€ú€€Kô\úõ‹äH
N¬ÇÇBBB_BÇÇBBB\ÿ€‹KõX[òYŸ\ãö][Q\úõ‹ä\õ
N¬ÇÇBB_BÇÇB_K€îõŸ‹ô\‹À€ë\úõ‹à
N¬ÇÇ_BÇÇ\\úŸJú€€à
H¬ÇÇBX€€ú›^\ô\»H\Àù^\ô\Œ¬ÇÇBYù[ò›[€àŸ]^\ôJò[YH
H¬ÇÇBBZYà
^\ô\÷»ò[YHHOOH[ôYö[ôY
H¬ÇÇBBBX€€ú€€Kùÿ\õä	’ëQKìX]\öX[ÿY\éà[ôYö[ôY^\ôIÀò[YH
N¬ÇÇBB_BÇÇBB\ô]\õà^\ô\÷»ò[YHN¬ÇÇB_BÇÇBX€€ú›X]\öX[H\Àò‹ôX]SX]\öX[úõ€U\Jú€€ãù\H
N¬ÇÇBZYà
ú€€ãù]ZYOOH[ôYö[ôY
HX]\öX[ù]ZYHú€€ãù]ZY¬ÇBZYà
ú€€ãõò[YHOOH[ôYö[ôY
HX]\öX[õò[YHHú€€ãõò[YN¬ÇBZYà
ú€€ãò€€‹àOOH[ôYö[ôY	âàX]\öX[ò€€‹àOOH[ôYö[ôY
HX]\öX[ò€€‹ãúŸ]^
ú€€ãò€€‹à
N¬ÇBZYà
ú€€ãúõ›Y⁄ô\‹»OOH[ôYö[ôY
HX]\öX[úõ›Y⁄ô\‹»Hú€€ãúõ›Y⁄ô\‹Œ¬ÇBZYà
ú€€ãõY][ô\‹»OOH[ôYö[ôY
HX]\öX[õY][ô\‹»Hú€€ãõY][ô\‹Œ¬ÇBZYà
ú€€ãú⁄Y[àOOH[ôYö[ôY
HX]\öX[ú⁄Y[àHú€€ãú⁄Y[é¬ÇBZYà
ú€€ãú⁄Y[ê€€‹àOOH[ôYö[ôY
HX]\öX[ú⁄Y[ê€€‹àHô]»€€‹ä
KúŸ]^
ú€€ãú⁄Y[ê€€‹à
N¬ÇBZYà
ú€€ãú⁄Y[îõ›Y⁄ô\‹»OOH[ôYö[ôY
HX]\öX[ú⁄Y[îõ›Y⁄ô\‹»Hú€€ãú⁄Y[îõ›Y⁄ô\‹Œ¬ÇBZYà
ú€€ãô[Z\‹⁄]ôHOOH[ôYö[ôY	âàX]\öX[ô[Z\‹⁄]ôHOOH[ôYö[ôY
HX]\öX[ô[Z\‹⁄]ôKúŸ]^
ú€€ãô[Z\‹⁄]ôH
N¬ÇBZYà
ú€€ãú‹X›[\àOOH[ôYö[ôY	âàX]\öX[ú‹X›[\àOOH[ôYö[ôY
HX]\öX[ú‹X›[\ãúŸ]^
ú€€ãú‹X›[\à
N¬ÇBZYà
ú€€ãú‹X›[\í[ù[ú⁄]HOOH[ôYö[ôY
HX]\öX[ú‹X›[\í[ù[ú⁄]HHú€€ãú‹X›[\í[ù[ú⁄]N¬ÇBZYà
ú€€ãú‹X›[\ê€€‹àOOH[ôYö[ôY	âàX]\öX[ú‹X›[\ê€€‹àOOH[ôYö[ôY
HX]\öX[ú‹X›[\ê€€‹ãúŸ]^
ú€€ãú‹X›[\ê€€‹à
N¬ÇBZYà
ú€€ãú⁄[ö[ô\‹»OOH[ôYö[ôY
HX]\öX[ú⁄[ö[ô\‹»Hú€€ãú⁄[ö[ô\‹Œ¬ÇBZYà
ú€€ãò€X\ò€ÿ]OOH[ôYö[ôY
HX]\öX[ò€X\ò€ÿ]Hú€€ãò€X\ò€ÿ]¬ÇBZYà
ú€€ãò€X\ò€ÿ]õ›Y⁄ô\‹»OOH[ôYö[ôY
HX]\öX[ò€X\ò€ÿ]õ›Y⁄ô\‹»Hú€€ãò€X\ò€ÿ]õ›Y⁄ô\‹Œ¬ÇBZYà
ú€€ãô\‹\ú⁄[€àOOH[ôYö[ôY
HX]\öX[ô\‹\ú⁄[€àHú€€ãô\‹\ú⁄[€é¬ÇBZYà
ú€€ãö\öY\ÿŸ[òŸHOOH[ôYö[ôY
HX]\öX[ö\öY\ÿŸ[òŸHHú€€ãö\öY\ÿŸ[òŸN¬ÇBZYà
ú€€ãö\öY\ÿŸ[òŸRS‘àOOH[ôYö[ôY
HX]\öX[ö\öY\ÿŸ[òŸRS‘àHú€€ãö\öY\ÿŸ[òŸRS‘é¬ÇBZYà
ú€€ãö\öY\ÿŸ[òŸUX⁄€ô\‹‘ò[ôŸHOOH[ôYö[ôY
HX]\öX[ö\öY\ÿŸ[òŸUX⁄€ô\‹‘ò[ôŸHHú€€ãö\öY\ÿŸ[òŸUX⁄€ô\‹‘ò[ôŸN¬ÇBZYà
ú€€ãùò[ú€Z\‹⁄[€àOOH[ôYö[ôY
HX]\öX[ùò[ú€Z\‹⁄[€àHú€€ãùò[ú€Z\‹⁄[€é¬ÇBZYà
ú€€ãùX⁄€ô\‹»OOH[ôYö[ôY
HX]\öX[ùX⁄€ô\‹»Hú€€ãùX⁄€ô\‹Œ¬ÇBZYà
ú€€ãò][ùX][€ë\›[òŸHOOH[ôYö[ôY
HX]\öX[ò][ùX][€ë\›[òŸHHú€€ãò][ùX][€ë\›[òŸN¬ÇBZYà
ú€€ãò][ùX][€ê€€‹àOOH[ôYö[ôY	âàX]\öX[ò][ùX][€ê€€‹àOOH[ôYö[ôY
HX]\öX[ò][ùX][€ê€€‹ãúŸ]^
ú€€ãò][ùX][€ê€€‹à
N¬ÇBZYà
ú€€ãò[ö\€›õ‹HOOH[ôYö[ôY
HX]\öX[ò[ö\€›õ‹HHú€€ãò[ö\€›õ‹N¬ÇBZYà
ú€€ãò[ö\€›õ‹Tõ›][€àOOH[ôYö[ôY
HX]\öX[ò[ö\€›õ‹Tõ›][€àHú€€ãò[ö\€›õ‹Tõ›][€é¬ÇBZYà
ú€€ãôõŸ»OOH[ôYö[ôY
HX]\öX[ôõŸ»Hú€€ãôõŸŒ¬ÇBZYà
ú€€ãôõ]⁄Y[ô»OOH[ôYö[ôY
HX]\öX[ôõ]⁄Y[ô»Hú€€ãôõ]⁄Y[ôŒ¬ÇBZYà
ú€€ãòõ[ô[ô»OOH[ôYö[ôY
HX]\öX[òõ[ô[ô»Hú€€ãòõ[ô[ôŒ¬ÇBZYà
ú€€ãò€€Xö[ôHOOH[ôYö[ôY
HX]\öX[ò€€Xö[ôHHú€€ãò€€Xö[ôN¬ÇBZYà
ú€€ãú⁄YHOOH[ôYö[ôY
HX]\öX[ú⁄YHHú€€ãú⁄YN¬ÇBZYà
ú€€ãú⁄Y›‘⁄YHOOH[ôYö[ôY
HX]\öX[ú⁄Y›‘⁄YHHú€€ãú⁄Y›‘⁄YN¬ÇBZYà
ú€€ãõ‹X⁄]HOOH[ôYö[ôY
HX]\öX[õ‹X⁄]HHú€€ãõ‹X⁄]N¬ÇBZYà
ú€€ãùò[ú‹\ô[ùOOH[ôYö[ôY
HX]\öX[ùò[ú‹\ô[ùHú€€ãùò[ú‹\ô[ù¬ÇBZYà
ú€€ãò[U\›OOH[ôYö[ôY
HX]\öX[ò[U\›Hú€€ãò[U\›¬ÇBZYà
ú€€ãò[R\⁄OOH[ôYö[ôY
HX]\öX[ò[R\⁄Hú€€ãò[R\⁄¬ÇBZYà
ú€€ãô\ù[ò»OOH[ôYö[ôY
HX]\öX[ô\ù[ò»Hú€€ãô\ù[òŒ¬ÇBZYà
ú€€ãô\\›OOH[ôYö[ôY
HX]\öX[ô\\›Hú€€ãô\\›¬ÇBZYà
ú€€ãô\‹ö]HOOH[ôYö[ôY
HX]\öX[ô\‹ö]HHú€€ãô\‹ö]N¬ÇBZYà
ú€€ãò€€‹ï‹ö]HOOH[ôYö[ôY
HX]\öX[ò€€‹ï‹ö]HHú€€ãò€€‹ï‹ö]N¬ÇBZYà
ú€€ãòõ[ô‹ò»OOH[ôYö[ôY
HX]\öX[òõ[ô‹ò»Hú€€ãòõ[ô‹òŒ¬ÇBZYà
ú€€ãòõ[ô›OOH[ôYö[ôY
HX]\öX[òõ[ô›Hú€€ãòõ[ô›¬ÇBZYà
ú€€ãòõ[ô\]X][€àOOH[ôYö[ôY
HX]\öX[òõ[ô\]X][€àHú€€ãòõ[ô\]X][€é¬ÇBZYà
ú€€ãòõ[ô‹ò–[HOOH[ôYö[ôY
HX]\öX[òõ[ô‹ò–[HHú€€ãòõ[ô‹ò–[N¬ÇBZYà
ú€€ãòõ[ô›[HOOH[ôYö[ôY
HX]\öX[òõ[ô›[HHú€€ãòõ[ô›[N¬ÇBZYà
ú€€ãòõ[ô\]X][€ê[HOOH[ôYö[ôY
HX]\öX[òõ[ô\]X][€ê[HHú€€ãòõ[ô\]X][€ê[N¬ÇBZYà
ú€€ãòõ[ô€€‹àOOH[ôYö[ôY	âàX]\öX[òõ[ô€€‹àOOH[ôYö[ôY
HX]\öX[òõ[ô€€‹ãúŸ]^
ú€€ãòõ[ô€€‹à
N¬ÇBZYà
ú€€ãòõ[ô[HOOH[ôYö[ôY
HX]\öX[òõ[ô[HHú€€ãòõ[ô[N¬ÇBZYà
ú€€ãú›[ò⁄[‹ö]SX\⁄»OOH[ôYö[ôY
HX]\öX[ú›[ò⁄[‹ö]SX\⁄»Hú€€ãú›[ò⁄[‹ö]SX\⁄Œ¬ÇBZYà
ú€€ãú›[ò⁄[ù[ò»OOH[ôYö[ôY
HX]\öX[ú›[ò⁄[ù[ò»Hú€€ãú›[ò⁄[ù[òŒ¬ÇBZYà
ú€€ãú›[ò⁄[ôYàOOH[ôYö[ôY
HX]\öX[ú›[ò⁄[ôYàHú€€ãú›[ò⁄[ôYé¬ÇBZYà
ú€€ãú›[ò⁄[ù[ò”X\⁄»OOH[ôYö[ôY
HX]\öX[ú›[ò⁄[ù[ò”X\⁄»Hú€€ãú›[ò⁄[ù[ò”X\⁄Œ¬ÇBZYà
ú€€ãú›[ò⁄[òZ[OOH[ôYö[ôY
HX]\öX[ú›[ò⁄[òZ[Hú€€ãú›[ò⁄[òZ[¬ÇBZYà
ú€€ãú›[ò⁄[ëòZ[OOH[ôYö[ôY
HX]\öX[ú›[ò⁄[ëòZ[Hú€€ãú›[ò⁄[ëòZ[¬ÇBZYà
ú€€ãú›[ò⁄[î\‹»OOH[ôYö[ôY
HX]\öX[ú›[ò⁄[î\‹»Hú€€ãú›[ò⁄[î\‹Œ¬ÇBZYà
ú€€ãú›[ò⁄[‹ö]HOOH[ôYö[ôY
HX]\öX[ú›[ò⁄[‹ö]HHú€€ãú›[ò⁄[‹ö]N¬ÇÇBZYà
ú€€ãù⁄\ôYúò[YHOOH[ôYö[ôY
HX]\öX[ù⁄\ôYúò[YHHú€€ãù⁄\ôYúò[YN¬ÇBZYà
ú€€ãù⁄\ôYúò[YS[ô]⁄YOOH[ôYö[ôY
HX]\öX[ù⁄\ôYúò[YS[ô]⁄YHú€€ãù⁄\ôYúò[YS[ô]⁄Y¬ÇBZYà
ú€€ãù⁄\ôYúò[YS[ôXÿ\OOH[ôYö[ôY
HX]\öX[ù⁄\ôYúò[YS[ôXÿ\Hú€€ãù⁄\ôYúò[YS[ôXÿ\¬ÇBZYà
ú€€ãù⁄\ôYúò[YS[ôZõ⁄[àOOH[ôYö[ôY
HX]\öX[ù⁄\ôYúò[YS[ôZõ⁄[àHú€€ãù⁄\ôYúò[YS[ôZõ⁄[é¬ÇÇBZYà
ú€€ãúõ›][€àOOH[ôYö[ôY
HX]\öX[úõ›][€àHú€€ãúõ›][€é¬ÇÇBZYà
ú€€ãõ[ô]⁄YOOH[ôYö[ôY
HX]\öX[õ[ô]⁄YHú€€ãõ[ô]⁄Y¬ÇBZYà
ú€€ãô\⁄⁄^ôHOOH[ôYö[ôY
HX]\öX[ô\⁄⁄^ôHHú€€ãô\⁄⁄^ôN¬ÇBZYà
ú€€ãôÿ\⁄^ôHOOH[ôYö[ôY
HX]\öX[ôÿ\⁄^ôHHú€€ãôÿ\⁄^ôN¬ÇBZYà
ú€€ãúÿÿ[HOOH[ôYö[ôY
HX]\öX[úÿÿ[HHú€€ãúÿÿ[N¬ÇÇBZYà
ú€€ãú€Y€€ìŸôúŸ]OOH[ôYö[ôY
HX]\öX[ú€Y€€ìŸôúŸ]Hú€€ãú€Y€€ìŸôúŸ]¬ÇBZYà
ú€€ãú€Y€€ìŸôúŸ]òX›‹àOOH[ôYö[ôY
HX]\öX[ú€Y€€ìŸôúŸ]òX›‹àHú€€ãú€Y€€ìŸôúŸ]òX›‹é¬ÇBZYà
ú€€ãú€Y€€ìŸôúŸ][ö]»OOH[ôYö[ôY
HX]\öX[ú€Y€€ìŸôúŸ][ö]»Hú€€ãú€Y€€ìŸôúŸ][ö]Œ¬ÇÇBZYà
ú€€ãô]\ö[ô»OOH[ôYö[ôY
HX]\öX[ô]\ö[ô»Hú€€ãô]\ö[ôŒ¬ÇÇBZYà
ú€€ãò[U–€›ô\òYŸHOOH[ôYö[ôY
HX]\öX[ò[U–€›ô\òYŸHHú€€ãò[U–€›ô\òYŸN¬ÇBZYà
ú€€ãúô[][\YY[HOOH[ôYö[ôY
HX]\öX[úô[][\YY[HHú€€ãúô[][\YY[N¬ÇBZYà
ú€€ãôõ‹òŸT⁄[ô€T\‹»OOH[ôYö[ôY
HX]\öX[ôõ‹òŸT⁄[ô€T\‹»Hú€€ãôõ‹òŸT⁄[ô€T\‹Œ¬ÇÇBZYà
ú€€ãùö\⁄XõHOOH[ôYö[ôY
HX]\öX[ùö\⁄XõHHú€€ãùö\⁄XõN¬ÇÇBZYà
ú€€ãù€ôSX\YOOH[ôYö[ôY
HX]\öX[ù€ôSX\YHú€€ãù€ôSX\Y¬ÇÇBZYà
ú€€ãù\Ÿ\ë]HOOH[ôYö[ôY
HX]\öX[ù\Ÿ\ë]HHú€€ãù\Ÿ\ë]N¬ÇÇBZYà
ú€€ãùô\ù^€€‹ú»OOH[ôYö[ôY
H¬ÇÇBBZYà
\[Ÿàú€€ãùô\ù^€€‹ú»OOH	€ù[Xô\â»
H¬ÇÇBBB[X]\öX[ùô\ù^€€‹ú»H
ú€€ãùô\ù^€€‹ú»à
H»ùYHàò[ŸN¬ÇÇBB_H[ŸH¬ÇÇBBB[X]\öX[ùô\ù^€€‹ú»Hú€€ãùô\ù^€€‹úŒ¬ÇÇBB_BÇÇB_BÇÇBKÀ»⁄Y\àX]\öX[ÇÇBZYà
ú€€ãù[öYõ‹õ\»OOH[ôYö[ôY
H¬ÇÇBBYõ‹à
€€ú›ò[YH[àú€€ãù[öYõ‹õ\»
H¬ÇÇBBBX€€ú›[öYõ‹õHHú€€ãù[öYõ‹õ\÷»ò[YHN¬ÇÇBBB[X]\öX[ù[öYõ‹õ\÷»ò[YHHHﬂN¬ÇÇBBB\›⁄]⁄
[öYõ‹õKù\H
H¬ÇÇBBBBXÿ\ŸH	›	ŒÇÇBBBBB[X]\öX[ù[öYõ‹õ\÷»ò[YHKùò[YHHŸ]^\ôJ[öYõ‹õKùò[YH
N¬ÇBBBBBXúôXZŒ¬ÇÇBBBBXÿ\ŸH	ÿ…ŒÇÇBBBBB[X]\öX[ù[öYõ‹õ\÷»ò[YHKùò[YHHô]»€€‹ä
KúŸ]^
[öYõ‹õKùò[YH
N¬ÇBBBBBXúôXZŒ¬ÇÇBBBBXÿ\ŸH	›åâŒÇÇBBBBB[X]\öX[ù[öYõ‹õ\÷»ò[YHKùò[YHHô]»ôX›‹åä
Kôúõ€P\úò^J[öYõ‹õKùò[YH
N¬ÇBBBBBXúôXZŒ¬ÇÇBBBBXÿ\ŸH	›å…ŒÇÇBBBBB[X]\öX[ù[öYõ‹õ\÷»ò[YHKùò[YHHô]»ôX›‹å 
Kôúõ€P\úò^J[öYõ‹õKùò[YH
N¬ÇBBBBBXúôXZŒ¬ÇÇBBBBXÿ\ŸH	›ç	ŒÇÇBBBBB[X]\öX[ù[öYõ‹õ\÷»ò[YHKùò[YHHô]»ôX›‹ç

Kôúõ€P\úò^J[öYõ‹õKùò[YH
N¬ÇBBBBBXúôXZŒ¬ÇÇBBBBXÿ\ŸH	€L…ŒÇÇBBBBB[X]\öX[ù[öYõ‹õ\÷»ò[YHKùò[YHHô]»X]ö^ 
Kôúõ€P\úò^J[öYõ‹õKùò[YH
N¬ÇBBBBBXúôXZŒ¬ÇÇBBBBXÿ\ŸH	€M	ŒÇÇBBBBB[X]\öX[ù[öYõ‹õ\÷»ò[YHKùò[YHHô]»X]ö^

Kôúõ€P\úò^J[öYõ‹õKùò[YH
N¬ÇBBBBBXúôXZŒ¬ÇÇBBBBYYò][ÇÇBBBBB[X]\öX[ù[öYõ‹õ\÷»ò[YHKùò[YHH[öYõ‹õKùò[YN¬ÇÇBBB_BÇÇBB_BÇÇB_BÇÇBZYà
ú€€ãôYö[ô\»OOH[ôYö[ôY
HX]\öX[ôYö[ô\»Hú€€ãôYö[ô\Œ¬ÇBZYà
ú€€ãùô\ù^⁄Y\àOOH[ôYö[ôY
HX]\öX[ùô\ù^⁄Y\àHú€€ãùô\ù^⁄Y\é¬ÇBZYà
ú€€ãôúòY€Y[ù⁄Y\àOOH[ôYö[ôY
HX]\öX[ôúòY€Y[ù⁄Y\àHú€€ãôúòY€Y[ù⁄Y\é¬ÇBZYà
ú€€ãô€€ô\ú⁄[€àOOH[ôYö[ôY
HX]\öX[ô€€ô\ú⁄[€àHú€€ãô€€ô\ú⁄[€é¬ÇÇBZYà
ú€€ãô^[ú⁄[€ú»OOH[ôYö[ôY
H¬ÇÇBBYõ‹à
€€ú›Ÿ^H[àú€€ãô^[ú⁄[€ú»
H¬ÇÇBBB[X]\öX[ô^[ú⁄[€ú÷»Ÿ^HHHú€€ãô^[ú⁄[€ú÷»Ÿ^HN¬ÇÇBB_BÇÇB_BÇÇBZYà
ú€€ãõY⁄»OOH[ôYö[ôY
HX]\öX[õY⁄»Hú€€ãõY⁄Œ¬ÇBZYà
ú€€ãò€\[ô»OOH[ôYö[ôY
HX]\öX[ò€\[ô»Hú€€ãò€\[ôŒ¬ÇÇBKÀ»õ‹à⁄[ù”X]\öX[ÇÇBZYà
ú€€ãú⁄^ôHOOH[ôYö[ôY
HX]\öX[ú⁄^ôHHú€€ãú⁄^ôN¬ÇBZYà
ú€€ãú⁄^ôP][ùX][€àOOH[ôYö[ôY
HX]\öX[ú⁄^ôP][ùX][€àHú€€ãú⁄^ôP][ùX][€é¬ÇÇBKÀ»X\¬ÇÇBZYà
ú€€ãõX\OOH[ôYö[ôY
HX]\öX[õX\HŸ]^\ôJú€€ãõX\
N¬ÇBZYà
ú€€ãõX]ÿ\OOH[ôYö[ôY
HX]\öX[õX]ÿ\HŸ]^\ôJú€€ãõX]ÿ\
N¬ÇÇBZYà
ú€€ãò[SX\OOH[ôYö[ôY
HX]\öX[ò[SX\HŸ]^\ôJú€€ãò[SX\
N¬ÇÇBZYà
ú€€ãòù[\X\OOH[ôYö[ôY
HX]\öX[òù[\X\HŸ]^\ôJú€€ãòù[\X\
N¬ÇBZYà
ú€€ãòù[\ÿÿ[HOOH[ôYö[ôY
HX]\öX[òù[\ÿÿ[HHú€€ãòù[\ÿÿ[N¬ÇÇBZYà
ú€€ãõõ‹õX[X\OOH[ôYö[ôY
HX]\öX[õõ‹õX[X\HŸ]^\ôJú€€ãõõ‹õX[X\
N¬ÇBZYà
ú€€ãõõ‹õX[X\\HOOH[ôYö[ôY
HX]\öX[õõ‹õX[X\\HHú€€ãõõ‹õX[X\\N¬ÇBZYà
ú€€ãõõ‹õX[ÿÿ[HOOH[ôYö[ôY
H¬ÇÇBB[]õ‹õX[ÿÿ[HHú€€ãõõ‹õX[ÿÿ[N¬ÇÇBBZYà
\úò^Kö\–\úò^Jõ‹õX[ÿÿ[H
HOOHò[ŸH
H¬ÇÇBBBKÀ»õ[ô\à^‹ù\à\ŸY»^‹ùHÿÿ[\ãàŸYHÕÕNBÇÇBBB[õ‹õX[ÿÿ[HH»õ‹õX[ÿÿ[Kõ‹õX[ÿÿ[HN¬ÇÇBB_BÇÇBB[X]\öX[õõ‹õX[ÿÿ[HHô]»ôX›‹åä
Kôúõ€P\úò^Jõ‹õX[ÿÿ[H
N¬ÇÇB_BÇÇBZYà
ú€€ãô\‹XŸ[Y[ùX\OOH[ôYö[ôY
HX]\öX[ô\‹XŸ[Y[ùX\HŸ]^\ôJú€€ãô\‹XŸ[Y[ùX\
N¬ÇBZYà
ú€€ãô\‹XŸ[Y[ùÿÿ[HOOH[ôYö[ôY
HX]\öX[ô\‹XŸ[Y[ùÿÿ[HHú€€ãô\‹XŸ[Y[ùÿÿ[N¬ÇBZYà
ú€€ãô\‹XŸ[Y[ùöX\»OOH[ôYö[ôY
HX]\öX[ô\‹XŸ[Y[ùöX\»Hú€€ãô\‹XŸ[Y[ùöX\Œ¬ÇÇBZYà
ú€€ãúõ›Y⁄ô\‹”X\OOH[ôYö[ôY
HX]\öX[úõ›Y⁄ô\‹”X\HŸ]^\ôJú€€ãúõ›Y⁄ô\‹”X\
N¬ÇBZYà
ú€€ãõY][ô\‹”X\OOH[ôYö[ôY
HX]\öX[õY][ô\‹”X\HŸ]^\ôJú€€ãõY][ô\‹”X\
N¬ÇÇBZYà
ú€€ãô[Z\‹⁄]ôSX\OOH[ôYö[ôY
HX]\öX[ô[Z\‹⁄]ôSX\HŸ]^\ôJú€€ãô[Z\‹⁄]ôSX\
N¬ÇBZYà
ú€€ãô[Z\‹⁄]ôR[ù[ú⁄]HOOH[ôYö[ôY
HX]\öX[ô[Z\‹⁄]ôR[ù[ú⁄]HHú€€ãô[Z\‹⁄]ôR[ù[ú⁄]N¬ÇÇBZYà
ú€€ãú‹X›[\ìX\OOH[ôYö[ôY
HX]\öX[ú‹X›[\ìX\HŸ]^\ôJú€€ãú‹X›[\ìX\
N¬ÇBZYà
ú€€ãú‹X›[\í[ù[ú⁄]SX\OOH[ôYö[ôY
HX]\öX[ú‹X›[\í[ù[ú⁄]SX\HŸ]^\ôJú€€ãú‹X›[\í[ù[ú⁄]SX\
N¬ÇBZYà
ú€€ãú‹X›[\ê€€‹ìX\OOH[ôYö[ôY
HX]\öX[ú‹X›[\ê€€‹ìX\HŸ]^\ôJú€€ãú‹X›[\ê€€‹ìX\
N¬ÇÇBZYà
ú€€ãô[ùìX\OOH[ôYö[ôY
HX]\öX[ô[ùìX\HŸ]^\ôJú€€ãô[ùìX\
N¬ÇBZYà
ú€€ãô[ùìX\õ›][€àOOH[ôYö[ôY
HX]\öX[ô[ùìX\õ›][€ãôúõ€P\úò^Jú€€ãô[ùìX\õ›][€à
N¬ÇBZYà
ú€€ãô[ùìX\[ù[ú⁄]HOOH[ôYö[ôY
HX]\öX[ô[ùìX\[ù[ú⁄]HHú€€ãô[ùìX\[ù[ú⁄]N¬ÇÇBZYà
ú€€ãúôYõX›]ö]HOOH[ôYö[ôY
HX]\öX[úôYõX›]ö]HHú€€ãúôYõX›]ö]N¬ÇBZYà
ú€€ãúôYúòX›[€îò][»OOH[ôYö[ôY
HX]\öX[úôYúòX›[€îò][»Hú€€ãúôYúòX›[€îò][Œ¬ÇÇBZYà
ú€€ãõY⁄X\OOH[ôYö[ôY
HX]\öX[õY⁄X\HŸ]^\ôJú€€ãõY⁄X\
N¬ÇBZYà
ú€€ãõY⁄X\[ù[ú⁄]HOOH[ôYö[ôY
HX]\öX[õY⁄X\[ù[ú⁄]HHú€€ãõY⁄X\[ù[ú⁄]N¬ÇÇBZYà
ú€€ãò[”X\OOH[ôYö[ôY
HX]\öX[ò[”X\HŸ]^\ôJú€€ãò[”X\
N¬ÇBZYà
ú€€ãò[”X\[ù[ú⁄]HOOH[ôYö[ôY
HX]\öX[ò[”X\[ù[ú⁄]HHú€€ãò[”X\[ù[ú⁄]N¬ÇÇBZYà
ú€€ãô‹òYY[ùX\OOH[ôYö[ôY
HX]\öX[ô‹òYY[ùX\HŸ]^\ôJú€€ãô‹òYY[ùX\
N¬ÇÇBZYà
ú€€ãò€X\ò€ÿ]X\OOH[ôYö[ôY
HX]\öX[ò€X\ò€ÿ]X\HŸ]^\ôJú€€ãò€X\ò€ÿ]X\
N¬ÇBZYà
ú€€ãò€X\ò€ÿ]õ›Y⁄ô\‹”X\OOH[ôYö[ôY
HX]\öX[ò€X\ò€ÿ]õ›Y⁄ô\‹”X\HŸ]^\ôJú€€ãò€X\ò€ÿ]õ›Y⁄ô\‹”X\
N¬ÇBZYà
ú€€ãò€X\ò€ÿ]õ‹õX[X\OOH[ôYö[ôY
HX]\öX[ò€X\ò€ÿ]õ‹õX[X\HŸ]^\ôJú€€ãò€X\ò€ÿ]õ‹õX[X\
N¬ÇBZYà
ú€€ãò€X\ò€ÿ]õ‹õX[ÿÿ[HOOH[ôYö[ôY
HX]\öX[ò€X\ò€ÿ]õ‹õX[ÿÿ[HHô]»ôX›‹åä
Kôúõ€P\úò^Jú€€ãò€X\ò€ÿ]õ‹õX[ÿÿ[H
N¬ÇÇBZYà
ú€€ãö\öY\ÿŸ[òŸSX\OOH[ôYö[ôY
HX]\öX[ö\öY\ÿŸ[òŸSX\HŸ]^\ôJú€€ãö\öY\ÿŸ[òŸSX\
N¬ÇBZYà
ú€€ãö\öY\ÿŸ[òŸUX⁄€ô\‹”X\OOH[ôYö[ôY
HX]\öX[ö\öY\ÿŸ[òŸUX⁄€ô\‹”X\HŸ]^\ôJú€€ãö\öY\ÿŸ[òŸUX⁄€ô\‹”X\
N¬ÇÇBZYà
ú€€ãùò[ú€Z\‹⁄[€ìX\OOH[ôYö[ôY
HX]\öX[ùò[ú€Z\‹⁄[€ìX\HŸ]^\ôJú€€ãùò[ú€Z\‹⁄[€ìX\
N¬ÇBZYà
ú€€ãùX⁄€ô\‹”X\OOH[ôYö[ôY
HX]\öX[ùX⁄€ô\‹”X\HŸ]^\ôJú€€ãùX⁄€ô\‹”X\
N¬ÇÇBZYà
ú€€ãò[ö\€›õ‹SX\OOH[ôYö[ôY
HX]\öX[ò[ö\€›õ‹SX\HŸ]^\ôJú€€ãò[ö\€›õ‹SX\
N¬ÇÇBZYà
ú€€ãú⁄Y[ê€€‹ìX\OOH[ôYö[ôY
HX]\öX[ú⁄Y[ê€€‹ìX\HŸ]^\ôJú€€ãú⁄Y[ê€€‹ìX\
N¬ÇBZYà
ú€€ãú⁄Y[îõ›Y⁄ô\‹”X\OOH[ôYö[ôY
HX]\öX[ú⁄Y[îõ›Y⁄ô\‹”X\HŸ]^\ôJú€€ãú⁄Y[îõ›Y⁄ô\‹”X\
N¬ÇÇB\ô]\õàX]\öX[¬ÇÇ_BÇÇ\Ÿ]^\ô\ ò[YH
H¬ÇÇB]\Àù^\ô\»Hò[YN¬ÇB\ô]\õà\Œ¬ÇÇ_BÇÇX‹ôX]SX]\öX[úõ€U\J\H
H¬ÇÇB\ô]\õàX]\öX[ÿY\ãò‹ôX]SX]\öX[úõ€U\J\H
N¬ÇÇ_BÇÇ\›]X»‹ôX]SX]\öX[úõ€U\J\H
H¬ÇÇBX€€ú›X]\öX[XàH¬ÇBBT⁄Y›”X]\öX[ÇBBT‹ö]SX]\öX[ÇBBTò]‘⁄Y\ìX]\öX[ÇBBT⁄Y\ìX]\öX[ÇBBT⁄[ù”X]\öX[ÇBBSY\⁄\⁄Xÿ[X]\öX[ÇBBSY\⁄›[ô\ôX]\öX[ÇBBSY\⁄€ô”X]\öX[ÇBBSY\⁄€€ìX]\öX[ÇBBSY\⁄õ‹õX[X]\öX[ÇBBSY\⁄[Xô\ùX]\öX[ÇBBSY\⁄\X]\öX[ÇBBSY\⁄\›[òŸSX]\öX[ÇBBSY\⁄ò\⁄X”X]\öX[ÇBBSY\⁄X]ÿ\X]\öX[ÇBBS[ôQ\⁄YX]\öX[ÇBBS[ôPò\⁄X”X]\öX[ÇBBSX]\öX[ÇB_N¬ÇÇB\ô]\õàô]»X]\öX[Xñ»\HJ
N¬ÇÇ_BÇüBÇò€\‹»ÿY\ï][»¬ÇÇ\›]X»X€ŸU^
\úò^H
H»À»\ôXÿ]YåMçBÇÇBX€€ú€€Kùÿ\õä	’ëQKìÿY\ï][ŒàX€ŸU^

H\»ôY[à\ôXÿ]Y⁄]åMçH[ô⁄[ôHô[[›ôY⁄]åMÕKà\ŸH^X€Ÿ\à[ú›XYâ»
N¬ÇÇBZYà
\[Ÿà^X€Ÿ\àOOH	›[ôYö[ôY	»
H¬ÇÇBB\ô]\õàô]»^X€Ÿ\ä
KôX€ŸJ\úò^H
N¬ÇÇB_BÇÇBKÀ»]õ⁄YH›ö[ôÀôúõ€P⁄\ê€ŸKò\Jù[\úò^JH⁄‹ù›]⁄X⁄ÇBKÀ»õ›‹»HõX^[][Hÿ[›X⁄»⁄^ôH^ŸYYYà\úõ‹àõ‹à\ôŸH\úò^\ÀÇÇÇB[]»H	…Œ¬ÇÇBYõ‹à
]HH[H\úò^Kõ[ô›»H[»H
 »
H¬ÇÇBBKÀ»[\X⁄]H\‹›[Y\»]KY[ôX[ãÇÇBB\»
œH›ö[ôÀôúõ€P⁄\ê€ŸJ\úò^V»HH
N¬ÇÇB_BÇÇB]ûH¬ÇÇBBKÀ»Y\ôŸ\»][KXû]H]ãN⁄\òX›\úÀÇÇÇBB\ô]\õàX€ŸUTíP€€\€ô[ù
\ÿÿ\J»
H
N¬ÇÇB_Hÿ]⁄
H
H»À»ŸYHÃMåÕNÇÇBB\ô]\õàŒ¬ÇÇB_BÇÇ_BÇÇ\›]X»^òX›\õò\ŸJ\õ
H¬ÇÇBX€€ú›[ô^H\õõ\›[ô^Ÿä	À…»
N¬ÇÇBZYà
[ô^OOHHH
Hô]\õà	Àã…Œ¬ÇÇB\ô]\õà\õú€XŸJ[ô^
»H
N¬ÇÇ_BÇÇ\›]X»ô\€€ôUTì
\õ]
H¬ÇÇBKÀ»[ùò[YTìÇBZYà
\[Ÿà\õOOH	‹›ö[ô…»\õOOH	…»
Hô]\õà	…Œ¬ÇÇBKÀ»‹›ô[]]ôHTìÇBZYà
◊öœŒó◊À⁄Kù\›
]
H	âà◊óÀÀù\›
\õ
H
H¬ÇÇBB\]H]úô\XŸJ öœŒó◊÷◊ó◊J Käã⁄K	…I»
N¬ÇÇB_BÇÇBKÀ»Xú€€]HTìãÀÀŒãÀÀÀ¬ÇBZYà
◊äœŒäO◊◊À⁄Kù\›
\õ
H
Hô]\õà\õ¬ÇÇBKÀ»]HTíBÇBZYà
◊ô]Nãäãäâ⁄Kù\›
\õ
H
Hô]\õà\õ¬ÇÇBKÀ»õÿàTìÇBZYà
◊òõÿéãäâ⁄Kù\›
\õ
H
Hô]\õà\õ¬ÇÇBKÀ»ô[]]ôHTìÇB\ô]\õà]
»\õ¬ÇÇ_BÇüBÇò€\‹»[ú›[òŸYùYôô\ëŸ[€Y]ûH^[ô»ùYôô\ëŸ[€Y]ûH¬ÇÇX€€ú›ùX›‹ä
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àö\“[ú›[òŸYùYôô\ëŸ[€Y]ûHHùYN¬ÇÇB]\Àù\HH	“[ú›[òŸYùYôô\ëŸ[€Y]ûIŒ¬ÇB]\Àö[ú›[òŸP€›[ùH[ôö[ö]N¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\Àö[ú›[òŸP€›[ùH€›\òŸKö[ú›[òŸP€›[ù¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ]“î””ä
H¬ÇÇBX€€ú›]HH›\\ãù“î””ä
N¬ÇÇBY]Kö[ú›[òŸP€›[ùH\Àö[ú›[òŸP€›[ù¬ÇÇBY]Kö\“[ú›[òŸYùYôô\ëŸ[€Y]ûHHùYN¬ÇÇB\ô]\õà]N¬ÇÇ_BÇüBÇò€\‹»ùYôô\ëŸ[€Y]ûSÿY\à^[ô»ÿY\à¬ÇÇX€€ú›ùX›‹äX[òYŸ\à
H¬ÇÇB\›\\äX[òYŸ\à
N¬ÇÇ_BÇÇ[ÿY
\õ€ìÿY€îõŸ‹ô\‹À€ë\úõ‹à
H¬ÇÇBX€€ú›ÿ€‹HH\Œ¬ÇÇBX€€ú›ÿY\àHô]»ö[SÿY\äÿ€‹KõX[òYŸ\à
N¬ÇB[ÿY\ãúŸ]]
ÿ€‹Kú]
N¬ÇB[ÿY\ãúŸ]ô\]Y\›XY\äÿ€‹Kúô\]Y\›XY\à
N¬ÇB[ÿY\ãúŸ]⁄]‹ôY[ùX[ ÿ€‹Kù⁄]‹ôY[ùX[»
N¬ÇB[ÿY\ãõÿY
\õù[ò›[€à
^
H¬ÇÇBB]ûH¬ÇÇBBB[€ìÿY
ÿ€‹Kú\úŸJî””ãú\úŸJ^
H
H
N¬ÇÇBB_Hÿ]⁄
H
H¬ÇÇBBBZYà
€ë\úõ‹à
H¬ÇÇBBBB[€ë\úõ‹äH
N¬ÇÇBBB_H[ŸH¬ÇÇBBBBX€€ú€€Kô\úõ‹äH
N¬ÇÇBBB_BÇÇBBB\ÿ€‹KõX[òYŸ\ãö][Q\úõ‹ä\õ
N¬ÇÇBB_BÇÇB_K€îõŸ‹ô\‹À€ë\úõ‹à
N¬ÇÇ_BÇÇ\\úŸJú€€à
H¬ÇÇBX€€ú›[ù\õX]ôYùYôô\ìX\HﬂN¬ÇBX€€ú›\úò^PùYôô\ìX\HﬂN¬ÇÇBYù[ò›[€àŸ][ù\õX]ôYùYôô\äú€€ã]ZY
H¬ÇÇBBZYà
[ù\õX]ôYùYôô\ìX\»]ZYHOOH[ôYö[ôY
Hô]\õà[ù\õX]ôYùYôô\ìX\»]ZYN¬ÇÇBBX€€ú›[ù\õX]ôYùYôô\ú»Hú€€ãö[ù\õX]ôYùYôô\úŒ¬ÇBBX€€ú›[ù\õX]ôYùYôô\àH[ù\õX]ôYùYôô\ú÷»]ZYN¬ÇÇBBX€€ú›ùYôô\àHŸ]\úò^PùYôô\äú€€ã[ù\õX]ôYùYôô\ãòùYôô\à
N¬ÇÇBBX€€ú›\úò^HHŸ]\Y\úò^J[ù\õX]ôYùYôô\ãù\KùYôô\à
N¬ÇBBX€€ú›XàHô]»[ù\õX]ôYùYôô\ä\úò^K[ù\õX]ôYùYôô\ãú›öYH
N¬ÇBBZXãù]ZYH[ù\õX]ôYùYôô\ãù]ZY¬ÇÇBBZ[ù\õX]ôYùYôô\ìX\»]ZYHHXé¬ÇÇBB\ô]\õàXé¬ÇÇB_BÇÇBYù[ò›[€àŸ]\úò^PùYôô\äú€€ã]ZY
H¬ÇÇBBZYà
\úò^PùYôô\ìX\»]ZYHOOH[ôYö[ôY
Hô]\õà\úò^PùYôô\ìX\»]ZYN¬ÇÇBBX€€ú›\úò^PùYôô\ú»Hú€€ãò\úò^PùYôô\úŒ¬ÇBBX€€ú›\úò^PùYôô\àH\úò^PùYôô\ú÷»]ZYN¬ÇÇBBX€€ú›XàHô]»Z[ùÃê\úò^J\úò^PùYôô\à
KòùYôô\é¬ÇÇBBX\úò^PùYôô\ìX\»]ZYHHXé¬ÇÇBB\ô]\õàXé¬ÇÇB_BÇÇBX€€ú›Ÿ[€Y]ûHHú€€ãö\“[ú›[òŸYùYôô\ëŸ[€Y]ûH»ô]»[ú›[òŸYùYôô\ëŸ[€Y]ûJ
Hàô]»ùYôô\ëŸ[€Y]ûJ
N¬ÇÇBX€€ú›[ô^Hú€€ãô]Kö[ô^¬ÇÇBZYà
[ô^OOH[ôYö[ôY
H¬ÇÇBBX€€ú›\Y\úò^HHŸ]\Y\úò^J[ô^ù\K[ô^ò\úò^H
N¬ÇBBYŸ[€Y]ûKúŸ][ô^
ô]»ùYôô\ê]öXù]J\Y\úò^KH
H
N¬ÇÇB_BÇÇBX€€ú›]öXù]\»Hú€€ãô]Kò]öXù]\Œ¬ÇÇBYõ‹à
€€ú›Ÿ^H[à]öXù]\»
H¬ÇÇBBX€€ú›]öXù]HH]öXù]\÷»Ÿ^HN¬ÇBB[]ùYôô\ê]öXù]N¬ÇÇBBZYà
]öXù]Kö\“[ù\õX]ôYùYôô\ê]öXù]H
H¬ÇÇBBBX€€ú›[ù\õX]ôYùYôô\àHŸ][ù\õX]ôYùYôô\äú€€ãô]K]öXù]Kô]H
N¬ÇBBBXùYôô\ê]öXù]HHô]»[ù\õX]ôYùYôô\ê]öXù]J[ù\õX]ôYùYôô\ã]öXù]Kö][T⁄^ôK]öXù]KõŸôúŸ]]öXù]Kõõ‹õX[^ôY
N¬ÇÇBB_H[ŸH¬ÇÇBBBX€€ú›\Y\úò^HHŸ]\Y\úò^J]öXù]Kù\K]öXù]Kò\úò^H
N¬ÇBBBX€€ú›ùYôô\ê]öXù]P€€ú›àH]öXù]Kö\“[ú›[òŸYùYôô\ê]öXù]H»[ú›[òŸYùYôô\ê]öXù]HàùYôô\ê]öXù]N¬ÇBBBXùYôô\ê]öXù]HHô]»ùYôô\ê]öXù]P€€ú›ä\Y\úò^K]öXù]Kö][T⁄^ôK]öXù]Kõõ‹õX[^ôY
N¬ÇÇBB_BÇÇBBZYà
]öXù]Kõò[YHOOH[ôYö[ôY
HùYôô\ê]öXù]Kõò[YHH]öXù]Kõò[YN¬ÇBBZYà
]öXù]Kù\ÿYŸHOOH[ôYö[ôY
HùYôô\ê]öXù]KúŸ]\ÿYŸJ]öXù]Kù\ÿYŸH
N¬ÇÇBBYŸ[€Y]ûKúŸ]]öXù]JŸ^KùYôô\ê]öXù]H
N¬ÇÇB_BÇÇBX€€ú›[‹ú]öXù]\»Hú€€ãô]Kõ[‹ú]öXù]\Œ¬ÇÇBZYà
[‹ú]öXù]\»
H¬ÇÇBBYõ‹à
€€ú›Ÿ^H[à[‹ú]öXù]\»
H¬ÇÇBBBX€€ú›]öXù]P\úò^HH[‹ú]öXù]\÷»Ÿ^HN¬ÇÇBBBX€€ú›\úò^HH◊N¬ÇÇBBBYõ‹à
]HH[H]öXù]P\úò^Kõ[ô›»H[»H
 »
H¬ÇÇBBBBX€€ú›]öXù]HH]öXù]P\úò^V»HN¬ÇBBBB[]ùYôô\ê]öXù]N¬ÇÇBBBBZYà
]öXù]Kö\“[ù\õX]ôYùYôô\ê]öXù]H
H¬ÇÇBBBBBX€€ú›[ù\õX]ôYùYôô\àHŸ][ù\õX]ôYùYôô\äú€€ãô]K]öXù]Kô]H
N¬ÇBBBBBXùYôô\ê]öXù]HHô]»[ù\õX]ôYùYôô\ê]öXù]J[ù\õX]ôYùYôô\ã]öXù]Kö][T⁄^ôK]öXù]KõŸôúŸ]]öXù]Kõõ‹õX[^ôY
N¬ÇÇBBBB_H[ŸH¬ÇÇBBBBBX€€ú›\Y\úò^HHŸ]\Y\úò^J]öXù]Kù\K]öXù]Kò\úò^H
N¬ÇBBBBBXùYôô\ê]öXù]HHô]»ùYôô\ê]öXù]J\Y\úò^K]öXù]Kö][T⁄^ôK]öXù]Kõõ‹õX[^ôY
N¬ÇÇBBBB_BÇÇBBBBZYà
]öXù]Kõò[YHOOH[ôYö[ôY
HùYôô\ê]öXù]Kõò[YHH]öXù]Kõò[YN¬ÇBBBBX\úò^Kú\⁄
ùYôô\ê]öXù]H
N¬ÇÇBBB_BÇÇBBBYŸ[€Y]ûKõ[‹ú]öXù]\÷»Ÿ^HHH\úò^N¬ÇÇBB_BÇÇB_BÇÇBX€€ú›[‹ú\ôŸ]‘ô[]]ôHHú€€ãô]Kõ[‹ú\ôŸ]‘ô[]]ôN¬ÇÇBZYà
[‹ú\ôŸ]‘ô[]]ôH
H¬ÇÇBBYŸ[€Y]ûKõ[‹ú\ôŸ]‘ô[]]ôHHùYN¬ÇÇB_BÇÇBX€€ú›‹õ›\»Hú€€ãô]Kô‹õ›\»ú€€ãô]Kôò]ÿÿ[»ú€€ãô]KõŸôúŸ]Œ¬ÇÇBZYà
‹õ›\»OOH[ôYö[ôY
H¬ÇÇBBYõ‹à
]HHàH‹õ›\Àõ[ô›»HOOHé»
 »H
H¬ÇÇBBBX€€ú›‹õ›\H‹õ›\÷»HN¬ÇÇBBBYŸ[€Y]ûKòY‹õ›\
‹õ›\ú›\ù‹õ›\ò€›[ù‹õ›\õX]\öX[[ô^
N¬ÇÇBB_BÇÇB_BÇÇBX€€ú›õ›[ô[ô‘‹\ôHHú€€ãô]Kòõ›[ô[ô‘‹\ôN¬ÇÇBZYà
õ›[ô[ô‘‹\ôHOOH[ôYö[ôY
H¬ÇÇBBX€€ú›Ÿ[ù\àHô]»ôX›‹å 
N¬ÇÇBBZYà
õ›[ô[ô‘‹\ôKòŸ[ù\àOOH[ôYö[ôY
H¬ÇÇBBBXŸ[ù\ãôúõ€P\úò^Jõ›[ô[ô‘‹\ôKòŸ[ù\à
N¬ÇÇBB_BÇÇBBYŸ[€Y]ûKòõ›[ô[ô‘‹\ôHHô]»‹\ôJŸ[ù\ãõ›[ô[ô‘‹\ôKúòY]\»
N¬ÇÇB_BÇÇBZYà
ú€€ãõò[YH
HŸ[€Y]ûKõò[YHHú€€ãõò[YN¬ÇBZYà
ú€€ãù\Ÿ\ë]H
HŸ[€Y]ûKù\Ÿ\ë]HHú€€ãù\Ÿ\ë]N¬ÇÇB\ô]\õàŸ[€Y]ûN¬ÇÇ_BÇüBÇò€\‹»ÿöôX›ÿY\à^[ô»ÿY\à¬ÇÇX€€ú›ùX›‹äX[òYŸ\à
H¬ÇÇB\›\\äX[òYŸ\à
N¬ÇÇ_BÇÇ[ÿY
\õ€ìÿY€îõŸ‹ô\‹À€ë\úõ‹à
H¬ÇÇBX€€ú›ÿ€‹HH\Œ¬ÇÇBX€€ú›]H
\Àú]OOH	…»
H»ÿY\ï][Àô^òX›\õò\ŸJ\õ
Hà\Àú]¬ÇB]\Àúô\€›\òŸT]H\Àúô\€›\òŸT]]¬ÇÇBX€€ú›ÿY\àHô]»ö[SÿY\ä\ÀõX[òYŸ\à
N¬ÇB[ÿY\ãúŸ]]
\Àú]
N¬ÇB[ÿY\ãúŸ]ô\]Y\›XY\ä\Àúô\]Y\›XY\à
N¬ÇB[ÿY\ãúŸ]⁄]‹ôY[ùX[ \Àù⁄]‹ôY[ùX[»
N¬ÇB[ÿY\ãõÿY
\õù[ò›[€à
^
H¬ÇÇBB[]ú€€àHù[¬ÇÇBB]ûH¬ÇÇBBBZú€€àHî””ãú\úŸJ^
N¬ÇÇBB_Hÿ]⁄
\úõ‹à
H¬ÇÇBBBZYà
€ë\úõ‹àOOH[ôYö[ôY
H€ë\úõ‹ä\úõ‹à
N¬ÇÇBBBX€€ú€€Kô\úõ‹ä	’ëQNìÿöôX›ÿY\éàÿ[ó	›\úŸH	»
»\õ
»	ÀâÀ\úõ‹ãõY\‹ÿYŸH
N¬ÇÇBBB\ô]\õé¬ÇÇBB_BÇÇBBX€€ú›Y]Y]HHú€€ãõY]Y]N¬ÇÇBBZYà
Y]Y]HOOH[ôYö[ôYY]Y]Kù\HOOH[ôYö[ôYY]Y]Kù\Kù”›Ÿ\êÿ\ŸJ
HOOH	ŸŸ[€Y]ûI»
H¬ÇÇBBBZYà
€ë\úõ‹àOOH[ôYö[ôY
H€ë\úõ‹äô]»\úõ‹ä	’ëQKìÿöôX›ÿY\éàÿ[ó	›ÿY	»
»\õ
H
N¬ÇÇBBBX€€ú€€Kô\úõ‹ä	’ëQKìÿöôX›ÿY\éàÿ[ó	›ÿY	»
»\õ
N¬ÇBBB\ô]\õé¬ÇÇBB_BÇÇBB\ÿ€‹Kú\úŸJú€€ã€ìÿY
N¬ÇÇB_K€îõŸ‹ô\‹À€ë\úõ‹à
N¬ÇÇ_BÇÇX\ﬁ[ò»ÿY\ﬁ[ò \õ€îõŸ‹ô\‹»
H¬ÇÇBX€€ú›ÿ€‹HH\Œ¬ÇÇBX€€ú›]H
\Àú]OOH	…»
H»ÿY\ï][Àô^òX›\õò\ŸJ\õ
Hà\Àú]¬ÇB]\Àúô\€›\òŸT]H\Àúô\€›\òŸT]]¬ÇÇBX€€ú›ÿY\àHô]»ö[SÿY\ä\ÀõX[òYŸ\à
N¬ÇB[ÿY\ãúŸ]]
\Àú]
N¬ÇB[ÿY\ãúŸ]ô\]Y\›XY\ä\Àúô\]Y\›XY\à
N¬ÇB[ÿY\ãúŸ]⁄]‹ôY[ùX[ \Àù⁄]‹ôY[ùX[»
N¬ÇÇBX€€ú›^H]ÿZ]ÿY\ãõÿY\ﬁ[ò \õ€îõŸ‹ô\‹»
N¬ÇÇBX€€ú›ú€€àHî””ãú\úŸJ^
N¬ÇÇBX€€ú›Y]Y]HHú€€ãõY]Y]N¬ÇÇBZYà
Y]Y]HOOH[ôYö[ôYY]Y]Kù\HOOH[ôYö[ôYY]Y]Kù\Kù”›Ÿ\êÿ\ŸJ
HOOH	ŸŸ[€Y]ûI»
H¬ÇÇBB]õ›»ô]»\úõ‹ä	’ëQKìÿöôX›ÿY\éàÿ[ó	›ÿY	»
»\õ
N¬ÇÇB_BÇÇB\ô]\õà]ÿZ]ÿ€‹Kú\úŸP\ﬁ[ò ú€€à
N¬ÇÇ_BÇÇ\\úŸJú€€ã€ìÿY
H¬ÇÇBX€€ú›[ö[X][€ú»H\Àú\úŸP[ö[X][€ú ú€€ãò[ö[X][€ú»
N¬ÇBX€€ú›⁄\\»H\Àú\úŸT⁄\\ ú€€ãú⁄\\»
N¬ÇBX€€ú›Ÿ[€Y]öY\»H\Àú\úŸQŸ[€Y]öY\ ú€€ãôŸ[€Y]öY\À⁄\\»
N¬ÇÇBX€€ú›[XYŸ\»H\Àú\úŸR[XYŸ\ ú€€ãö[XYŸ\Àù[ò›[€à

H¬ÇÇBBZYà
€ìÿYOOH[ôYö[ôY
H€ìÿY
ÿöôX›
N¬ÇÇB_H
N¬ÇÇBX€€ú›^\ô\»H\Àú\úŸU^\ô\ ú€€ãù^\ô\À[XYŸ\»
N¬ÇBX€€ú›X]\öX[»H\Àú\úŸSX]\öX[ ú€€ãõX]\öX[À^\ô\»
N¬ÇÇBX€€ú›ÿöôX›H\Àú\úŸSÿöôX›
ú€€ãõÿöôX›Ÿ[€Y]öY\ÀX]\öX[À^\ô\À[ö[X][€ú»
N¬ÇBX€€ú›⁄Ÿ[]€ú»H\Àú\úŸT⁄Ÿ[]€ú ú€€ãú⁄Ÿ[]€úÀÿöôX›
N¬ÇÇB]\Àòö[ô⁄Ÿ[]€ú ÿöôX›⁄Ÿ[]€ú»
N¬ÇB]\Àòö[ôY⁄\ôŸ] ÿöôX›
N¬ÇÇBKÀ¬ÇÇBZYà
€ìÿYOOH[ôYö[ôY
H¬ÇÇBB[]\“[XYŸ\»Hò[ŸN¬ÇÇBBYõ‹à
€€ú›]ZY[à[XYŸ\»
H¬ÇÇBBBZYà
[XYŸ\÷»]ZYKô]H[ú›[òŸ[ŸàS[XYŸQ[[Y[ù
H¬ÇÇBBBBZ\“[XYŸ\»HùYN¬ÇBBBBXúôXZŒ¬ÇÇBBB_BÇÇBB_BÇÇBBZYà
\“[XYŸ\»OOHò[ŸH
H€ìÿY
ÿöôX›
N¬ÇÇB_BÇÇB\ô]\õàÿöôX›¬ÇÇ_BÇÇX\ﬁ[ò»\úŸP\ﬁ[ò ú€€à
H¬ÇÇBX€€ú›[ö[X][€ú»H\Àú\úŸP[ö[X][€ú ú€€ãò[ö[X][€ú»
N¬ÇBX€€ú›⁄\\»H\Àú\úŸT⁄\\ ú€€ãú⁄\\»
N¬ÇBX€€ú›Ÿ[€Y]öY\»H\Àú\úŸQŸ[€Y]öY\ ú€€ãôŸ[€Y]öY\À⁄\\»
N¬ÇÇBX€€ú›[XYŸ\»H]ÿZ]\Àú\úŸR[XYŸ\–\ﬁ[ò ú€€ãö[XYŸ\»
N¬ÇÇBX€€ú›^\ô\»H\Àú\úŸU^\ô\ ú€€ãù^\ô\À[XYŸ\»
N¬ÇBX€€ú›X]\öX[»H\Àú\úŸSX]\öX[ ú€€ãõX]\öX[À^\ô\»
N¬ÇÇBX€€ú›ÿöôX›H\Àú\úŸSÿöôX›
ú€€ãõÿöôX›Ÿ[€Y]öY\ÀX]\öX[À^\ô\À[ö[X][€ú»
N¬ÇBX€€ú›⁄Ÿ[]€ú»H\Àú\úŸT⁄Ÿ[]€ú ú€€ãú⁄Ÿ[]€úÀÿöôX›
N¬ÇÇB]\Àòö[ô⁄Ÿ[]€ú ÿöôX›⁄Ÿ[]€ú»
N¬ÇB]\Àòö[ôY⁄\ôŸ] ÿöôX›
N¬ÇÇB\ô]\õàÿöôX›¬ÇÇ_BÇÇ\\úŸT⁄\\ ú€€à
H¬ÇÇBX€€ú›⁄\\»HﬂN¬ÇÇBZYà
ú€€àOOH[ôYö[ôY
H¬ÇÇBBYõ‹à
]HHHú€€ãõ[ô›»H»H
 »
H¬ÇÇBBBX€€ú›⁄\HHô]»⁄\J
Kôúõ€Rî””äú€€ñ»HH
N¬ÇÇBBB\⁄\\÷»⁄\Kù]ZYHH⁄\N¬ÇÇBB_BÇÇB_BÇÇB\ô]\õà⁄\\Œ¬ÇÇ_BÇÇ\\úŸT⁄Ÿ[]€ú ú€€ãÿöôX›
H¬ÇÇBX€€ú›⁄Ÿ[]€ú»HﬂN¬ÇBX€€ú›õ€ô\»HﬂN¬ÇÇBKÀ»Ÿ[ô\ò]Hõ€ôH€⁄›\XõBÇÇB[ÿöôX›ùò]ô\úŸJù[ò›[€à
⁄[
H¬ÇÇBBZYà
⁄[ö\–õ€ôH
Hõ€ô\÷»⁄[ù]ZYHH⁄[¬ÇÇB_H
N¬ÇÇBKÀ»‹ôX]H⁄Ÿ[]€ú¬ÇÇBZYà
ú€€àOOH[ôYö[ôY
H¬ÇÇBBYõ‹à
]HHHú€€ãõ[ô›»H»H
 »
H¬ÇÇBBBX€€ú›⁄Ÿ[]€àHô]»⁄Ÿ[]€ä
Kôúõ€Rî””äú€€ñ»HKõ€ô\»
N¬ÇÇBBB\⁄Ÿ[]€ú÷»⁄Ÿ[]€ãù]ZYHH⁄Ÿ[]€é¬ÇÇBB_BÇÇB_BÇÇB\ô]\õà⁄Ÿ[]€úŒ¬ÇÇ_BÇÇ\\úŸQŸ[€Y]öY\ ú€€ã⁄\\»
H¬ÇÇBX€€ú›Ÿ[€Y]öY\»HﬂN¬ÇÇBZYà
ú€€àOOH[ôYö[ôY
H¬ÇÇBBX€€ú›ùYôô\ëŸ[€Y]ûSÿY\àHô]»ùYôô\ëŸ[€Y]ûSÿY\ä
N¬ÇÇBBYõ‹à
]HHHú€€ãõ[ô›»H»H
 »
H¬ÇÇBBB[]Ÿ[€Y]ûN¬ÇBBBX€€ú›]HHú€€ñ»HN¬ÇÇBBB\›⁄]⁄
]Kù\H
H¬ÇÇBBBBXÿ\ŸH	–ùYôô\ëŸ[€Y]ûIŒÇÇBBBBXÿ\ŸH	“[ú›[òŸYùYôô\ëŸ[€Y]ûIŒÇÇÇBBBBBYŸ[€Y]ûHHùYôô\ëŸ[€Y]ûSÿY\ãú\úŸJ]H
N¬ÇBBBBBXúôXZŒ¬ÇÇBBBBYYò][ÇÇÇBBBBBZYà
]Kù\H[àŸ[€Y]öY\»
H¬ÇÇBBBBBBYŸ[€Y]ûHHŸ[€Y]öY\÷»]Kù\HKôúõ€Rî””ä]K⁄\\»
N¬ÇÇBBBBB_H[ŸH¬ÇÇBBBBBBX€€ú€€Kùÿ\õäëQKìÿöôX›ÿY\éà[ú›\‹ùYŸ[€Y]ûH\Hâ»]Kù\HHò
N¬ÇÇBBBBB_BÇÇBBB_BÇÇBBBYŸ[€Y]ûKù]ZYH]Kù]ZY¬ÇÇBBBZYà
]Kõò[YHOOH[ôYö[ôY
HŸ[€Y]ûKõò[YHH]Kõò[YN¬ÇBBBZYà
]Kù\Ÿ\ë]HOOH[ôYö[ôY
HŸ[€Y]ûKù\Ÿ\ë]HH]Kù\Ÿ\ë]N¬ÇÇBBBYŸ[€Y]öY\÷»]Kù]ZYHHŸ[€Y]ûN¬ÇÇBB_BÇÇB_BÇÇB\ô]\õàŸ[€Y]öY\Œ¬ÇÇ_BÇÇ\\úŸSX]\öX[ ú€€ã^\ô\»
H¬ÇÇBX€€ú›ÿX⁄HHﬂN»À»][SX]\öX[ÇBX€€ú›X]\öX[»HﬂN¬ÇÇBZYà
ú€€àOOH[ôYö[ôY
H¬ÇÇBBX€€ú›ÿY\àHô]»X]\öX[ÿY\ä
N¬ÇBB[ÿY\ãúŸ]^\ô\ ^\ô\»
N¬ÇÇBBYõ‹à
]HHHú€€ãõ[ô›»H»H
 »
H¬ÇÇBBBX€€ú›]HHú€€ñ»HN¬ÇÇBBBZYà
ÿX⁄V»]Kù]ZYHOOH[ôYö[ôY
H¬ÇÇBBBBXÿX⁄V»]Kù]ZYHHÿY\ãú\úŸJ]H
N¬ÇÇBBB_BÇÇBBB[X]\öX[÷»]Kù]ZYHHÿX⁄V»]Kù]ZYN¬ÇÇBB_BÇÇB_BÇÇB\ô]\õàX]\öX[Œ¬ÇÇ_BÇÇ\\úŸP[ö[X][€ú ú€€à
H¬ÇÇBX€€ú›[ö[X][€ú»HﬂN¬ÇÇBZYà
ú€€àOOH[ôYö[ôY
H¬ÇÇBBYõ‹à
]HH»Hú€€ãõ[ô›»H
 »
H¬ÇÇBBBX€€ú›]HHú€€ñ»HN¬ÇÇBBBX€€ú›€\H[ö[X][€ê€\ú\úŸJ]H
N¬ÇÇBBBX[ö[X][€ú÷»€\ù]ZYHH€\¬ÇÇBB_BÇÇB_BÇÇB\ô]\õà[ö[X][€úŒ¬ÇÇ_BÇÇ\\úŸR[XYŸ\ ú€€ã€ìÿY
H¬ÇÇBX€€ú›ÿ€‹HH\Œ¬ÇBX€€ú›[XYŸ\»HﬂN¬ÇÇB[]ÿY\é¬ÇÇBYù[ò›[€àÿY[XYŸJ\õ
H¬ÇÇBB\ÿ€‹KõX[òYŸ\ãö][T›\ù
\õ
N¬ÇÇBB\ô]\õàÿY\ãõÿY
\õù[ò›[€à

H¬ÇÇBBB\ÿ€‹KõX[òYŸ\ãö][Q[ô
\õ
N¬ÇÇBB_K[ôYö[ôYù[ò›[€à

H¬ÇÇBBB\ÿ€‹KõX[òYŸ\ãö][Q\úõ‹ä\õ
N¬ÇBBB\ÿ€‹KõX[òYŸ\ãö][Q[ô
\õ
N¬ÇÇBB_H
N¬ÇÇB_BÇÇBYù[ò›[€à\Ÿ\öX[^ôR[XYŸJ[XYŸH
H¬ÇÇBBZYà
\[Ÿà[XYŸHOOH	‹›ö[ô…»
H¬ÇÇBBBX€€ú›\õH[XYŸN¬ÇÇBBBX€€ú›]H◊ä◊ _
ÿK^óJŒä◊ O K⁄Kù\›
\õ
H»\õàÿ€‹Kúô\€›\òŸT]
»\õ¬ÇÇBBB\ô]\õàÿY[XYŸJ]
N¬ÇÇBB_H[ŸH¬ÇÇBBBZYà
[XYŸKô]H
H¬ÇÇBBBB\ô]\õà¬ÇBBBBBY]NàŸ]\Y\úò^J[XYŸKù\K[XYŸKô]H
KÇBBBBB]⁄Yà[XYŸKù⁄YÇBBBBBZZY⁄à[XYŸKöZY⁄ÇBBBB_N¬ÇÇBBB_H[ŸH¬ÇÇBBBB\ô]\õàù[¬ÇÇBBB_BÇÇBB_BÇÇB_BÇÇBZYà
ú€€àOOH[ôYö[ôY	âàú€€ãõ[ô›à
H¬ÇÇBBX€€ú›X[òYŸ\àHô]»ÿY[ô”X[òYŸ\ä€ìÿY
N¬ÇÇBB[ÿY\àHô]»[XYŸSÿY\äX[òYŸ\à
N¬ÇBB[ÿY\ãúŸ]‹õ‹‹”‹öY⁄[ä\Àò‹õ‹‹”‹öY⁄[à
N¬ÇÇBBYõ‹à
]HH[Hú€€ãõ[ô›»H[»H
 »
H¬ÇÇBBBX€€ú›[XYŸHHú€€ñ»HN¬ÇBBBX€€ú›\õH[XYŸKù\õ¬ÇÇBBBZYà
\úò^Kö\–\úò^J\õ
H
H¬ÇÇBBBBKÀ»ÿY\úò^HŸà[XYŸ\»Kô»›XôU^\ôBÇÇBBBBX€€ú›[XYŸP\úò^HH◊N¬ÇÇBBBBYõ‹à
]àHõH\õõ[ô›»àõ»à
 »
H¬ÇÇBBBBBX€€ú››\úô[ù\õH\õ»àN¬ÇÇBBBBBX€€ú›\Ÿ\öX[^ôY[XYŸHH\Ÿ\öX[^ôR[XYŸJ›\úô[ù\õ
N¬ÇÇBBBBBZYà
\Ÿ\öX[^ôY[XYŸHOOHù[
H¬ÇÇBBBBBBZYà
\Ÿ\öX[^ôY[XYŸH[ú›[òŸ[ŸàS[XYŸQ[[Y[ù
H¬ÇÇBBBBBBBZ[XYŸP\úò^Kú\⁄
\Ÿ\öX[^ôY[XYŸH
N¬ÇÇBBBBBB_H[ŸH¬ÇÇBBBBBBBKÀ»‹X⁄X[ÿ\ŸNà[ôH\úò^HŸà]H^\ô\»õ‹à›XôH^\ô\¬ÇÇBBBBBBBZ[XYŸP\úò^Kú\⁄
ô]»]U^\ôJ\Ÿ\öX[^ôY[XYŸKô]K\Ÿ\öX[^ôY[XYŸKù⁄Y\Ÿ\öX[^ôY[XYŸKöZY⁄
H
N¬ÇÇBBBBBB_BÇÇBBBBB_BÇÇBBBB_BÇÇBBBBZ[XYŸ\÷»[XYŸKù]ZYHHô]»€›\òŸJ[XYŸP\úò^H
N¬ÇÇBBB_H[ŸH¬ÇÇBBBBKÀ»ÿY⁄[ô€H[XYŸBÇÇBBBBX€€ú›\Ÿ\öX[^ôY[XYŸHH\Ÿ\öX[^ôR[XYŸJ[XYŸKù\õ
N¬ÇBBBBZ[XYŸ\÷»[XYŸKù]ZYHHô]»€›\òŸJ\Ÿ\öX[^ôY[XYŸH
N¬ÇÇÇBBB_BÇÇBB_BÇÇB_BÇÇB\ô]\õà[XYŸ\Œ¬ÇÇ_BÇÇX\ﬁ[ò»\úŸR[XYŸ\–\ﬁ[ò ú€€à
H¬ÇÇBX€€ú›ÿ€‹HH\Œ¬ÇBX€€ú›[XYŸ\»HﬂN¬ÇÇB[]ÿY\é¬ÇÇBX\ﬁ[ò»ù[ò›[€à\Ÿ\öX[^ôR[XYŸJ[XYŸH
H¬ÇÇBBZYà
\[Ÿà[XYŸHOOH	‹›ö[ô…»
H¬ÇÇBBBX€€ú›\õH[XYŸN¬ÇÇBBBX€€ú›]H◊ä◊ _
ÿK^óJŒä◊ O K⁄Kù\›
\õ
H»\õàÿ€‹Kúô\€›\òŸT]
»\õ¬ÇÇBBB\ô]\õà]ÿZ]ÿY\ãõÿY\ﬁ[ò ]
N¬ÇÇBB_H[ŸH¬ÇÇBBBZYà
[XYŸKô]H
H¬ÇÇBBBB\ô]\õà¬ÇBBBBBY]NàŸ]\Y\úò^J[XYŸKù\K[XYŸKô]H
KÇBBBBB]⁄Yà[XYŸKù⁄YÇBBBBBZZY⁄à[XYŸKöZY⁄ÇBBBB_N¬ÇÇBBB_H[ŸH¬ÇÇBBBB\ô]\õàù[¬ÇÇBBB_BÇÇBB_BÇÇB_BÇÇBZYà
ú€€àOOH[ôYö[ôY	âàú€€ãõ[ô›à
H¬ÇÇBB[ÿY\àHô]»[XYŸSÿY\ä\ÀõX[òYŸ\à
N¬ÇBB[ÿY\ãúŸ]‹õ‹‹”‹öY⁄[ä\Àò‹õ‹‹”‹öY⁄[à
N¬ÇÇBBYõ‹à
]HH[Hú€€ãõ[ô›»H[»H
 »
H¬ÇÇBBBX€€ú›[XYŸHHú€€ñ»HN¬ÇBBBX€€ú›\õH[XYŸKù\õ¬ÇÇBBBZYà
\úò^Kö\–\úò^J\õ
H
H¬ÇÇBBBBKÀ»ÿY\úò^HŸà[XYŸ\»Kô»›XôU^\ôBÇÇBBBBX€€ú›[XYŸP\úò^HH◊N¬ÇÇBBBBYõ‹à
]àHõH\õõ[ô›»àõ»à
 »
H¬ÇÇBBBBBX€€ú››\úô[ù\õH\õ»àN¬ÇÇBBBBBX€€ú›\Ÿ\öX[^ôY[XYŸHH]ÿZ]\Ÿ\öX[^ôR[XYŸJ›\úô[ù\õ
N¬ÇÇBBBBBZYà
\Ÿ\öX[^ôY[XYŸHOOHù[
H¬ÇÇBBBBBBZYà
\Ÿ\öX[^ôY[XYŸH[ú›[òŸ[ŸàS[XYŸQ[[Y[ù
H¬ÇÇBBBBBBBZ[XYŸP\úò^Kú\⁄
\Ÿ\öX[^ôY[XYŸH
N¬ÇÇBBBBBB_H[ŸH¬ÇÇBBBBBBBKÀ»‹X⁄X[ÿ\ŸNà[ôH\úò^HŸà]H^\ô\»õ‹à›XôH^\ô\¬ÇÇBBBBBBBZ[XYŸP\úò^Kú\⁄
ô]»]U^\ôJ\Ÿ\öX[^ôY[XYŸKô]K\Ÿ\öX[^ôY[XYŸKù⁄Y\Ÿ\öX[^ôY[XYŸKöZY⁄
H
N¬ÇÇBBBBBB_BÇÇBBBBB_BÇÇBBBB_BÇÇBBBBZ[XYŸ\÷»[XYŸKù]ZYHHô]»€›\òŸJ[XYŸP\úò^H
N¬ÇÇBBB_H[ŸH¬ÇÇBBBBKÀ»ÿY⁄[ô€H[XYŸBÇÇBBBBX€€ú›\Ÿ\öX[^ôY[XYŸHH]ÿZ]\Ÿ\öX[^ôR[XYŸJ[XYŸKù\õ
N¬ÇBBBBZ[XYŸ\÷»[XYŸKù]ZYHHô]»€›\òŸJ\Ÿ\öX[^ôY[XYŸH
N¬ÇÇBBB_BÇÇBB_BÇÇB_BÇÇB\ô]\õà[XYŸ\Œ¬ÇÇ_BÇÇ\\úŸU^\ô\ ú€€ã[XYŸ\»
H¬ÇÇBYù[ò›[€à\úŸP€€ú›[ù
ò[YK\H
H¬ÇÇBBZYà
\[Ÿàò[YHOOH	€ù[Xô\â»
Hô]\õàò[YN¬ÇÇBBX€€ú€€Kùÿ\õä	’ëQKìÿöôX›ÿY\ãú\úŸU^\ôNà€€ú›[ù⁄›[ôH[àù[Y\öX»õ‹õKâÀò[YH
N¬ÇÇBB\ô]\õà\V»ò[YHN¬ÇÇB_BÇÇBX€€ú›^\ô\»HﬂN¬ÇÇBZYà
ú€€àOOH[ôYö[ôY
H¬ÇÇBBYõ‹à
]HHHú€€ãõ[ô›»H»H
 »
H¬ÇÇBBBX€€ú›]HHú€€ñ»HN¬ÇÇBBBZYà
]Kö[XYŸHOOH[ôYö[ôY
H¬ÇÇBBBBX€€ú€€Kùÿ\õä	’ëQKìÿöôX›ÿY\éàõ»ö[XYŸHà‹X⁄YöYYõ‹âÀ]Kù]ZY
N¬ÇÇBBB_BÇÇBBBZYà
[XYŸ\÷»]Kö[XYŸHHOOH[ôYö[ôY
H¬ÇÇBBBBX€€ú€€Kùÿ\õä	’ëQKìÿöôX›ÿY\éà[ôYö[ôY[XYŸIÀ]Kö[XYŸH
N¬ÇÇBBB_BÇÇBBBX€€ú›€›\òŸHH[XYŸ\÷»]Kö[XYŸHN¬ÇBBBX€€ú›[XYŸHH€›\òŸKô]N¬ÇÇBBB[]^\ôN¬ÇÇBBBZYà
\úò^Kö\–\úò^J[XYŸH
H
H¬ÇÇBBBB]^\ôHHô]»›XôU^\ôJ
N¬ÇÇBBBBZYà
[XYŸKõ[ô›OOHà
H^\ôKõôYY’\]HHùYN¬ÇÇBBB_H[ŸH¬ÇÇBBBBZYà
[XYŸH	âà[XYŸKô]H
H¬ÇÇBBBBB]^\ôHHô]»]U^\ôJ
N¬ÇÇBBBB_H[ŸH¬ÇÇBBBBB]^\ôHHô]»^\ôJ
N¬ÇÇBBBB_BÇÇBBBBZYà
[XYŸH
H^\ôKõôYY’\]HHùYN»À»^\ô\»ÿ[à]ôH[ôYö[ôY[XYŸH]BÇÇBBB_BÇÇBBB]^\ôKú€›\òŸHH€›\òŸN¬ÇÇBBB]^\ôKù]ZYH]Kù]ZY¬ÇÇBBBZYà
]Kõò[YHOOH[ôYö[ôY
H^\ôKõò[YHH]Kõò[YN¬ÇÇBBBZYà
]KõX\[ô»OOH[ôYö[ôY
H^\ôKõX\[ô»H\úŸP€€ú›[ù
]KõX\[ôÀVTëW”PTSë»
N¬ÇBBBZYà
]Kò⁄[õô[OOH[ôYö[ôY
H^\ôKò⁄[õô[H]Kò⁄[õô[¬ÇÇBBBZYà
]KõŸôúŸ]OOH[ôYö[ôY
H^\ôKõŸôúŸ]ôúõ€P\úò^J]KõŸôúŸ]
N¬ÇBBBZYà
]Kúô\X]OOH[ôYö[ôY
H^\ôKúô\X]ôúõ€P\úò^J]Kúô\X]
N¬ÇBBBZYà
]KòŸ[ù\àOOH[ôYö[ôY
H^\ôKòŸ[ù\ãôúõ€P\úò^J]KòŸ[ù\à
N¬ÇBBBZYà
]Kúõ›][€àOOH[ôYö[ôY
H^\ôKúõ›][€àH]Kúõ›][€é¬ÇÇBBBZYà
]Kù‹ò\OOH[ôYö[ôY
H¬ÇÇBBBB]^\ôKù‹ò\»H\úŸP€€ú›[ù
]Kù‹ò\»KVTëW’‘êTSë»
N¬ÇBBBB]^\ôKù‹ò\H\úŸP€€ú›[ù
]Kù‹ò\»HKVTëW’‘êTSë»
N¬ÇÇBBB_BÇÇBBBZYà
]Kôõ‹õX]OOH[ôYö[ôY
H^\ôKôõ‹õX]H]Kôõ‹õX]¬ÇBBBZYà
]Kö[ù\õò[õ‹õX]OOH[ôYö[ôY
H^\ôKö[ù\õò[õ‹õX]H]Kö[ù\õò[õ‹õX]¬ÇBBBZYà
]Kù\HOOH[ôYö[ôY
H^\ôKù\HH]Kù\N¬ÇBBBZYà
]Kò€€‹î‹XŸHOOH[ôYö[ôY
H^\ôKò€€‹î‹XŸHH]Kò€€‹î‹XŸN¬ÇÇBBBZYà
]KõZ[ëö[\àOOH[ôYö[ôY
H^\ôKõZ[ëö[\àH\úŸP€€ú›[ù
]KõZ[ëö[\ãVTëW—íSTà
N¬ÇBBBZYà
]KõXY—ö[\àOOH[ôYö[ôY
H^\ôKõXY—ö[\àH\úŸP€€ú›[ù
]KõXY—ö[\ãVTëW—íSTà
N¬ÇBBBZYà
]Kò[ö\€›õ‹HOOH[ôYö[ôY
H^\ôKò[ö\€›õ‹HH]Kò[ö\€›õ‹N¬ÇÇBBBZYà
]Kôõ\HOOH[ôYö[ôY
H^\ôKôõ\HH]Kôõ\N¬ÇÇBBBZYà
]KôŸ[ô\ò]SZ\X\»OOH[ôYö[ôY
H^\ôKôŸ[ô\ò]SZ\X\»H]KôŸ[ô\ò]SZ\X\Œ¬ÇBBBZYà
]Kúô[][\P[HOOH[ôYö[ôY
H^\ôKúô[][\P[HH]Kúô[][\P[N¬ÇBBBZYà
]Kù[úX⁄–[Y€õY[ùOOH[ôYö[ôY
H^\ôKù[úX⁄–[Y€õY[ùH]Kù[úX⁄–[Y€õY[ù¬ÇBBBZYà
]Kò€€\\ôQù[ò›[€àOOH[ôYö[ôY
H^\ôKò€€\\ôQù[ò›[€àH]Kò€€\\ôQù[ò›[€é¬ÇÇBBBZYà
]Kù\Ÿ\ë]HOOH[ôYö[ôY
H^\ôKù\Ÿ\ë]HH]Kù\Ÿ\ë]N¬ÇÇBBB]^\ô\÷»]Kù]ZYHH^\ôN¬ÇÇBB_BÇÇB_BÇÇB\ô]\õà^\ô\Œ¬ÇÇ_BÇÇ\\úŸSÿöôX›
]KŸ[€Y]öY\ÀX]\öX[À^\ô\À[ö[X][€ú»
H¬ÇÇB[]ÿöôX›¬ÇÇBYù[ò›[€àŸ]Ÿ[€Y]ûJò[YH
H¬ÇÇBBZYà
Ÿ[€Y]öY\÷»ò[YHHOOH[ôYö[ôY
H¬ÇÇBBBX€€ú€€Kùÿ\õä	’ëQKìÿöôX›ÿY\éà[ôYö[ôYŸ[€Y]ûIÀò[YH
N¬ÇÇBB_BÇÇBB\ô]\õàŸ[€Y]öY\÷»ò[YHN¬ÇÇB_BÇÇBYù[ò›[€àŸ]X]\öX[
ò[YH
H¬ÇÇBBZYà
ò[YHOOH[ôYö[ôY
Hô]\õà[ôYö[ôY¬ÇÇBBZYà
\úò^Kö\–\úò^Jò[YH
H
H¬ÇÇBBBX€€ú›\úò^HH◊N¬ÇÇBBBYõ‹à
]HHHò[YKõ[ô›»H»H
 »
H¬ÇÇBBBBX€€ú›]ZYHò[YV»HN¬ÇÇBBBBZYà
X]\öX[÷»]ZYHOOH[ôYö[ôY
H¬ÇÇBBBBBX€€ú€€Kùÿ\õä	’ëQKìÿöôX›ÿY\éà[ôYö[ôYX]\öX[	À]ZY
N¬ÇÇBBBB_BÇÇBBBBX\úò^Kú\⁄
X]\öX[÷»]ZYH
N¬ÇÇBBB_BÇÇBBB\ô]\õà\úò^N¬ÇÇBB_BÇÇBBZYà
X]\öX[÷»ò[YHHOOH[ôYö[ôY
H¬ÇÇBBBX€€ú€€Kùÿ\õä	’ëQKìÿöôX›ÿY\éà[ôYö[ôYX]\öX[	Àò[YH
N¬ÇÇBB_BÇÇBB\ô]\õàX]\öX[÷»ò[YHN¬ÇÇB_BÇÇBYù[ò›[€àŸ]^\ôJ]ZY
H¬ÇÇBBZYà
^\ô\÷»]ZYHOOH[ôYö[ôY
H¬ÇÇBBBX€€ú€€Kùÿ\õä	’ëQKìÿöôX›ÿY\éà[ôYö[ôY^\ôIÀ]ZY
N¬ÇÇBB_BÇÇBB\ô]\õà^\ô\÷»]ZYN¬ÇÇB_BÇÇB[]Ÿ[€Y]ûKX]\öX[¬ÇÇB\›⁄]⁄
]Kù\H
H¬ÇÇBBXÿ\ŸH	‘ÿŸ[ôIŒÇÇÇBBB[ÿöôX›Hô]»ÿŸ[ôJ
N¬ÇÇBBBZYà
]KòòX⁄Ÿ‹õ›[ôOOH[ôYö[ôY
H¬ÇÇBBBBZYà
ù[Xô\ãö\“[ùYŸ\ä]KòòX⁄Ÿ‹õ›[ô
H
H¬ÇÇBBBBB[ÿöôX›òòX⁄Ÿ‹õ›[ôHô]»€€‹ä]KòòX⁄Ÿ‹õ›[ô
N¬ÇÇBBBB_H[ŸH¬ÇÇBBBBB[ÿöôX›òòX⁄Ÿ‹õ›[ôHŸ]^\ôJ]KòòX⁄Ÿ‹õ›[ô
N¬ÇÇBBBB_BÇÇBBB_BÇÇBBBZYà
]Kô[ùö\õ€õY[ùOOH[ôYö[ôY
H¬ÇÇBBBB[ÿöôX›ô[ùö\õ€õY[ùHŸ]^\ôJ]Kô[ùö\õ€õY[ù
N¬ÇÇBBB_BÇÇBBBZYà
]KôõŸ»OOH[ôYö[ôY
H¬ÇÇBBBBZYà
]KôõŸÀù\HOOH	—õŸ…»
H¬ÇÇBBBBB[ÿöôX›ôõŸ»Hô]»õŸ ]KôõŸÀò€€‹ã]KôõŸÀõôX\ã]KôõŸÀôò\à
N¬ÇÇBBBB_H[ŸHYà
]KôõŸÀù\HOOH	—õŸ—^â»
H¬ÇÇBBBBB[ÿöôX›ôõŸ»Hô]»õŸ—^ä]KôõŸÀò€€‹ã]KôõŸÀô[ú⁄]H
N¬ÇÇBBBB_BÇÇBBBBZYà
]KôõŸÀõò[YHOOH	…»
H¬ÇÇBBBBB[ÿöôX›ôõŸÀõò[YHH]KôõŸÀõò[YN¬ÇÇBBBB_BÇÇBBB_BÇÇBBBZYà
]KòòX⁄Ÿ‹õ›[ôõ\úö[ô\‹»OOH[ôYö[ôY
HÿöôX›òòX⁄Ÿ‹õ›[ôõ\úö[ô\‹»H]KòòX⁄Ÿ‹õ›[ôõ\úö[ô\‹Œ¬ÇBBBZYà
]KòòX⁄Ÿ‹õ›[ô[ù[ú⁄]HOOH[ôYö[ôY
HÿöôX›òòX⁄Ÿ‹õ›[ô[ù[ú⁄]HH]KòòX⁄Ÿ‹õ›[ô[ù[ú⁄]N¬ÇBBBZYà
]KòòX⁄Ÿ‹õ›[ôõ›][€àOOH[ôYö[ôY
HÿöôX›òòX⁄Ÿ‹õ›[ôõ›][€ãôúõ€P\úò^J]KòòX⁄Ÿ‹õ›[ôõ›][€à
N¬ÇÇBBBZYà
]Kô[ùö\õ€õY[ù[ù[ú⁄]HOOH[ôYö[ôY
HÿöôX›ô[ùö\õ€õY[ù[ù[ú⁄]HH]Kô[ùö\õ€õY[ù[ù[ú⁄]N¬ÇBBBZYà
]Kô[ùö\õ€õY[ùõ›][€àOOH[ôYö[ôY
HÿöôX›ô[ùö\õ€õY[ùõ›][€ãôúõ€P\úò^J]Kô[ùö\õ€õY[ùõ›][€à
N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	‘\ú‹X›]ôPÿ[Y\òIŒÇÇÇBBB[ÿöôX›Hô]»\ú‹X›]ôPÿ[Y\òJ]Kôõ›ã]Kò\‹X›]KõôX\ã]Kôò\à
N¬ÇÇBBBZYà
]Kôõÿ›\»OOH[ôYö[ôY
HÿöôX›ôõÿ›\»H]Kôõÿ›\Œ¬ÇBBBZYà
]Kûõ€€HOOH[ôYö[ôY
HÿöôX›ûõ€€HH]Kûõ€€N¬ÇBBBZYà
]Kôö[Qÿ]YŸHOOH[ôYö[ôY
HÿöôX›ôö[Qÿ]YŸHH]Kôö[Qÿ]YŸN¬ÇBBBZYà
]Kôö[SŸôúŸ]OOH[ôYö[ôY
HÿöôX›ôö[SŸôúŸ]H]Kôö[SŸôúŸ]¬ÇBBBZYà
]KùöY]»OOH[ôYö[ôY
HÿöôX›ùöY]»HÿöôX›ò\‹⁄Y€äﬂK]KùöY]»
N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	”‹ùŸ‹ò\X–ÿ[Y\òIŒÇÇÇBBB[ÿöôX›Hô]»‹ùŸ‹ò\X–ÿ[Y\òJ]KõYù]KúöY⁄]Kù‹]Kòõ›€K]KõôX\ã]Kôò\à
N¬ÇÇBBBZYà
]Kûõ€€HOOH[ôYö[ôY
HÿöôX›ûõ€€HH]Kûõ€€N¬ÇBBBZYà
]KùöY]»OOH[ôYö[ôY
HÿöôX›ùöY]»HÿöôX›ò\‹⁄Y€äﬂK]KùöY]»
N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	–[XöY[ùY⁄	ŒÇÇÇBBB[ÿöôX›Hô]»[XöY[ùY⁄
]Kò€€‹ã]Kö[ù[ú⁄]H
N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	—\ôX›[€ò[Y⁄	ŒÇÇÇBBB[ÿöôX›Hô]»\ôX›[€ò[Y⁄
]Kò€€‹ã]Kö[ù[ú⁄]H
N¬ÇBBB[ÿöôX›ù\ôŸ]H]Kù\ôŸ]	…Œ¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	‘⁄[ùY⁄	ŒÇÇÇBBB[ÿöôX›Hô]»⁄[ùY⁄
]Kò€€‹ã]Kö[ù[ú⁄]K]Kô\›[òŸK]KôXÿ^H
N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	‘ôX›\ôXSY⁄	ŒÇÇÇBBB[ÿöôX›Hô]»ôX›\ôXSY⁄
]Kò€€‹ã]Kö[ù[ú⁄]K]Kù⁄Y]KöZY⁄
N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	‘‹›Y⁄	ŒÇÇÇBBB[ÿöôX›Hô]»‹›Y⁄
]Kò€€‹ã]Kö[ù[ú⁄]K]Kô\›[òŸK]Kò[ô€K]Kú[ù[XúòK]KôXÿ^H
N¬ÇBBB[ÿöôX›ù\ôŸ]H]Kù\ôŸ]	…Œ¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	“[Z\‹\ôSY⁄	ŒÇÇÇBBB[ÿöôX›Hô]»[Z\‹\ôSY⁄
]Kò€€‹ã]Kô‹õ›[ô€€‹ã]Kö[ù[ú⁄]H
N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	”Y⁄õÿôIŒÇÇÇBBB[ÿöôX›Hô]»Y⁄õÿôJ
Kôúõ€Rî””ä]H
N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	‘⁄⁄[õôYY\⁄	ŒÇÇÇBBBYŸ[€Y]ûHHŸ]Ÿ[€Y]ûJ]KôŸ[€Y]ûH
N¬ÇBBH[X]\öX[HŸ]X]\öX[
]KõX]\öX[
N¬ÇÇBBB[ÿöôX›Hô]»⁄⁄[õôYY\⁄
Ÿ[€Y]ûKX]\öX[
N¬ÇÇBBBZYà
]Kòö[ô[ŸHOOH[ôYö[ôY
HÿöôX›òö[ô[ŸHH]Kòö[ô[ŸN¬ÇBBBZYà
]Kòö[ôX]ö^OOH[ôYö[ôY
HÿöôX›òö[ôX]ö^ôúõ€P\úò^J]Kòö[ôX]ö^
N¬ÇBBBZYà
]Kú⁄Ÿ[]€àOOH[ôYö[ôY
HÿöôX›ú⁄Ÿ[]€àH]Kú⁄Ÿ[]€é¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	”Y\⁄	ŒÇÇÇBBBYŸ[€Y]ûHHŸ]Ÿ[€Y]ûJ]KôŸ[€Y]ûH
N¬ÇBBB[X]\öX[HŸ]X]\öX[
]KõX]\öX[
N¬ÇÇBBB[ÿöôX›Hô]»Y\⁄
Ÿ[€Y]ûKX]\öX[
N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	“[ú›[òŸYY\⁄	ŒÇÇÇBBBYŸ[€Y]ûHHŸ]Ÿ[€Y]ûJ]KôŸ[€Y]ûH
N¬ÇBBB[X]\öX[HŸ]X]\öX[
]KõX]\öX[
N¬ÇBBBX€€ú›€›[ùH]Kò€›[ù¬ÇBBBX€€ú›[ú›[òŸSX]ö^H]Kö[ú›[òŸSX]ö^¬ÇBBBX€€ú›[ú›[òŸP€€‹àH]Kö[ú›[òŸP€€‹é¬ÇÇBBB[ÿöôX›Hô]»[ú›[òŸYY\⁄
Ÿ[€Y]ûKX]\öX[€›[ù
N¬ÇBBB[ÿöôX›ö[ú›[òŸSX]ö^Hô]»[ú›[òŸYùYôô\ê]öXù]Jô]»õÿ]Ãê\úò^J[ú›[òŸSX]ö^ò\úò^H
KMà
N¬ÇBBBZYà
[ú›[òŸP€€‹àOOH[ôYö[ôY
HÿöôX›ö[ú›[òŸP€€‹àHô]»[ú›[òŸYùYôô\ê]öXù]Jô]»õÿ]Ãê\úò^J[ú›[òŸP€€‹ãò\úò^H
K[ú›[òŸP€€‹ãö][T⁄^ôH
N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	–ò]⁄YY\⁄	ŒÇÇÇBBBYŸ[€Y]ûHHŸ]Ÿ[€Y]ûJ]KôŸ[€Y]ûH
N¬ÇBBB[X]\öX[HŸ]X]\öX[
]KõX]\öX[
N¬ÇÇBBB[ÿöôX›Hô]»ò]⁄YY\⁄
]KõX^[ú›[òŸP€›[ù]KõX^ô\ù^€›[ù]KõX^[ô^€›[ùX]\öX[
N¬ÇBBB[ÿöôX›ôŸ[€Y]ûHHŸ[€Y]ûN¬ÇBBB[ÿöôX›ú\ìÿöôX›úù\›[P›[YH]Kú\ìÿöôX›úù\›[P›[Y¬ÇBBB[ÿöôX›ú€‹ùÿöôX›»H]Kú€‹ùÿöôX›Œ¬ÇÇBBB[ÿöôX›óŸò]‘ò[ôŸ\»H]Kôò]‘ò[ôŸ\Œ¬ÇBBB[ÿöôX›ó‹ô\Ÿ\ùôYò[ôŸ\»H]Kúô\Ÿ\ùôYò[ôŸ\Œ¬ÇÇBBB[ÿöôX›ó›ö\⁄Xö[]HH]Kùö\⁄Xö[]N¬ÇBBB[ÿöôX›óÿX›]ôHH]KòX›]ôN¬ÇBBB[ÿöôX›óÿõ›[ô»H]Kòõ›[ôÀõX\
õ›[ôOà¬ÇÇBBBBX€€ú›õﬁHô]»õﬁ 
N¬ÇBBBBXõﬁõZ[ãôúõ€P\úò^Jõ›[ôòõﬁZ[à
N¬ÇBBBBXõﬁõX^ôúõ€P\úò^Jõ›[ôòõﬁX^
N¬ÇÇBBBBX€€ú›‹\ôHHô]»‹\ôJ
N¬ÇBBBB\‹\ôKúòY]\»Hõ›[ôú‹\ôTòY]\Œ¬ÇBBBB\‹\ôKòŸ[ù\ãôúõ€P\úò^Jõ›[ôú‹\ôPŸ[ù\à
N¬ÇÇBBBB\ô]\õà¬ÇBBBBBXõﬁ[ö]X[^ôYàõ›[ôòõﬁ[ö]X[^ôYÇBBBBBXõﬁàõﬁÇÇBBBBB\‹\ôR[ö]X[^ôYàõ›[ôú‹\ôR[ö]X[^ôYÇBBBBB\‹\ôNà‹\ôBÇBBBB_N¬ÇÇBBB_H
N¬ÇÇBBB[ÿöôX›ó€X^[ú›[òŸP€›[ùH]KõX^[ú›[òŸP€›[ù¬ÇBBB[ÿöôX›ó€X^ô\ù^€›[ùH]KõX^ô\ù^€›[ù¬ÇBBB[ÿöôX›ó€X^[ô^€›[ùH]KõX^[ô^€›[ù¬ÇÇBBB[ÿöôX›óŸŸ[€Y]ûR[ö]X[^ôYH]KôŸ[€Y]ûR[ö]X[^ôY¬ÇBBB[ÿöôX›óŸŸ[€Y]ûP€›[ùH]KôŸ[€Y]ûP€›[ù¬ÇÇBBB[ÿöôX›ó€X]öXŸ\’^\ôHHŸ]^\ôJ]KõX]öXŸ\’^\ôKù]ZY
N¬ÇBBBZYà
]Kò€€‹ú’^\ôHOOH[ôYö[ôY
HÿöôX›óÿ€€‹ú’^\ôHHŸ]^\ôJ]Kò€€‹ú’^\ôKù]ZY
N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	”—	ŒÇÇÇBBB[ÿöôX›Hô]»—

N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	”[ôIŒÇÇÇBBB[ÿöôX›Hô]»[ôJŸ]Ÿ[€Y]ûJ]KôŸ[€Y]ûH
KŸ]X]\öX[
]KõX]\öX[
H
N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	”[ôS€‹	ŒÇÇÇBBB[ÿöôX›Hô]»[ôS€‹
Ÿ]Ÿ[€Y]ûJ]KôŸ[€Y]ûH
KŸ]X]\öX[
]KõX]\öX[
H
N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	”[ôTŸY€Y[ù…ŒÇÇÇBBB[ÿöôX›Hô]»[ôTŸY€Y[ù Ÿ]Ÿ[€Y]ûJ]KôŸ[€Y]ûH
KŸ]X]\öX[
]KõX]\öX[
H
N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	‘⁄[ù€›Y	ŒÇÇBBXÿ\ŸH	‘⁄[ù…ŒÇÇÇBBB[ÿöôX›Hô]»⁄[ù Ÿ]Ÿ[€Y]ûJ]KôŸ[€Y]ûH
KŸ]X]\öX[
]KõX]\öX[
H
N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	‘‹ö]IŒÇÇÇBBB[ÿöôX›Hô]»‹ö]JŸ]X]\öX[
]KõX]\öX[
H
N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	—‹õ›\	ŒÇÇÇBBB[ÿöôX›Hô]»‹õ›\

N¬ÇÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	–õ€ôIŒÇÇÇBBB[ÿöôX›Hô]»õ€ôJ
N¬ÇÇBBBXúôXZŒ¬ÇÇBBYYò][ÇÇÇBBB[ÿöôX›Hô]»ÿöôX›—

N¬ÇÇB_BÇÇB[ÿöôX›ù]ZYH]Kù]ZY¬ÇÇBZYà
]Kõò[YHOOH[ôYö[ôY
HÿöôX›õò[YHH]Kõò[YN¬ÇÇBZYà
]KõX]ö^OOH[ôYö[ôY
H¬ÇÇBB[ÿöôX›õX]ö^ôúõ€P\úò^J]KõX]ö^
N¬ÇÇBBZYà
]KõX]ö^]]’\]HOOH[ôYö[ôY
HÿöôX›õX]ö^]]’\]HH]KõX]ö^]]’\]N¬ÇBBZYà
ÿöôX›õX]ö^]]’\]H
HÿöôX›õX]ö^ôX€€\‹ŸJÿöôX›ú‹⁄][€ãÿöôX›ú]X]\õö[€ãÿöôX›úÿÿ[H
N¬ÇÇB_H[ŸH¬ÇÇBBZYà
]Kú‹⁄][€àOOH[ôYö[ôY
HÿöôX›ú‹⁄][€ãôúõ€P\úò^J]Kú‹⁄][€à
N¬ÇBBZYà
]Kúõ›][€àOOH[ôYö[ôY
HÿöôX›úõ›][€ãôúõ€P\úò^J]Kúõ›][€à
N¬ÇBBZYà
]Kú]X]\õö[€àOOH[ôYö[ôY
HÿöôX›ú]X]\õö[€ãôúõ€P\úò^J]Kú]X]\õö[€à
N¬ÇBBZYà
]Kúÿÿ[HOOH[ôYö[ôY
HÿöôX›úÿÿ[Kôúõ€P\úò^J]Kúÿÿ[H
N¬ÇÇB_BÇÇBZYà
]Kù\OOH[ôYö[ôY
HÿöôX›ù\ôúõ€P\úò^J]Kù\
N¬ÇÇBZYà
]Kòÿ\›⁄Y›»OOH[ôYö[ôY
HÿöôX›òÿ\›⁄Y›»H]Kòÿ\›⁄Y›Œ¬ÇBZYà
]KúôXŸZ]ôT⁄Y›»OOH[ôYö[ôY
HÿöôX›úôXŸZ]ôT⁄Y›»H]KúôXŸZ]ôT⁄Y›Œ¬ÇÇBZYà
]Kú⁄Y›»
H¬ÇÇBBZYà
]Kú⁄Y›Àö[ù[ú⁄]HOOH[ôYö[ôY
HÿöôX›ú⁄Y›Àö[ù[ú⁄]HH]Kú⁄Y›Àö[ù[ú⁄]N¬ÇBBZYà
]Kú⁄Y›ÀòöX\»OOH[ôYö[ôY
HÿöôX›ú⁄Y›ÀòöX\»H]Kú⁄Y›ÀòöX\Œ¬ÇBBZYà
]Kú⁄Y›Àõõ‹õX[öX\»OOH[ôYö[ôY
HÿöôX›ú⁄Y›Àõõ‹õX[öX\»H]Kú⁄Y›Àõõ‹õX[öX\Œ¬ÇBBZYà
]Kú⁄Y›ÀúòY]\»OOH[ôYö[ôY
HÿöôX›ú⁄Y›ÀúòY]\»H]Kú⁄Y›ÀúòY]\Œ¬ÇBBZYà
]Kú⁄Y›ÀõX\⁄^ôHOOH[ôYö[ôY
HÿöôX›ú⁄Y›ÀõX\⁄^ôKôúõ€P\úò^J]Kú⁄Y›ÀõX\⁄^ôH
N¬ÇBBZYà
]Kú⁄Y›Àòÿ[Y\òHOOH[ôYö[ôY
HÿöôX›ú⁄Y›Àòÿ[Y\òHH\Àú\úŸSÿöôX›
]Kú⁄Y›Àòÿ[Y\òH
N¬ÇÇB_BÇÇBZYà
]Kùö\⁄XõHOOH[ôYö[ôY
HÿöôX›ùö\⁄XõHH]Kùö\⁄XõN¬ÇBZYà
]Kôúù\›[P›[YOOH[ôYö[ôY
HÿöôX›ôúù\›[P›[YH]Kôúù\›[P›[Y¬ÇBZYà
]Kúô[ô\ì‹ô\àOOH[ôYö[ôY
HÿöôX›úô[ô\ì‹ô\àH]Kúô[ô\ì‹ô\é¬ÇBZYà
]Kù\Ÿ\ë]HOOH[ôYö[ôY
HÿöôX›ù\Ÿ\ë]HH]Kù\Ÿ\ë]N¬ÇBZYà
]Kõ^Y\ú»OOH[ôYö[ôY
HÿöôX›õ^Y\úÀõX\⁄»H]Kõ^Y\úŒ¬ÇÇBZYà
]Kò⁄[ô[àOOH[ôYö[ôY
H¬ÇÇBBX€€ú›⁄[ô[àH]Kò⁄[ô[é¬ÇÇBBYõ‹à
]HH»H⁄[ô[ãõ[ô›»H
 »
H¬ÇÇBBB[ÿöôX›òY
\Àú\úŸSÿöôX›
⁄[ô[ñ»HKŸ[€Y]öY\ÀX]\öX[À^\ô\À[ö[X][€ú»
H
N¬ÇÇBB_BÇÇB_BÇÇBZYà
]Kò[ö[X][€ú»OOH[ôYö[ôY
H¬ÇÇBBX€€ú›ÿöôX›[ö[X][€ú»H]Kò[ö[X][€úŒ¬ÇÇBBYõ‹à
]HH»HÿöôX›[ö[X][€úÀõ[ô›»H
 »
H¬ÇÇBBBX€€ú›]ZYHÿöôX›[ö[X][€ú÷»HN¬ÇÇBBB[ÿöôX›ò[ö[X][€úÀú\⁄
[ö[X][€ú÷»]ZYH
N¬ÇÇBB_BÇÇB_BÇÇBZYà
]Kù\HOOH	”—	»
H¬ÇÇBBZYà
]Kò]]’\]HOOH[ôYö[ôY
HÿöôX›ò]]’\]HH]Kò]]’\]N¬ÇÇBBX€€ú›]ô[»H]Kõ]ô[Œ¬ÇÇBBYõ‹à
]H»]ô[Àõ[ô›»
 »
H¬ÇÇBBBX€€ú›]ô[H]ô[÷»N¬ÇBBBX€€ú›⁄[HÿöôX›ôŸ]ÿöôX›ûTõ‹\ùJ	›]ZY	À]ô[õÿöôX›
N¬ÇÇBBBZYà
⁄[OOH[ôYö[ôY
H¬ÇÇBBBB[ÿöôX›òY]ô[
⁄[]ô[ô\›[òŸK]ô[ö\›\ô\⁄\»
N¬ÇÇBBB_BÇÇBB_BÇÇB_BÇÇB\ô]\õàÿöôX›¬ÇÇ_BÇÇXö[ô⁄Ÿ[]€ú ÿöôX›⁄Ÿ[]€ú»
H¬ÇÇBZYà
ÿöôX›öŸ^\ ⁄Ÿ[]€ú»
Kõ[ô›OOH
Hô]\õé¬ÇÇB[ÿöôX›ùò]ô\úŸJù[ò›[€à
⁄[
H¬ÇÇBBZYà
⁄[ö\‘⁄⁄[õôYY\⁄OOHùYH	âà⁄[ú⁄Ÿ[]€àOOH[ôYö[ôY
H¬ÇÇBBBX€€ú›⁄Ÿ[]€àH⁄Ÿ[]€ú÷»⁄[ú⁄Ÿ[]€àN¬ÇÇBBBZYà
⁄Ÿ[]€àOOH[ôYö[ôY
H¬ÇÇBBBBX€€ú€€Kùÿ\õä	’ëQKìÿöôX›ÿY\éàõ»⁄Ÿ[]€àõ›[ô⁄]URQâÀ⁄[ú⁄Ÿ[]€à
N¬ÇÇBBB_H[ŸH¬ÇÇBBBBX⁄[òö[ô
⁄Ÿ[]€ã⁄[òö[ôX]ö^
N¬ÇÇBBB_BÇÇBB_BÇÇB_H
N¬ÇÇ_BÇÇXö[ôY⁄\ôŸ] ÿöôX›
H¬ÇÇB[ÿöôX›ùò]ô\úŸJù[ò›[€à
⁄[
H¬ÇÇBBZYà
⁄[ö\—\ôX›[€ò[Y⁄⁄[ö\‘‹›Y⁄
H¬ÇÇBBBX€€ú›]ZYH⁄[ù\ôŸ]¬ÇÇBBBX€€ú›\ôŸ]HÿöôX›ôŸ]ÿöôX›ûTõ‹\ùJ	›]ZY	À]ZY
N¬ÇÇBBBZYà
\ôŸ]OOH[ôYö[ôY
H¬ÇÇBBBBX⁄[ù\ôŸ]H\ôŸ]¬ÇÇBBB_H[ŸH¬ÇÇBBBBX⁄[ù\ôŸ]Hô]»ÿöôX›—

N¬ÇÇBBB_BÇÇBB_BÇÇB_H
N¬ÇÇ_BÇüBÇò€€ú›VTëW”PTSë»H¬ÇUUìX\[ôŒàUìX\[ôÀÇP›XôTôYõX›[€ìX\[ôŒà›XôTôYõX›[€ìX\[ôÀÇP›XôTôYúòX›[€ìX\[ôŒà›XôTôYúòX›[€ìX\[ôÀÇQ\]Z\ôX›[ô›[\îôYõX›[€ìX\[ôŒà\]Z\ôX›[ô›[\îôYõX›[€ìX\[ôÀÇQ\]Z\ôX›[ô›[\îôYúòX›[€ìX\[ôŒà\]Z\ôX›[ô›[\îôYúòX›[€ìX\[ôÀÇP›XôUUîôYõX›[€ìX\[ôŒà›XôUUîôYõX›[€ìX\[ô¬üN¬Çò€€ú›VTëW’‘êTSë»H¬ÇTô\X]‹ò\[ôŒàô\X]‹ò\[ôÀÇP€[\—YŸU‹ò\[ôŒà€[\—YŸU‹ò\[ôÀÇSZ\úõ‹ôYô\X]‹ò\[ôŒàZ\úõ‹ôYô\X]‹ò\[ô¬üN¬Çò€€ú›VTëW—íSTàH¬ÇSôX\ô\›ö[\éàôX\ô\›ö[\ãÇSôX\ô\›Z\X\ôX\ô\›ö[\éàôX\ô\›Z\X\ôX\ô\›ö[\ãÇSôX\ô\›Z\X\[ôX\ëö[\éàôX\ô\›Z\X\[ôX\ëö[\ãÇS[ôX\ëö[\éà[ôX\ëö[\ãÇS[ôX\ìZ\X\ôX\ô\›ö[\éà[ôX\ìZ\X\ôX\ô\›ö[\ãÇS[ôX\ìZ\X\[ôX\ëö[\éà[ôX\ìZ\X\[ôX\ëö[\ÇüN¬Çò€\‹»[XYŸPö]X\ÿY\à^[ô»ÿY\à¬ÇÇX€€ú›ùX›‹äX[òYŸ\à
H¬ÇÇB\›\\äX[òYŸ\à
N¬ÇÇB]\Àö\“[XYŸPö]X\ÿY\àHùYN¬ÇÇBZYà
\[Ÿà‹ôX]R[XYŸPö]X\OOH	›[ôYö[ôY	»
H¬ÇÇBBX€€ú€€Kùÿ\õä	’ëQKí[XYŸPö]X\ÿY\éà‹ôX]R[XYŸPö]X\

Hõ››\‹ùYâ»
N¬ÇÇB_BÇÇBZYà
\[Ÿàô]⁄OOH	›[ôYö[ôY	»
H¬ÇÇBBX€€ú€€Kùÿ\õä	’ëQKí[XYŸPö]X\ÿY\éàô]⁄

Hõ››\‹ùYâ»
N¬ÇÇB_BÇÇB]\Àõ‹[€ú»H»ô[][\P[Nà	€õ€ôI»N¬ÇÇ_BÇÇ\Ÿ]‹[€ú ‹[€ú»
H¬ÇÇB]\Àõ‹[€ú»H‹[€úŒ¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ[ÿY
\õ€ìÿY€îõŸ‹ô\‹À€ë\úõ‹à
H¬ÇÇBZYà
\õOOH[ôYö[ôY
H\õH	…Œ¬ÇÇBZYà
\Àú]OOH[ôYö[ôY
H\õH\Àú]
»\õ¬ÇÇB]\õH\ÀõX[òYŸ\ãúô\€€ôUTì
\õ
N¬ÇÇBX€€ú›ÿ€‹HH\Œ¬ÇÇBX€€ú›ÿX⁄YHÿX⁄KôŸ]
\õ
N¬ÇÇBZYà
ÿX⁄YOOH[ôYö[ôY
H¬ÇÇBB\ÿ€‹KõX[òYŸ\ãö][T›\ù
\õ
N¬ÇÇBBKÀ»YàÿX⁄Y\»Hõ€Z\ŸKÿZ]õ‹à]»ô\€€ôBÇBBZYà
ÿX⁄Yù[à
H¬ÇÇBBBXÿX⁄Yù[ä[XYŸPö]X\Oà¬ÇÇBBBBZYà
€ìÿY
H€ìÿY
[XYŸPö]X\
N¬ÇÇBBBB\ÿ€‹KõX[òYŸ\ãö][Q[ô
\õ
N¬ÇÇBBB_H
Kòÿ]⁄
HOà¬ÇÇBBBBZYà
€ë\úõ‹à
H€ë\úõ‹äH
N¬ÇÇBBB_H
N¬ÇBBB\ô]\õé¬ÇÇBB_BÇÇBBKÀ»YàÿX⁄Y\»õ›Hõ€Z\ŸH
KôKã]	‹»[ôXYH[à[XYŸPö]X\
BÇBB\Ÿ][Y[›]
ù[ò›[€à

H¬ÇÇBBBZYà
€ìÿY
H€ìÿY
ÿX⁄Y
N¬ÇÇBBB\ÿ€‹KõX[òYŸ\ãö][Q[ô
\õ
N¬ÇÇBB_K
N¬ÇÇBB\ô]\õàÿX⁄Y¬ÇÇB_BÇÇBX€€ú›ô]⁄‹[€ú»HﬂN¬ÇBYô]⁄‹[€úÀò‹ôY[ùX[»H
\Àò‹õ‹‹”‹öY⁄[àOOH	ÿ[õ€û[[›\…»
H»	‹ÿ[YK[‹öY⁄[â»à	⁄[ò€YIŒ¬ÇBYô]⁄‹[€úÀöXY\ú»H\Àúô\]Y\›XY\é¬ÇÇBX€€ú›õ€Z\ŸHHô]⁄
\õô]⁄‹[€ú»
Kù[äù[ò›[€à
ô\»
H¬ÇÇBB\ô]\õàô\Àòõÿä
N¬ÇÇB_H
Kù[äù[ò›[€à
õÿà
H¬ÇÇBB\ô]\õà‹ôX]R[XYŸPö]X\
õÿãÿöôX›ò\‹⁄Y€äÿ€‹Kõ‹[€úÀ»€€‹î‹XŸP€€ùô\ú⁄[€éà	€õ€ôI»H
H
N¬ÇÇB_H
Kù[äù[ò›[€à
[XYŸPö]X\
H¬ÇÇBBPÿX⁄KòY
\õ[XYŸPö]X\
N¬ÇÇBBZYà
€ìÿY
H€ìÿY
[XYŸPö]X\
N¬ÇÇBB\ÿ€‹KõX[òYŸ\ãö][Q[ô
\õ
N¬ÇÇBB\ô]\õà[XYŸPö]X\¬ÇÇB_H
Kòÿ]⁄
ù[ò›[€à
H
H¬ÇÇBBZYà
€ë\úõ‹à
H€ë\úõ‹äH
N¬ÇÇBBPÿX⁄Kúô[[›ôJ\õ
N¬ÇÇBB\ÿ€‹KõX[òYŸ\ãö][Q\úõ‹ä\õ
N¬ÇBB\ÿ€‹KõX[òYŸ\ãö][Q[ô
\õ
N¬ÇÇB_H
N¬ÇÇBPÿX⁄KòY
\õõ€Z\ŸH
N¬ÇB\ÿ€‹KõX[òYŸ\ãö][T›\ù
\õ
N¬ÇÇ_BÇüBÇõ]ÿ€€ù^¬Çò€\‹»]Y[–€€ù^¬ÇÇ\›]X»Ÿ]€€ù^

H¬ÇÇBZYà
ÿ€€ù^OOH[ôYö[ôY
H¬ÇÇBBWÿ€€ù^Hô]»
⁄[ô›Àê]Y[–€€ù^⁄[ô›ÀùŸXö⁄]]Y[–€€ù^
J
N¬ÇÇB_BÇÇB\ô]\õàÿ€€ù^¬ÇÇ_BÇÇ\›]X»Ÿ]€€ù^
ò[YH
H¬ÇÇBWÿ€€ù^Hò[YN¬ÇÇ_BÇüBÇò€\‹»]Y[”ÿY\à^[ô»ÿY\à¬ÇÇX€€ú›ùX›‹äX[òYŸ\à
H¬ÇÇB\›\\äX[òYŸ\à
N¬ÇÇ_BÇÇ[ÿY
\õ€ìÿY€îõŸ‹ô\‹À€ë\úõ‹à
H¬ÇÇBX€€ú›ÿ€‹HH\Œ¬ÇÇBX€€ú›ÿY\àHô]»ö[SÿY\ä\ÀõX[òYŸ\à
N¬ÇB[ÿY\ãúŸ]ô\‹€úŸU\J	ÿ\úò^XùYôô\â»
N¬ÇB[ÿY\ãúŸ]]
\Àú]
N¬ÇB[ÿY\ãúŸ]ô\]Y\›XY\ä\Àúô\]Y\›XY\à
N¬ÇB[ÿY\ãúŸ]⁄]‹ôY[ùX[ \Àù⁄]‹ôY[ùX[»
N¬ÇB[ÿY\ãõÿY
\õù[ò›[€à
ùYôô\à
H¬ÇÇBB]ûH¬ÇÇBBBKÀ»‹ôX]HH€‹HŸàHùYôô\ãàHX€ŸP]Y[—]XY]ŸÇBBBKÀ»]X⁄\»HùYôô\à⁄[à€€\]Kô]ô[ù[ô»ô]\ŸKÇÇBBBX€€ú›ùYôô\ê€‹HHùYôô\ãú€XŸJ
N¬ÇÇBBBX€€ú›€€ù^H]Y[–€€ù^ôŸ]€€ù^

N¬ÇBBBX€€ù^ôX€ŸP]Y[—]JùYôô\ê€‹Kù[ò›[€à
]Y[–ùYôô\à
H¬ÇÇBBBB[€ìÿY
]Y[–ùYôô\à
N¬ÇÇBBB_H
Kòÿ]⁄
[ôQ\úõ‹à
N¬ÇÇBB_Hÿ]⁄
H
H¬ÇÇBBBZ[ôQ\úõ‹äH
N¬ÇÇBB_BÇÇB_K€îõŸ‹ô\‹À€ë\úõ‹à
N¬ÇÇBYù[ò›[€à[ôQ\úõ‹äH
H¬ÇÇBBZYà
€ë\úõ‹à
H¬ÇÇBBB[€ë\úõ‹äH
N¬ÇÇBB_H[ŸH¬ÇÇBBBX€€ú€€Kô\úõ‹äH
N¬ÇÇBB_BÇÇBB\ÿ€‹KõX[òYŸ\ãö][Q\úõ‹ä\õ
N¬ÇÇB_BÇÇ_BÇüBÇò€€ú›Ÿ^YTöY⁄H ê◊‘TëW◊ ã»ô]»X]ö^

N¬ò€€ú›Ÿ^YSYùH ê◊‘TëW◊ ã»ô]»X]ö^

N¬ò€€ú›‹õ⁄ôX›[€ìX]ö^H ê◊‘TëW◊ ã»ô]»X]ö^

N¬Çò€\‹»›\ô[–ÿ[Y\òH¬ÇÇX€€ú›ùX›‹ä
H¬ÇÇB]\Àù\HH	‘›\ô[–ÿ[Y\òIŒ¬ÇÇB]\Àò\‹X›HN¬ÇÇB]\Àô^YTŸ\Håç¬ÇÇB]\Àòÿ[Y\òSHô]»\ú‹X›]ôPÿ[Y\òJ
N¬ÇB]\Àòÿ[Y\òSõ^Y\úÀô[òXõJH
N¬ÇB]\Àòÿ[Y\òSõX]ö^]]’\]HHò[ŸN¬ÇÇB]\Àòÿ[Y\òTàHô]»\ú‹X›]ôPÿ[Y\òJ
N¬ÇB]\Àòÿ[Y\òTãõ^Y\úÀô[òXõJà
N¬ÇB]\Àòÿ[Y\òTãõX]ö^]]’\]HHò[ŸN¬ÇÇB]\ÀóÿÿX⁄HH¬ÇBBYõÿ›\Œàù[ÇBBYõ›éàù[ÇBBX\‹X›àù[ÇBB[ôX\éàù[ÇBBYò\éàù[ÇBB^õ€€Nàù[ÇBBY^YTŸ\àù[ÇB_N¬ÇÇ_BÇÇ]\]Jÿ[Y\òH
H¬ÇÇBX€€ú›ÿX⁄HH\ÀóÿÿX⁄N¬ÇÇBX€€ú›ôYY’\]HHÿX⁄Kôõÿ›\»OOHÿ[Y\òKôõÿ›\»ÿX⁄Kôõ›àOOHÿ[Y\òKôõ›àÇBBXÿX⁄Kò\‹X›OOHÿ[Y\òKò\‹X›
à\Àò\‹X›ÿX⁄KõôX\àOOHÿ[Y\òKõôX\àÇBBXÿX⁄Kôò\àOOHÿ[Y\òKôò\àÿX⁄Kûõ€€HOOHÿ[Y\òKûõ€€HÿX⁄Kô^YTŸ\OOH\Àô^YTŸ\¬ÇÇBZYà
ôYY’\]H
H¬ÇÇBBXÿX⁄Kôõÿ›\»Hÿ[Y\òKôõÿ›\Œ¬ÇBBXÿX⁄Kôõ›àHÿ[Y\òKôõ›é¬ÇBBXÿX⁄Kò\‹X›Hÿ[Y\òKò\‹X›
à\Àò\‹X›¬ÇBBXÿX⁄KõôX\àHÿ[Y\òKõôX\é¬ÇBBXÿX⁄Kôò\àHÿ[Y\òKôò\é¬ÇBBXÿX⁄Kûõ€€HHÿ[Y\òKûõ€€N¬ÇBBXÿX⁄Kô^YTŸ\H\Àô^YTŸ\¬ÇÇBBKÀ»ŸôãX^\»›\ô[‹ÿ€‹X»YôôX›ò\ŸY€ÇÇBBKÀ»ãÀ‹][õ›\öŸKõô]‹›\ô[Ÿ‹ò\X‹À‹›\ô[‹ô[ô\ã¬ÇÇBBW‹õ⁄ôX›[€ìX]ö^ò€‹Jÿ[Y\òKúõ⁄ôX›[€ìX]ö^
N¬ÇBBX€€ú›^YTŸ\[àHÿX⁄Kô^YTŸ\»é¬ÇBBX€€ú›^YTŸ\€îõ⁄ôX›[€àH^YTŸ\[à
àÿX⁄KõôX\à»ÿX⁄Kôõÿ›\Œ¬ÇBBX€€ú›[X^H
ÿX⁄KõôX\à
àX]ù[äQÃîêQ
àÿX⁄Kôõ›à
àçH
H
H»ÿX⁄Kûõ€€N¬ÇBB[]Z[ãX^¬ÇÇBBKÀ»ò[ú€]HŸôúŸ]ÇÇBBWŸ^YSYùô[[Y[ù÷»LàHHH^YTŸ\[é¬ÇBBWŸ^YTöY⁄ô[[Y[ù÷»LàHH^YTŸ\[é¬ÇÇBBKÀ»õ‹àYù^YBÇÇBB^Z[àHH[X^
àÿX⁄Kò\‹X›
»^YTŸ\€îõ⁄ôX›[€é¬ÇBB^X^H[X^
àÿX⁄Kò\‹X›
»^YTŸ\€îõ⁄ôX›[€é¬ÇÇBBW‹õ⁄ôX›[€ìX]ö^ô[[Y[ù÷»HHà
àÿX⁄KõôX\à»
X^HZ[à
N¬ÇBBW‹õ⁄ôX›[€ìX]ö^ô[[Y[ù÷»HH
X^
»Z[à
H»
X^HZ[à
N¬ÇÇBB]\Àòÿ[Y\òSúõ⁄ôX›[€ìX]ö^ò€‹J‹õ⁄ôX›[€ìX]ö^
N¬ÇÇBBKÀ»õ‹àöY⁄^YBÇÇBB^Z[àHH[X^
àÿX⁄Kò\‹X›H^YTŸ\€îõ⁄ôX›[€é¬ÇBB^X^H[X^
àÿX⁄Kò\‹X›H^YTŸ\€îõ⁄ôX›[€é¬ÇÇBBW‹õ⁄ôX›[€ìX]ö^ô[[Y[ù÷»HHà
àÿX⁄KõôX\à»
X^HZ[à
N¬ÇBBW‹õ⁄ôX›[€ìX]ö^ô[[Y[ù÷»HH
X^
»Z[à
H»
X^HZ[à
N¬ÇÇBB]\Àòÿ[Y\òTãúõ⁄ôX›[€ìX]ö^ò€‹J‹õ⁄ôX›[€ìX]ö^
N¬ÇÇB_BÇÇB]\Àòÿ[Y\òSõX]ö^€‹õò€‹Jÿ[Y\òKõX]ö^€‹õ
Kõ][\JŸ^YSYù
N¬ÇB]\Àòÿ[Y\òTãõX]ö^€‹õò€‹Jÿ[Y\òKõX]ö^€‹õ
Kõ][\JŸ^YTöY⁄
N¬ÇÇ_BÇüBÇò€\‹»€ÿ⁄»¬ÇÇX€€ú›ùX›‹ä]]‘›\ùHùYH
H¬ÇÇB]\Àò]]‘›\ùH]]‘›\ù¬ÇÇB]\Àú›\ù[YHH¬ÇB]\Àõ€[YHH¬ÇB]\Àô[\ŸY[YHH¬ÇÇB]\Àúù[õö[ô»Hò[ŸN¬ÇÇ_BÇÇ\›\ù

H¬ÇÇB]\Àú›\ù[YHHõ› 
N¬ÇÇB]\Àõ€[YHH\Àú›\ù[YN¬ÇB]\Àô[\ŸY[YHH¬ÇB]\Àúù[õö[ô»HùYN¬ÇÇ_BÇÇ\›‹

H¬ÇÇB]\ÀôŸ][\ŸY[YJ
N¬ÇB]\Àúù[õö[ô»Hò[ŸN¬ÇB]\Àò]]‘›\ùHò[ŸN¬ÇÇ_BÇÇYŸ][\ŸY[YJ
H¬ÇÇB]\ÀôŸ][J
N¬ÇB\ô]\õà\Àô[\ŸY[YN¬ÇÇ_BÇÇYŸ][J
H¬ÇÇB[]YôàH¬ÇÇBZYà
\Àò]]‘›\ù	âàH\Àúù[õö[ô»
H¬ÇÇBB]\Àú›\ù

N¬ÇBB\ô]\õà¬ÇÇB_BÇÇBZYà
\Àúù[õö[ô»
H¬ÇÇBBX€€ú›ô]’[YHHõ› 
N¬ÇÇBBYYôàH
ô]’[YHH\Àõ€[YH
H»L¬ÇBB]\Àõ€[YHHô]’[YN¬ÇÇBB]\Àô[\ŸY[YH
œHYôé¬ÇÇB_BÇÇB\ô]\õàYôé¬ÇÇ_BÇüBÇôù[ò›[€àõ› 
H¬ÇÇ\ô]\õà\ôõ‹õX[òŸKõõ› 
N¬ÇüBÇò€€ú›‹‹⁄][€âHH ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬ò€€ú›‹]X]\õö[€âHH ê◊‘TëW◊ ã»ô]»]X]\õö[€ä
N¬ò€€ú›‹ÿÿ[IHH ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬ò€€ú›€‹öY[ù][€âHH ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬Çò€\‹»]Y[”\›[ô\à^[ô»ÿöôX›—¬ÇÇX€€ú›ùX›‹ä
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àù\HH	–]Y[”\›[ô\âŒ¬ÇÇB]\Àò€€ù^H]Y[–€€ù^ôŸ]€€ù^

N¬ÇÇB]\ÀôÿZ[àH\Àò€€ù^ò‹ôX]QÿZ[ä
N¬ÇB]\ÀôÿZ[ãò€€õôX›
\Àò€€ù^ô\›[ò][€à
N¬ÇÇB]\Àôö[\àHù[¬ÇÇB]\Àù[YQ[HH¬ÇÇBKÀ»ö]ò]BÇÇB]\Àóÿ€ÿ⁄»Hô]»€ÿ⁄ 
N¬ÇÇ_BÇÇYŸ][ú]

H¬ÇÇB\ô]\õà\ÀôÿZ[é¬ÇÇ_BÇÇ\ô[[›ôQö[\ä
H¬ÇÇBZYà
\Àôö[\àOOHù[
H¬ÇÇBB]\ÀôÿZ[ãô\ÿ€€õôX›
\Àôö[\à
N¬ÇBB]\Àôö[\ãô\ÿ€€õôX›
\Àò€€ù^ô\›[ò][€à
N¬ÇBB]\ÀôÿZ[ãò€€õôX›
\Àò€€ù^ô\›[ò][€à
N¬ÇBB]\Àôö[\àHù[¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇYŸ]ö[\ä
H¬ÇÇB\ô]\õà\Àôö[\é¬ÇÇ_BÇÇ\Ÿ]ö[\äò[YH
H¬ÇÇBZYà
\Àôö[\àOOHù[
H¬ÇÇBB]\ÀôÿZ[ãô\ÿ€€õôX›
\Àôö[\à
N¬ÇBB]\Àôö[\ãô\ÿ€€õôX›
\Àò€€ù^ô\›[ò][€à
N¬ÇÇB_H[ŸH¬ÇÇBB]\ÀôÿZ[ãô\ÿ€€õôX›
\Àò€€ù^ô\›[ò][€à
N¬ÇÇB_BÇÇB]\Àôö[\àHò[YN¬ÇB]\ÀôÿZ[ãò€€õôX›
\Àôö[\à
N¬ÇB]\Àôö[\ãò€€õôX›
\Àò€€ù^ô\›[ò][€à
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇYŸ]X\›\ïõ€[YJ
H¬ÇÇB\ô]\õà\ÀôÿZ[ãôÿZ[ãùò[YN¬ÇÇ_BÇÇ\Ÿ]X\›\ïõ€[YJò[YH
H¬ÇÇB]\ÀôÿZ[ãôÿZ[ãúŸ]\ôŸ]][YJò[YK\Àò€€ù^ò›\úô[ù[YKåH
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ]\]SX]ö^€‹õ
õ‹òŸH
H¬ÇÇB\›\\ãù\]SX]ö^€‹õ
õ‹òŸH
N¬ÇÇBX€€ú›\›[ô\àH\Àò€€ù^õ\›[ô\é¬ÇBX€€ú›\H\Àù\¬ÇÇB]\Àù[YQ[HH\Àóÿ€ÿ⁄ÀôŸ][J
N¬ÇÇB]\ÀõX]ö^€‹õôX€€\‹ŸJ‹‹⁄][€âK‹]X]\õö[€âK‹ÿÿ[IH
N¬ÇÇBW€‹öY[ù][€âKúŸ]
HH
Kò\T]X]\õö[€ä‹]X]\õö[€âH
N¬ÇÇBZYà
\›[ô\ãú‹⁄][€ñ
H¬ÇÇBBKÀ»€ŸH]õ‹à⁄õ€YH
ŸYHÃMŒL BÇÇBBX€€ú›[ô[YHH\Àò€€ù^ò›\úô[ù[YH
»\Àù[YQ[N¬ÇÇBB[\›[ô\ãú‹⁄][€ñõ[ôX\îò[\’ò[YP][YJ‹‹⁄][€âKû[ô[YH
N¬ÇBB[\›[ô\ãú‹⁄][€ñKõ[ôX\îò[\’ò[YP][YJ‹‹⁄][€âKûK[ô[YH
N¬ÇBB[\›[ô\ãú‹⁄][€ñãõ[ôX\îò[\’ò[YP][YJ‹‹⁄][€âKûã[ô[YH
N¬ÇBB[\›[ô\ãôõ‹ùÿ\ôõ[ôX\îò[\’ò[YP][YJ€‹öY[ù][€âKû[ô[YH
N¬ÇBB[\›[ô\ãôõ‹ùÿ\ôKõ[ôX\îò[\’ò[YP][YJ€‹öY[ù][€âKûK[ô[YH
N¬ÇBB[\›[ô\ãôõ‹ùÿ\ôãõ[ôX\îò[\’ò[YP][YJ€‹öY[ù][€âKûã[ô[YH
N¬ÇBB[\›[ô\ãù\õ[ôX\îò[\’ò[YP][YJ\û[ô[YH
N¬ÇBB[\›[ô\ãù\Kõ[ôX\îò[\’ò[YP][YJ\ûK[ô[YH
N¬ÇBB[\›[ô\ãù\ãõ[ôX\îò[\’ò[YP][YJ\ûã[ô[YH
N¬ÇÇB_H[ŸH¬ÇÇBB[\›[ô\ãúŸ]‹⁄][€ä‹‹⁄][€âKû‹‹⁄][€âKûK‹‹⁄][€âKûà
N¬ÇBB[\›[ô\ãúŸ]‹öY[ù][€ä€‹öY[ù][€âKû€‹öY[ù][€âKûK€‹öY[ù][€âKûã\û\ûK\ûà
N¬ÇÇB_BÇÇ_BÇüBÇò€\‹»]Y[»^[ô»ÿöôX›—¬ÇÇX€€ú›ùX›‹ä\›[ô\à
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àù\HH	–]Y[…Œ¬ÇÇB]\Àõ\›[ô\àH\›[ô\é¬ÇB]\Àò€€ù^H\›[ô\ãò€€ù^¬ÇÇB]\ÀôÿZ[àH\Àò€€ù^ò‹ôX]QÿZ[ä
N¬ÇB]\ÀôÿZ[ãò€€õôX›
\›[ô\ãôŸ][ú]

H
N¬ÇÇB]\Àò]]‹^HHò[ŸN¬ÇÇB]\ÀòùYôô\àHù[¬ÇB]\Àô][ôHH¬ÇB]\Àõ€‹Hò[ŸN¬ÇB]\Àõ€‹›\ùH¬ÇB]\Àõ€‹[ôH¬ÇB]\ÀõŸôúŸ]H¬ÇB]\Àô\ò][€àH[ôYö[ôY¬ÇB]\Àú^XòX⁄‘ò]HHN¬ÇB]\Àö\‘^Z[ô»Hò[ŸN¬ÇB]\Àö\‘^XòX⁄–€€ùõ€HùYN¬ÇB]\Àú€›\òŸHHù[¬ÇB]\Àú€›\òŸU\HH	Ÿ[\IŒ¬ÇÇB]\Àó‹›\ùY]H¬ÇB]\Àó‹õŸ‹ô\‹»H¬ÇB]\Àóÿ€€õôX›YHò[ŸN¬ÇÇB]\Àôö[\ú»H◊N¬ÇÇ_BÇÇYŸ]›]]

H¬ÇÇB\ô]\õà\ÀôÿZ[é¬ÇÇ_BÇÇ\Ÿ]õŸT€›\òŸJ]Y[”õŸH
H¬ÇÇB]\Àö\‘^XòX⁄–€€ùõ€Hò[ŸN¬ÇB]\Àú€›\òŸU\HH	ÿ]Y[”õŸIŒ¬ÇB]\Àú€›\òŸHH]Y[”õŸN¬ÇB]\Àò€€õôX›

N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]YYXQ[[Y[ù€›\òŸJYYXQ[[Y[ù
H¬ÇÇB]\Àö\‘^XòX⁄–€€ùõ€Hò[ŸN¬ÇB]\Àú€›\òŸU\HH	€YYXSõŸIŒ¬ÇB]\Àú€›\òŸHH\Àò€€ù^ò‹ôX]SYYXQ[[Y[ù€›\òŸJYYXQ[[Y[ù
N¬ÇB]\Àò€€õôX›

N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]YYXT›ôX[T€›\òŸJYYXT›ôX[H
H¬ÇÇB]\Àö\‘^XòX⁄–€€ùõ€Hò[ŸN¬ÇB]\Àú€›\òŸU\HH	€YYXT›ôX[SõŸIŒ¬ÇB]\Àú€›\òŸHH\Àò€€ù^ò‹ôX]SYYXT›ôX[T€›\òŸJYYXT›ôX[H
N¬ÇB]\Àò€€õôX›

N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]ùYôô\ä]Y[–ùYôô\à
H¬ÇÇB]\ÀòùYôô\àH]Y[–ùYôô\é¬ÇB]\Àú€›\òŸU\HH	ÿùYôô\âŒ¬ÇÇBZYà
\Àò]]‹^H
H\Àú^J
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\^J[^HH
H¬ÇÇBZYà
\Àö\‘^Z[ô»OOHùYH
H¬ÇÇBBX€€ú€€Kùÿ\õä	’ëQKê]Y[Œà]Y[»\»[ôXYH^Z[ôÀâ»
N¬ÇBB\ô]\õé¬ÇÇB_BÇÇBZYà
\Àö\‘^XòX⁄–€€ùõ€OOHò[ŸH
H¬ÇÇBBX€€ú€€Kùÿ\õä	’ëQKê]Y[Œà\»]Y[»\»õ»^XòX⁄»€€ùõ€â»
N¬ÇBB\ô]\õé¬ÇÇB_BÇÇB]\Àó‹›\ùY]H\Àò€€ù^ò›\úô[ù[YH
»[^N¬ÇÇBX€€ú›€›\òŸHH\Àò€€ù^ò‹ôX]PùYôô\î€›\òŸJ
N¬ÇB\€›\òŸKòùYôô\àH\ÀòùYôô\é¬ÇB\€›\òŸKõ€‹H\Àõ€‹¬ÇB\€›\òŸKõ€‹›\ùH\Àõ€‹›\ù¬ÇB\€›\òŸKõ€‹[ôH\Àõ€‹[ô¬ÇB\€›\òŸKõ€ô[ôYH\Àõ€ë[ôYòö[ô
\»
N¬ÇB\€›\òŸKú›\ù
\Àó‹›\ùY]\Àó‹õŸ‹ô\‹»
»\ÀõŸôúŸ]\Àô\ò][€à
N¬ÇÇB]\Àö\‘^Z[ô»HùYN¬ÇÇB]\Àú€›\òŸHH€›\òŸN¬ÇÇB]\ÀúŸ]][ôJ\Àô][ôH
N¬ÇB]\ÀúŸ]^XòX⁄‘ò]J\Àú^XòX⁄‘ò]H
N¬ÇÇB\ô]\õà\Àò€€õôX›

N¬ÇÇ_BÇÇ\]\ŸJ
H¬ÇÇBZYà
\Àö\‘^XòX⁄–€€ùõ€OOHò[ŸH
H¬ÇÇBBX€€ú€€Kùÿ\õä	’ëQKê]Y[Œà\»]Y[»\»õ»^XòX⁄»€€ùõ€â»
N¬ÇBB\ô]\õé¬ÇÇB_BÇÇBZYà
\Àö\‘^Z[ô»OOHùYH
H¬ÇÇBBKÀ»\]H›\úô[ùõŸ‹ô\‹¬ÇÇBB]\Àó‹õŸ‹ô\‹»
œHX]õX^
\Àò€€ù^ò›\úô[ù[YHH\Àó‹›\ùY]
H
à\Àú^XòX⁄‘ò]N¬ÇÇBBZYà
\Àõ€‹OOHùYH
H¬ÇÇBBBKÀ»[ú›\ôH‹õŸ‹ô\‹»Ÿ\»õ›^ŸYY\ò][€à⁄]€‹Y]Y[‹¬ÇÇBBB]\Àó‹õŸ‹ô\‹»H\Àó‹õŸ‹ô\‹»	H
\Àô\ò][€à\ÀòùYôô\ãô\ò][€à
N¬ÇÇBB_BÇÇBB]\Àú€›\òŸKú›‹

N¬ÇBB]\Àú€›\òŸKõ€ô[ôYHù[¬ÇÇBB]\Àö\‘^Z[ô»Hò[ŸN¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\›‹
[^HH
H¬ÇÇBZYà
\Àö\‘^XòX⁄–€€ùõ€OOHò[ŸH
H¬ÇÇBBX€€ú€€Kùÿ\õä	’ëQKê]Y[Œà\»]Y[»\»õ»^XòX⁄»€€ùõ€â»
N¬ÇBB\ô]\õé¬ÇÇB_BÇÇB]\Àó‹õŸ‹ô\‹»H¬ÇÇBZYà
\Àú€›\òŸHOOHù[
H¬ÇÇBB]\Àú€›\òŸKú›‹
\Àò€€ù^ò›\úô[ù[YH
»[^H
N¬ÇBB]\Àú€›\òŸKõ€ô[ôYHù[¬ÇÇB_BÇÇB]\Àö\‘^Z[ô»Hò[ŸN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇX€€õôX›

H¬ÇÇBZYà
\Àôö[\úÀõ[ô›à
H¬ÇÇBB]\Àú€›\òŸKò€€õôX›
\Àôö[\ú÷»H
N¬ÇÇBBYõ‹à
]HHKH\Àôö[\úÀõ[ô›»H»H
 »
H¬ÇÇBBB]\Àôö[\ú÷»HHHKò€€õôX›
\Àôö[\ú÷»HH
N¬ÇÇBB_BÇÇBB]\Àôö[\ú÷»\Àôö[\úÀõ[ô›HHKò€€õôX›
\ÀôŸ]›]]

H
N¬ÇÇB_H[ŸH¬ÇÇBB]\Àú€›\òŸKò€€õôX›
\ÀôŸ]›]]

H
N¬ÇÇB_BÇÇB]\Àóÿ€€õôX›YHùYN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇY\ÿ€€õôX›

H¬ÇÇBZYà
\Àóÿ€€õôX›YOOHò[ŸH
H¬ÇÇBB\ô]\õé¬ÇÇB_BÇÇBZYà
\Àôö[\úÀõ[ô›à
H¬ÇÇBB]\Àú€›\òŸKô\ÿ€€õôX›
\Àôö[\ú÷»H
N¬ÇÇBBYõ‹à
]HHKH\Àôö[\úÀõ[ô›»H»H
 »
H¬ÇÇBBB]\Àôö[\ú÷»HHHKô\ÿ€€õôX›
\Àôö[\ú÷»HH
N¬ÇÇBB_BÇÇBB]\Àôö[\ú÷»\Àôö[\úÀõ[ô›HHKô\ÿ€€õôX›
\ÀôŸ]›]]

H
N¬ÇÇB_H[ŸH¬ÇÇBB]\Àú€›\òŸKô\ÿ€€õôX›
\ÀôŸ]›]]

H
N¬ÇÇB_BÇÇB]\Àóÿ€€õôX›YHò[ŸN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇYŸ]ö[\ú 
H¬ÇÇB\ô]\õà\Àôö[\úŒ¬ÇÇ_BÇÇ\Ÿ]ö[\ú ò[YH
H¬ÇÇBZYà
Hò[YH
Hò[YHH◊N¬ÇÇBZYà
\Àóÿ€€õôX›YOOHùYH
H¬ÇÇBB]\Àô\ÿ€€õôX›

N¬ÇBB]\Àôö[\ú»Hò[YKú€XŸJ
N¬ÇBB]\Àò€€õôX›

N¬ÇÇB_H[ŸH¬ÇÇBB]\Àôö[\ú»Hò[YKú€XŸJ
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]][ôJò[YH
H¬ÇÇB]\Àô][ôHHò[YN¬ÇÇBZYà
\Àö\‘^Z[ô»OOHùYH	âà\Àú€›\òŸKô][ôHOOH[ôYö[ôY
H¬ÇÇBB]\Àú€›\òŸKô][ôKúŸ]\ôŸ]][YJ\Àô][ôK\Àò€€ù^ò›\úô[ù[YKåH
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇYŸ]][ôJ
H¬ÇÇB\ô]\õà\Àô][ôN¬ÇÇ_BÇÇYŸ]ö[\ä
H¬ÇÇB\ô]\õà\ÀôŸ]ö[\ú 
V»N¬ÇÇ_BÇÇ\Ÿ]ö[\äö[\à
H¬ÇÇB\ô]\õà\ÀúŸ]ö[\ú ö[\à»»ö[\àHà◊H
N¬ÇÇ_BÇÇ\Ÿ]^XòX⁄‘ò]Jò[YH
H¬ÇÇBZYà
\Àö\‘^XòX⁄–€€ùõ€OOHò[ŸH
H¬ÇÇBBX€€ú€€Kùÿ\õä	’ëQKê]Y[Œà\»]Y[»\»õ»^XòX⁄»€€ùõ€â»
N¬ÇBB\ô]\õé¬ÇÇB_BÇÇB]\Àú^XòX⁄‘ò]HHò[YN¬ÇÇBZYà
\Àö\‘^Z[ô»OOHùYH
H¬ÇÇBB]\Àú€›\òŸKú^XòX⁄‘ò]KúŸ]\ôŸ]][YJ\Àú^XòX⁄‘ò]K\Àò€€ù^ò›\úô[ù[YKåH
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇYŸ]^XòX⁄‘ò]J
H¬ÇÇB\ô]\õà\Àú^XòX⁄‘ò]N¬ÇÇ_BÇÇ[€ë[ôY

H¬ÇÇB]\Àö\‘^Z[ô»Hò[ŸN¬ÇÇ_BÇÇYŸ]€‹

H¬ÇÇBZYà
\Àö\‘^XòX⁄–€€ùõ€OOHò[ŸH
H¬ÇÇBBX€€ú€€Kùÿ\õä	’ëQKê]Y[Œà\»]Y[»\»õ»^XòX⁄»€€ùõ€â»
N¬ÇBB\ô]\õàò[ŸN¬ÇÇB_BÇÇB\ô]\õà\Àõ€‹¬ÇÇ_BÇÇ\Ÿ]€‹
ò[YH
H¬ÇÇBZYà
\Àö\‘^XòX⁄–€€ùõ€OOHò[ŸH
H¬ÇÇBBX€€ú€€Kùÿ\õä	’ëQKê]Y[Œà\»]Y[»\»õ»^XòX⁄»€€ùõ€â»
N¬ÇBB\ô]\õé¬ÇÇB_BÇÇB]\Àõ€‹Hò[YN¬ÇÇBZYà
\Àö\‘^Z[ô»OOHùYH
H¬ÇÇBB]\Àú€›\òŸKõ€‹H\Àõ€‹¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]€‹›\ù
ò[YH
H¬ÇÇB]\Àõ€‹›\ùHò[YN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]€‹[ô
ò[YH
H¬ÇÇB]\Àõ€‹[ôHò[YN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇYŸ]õ€[YJ
H¬ÇÇB\ô]\õà\ÀôÿZ[ãôÿZ[ãùò[YN¬ÇÇ_BÇÇ\Ÿ]õ€[YJò[YH
H¬ÇÇB]\ÀôÿZ[ãôÿZ[ãúŸ]\ôŸ]][YJò[YK\Àò€€ù^ò›\úô[ù[YKåH
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€€ú›‹‹⁄][€àH ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬ò€€ú›‹]X]\õö[€àH ê◊‘TëW◊ ã»ô]»]X]\õö[€ä
N¬ò€€ú›‹ÿÿ[HH ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬ò€€ú›€‹öY[ù][€àH ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬Çò€\‹»‹⁄][€ò[]Y[»^[ô»]Y[»¬ÇÇX€€ú›ùX›‹ä\›[ô\à
H¬ÇÇB\›\\ä\›[ô\à
N¬ÇÇB]\Àú[õô\àH\Àò€€ù^ò‹ôX]T[õô\ä
N¬ÇB]\Àú[õô\ãú[õö[ô”[Ÿ[H	“ïâŒ¬ÇB]\Àú[õô\ãò€€õôX›
\ÀôÿZ[à
N¬ÇÇ_BÇÇX€€õôX›

H¬ÇÇB\›\\ãò€€õôX›

N¬ÇÇB]\Àú[õô\ãò€€õôX›
\ÀôÿZ[à
N¬ÇÇ_BÇÇY\ÿ€€õôX›

H¬ÇÇB\›\\ãô\ÿ€€õôX›

N¬ÇÇB]\Àú[õô\ãô\ÿ€€õôX›
\ÀôÿZ[à
N¬ÇÇ_BÇÇYŸ]›]]

H¬ÇÇB\ô]\õà\Àú[õô\é¬ÇÇ_BÇÇYŸ]ôYë\›[òŸJ
H¬ÇÇB\ô]\õà\Àú[õô\ãúôYë\›[òŸN¬ÇÇ_BÇÇ\Ÿ]ôYë\›[òŸJò[YH
H¬ÇÇB]\Àú[õô\ãúôYë\›[òŸHHò[YN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇYŸ]õ€ŸôëòX›‹ä
H¬ÇÇB\ô]\õà\Àú[õô\ãúõ€ŸôëòX›‹é¬ÇÇ_BÇÇ\Ÿ]õ€ŸôëòX›‹äò[YH
H¬ÇÇB]\Àú[õô\ãúõ€ŸôëòX›‹àHò[YN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇYŸ]\›[òŸS[Ÿ[

H¬ÇÇB\ô]\õà\Àú[õô\ãô\›[òŸS[Ÿ[¬ÇÇ_BÇÇ\Ÿ]\›[òŸS[Ÿ[
ò[YH
H¬ÇÇB]\Àú[õô\ãô\›[òŸS[Ÿ[Hò[YN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇYŸ]X^\›[òŸJ
H¬ÇÇB\ô]\õà\Àú[õô\ãõX^\›[òŸN¬ÇÇ_BÇÇ\Ÿ]X^\›[òŸJò[YH
H¬ÇÇB]\Àú[õô\ãõX^\›[òŸHHò[YN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]\ôX›[€ò[€€ôJ€€ôR[õô\ê[ô€K€€ôS›]\ê[ô€K€€ôS›]\ëÿZ[à
H¬ÇÇB]\Àú[õô\ãò€€ôR[õô\ê[ô€HH€€ôR[õô\ê[ô€N¬ÇB]\Àú[õô\ãò€€ôS›]\ê[ô€HH€€ôS›]\ê[ô€N¬ÇB]\Àú[õô\ãò€€ôS›]\ëÿZ[àH€€ôS›]\ëÿZ[é¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ]\]SX]ö^€‹õ
õ‹òŸH
H¬ÇÇB\›\\ãù\]SX]ö^€‹õ
õ‹òŸH
N¬ÇÇBZYà
\Àö\‘^XòX⁄–€€ùõ€OOHùYH	âà\Àö\‘^Z[ô»OOHò[ŸH
Hô]\õé¬ÇÇB]\ÀõX]ö^€‹õôX€€\‹ŸJ‹‹⁄][€ã‹]X]\õö[€ã‹ÿÿ[H
N¬ÇÇBW€‹öY[ù][€ãúŸ]
H
Kò\T]X]\õö[€ä‹]X]\õö[€à
N¬ÇÇBX€€ú›[õô\àH\Àú[õô\é¬ÇÇBZYà
[õô\ãú‹⁄][€ñ
H¬ÇÇBBKÀ»€ŸH]õ‹à⁄õ€YH[ôö\ôYõﬁ
ŸYHÃMŒL BÇÇBBX€€ú›[ô[YHH\Àò€€ù^ò›\úô[ù[YH
»\Àõ\›[ô\ãù[YQ[N¬ÇÇBB\[õô\ãú‹⁄][€ñõ[ôX\îò[\’ò[YP][YJ‹‹⁄][€ãû[ô[YH
N¬ÇBB\[õô\ãú‹⁄][€ñKõ[ôX\îò[\’ò[YP][YJ‹‹⁄][€ãûK[ô[YH
N¬ÇBB\[õô\ãú‹⁄][€ñãõ[ôX\îò[\’ò[YP][YJ‹‹⁄][€ãûã[ô[YH
N¬ÇBB\[õô\ãõ‹öY[ù][€ñõ[ôX\îò[\’ò[YP][YJ€‹öY[ù][€ãû[ô[YH
N¬ÇBB\[õô\ãõ‹öY[ù][€ñKõ[ôX\îò[\’ò[YP][YJ€‹öY[ù][€ãûK[ô[YH
N¬ÇBB\[õô\ãõ‹öY[ù][€ñãõ[ôX\îò[\’ò[YP][YJ€‹öY[ù][€ãûã[ô[YH
N¬ÇÇB_H[ŸH¬ÇÇBB\[õô\ãúŸ]‹⁄][€ä‹‹⁄][€ãû‹‹⁄][€ãûK‹‹⁄][€ãûà
N¬ÇBB\[õô\ãúŸ]‹öY[ù][€ä€‹öY[ù][€ãû€‹öY[ù][€ãûK€‹öY[ù][€ãûà
N¬ÇÇB_BÇÇ_BÇüBÇò€\‹»]Y[–[ò[\Ÿ\à¬ÇÇX€€ú›ùX›‹ä]Y[Àôù⁄^ôHHå
H¬ÇÇB]\Àò[ò[\Ÿ\àH]Y[Àò€€ù^ò‹ôX]P[ò[\Ÿ\ä
N¬ÇB]\Àò[ò[\Ÿ\ãôôù⁄^ôHHôù⁄^ôN¬ÇÇB]\Àô]HHô]»Z[ù\úò^J\Àò[ò[\Ÿ\ãôúô\]Y[òﬁPö[ê€›[ù
N¬ÇÇBX]Y[ÀôŸ]›]]

Kò€€õôX›
\Àò[ò[\Ÿ\à
N¬ÇÇ_BÇÇÇYŸ]úô\]Y[òﬁQ]J
H¬ÇÇB]\Àò[ò[\Ÿ\ãôŸ]û]Qúô\]Y[òﬁQ]J\Àô]H
N¬ÇÇB\ô]\õà\Àô]N¬ÇÇ_BÇÇYŸ]]ô\òYŸQúô\]Y[òﬁJ
H¬ÇÇB[]ò[YHH¬ÇBX€€ú›]HH\ÀôŸ]úô\]Y[òﬁQ]J
N¬ÇÇBYõ‹à
]HH»H]Kõ[ô›»H
 »
H¬ÇÇBB]ò[YH
œH]V»HN¬ÇÇB_BÇÇB\ô]\õàò[YH»]Kõ[ô›¬ÇÇ_BÇüBÇò€\‹»õ‹\ùSZ^\à¬ÇÇX€€ú›ùX›‹äö[ô[ôÀ\Sò[YKò[YT⁄^ôH
H¬ÇÇB]\Àòö[ô[ô»Hö[ô[ôŒ¬ÇB]\Àùò[YT⁄^ôHHò[YT⁄^ôN¬ÇÇB[]Z^ù[ò›[€ãÇBB[Z^ù[ò›[€êY]]ôKÇBB\Ÿ]Y[ù]N¬ÇÇBKÀ»ùYôô\à^[›]à»[ò€€Z[ô»Xÿ›LXÿ›LH‹öY»YXÿ›H
‹[€ò[€‹ö HBÇBKÀ¬ÇBKÀ»[ù\ú€]‹ú»ÿ[à\ŸHòùYôô\à\»Z\àúô\›[ÇBKÀ»H]H[à€Ÿ\»»	⁄[ò€€Z[ô…¬ÇBKÀ¬ÇBKÀ»	ÿXÿ›L	»[ô	ÿXÿ›LI»\ôH\ŸYúò[YKZ[ù\õX]ôYõ‹ÇÇBKÀ»H›[][]]ôHô\›[[ô\ôH€€\\ôY»]X›ÇBKÀ»⁄[ôŸ\¬ÇBKÀ¬ÇBKÀ»	€‹öY…»›‹ô\»H‹öY⁄[ò[›]HŸàHõ‹\ùBÇBKÀ¬ÇBKÀ»	ÿY	»\»\ŸYõ‹àY]]ôH›[][]]ôHô\›[¬ÇBKÀ¬ÇBKÀ»	›€‹ö…»\»‹[€ò[[ô\»€õHô\Ÿ[ùõ‹à]X]\õö[€à\\Àà]\»\ŸYÇBKÀ»»›‹ôH[ù\õYYX]H]X]\õö[€à][\Xÿ][€àô\›[¬ÇÇB\›⁄]⁄
\Sò[YH
H¬ÇÇBBXÿ\ŸH	‹]X]\õö[€âŒÇÇBBB[Z^ù[ò›[€àH\Àó‹€\ú¬ÇBBB[Z^ù[ò›[€êY]]ôHH\Àó‹€\úY]]ôN¬ÇBBB\Ÿ]Y[ù]HH\Àó‹Ÿ]Y]]ôRY[ù]T]X]\õö[€é¬ÇÇBBB]\ÀòùYôô\àHô]»õÿ]ç\úò^Jò[YT⁄^ôH
àà
N¬ÇBBB]\Àó›€‹ö“[ô^HN¬ÇBBBXúôXZŒ¬ÇÇBBXÿ\ŸH	‹›ö[ô…ŒÇÇBBXÿ\ŸH	ÿõ€€	ŒÇÇBBB[Z^ù[ò›[€àH\Àó‹Ÿ[X›¬ÇÇBBBKÀ»\ŸHHôY›[\àZ^ù[ò›[€à[ôõ‹àY]]ôH€à\ŸH\\ÀÇBBBKÀ»Y]]ôH\»õ›ô[]ò[ùõ‹àõ€ã[ù[Y\öX»\\¬ÇBBB[Z^ù[ò›[€êY]]ôHH\Àó‹Ÿ[X›¬ÇÇBBB\Ÿ]Y[ù]HH\Àó‹Ÿ]Y]]ôRY[ù]S›\é¬ÇÇBBB]\ÀòùYôô\àHô]»\úò^Jò[YT⁄^ôH
àH
N¬ÇBBBXúôXZŒ¬ÇÇBBYYò][ÇÇBBB[Z^ù[ò›[€àH\Àó€\ú¬ÇBBB[Z^ù[ò›[€êY]]ôHH\Àó€\úY]]ôN¬ÇBBB\Ÿ]Y[ù]HH\Àó‹Ÿ]Y]]ôRY[ù]Sù[Y\öXŒ¬ÇÇBBB]\ÀòùYôô\àHô]»õÿ]ç\úò^Jò[YT⁄^ôH
àH
N¬ÇÇB_BÇÇB]\Àó€Z^ùYôô\îôY⁄[€àHZ^ù[ò›[€é¬ÇB]\Àó€Z^ùYôô\îôY⁄[€êY]]ôHHZ^ù[ò›[€êY]]ôN¬ÇB]\Àó‹Ÿ]Y[ù]HHŸ]Y[ù]N¬ÇB]\Àó€‹öY“[ô^HŒ¬ÇB]\ÀóÿY[ô^H¬ÇÇB]\Àò›[][]]ôUŸZY⁄H¬ÇB]\Àò›[][]]ôUŸZY⁄Y]]ôHH¬ÇÇB]\Àù\ŸP€›[ùH¬ÇB]\ÀúôYô\ô[òŸP€›[ùH¬ÇÇ_BÇÇKÀ»Xÿ›[][]H]H[àH	⁄[ò€€Z[ô…»ôY⁄[€à[ù»	ÿXÿ›OOâ¬ÇXXÿ›[][]JXÿ›R[ô^ŸZY⁄
H¬ÇÇBKÀ»õ›Nà\[HXÿ›[][][ô»õ›[ô»⁄[àŸZY⁄HHÿ[\à€õ›‹¬ÇBKÀ»HŸZY⁄[ô⁄›[â›]ôHXYHHÿ[[àHö\ú›XŸBÇÇBX€€ú›ùYôô\àH\ÀòùYôô\ãÇBB\›öYHH\Àùò[YT⁄^ôKÇBB[ŸôúŸ]HXÿ›R[ô^
à›öYH
»›öYN¬ÇÇB[]›\úô[ùŸZY⁄H\Àò›[][]]ôUŸZY⁄¬ÇÇBZYà
›\úô[ùŸZY⁄OOH
H¬ÇÇBBKÀ»Xÿ›SàèH[ò€€Z[ô»
àŸZY⁄ÇÇBBYõ‹à
]HH»HOOH›öYN»
 »H
H¬ÇÇBBBXùYôô\ñ»ŸôúŸ]
»HHHùYôô\ñ»HN¬ÇÇBB_BÇÇBBX›\úô[ùŸZY⁄HŸZY⁄¬ÇÇB_H[ŸH¬ÇÇBBKÀ»Xÿ›SàèHXÿ›Sà
»[ò€€Z[ô»
àŸZY⁄ÇÇBBX›\úô[ùŸZY⁄
œHŸZY⁄¬ÇBBX€€ú›Z^HŸZY⁄»›\úô[ùŸZY⁄¬ÇBB]\Àó€Z^ùYôô\îôY⁄[€äùYôô\ãŸôúŸ]Z^›öYH
N¬ÇÇB_BÇÇB]\Àò›[][]]ôUŸZY⁄H›\úô[ùŸZY⁄¬ÇÇ_BÇÇKÀ»Xÿ›[][]H]H[àH	⁄[ò€€Z[ô…»ôY⁄[€à[ù»	ÿY	¬ÇXXÿ›[][]PY]]ôJŸZY⁄
H¬ÇÇBX€€ú›ùYôô\àH\ÀòùYôô\ãÇBB\›öYHH\Àùò[YT⁄^ôKÇBB[ŸôúŸ]H›öYH
à\ÀóÿY[ô^¬ÇÇBZYà
\Àò›[][]]ôUŸZY⁄Y]]ôHOOH
H¬ÇÇBBKÀ»YHY[ù]BÇÇBB]\Àó‹Ÿ]Y[ù]J
N¬ÇÇB_BÇÇBKÀ»YèHY
»[ò€€Z[ô»
àŸZY⁄ÇÇB]\Àó€Z^ùYôô\îôY⁄[€êY]]ôJùYôô\ãŸôúŸ]ŸZY⁄›öYH
N¬ÇB]\Àò›[][]]ôUŸZY⁄Y]]ôH
œHŸZY⁄¬ÇÇ_BÇÇKÀ»\HH›]HŸà	ÿXÿ›OOâ»»Hö[ô[ô»⁄[àXÿ›\»Yôô\ÇÇX\JXÿ›R[ô^
H¬ÇÇBX€€ú››öYHH\Àùò[YT⁄^ôKÇBBXùYôô\àH\ÀòùYôô\ãÇBB[ŸôúŸ]HXÿ›R[ô^
à›öYH
»›öYKÇÇBB]ŸZY⁄H\Àò›[][]]ôUŸZY⁄ÇBB]ŸZY⁄Y]]ôHH\Àò›[][]]ôUŸZY⁄Y]]ôKÇÇBBXö[ô[ô»H\Àòö[ô[ôŒ¬ÇÇB]\Àò›[][]]ôUŸZY⁄H¬ÇB]\Àò›[][]]ôUŸZY⁄Y]]ôHH¬ÇÇBZYà
ŸZY⁄H
H¬ÇÇBBKÀ»Xÿ›SàèHXÿ›Sà
»‹öY⁄[ò[
à
HH›[][]]ôUŸZY⁄
BÇÇBBX€€ú›‹öY⁄[ò[ò[YSŸôúŸ]H›öYH
à\Àó€‹öY“[ô^¬ÇÇBB]\Àó€Z^ùYôô\îôY⁄[€äÇBBBXùYôô\ãŸôúŸ]‹öY⁄[ò[ò[YSŸôúŸ]HHŸZY⁄›öYH
N¬ÇÇB_BÇÇBZYà
ŸZY⁄Y]]ôHà
H¬ÇÇBBKÀ»Xÿ›SàèHXÿ›Sà
»Y]]ôHXÿ›SÇÇÇBB]\Àó€Z^ùYôô\îôY⁄[€êY]]ôJùYôô\ãŸôúŸ]\ÀóÿY[ô^
à›öYKK›öYH
N¬ÇÇB_BÇÇBYõ‹à
]HH›öYKHH›öYH
»›öYN»HOOHN»
 »H
H¬ÇÇBBZYà
ùYôô\ñ»HHOOHùYôô\ñ»H
»›öYHH
H¬ÇÇBBBKÀ»ò[YH\»⁄[ôŸYOà\]HÿŸ[ôH‹ò\ÇÇBBBXö[ô[ôÀúŸ]ò[YJùYôô\ãŸôúŸ]
N¬ÇBBBXúôXZŒ¬ÇÇBB_BÇÇB_BÇÇ_BÇÇKÀ»ô[Y[Xô\àH›]HŸàHõ›[ôõ‹\ùH[ô€‹H]»õ›Xÿ›\¬Ç\ÿ]ôS‹öY⁄[ò[›]J
H¬ÇÇBX€€ú›ö[ô[ô»H\Àòö[ô[ôŒ¬ÇÇBX€€ú›ùYôô\àH\ÀòùYôô\ãÇBB\›öYHH\Àùò[YT⁄^ôKÇÇBB[‹öY⁄[ò[ò[YSŸôúŸ]H›öYH
à\Àó€‹öY“[ô^¬ÇÇBXö[ô[ôÀôŸ]ò[YJùYôô\ã‹öY⁄[ò[ò[YSŸôúŸ]
N¬ÇÇBKÀ»Xÿ›VÃãåWHèH‹öY»KH[ö]X[H]X›⁄[ôŸ\»YÿZ[ú›H‹öY⁄[ò[ÇBYõ‹à
]HH›öYKHH‹öY⁄[ò[ò[YSŸôúŸ]»HOOHN»
 »H
H¬ÇÇBBXùYôô\ñ»HHHùYôô\ñ»‹öY⁄[ò[ò[YSŸôúŸ]
»
H	H›öYH
HN¬ÇÇB_BÇÇBKÀ»Y»Y[ù]Hõ‹àY]]ôBÇB]\Àó‹Ÿ]Y[ù]J
N¬ÇÇB]\Àò›[][]]ôUŸZY⁄H¬ÇB]\Àò›[][]]ôUŸZY⁄Y]]ôHH¬ÇÇ_BÇÇKÀ»\HH›]Hô]ö[›\€HZŸ[àöXH	‹ÿ]ôS‹öY⁄[ò[›]I»»Hö[ô[ô¬Ç\ô\›‹ôS‹öY⁄[ò[›]J
H¬ÇÇBX€€ú›‹öY⁄[ò[ò[YSŸôúŸ]H\Àùò[YT⁄^ôH
àŒ¬ÇB]\Àòö[ô[ôÀúŸ]ò[YJ\ÀòùYôô\ã‹öY⁄[ò[ò[YSŸôúŸ]
N¬ÇÇ_BÇÇW‹Ÿ]Y]]ôRY[ù]Sù[Y\öX 
H¬ÇÇBX€€ú››\ù[ô^H\ÀóÿY[ô^
à\Àùò[YT⁄^ôN¬ÇBX€€ú›[ô[ô^H›\ù[ô^
»\Àùò[YT⁄^ôN¬ÇÇBYõ‹à
]HH›\ù[ô^»H[ô[ô^»H
 »
H¬ÇÇBB]\ÀòùYôô\ñ»HHH¬ÇÇB_BÇÇ_BÇÇW‹Ÿ]Y]]ôRY[ù]T]X]\õö[€ä
H¬ÇÇB]\Àó‹Ÿ]Y]]ôRY[ù]Sù[Y\öX 
N¬ÇB]\ÀòùYôô\ñ»\ÀóÿY[ô^
à\Àùò[YT⁄^ôH
»»HHN¬ÇÇ_BÇÇW‹Ÿ]Y]]ôRY[ù]S›\ä
H¬ÇÇBX€€ú››\ù[ô^H\Àó€‹öY“[ô^
à\Àùò[YT⁄^ôN¬ÇBX€€ú›\ôŸ][ô^H\ÀóÿY[ô^
à\Àùò[YT⁄^ôN¬ÇÇBYõ‹à
]HH»H\Àùò[YT⁄^ôN»H
 »
H¬ÇÇBB]\ÀòùYôô\ñ»\ôŸ][ô^
»HHH\ÀòùYôô\ñ»›\ù[ô^
»HN¬ÇÇB_BÇÇ_BÇÇÇKÀ»Z^ù[ò›[€ú¬ÇÇW‹Ÿ[X›
ùYôô\ã›ŸôúŸ]‹ò”ŸôúŸ]›öYH
H¬ÇÇBZYà
èHçH
H¬ÇÇBBYõ‹à
]HH»HOOH›öYN»
 »H
H¬ÇÇBBBXùYôô\ñ»›ŸôúŸ]
»HHHùYôô\ñ»‹ò”ŸôúŸ]
»HN¬ÇÇBB_BÇÇB_BÇÇ_BÇÇW‹€\ú
ùYôô\ã›ŸôúŸ]‹ò”ŸôúŸ]
H¬ÇÇBT]X]\õö[€ãú€\úõ]
ùYôô\ã›ŸôúŸ]ùYôô\ã›ŸôúŸ]ùYôô\ã‹ò”ŸôúŸ]
N¬ÇÇ_BÇÇW‹€\úY]]ôJùYôô\ã›ŸôúŸ]‹ò”ŸôúŸ]›öYH
H¬ÇÇBX€€ú›€‹ö”ŸôúŸ]H\Àó›€‹ö“[ô^
à›öYN¬ÇÇBKÀ»›‹ôHô\›[[à[ù\õYYX]HùYôô\àŸôúŸ]ÇBT]X]\õö[€ãõ][\T]X]\õö[€ú—õ]
ùYôô\ã€‹ö”ŸôúŸ]ùYôô\ã›ŸôúŸ]ùYôô\ã‹ò”ŸôúŸ]
N¬ÇÇBKÀ»€\ú»H[ù\õYYX]Hô\›[ÇBT]X]\õö[€ãú€\úõ]
ùYôô\ã›ŸôúŸ]ùYôô\ã›ŸôúŸ]ùYôô\ã€‹ö”ŸôúŸ]
N¬ÇÇ_BÇÇW€\ú
ùYôô\ã›ŸôúŸ]‹ò”ŸôúŸ]›öYH
H¬ÇÇBX€€ú›»HHH¬ÇÇBYõ‹à
]HH»HOOH›öYN»
 »H
H¬ÇÇBBX€€ú›àH›ŸôúŸ]
»N¬ÇÇBBXùYôô\ñ»àHHùYôô\ñ»àH
à»
»ùYôô\ñ»‹ò”ŸôúŸ]
»HH
à¬ÇÇB_BÇÇ_BÇÇW€\úY]]ôJùYôô\ã›ŸôúŸ]‹ò”ŸôúŸ]›öYH
H¬ÇÇBYõ‹à
]HH»HOOH›öYN»
 »H
H¬ÇÇBBX€€ú›àH›ŸôúŸ]
»N¬ÇÇBBXùYôô\ñ»àHHùYôô\ñ»àH
»ùYôô\ñ»‹ò”ŸôúŸ]
»HH
à¬ÇÇB_BÇÇ_BÇüBÇãÀ»⁄\òX›\ú»◊Kéã»\ôHô\Ÿ\ùôYõ‹àòX⁄»ö[ô[ô»ﬁ[ù^Çò€€ú›‘ëT—TïëQ–“Tî◊‘ëHH	◊◊Wéó…Œ¬ò€€ú›‹ô\Ÿ\ùôYôHHô]»ôY—^
	÷…»
»‘ëT—TïëQ–“Tî◊‘ëH
»	◊IÀ	Ÿ…»
N¬ÇãÀ»][\»»[›»õŸHò[Y\»úõ€H[ûH[ô›XYŸKàTÕI‹»ÿôYŸ^X]⁄\¬ãÀ»€õH][à⁄\òX›\úÀ[ôH[öX€ŸH”H\»õ›Y]›\‹ùYà€¬ãÀ»[ú›XYŸH^€YHô\Ÿ\ùôY⁄\òX›\ú»[ôX]⁄]ô\û][ô»[ŸKÇò€€ú››€‹ô⁄\àH	÷◊â»
»‘ëT—TïëQ–“Tî◊‘ëH
»	◊IŒ¬ò€€ú››€‹ô⁄\ì‹ë›H	÷◊â»
»‘ëT—TïëQ–“Tî◊‘ëKúô\XŸJ	◊âÀ	…»
H
»	◊IŒ¬ÇãÀ»\ô[ù\ôX›‹öY\À[[Z]YûH	À…»‹à	ŒâÀà›\úô[ùH[ù\ŸYù]]\›ãÀ»ôHX]⁄Y»\úŸHHô\›ŸàHòX⁄»ò[YKÇò€€ú›Ÿ\ôX›‹ûTôHH ê◊‘TëW◊ ã» 
Œï– ÷◊ŒóJJäKÀú€›\òŸKúô\XŸJ	’–…À›€‹ô⁄\à
N¬ÇãÀ»\ôŸ]õŸKàX^H€€ùZ[à€‹ô⁄\òX›\ú»
K^êKVåNW H[ô	Àâ»‹à	ÀIÀÇò€€ú›€õŸTôHH ê◊‘TëW◊ ã» –”—
 OÀÀú€›\òŸKúô\XŸJ	’–”—	À›€‹ô⁄\ì‹ë›
N¬ÇãÀ»ÿöôX›€à\ôŸ]õŸK[ôXÿŸ\‹€‹ãàX^Hõ›€€ùZ[àô\Ÿ\ùôYãÀ»⁄\òX›\úÀàXÿŸ\‹€‹àX^H€€ùZ[à[ûH⁄\òX›\à^Ÿ\€‹⁄[ô»úòX⁄Ÿ]Çò€€ú›€ÿöôX›ôHH ê◊‘TëW◊ ã» Œóä–  JŒó ä WJO OÀÀú€›\òŸKúô\XŸJ	’–…À›€‹ô⁄\à
N¬ÇãÀ»õ‹\ùH[ôXÿŸ\‹€‹ãàX^Hõ›€€ùZ[àô\Ÿ\ùôY⁄\òX›\úÀàXÿŸ\‹€‹àX^BãÀ»€€ùZ[à[ûHõ€ãXúòX⁄Ÿ]⁄\òX›\úÀÇò€€ú›‹õ‹\ùTôHH ê◊‘TëW◊ ã»◊ä–  JŒó ä WJOÀÀú€›\òŸKúô\XŸJ	’–…À›€‹ô⁄\à
N¬Çò€€ú››òX⁄‘ôHHô]»ôY—^
	…¬ÇJ»	◊â¬ÇJ»Ÿ\ôX›‹ûTôBÇJ»€õŸTôBÇJ»€ÿöôX›ôBÇJ»‹õ‹\ùTôBÇJ»	…	¬äN¬Çò€€ú›‹›\‹ùYÿöôX›ò[Y\»H»	€X]\öX[	À	€X]\öX[…À	ÿõ€ô\…À	€X\	»N¬Çò€\‹»€€\‹⁄]H¬ÇÇX€€ú›ùX›‹ä\ôŸ]‹õ›\]‹[€ò[\úŸY]
H¬ÇÇBX€€ú›\úŸY]H‹[€ò[\úŸY]õ‹\ùPö[ô[ôÀú\úŸUòX⁄”ò[YJ]
N¬ÇÇB]\Àó›\ôŸ]‹õ›\H\ôŸ]‹õ›\¬ÇB]\Àóÿö[ô[ô‹»H\ôŸ]‹õ›\ú›Xúÿ‹öXôW ]\úŸY]
N¬ÇÇ_BÇÇYŸ]ò[YJ\úò^KŸôúŸ]
H¬ÇÇB]\Àòö[ô

N»À»ö[ô[ö[ô[ô¬ÇÇBX€€ú›ö\ú›ò[Y[ô^H\Àó›\ôŸ]‹õ›\õêÿX⁄YÿöôX›◊ÀÇBBXö[ô[ô»H\Àóÿö[ô[ô‹÷»ö\ú›ò[Y[ô^N¬ÇÇBKÀ»[ô€õHÿ[ôŸ]ò[YH€àHö\ú›ÇBZYà
ö[ô[ô»OOH[ôYö[ôY
Hö[ô[ôÀôŸ]ò[YJ\úò^KŸôúŸ]
N¬ÇÇ_BÇÇ\Ÿ]ò[YJ\úò^KŸôúŸ]
H¬ÇÇBX€€ú›ö[ô[ô‹»H\Àóÿö[ô[ô‹Œ¬ÇÇBYõ‹à
]HH\Àó›\ôŸ]‹õ›\õêÿX⁄YÿöôX›◊ÀàHö[ô[ô‹Àõ[ô›»HOOHé»
 »H
H¬ÇÇBBXö[ô[ô‹÷»HKúŸ]ò[YJ\úò^KŸôúŸ]
N¬ÇÇB_BÇÇ_BÇÇXö[ô

H¬ÇÇBX€€ú›ö[ô[ô‹»H\Àóÿö[ô[ô‹Œ¬ÇÇBYõ‹à
]HH\Àó›\ôŸ]‹õ›\õêÿX⁄YÿöôX›◊ÀàHö[ô[ô‹Àõ[ô›»HOOHé»
 »H
H¬ÇÇBBXö[ô[ô‹÷»HKòö[ô

N¬ÇÇB_BÇÇ_BÇÇ][òö[ô

H¬ÇÇBX€€ú›ö[ô[ô‹»H\Àóÿö[ô[ô‹Œ¬ÇÇBYõ‹à
]HH\Àó›\ôŸ]‹õ›\õêÿX⁄YÿöôX›◊ÀàHö[ô[ô‹Àõ[ô›»HOOHé»
 »H
H¬ÇÇBBXö[ô[ô‹÷»HKù[òö[ô

N¬ÇÇB_BÇÇ_BÇüBÇãÀ»õ›Nà\»€\‹»\Ÿ\»H›]H]\õà€àH\ã[Y]Ÿò\⁄\ŒÇãÀ»	ÿö[ô	»Ÿ]»	›\ÀôŸ]ò[YI»»	‹Ÿ]ò[YI»[ô⁄Y›‹»BãÀ»õ››\Hô\ú⁄[€àŸà\ŸHY]Ÿ»⁄]€ôH]ô\ô\Ÿ[ù¬ãÀ»Hõ›[ô›]Kà⁄[àHõ‹\ùH\»õ›õ›[ôHY]Ÿ¬ãÀ»ôX€€YHõÀ[‹ÀÇò€\‹»õ‹\ùPö[ô[ô»¬ÇÇX€€ú›ùX›‹äõ€›õŸK]\úŸY]
H¬ÇÇB]\Àú]H]¬ÇB]\Àú\úŸY]H\úŸY]õ‹\ùPö[ô[ôÀú\úŸUòX⁄”ò[YJ]
N¬ÇÇB]\ÀõõŸHHõ‹\ùPö[ô[ôÀôö[ôõŸJõ€›õŸK\Àú\úŸY]õõŸSò[YH
N¬ÇÇB]\Àúõ€›õŸHHõ€›õŸN¬ÇÇBKÀ»[ö]X[›]HŸà\ŸHY]Ÿ»]ÿ[»	ÿö[ô	¬ÇB]\ÀôŸ]ò[YHH\ÀóŸŸ]ò[YW›[òõ›[ô¬ÇB]\ÀúŸ]ò[YHH\Àó‹Ÿ]ò[YW›[òõ›[ô¬ÇÇ_BÇÇÇ\›]X»‹ôX]Jõ€›]\úŸY]
H¬ÇÇBZYà
H
õ€›	âàõ€›ö\–[ö[X][€ìÿöôX›‹õ›\
H
H¬ÇÇBB\ô]\õàô]»õ‹\ùPö[ô[ô õ€›]\úŸY]
N¬ÇÇB_H[ŸH¬ÇÇBB\ô]\õàô]»õ‹\ùPö[ô[ôÀê€€\‹⁄]Jõ€›]\úŸY]
N¬ÇÇB_BÇÇ_BÇÇK äÇÇH
àô\XŸ\»‹XŸ\»⁄][ô\úÿ€‹ô\»[ôô[[›ô\»[ú›\‹ùY⁄\òX›\ú»úõ€BÇH
àõŸHò[Y\À»[ú›\ôH€€\]Xö[]H⁄]\úŸUòX⁄”ò[YJ
KÇÇH
ÇÇH
à\ò[H‹›ö[ôﬂHò[YHõŸHò[YH»ôHÿ[ö]^ôYÇÇH
àô]\õà‹›ö[ôﬂBÇH
ã¬Ç\›]X»ÿ[ö]^ôSõŸSò[YJò[YH
H¬ÇÇB\ô]\õàò[YKúô\XŸJ◊ÀŸÀ	◊…»
Kúô\XŸJ‹ô\Ÿ\ùôYôK	…»
N¬ÇÇ_BÇÇ\›]X»\úŸUòX⁄”ò[YJòX⁄”ò[YH
H¬ÇÇBX€€ú›X]⁄\»H›òX⁄‘ôKô^X òX⁄”ò[YH
N¬ÇÇBZYà
X]⁄\»OOHù[
H¬ÇÇBB]õ›»ô]»\úõ‹ä	‘õ‹\ùPö[ô[ôŒàÿ[õõ›\úŸHòX⁄”ò[YNà	»
»òX⁄”ò[YH
N¬ÇÇB_BÇÇBX€€ú›ô\›[»H¬ÇBBKÀ»\ôX›‹ûSò[YNàX]⁄\÷»HKÀ»
ÿ⁄ H›\úô[ùH[ù\ŸYÇBB[õŸSò[YNàX]⁄\÷»àKÇBB[ÿöôX›ò[YNàX]⁄\÷»»KÇBB[ÿöôX›[ô^àX]⁄\÷»KÇBB\õ‹\ùSò[YNàX]⁄\÷»HKÀ»ô\]Z\ôYÇBB\õ‹\ùR[ô^àX]⁄\÷»àBÇB_N¬ÇÇBX€€ú›\››Hô\›[ÀõõŸSò[YH	âàô\›[ÀõõŸSò[YKõ\›[ô^Ÿä	Àâ»
N¬ÇÇBZYà
\››OOH[ôYö[ôY	âà\››OOHHH
H¬ÇÇBBX€€ú›ÿöôX›ò[YHHô\›[ÀõõŸSò[YKú›Xú›ö[ô \››
»H
N¬ÇÇBBKÀ»ÿöôX›ò[Y\»]\›ôH⁄X⁄ŸYYÿZ[ú›[à[›€\›à›\ù⁄\ŸK\ôBÇBBKÀ»\»õ»ÿ^H»\úŸH	Ÿõ€Àòò\ãòò^âŒà	ÿò^â»]\›ôHHõ‹\ùKù]ÇBBKÀ»	ÿò\â»€›[ôHHÿöôX›ò[YK‹à\ùŸàHõŸSò[YH
⁄X⁄ÿ[ÇÇBBKÀ»[ò€YH	Àâ»⁄\òX›\ú KÇÇBBZYà
‹›\‹ùYÿöôX›ò[Y\Àö[ô^ŸäÿöôX›ò[YH
HOOHHH
H¬ÇÇBBB\ô\›[ÀõõŸSò[YHHô\›[ÀõõŸSò[YKú›Xú›ö[ô \››
N¬ÇBBB\ô\›[ÀõÿöôX›ò[YHHÿöôX›ò[YN¬ÇÇBB_BÇÇB_BÇÇBZYà
ô\›[Àúõ‹\ùSò[YHOOHù[ô\›[Àúõ‹\ùSò[YKõ[ô›OOH
H¬ÇÇBB]õ›»ô]»\úõ‹ä	‘õ‹\ùPö[ô[ôŒàÿ[àõ›\úŸHõ‹\ùSò[YHúõ€HòX⁄”ò[YNà	»
»òX⁄”ò[YH
N¬ÇÇB_BÇÇB\ô]\õàô\›[Œ¬ÇÇ_BÇÇ\›]X»ö[ôõŸJõ€›õŸSò[YH
H¬ÇÇBZYà
õŸSò[YHOOH[ôYö[ôYõŸSò[YHOOH	…»õŸSò[YHOOH	Àâ»õŸSò[YHOOHHHõŸSò[YHOOHõ€›õò[YHõŸSò[YHOOHõ€›ù]ZY
H¬ÇÇBB\ô]\õàõ€›¬ÇÇB_BÇÇBKÀ»ŸX\ò⁄[ù»⁄Ÿ[]€àõ€ô\ÀÇÇBZYà
õ€›ú⁄Ÿ[]€à
H¬ÇÇBBX€€ú›õ€ôHHõ€›ú⁄Ÿ[]€ãôŸ]õ€ôPûSò[YJõŸSò[YH
N¬ÇÇBBZYà
õ€ôHOOH[ôYö[ôY
H¬ÇÇBBB\ô]\õàõ€ôN¬ÇÇBB_BÇÇB_BÇÇBKÀ»ŸX\ò⁄[ù»õŸH›XùôYKÇÇBZYà
õ€›ò⁄[ô[à
H¬ÇÇBBX€€ú›ŸX\ò⁄õŸT›XùôYHHù[ò›[€à
⁄[ô[à
H¬ÇÇBBBYõ‹à
]HH»H⁄[ô[ãõ[ô›»H
 »
H¬ÇÇBBBBX€€ú›⁄[õŸHH⁄[ô[ñ»HN¬ÇÇBBBBZYà
⁄[õŸKõò[YHOOHõŸSò[YH⁄[õŸKù]ZYOOHõŸSò[YH
H¬ÇÇBBBBB\ô]\õà⁄[õŸN¬ÇÇBBBB_BÇÇBBBBX€€ú›ô\›[HŸX\ò⁄õŸT›XùôYJ⁄[õŸKò⁄[ô[à
N¬ÇÇBBBBZYà
ô\›[
Hô]\õàô\›[¬ÇÇBBB_BÇÇBBB\ô]\õàù[¬ÇÇBB_N¬ÇÇBBX€€ú››XïôYSõŸHHŸX\ò⁄õŸT›XùôYJõ€›ò⁄[ô[à
N¬ÇÇBBZYà
›XïôYSõŸH
H¬ÇÇBBB\ô]\õà›XïôYSõŸN¬ÇÇBB_BÇÇB_BÇÇB\ô]\õàù[¬ÇÇ_BÇÇKÀ»\ŸH\ôH\ŸY»òö[ôàHõ€ô^\›[ùõ‹\ùBÇWŸŸ]ò[YW›[ò]òZ[XõJ
HﬂBÇW‹Ÿ]ò[YW›[ò]òZ[XõJ
HﬂBÇÇKÀ»Ÿ]\ú¬ÇÇWŸŸ]ò[YWŸ\ôX›
ùYôô\ãŸôúŸ]
H¬ÇÇBXùYôô\ñ»ŸôúŸ]HH\Àù\ôŸ]ÿöôX›»\Àúõ‹\ùSò[YHN¬ÇÇ_BÇÇWŸŸ]ò[YWÿ\úò^JùYôô\ãŸôúŸ]
H¬ÇÇBX€€ú›€›\òŸHH\Àúô\€€ôYõ‹\ùN¬ÇÇBYõ‹à
]HHàH€›\òŸKõ[ô›»HOOHé»
 »H
H¬ÇÇBBXùYôô\ñ»ŸôúŸ]
 »HH€›\òŸV»HN¬ÇÇB_BÇÇ_BÇÇWŸŸ]ò[YWÿ\úò^Q[[Y[ù
ùYôô\ãŸôúŸ]
H¬ÇÇBXùYôô\ñ»ŸôúŸ]HH\Àúô\€€ôYõ‹\ùV»\Àúõ‹\ùR[ô^N¬ÇÇ_BÇÇWŸŸ]ò[YW›–\úò^JùYôô\ãŸôúŸ]
H¬ÇÇB]\Àúô\€€ôYõ‹\ùKù–\úò^JùYôô\ãŸôúŸ]
N¬ÇÇ_BÇÇKÀ»\ôX›ÇÇW‹Ÿ]ò[YWŸ\ôX›
ùYôô\ãŸôúŸ]
H¬ÇÇB]\Àù\ôŸ]ÿöôX›»\Àúõ‹\ùSò[YHHHùYôô\ñ»ŸôúŸ]N¬ÇÇ_BÇÇW‹Ÿ]ò[YWŸ\ôX›‹Ÿ]ôYY’\]JùYôô\ãŸôúŸ]
H¬ÇÇB]\Àù\ôŸ]ÿöôX›»\Àúõ‹\ùSò[YHHHùYôô\ñ»ŸôúŸ]N¬ÇB]\Àù\ôŸ]ÿöôX›õôYY’\]HHùYN¬ÇÇ_BÇÇW‹Ÿ]ò[YWŸ\ôX›‹Ÿ]X]ö^€‹õôYY’\]JùYôô\ãŸôúŸ]
H¬ÇÇB]\Àù\ôŸ]ÿöôX›»\Àúõ‹\ùSò[YHHHùYôô\ñ»ŸôúŸ]N¬ÇB]\Àù\ôŸ]ÿöôX›õX]ö^€‹õôYY’\]HHùYN¬ÇÇ_BÇÇKÀ»[ù\ôP\úò^BÇÇW‹Ÿ]ò[YWÿ\úò^JùYôô\ãŸôúŸ]
H¬ÇÇBX€€ú›\›H\Àúô\€€ôYõ‹\ùN¬ÇÇBYõ‹à
]HHàH\›õ[ô›»HOOHé»
 »H
H¬ÇÇBBY\›»HHHùYôô\ñ»ŸôúŸ]
 »N¬ÇÇB_BÇÇ_BÇÇW‹Ÿ]ò[YWÿ\úò^W‹Ÿ]ôYY’\]JùYôô\ãŸôúŸ]
H¬ÇÇBX€€ú›\›H\Àúô\€€ôYõ‹\ùN¬ÇÇBYõ‹à
]HHàH\›õ[ô›»HOOHé»
 »H
H¬ÇÇBBY\›»HHHùYôô\ñ»ŸôúŸ]
 »N¬ÇÇB_BÇÇB]\Àù\ôŸ]ÿöôX›õôYY’\]HHùYN¬ÇÇ_BÇÇW‹Ÿ]ò[YWÿ\úò^W‹Ÿ]X]ö^€‹õôYY’\]JùYôô\ãŸôúŸ]
H¬ÇÇBX€€ú›\›H\Àúô\€€ôYõ‹\ùN¬ÇÇBYõ‹à
]HHàH\›õ[ô›»HOOHé»
 »H
H¬ÇÇBBY\›»HHHùYôô\ñ»ŸôúŸ]
 »N¬ÇÇB_BÇÇB]\Àù\ôŸ]ÿöôX›õX]ö^€‹õôYY’\]HHùYN¬ÇÇ_BÇÇKÀ»\úò^Q[[Y[ùÇÇW‹Ÿ]ò[YWÿ\úò^Q[[Y[ù
ùYôô\ãŸôúŸ]
H¬ÇÇB]\Àúô\€€ôYõ‹\ùV»\Àúõ‹\ùR[ô^HHùYôô\ñ»ŸôúŸ]N¬ÇÇ_BÇÇW‹Ÿ]ò[YWÿ\úò^Q[[Y[ù‹Ÿ]ôYY’\]JùYôô\ãŸôúŸ]
H¬ÇÇB]\Àúô\€€ôYõ‹\ùV»\Àúõ‹\ùR[ô^HHùYôô\ñ»ŸôúŸ]N¬ÇB]\Àù\ôŸ]ÿöôX›õôYY’\]HHùYN¬ÇÇ_BÇÇW‹Ÿ]ò[YWÿ\úò^Q[[Y[ù‹Ÿ]X]ö^€‹õôYY’\]JùYôô\ãŸôúŸ]
H¬ÇÇB]\Àúô\€€ôYõ‹\ùV»\Àúõ‹\ùR[ô^HHùYôô\ñ»ŸôúŸ]N¬ÇB]\Àù\ôŸ]ÿöôX›õX]ö^€‹õôYY’\]HHùYN¬ÇÇ_BÇÇKÀ»\’—úõ€P\úò^BÇÇW‹Ÿ]ò[YWŸúõ€P\úò^JùYôô\ãŸôúŸ]
H¬ÇÇB]\Àúô\€€ôYõ‹\ùKôúõ€P\úò^JùYôô\ãŸôúŸ]
N¬ÇÇ_BÇÇW‹Ÿ]ò[YWŸúõ€P\úò^W‹Ÿ]ôYY’\]JùYôô\ãŸôúŸ]
H¬ÇÇB]\Àúô\€€ôYõ‹\ùKôúõ€P\úò^JùYôô\ãŸôúŸ]
N¬ÇB]\Àù\ôŸ]ÿöôX›õôYY’\]HHùYN¬ÇÇ_BÇÇW‹Ÿ]ò[YWŸúõ€P\úò^W‹Ÿ]X]ö^€‹õôYY’\]JùYôô\ãŸôúŸ]
H¬ÇÇB]\Àúô\€€ôYõ‹\ùKôúõ€P\úò^JùYôô\ãŸôúŸ]
N¬ÇB]\Àù\ôŸ]ÿöôX›õX]ö^€‹õôYY’\]HHùYN¬ÇÇ_BÇÇWŸŸ]ò[YW›[òõ›[ô
\ôŸ]\úò^KŸôúŸ]
H¬ÇÇB]\Àòö[ô

N¬ÇB]\ÀôŸ]ò[YJ\ôŸ]\úò^KŸôúŸ]
N¬ÇÇ_BÇÇW‹Ÿ]ò[YW›[òõ›[ô
€›\òŸP\úò^KŸôúŸ]
H¬ÇÇB]\Àòö[ô

N¬ÇB]\ÀúŸ]ò[YJ€›\òŸP\úò^KŸôúŸ]
N¬ÇÇ_BÇÇKÀ»‹ôX]HŸ]\à»Ÿ]\àZ\àõ‹àHõ‹\ùH[àHÿŸ[ôH‹ò\ÇXö[ô

H¬ÇÇB[]\ôŸ]ÿöôX›H\ÀõõŸN¬ÇBX€€ú›\úŸY]H\Àú\úŸY]¬ÇÇBX€€ú›ÿöôX›ò[YHH\úŸY]õÿöôX›ò[YN¬ÇBX€€ú›õ‹\ùSò[YHH\úŸY]úõ‹\ùSò[YN¬ÇB[]õ‹\ùR[ô^H\úŸY]úõ‹\ùR[ô^¬ÇÇBZYà
H\ôŸ]ÿöôX›
H¬ÇÇBB]\ôŸ]ÿöôX›Hõ‹\ùPö[ô[ôÀôö[ôõŸJ\Àúõ€›õŸK\úŸY]õõŸSò[YH
N¬ÇÇBB]\ÀõõŸHH\ôŸ]ÿöôX›¬ÇÇB_BÇÇBKÀ»Ÿ]òZ[›]H€»ŸHÿ[àù\›	‹ô]\õâ»€à\úõ‹ÇÇB]\ÀôŸ]ò[YHH\ÀóŸŸ]ò[YW›[ò]òZ[XõN¬ÇB]\ÀúŸ]ò[YHH\Àó‹Ÿ]ò[YW›[ò]òZ[XõN¬ÇÇBKÀ»[ú›\ôH\ôH\»Hò[YHõŸBÇBZYà
H\ôŸ]ÿöôX›
H¬ÇÇBBX€€ú€€Kùÿ\õä	’ëQKîõ‹\ùPö[ô[ôŒàõ»\ôŸ]õŸHõ›[ôõ‹àòX⁄Œà	»
»\Àú]
»	Àâ»
N¬ÇBB\ô]\õé¬ÇÇB_BÇÇBZYà
ÿöôX›ò[YH
H¬ÇÇBB[]ÿöôX›[ô^H\úŸY]õÿöôX›[ô^¬ÇÇBBKÀ»‹X⁄X[ÿ\Ÿ\»Ÿ\ôHŸHôYY»ôXX⁄Y\\à[ù»HY\ò\ò⁄H»Ÿ]HòXŸHX]\öX[ÀãããÇÇBB\›⁄]⁄
ÿöôX›ò[YH
H¬ÇÇBBBXÿ\ŸH	€X]\öX[…ŒÇÇÇBBBBZYà
H\ôŸ]ÿöôX›õX]\öX[
H¬ÇÇBBBBBX€€ú€€Kô\úõ‹ä	’ëQKîõ‹\ùPö[ô[ôŒàÿ[àõ›ö[ô»X]\öX[\»õŸHŸ\»õ›]ôHHX]\öX[âÀ\»
N¬ÇBBBBB\ô]\õé¬ÇÇBBBB_BÇÇBBBBZYà
H\ôŸ]ÿöôX›õX]\öX[õX]\öX[»
H¬ÇÇBBBBBX€€ú€€Kô\úõ‹ä	’ëQKîõ‹\ùPö[ô[ôŒàÿ[àõ›ö[ô»X]\öX[õX]\öX[»\»õŸKõX]\öX[Ÿ\»õ›]ôHHX]\öX[»\úò^KâÀ\»
N¬ÇBBBBB\ô]\õé¬ÇÇBBBB_BÇÇBBBB]\ôŸ]ÿöôX›H\ôŸ]ÿöôX›õX]\öX[õX]\öX[Œ¬ÇÇBBBBXúôXZŒ¬ÇÇBBBXÿ\ŸH	ÿõ€ô\…ŒÇÇÇBBBBZYà
H\ôŸ]ÿöôX›ú⁄Ÿ[]€à
H¬ÇÇBBBBBX€€ú€€Kô\úõ‹ä	’ëQKîõ‹\ùPö[ô[ôŒàÿ[àõ›ö[ô»õ€ô\»\»õŸHŸ\»õ›]ôHH⁄Ÿ[]€ãâÀ\»
N¬ÇBBBBB\ô]\õé¬ÇÇBBBB_BÇÇBBBBKÀ»›[ùX[ù]\ôH‹[Z^ò][€éà⁄⁄\\»Yàõ‹\ùR[ô^\»[ôXYH[à[ùYŸ\ÇÇBBBBKÀ»[ô€€ùô\ùH[ùYŸ\à›ö[ô»»HùYH[ùYŸ\ãÇÇÇBBBB]\ôŸ]ÿöôX›H\ôŸ]ÿöôX›ú⁄Ÿ[]€ãòõ€ô\Œ¬ÇÇBBBBKÀ»›\‹ùô\€€ö[ô»[‹ú\ôŸ]ò[Y\»[ù»[ôXŸ\ÀÇÇBBBBYõ‹à
]HH»H\ôŸ]ÿöôX›õ[ô›»H
 »
H¬ÇÇBBBBBZYà
\ôŸ]ÿöôX›»HKõò[YHOOHÿöôX›[ô^
H¬ÇÇBBBBBB[ÿöôX›[ô^HN¬ÇBBBBBBXúôXZŒ¬ÇÇBBBBB_BÇÇBBBB_BÇÇBBBBXúôXZŒ¬ÇÇBBBXÿ\ŸH	€X\	ŒÇÇÇBBBBZYà
	€X\	»[à\ôŸ]ÿöôX›
H¬ÇÇBBBBB]\ôŸ]ÿöôX›H\ôŸ]ÿöôX›õX\¬ÇBBBBBXúôXZŒ¬ÇÇBBBB_BÇÇBBBBZYà
H\ôŸ]ÿöôX›õX]\öX[
H¬ÇÇBBBBBX€€ú€€Kô\úõ‹ä	’ëQKîõ‹\ùPö[ô[ôŒàÿ[àõ›ö[ô»X]\öX[\»õŸHŸ\»õ›]ôHHX]\öX[âÀ\»
N¬ÇBBBBB\ô]\õé¬ÇÇBBBB_BÇÇBBBBZYà
H\ôŸ]ÿöôX›õX]\öX[õX\
H¬ÇÇBBBBBX€€ú€€Kô\úõ‹ä	’ëQKîõ‹\ùPö[ô[ôŒàÿ[àõ›ö[ô»X]\öX[õX\\»õŸKõX]\öX[Ÿ\»õ›]ôHHX\âÀ\»
N¬ÇBBBBB\ô]\õé¬ÇÇBBBB_BÇÇBBBB]\ôŸ]ÿöôX›H\ôŸ]ÿöôX›õX]\öX[õX\¬ÇBBBBXúôXZŒ¬ÇÇBBBYYò][ÇÇÇBBBBZYà
\ôŸ]ÿöôX›»ÿöôX›ò[YHHOOH[ôYö[ôY
H¬ÇÇBBBBBX€€ú€€Kô\úõ‹ä	’ëQKîõ‹\ùPö[ô[ôŒàÿ[àõ›ö[ô»ÿöôX›ò[YHŸàõŸH[ôYö[ôYâÀ\»
N¬ÇBBBBB\ô]\õé¬ÇÇBBBB_BÇÇBBBB]\ôŸ]ÿöôX›H\ôŸ]ÿöôX›»ÿöôX›ò[YHN¬ÇÇBB_BÇÇÇBBZYà
ÿöôX›[ô^OOH[ôYö[ôY
H¬ÇÇBBBZYà
\ôŸ]ÿöôX›»ÿöôX›[ô^HOOH[ôYö[ôY
H¬ÇÇBBBBX€€ú€€Kô\úõ‹ä	’ëQKîõ‹\ùPö[ô[ôŒàûZ[ô»»ö[ô»ÿöôX›[ô^ŸàÿöôX›ò[YKù]\»[ôYö[ôYâÀ\À\ôŸ]ÿöôX›
N¬ÇBBBB\ô]\õé¬ÇÇBBB_BÇÇBBB]\ôŸ]ÿöôX›H\ôŸ]ÿöôX›»ÿöôX›[ô^N¬ÇÇBB_BÇÇB_BÇÇBKÀ»ô\€€ôHõ‹\ùBÇBX€€ú›õŸTõ‹\ùHH\ôŸ]ÿöôX›»õ‹\ùSò[YHN¬ÇÇBZYà
õŸTõ‹\ùHOOH[ôYö[ôY
H¬ÇÇBBX€€ú›õŸSò[YHH\úŸY]õõŸSò[YN¬ÇÇBBX€€ú€€Kô\úõ‹ä	’ëQKîõ‹\ùPö[ô[ôŒàûZ[ô»»\]Hõ‹\ùHõ‹àòX⁄Œà	»
»õŸSò[YH
¬ÇBBBIÀâ»
»õ‹\ùSò[YH
»	»ù]]ÿ\€ó	›õ›[ôâÀ\ôŸ]ÿöôX›
N¬ÇBB\ô]\õé¬ÇÇB_BÇÇBKÀ»]\õZ[ôHô\ú⁄[€ö[ô»ÿ⁄[YBÇB[]ô\ú⁄[€ö[ô»H\Àïô\ú⁄[€ö[ôÀìõ€ôN¬ÇÇB]\Àù\ôŸ]ÿöôX›H\ôŸ]ÿöôX›¬ÇÇBZYà
\ôŸ]ÿöôX›õôYY’\]HOOH[ôYö[ôY
H»À»X]\öX[ÇÇBB]ô\ú⁄[€ö[ô»H\Àïô\ú⁄[€ö[ôÀìôYY’\]N¬ÇÇB_H[ŸHYà
\ôŸ]ÿöôX›õX]ö^€‹õôYY’\]HOOH[ôYö[ôY
H»À»õŸHò[úŸõ‹õBÇÇBB]ô\ú⁄[€ö[ô»H\Àïô\ú⁄[€ö[ôÀìX]ö^€‹õôYY’\]N¬ÇÇB_BÇÇBKÀ»]\õZ[ôH›»Hõ‹\ùHŸ]»õ›[ôÇB[]ö[ô[ô’\HH\Àêö[ô[ô’\Kë\ôX›¬ÇÇBZYà
õ‹\ùR[ô^OOH[ôYö[ôY
H¬ÇÇBBKÀ»XÿŸ\‹»H›Xà[[Y[ùŸàHõ‹\ùH\úò^H
€õHö[Z]]ô\»\ôH›\‹ùYöY⁄õ› BÇÇBBZYà
õ‹\ùSò[YHOOH	€[‹ú\ôŸ][ôõY[òŸ\…»
H¬ÇÇBBBKÀ»›[ùX[‹[Z^ò][€ã⁄⁄\\»Yàõ‹\ùR[ô^\»[ôXYH[à[ùYŸ\ã[ô€€ùô\ùH[ùYŸ\à›ö[ô»»HùYH[ùYŸ\ãÇÇÇBBBKÀ»›\‹ùô\€€ö[ô»[‹ú\ôŸ]ò[Y\»[ù»[ôXŸ\ÀÇÇBBBZYà
H\ôŸ]ÿöôX›ôŸ[€Y]ûH
H¬ÇÇBBBBX€€ú€€Kô\úõ‹ä	’ëQKîõ‹\ùPö[ô[ôŒàÿ[àõ›ö[ô»[‹ú\ôŸ][ôõY[òŸ\»ôXÿ]\ŸHõŸHŸ\»õ›]ôHHŸ[€Y]ûKâÀ\»
N¬ÇBBBB\ô]\õé¬ÇÇBBB_BÇÇBBBZYà
H\ôŸ]ÿöôX›ôŸ[€Y]ûKõ[‹ú]öXù]\»
H¬ÇÇBBBBX€€ú€€Kô\úõ‹ä	’ëQKîõ‹\ùPö[ô[ôŒàÿ[àõ›ö[ô»[‹ú\ôŸ][ôõY[òŸ\»ôXÿ]\ŸHõŸHŸ\»õ›]ôHHŸ[€Y]ûKõ[‹ú]öXù]\ÀâÀ\»
N¬ÇBBBB\ô]\õé¬ÇÇBBB_BÇÇBBBZYà
\ôŸ]ÿöôX›õ[‹ú\ôŸ]X›[€ò\ûV»õ‹\ùR[ô^HOOH[ôYö[ôY
H¬ÇÇBBBB\õ‹\ùR[ô^H\ôŸ]ÿöôX›õ[‹ú\ôŸ]X›[€ò\ûV»õ‹\ùR[ô^N¬ÇÇBBB_BÇÇBB_BÇÇBBXö[ô[ô’\HH\Àêö[ô[ô’\Kê\úò^Q[[Y[ù¬ÇÇBB]\Àúô\€€ôYõ‹\ùHHõŸTõ‹\ùN¬ÇBB]\Àúõ‹\ùR[ô^Hõ‹\ùR[ô^¬ÇÇB_H[ŸHYà
õŸTõ‹\ùKôúõ€P\úò^HOOH[ôYö[ôY	âàõŸTõ‹\ùKù–\úò^HOOH[ôYö[ôY
H¬ÇÇBBKÀ»]\›\ŸH€‹Hõ‹àÿöôX›—ë][\ã‘]X]\õö[€ÇÇÇBBXö[ô[ô’\HH\Àêö[ô[ô’\Kí\—úõ€U–\úò^N¬ÇÇBB]\Àúô\€€ôYõ‹\ùHHõŸTõ‹\ùN¬ÇÇB_H[ŸHYà
\úò^Kö\–\úò^JõŸTõ‹\ùH
H
H¬ÇÇBBXö[ô[ô’\HH\Àêö[ô[ô’\Kë[ù\ôP\úò^N¬ÇÇBB]\Àúô\€€ôYõ‹\ùHHõŸTõ‹\ùN¬ÇÇB_H[ŸH¬ÇÇBB]\Àúõ‹\ùSò[YHHõ‹\ùSò[YN¬ÇÇB_BÇÇBKÀ»Ÿ[X›Ÿ]\à»Ÿ]\ÇÇB]\ÀôŸ]ò[YHH\ÀëŸ]\êûPö[ô[ô’\V»ö[ô[ô’\HN¬ÇB]\ÀúŸ]ò[YHH\ÀîŸ]\êûPö[ô[ô’\P[ôô\ú⁄[€ö[ô÷»ö[ô[ô’\HV»ô\ú⁄[€ö[ô»N¬ÇÇ_BÇÇ][òö[ô

H¬ÇÇB]\ÀõõŸHHù[¬ÇÇBKÀ»òX⁄»»Hõ››\Hô\ú⁄[€àŸàŸ]ò[YH»Ÿ]ò[YBÇBKÀ»õ›Nà]õ⁄Y[ô»»]]]HH⁄\HŸà	›\…»öXH	Ÿ[]I¬ÇB]\ÀôŸ]ò[YHH\ÀóŸŸ]ò[YW›[òõ›[ô¬ÇB]\ÀúŸ]ò[YHH\Àó‹Ÿ]ò[YW›[òõ›[ô¬ÇÇ_BÇüBÇîõ‹\ùPö[ô[ôÀê€€\‹⁄]HH€€\‹⁄]N¬Çîõ‹\ùPö[ô[ôÀúõ››\Kêö[ô[ô’\HH¬ÇQ\ôX›àÇQ[ù\ôP\úò^NàKÇP\úò^Q[[Y[ùàãÇR\—úõ€U–\úò^Nà¬üN¬Çîõ‹\ùPö[ô[ôÀúõ››\Kïô\ú⁄[€ö[ô»H¬ÇSõ€ôNàÇSôYY’\]NàKÇSX]ö^€‹õôYY’\]NàÇüN¬Çîõ‹\ùPö[ô[ôÀúõ››\KëŸ]\êûPö[ô[ô’\HH¬ÇÇTõ‹\ùPö[ô[ôÀúõ››\KóŸŸ]ò[YWŸ\ôX›ÇTõ‹\ùPö[ô[ôÀúõ››\KóŸŸ]ò[YWÿ\úò^KÇTõ‹\ùPö[ô[ôÀúõ››\KóŸŸ]ò[YWÿ\úò^Q[[Y[ùÇTõ‹\ùPö[ô[ôÀúõ››\KóŸŸ]ò[YW›–\úò^KÇóN¬Çîõ‹\ùPö[ô[ôÀúõ››\KîŸ]\êûPö[ô[ô’\P[ôô\ú⁄[€ö[ô»H¬ÇÇV¬ÇBKÀ»\ôX›ÇBTõ‹\ùPö[ô[ôÀúõ››\Kó‹Ÿ]ò[YWŸ\ôX›ÇBTõ‹\ùPö[ô[ôÀúõ››\Kó‹Ÿ]ò[YWŸ\ôX›‹Ÿ]ôYY’\]KÇBTõ‹\ùPö[ô[ôÀúõ››\Kó‹Ÿ]ò[YWŸ\ôX›‹Ÿ]X]ö^€‹õôYY’\]KÇÇWK¬ÇÇBKÀ»[ù\ôP\úò^BÇÇBTõ‹\ùPö[ô[ôÀúõ››\Kó‹Ÿ]ò[YWÿ\úò^KÇBTõ‹\ùPö[ô[ôÀúõ››\Kó‹Ÿ]ò[YWÿ\úò^W‹Ÿ]ôYY’\]KÇBTõ‹\ùPö[ô[ôÀúõ››\Kó‹Ÿ]ò[YWÿ\úò^W‹Ÿ]X]ö^€‹õôYY’\]KÇÇWK¬ÇÇBKÀ»\úò^Q[[Y[ùÇBTõ‹\ùPö[ô[ôÀúõ››\Kó‹Ÿ]ò[YWÿ\úò^Q[[Y[ùÇBTõ‹\ùPö[ô[ôÀúõ››\Kó‹Ÿ]ò[YWÿ\úò^Q[[Y[ù‹Ÿ]ôYY’\]KÇBTõ‹\ùPö[ô[ôÀúõ››\Kó‹Ÿ]ò[YWÿ\úò^Q[[Y[ù‹Ÿ]X]ö^€‹õôYY’\]KÇÇWK¬ÇÇBKÀ»\’—úõ€P\úò^BÇBTõ‹\ùPö[ô[ôÀúõ››\Kó‹Ÿ]ò[YWŸúõ€P\úò^KÇBTõ‹\ùPö[ô[ôÀúõ››\Kó‹Ÿ]ò[YWŸúõ€P\úò^W‹Ÿ]ôYY’\]KÇBTõ‹\ùPö[ô[ôÀúõ››\Kó‹Ÿ]ò[YWŸúõ€P\úò^W‹Ÿ]X]ö^€‹õôYY’\]KÇÇWBÇóN¬Çã äÇà
Çà
àH‹õ›\ŸàÿöôX›»]ôXŸZ]ô\»H⁄\ôY[ö[X][€à›]KÇà
Çà
à\ÿYŸNÇà
Çà
àHYÿöôX›»[›H€›[›\ù⁄\ŸH\‹»\»	‹õ€›	»»Bà
à€€ú›ùX›‹à‹àHò€\X›[€àY]ŸŸà[ö[X][€ìZ^\ãÇà
Çà
àH[ú›XY\‹»\»ÿöôX›\»	‹õ€›	ÀÇà
Çà
àH[›Hÿ[à[€»Y[ôô[[›ôHÿöôX›»]\à⁄[àHZ^\Çà
à\»ù[õö[ôÀÇà
Çà
àõ›NÇà
Çà
àÿöôX›»Ÿà\»€\‹»\X\à\»€ôHÿöôX›»HZ^\ãà
à€»ÿX⁄H€€ùõ€ŸàH[ô]öYX[ÿöôX›»]\›ôH€ôBà
à€àH‹õ›\Çà
Çà
à[Z]][€éÇà
Çà
àHH[ö[X]Yõ‹\ùY\»]\›ôH€€\]XõH[[€ô»Bà
à[ÿöôX›»[àH‹õ›\Çà
Çà
àHH⁄[ô€Hõ‹\ùHÿ[àZ]\àôH€€ùõ€Yõ›Y⁄Bà
à\ôŸ]‹õ›\‹à\ôX›Kù]õ›õ›Çà
ã¬Çò€\‹»[ö[X][€ìÿöôX›‹õ›\¬ÇÇX€€ú›ùX›‹ä
H¬ÇÇB]\Àö\–[ö[X][€ìÿöôX›‹õ›\HùYN¬ÇÇB]\Àù]ZYHŸ[ô\ò]UURQ

N¬ÇÇBKÀ»ÿX⁄YÿöôX›»õ€›ŸYûHHX›]ôH€ô\¬ÇB]\Àó€ÿöôX›»H\úò^Kúõ››\Kú€XŸKòÿ[
\ô›[Y[ù»
N¬ÇÇB]\ÀõêÿX⁄YÿöôX›◊»H»À»ô\⁄€ÇBKÀ»õ›NàôXYûHõ‹\ùPö[ô[ôÀê€€\‹⁄]BÇÇBX€€ú›[ôXŸ\»HﬂN¬ÇB]\Àó⁄[ôXŸ\–ûUURQH[ôXŸ\Œ»À»õ‹àõ€⁄⁄ŸY\[ô¬ÇÇBYõ‹à
]HHàH\ô›[Y[ùÀõ[ô›»HOOHé»
 »H
H¬ÇÇBBZ[ôXŸ\÷»\ô›[Y[ù÷»HKù]ZYHHN¬ÇÇB_BÇÇB]\Àó‹]»H◊N»À»[ú⁄YNà›ö[ô¬ÇB]\Àó‹\úŸY]»H◊N»À»[ú⁄YNà»ŸH€â›ÿ\ôK\ôHBÇB]\Àóÿö[ô[ô‹»H◊N»À»[ú⁄YNà\úò^Oõ‹\ùPö[ô[ô»ÇÇB]\Àóÿö[ô[ô‹“[ôXŸ\–ûT]HﬂN»À»[ú⁄YNà[ôXŸ\»[à\ŸH\úò^\¬ÇÇBX€€ú›ÿ€‹HH\Œ¬ÇÇB]\Àú›]»H¬ÇÇBB[ÿöôX›Œà¬ÇBBBYŸ]›[

H¬ÇÇBBBB\ô]\õàÿ€‹Kó€ÿöôX›Àõ[ô›¬ÇÇBBB_KÇBBBYŸ][ï\ŸJ
H¬ÇÇBBBB\ô]\õà\Àù›[Hÿ€‹KõêÿX⁄YÿöôX›◊Œ¬ÇÇBBB_BÇBB_KÇBBYŸ]ö[ô[ô‹‘\ìÿöôX›

H¬ÇÇBBB\ô]\õàÿ€‹Kóÿö[ô[ô‹Àõ[ô›¬ÇÇBB_BÇÇB_N¬ÇÇ_BÇÇXY

H¬ÇÇBX€€ú›ÿöôX›»H\Àó€ÿöôX›ÀÇBBZ[ôXŸ\–ûUURQH\Àó⁄[ôXŸ\–ûUURQÇBB\]»H\Àó‹]ÀÇBB\\úŸY]»H\Àó‹\úŸY]ÀÇBBXö[ô[ô‹»H\Àóÿö[ô[ô‹ÀÇBB[êö[ô[ô‹»Hö[ô[ô‹Àõ[ô›¬ÇÇB[]€õ›€ìÿöôX›H[ôYö[ôYÇBB[ìÿöôX›»HÿöôX›Àõ[ô›ÇBB[êÿX⁄YÿöôX›»H\ÀõêÿX⁄YÿöôX›◊Œ¬ÇÇBYõ‹à
]HHàH\ô›[Y[ùÀõ[ô›»HOOHé»
 »H
H¬ÇÇBBX€€ú›ÿöôX›H\ô›[Y[ù÷»HKÇBBB]]ZYHÿöôX›ù]ZY¬ÇBB[][ô^H[ôXŸ\–ûUURQ»]ZYN¬ÇÇBBZYà
[ô^OOH[ôYö[ôY
H¬ÇÇBBBKÀ»[ö€õ›€àÿöôX›OàY]»HP’UëHôY⁄[€ÇÇÇBBBZ[ô^HìÿöôX›»
 Œ¬ÇBBBZ[ôXŸ\–ûUURQ»]ZYHH[ô^¬ÇBBB[ÿöôX›Àú\⁄
ÿöôX›
N¬ÇÇBBBKÀ»Xÿ€›[ù[ô»\»€ôKõ›»»Hÿ[YHõ‹à[ö[ô[ô‹¬ÇÇBBBYõ‹à
]àHHHêö[ô[ô‹Œ»àOOHN»
 »à
H¬ÇÇBBBBXö[ô[ô‹÷»àKú\⁄
ô]»õ‹\ùPö[ô[ô ÿöôX›]÷»àK\úŸY]÷»àH
H
N¬ÇÇBBB_BÇÇBB_H[ŸHYà
[ô^êÿX⁄YÿöôX›»
H¬ÇÇBBBZ€õ›€ìÿöôX›HÿöôX›÷»[ô^N¬ÇÇBBBKÀ»[›ôH^\›[ô»ÿöôX›»HP’UëHôY⁄[€ÇÇÇBBBX€€ú›ö\ú›X›]ôR[ô^HKHêÿX⁄YÿöôX›ÀÇBBBB[\›ÿX⁄YÿöôX›HÿöôX›÷»ö\ú›X›]ôR[ô^N¬ÇÇBBBZ[ôXŸ\–ûUURQ»\›ÿX⁄YÿöôX›ù]ZYHH[ô^¬ÇBBB[ÿöôX›÷»[ô^HH\›ÿX⁄YÿöôX›¬ÇÇBBBZ[ôXŸ\–ûUURQ»]ZYHHö\ú›X›]ôR[ô^¬ÇBBB[ÿöôX›÷»ö\ú›X›]ôR[ô^HHÿöôX›¬ÇÇBBBKÀ»Xÿ€›[ù[ô»\»€ôKõ›»»Hÿ[YHõ‹à[ö[ô[ô‹¬ÇÇBBBYõ‹à
]àHHHêö[ô[ô‹Œ»àOOHN»
 »à
H¬ÇÇBBBBX€€ú›ö[ô[ô‹—õ‹î]Hö[ô[ô‹÷»àKÇBBBBB[\›ÿX⁄YHö[ô[ô‹—õ‹î]»ö\ú›X›]ôR[ô^N¬ÇÇBBBB[]ö[ô[ô»Hö[ô[ô‹—õ‹î]»[ô^N¬ÇÇBBBBXö[ô[ô‹—õ‹î]»[ô^HH\›ÿX⁄Y¬ÇÇBBBBZYà
ö[ô[ô»OOH[ôYö[ôY
H¬ÇÇBBBBBKÀ»⁄[òŸHŸH»õ›õ›\à»‹ôX]Hô]»ö[ô[ô‹¬ÇBBBBBKÀ»õ‹àÿöôX›»]\ôHÿX⁄YHö[ô[ô»X^BÇBBBBBKÀ»‹àX^Hõ›^\›ÇÇBBBBBXö[ô[ô»Hô]»õ‹\ùPö[ô[ô ÿöôX›]÷»àK\úŸY]÷»àH
N¬ÇÇBBBB_BÇÇBBBBXö[ô[ô‹—õ‹î]»ö\ú›X›]ôR[ô^HHö[ô[ôŒ¬ÇÇBBB_BÇÇBB_H[ŸHYà
ÿöôX›÷»[ô^HOOH€õ›€ìÿöôX›
H¬ÇÇBBBX€€ú€€Kô\úõ‹ä	’ëQKê[ö[X][€ìÿöôX›‹õ›\àYôô\ô[ùÿöôX›»⁄]Hÿ[YHURQ	»
¬ÇBBBBIŸ]X›Yà€X[àHÿX⁄\»‹àôX‹ôX]H[›\à[ôúò\›ùX›\ôH⁄[àô[ÿY[ô»ÿŸ[ô\Àâ»
N¬ÇÇBB_HÀ»[ŸHHÿöôX›\»[ôXYH⁄\ôHŸHÿ[ù]»ôBÇÇB_HÀ»õ‹à\ô›[Y[ù¬ÇÇB]\ÀõêÿX⁄YÿöôX›◊»HêÿX⁄YÿöôX›Œ¬ÇÇ_BÇÇ\ô[[›ôJ
H¬ÇÇBX€€ú›ÿöôX›»H\Àó€ÿöôX›ÀÇBBZ[ôXŸ\–ûUURQH\Àó⁄[ôXŸ\–ûUURQÇBBXö[ô[ô‹»H\Àóÿö[ô[ô‹ÀÇBB[êö[ô[ô‹»Hö[ô[ô‹Àõ[ô›¬ÇÇB[]êÿX⁄YÿöôX›»H\ÀõêÿX⁄YÿöôX›◊Œ¬ÇÇBYõ‹à
]HHàH\ô›[Y[ùÀõ[ô›»HOOHé»
 »H
H¬ÇÇBBX€€ú›ÿöôX›H\ô›[Y[ù÷»HKÇBBB]]ZYHÿöôX›ù]ZYÇBBBZ[ô^H[ôXŸ\–ûUURQ»]ZYN¬ÇÇBBZYà
[ô^OOH[ôYö[ôY	âà[ô^èHêÿX⁄YÿöôX›»
H¬ÇÇBBBKÀ»[›ôH^\›[ô»ÿöôX›[ù»H–P“QôY⁄[€ÇÇÇBBBX€€ú›\›ÿX⁄Y[ô^HêÿX⁄YÿöôX›»
 ÀÇBBBBYö\ú›X›]ôSÿöôX›HÿöôX›÷»\›ÿX⁄Y[ô^N¬ÇÇBBBZ[ôXŸ\–ûUURQ»ö\ú›X›]ôSÿöôX›ù]ZYHH[ô^¬ÇBBB[ÿöôX›÷»[ô^HHö\ú›X›]ôSÿöôX›¬ÇÇBBBZ[ôXŸ\–ûUURQ»]ZYHH\›ÿX⁄Y[ô^¬ÇBBB[ÿöôX›÷»\›ÿX⁄Y[ô^HHÿöôX›¬ÇÇBBBKÀ»Xÿ€›[ù[ô»\»€ôKõ›»»Hÿ[YHõ‹à[ö[ô[ô‹¬ÇÇBBBYõ‹à
]àHHHêö[ô[ô‹Œ»àOOHN»
 »à
H¬ÇÇBBBBX€€ú›ö[ô[ô‹—õ‹î]Hö[ô[ô‹÷»àKÇBBBBBYö\ú›X›]ôHHö[ô[ô‹—õ‹î]»\›ÿX⁄Y[ô^KÇBBBBBXö[ô[ô»Hö[ô[ô‹—õ‹î]»[ô^N¬ÇÇBBBBXö[ô[ô‹—õ‹î]»[ô^HHö\ú›X›]ôN¬ÇBBBBXö[ô[ô‹—õ‹î]»\›ÿX⁄Y[ô^HHö[ô[ôŒ¬ÇÇBBB_BÇÇBB_BÇÇB_HÀ»õ‹à\ô›[Y[ù¬ÇÇB]\ÀõêÿX⁄YÿöôX›◊»HêÿX⁄YÿöôX›Œ¬ÇÇ_BÇÇKÀ»ô[[›ôH	àõ‹ôŸ]Ç][òÿX⁄J
H¬ÇÇBX€€ú›ÿöôX›»H\Àó€ÿöôX›ÀÇBBZ[ôXŸ\–ûUURQH\Àó⁄[ôXŸ\–ûUURQÇBBXö[ô[ô‹»H\Àóÿö[ô[ô‹ÀÇBB[êö[ô[ô‹»Hö[ô[ô‹Àõ[ô›¬ÇÇB[]êÿX⁄YÿöôX›»H\ÀõêÿX⁄YÿöôX›◊ÀÇBB[ìÿöôX›»HÿöôX›Àõ[ô›¬ÇÇBYõ‹à
]HHàH\ô›[Y[ùÀõ[ô›»HOOHé»
 »H
H¬ÇÇBBX€€ú›ÿöôX›H\ô›[Y[ù÷»HKÇBBB]]ZYHÿöôX›ù]ZYÇBBBZ[ô^H[ôXŸ\–ûUURQ»]ZYN¬ÇÇBBZYà
[ô^OOH[ôYö[ôY
H¬ÇÇBBBY[]H[ôXŸ\–ûUURQ»]ZYN¬ÇÇBBBZYà
[ô^êÿX⁄YÿöôX›»
H¬ÇÇBBBBKÀ»ÿöôX›\»ÿX⁄Y⁄ö[ö»H–P“QôY⁄[€ÇÇÇBBBBX€€ú›ö\ú›X›]ôR[ô^HKHêÿX⁄YÿöôX›ÀÇBBBBB[\›ÿX⁄YÿöôX›HÿöôX›÷»ö\ú›X›]ôR[ô^KÇBBBBB[\›[ô^HKHìÿöôX›ÀÇBBBBB[\›ÿöôX›HÿöôX›÷»\›[ô^N¬ÇÇBBBBKÀ»\›ÿX⁄YÿöôX›ZŸ\»\»ÿöôX›	‹»XŸBÇBBBBZ[ôXŸ\–ûUURQ»\›ÿX⁄YÿöôX›ù]ZYHH[ô^¬ÇBBBB[ÿöôX›÷»[ô^HH\›ÿX⁄YÿöôX›¬ÇÇBBBBKÀ»\›ÿöôX›€Ÿ\»»HX›]ò]Y€›[ô‹ÇBBBBZ[ôXŸ\–ûUURQ»\›ÿöôX›ù]ZYHHö\ú›X›]ôR[ô^¬ÇBBBB[ÿöôX›÷»ö\ú›X›]ôR[ô^HH\›ÿöôX›¬ÇBBBB[ÿöôX›Àú‹

N¬ÇÇBBBBKÀ»Xÿ€›[ù[ô»\»€ôKõ›»»Hÿ[YHõ‹à[ö[ô[ô‹¬ÇÇBBBBYõ‹à
]àHHHêö[ô[ô‹Œ»àOOHN»
 »à
H¬ÇÇBBBBBX€€ú›ö[ô[ô‹—õ‹î]Hö[ô[ô‹÷»àKÇBBBBBB[\›ÿX⁄YHö[ô[ô‹—õ‹î]»ö\ú›X›]ôR[ô^KÇBBBBBB[\›Hö[ô[ô‹—õ‹î]»\›[ô^N¬ÇÇBBBBBXö[ô[ô‹—õ‹î]»[ô^HH\›ÿX⁄Y¬ÇBBBBBXö[ô[ô‹—õ‹î]»ö\ú›X›]ôR[ô^HH\›¬ÇBBBBBXö[ô[ô‹—õ‹î]ú‹

N¬ÇÇBBBB_BÇÇBBB_H[ŸH¬ÇÇBBBBKÀ»ÿöôX›\»X›]ôKù\››ÿ\⁄]H\›[ô‹ÇÇBBBBX€€ú›\›[ô^HKHìÿöôX›ÀÇBBBBB[\›ÿöôX›HÿöôX›÷»\›[ô^N¬ÇÇBBBBZYà
\›[ô^à
H¬ÇÇBBBBBZ[ôXŸ\–ûUURQ»\›ÿöôX›ù]ZYHH[ô^¬ÇÇBBBB_BÇÇBBBB[ÿöôX›÷»[ô^HH\›ÿöôX›¬ÇBBBB[ÿöôX›Àú‹

N¬ÇÇBBBBKÀ»Xÿ€›[ù[ô»\»€ôKõ›»»Hÿ[YHõ‹à[ö[ô[ô‹¬ÇÇBBBBYõ‹à
]àHHHêö[ô[ô‹Œ»àOOHN»
 »à
H¬ÇÇBBBBBX€€ú›ö[ô[ô‹—õ‹î]Hö[ô[ô‹÷»àN¬ÇÇBBBBBXö[ô[ô‹—õ‹î]»[ô^HHö[ô[ô‹—õ‹î]»\›[ô^N¬ÇBBBBBXö[ô[ô‹—õ‹î]ú‹

N¬ÇÇBBBB_BÇÇBBB_HÀ»ÿX⁄Y‹àX›]ôBÇÇBB_HÀ»YàÿöôX›\»€õ›€ÇÇÇB_HÀ»õ‹à\ô›[Y[ù¬ÇÇB]\ÀõêÿX⁄YÿöôX›◊»HêÿX⁄YÿöôX›Œ¬ÇÇ_BÇÇKÀ»[ù\õò[[ù\ôòXŸH\ŸYûHôYúöY[ôYõ‹\ùPö[ô[ôÀê€€\‹⁄]NÇÇÇ\›Xúÿ‹öXôW ]\úŸY]
H¬ÇÇBKÀ»ô]\õú»[à\úò^HŸàö[ô[ô‹»õ‹àH⁄]ô[à]]\»⁄[ôŸYÇBKÀ»Xÿ€‹ô[ô»»H€€ùZ[ôYÿöôX›»[àH‹õ›\ÇÇBX€€ú›[ôXŸ\–ûT]H\Àóÿö[ô[ô‹“[ôXŸ\–ûT]¬ÇB[][ô^H[ôXŸ\–ûT]»]N¬ÇBX€€ú›ö[ô[ô‹»H\Àóÿö[ô[ô‹Œ¬ÇÇBZYà
[ô^OOH[ôYö[ôY
Hô]\õàö[ô[ô‹÷»[ô^N¬ÇÇBX€€ú›]»H\Àó‹]ÀÇBB\\úŸY]»H\Àó‹\úŸY]ÀÇBB[ÿöôX›»H\Àó€ÿöôX›ÀÇBB[ìÿöôX›»HÿöôX›Àõ[ô›ÇBB[êÿX⁄YÿöôX›»H\ÀõêÿX⁄YÿöôX›◊ÀÇBBXö[ô[ô‹—õ‹î]Hô]»\úò^JìÿöôX›»
N¬ÇÇBZ[ô^Hö[ô[ô‹Àõ[ô›¬ÇÇBZ[ôXŸ\–ûT]»]HH[ô^¬ÇÇB\]Àú\⁄
]
N¬ÇB\\úŸY]Àú\⁄
\úŸY]
N¬ÇBXö[ô[ô‹Àú\⁄
ö[ô[ô‹—õ‹î]
N¬ÇÇBYõ‹à
]HHêÿX⁄YÿöôX›ÀàHÿöôX›Àõ[ô›»HOOHé»
 »H
H¬ÇÇBBX€€ú›ÿöôX›HÿöôX›÷»HN¬ÇBBXö[ô[ô‹—õ‹î]»HHHô]»õ‹\ùPö[ô[ô ÿöôX›]\úŸY]
N¬ÇÇB_BÇÇB\ô]\õàö[ô[ô‹—õ‹î]¬ÇÇ_BÇÇ][ú›Xúÿ‹öXôW ]
H¬ÇÇBKÀ»[»H‹õ›\»õ‹ôŸ]Xõ›]Hõ‹\ùH][ôõ»€ôŸ\ÇÇBKÀ»\]HH\úò^Hô]ö[›\€HÿùZ[ôY⁄]	‹›Xúÿ‹öXôW…¬ÇÇBX€€ú›[ôXŸ\–ûT]H\Àóÿö[ô[ô‹“[ôXŸ\–ûT]ÇBBZ[ô^H[ôXŸ\–ûT]»]N¬ÇÇBZYà
[ô^OOH[ôYö[ôY
H¬ÇÇBBX€€ú›]»H\Àó‹]ÀÇBBB\\úŸY]»H\Àó‹\úŸY]ÀÇBBBXö[ô[ô‹»H\Àóÿö[ô[ô‹ÀÇBBB[\›ö[ô[ô‹“[ô^Hö[ô[ô‹Àõ[ô›HKÇBBB[\›ö[ô[ô‹»Hö[ô[ô‹÷»\›ö[ô[ô‹“[ô^KÇBBB[\›ö[ô[ô‹‘]H]»\›ö[ô[ô‹“[ô^N¬ÇÇBBZ[ôXŸ\–ûT]»\›ö[ô[ô‹‘]HH[ô^¬ÇÇBBXö[ô[ô‹÷»[ô^HH\›ö[ô[ô‹Œ¬ÇBBXö[ô[ô‹Àú‹

N¬ÇÇBB\\úŸY]÷»[ô^HH\úŸY]÷»\›ö[ô[ô‹“[ô^N¬ÇBB\\úŸY]Àú‹

N¬ÇÇBB\]÷»[ô^HH]÷»\›ö[ô[ô‹“[ô^N¬ÇBB\]Àú‹

N¬ÇÇB_BÇÇ_BÇüBÇò€\‹»[ö[X][€êX›[€à¬ÇÇX€€ú›ùX›‹äZ^\ã€\ÿÿ[õ€›Hù[õ[ô[ŸHH€\òõ[ô[ŸH
H¬ÇÇB]\Àó€Z^\àHZ^\é¬ÇB]\Àóÿ€\H€\¬ÇB]\Àó€ÿÿ[õ€›Hÿÿ[õ€›¬ÇB]\Àòõ[ô[ŸHHõ[ô[ŸN¬ÇÇBX€€ú›òX⁄‹»H€\ùòX⁄‹ÀÇBB[ïòX⁄‹»HòX⁄‹Àõ[ô›ÇBBZ[ù\ú€[ù»Hô]»\úò^JïòX⁄‹»
N¬ÇÇBX€€ú›[ù\ú€[ùŸ][ô‹»H¬ÇBBY[ô[ô‘›\ùàô\õ–›\ùò]\ôQ[ô[ôÀÇBBY[ô[ô—[ôàô\õ–›\ùò]\ôQ[ô[ô¬ÇB_N¬ÇÇBYõ‹à
]HH»HOOHïòX⁄‹Œ»
 »H
H¬ÇÇBBX€€ú›[ù\ú€[ùHòX⁄‹÷»HKò‹ôX]R[ù\ú€[ù
ù[
N¬ÇBBZ[ù\ú€[ù÷»HHH[ù\ú€[ù¬ÇBBZ[ù\ú€[ùúŸ][ô‹»H[ù\ú€[ùŸ][ô‹Œ¬ÇÇB_BÇÇB]\Àó⁄[ù\ú€[ùŸ][ô‹»H[ù\ú€[ùŸ][ô‹Œ¬ÇÇB]\Àó⁄[ù\ú€[ù»H[ù\ú€[ùŒ»À»õ›[ôûHHZ^\ÇÇÇBKÀ»[ú⁄YNàõ‹\ùSZ^\à
X[òYŸYûHHZ^\äBÇB]\Àó‹õ‹\ùPö[ô[ô‹»Hô]»\úò^JïòX⁄‹»
N¬ÇÇB]\ÀóÿÿX⁄R[ô^Hù[»À»õ‹àHY[[‹ûHX[òYŸ\ÇÇB]\ÀóÿûP€\ÿX⁄R[ô^Hù[»À»õ‹àHY[[‹ûHX[òYŸ\ÇÇÇB]\Àó›[YTÿÿ[R[ù\ú€[ùHù[¬ÇB]\Àó›ŸZY⁄[ù\ú€[ùHù[¬ÇÇB]\Àõ€‹H€‹ô\X]¬ÇB]\Àó€€‹€›[ùHHN¬ÇÇBKÀ»€ÿò[Z^\à[YH⁄[àHX›[€à\»»ôH›\ùYÇBKÀ»]	‹»Ÿ]òX⁄»»	€ù[	»\€à›\ùŸàHX›[€ÇÇB]\Àó‹›\ù[YHHù[¬ÇÇBKÀ»ÿÿ[Yÿÿ[[YHŸàHX›[€ÇÇBKÀ»Ÿ]»€[\Y‹à‹ò\Y»ãò€\ô\ò][€àXÿ€‹ô[ô»»€‹ÇB]\Àù[YHH¬ÇÇB]\Àù[YTÿÿ[HHN¬ÇB]\ÀóŸYôôX›]ôU[YTÿÿ[HHN¬ÇÇB]\ÀùŸZY⁄HN¬ÇB]\ÀóŸYôôX›]ôUŸZY⁄HN¬ÇÇB]\Àúô\]][€ú»H[ôö[ö]N»À»õÀàŸàô\]][€ú»⁄[à€‹[ô¬ÇÇB]\Àú]\ŸYHò[ŸN»À»ùYHOàô\õ»YôôX›]ôH[YHÿÿ[BÇB]\Àô[òXõYHùYN»À»ò[ŸHOàô\õ»YôôX›]ôHŸZY⁄ÇÇB]\Àò€[\⁄[ëö[ö\⁄YHò[ŸNÀÀ»ŸY\ôYY[ô»H\›úò[YO¬ÇÇB]\Àûô\õ‘€‹P]›\ùHùYNÀÀ»õ‹à€[€›[ù\ú€][€àÀ€»Ÿ\\ò]BÇB]\Àûô\õ‘€‹P][ôHùYNÀÀ»€\»õ‹à›\ù€‹[ô[ôÇÇ_BÇÇKÀ»›]H	àÿ⁄Y[[ô¬ÇÇ\^J
H¬ÇÇB]\Àó€Z^\ãóÿX›]ò]PX›[€ä\»
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\›‹

H¬ÇÇB]\Àó€Z^\ãóŸXX›]ò]PX›[€ä\»
N¬ÇÇB\ô]\õà\Àúô\Ÿ]

N¬ÇÇ_BÇÇ\ô\Ÿ]

H¬ÇÇB]\Àú]\ŸYHò[ŸN¬ÇB]\Àô[òXõYHùYN¬ÇÇB]\Àù[YHH»À»ô\›\ù€\ÇB]\Àó€€‹€›[ùHHNÀÀ»õ‹ôŸ]ô]ö[›\»€‹¬ÇB]\Àó‹›\ù[YHHù[ÀÀ»õ‹ôŸ]ÿ⁄Y[[ô¬ÇÇB\ô]\õà\Àú›‹òY[ô 
Kú›‹ÿ\ú[ô 
N¬ÇÇ_BÇÇZ\‘ù[õö[ô 
H¬ÇÇB\ô]\õà\Àô[òXõY	âàH\Àú]\ŸY	âà\Àù[YTÿÿ[HOOH	âÇÇBB]\Àó‹›\ù[YHOOHù[	âà\Àó€Z^\ãó⁄\–X›]ôPX›[€ä\»
N¬ÇÇ_BÇÇKÀ»ô]\õàùYH⁄[à^H\»ôY[àÿ[YÇZ\‘ÿ⁄Y[Y

H¬ÇÇB\ô]\õà\Àó€Z^\ãó⁄\–X›]ôPX›[€ä\»
N¬ÇÇ_BÇÇ\›\ù]
[YH
H¬ÇÇB]\Àó‹›\ù[YHH[YN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]€‹
[ŸKô\]][€ú»
H¬ÇÇB]\Àõ€‹H[ŸN¬ÇB]\Àúô\]][€ú»Hô\]][€úŒ¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇKÀ»ŸZY⁄ÇÇKÀ»Ÿ]HŸZY⁄›‹[ô»[ûHÿ⁄Y[YòY[ô¬ÇKÀ»[›Y⁄ô[òXõYHò[ŸHZY[»[àYôôX›]ôHŸZY⁄Ÿàô\õÀ\¬ÇKÀ»Y]ŸŸ\»
õõ›
à⁄[ôŸHô[òXõYôXÿ]\ŸH]€›[ôH€€ôù\⁄[ô¬Ç\Ÿ]YôôX›]ôUŸZY⁄
ŸZY⁄
H¬ÇÇB]\ÀùŸZY⁄HŸZY⁄¬ÇÇBKÀ»õ›Nàÿ[YHŸ⁄X»\»⁄[à\]Y]ù[ù[YBÇB]\ÀóŸYôôX›]ôUŸZY⁄H\Àô[òXõY»ŸZY⁄à¬ÇÇB\ô]\õà\Àú›‹òY[ô 
N¬ÇÇ_BÇÇKÀ»ô]\õàHŸZY⁄€€ú⁄Y\ö[ô»òY[ô»[ôô[òXõYÇYŸ]YôôX›]ôUŸZY⁄

H¬ÇÇB\ô]\õà\ÀóŸYôôX›]ôUŸZY⁄¬ÇÇ_BÇÇYòYR[ä\ò][€à
H¬ÇÇB\ô]\õà\Àó‹ÿ⁄Y[QòY[ô \ò][€ãH
N¬ÇÇ_BÇÇYòYS›]
\ò][€à
H¬ÇÇB\ô]\õà\Àó‹ÿ⁄Y[QòY[ô \ò][€ãK
N¬ÇÇ_BÇÇX‹õ‹‹—òYQúõ€JòYS›]X›[€ã\ò][€ãÿ\ú
H¬ÇÇBYòYS›]X›[€ãôòYS›]
\ò][€à
N¬ÇB]\ÀôòYR[ä\ò][€à
N¬ÇÇBZYà
ÿ\ú
H¬ÇÇBBX€€ú›òYR[ë\ò][€àH\Àóÿ€\ô\ò][€ãÇBBBYòYS›]\ò][€àHòYS›]X›[€ãóÿ€\ô\ò][€ãÇÇBBB\›\ù[ôò][»HòYS›]\ò][€à»òYR[ë\ò][€ãÇBBBY[ô›\ùò][»HòYR[ë\ò][€à»òYS›]\ò][€é¬ÇÇBBYòYS›]X›[€ãùÿ\ú
Kå›\ù[ôò][À\ò][€à
N¬ÇBB]\Àùÿ\ú
[ô›\ùò][ÀKå\ò][€à
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇX‹õ‹‹—òYU òYR[êX›[€ã\ò][€ãÿ\ú
H¬ÇÇB\ô]\õàòYR[êX›[€ãò‹õ‹‹—òYQúõ€J\À\ò][€ãÿ\ú
N¬ÇÇ_BÇÇ\›‹òY[ô 
H¬ÇÇBX€€ú›ŸZY⁄[ù\ú€[ùH\Àó›ŸZY⁄[ù\ú€[ù¬ÇÇBZYà
ŸZY⁄[ù\ú€[ùOOHù[
H¬ÇÇBB]\Àó›ŸZY⁄[ù\ú€[ùHù[¬ÇBB]\Àó€Z^\ãó›ZŸPòX⁄–€€ùõ€[ù\ú€[ù
ŸZY⁄[ù\ú€[ù
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇKÀ»[YHÿÿ[H€€ùõ€ÇÇKÀ»Ÿ]H[YHÿÿ[H›‹[ô»[ûHÿ⁄Y[Yÿ\ú[ô¬ÇKÀ»[›Y⁄ú]\ŸYHùYHZY[»[àYôôX›]ôH[YHÿÿ[HŸàô\õÀ\¬ÇKÀ»Y]ŸŸ\»
õõ›
à⁄[ôŸHú]\ŸYôXÿ]\ŸH]€›[ôH€€ôù\⁄[ô¬Ç\Ÿ]YôôX›]ôU[YTÿÿ[J[YTÿÿ[H
H¬ÇÇB]\Àù[YTÿÿ[HH[YTÿÿ[N¬ÇB]\ÀóŸYôôX›]ôU[YTÿÿ[HH\Àú]\ŸY»à[YTÿÿ[N¬ÇÇB\ô]\õà\Àú›‹ÿ\ú[ô 
N¬ÇÇ_BÇÇKÀ»ô]\õàH[YHÿÿ[H€€ú⁄Y\ö[ô»ÿ\ú[ô»[ôú]\ŸYÇYŸ]YôôX›]ôU[YTÿÿ[J
H¬ÇÇB\ô]\õà\ÀóŸYôôX›]ôU[YTÿÿ[N¬ÇÇ_BÇÇ\Ÿ]\ò][€ä\ò][€à
H¬ÇÇB]\Àù[YTÿÿ[HH\Àóÿ€\ô\ò][€à»\ò][€é¬ÇÇB\ô]\õà\Àú›‹ÿ\ú[ô 
N¬ÇÇ_BÇÇ\ﬁ[ò’⁄]
X›[€à
H¬ÇÇB]\Àù[YHHX›[€ãù[YN¬ÇB]\Àù[YTÿÿ[HHX›[€ãù[YTÿÿ[N¬ÇÇB\ô]\õà\Àú›‹ÿ\ú[ô 
N¬ÇÇ_BÇÇZ[
\ò][€à
H¬ÇÇB\ô]\õà\Àùÿ\ú
\ÀóŸYôôX›]ôU[YTÿÿ[K\ò][€à
N¬ÇÇ_BÇÇ]ÿ\ú
›\ù[YTÿÿ[K[ô[YTÿÿ[K\ò][€à
H¬ÇÇBX€€ú›Z^\àH\Àó€Z^\ãÇBB[õ›»HZ^\ãù[YKÇBB][YTÿÿ[HH\Àù[YTÿÿ[N¬ÇÇB[][ù\ú€[ùH\Àó›[YTÿÿ[R[ù\ú€[ù¬ÇÇBZYà
[ù\ú€[ùOOHù[
H¬ÇÇBBZ[ù\ú€[ùHZ^\ãó€[ô€€ùõ€[ù\ú€[ù

N¬ÇBB]\Àó›[YTÿÿ[R[ù\ú€[ùH[ù\ú€[ù¬ÇÇB_BÇÇBX€€ú›[Y\»H[ù\ú€[ùú\ò[Y]\î‹⁄][€úÀÇBB]ò[Y\»H[ù\ú€[ùúÿ[\Uò[Y\Œ¬ÇÇB][Y\÷»HHõ›Œ¬ÇB][Y\÷»HHHõ›»
»\ò][€é¬ÇÇB]ò[Y\÷»HH›\ù[YTÿÿ[H»[YTÿÿ[N¬ÇB]ò[Y\÷»HHH[ô[YTÿÿ[H»[YTÿÿ[N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\›‹ÿ\ú[ô 
H¬ÇÇBX€€ú›[YTÿÿ[R[ù\ú€[ùH\Àó›[YTÿÿ[R[ù\ú€[ù¬ÇÇBZYà
[YTÿÿ[R[ù\ú€[ùOOHù[
H¬ÇÇBB]\Àó›[YTÿÿ[R[ù\ú€[ùHù[¬ÇBB]\Àó€Z^\ãó›ZŸPòX⁄–€€ùõ€[ù\ú€[ù
[YTÿÿ[R[ù\ú€[ù
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇKÀ»ÿöôX›XÿŸ\‹€‹ú¬ÇÇYŸ]Z^\ä
H¬ÇÇB\ô]\õà\Àó€Z^\é¬ÇÇ_BÇÇYŸ]€\

H¬ÇÇB\ô]\õà\Àóÿ€\¬ÇÇ_BÇÇYŸ]õ€›

H¬ÇÇB\ô]\õà\Àó€ÿÿ[õ€›\Àó€Z^\ãó‹õ€›¬ÇÇ_BÇÇKÀ»[ù\õòBÇÇW›\]J[YK[U[YK[YQ\ôX›[€ãXÿ›R[ô^
H¬ÇÇBKÀ»ÿ[YûHHZ^\ÇÇÇBZYà
H\Àô[òXõY
H¬ÇÇBBKÀ»ÿ[ó›\]UŸZY⁄

H»\]HóŸYôôX›]ôUŸZY⁄ÇÇBB]\Àó›\]UŸZY⁄
[YH
N¬ÇBB\ô]\õé¬ÇÇB_BÇÇBX€€ú››\ù[YHH\Àó‹›\ù[YN¬ÇÇBZYà
›\ù[YHOOHù[
H¬ÇÇBBKÀ»⁄X⁄»õ‹àÿ⁄Y[Y›\ùŸàX›[€ÇÇÇBBX€€ú›[YTù[õö[ô»H
[YHH›\ù[YH
H
à[YQ\ôX›[€é¬ÇBBZYà
[YTù[õö[ô»[YQ\ôX›[€àOOH
H¬ÇÇBBBY[U[YHH¬ÇÇBB_H[ŸH¬ÇÇÇBBB]\Àó‹›\ù[YHHù[»À»[úÿ⁄Y[BÇBBBY[U[YHH[YQ\ôX›[€à
à[YTù[õö[ôŒ¬ÇÇBB_BÇÇB_BÇÇBKÀ»\H[YHÿÿ[H[ôYò[òŸH[YBÇÇBY[U[YH
èH\Àó›\]U[YTÿÿ[J[YH
N¬ÇBX€€ú›€\[YHH\Àó›\]U[YJ[U[YH
N¬ÇÇBKÀ»õ›Nà›\]U[YHX^H\ÿXõHHX›[€àô\›[[ô»[ÇÇBKÀ»[àYôôX›]ôHŸZY⁄ŸàÇÇBX€€ú›ŸZY⁄H\Àó›\]UŸZY⁄
[YH
N¬ÇÇBZYà
ŸZY⁄à
H¬ÇÇBBX€€ú›[ù\ú€[ù»H\Àó⁄[ù\ú€[ùŒ¬ÇBBX€€ú›õ‹\ùSZ^\ú»H\Àó‹õ‹\ùPö[ô[ô‹Œ¬ÇÇBB\›⁄]⁄
\Àòõ[ô[ŸH
H¬ÇÇBBBXÿ\ŸHY]]ôP[ö[X][€êõ[ô[ŸNÇÇÇBBBBYõ‹à
]àHHH[ù\ú€[ùÀõ[ô›»àOOHN»
 »à
H¬ÇÇBBBBBZ[ù\ú€[ù÷»àKô]ò[X]J€\[YH
N¬ÇBBBBB\õ‹\ùSZ^\ú÷»àKòXÿ›[][]PY]]ôJŸZY⁄
N¬ÇÇBBBB_BÇÇBBBBXúôXZŒ¬ÇÇBBBXÿ\ŸHõ‹õX[[ö[X][€êõ[ô[ŸNÇÇBBBYYò][ÇÇÇBBBBYõ‹à
]àHHH[ù\ú€[ùÀõ[ô›»àOOHN»
 »à
H¬ÇÇBBBBBZ[ù\ú€[ù÷»àKô]ò[X]J€\[YH
N¬ÇBBBBB\õ‹\ùSZ^\ú÷»àKòXÿ›[][]JXÿ›R[ô^ŸZY⁄
N¬ÇÇBBBB_BÇÇBB_BÇÇB_BÇÇ_BÇÇW›\]UŸZY⁄
[YH
H¬ÇÇB[]ŸZY⁄H¬ÇÇBZYà
\Àô[òXõY
H¬ÇÇBB]ŸZY⁄H\ÀùŸZY⁄¬ÇBBX€€ú›[ù\ú€[ùH\Àó›ŸZY⁄[ù\ú€[ù¬ÇÇBBZYà
[ù\ú€[ùOOHù[
H¬ÇÇBBBX€€ú›[ù\ú€[ùò[YHH[ù\ú€[ùô]ò[X]J[YH
V»N¬ÇÇBBB]ŸZY⁄
èH[ù\ú€[ùò[YN¬ÇÇBBBZYà
[YHà[ù\ú€[ùú\ò[Y]\î‹⁄][€ú÷»HH
H¬ÇÇBBBB]\Àú›‹òY[ô 
N¬ÇÇBBBBZYà
[ù\ú€[ùò[YHOOH
H¬ÇÇBBBBBKÀ»òYY›]\ÿXõBÇBBBBB]\Àô[òXõYHò[ŸN¬ÇÇBBBB_BÇÇBBB_BÇÇBB_BÇÇB_BÇÇB]\ÀóŸYôôX›]ôUŸZY⁄HŸZY⁄¬ÇB\ô]\õàŸZY⁄¬ÇÇ_BÇÇW›\]U[YTÿÿ[J[YH
H¬ÇÇB[][YTÿÿ[HH¬ÇÇBZYà
H\Àú]\ŸY
H¬ÇÇBB][YTÿÿ[HH\Àù[YTÿÿ[N¬ÇÇBBX€€ú›[ù\ú€[ùH\Àó›[YTÿÿ[R[ù\ú€[ù¬ÇÇBBZYà
[ù\ú€[ùOOHù[
H¬ÇÇBBBX€€ú›[ù\ú€[ùò[YHH[ù\ú€[ùô]ò[X]J[YH
V»N¬ÇÇBBB][YTÿÿ[H
èH[ù\ú€[ùò[YN¬ÇÇBBBZYà
[YHà[ù\ú€[ùú\ò[Y]\î‹⁄][€ú÷»HH
H¬ÇÇBBBB]\Àú›‹ÿ\ú[ô 
N¬ÇÇBBBBZYà
[YTÿÿ[HOOH
H¬ÇÇBBBBBKÀ»[›[€à\»[Y]\ŸBÇBBBBB]\Àú]\ŸYHùYN¬ÇÇBBBB_H[ŸH¬ÇÇBBBBBKÀ»ÿ\ú€ôHH\Hö[ò[[YHÿÿ[BÇBBBBB]\Àù[YTÿÿ[HH[YTÿÿ[N¬ÇÇBBBB_BÇÇBBB_BÇÇBB_BÇÇB_BÇÇB]\ÀóŸYôôX›]ôU[YTÿÿ[HH[YTÿÿ[N¬ÇB\ô]\õà[YTÿÿ[N¬ÇÇ_BÇÇW›\]U[YJ[U[YH
H¬ÇÇBX€€ú›\ò][€àH\Àóÿ€\ô\ò][€é¬ÇBX€€ú›€‹H\Àõ€‹¬ÇÇB[][YHH\Àù[YH
»[U[YN¬ÇB[]€‹€›[ùH\Àó€€‹€›[ù¬ÇÇBX€€ú›[ô‘€ô»H
€‹OOH€‹[ô‘€ô»
N¬ÇÇBZYà
[U[YHOOH
H¬ÇÇBBZYà
€‹€›[ùOOHHH
Hô]\õà[YN¬ÇÇBB\ô]\õà
[ô‘€ô»	âà
€‹€›[ù	àH
HOOHH
H»\ò][€àH[YHà[YN¬ÇÇB_BÇÇBZYà
€‹OOH€‹€òŸH
H¬ÇÇBBZYà
€‹€›[ùOOHHH
H¬ÇÇBBBKÀ»ù\››\ùYÇÇBBB]\Àó€€‹€›[ùH¬ÇBBB]\Àó‹Ÿ][ô[ô‹ ùYKùYKò[ŸH
N¬ÇÇBB_BÇÇBBZ[ôW‹›‹à¬ÇÇBBBZYà
[YHèH\ò][€à
H¬ÇÇBBBB][YHH\ò][€é¬ÇÇBBB_H[ŸHYà
[YH
H¬ÇÇBBBB][YHH¬ÇÇBBB_H[ŸH¬ÇÇBBBB]\Àù[YHH[YN¬ÇÇBBBBXúôXZ»[ôW‹›‹¬ÇÇBBB_BÇÇBBBZYà
\Àò€[\⁄[ëö[ö\⁄Y
H\Àú]\ŸYHùYN¬ÇBBBY[ŸH\Àô[òXõYHò[ŸN¬ÇÇBBB]\Àù[YHH[YN¬ÇÇBBB]\Àó€Z^\ãô\‹]⁄]ô[ù
¬ÇBBBB]\Nà	Ÿö[ö\⁄Y	ÀX›[€éà\ÀÇBBBBY\ôX›[€éà[U[YH»HHàBÇBBB_H
N¬ÇÇBB_BÇÇB_H[ŸH»À»ô\]]]ôHô\X]‹à[ô‘€ô¬ÇÇBBZYà
€‹€›[ùOOHHH
H¬ÇÇBBBKÀ»ù\››\ùYÇÇBBBZYà
[U[YHèH
H¬ÇÇBBBB[€‹€›[ùH¬ÇÇBBBB]\Àó‹Ÿ][ô[ô‹ ùYK\Àúô\]][€ú»OOH[ô‘€ô»
N¬ÇÇBBB_H[ŸH¬ÇÇBBBBKÀ»⁄[à€‹[ô»[àô]ô\úŸH\ôX›[€ãH[ö]X[ÇBBBBKÀ»ò[ú⁄][€àõ›Y⁄ô\õ»€›[ù»\»Hô\]][€ãÇBBBBKÀ»€»X]ôH€‹€›[ù]LBÇÇBBBB]\Àó‹Ÿ][ô[ô‹ \Àúô\]][€ú»OOHùYK[ô‘€ô»
N¬ÇÇBBB_BÇÇBB_BÇÇBBZYà
[YHèH\ò][€à[YH
H¬ÇÇBBBKÀ»‹ò\\õ›[ôÇÇBBBX€€ú›€‹[HHX]ôõ€‹ä[YH»\ò][€à
N»À»⁄Y€ôYÇBBB][YHOH\ò][€à
à€‹[N¬ÇÇBBB[€‹€›[ù
œHX]òXú €‹[H
N¬ÇÇBBBX€€ú›[ô[ô»H\Àúô\]][€ú»H€‹€›[ù¬ÇÇBBBZYà
[ô[ô»H
H¬ÇÇBBBBKÀ»]ôH»›‹
›⁄]⁄›]K€[\[YKö\ôH]ô[ù
BÇÇBBBBZYà
\Àò€[\⁄[ëö[ö\⁄Y
H\Àú]\ŸYHùYN¬ÇBBBBY[ŸH\Àô[òXõYHò[ŸN¬ÇÇBBBB][YHH[U[YHà»\ò][€àà¬ÇÇBBBB]\Àù[YHH[YN¬ÇÇBBBB]\Àó€Z^\ãô\‹]⁄]ô[ù
¬ÇBBBBB]\Nà	Ÿö[ö\⁄Y	ÀX›[€éà\ÀÇBBBBBY\ôX›[€éà[U[YHà»HàHBÇBBBB_H
N¬ÇÇBBB_H[ŸH¬ÇÇBBBBKÀ»ŸY\ù[õö[ô¬ÇÇBBBBZYà
[ô[ô»OOHH
H¬ÇÇBBBBBKÀ»[ù\ö[ô»H\›õ›[ôÇÇBBBBBX€€ú›]›\ùH[U[YH¬ÇBBBBB]\Àó‹Ÿ][ô[ô‹ ]›\ùH]›\ù[ô‘€ô»
N¬ÇÇBBBB_H[ŸH¬ÇÇBBBBB]\Àó‹Ÿ][ô[ô‹ ò[ŸKò[ŸK[ô‘€ô»
N¬ÇÇBBBB_BÇÇBBBB]\Àó€€‹€›[ùH€‹€›[ù¬ÇÇBBBB]\Àù[YHH[YN¬ÇÇBBBB]\Àó€Z^\ãô\‹]⁄]ô[ù
¬ÇBBBBB]\Nà	€€‹	ÀX›[€éà\À€‹[Nà€‹[BÇBBBB_H
N¬ÇÇBBB_BÇÇBB_H[ŸH¬ÇÇBBB]\Àù[YHH[YN¬ÇÇBB_BÇÇBBZYà
[ô‘€ô»	âà
€‹€›[ù	àH
HOOHH
H¬ÇÇBBBKÀ»[ùô\ù[YHõ‹àHú€ô»õ›[ôÇÇÇBBB\ô]\õà\ò][€àH[YN¬ÇÇBB_BÇÇB_BÇÇB\ô]\õà[YN¬ÇÇ_BÇÇW‹Ÿ][ô[ô‹ ]›\ù][ô[ô‘€ô»
H¬ÇÇBX€€ú›Ÿ][ô‹»H\Àó⁄[ù\ú€[ùŸ][ô‹Œ¬ÇÇBZYà
[ô‘€ô»
H¬ÇÇBB\Ÿ][ô‹Àô[ô[ô‘›\ùHô\õ‘€‹Q[ô[ôŒ¬ÇBB\Ÿ][ô‹Àô[ô[ô—[ôHô\õ‘€‹Q[ô[ôŒ¬ÇÇB_H[ŸH¬ÇÇBBKÀ»\‹›[Z[ô»õ‹à€‹€òŸH]›\ùOH][ôOHùYBÇÇBBZYà
]›\ù
H¬ÇÇBBB\Ÿ][ô‹Àô[ô[ô‘›\ùH\Àûô\õ‘€‹P]›\ù»ô\õ‘€‹Q[ô[ô»àô\õ–›\ùò]\ôQ[ô[ôŒ¬ÇÇBB_H[ŸH¬ÇÇBBB\Ÿ][ô‹Àô[ô[ô‘›\ùH‹ò\\õ›[ô[ô[ôŒ¬ÇÇBB_BÇÇBBZYà
][ô
H¬ÇÇBBB\Ÿ][ô‹Àô[ô[ô—[ôH\Àûô\õ‘€‹P][ô»ô\õ‘€‹Q[ô[ô»àô\õ–›\ùò]\ôQ[ô[ôŒ¬ÇÇBB_H[ŸH¬ÇÇBBB\Ÿ][ô‹Àô[ô[ô—[ôHH‹ò\\õ›[ô[ô[ôŒ¬ÇÇBB_BÇÇB_BÇÇ_BÇÇW‹ÿ⁄Y[QòY[ô \ò][€ãŸZY⁄õ›ÀŸZY⁄[à
H¬ÇÇBX€€ú›Z^\àH\Àó€Z^\ãõ›»HZ^\ãù[YN¬ÇB[][ù\ú€[ùH\Àó›ŸZY⁄[ù\ú€[ù¬ÇÇBZYà
[ù\ú€[ùOOHù[
H¬ÇÇBBZ[ù\ú€[ùHZ^\ãó€[ô€€ùõ€[ù\ú€[ù

N¬ÇBB]\Àó›ŸZY⁄[ù\ú€[ùH[ù\ú€[ù¬ÇÇB_BÇÇBX€€ú›[Y\»H[ù\ú€[ùú\ò[Y]\î‹⁄][€úÀÇBB]ò[Y\»H[ù\ú€[ùúÿ[\Uò[Y\Œ¬ÇÇB][Y\÷»HHõ›Œ¬ÇB]ò[Y\÷»HHŸZY⁄õ›Œ¬ÇB][Y\÷»HHHõ›»
»\ò][€é¬ÇB]ò[Y\÷»HHHŸZY⁄[é¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€€ú›ÿ€€ùõ€[ù\ú€[ù‘ô\›[ùYôô\àHô]»õÿ]Ãê\úò^JH
N¬ÇÇò€\‹»[ö[X][€ìZ^\à^[ô»]ô[ù\‹]⁄\à¬ÇÇX€€ú›ùX›‹äõ€›
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àó‹õ€›Hõ€›¬ÇB]\Àó⁄[ö]Y[[‹ûSX[òYŸ\ä
N¬ÇB]\ÀóÿXÿ›R[ô^H¬ÇB]\Àù[YHH¬ÇB]\Àù[YTÿÿ[HHKå¬ÇÇ_BÇÇWÿö[ôX›[€äX›[€ãõ››\PX›[€à
H¬ÇÇBX€€ú›õ€›HX›[€ãó€ÿÿ[õ€›\Àó‹õ€›ÇBB]òX⁄‹»HX›[€ãóÿ€\ùòX⁄‹ÀÇBB[ïòX⁄‹»HòX⁄‹Àõ[ô›ÇBBXö[ô[ô‹»HX›[€ãó‹õ‹\ùPö[ô[ô‹ÀÇBBZ[ù\ú€[ù»HX›[€ãó⁄[ù\ú€[ùÀÇBB\õ€›]ZYHõ€›ù]ZYÇBBXö[ô[ô‹–ûTõ€›H\Àóÿö[ô[ô‹–ûTõ€›[ôò[YN¬ÇÇB[]ö[ô[ô‹–ûSò[YHHö[ô[ô‹–ûTõ€›»õ€›]ZYN¬ÇÇBZYà
ö[ô[ô‹–ûSò[YHOOH[ôYö[ôY
H¬ÇÇBBXö[ô[ô‹–ûSò[YHHﬂN¬ÇBBXö[ô[ô‹–ûTõ€›»õ€›]ZYHHö[ô[ô‹–ûSò[YN¬ÇÇB_BÇÇBYõ‹à
]HH»HOOHïòX⁄‹Œ»
 »H
H¬ÇÇBBX€€ú›òX⁄»HòX⁄‹÷»HKÇBBB]òX⁄”ò[YHHòX⁄Àõò[YN¬ÇÇBB[]ö[ô[ô»Hö[ô[ô‹–ûSò[YV»òX⁄”ò[YHN¬ÇÇBBZYà
ö[ô[ô»OOH[ôYö[ôY
H¬ÇÇBBBJ »ö[ô[ôÀúôYô\ô[òŸP€›[ù¬ÇBBBXö[ô[ô‹÷»HHHö[ô[ôŒ¬ÇÇBB_H[ŸH¬ÇÇBBBXö[ô[ô»Hö[ô[ô‹÷»HN¬ÇÇBBBZYà
ö[ô[ô»OOH[ôYö[ôY
H¬ÇÇBBBBKÀ»^\›[ô»ö[ô[ôÀXZŸH›\ôHHÿX⁄H€õ›‹¬ÇÇBBBBZYà
ö[ô[ôÀóÿÿX⁄R[ô^OOHù[
H¬ÇÇBBBBBJ »ö[ô[ôÀúôYô\ô[òŸP€›[ù¬ÇBBBBB]\ÀóÿY[òX›]ôPö[ô[ô ö[ô[ôÀõ€›]ZYòX⁄”ò[YH
N¬ÇÇBBBB_BÇÇBBBBX€€ù[ùYN¬ÇÇBBB_BÇÇBBBX€€ú›]Hõ››\PX›[€à	âàõ››\PX›[€ãÇÇBBBBW‹õ‹\ùPö[ô[ô‹÷»HKòö[ô[ôÀú\úŸY]¬ÇÇBBBXö[ô[ô»Hô]»õ‹\ùSZ^\äÇBBBBTõ‹\ùPö[ô[ôÀò‹ôX]Jõ€›òX⁄”ò[YK]
KÇBBBB]òX⁄Àïò[YU\Sò[YKòX⁄ÀôŸ]ò[YT⁄^ôJ
H
N¬ÇÇBBBJ »ö[ô[ôÀúôYô\ô[òŸP€›[ù¬ÇBBB]\ÀóÿY[òX›]ôPö[ô[ô ö[ô[ôÀõ€›]ZYòX⁄”ò[YH
N¬ÇÇBBBXö[ô[ô‹÷»HHHö[ô[ôŒ¬ÇÇBB_BÇÇBBZ[ù\ú€[ù÷»HKúô\›[ùYôô\àHö[ô[ôÀòùYôô\é¬ÇÇB_BÇÇ_BÇÇWÿX›]ò]PX›[€äX›[€à
H¬ÇÇBZYà
H\Àó⁄\–X›]ôPX›[€äX›[€à
H
H¬ÇÇBBZYà
X›[€ãóÿÿX⁄R[ô^OOHù[
H¬ÇÇBBBKÀ»\»X›[€à\»ôY[àõ‹ô€›[àûHHÿX⁄Kù]H\Ÿ\ÇÇBBBKÀ»\X\ú»»ôH›[\⁄[ô»]OàôXö[ôÇÇBBBX€€ú›õ€›]ZYH
X›[€ãó€ÿÿ[õ€›\Àó‹õ€›
Kù]ZYÇBBBBX€\]ZYHX›[€ãóÿ€\ù]ZYÇBBBBXX›[€ú—õ‹ê€\H\ÀóÿX›[€ú–ûP€\»€\]ZYN¬ÇÇBBB]\Àóÿö[ôX›[€äX›[€ãÇBBBBXX›[€ú—õ‹ê€\	âàX›[€ú—õ‹ê€\ö€õ›€êX›[€ú÷»H
N¬ÇÇBBB]\ÀóÿY[òX›]ôPX›[€äX›[€ã€\]ZYõ€›]ZY
N¬ÇÇBB_BÇÇBBX€€ú›ö[ô[ô‹»HX›[€ãó‹õ‹\ùPö[ô[ô‹Œ¬ÇÇBBKÀ»[ò‹ô[Y[ùôYô\ô[òŸH€›[ù»»€‹ù›]›]BÇBBYõ‹à
]HHàHö[ô[ô‹Àõ[ô›»HOOHé»
 »H
H¬ÇÇBBBX€€ú›ö[ô[ô»Hö[ô[ô‹÷»HN¬ÇÇBBBZYà
ö[ô[ôÀù\ŸP€›[ù
 »OOH
H¬ÇÇBBBB]\Àó€[ôö[ô[ô ö[ô[ô»
N¬ÇBBBBXö[ô[ôÀúÿ]ôS‹öY⁄[ò[›]J
N¬ÇÇBBB_BÇÇBB_BÇÇBB]\Àó€[ôX›[€äX›[€à
N¬ÇÇB_BÇÇ_BÇÇWŸXX›]ò]PX›[€äX›[€à
H¬ÇÇBZYà
\Àó⁄\–X›]ôPX›[€äX›[€à
H
H¬ÇÇBBX€€ú›ö[ô[ô‹»HX›[€ãó‹õ‹\ùPö[ô[ô‹Œ¬ÇÇBBKÀ»X‹ô[Y[ùôYô\ô[òŸH€›[ù»»€‹ù›]›]BÇBBYõ‹à
]HHàHö[ô[ô‹Àõ[ô›»HOOHé»
 »H
H¬ÇÇBBBX€€ú›ö[ô[ô»Hö[ô[ô‹÷»HN¬ÇÇBBBZYà
KHö[ô[ôÀù\ŸP€›[ùOOH
H¬ÇÇBBBBXö[ô[ôÀúô\›‹ôS‹öY⁄[ò[›]J
N¬ÇBBBB]\Àó›ZŸPòX⁄–ö[ô[ô ö[ô[ô»
N¬ÇÇBBB_BÇÇBB_BÇÇBB]\Àó›ZŸPòX⁄–X›[€äX›[€à
N¬ÇÇB_BÇÇ_BÇÇKÀ»Y[[‹ûHX[òYŸ\ÇÇÇW⁄[ö]Y[[‹ûSX[òYŸ\ä
H¬ÇÇB]\ÀóÿX›[€ú»H◊N»À»	€êX›]ôPX›[€ú…»õ€›ŸYûH[òX›]ôH€ô\¬ÇB]\Àó€êX›]ôPX›[€ú»H¬ÇÇB]\ÀóÿX›[€ú–ûP€\HﬂN¬ÇBKÀ»[ú⁄YNÇÇBKÀ»¬ÇBKÀ»Z€õ›€êX›[€úŒà\úò^O[ö[X][€êX›[€ààH\ŸY\»õ››\\¬ÇBKÀ»XX›[€êûTõ€›à[ö[X][€êX›[€àH€⁄›\ÇBKÀ»BÇÇÇB]\Àóÿö[ô[ô‹»H◊N»À»	€êX›]ôPö[ô[ô‹…»õ€›ŸYûH[òX›]ôH€ô\¬ÇB]\Àó€êX›]ôPö[ô[ô‹»H¬ÇÇB]\Àóÿö[ô[ô‹–ûTõ€›[ôò[YHHﬂN»À»[ú⁄YNàX\ò[YKõ‹\ùSZ^\àÇÇÇÇB]\Àóÿ€€ùõ€[ù\ú€[ù»H◊N»À»ÿ[YHÿ[YH\»Xõ›ôBÇB]\Àó€êX›]ôP€€ùõ€[ù\ú€[ù»H¬ÇÇBX€€ú›ÿ€‹HH\Œ¬ÇÇB]\Àú›]»H¬ÇÇBBXX›[€úŒà¬ÇBBBYŸ]›[

H¬ÇÇBBBB\ô]\õàÿ€‹KóÿX›[€úÀõ[ô›¬ÇÇBBB_KÇBBBYŸ][ï\ŸJ
H¬ÇÇBBBB\ô]\õàÿ€‹Kó€êX›]ôPX›[€úŒ¬ÇÇBBB_BÇBB_KÇBBXö[ô[ô‹Œà¬ÇBBBYŸ]›[

H¬ÇÇBBBB\ô]\õàÿ€‹Kóÿö[ô[ô‹Àõ[ô›¬ÇÇBBB_KÇBBBYŸ][ï\ŸJ
H¬ÇÇBBBB\ô]\õàÿ€‹Kó€êX›]ôPö[ô[ô‹Œ¬ÇÇBBB_BÇBB_KÇBBX€€ùõ€[ù\ú€[ùŒà¬ÇBBBYŸ]›[

H¬ÇÇBBBB\ô]\õàÿ€‹Kóÿ€€ùõ€[ù\ú€[ùÀõ[ô›¬ÇÇBBB_KÇBBBYŸ][ï\ŸJ
H¬ÇÇBBBB\ô]\õàÿ€‹Kó€êX›]ôP€€ùõ€[ù\ú€[ùŒ¬ÇÇBBB_BÇBB_BÇÇB_N¬ÇÇ_BÇÇKÀ»Y[[‹ûHX[òYŸ[Y[ùõ‹à[ö[X][€êX›[€àÿöôX›¬ÇÇW⁄\–X›]ôPX›[€äX›[€à
H¬ÇÇBX€€ú›[ô^HX›[€ãóÿÿX⁄R[ô^¬ÇB\ô]\õà[ô^OOHù[	âà[ô^\Àó€êX›]ôPX›[€úŒ¬ÇÇ_BÇÇWÿY[òX›]ôPX›[€äX›[€ã€\]ZYõ€›]ZY
H¬ÇÇBX€€ú›X›[€ú»H\ÀóÿX›[€úÀÇBBXX›[€ú–ûP€\H\ÀóÿX›[€ú–ûP€\¬ÇÇB[]X›[€ú—õ‹ê€\HX›[€ú–ûP€\»€\]ZYN¬ÇÇBZYà
X›[€ú—õ‹ê€\OOH[ôYö[ôY
H¬ÇÇBBXX›[€ú—õ‹ê€\H¬ÇÇBBBZ€õ›€êX›[€úŒà»X›[€àKÇBBBXX›[€êûTõ€›àﬂBÇÇBB_N¬ÇÇBBXX›[€ãóÿûP€\ÿX⁄R[ô^H¬ÇÇBBXX›[€ú–ûP€\»€\]ZYHHX›[€ú—õ‹ê€\¬ÇÇB_H[ŸH¬ÇÇBBX€€ú›€õ›€êX›[€ú»HX›[€ú—õ‹ê€\ö€õ›€êX›[€úŒ¬ÇÇBBXX›[€ãóÿûP€\ÿX⁄R[ô^H€õ›€êX›[€úÀõ[ô›¬ÇBBZ€õ›€êX›[€úÀú\⁄
X›[€à
N¬ÇÇB_BÇÇBXX›[€ãóÿÿX⁄R[ô^HX›[€úÀõ[ô›¬ÇBXX›[€úÀú\⁄
X›[€à
N¬ÇÇBXX›[€ú—õ‹ê€\òX›[€êûTõ€›»õ€›]ZYHHX›[€é¬ÇÇ_BÇÇW‹ô[[›ôR[òX›]ôPX›[€äX›[€à
H¬ÇÇBX€€ú›X›[€ú»H\ÀóÿX›[€úÀÇBB[\›[òX›]ôPX›[€àHX›[€ú÷»X›[€úÀõ[ô›HHKÇBBXÿX⁄R[ô^HX›[€ãóÿÿX⁄R[ô^¬ÇÇB[\›[òX›]ôPX›[€ãóÿÿX⁄R[ô^HÿX⁄R[ô^¬ÇBXX›[€ú÷»ÿX⁄R[ô^HH\›[òX›]ôPX›[€é¬ÇBXX›[€úÀú‹

N¬ÇÇBXX›[€ãóÿÿX⁄R[ô^Hù[¬ÇÇÇBX€€ú›€\]ZYHX›[€ãóÿ€\ù]ZYÇBBXX›[€ú–ûP€\H\ÀóÿX›[€ú–ûP€\ÇBBXX›[€ú—õ‹ê€\HX›[€ú–ûP€\»€\]ZYKÇBBZ€õ›€êX›[€ú—õ‹ê€\HX›[€ú—õ‹ê€\ö€õ›€êX›[€úÀÇÇBB[\›€õ›€êX›[€àBÇBBBZ€õ›€êX›[€ú—õ‹ê€\»€õ›€êX›[€ú—õ‹ê€\õ[ô›HHKÇÇBBXûP€\ÿX⁄R[ô^HX›[€ãóÿûP€\ÿX⁄R[ô^¬ÇÇB[\›€õ›€êX›[€ãóÿûP€\ÿX⁄R[ô^HûP€\ÿX⁄R[ô^¬ÇBZ€õ›€êX›[€ú—õ‹ê€\»ûP€\ÿX⁄R[ô^HH\›€õ›€êX›[€é¬ÇBZ€õ›€êX›[€ú—õ‹ê€\ú‹

N¬ÇÇBXX›[€ãóÿûP€\ÿX⁄R[ô^Hù[¬ÇÇÇBX€€ú›X›[€êûTõ€›HX›[€ú—õ‹ê€\òX›[€êûTõ€›ÇBB\õ€›]ZYH
X›[€ãó€ÿÿ[õ€›\Àó‹õ€›
Kù]ZY¬ÇÇBY[]HX›[€êûTõ€›»õ€›]ZYN¬ÇÇBZYà
€õ›€êX›[€ú—õ‹ê€\õ[ô›OOH
H¬ÇÇBBY[]HX›[€ú–ûP€\»€\]ZYN¬ÇÇB_BÇÇB]\Àó‹ô[[›ôR[òX›]ôPö[ô[ô‹—õ‹êX›[€äX›[€à
N¬ÇÇ_BÇÇW‹ô[[›ôR[òX›]ôPö[ô[ô‹—õ‹êX›[€äX›[€à
H¬ÇÇBX€€ú›ö[ô[ô‹»HX›[€ãó‹õ‹\ùPö[ô[ô‹Œ¬ÇÇBYõ‹à
]HHàHö[ô[ô‹Àõ[ô›»HOOHé»
 »H
H¬ÇÇBBX€€ú›ö[ô[ô»Hö[ô[ô‹÷»HN¬ÇÇBBZYà
KHö[ô[ôÀúôYô\ô[òŸP€›[ùOOH
H¬ÇÇBBB]\Àó‹ô[[›ôR[òX›]ôPö[ô[ô ö[ô[ô»
N¬ÇÇBB_BÇÇB_BÇÇ_BÇÇW€[ôX›[€äX›[€à
H¬ÇÇBKÀ»»X›]ôHX›[€ú»[òX›]ôHX›[€ú»BÇBKÀ»»X›]ôHX›[€ú»ü[òX›]ôHX›[€ú»BÇBKÀ»»BÇBKÀ»\›ÿ\OÇÇBKÀ»H¬ÇÇBX€€ú›X›[€ú»H\ÀóÿX›[€úÀÇBB\ô]í[ô^HX›[€ãóÿÿX⁄R[ô^ÇÇBB[\›X›]ôR[ô^H\Àó€êX›]ôPX›[€ú»
 ÀÇÇBBYö\ú›[òX›]ôPX›[€àHX›[€ú÷»\›X›]ôR[ô^N¬ÇÇBXX›[€ãóÿÿX⁄R[ô^H\›X›]ôR[ô^¬ÇBXX›[€ú÷»\›X›]ôR[ô^HHX›[€é¬ÇÇBYö\ú›[òX›]ôPX›[€ãóÿÿX⁄R[ô^Hô]í[ô^¬ÇBXX›[€ú÷»ô]í[ô^HHö\ú›[òX›]ôPX›[€é¬ÇÇ_BÇÇW›ZŸPòX⁄–X›[€äX›[€à
H¬ÇÇBKÀ»»X›]ôHX›[€ú»[òX›]ôHX›[€ú»BÇBKÀ»»X›]ôHX›[€ú»[òX›]ôHX›[€ú»BÇBKÀ»H¬ÇBKÀ»\›ÿ\OÇÇBKÀ»»BÇÇBX€€ú›X›[€ú»H\ÀóÿX›[€úÀÇBB\ô]í[ô^HX›[€ãóÿÿX⁄R[ô^ÇÇBBYö\ú›[òX›]ôR[ô^HKH\Àó€êX›]ôPX›[€úÀÇÇBB[\›X›]ôPX›[€àHX›[€ú÷»ö\ú›[òX›]ôR[ô^N¬ÇÇBXX›[€ãóÿÿX⁄R[ô^Hö\ú›[òX›]ôR[ô^¬ÇBXX›[€ú÷»ö\ú›[òX›]ôR[ô^HHX›[€é¬ÇÇB[\›X›]ôPX›[€ãóÿÿX⁄R[ô^Hô]í[ô^¬ÇBXX›[€ú÷»ô]í[ô^HH\›X›]ôPX›[€é¬ÇÇ_BÇÇKÀ»Y[[‹ûHX[òYŸ[Y[ùõ‹àõ‹\ùSZ^\àÿöôX›¬ÇÇWÿY[òX›]ôPö[ô[ô ö[ô[ôÀõ€›]ZYòX⁄”ò[YH
H¬ÇÇBX€€ú›ö[ô[ô‹–ûTõ€›H\Àóÿö[ô[ô‹–ûTõ€›[ôò[YKÇBBXö[ô[ô‹»H\Àóÿö[ô[ô‹Œ¬ÇÇB[]ö[ô[ô–ûSò[YHHö[ô[ô‹–ûTõ€›»õ€›]ZYN¬ÇÇBZYà
ö[ô[ô–ûSò[YHOOH[ôYö[ôY
H¬ÇÇBBXö[ô[ô–ûSò[YHHﬂN¬ÇBBXö[ô[ô‹–ûTõ€›»õ€›]ZYHHö[ô[ô–ûSò[YN¬ÇÇB_BÇÇBXö[ô[ô–ûSò[YV»òX⁄”ò[YHHHö[ô[ôŒ¬ÇÇBXö[ô[ôÀóÿÿX⁄R[ô^Hö[ô[ô‹Àõ[ô›¬ÇBXö[ô[ô‹Àú\⁄
ö[ô[ô»
N¬ÇÇ_BÇÇW‹ô[[›ôR[òX›]ôPö[ô[ô ö[ô[ô»
H¬ÇÇBX€€ú›ö[ô[ô‹»H\Àóÿö[ô[ô‹ÀÇBB\õ‹ö[ô[ô»Hö[ô[ôÀòö[ô[ôÀÇBB\õ€›]ZYHõ‹ö[ô[ôÀúõ€›õŸKù]ZYÇBB]òX⁄”ò[YHHõ‹ö[ô[ôÀú]ÇBBXö[ô[ô‹–ûTõ€›H\Àóÿö[ô[ô‹–ûTõ€›[ôò[YKÇBBXö[ô[ô–ûSò[YHHö[ô[ô‹–ûTõ€›»õ€›]ZYKÇÇBB[\›[òX›]ôPö[ô[ô»Hö[ô[ô‹÷»ö[ô[ô‹Àõ[ô›HHKÇBBXÿX⁄R[ô^Hö[ô[ôÀóÿÿX⁄R[ô^¬ÇÇB[\›[òX›]ôPö[ô[ôÀóÿÿX⁄R[ô^HÿX⁄R[ô^¬ÇBXö[ô[ô‹÷»ÿX⁄R[ô^HH\›[òX›]ôPö[ô[ôŒ¬ÇBXö[ô[ô‹Àú‹

N¬ÇÇBY[]Hö[ô[ô–ûSò[YV»òX⁄”ò[YHN¬ÇÇBZYà
ÿöôX›öŸ^\ ö[ô[ô–ûSò[YH
Kõ[ô›OOH
H¬ÇÇBBY[]Hö[ô[ô‹–ûTõ€›»õ€›]ZYN¬ÇÇB_BÇÇ_BÇÇW€[ôö[ô[ô ö[ô[ô»
H¬ÇÇBX€€ú›ö[ô[ô‹»H\Àóÿö[ô[ô‹ÀÇBB\ô]í[ô^Hö[ô[ôÀóÿÿX⁄R[ô^ÇÇBB[\›X›]ôR[ô^H\Àó€êX›]ôPö[ô[ô‹»
 ÀÇÇBBYö\ú›[òX›]ôPö[ô[ô»Hö[ô[ô‹÷»\›X›]ôR[ô^N¬ÇÇBXö[ô[ôÀóÿÿX⁄R[ô^H\›X›]ôR[ô^¬ÇBXö[ô[ô‹÷»\›X›]ôR[ô^HHö[ô[ôŒ¬ÇÇBYö\ú›[òX›]ôPö[ô[ôÀóÿÿX⁄R[ô^Hô]í[ô^¬ÇBXö[ô[ô‹÷»ô]í[ô^HHö\ú›[òX›]ôPö[ô[ôŒ¬ÇÇ_BÇÇW›ZŸPòX⁄–ö[ô[ô ö[ô[ô»
H¬ÇÇBX€€ú›ö[ô[ô‹»H\Àóÿö[ô[ô‹ÀÇBB\ô]í[ô^Hö[ô[ôÀóÿÿX⁄R[ô^ÇÇBBYö\ú›[òX›]ôR[ô^HKH\Àó€êX›]ôPö[ô[ô‹ÀÇÇBB[\›X›]ôPö[ô[ô»Hö[ô[ô‹÷»ö\ú›[òX›]ôR[ô^N¬ÇÇBXö[ô[ôÀóÿÿX⁄R[ô^Hö\ú›[òX›]ôR[ô^¬ÇBXö[ô[ô‹÷»ö\ú›[òX›]ôR[ô^HHö[ô[ôŒ¬ÇÇB[\›X›]ôPö[ô[ôÀóÿÿX⁄R[ô^Hô]í[ô^¬ÇBXö[ô[ô‹÷»ô]í[ô^HH\›X›]ôPö[ô[ôŒ¬ÇÇ_BÇÇÇKÀ»Y[[‹ûHX[òYŸ[Y[ùŸà[ù\ú€[ù»õ‹àŸZY⁄[ô[YHÿÿ[BÇÇW€[ô€€ùõ€[ù\ú€[ù

H¬ÇÇBX€€ú›[ù\ú€[ù»H\Àóÿ€€ùõ€[ù\ú€[ùÀÇBB[\›X›]ôR[ô^H\Àó€êX›]ôP€€ùõ€[ù\ú€[ù»
 Œ¬ÇÇB[][ù\ú€[ùH[ù\ú€[ù÷»\›X›]ôR[ô^N¬ÇÇBZYà
[ù\ú€[ùOOH[ôYö[ôY
H¬ÇÇBBZ[ù\ú€[ùHô]»[ôX\í[ù\ú€[ù
ÇBBB[ô]»õÿ]Ãê\úò^Jà
Kô]»õÿ]Ãê\úò^Jà
KÇBBBLKÿ€€ùõ€[ù\ú€[ù‘ô\›[ùYôô\à
N¬ÇÇBBZ[ù\ú€[ùó◊ÿÿX⁄R[ô^H\›X›]ôR[ô^¬ÇBBZ[ù\ú€[ù÷»\›X›]ôR[ô^HH[ù\ú€[ù¬ÇÇB_BÇÇB\ô]\õà[ù\ú€[ù¬ÇÇ_BÇÇW›ZŸPòX⁄–€€ùõ€[ù\ú€[ù
[ù\ú€[ù
H¬ÇÇBX€€ú›[ù\ú€[ù»H\Àóÿ€€ùõ€[ù\ú€[ùÀÇBB\ô]í[ô^H[ù\ú€[ùó◊ÿÿX⁄R[ô^ÇÇBBYö\ú›[òX›]ôR[ô^HKH\Àó€êX›]ôP€€ùõ€[ù\ú€[ùÀÇÇBB[\›X›]ôR[ù\ú€[ùH[ù\ú€[ù÷»ö\ú›[òX›]ôR[ô^N¬ÇÇBZ[ù\ú€[ùó◊ÿÿX⁄R[ô^Hö\ú›[òX›]ôR[ô^¬ÇBZ[ù\ú€[ù÷»ö\ú›[òX›]ôR[ô^HH[ù\ú€[ù¬ÇÇB[\›X›]ôR[ù\ú€[ùó◊ÿÿX⁄R[ô^Hô]í[ô^¬ÇBZ[ù\ú€[ù÷»ô]í[ô^HH\›X›]ôR[ù\ú€[ù¬ÇÇ_BÇÇKÀ»ô]\õà[àX›[€àõ‹àH€\‹[€ò[H\⁄[ô»H›\›€Hõ€›\ôŸ]ÇKÀ»ÿöôX›
\»Y]Ÿ[ÿÿ]\»H›Ÿà[ò[ZX»Y[[‹ûH[àÿ\ŸHBÇKÀ»ô]ö[›\€H[ö€õ›€à€\‹õ€›€€Xö[ò][€à\»‹X⁄YöYY
BÇX€\X›[€ä€\‹[€ò[õ€›õ[ô[ŸH
H¬ÇÇBX€€ú›õ€›H‹[€ò[õ€›\Àó‹õ€›ÇBB\õ€›]ZYHõ€›ù]ZY¬ÇÇB[]€\ÿöôX›H\[Ÿà€\OOH	‹›ö[ô…»»[ö[X][€ê€\ôö[ôûSò[YJõ€›€\
Hà€\¬ÇÇBX€€ú›€\]ZYH€\ÿöôX›OOHù[»€\ÿöôX›ù]ZYà€\¬ÇÇBX€€ú›X›[€ú—õ‹ê€\H\ÀóÿX›[€ú–ûP€\»€\]ZYN¬ÇB[]õ››\PX›[€àHù[¬ÇÇBZYà
õ[ô[ŸHOOH[ôYö[ôY
H¬ÇÇBBZYà
€\ÿöôX›OOHù[
H¬ÇÇBBBXõ[ô[ŸHH€\ÿöôX›òõ[ô[ŸN¬ÇÇBB_H[ŸH¬ÇÇBBBXõ[ô[ŸHHõ‹õX[[ö[X][€êõ[ô[ŸN¬ÇÇBB_BÇÇB_BÇÇBZYà
X›[€ú—õ‹ê€\OOH[ôYö[ôY
H¬ÇÇBBX€€ú›^\›[ô–X›[€àHX›[€ú—õ‹ê€\òX›[€êûTõ€›»õ€›]ZYN¬ÇÇBBZYà
^\›[ô–X›[€àOOH[ôYö[ôY	âà^\›[ô–X›[€ãòõ[ô[ŸHOOHõ[ô[ŸH
H¬ÇÇBBB\ô]\õà^\›[ô–X›[€é¬ÇÇBB_BÇÇBBKÀ»ŸH€õ›»H€\€»ŸH€â›]ôH»\úŸH[ÇBBKÀ»Hö[ô[ô‹»YÿZ[àù]ÿ[àù\›€‹BÇBB\õ››\PX›[€àHX›[€ú—õ‹ê€\ö€õ›€êX›[€ú÷»N¬ÇÇBBKÀ»[€ÀZŸHH€\úõ€HHõ››\HX›[€ÇÇBBZYà
€\ÿöôX›OOHù[
BÇBBBX€\ÿöôX›Hõ››\PX›[€ãóÿ€\¬ÇÇB_BÇÇBKÀ»€\]\›ôH€õ›€à⁄[à‹X⁄YöYYöXH›ö[ô¬ÇBZYà
€\ÿöôX›OOHù[
Hô]\õàù[¬ÇÇBKÀ»[ÿÿ]H[ô\€›\òŸ\»ô\]Z\ôY»ù[à]ÇBX€€ú›ô]–X›[€àHô]»[ö[X][€êX›[€ä\À€\ÿöôX›‹[€ò[õ€›õ[ô[ŸH
N¬ÇÇB]\Àóÿö[ôX›[€äô]–X›[€ãõ››\PX›[€à
N¬ÇÇBKÀ»[ôXZŸHHX›[€à€õ›€à»HY[[‹ûHX[òYŸ\ÇÇB]\ÀóÿY[òX›]ôPX›[€äô]–X›[€ã€\]ZYõ€›]ZY
N¬ÇÇB\ô]\õàô]–X›[€é¬ÇÇ_BÇÇKÀ»Ÿ][à^\›[ô»X›[€ÇÇY^\›[ô–X›[€ä€\‹[€ò[õ€›
H¬ÇÇBX€€ú›õ€›H‹[€ò[õ€›\Àó‹õ€›ÇBB\õ€›]ZYHõ€›ù]ZYÇÇBBX€\ÿöôX›H\[Ÿà€\OOH	‹›ö[ô…»¬ÇBBBP[ö[X][€ê€\ôö[ôûSò[YJõ€›€\
Hà€\ÇÇBBX€\]ZYH€\ÿöôX›»€\ÿöôX›ù]ZYà€\ÇÇBBXX›[€ú—õ‹ê€\H\ÀóÿX›[€ú–ûP€\»€\]ZYN¬ÇÇBZYà
X›[€ú—õ‹ê€\OOH[ôYö[ôY
H¬ÇÇBB\ô]\õàX›[€ú—õ‹ê€\òX›[€êûTõ€›»õ€›]ZYHù[¬ÇÇB_BÇÇB\ô]\õàù[¬ÇÇ_BÇÇKÀ»XX›]ò]\»[ô]ö[›\€Hÿ⁄Y[YX›[€ú¬Ç\›‹[X›[€ä
H¬ÇÇBX€€ú›X›[€ú»H\ÀóÿX›[€úÀÇBB[êX›[€ú»H\Àó€êX›]ôPX›[€úŒ¬ÇÇBYõ‹à
]HHêX›[€ú»HN»HèH»KHH
H¬ÇÇBBXX›[€ú÷»HKú›‹

N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇKÀ»Yò[òŸHH[YH[ô\]H\HH[ö[X][€ÇÇ]\]J[U[YH
H¬ÇÇBY[U[YH
èH\Àù[YTÿÿ[N¬ÇÇBX€€ú›X›[€ú»H\ÀóÿX›[€úÀÇBB[êX›[€ú»H\Àó€êX›]ôPX›[€úÀÇÇBB][YHH\Àù[YH
œH[U[YKÇBB][YQ\ôX›[€àHX]ú⁄Y€ä[U[YH
KÇÇBBXXÿ›R[ô^H\ÀóÿXÿ›R[ô^èHN¬ÇÇBKÀ»ù[àX›]ôHX›[€ú¬ÇÇBYõ‹à
]HH»HOOHêX›[€úŒ»
 »H
H¬ÇÇBBX€€ú›X›[€àHX›[€ú÷»HN¬ÇÇBBXX›[€ãó›\]J[YK[U[YK[YQ\ôX›[€ãXÿ›R[ô^
N¬ÇÇB_BÇÇBKÀ»\]HÿŸ[ôH‹ò\ÇÇBX€€ú›ö[ô[ô‹»H\Àóÿö[ô[ô‹ÀÇBB[êö[ô[ô‹»H\Àó€êX›]ôPö[ô[ô‹Œ¬ÇÇBYõ‹à
]HH»HOOHêö[ô[ô‹Œ»
 »H
H¬ÇÇBBXö[ô[ô‹÷»HKò\JXÿ›R[ô^
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇKÀ»[›‹»[›H»ŸYZ»»H‹X⁄YöX»[YH[à[à[ö[X][€ãÇÇ\Ÿ][YJ[YR[îŸX€€ô»
H¬ÇÇB]\Àù[YHH»À»ô\õ»›][YH]öXù]Hõ‹à[ö[X][€ìZ^\àÿöôX›¬ÇBYõ‹à
]HH»H\ÀóÿX›[€úÀõ[ô›»H
 »
H¬ÇÇBB]\ÀóÿX›[€ú÷»HKù[YHH»À»ô\õ»›][YH]öXù]Hõ‹à[\‹€ÿ⁄X]Y[ö[X][€êX›[€àÿöôX›ÀÇÇÇB_BÇÇB\ô]\õà\Àù\]J[YR[îŸX€€ô»
N»À»\]H\ŸY»Ÿ]^X›[YKàô]\õú»ù\»à[ö[X][€ìZ^\àÿöôX›ÇÇÇ_BÇÇKÀ»ô]\õà\»Z^\â‹»õ€›\ôŸ]ÿöôX›ÇYŸ]õ€›

H¬ÇÇB\ô]\õà\Àó‹õ€›¬ÇÇ_BÇÇKÀ»úôYH[ô\€›\òŸ\»‹X⁄YöX»»H\ùX›[\à€\Ç][òÿX⁄P€\
€\
H¬ÇÇBX€€ú›X›[€ú»H\ÀóÿX›[€úÀÇBBX€\]ZYH€\ù]ZYÇBBXX›[€ú–ûP€\H\ÀóÿX›[€ú–ûP€\ÇBBXX›[€ú—õ‹ê€\HX›[€ú–ûP€\»€\]ZYN¬ÇÇBZYà
X›[€ú—õ‹ê€\OOH[ôYö[ôY
H¬ÇÇBBKÀ»õ›Nàù\›ÿ[[ô»‹ô[[›ôR[òX›]ôPX›[€à€›[Y\‹»\BÇBBKÀ»]\ò][€à›]H[ô[€»ô\]Z\ôH\][ô»H›]HŸHÿ[ÇÇBBKÀ»ù\›õ›»]ÿ^BÇÇBBX€€ú›X›[€ú’‘ô[[›ôHHX›[€ú—õ‹ê€\ö€õ›€êX›[€úŒ¬ÇÇBBYõ‹à
]HHàHX›[€ú’‘ô[[›ôKõ[ô›»HOOHé»
 »H
H¬ÇÇBBBX€€ú›X›[€àHX›[€ú’‘ô[[›ôV»HN¬ÇÇBBB]\ÀóŸXX›]ò]PX›[€äX›[€à
N¬ÇÇBBBX€€ú›ÿX⁄R[ô^HX›[€ãóÿÿX⁄R[ô^ÇBBBB[\›[òX›]ôPX›[€àHX›[€ú÷»X›[€úÀõ[ô›HHN¬ÇÇBBBXX›[€ãóÿÿX⁄R[ô^Hù[¬ÇBBBXX›[€ãóÿûP€\ÿX⁄R[ô^Hù[¬ÇÇBBB[\›[òX›]ôPX›[€ãóÿÿX⁄R[ô^HÿX⁄R[ô^¬ÇBBBXX›[€ú÷»ÿX⁄R[ô^HH\›[òX›]ôPX›[€é¬ÇBBBXX›[€úÀú‹

N¬ÇÇBBB]\Àó‹ô[[›ôR[òX›]ôPö[ô[ô‹—õ‹êX›[€äX›[€à
N¬ÇÇBB_BÇÇBBY[]HX›[€ú–ûP€\»€\]ZYN¬ÇÇB_BÇÇ_BÇÇKÀ»úôYH[ô\€›\òŸ\»‹X⁄YöX»»H\ùX›[\àõ€›\ôŸ]ÿöôX›Ç][òÿX⁄Tõ€›
õ€›
H¬ÇÇBX€€ú›õ€›]ZYHõ€›ù]ZYÇBBXX›[€ú–ûP€\H\ÀóÿX›[€ú–ûP€\¬ÇÇBYõ‹à
€€ú›€\]ZY[àX›[€ú–ûP€\
H¬ÇÇBBX€€ú›X›[€êûTõ€›HX›[€ú–ûP€\»€\]ZYKòX›[€êûTõ€›ÇBBBXX›[€àHX›[€êûTõ€›»õ€›]ZYN¬ÇÇBBZYà
X›[€àOOH[ôYö[ôY
H¬ÇÇBBB]\ÀóŸXX›]ò]PX›[€äX›[€à
N¬ÇBBB]\Àó‹ô[[›ôR[òX›]ôPX›[€äX›[€à
N¬ÇÇBB_BÇÇB_BÇÇBX€€ú›ö[ô[ô‹–ûTõ€›H\Àóÿö[ô[ô‹–ûTõ€›[ôò[YKÇBBXö[ô[ô–ûSò[YHHö[ô[ô‹–ûTõ€›»õ€›]ZYN¬ÇÇBZYà
ö[ô[ô–ûSò[YHOOH[ôYö[ôY
H¬ÇÇBBYõ‹à
€€ú›òX⁄”ò[YH[àö[ô[ô–ûSò[YH
H¬ÇÇBBBX€€ú›ö[ô[ô»Hö[ô[ô–ûSò[YV»òX⁄”ò[YHN¬ÇBBBXö[ô[ôÀúô\›‹ôS‹öY⁄[ò[›]J
N¬ÇBBB]\Àó‹ô[[›ôR[òX›]ôPö[ô[ô ö[ô[ô»
N¬ÇÇBB_BÇÇB_BÇÇ_BÇÇKÀ»ô[[›ôHH\ôŸ]Y€\úõ€HHÿX⁄BÇ][òÿX⁄PX›[€ä€\‹[€ò[õ€›
H¬ÇÇBX€€ú›X›[€àH\Àô^\›[ô–X›[€ä€\‹[€ò[õ€›
N¬ÇÇBZYà
X›[€àOOHù[
H¬ÇÇBB]\ÀóŸXX›]ò]PX›[€äX›[€à
N¬ÇBB]\Àó‹ô[[›ôR[òX›]ôPX›[€äX›[€à
N¬ÇÇB_BÇÇ_BÇüBÇò€\‹»[öYõ‹õH¬ÇÇX€€ú›ùX›‹äò[YH
H¬ÇÇB]\Àùò[YHHò[YN¬ÇÇ_BÇÇX€€ôJ
H¬ÇÇB\ô]\õàô]»[öYõ‹õJ\Àùò[YKò€€ôHOOH[ôYö[ôY»\Àùò[YHà\Àùò[YKò€€ôJ
H
N¬ÇÇ_BÇüBÇõ]⁄YH¬Çò€\‹»[öYõ‹õ\—‹õ›\^[ô»]ô[ù\‹]⁄\à¬ÇÇX€€ú›ùX›‹ä
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àö\’[öYõ‹õ\—‹õ›\HùYN¬ÇÇBSÿöôX›ôYö[ôTõ‹\ùJ\À	⁄Y	À»ò[YNà⁄Y
 »H
N¬ÇÇB]\Àõò[YHH	…Œ¬ÇÇB]\Àù\ÿYŸHH›]X—ò]’\ÿYŸN¬ÇB]\Àù[öYõ‹õ\»H◊N¬ÇÇ_BÇÇXY
[öYõ‹õH
H¬ÇÇB]\Àù[öYõ‹õ\Àú\⁄
[öYõ‹õH
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\ô[[›ôJ[öYõ‹õH
H¬ÇÇBX€€ú›[ô^H\Àù[öYõ‹õ\Àö[ô^Ÿä[öYõ‹õH
N¬ÇÇBZYà
[ô^OOHHH
H\Àù[öYõ‹õ\Àú‹XŸJ[ô^H
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]ò[YJò[YH
H¬ÇÇB]\Àõò[YHHò[YN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]\ÿYŸJò[YH
H¬ÇÇB]\Àù\ÿYŸHHò[YN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇB]\Àô\‹]⁄]ô[ù
»\Nà	Ÿ\‹‹ŸI»H
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB]\Àõò[YHH€›\òŸKõò[YN¬ÇB]\Àù\ÿYŸHH€›\òŸKù\ÿYŸN¬ÇÇBX€€ú›[öYõ‹õ\‘€›\òŸHH€›\òŸKù[öYõ‹õ\Œ¬ÇÇB]\Àù[öYõ‹õ\Àõ[ô›H¬ÇÇBYõ‹à
]HHH[öYõ‹õ\‘€›\òŸKõ[ô›»H»H
 »
H¬ÇÇBBX€€ú›[öYõ‹õ\»H\úò^Kö\–\úò^J[öYõ‹õ\‘€›\òŸV»HH
H»[öYõ‹õ\‘€›\òŸV»HHà»[öYõ‹õ\‘€›\òŸV»HHN¬ÇÇBBYõ‹à
]àH»à[öYõ‹õ\Àõ[ô›»à
 »
H¬ÇÇBBB]\Àù[öYõ‹õ\Àú\⁄
[öYõ‹õ\÷»àKò€€ôJ
H
N¬ÇÇBB_BÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇX€€ôJ
H¬ÇÇB\ô]\õàô]»\Àò€€ú›ùX›‹ä
Kò€‹J\»
N¬ÇÇ_BÇüBÇò€\‹»[ú›[òŸY[ù\õX]ôYùYôô\à^[ô»[ù\õX]ôYùYôô\à¬ÇÇX€€ú›ùX›‹ä\úò^K›öYKY\⁄\ê]öXù]HHH
H¬ÇÇB\›\\ä\úò^K›öYH
N¬ÇÇB]\Àö\“[ú›[òŸY[ù\õX]ôYùYôô\àHùYN¬ÇÇB]\ÀõY\⁄\ê]öXù]HHY\⁄\ê]öXù]N¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸH
N¬ÇÇB]\ÀõY\⁄\ê]öXù]HH€›\òŸKõY\⁄\ê]öXù]N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇX€€ôJ]H
H¬ÇÇBX€€ú›XàH›\\ãò€€ôJ]H
N¬ÇÇBZXãõY\⁄\ê]öXù]HH\ÀõY\⁄\ê]öXù]N¬ÇÇB\ô]\õàXé¬ÇÇ_BÇÇ]“î””ä]H
H¬ÇÇBX€€ú›ú€€àH›\\ãù“î””ä]H
N¬ÇÇBZú€€ãö\“[ú›[òŸY[ù\õX]ôYùYôô\àHùYN¬ÇBZú€€ãõY\⁄\ê]öXù]HH\ÀõY\⁄\ê]öXù]N¬ÇÇB\ô]\õàú€€é¬ÇÇ_BÇüBÇò€\‹»”ùYôô\ê]öXù]H¬ÇÇX€€ú›ùX›‹äùYôô\ã\K][T⁄^ôK[[Y[ù⁄^ôK€›[ù
H¬ÇÇB]\Àö\—”ùYôô\ê]öXù]HHùYN¬ÇÇB]\Àõò[YHH	…Œ¬ÇÇB]\ÀòùYôô\àHùYôô\é¬ÇB]\Àù\HH\N¬ÇB]\Àö][T⁄^ôHH][T⁄^ôN¬ÇB]\Àô[[Y[ù⁄^ôHH[[Y[ù⁄^ôN¬ÇB]\Àò€›[ùH€›[ù¬ÇÇB]\Àùô\ú⁄[€àH¬ÇÇ_BÇÇ\Ÿ]ôYY’\]Jò[YH
H¬ÇÇBZYà
ò[YHOOHùYH
H\Àùô\ú⁄[€à
 Œ¬ÇÇ_BÇÇ\Ÿ]ùYôô\äùYôô\à
H¬ÇÇB]\ÀòùYôô\àHùYôô\é¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]\J\K[[Y[ù⁄^ôH
H¬ÇÇB]\Àù\HH\N¬ÇB]\Àô[[Y[ù⁄^ôHH[[Y[ù⁄^ôN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]][T⁄^ôJ][T⁄^ôH
H¬ÇÇB]\Àö][T⁄^ôHH][T⁄^ôN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]€›[ù
€›[ù
H¬ÇÇB]\Àò€›[ùH€›[ù¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€€ú›€X]ö^H ê◊‘TëW◊ ã»ô]»X]ö^

N¬Çò€\‹»ò^Xÿ\›\à¬ÇÇX€€ú›ùX›‹ä‹öY⁄[ã\ôX›[€ãôX\àHò\àH[ôö[ö]H
H¬ÇÇB]\Àúò^HHô]»ò^J‹öY⁄[ã\ôX›[€à
N¬ÇBKÀ»\ôX›[€à\»\‹›[YY»ôHõ‹õX[^ôY
õ‹àXÿ›\ò]H\›[òŸHÿ[›[][€ú BÇÇB]\ÀõôX\àHôX\é¬ÇB]\Àôò\àHò\é¬ÇB]\Àòÿ[Y\òHHù[¬ÇB]\Àõ^Y\ú»Hô]»^Y\ú 
N¬ÇÇB]\Àú\ò[\»H¬ÇBBSY\⁄àﬂKÇBBS[ôNà»ô\⁄€àHKÇBBS—àﬂKÇBBT⁄[ùŒà»ô\⁄€àHKÇBBT‹ö]NàﬂBÇB_N¬ÇÇ_BÇÇ\Ÿ]
‹öY⁄[ã\ôX›[€à
H¬ÇÇBKÀ»\ôX›[€à\»\‹›[YY»ôHõ‹õX[^ôY
õ‹àXÿ›\ò]H\›[òŸHÿ[›[][€ú BÇÇB]\Àúò^KúŸ]
‹öY⁄[ã\ôX›[€à
N¬ÇÇ_BÇÇ\Ÿ]úõ€Pÿ[Y\òJ€€‹ôÀÿ[Y\òH
H¬ÇÇBZYà
ÿ[Y\òKö\‘\ú‹X›]ôPÿ[Y\òH
H¬ÇÇBB]\Àúò^Kõ‹öY⁄[ãúŸ]úõ€SX]ö^‹⁄][€äÿ[Y\òKõX]ö^€‹õ
N¬ÇBB]\Àúò^Kô\ôX›[€ãúŸ]
€€‹ôÀû€€‹ôÀûKçH
Kù[úõ⁄ôX›
ÿ[Y\òH
Kú›Xä\Àúò^Kõ‹öY⁄[à
Kõõ‹õX[^ôJ
N¬ÇBB]\Àòÿ[Y\òHHÿ[Y\òN¬ÇÇB_H[ŸHYà
ÿ[Y\òKö\”‹ùŸ‹ò\X–ÿ[Y\òH
H¬ÇÇBB]\Àúò^Kõ‹öY⁄[ãúŸ]
€€‹ôÀû€€‹ôÀûK
ÿ[Y\òKõôX\à
»ÿ[Y\òKôò\à
H»
ÿ[Y\òKõôX\àHÿ[Y\òKôò\à
H
Kù[úõ⁄ôX›
ÿ[Y\òH
N»À»Ÿ]‹öY⁄[à[à[ôHŸàÿ[Y\òBÇBB]\Àúò^Kô\ôX›[€ãúŸ]
HH
Kùò[úŸõ‹õQ\ôX›[€äÿ[Y\òKõX]ö^€‹õ
N¬ÇBB]\Àòÿ[Y\òHHÿ[Y\òN¬ÇÇB_H[ŸH¬ÇÇBBX€€ú€€Kô\úõ‹ä	’ëQKîò^Xÿ\›\éà[ú›\‹ùYÿ[Y\òH\Nà	»
»ÿ[Y\òKù\H
N¬ÇÇB_BÇÇ_BÇÇ\Ÿ]úõ€Vê€€ùõ€\ä€€ùõ€\à
H¬ÇÇBW€X]ö^öY[ù]J
Kô^òX›õ›][€ä€€ùõ€\ãõX]ö^€‹õ
N¬ÇÇB]\Àúò^Kõ‹öY⁄[ãúŸ]úõ€SX]ö^‹⁄][€ä€€ùõ€\ãõX]ö^€‹õ
N¬ÇB]\Àúò^Kô\ôX›[€ãúŸ]
HH
Kò\SX]ö^
€X]ö^
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇZ[ù\úŸX›ÿöôX›
ÿöôX›ôX›\ú⁄]ôHHùYK[ù\úŸX›»H◊H
H¬ÇÇBZ[ù\úŸX›
ÿöôX›\À[ù\úŸX›ÀôX›\ú⁄]ôH
N¬ÇÇBZ[ù\úŸX›Àú€‹ù
\ÿ‘€‹ù
N¬ÇÇB\ô]\õà[ù\úŸX›Œ¬ÇÇ_BÇÇZ[ù\úŸX›ÿöôX› ÿöôX›ÀôX›\ú⁄]ôHHùYK[ù\úŸX›»H◊H
H¬ÇÇBYõ‹à
]HHHÿöôX›Àõ[ô›»H»H
 »
H¬ÇÇBBZ[ù\úŸX›
ÿöôX›÷»HK\À[ù\úŸX›ÀôX›\ú⁄]ôH
N¬ÇÇB_BÇÇBZ[ù\úŸX›Àú€‹ù
\ÿ‘€‹ù
N¬ÇÇB\ô]\õà[ù\úŸX›Œ¬ÇÇ_BÇüBÇôù[ò›[€à\ÿ‘€‹ù
Kà
H¬ÇÇ\ô]\õàKô\›[òŸHHãô\›[òŸN¬ÇüBÇôù[ò›[€à[ù\úŸX›
ÿöôX›ò^Xÿ\›\ã[ù\úŸX›ÀôX›\ú⁄]ôH
H¬ÇÇ[]õ‹Yÿ]HHùYN¬ÇÇZYà
ÿöôX›õ^Y\úÀù\›
ò^Xÿ\›\ãõ^Y\ú»
H
H¬ÇÇBX€€ú›ô\›[HÿöôX›úò^Xÿ\›
ò^Xÿ\›\ã[ù\úŸX›»
N¬ÇÇBZYà
ô\›[OOHò[ŸH
Hõ‹Yÿ]HHò[ŸN¬ÇÇ_BÇÇZYà
õ‹Yÿ]HOOHùYH	âàôX›\ú⁄]ôHOOHùYH
H¬ÇÇBX€€ú›⁄[ô[àHÿöôX›ò⁄[ô[é¬ÇÇBYõ‹à
]HHH⁄[ô[ãõ[ô›»H»H
 »
H¬ÇÇBBZ[ù\úŸX›
⁄[ô[ñ»HKò^Xÿ\›\ã[ù\úŸX›ÀùYH
N¬ÇÇB_BÇÇ_BÇüBÇã äÇà
àôYéàŒãÀŸ[ãù⁄Z⁄\YXKõ‹ôÀ›⁄Z⁄K‘‹\öXÿ[ÿ€€‹ô[ò]W‹ﬁ\›[Bà
Çà
àH
H€\à[ô€JH\»YX\›\ôYúõ€HH‹⁄]]ôHKX^\ÀàH‹⁄]]ôHKX^\»\»\Çà
à]H
H^ö[]][[ô€JH\»YX\›\ôYúõ€HH‹⁄]]ôHãX^\ÀÇà
ã¬ò€\‹»‹\öXÿ[¬ÇÇX€€ú›ùX›‹äòY]\»HKHH]HH
H¬ÇÇB]\ÀúòY]\»HòY]\Œ¬ÇB]\ÀúHHN»À»€\à[ô€BÇB]\Àù]HH]N»À»^ö[]][[ô€BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]
òY]\ÀK]H
H¬ÇÇB]\ÀúòY]\»HòY]\Œ¬ÇB]\ÀúHHN¬ÇB]\Àù]HH]N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇX€‹J›\à
H¬ÇÇB]\ÀúòY]\»H›\ãúòY]\Œ¬ÇB]\ÀúHH›\ãúN¬ÇB]\Àù]HH›\ãù]N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇKÀ»ô\›öX›H»ôHô]ŸY[àT»[ôKQT¬Ç[XZŸTÿYôJ
H¬ÇÇBX€€ú›T»HåN¬ÇB]\ÀúHHX]õX^
TÀX]õZ[äX]îHHTÀ\ÀúH
H
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]úõ€UôX›‹å à
H¬ÇÇB\ô]\õà\ÀúŸ]úõ€Pÿ\ù\⁄X[ê€€‹ô ãûãûKãûà
N¬ÇÇ_BÇÇ\Ÿ]úõ€Pÿ\ù\⁄X[ê€€‹ô Kà
H¬ÇÇB]\ÀúòY]\»HX]ú‹\ù

à
»H
àH
»à
àà
N¬ÇÇBZYà
\ÀúòY]\»OOH
H¬ÇÇBB]\Àù]HH¬ÇBB]\ÀúHH¬ÇÇB_H[ŸH¬ÇÇBB]\Àù]HHX]ò][åäà
N¬ÇBB]\ÀúHHX]òX€‹ €[\
H»\ÀúòY]\ÀHKH
H
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇX€€ôJ
H¬ÇÇB\ô]\õàô]»\Àò€€ú›ùX›‹ä
Kò€‹J\»
N¬ÇÇ_BÇüBÇã äÇà
àôYéàŒãÀŸ[ãù⁄Z⁄\YXKõ‹ôÀ›⁄Z⁄K–ﬁ[[ôöXÿ[ÿ€€‹ô[ò]W‹ﬁ\›[Bà
ã¬Çò€\‹»ﬁ[[ôöXÿ[¬ÇÇX€€ú›ùX›‹äòY]\»HK]HHHH
H¬ÇÇB]\ÀúòY]\»HòY]\Œ»À»\›[òŸHúõ€HH‹öY⁄[à»H⁄[ù[àH^à[ôBÇB]\Àù]HH]N»À»€›[ù\ò€ÿ⁄›⁄\ŸH[ô€H[àH^à[ôHYX\›\ôY[àòYX[ú»úõ€HH‹⁄]]ôHãX^\¬ÇB]\ÀûHHN»À»ZY⁄Xõ›ôHH^à[ôBÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]
òY]\À]KH
H¬ÇÇB]\ÀúòY]\»HòY]\Œ¬ÇB]\Àù]HH]N¬ÇB]\ÀûHHN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇX€‹J›\à
H¬ÇÇB]\ÀúòY]\»H›\ãúòY]\Œ¬ÇB]\Àù]HH›\ãù]N¬ÇB]\ÀûHH›\ãûN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]úõ€UôX›‹å à
H¬ÇÇB\ô]\õà\ÀúŸ]úõ€Pÿ\ù\⁄X[ê€€‹ô ãûãûKãûà
N¬ÇÇ_BÇÇ\Ÿ]úõ€Pÿ\ù\⁄X[ê€€‹ô Kà
H¬ÇÇB]\ÀúòY]\»HX]ú‹\ù

à
»à
àà
N¬ÇB]\Àù]HHX]ò][åäà
N¬ÇB]\ÀûHHN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇX€€ôJ
H¬ÇÇB\ô]\õàô]»\Àò€€ú›ùX›‹ä
Kò€‹J\»
N¬ÇÇ_BÇüBÇò€\‹»X]ö^à¬ÇÇX€€ú›ùX›‹äåLKåLãååKååà
H¬ÇÇBSX]ö^ãúõ››\Kö\”X]ö^àHùYN¬ÇÇB]\Àô[[Y[ù»H¬ÇBBLKÇBBLKÇBWN¬ÇÇBZYà
åLHOOH[ôYö[ôY
H¬ÇÇBB]\ÀúŸ]
åLKåLãååKååà
N¬ÇÇB_BÇÇ_BÇÇZY[ù]J
H¬ÇÇB]\ÀúŸ]
ÇBBLKÇBBLKÇBJN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇYúõ€P\úò^J\úò^KŸôúŸ]H
H¬ÇÇBYõ‹à
]HH»H»H
 »
H¬ÇÇBB]\Àô[[Y[ù÷»HHH\úò^V»H
»ŸôúŸ]N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]
åLKåLãååKååà
H¬ÇÇBX€€ú›HH\Àô[[Y[ùŒ¬ÇÇB]V»HHåLN»V»àHHåLé¬ÇB]V»HHHååN»V»»HHååé¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇüBÇò€€ú››ôX›‹âH ê◊‘TëW◊ ã»ô]»ôX›‹åä
N¬Çò€\‹»õﬁà¬ÇÇX€€ú›ùX›‹äZ[àHô]»ôX›‹åä
»[ôö[ö]K
»[ôö[ö]H
KX^Hô]»ôX›‹åäH[ôö[ö]KH[ôö[ö]H
H
H¬ÇÇB]\Àö\–õﬁàHùYN¬ÇÇB]\ÀõZ[àHZ[é¬ÇB]\ÀõX^HX^¬ÇÇ_BÇÇ\Ÿ]
Z[ãX^
H¬ÇÇB]\ÀõZ[ãò€‹JZ[à
N¬ÇB]\ÀõX^ò€‹JX^
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]úõ€T⁄[ù ⁄[ù»
H¬ÇÇB]\ÀõXZŸQ[\J
N¬ÇÇBYõ‹à
]HH[H⁄[ùÀõ[ô›»H[»H
 »
H¬ÇÇBB]\Àô^[ôûT⁄[ù
⁄[ù÷»HH
N¬ÇÇB_BÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\Ÿ]úõ€PŸ[ù\ê[ô⁄^ôJŸ[ù\ã⁄^ôH
H¬ÇÇBX€€ú›[î⁄^ôHH›ôX›‹âò€‹J⁄^ôH
Kõ][\Tÿÿ[\äçH
N¬ÇB]\ÀõZ[ãò€‹JŸ[ù\à
Kú›Xä[î⁄^ôH
N¬ÇB]\ÀõX^ò€‹JŸ[ù\à
KòY
[î⁄^ôH
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇX€€ôJ
H¬ÇÇB\ô]\õàô]»\Àò€€ú›ùX›‹ä
Kò€‹J\»
N¬ÇÇ_BÇÇX€‹Jõﬁ
H¬ÇÇB]\ÀõZ[ãò€‹JõﬁõZ[à
N¬ÇB]\ÀõX^ò€‹JõﬁõX^
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ[XZŸQ[\J
H¬ÇÇB]\ÀõZ[ãûH\ÀõZ[ãûHH
»[ôö[ö]N¬ÇB]\ÀõX^ûH\ÀõX^ûHHH[ôö[ö]N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇZ\—[\J
H¬ÇÇBKÀ»\»\»H[‹ôHõÿù\›⁄X⁄»õ‹à[\H[à
õ€[YHH
HôXÿ]\ŸHõ€[YHÿ[àŸ]‹⁄]]ôH⁄]€»ôYÿ]]ôH^\¬ÇÇB\ô]\õà
\ÀõX^û\ÀõZ[ãû
H
\ÀõX^ûH\ÀõZ[ãûH
N¬ÇÇ_BÇÇYŸ]Ÿ[ù\ä\ôŸ]
H¬ÇÇB\ô]\õà\Àö\—[\J
H»\ôŸ]úŸ]

Hà\ôŸ]òYôX›‹ú \ÀõZ[ã\ÀõX^
Kõ][\Tÿÿ[\äçH
N¬ÇÇ_BÇÇYŸ]⁄^ôJ\ôŸ]
H¬ÇÇB\ô]\õà\Àö\—[\J
H»\ôŸ]úŸ]

Hà\ôŸ]ú›XïôX›‹ú \ÀõX^\ÀõZ[à
N¬ÇÇ_BÇÇY^[ôûT⁄[ù
⁄[ù
H¬ÇÇB]\ÀõZ[ãõZ[ä⁄[ù
N¬ÇB]\ÀõX^õX^
⁄[ù
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇY^[ôûUôX›‹äôX›‹à
H¬ÇÇB]\ÀõZ[ãú›XäôX›‹à
N¬ÇB]\ÀõX^òY
ôX›‹à
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇY^[ôûTÿÿ[\äÿÿ[\à
H¬ÇÇB]\ÀõZ[ãòYÿÿ[\äHÿÿ[\à
N¬ÇB]\ÀõX^òYÿÿ[\äÿÿ[\à
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇX€€ùZ[ú‘⁄[ù
⁄[ù
H¬ÇÇB\ô]\õà⁄[ùûèH\ÀõZ[ãû	âà⁄[ùûH\ÀõX^û	âÇÇBB\⁄[ùûHèH\ÀõZ[ãûH	âà⁄[ùûHH\ÀõX^ûN¬ÇÇ_BÇÇX€€ùZ[ú–õﬁ
õﬁ
H¬ÇÇB\ô]\õà\ÀõZ[ãûHõﬁõZ[ãû	âàõﬁõX^ûH\ÀõX^û	âÇÇBB]\ÀõZ[ãûHHõﬁõZ[ãûH	âàõﬁõX^ûHH\ÀõX^ûN¬ÇÇ_BÇÇYŸ]\ò[Y]\ä⁄[ù\ôŸ]
H¬ÇÇBKÀ»\»ÿ[à›[ùX[H]ôHH]öYHûHô\õ»YàHõﬁÇBKÀ»\»H⁄^ôH[Y[ú⁄[€àŸàÇÇÇB\ô]\õà\ôŸ]úŸ]
ÇBBJ⁄[ùûH\ÀõZ[ãû
H»
\ÀõX^ûH\ÀõZ[ãû
KÇBBJ⁄[ùûHH\ÀõZ[ãûH
H»
\ÀõX^ûHH\ÀõZ[ãûH
BÇBJN¬ÇÇ_BÇÇZ[ù\úŸX›–õﬁ
õﬁ
H¬ÇÇBKÀ»\⁄[ô»‹][ô»[ô\»»ù[H›][ù\úŸX›[€ú¬ÇÇB\ô]\õàõﬁõX^ûèH\ÀõZ[ãû	âàõﬁõZ[ãûH\ÀõX^û	âÇÇBBXõﬁõX^ûHèH\ÀõZ[ãûH	âàõﬁõZ[ãûHH\ÀõX^ûN¬ÇÇ_BÇÇX€[\⁄[ù
⁄[ù\ôŸ]
H¬ÇÇB\ô]\õà\ôŸ]ò€‹J⁄[ù
Kò€[\
\ÀõZ[ã\ÀõX^
N¬ÇÇ_BÇÇY\›[òŸU‘⁄[ù
⁄[ù
H¬ÇÇB\ô]\õà\Àò€[\⁄[ù
⁄[ù›ôX›‹â
Kô\›[òŸU ⁄[ù
N¬ÇÇ_BÇÇZ[ù\úŸX›
õﬁ
H¬ÇÇB]\ÀõZ[ãõX^
õﬁõZ[à
N¬ÇB]\ÀõX^õZ[äõﬁõX^
N¬ÇÇBZYà
\Àö\—[\J
H
H\ÀõXZŸQ[\J
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ][ö[€äõﬁ
H¬ÇÇB]\ÀõZ[ãõZ[äõﬁõZ[à
N¬ÇB]\ÀõX^õX^
õﬁõX^
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ]ò[ú€]JŸôúŸ]
H¬ÇÇB]\ÀõZ[ãòY
ŸôúŸ]
N¬ÇB]\ÀõX^òY
ŸôúŸ]
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇY\]X[ õﬁ
H¬ÇÇB\ô]\õàõﬁõZ[ãô\]X[ \ÀõZ[à
H	âàõﬁõX^ô\]X[ \ÀõX^
N¬ÇÇ_BÇüBÇò€€ú›‹›\ùH ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬ò€€ú›‹›\ù[ôH ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬Çò€\‹»[ôL»¬ÇÇX€€ú›ùX›‹ä›\ùHô]»ôX›‹å 
K[ôHô]»ôX›‹å 
H
H¬ÇÇB]\Àú›\ùH›\ù¬ÇB]\Àô[ôH[ô¬ÇÇ_BÇÇ\Ÿ]
›\ù[ô
H¬ÇÇB]\Àú›\ùò€‹J›\ù
N¬ÇB]\Àô[ôò€‹J[ô
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇX€‹J[ôH
H¬ÇÇB]\Àú›\ùò€‹J[ôKú›\ù
N¬ÇB]\Àô[ôò€‹J[ôKô[ô
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇYŸ]Ÿ[ù\ä\ôŸ]
H¬ÇÇB\ô]\õà\ôŸ]òYôX›‹ú \Àú›\ù\Àô[ô
Kõ][\Tÿÿ[\äçH
N¬ÇÇ_BÇÇY[J\ôŸ]
H¬ÇÇB\ô]\õà\ôŸ]ú›XïôX›‹ú \Àô[ô\Àú›\ù
N¬ÇÇ_BÇÇY\›[òŸT‹J
H¬ÇÇB\ô]\õà\Àú›\ùô\›[òŸU‘‹]X\ôY
\Àô[ô
N¬ÇÇ_BÇÇY\›[òŸJ
H¬ÇÇB\ô]\õà\Àú›\ùô\›[òŸU \Àô[ô
N¬ÇÇ_BÇÇX]
\ôŸ]
H¬ÇÇB\ô]\õà\Àô[J\ôŸ]
Kõ][\Tÿÿ[\ä
KòY
\Àú›\ù
N¬ÇÇ_BÇÇX€‹Ÿ\›⁄[ù‘⁄[ù\ò[Y]\ä⁄[ù€[\”[ôH
H¬ÇÇBW‹›\ùú›XïôX›‹ú ⁄[ù\Àú›\ù
N¬ÇBW‹›\ù[ôú›XïôX›‹ú \Àô[ô\Àú›\ù
N¬ÇÇBX€€ú››\ù[ôàH‹›\ù[ôô›
‹›\ù[ô
N¬ÇBX€€ú››\ù[ô‹›\ùH‹›\ù[ôô›
‹›\ù
N¬ÇÇB[]H›\ù[ô‹›\ù»›\ù[ôé¬ÇÇBZYà
€[\”[ôH
H¬ÇÇBB]H€[\
H
N¬ÇÇB_BÇÇB\ô]\õà¬ÇÇ_BÇÇX€‹Ÿ\›⁄[ù‘⁄[ù
⁄[ù€[\”[ôK\ôŸ]
H¬ÇÇBX€€ú›H\Àò€‹Ÿ\›⁄[ù‘⁄[ù\ò[Y]\ä⁄[ù€[\”[ôH
N¬ÇÇB\ô]\õà\Àô[J\ôŸ]
Kõ][\Tÿÿ[\ä
KòY
\Àú›\ù
N¬ÇÇ_BÇÇX\SX]ö^
X]ö^
H¬ÇÇB]\Àú›\ùò\SX]ö^
X]ö^
N¬ÇB]\Àô[ôò\SX]ö^
X]ö^
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇY\]X[ [ôH
H¬ÇÇB\ô]\õà[ôKú›\ùô\]X[ \Àú›\ù
H	âà[ôKô[ôô\]X[ \Àô[ô
N¬ÇÇ_BÇÇX€€ôJ
H¬ÇÇB\ô]\õàô]»\Àò€€ú›ùX›‹ä
Kò€‹J\»
N¬ÇÇ_BÇüBÇò€€ú››ôX›‹â»H ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬Çò€\‹»‹›Y⁄[\à^[ô»ÿöôX›—¬ÇÇX€€ú›ùX›‹äY⁄€€‹à
H¬ÇÇB\›\\ä
N¬ÇÇB]\ÀõY⁄HY⁄¬ÇÇB]\ÀõX]ö^]]’\]HHò[ŸN¬ÇÇB]\Àò€€‹àH€€‹é¬ÇÇB]\Àù\HH	‘‹›Y⁄[\âŒ¬ÇÇBX€€ú›Ÿ[€Y]ûHHô]»ùYôô\ëŸ[€Y]ûJ
N¬ÇÇBX€€ú›‹⁄][€ú»H¬ÇBBLLKÇBBLLKKÇBBLKHKKÇBBLLKKÇBBLLHKBÇBWN¬ÇÇBYõ‹à
]HHàHKHÃé»H»H
 Àà
 »
H¬ÇÇBBX€€ú›HH
H»
H
àX]îH
àé¬ÇBBX€€ú›àH
à»
H
àX]îH
àé¬ÇÇBB\‹⁄][€úÀú\⁄
ÇBBBSX]ò€‹ H
KX]ú⁄[äH
KKÇBBBSX]ò€‹ à
KX]ú⁄[äà
KBÇBBJN¬ÇÇB_BÇÇBYŸ[€Y]ûKúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]J‹⁄][€úÀ»
H
N¬ÇÇBX€€ú›X]\öX[Hô]»[ôPò\⁄X”X]\öX[
»õŸŒàò[ŸK€ôSX\Yàò[ŸHH
N¬ÇÇB]\Àò€€ôHHô]»[ôTŸY€Y[ù Ÿ[€Y]ûKX]\öX[
N¬ÇB]\ÀòY
\Àò€€ôH
N¬ÇÇB]\Àù\]J
N¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇB]\Àò€€ôKôŸ[€Y]ûKô\‹‹ŸJ
N¬ÇB]\Àò€€ôKõX]\öX[ô\‹‹ŸJ
N¬ÇÇ_BÇÇ]\]J
H¬ÇÇB]\ÀõY⁄ù\]U€‹õX]ö^
ùYKò[ŸH
N¬ÇB]\ÀõY⁄ù\ôŸ]ù\]U€‹õX]ö^
ùYKò[ŸH
N¬ÇÇBKÀ»\]HHÿÿ[X]ö^ò\ŸY€àH\ô[ù[ôY⁄\ôŸ]ò[úŸõ‹õ\¬ÇBZYà
\Àú\ô[ù
H¬ÇÇBB]\Àú\ô[ùù\]U€‹õX]ö^
ùYH
N¬ÇÇBB]\ÀõX]ö^ÇBBBKò€‹J\Àú\ô[ùõX]ö^€‹õ
BÇBBBKö[ùô\ù

BÇBBBKõ][\J\ÀõY⁄õX]ö^€‹õ
N¬ÇÇB_H[ŸH¬ÇÇBB]\ÀõX]ö^ò€‹J\ÀõY⁄õX]ö^€‹õ
N¬ÇÇB_BÇÇB]\ÀõX]ö^€‹õò€‹J\ÀõY⁄õX]ö^€‹õ
N¬ÇÇBX€€ú›€€ôS[ô›H\ÀõY⁄ô\›[òŸH»\ÀõY⁄ô\›[òŸHàL¬ÇBX€€ú›€€ôU⁄YH€€ôS[ô›
àX]ù[ä\ÀõY⁄ò[ô€H
N¬ÇÇB]\Àò€€ôKúÿÿ[KúŸ]
€€ôU⁄Y€€ôU⁄Y€€ôS[ô›
N¬ÇÇBW›ôX›‹âÀúŸ]úõ€SX]ö^‹⁄][€ä\ÀõY⁄ù\ôŸ]õX]ö^€‹õ
N¬ÇÇB]\Àò€€ôKõ€⁄–]
›ôX›‹â»
N¬ÇÇBZYà
\Àò€€‹àOOH[ôYö[ôY
H¬ÇÇBB]\Àò€€ôKõX]\öX[ò€€‹ãúŸ]
\Àò€€‹à
N¬ÇÇB_H[ŸH¬ÇÇBB]\Àò€€ôKõX]\öX[ò€€‹ãò€‹J\ÀõY⁄ò€€‹à
N¬ÇÇB_BÇÇ_BÇüBÇò€€ú››ôX›‹âàH ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬ò€€ú›ÿõ€ôSX]ö^H ê◊‘TëW◊ ã»ô]»X]ö^

N¬ò€€ú›€X]ö^€‹õ[ùàH ê◊‘TëW◊ ã»ô]»X]ö^

N¬ÇÇò€\‹»⁄Ÿ[]€í[\à^[ô»[ôTŸY€Y[ù»¬ÇÇX€€ú›ùX›‹äÿöôX›
H¬ÇÇBX€€ú›õ€ô\»HŸ]õ€ôS\›
ÿöôX›
N¬ÇÇBX€€ú›Ÿ[€Y]ûHHô]»ùYôô\ëŸ[€Y]ûJ
N¬ÇÇBX€€ú›ô\ùXŸ\»H◊N¬ÇBX€€ú›€€‹ú»H◊N¬ÇÇBX€€ú›€€‹åHHô]»€€‹äH
N¬ÇBX€€ú›€€‹åàHô]»€€‹äK
N¬ÇÇBYõ‹à
]HH»Hõ€ô\Àõ[ô›»H
 »
H¬ÇÇBBX€€ú›õ€ôHHõ€ô\÷»HN¬ÇÇBBZYà
õ€ôKú\ô[ù	âàõ€ôKú\ô[ùö\–õ€ôH
H¬ÇÇBBB]ô\ùXŸ\Àú\⁄

N¬ÇBBB]ô\ùXŸ\Àú\⁄

N¬ÇBBBX€€‹úÀú\⁄
€€‹åKúã€€‹åKôÀ€€‹åKòà
N¬ÇBBBX€€‹úÀú\⁄
€€‹åãúã€€‹åãôÀ€€‹åãòà
N¬ÇÇBB_BÇÇB_BÇÇBYŸ[€Y]ûKúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]Jô\ùXŸ\À»
H
N¬ÇBYŸ[€Y]ûKúŸ]]öXù]J	ÿ€€‹âÀô]»õÿ]ÃêùYôô\ê]öXù]J€€‹úÀ»
H
N¬ÇÇBX€€ú›X]\öX[Hô]»[ôPò\⁄X”X]\öX[
»ô\ù^€€‹úŒàùYK\\›àò[ŸK\‹ö]Nàò[ŸK€ôSX\Yàò[ŸKò[ú‹\ô[ùàùYHH
N¬ÇÇB\›\\äŸ[€Y]ûKX]\öX[
N¬ÇÇB]\Àö\‘⁄Ÿ[]€í[\àHùYN¬ÇÇB]\Àù\HH	‘⁄Ÿ[]€í[\âŒ¬ÇÇB]\Àúõ€›HÿöôX›¬ÇB]\Àòõ€ô\»Hõ€ô\Œ¬ÇÇB]\ÀõX]ö^HÿöôX›õX]ö^€‹õ¬ÇB]\ÀõX]ö^]]’\]HHò[ŸN¬ÇÇ_BÇÇ]\]SX]ö^€‹õ
õ‹òŸH
H¬ÇÇBX€€ú›õ€ô\»H\Àòõ€ô\Œ¬ÇÇBX€€ú›Ÿ[€Y]ûHH\ÀôŸ[€Y]ûN¬ÇBX€€ú›‹⁄][€àHŸ[€Y]ûKôŸ]]öXù]J	‹‹⁄][€â»
N¬ÇÇBW€X]ö^€‹õ[ùãò€‹J\Àúõ€›õX]ö^€‹õ
Kö[ùô\ù

N¬ÇÇBYõ‹à
]HHàH»Hõ€ô\Àõ[ô›»H
 »
H¬ÇÇBBX€€ú›õ€ôHHõ€ô\÷»HN¬ÇÇBBZYà
õ€ôKú\ô[ù	âàõ€ôKú\ô[ùö\–õ€ôH
H¬ÇÇBBBWÿõ€ôSX]ö^õ][\SX]öXŸ\ €X]ö^€‹õ[ùãõ€ôKõX]ö^€‹õ
N¬ÇBBBW›ôX›‹âãúŸ]úõ€SX]ö^‹⁄][€äÿõ€ôSX]ö^
N¬ÇBBB\‹⁄][€ãúŸ]Väã›ôX›‹âãû›ôX›‹âãûK›ôX›‹âãûà
N¬ÇÇBBBWÿõ€ôSX]ö^õ][\SX]öXŸ\ €X]ö^€‹õ[ùãõ€ôKú\ô[ùõX]ö^€‹õ
N¬ÇBBBW›ôX›‹âãúŸ]úõ€SX]ö^‹⁄][€äÿõ€ôSX]ö^
N¬ÇBBB\‹⁄][€ãúŸ]Väà
»K›ôX›‹âãû›ôX›‹âãûK›ôX›‹âãûà
N¬ÇÇBBBZà
œHé¬ÇÇBB_BÇÇB_BÇÇBYŸ[€Y]ûKôŸ]]öXù]J	‹‹⁄][€â»
KõôYY’\]HHùYN¬ÇÇB\›\\ãù\]SX]ö^€‹õ
õ‹òŸH
N¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇB]\ÀôŸ[€Y]ûKô\‹‹ŸJ
N¬ÇB]\ÀõX]\öX[ô\‹‹ŸJ
N¬ÇÇ_BÇüBÇÇôù[ò›[€àŸ]õ€ôS\›
ÿöôX›
H¬ÇÇX€€ú›õ€ôS\›H◊N¬ÇÇZYà
ÿöôX›ö\–õ€ôHOOHùYH
H¬ÇÇBXõ€ôS\›ú\⁄
ÿöôX›
N¬ÇÇ_BÇÇYõ‹à
]HH»HÿöôX›ò⁄[ô[ãõ[ô›»H
 »
H¬ÇÇBXõ€ôS\›ú\⁄ò\Jõ€ôS\›Ÿ]õ€ôS\›
ÿöôX›ò⁄[ô[ñ»HH
H
N¬ÇÇ_BÇÇ\ô]\õàõ€ôS\›¬ÇüBÇò€\‹»⁄[ùY⁄[\à^[ô»Y\⁄¬ÇÇX€€ú›ùX›‹äY⁄‹\ôT⁄^ôK€€‹à
H¬ÇÇBX€€ú›Ÿ[€Y]ûHHô]»‹\ôQŸ[€Y]ûJ‹\ôT⁄^ôKà
N¬ÇBX€€ú›X]\öX[Hô]»Y\⁄ò\⁄X”X]\öX[
»⁄\ôYúò[YNàùYKõŸŒàò[ŸK€ôSX\Yàò[ŸHH
N¬ÇÇB\›\\äŸ[€Y]ûKX]\öX[
N¬ÇÇB]\ÀõY⁄HY⁄¬ÇÇB]\Àò€€‹àH€€‹é¬ÇÇB]\Àù\HH	‘⁄[ùY⁄[\âŒ¬ÇÇB]\ÀõX]ö^H\ÀõY⁄õX]ö^€‹õ¬ÇB]\ÀõX]ö^]]’\]HHò[ŸN¬ÇÇB]\Àù\]J
N¬ÇÇÇBK ÇÇKÀ»—Œà[]H\»€€[Y[ù¬ÇX€€ú›\›[òŸQŸ[€Y]ûHHô]»ëQKíX€‹ÿZYõ€ëŸ[€Y]ûJKà
N¬ÇX€€ú›\›[òŸSX]\öX[Hô]»ëQKìY\⁄ò\⁄X”X]\öX[
»€€‹éà^€€‹ãõŸŒàò[ŸK⁄\ôYúò[YNàùYK‹X⁄]NàåKò[ú‹\ô[ùàùYHH
N¬ÇÇ]\ÀõY⁄‹\ôHHô]»ëQKìY\⁄
ù[ëŸ[€Y]ûKù[ìX]\öX[
N¬Ç]\ÀõY⁄\›[òŸHHô]»ëQKìY\⁄
\›[òŸQŸ[€Y]ûK\›[òŸSX]\öX[
N¬ÇÇX€€ú›HY⁄ô\›[òŸN¬ÇÇZYà
OOHå
H¬ÇÇB]\ÀõY⁄\›[òŸKùö\⁄XõHHò[ŸN¬ÇÇ_H[ŸH¬ÇÇB]\ÀõY⁄\›[òŸKúÿÿ[KúŸ]

N¬ÇÇ_BÇÇ]\ÀòY
\ÀõY⁄\›[òŸH
N¬ÇJã¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇB]\ÀôŸ[€Y]ûKô\‹‹ŸJ
N¬ÇB]\ÀõX]\öX[ô\‹‹ŸJ
N¬ÇÇ_BÇÇ]\]J
H¬ÇÇB]\ÀõY⁄ù\]U€‹õX]ö^
ùYKò[ŸH
N¬ÇÇBZYà
\Àò€€‹àOOH[ôYö[ôY
H¬ÇÇBB]\ÀõX]\öX[ò€€‹ãúŸ]
\Àò€€‹à
N¬ÇÇB_H[ŸH¬ÇÇBB]\ÀõX]\öX[ò€€‹ãò€‹J\ÀõY⁄ò€€‹à
N¬ÇÇB_BÇÇBK ÇÇBX€€ú›H\ÀõY⁄ô\›[òŸN¬ÇÇBZYà
OOHå
H¬ÇÇBB]\ÀõY⁄\›[òŸKùö\⁄XõHHò[ŸN¬ÇÇB_H[ŸH¬ÇÇBB]\ÀõY⁄\›[òŸKùö\⁄XõHHùYN¬ÇBB]\ÀõY⁄\›[òŸKúÿÿ[KúŸ]

N¬ÇÇB_BÇBJã¬ÇÇ_BÇüBÇò€€ú››ôX›‹âHH ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬ò€€ú›ÿ€€‹åHH ê◊‘TëW◊ ã»ô]»€€‹ä
N¬ò€€ú›ÿ€€‹åàH ê◊‘TëW◊ ã»ô]»€€‹ä
N¬Çò€\‹»[Z\‹\ôSY⁄[\à^[ô»ÿöôX›—¬ÇÇX€€ú›ùX›‹äY⁄⁄^ôK€€‹à
H¬ÇÇB\›\\ä
N¬ÇÇB]\ÀõY⁄HY⁄¬ÇÇB]\ÀõX]ö^HY⁄õX]ö^€‹õ¬ÇB]\ÀõX]ö^]]’\]HHò[ŸN¬ÇÇB]\Àò€€‹àH€€‹é¬ÇÇB]\Àù\HH	“[Z\‹\ôSY⁄[\âŒ¬ÇÇBX€€ú›Ÿ[€Y]ûHHô]»ÿ›ZYõ€ëŸ[€Y]ûJ⁄^ôH
N¬ÇBYŸ[€Y]ûKúõ›]VJX]îH
àçH
N¬ÇÇB]\ÀõX]\öX[Hô]»Y\⁄ò\⁄X”X]\öX[
»⁄\ôYúò[YNàùYKõŸŒàò[ŸK€ôSX\Yàò[ŸHH
N¬ÇBZYà
\Àò€€‹àOOH[ôYö[ôY
H\ÀõX]\öX[ùô\ù^€€‹ú»HùYN¬ÇÇBX€€ú›‹⁄][€àHŸ[€Y]ûKôŸ]]öXù]J	‹‹⁄][€â»
N¬ÇBX€€ú›€€‹ú»Hô]»õÿ]Ãê\úò^J‹⁄][€ãò€›[ù
à»
N¬ÇÇBYŸ[€Y]ûKúŸ]]öXù]J	ÿ€€‹âÀô]»ùYôô\ê]öXù]J€€‹úÀ»
H
N¬ÇÇB]\ÀòY
ô]»Y\⁄
Ÿ[€Y]ûK\ÀõX]\öX[
H
N¬ÇÇB]\Àù\]J
N¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇB]\Àò⁄[ô[ñ»KôŸ[€Y]ûKô\‹‹ŸJ
N¬ÇB]\Àò⁄[ô[ñ»KõX]\öX[ô\‹‹ŸJ
N¬ÇÇ_BÇÇ]\]J
H¬ÇÇBX€€ú›Y\⁄H\Àò⁄[ô[ñ»N¬ÇÇBZYà
\Àò€€‹àOOH[ôYö[ôY
H¬ÇÇBB]\ÀõX]\öX[ò€€‹ãúŸ]
\Àò€€‹à
N¬ÇÇB_H[ŸH¬ÇÇBBX€€ú›€€‹ú»HY\⁄ôŸ[€Y]ûKôŸ]]öXù]J	ÿ€€‹â»
N¬ÇÇBBWÿ€€‹åKò€‹J\ÀõY⁄ò€€‹à
N¬ÇBBWÿ€€‹åãò€‹J\ÀõY⁄ô‹õ›[ô€€‹à
N¬ÇÇBBYõ‹à
]HHH€€‹úÀò€›[ù»H»H
 »
H¬ÇÇBBBX€€ú›€€‹àH
H
»à
H
H»ÿ€€‹åHàÿ€€‹åé¬ÇÇBBBX€€‹úÀúŸ]VäK€€‹ãúã€€‹ãôÀ€€‹ãòà
N¬ÇÇBB_BÇÇBBX€€‹úÀõôYY’\]HHùYN¬ÇÇB_BÇÇB]\ÀõY⁄ù\]U€‹õX]ö^
ùYKò[ŸH
N¬ÇÇB[Y\⁄õ€⁄–]
›ôX›‹âKúŸ]úõ€SX]ö^‹⁄][€ä\ÀõY⁄õX]ö^€‹õ
KõôYÿ]J
H
N¬ÇÇ_BÇüBÇò€\‹»‹öY[\à^[ô»[ôTŸY€Y[ù»¬ÇÇX€€ú›ùX›‹ä⁄^ôHHL]ö\⁄[€ú»HL€€‹åHH€€‹åàH
H¬ÇÇBX€€‹åHHô]»€€‹ä€€‹åH
N¬ÇBX€€‹åàHô]»€€‹ä€€‹åà
N¬ÇÇBX€€ú›Ÿ[ù\àH]ö\⁄[€ú»»é¬ÇBX€€ú››\H⁄^ôH»]ö\⁄[€úŒ¬ÇBX€€ú›[î⁄^ôHH⁄^ôH»é¬ÇÇBX€€ú›ô\ùXŸ\»H◊K€€‹ú»H◊N¬ÇÇBYõ‹à
]HHàH»HH[î⁄^ôN»HH]ö\⁄[€úŒ»H
 À»
œH›\
H¬ÇÇBB]ô\ùXŸ\Àú\⁄
H[î⁄^ôKÀ[î⁄^ôK»
N¬ÇBB]ô\ùXŸ\Àú\⁄
ÀH[î⁄^ôKÀ[î⁄^ôH
N¬ÇÇBBX€€ú›€€‹àHHOOHŸ[ù\à»€€‹åHà€€‹åé¬ÇÇBBX€€‹ãù–\úò^J€€‹úÀà
N»à
œHŒ¬ÇBBX€€‹ãù–\úò^J€€‹úÀà
N»à
œHŒ¬ÇBBX€€‹ãù–\úò^J€€‹úÀà
N»à
œHŒ¬ÇBBX€€‹ãù–\úò^J€€‹úÀà
N»à
œHŒ¬ÇÇB_BÇÇBX€€ú›Ÿ[€Y]ûHHô]»ùYôô\ëŸ[€Y]ûJ
N¬ÇBYŸ[€Y]ûKúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]Jô\ùXŸ\À»
H
N¬ÇBYŸ[€Y]ûKúŸ]]öXù]J	ÿ€€‹âÀô]»õÿ]ÃêùYôô\ê]öXù]J€€‹úÀ»
H
N¬ÇÇBX€€ú›X]\öX[Hô]»[ôPò\⁄X”X]\öX[
»ô\ù^€€‹úŒàùYK€ôSX\Yàò[ŸHH
N¬ÇÇB\›\\äŸ[€Y]ûKX]\öX[
N¬ÇÇB]\Àù\HH	—‹öY[\âŒ¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇB]\ÀôŸ[€Y]ûKô\‹‹ŸJ
N¬ÇB]\ÀõX]\öX[ô\‹‹ŸJ
N¬ÇÇ_BÇüBÇò€\‹»€\ë‹öY[\à^[ô»[ôTŸY€Y[ù»¬ÇÇX€€ú›ùX›‹äòY]\»HLŸX›‹ú»HMãö[ô‹»H]ö\⁄[€ú»Hç€€‹åHH€€‹åàH
H¬ÇÇBX€€‹åHHô]»€€‹ä€€‹åH
N¬ÇBX€€‹åàHô]»€€‹ä€€‹åà
N¬ÇÇBX€€ú›ô\ùXŸ\»H◊N¬ÇBX€€ú›€€‹ú»H◊N¬ÇÇBKÀ»‹ôX]HHŸX›‹ú¬ÇÇBZYà
ŸX›‹ú»àH
H¬ÇÇBBYõ‹à
]HH»HŸX›‹úŒ»H
 »
H¬ÇÇBBBX€€ú›àH
H»ŸX›‹ú»
H
à
X]îH
àà
N¬ÇÇBBBX€€ú›HX]ú⁄[äà
H
àòY]\Œ¬ÇBBBX€€ú›àHX]ò€‹ à
H
àòY]\Œ¬ÇÇBBB]ô\ùXŸ\Àú\⁄

N¬ÇBBB]ô\ùXŸ\Àú\⁄
à
N¬ÇÇBBBX€€ú›€€‹àH
H	àH
H»€€‹åHà€€‹åé¬ÇÇBBBX€€‹úÀú\⁄
€€‹ãúã€€‹ãôÀ€€‹ãòà
N¬ÇBBBX€€‹úÀú\⁄
€€‹ãúã€€‹ãôÀ€€‹ãòà
N¬ÇÇBB_BÇÇB_BÇÇBKÀ»‹ôX]HHö[ô‹¬ÇÇBYõ‹à
]HH»Hö[ô‹Œ»H
 »
H¬ÇÇBBX€€ú›€€‹àH
H	àH
H»€€‹åHà€€‹åé¬ÇÇBBX€€ú›àHòY]\»H
òY]\»»ö[ô‹»
àH
N¬ÇÇBBYõ‹à
]àH»à]ö\⁄[€úŒ»à
 »
H¬ÇÇBBBKÀ»ö\ú›ô\ù^ÇÇBBB[]àH
à»]ö\⁄[€ú»
H
à
X]îH
àà
N¬ÇÇBBB[]HX]ú⁄[äà
H
àé¬ÇBBB[]àHX]ò€‹ à
H
àé¬ÇÇBBB]ô\ùXŸ\Àú\⁄
à
N¬ÇBBBX€€‹úÀú\⁄
€€‹ãúã€€‹ãôÀ€€‹ãòà
N¬ÇÇBBBKÀ»ŸX€€ôô\ù^ÇÇBBB]àH

à
»H
H»]ö\⁄[€ú»
H
à
X]îH
àà
N¬ÇÇBBB^HX]ú⁄[äà
H
àé¬ÇBBB^àHX]ò€‹ à
H
àé¬ÇÇBBB]ô\ùXŸ\Àú\⁄
à
N¬ÇBBBX€€‹úÀú\⁄
€€‹ãúã€€‹ãôÀ€€‹ãòà
N¬ÇÇBB_BÇÇB_BÇÇBX€€ú›Ÿ[€Y]ûHHô]»ùYôô\ëŸ[€Y]ûJ
N¬ÇBYŸ[€Y]ûKúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]Jô\ùXŸ\À»
H
N¬ÇBYŸ[€Y]ûKúŸ]]öXù]J	ÿ€€‹âÀô]»õÿ]ÃêùYôô\ê]öXù]J€€‹úÀ»
H
N¬ÇÇBX€€ú›X]\öX[Hô]»[ôPò\⁄X”X]\öX[
»ô\ù^€€‹úŒàùYK€ôSX\Yàò[ŸHH
N¬ÇÇB\›\\äŸ[€Y]ûKX]\öX[
N¬ÇÇB]\Àù\HH	‘€\ë‹öY[\âŒ¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇB]\ÀôŸ[€Y]ûKô\‹‹ŸJ
N¬ÇB]\ÀõX]\öX[ô\‹‹ŸJ
N¬ÇÇ_BÇüBÇò€€ú››åHH ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬ò€€ú››åàH ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬ò€€ú››å»H ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬Çò€\‹»\ôX›[€ò[Y⁄[\à^[ô»ÿöôX›—¬ÇÇX€€ú›ùX›‹äY⁄⁄^ôK€€‹à
H¬ÇÇB\›\\ä
N¬ÇÇB]\ÀõY⁄HY⁄¬ÇÇB]\ÀõX]ö^HY⁄õX]ö^€‹õ¬ÇB]\ÀõX]ö^]]’\]HHò[ŸN¬ÇÇB]\Àò€€‹àH€€‹é¬ÇÇB]\Àù\HH	—\ôX›[€ò[Y⁄[\âŒ¬ÇÇBZYà
⁄^ôHOOH[ôYö[ôY
H⁄^ôHHN¬ÇÇB[]Ÿ[€Y]ûHHô]»ùYôô\ëŸ[€Y]ûJ
N¬ÇBYŸ[€Y]ûKúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]J¬ÇBBKH⁄^ôK⁄^ôKÇBB\⁄^ôK⁄^ôKÇBB\⁄^ôKH⁄^ôKÇBBKH⁄^ôKH⁄^ôKÇBBKH⁄^ôK⁄^ôKÇBWK»
H
N¬ÇÇBX€€ú›X]\öX[Hô]»[ôPò\⁄X”X]\öX[
»õŸŒàò[ŸK€ôSX\Yàò[ŸHH
N¬ÇÇB]\ÀõY⁄[ôHHô]»[ôJŸ[€Y]ûKX]\öX[
N¬ÇB]\ÀòY
\ÀõY⁄[ôH
N¬ÇÇBYŸ[€Y]ûHHô]»ùYôô\ëŸ[€Y]ûJ
N¬ÇBYŸ[€Y]ûKúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]J»HK»
H
N¬ÇÇB]\Àù\ôŸ][ôHHô]»[ôJŸ[€Y]ûKX]\öX[
N¬ÇB]\ÀòY
\Àù\ôŸ][ôH
N¬ÇÇB]\Àù\]J
N¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇB]\ÀõY⁄[ôKôŸ[€Y]ûKô\‹‹ŸJ
N¬ÇB]\ÀõY⁄[ôKõX]\öX[ô\‹‹ŸJ
N¬ÇB]\Àù\ôŸ][ôKôŸ[€Y]ûKô\‹‹ŸJ
N¬ÇB]\Àù\ôŸ][ôKõX]\öX[ô\‹‹ŸJ
N¬ÇÇ_BÇÇ]\]J
H¬ÇÇB]\ÀõY⁄ù\]U€‹õX]ö^
ùYKò[ŸH
N¬ÇB]\ÀõY⁄ù\ôŸ]ù\]U€‹õX]ö^
ùYKò[ŸH
N¬ÇÇBW›åKúŸ]úõ€SX]ö^‹⁄][€ä\ÀõY⁄õX]ö^€‹õ
N¬ÇBW›åãúŸ]úõ€SX]ö^‹⁄][€ä\ÀõY⁄ù\ôŸ]õX]ö^€‹õ
N¬ÇBW›åÀú›XïôX›‹ú ›åã›åH
N¬ÇÇB]\ÀõY⁄[ôKõ€⁄–]
›åà
N¬ÇÇBZYà
\Àò€€‹àOOH[ôYö[ôY
H¬ÇÇBB]\ÀõY⁄[ôKõX]\öX[ò€€‹ãúŸ]
\Àò€€‹à
N¬ÇBB]\Àù\ôŸ][ôKõX]\öX[ò€€‹ãúŸ]
\Àò€€‹à
N¬ÇÇB_H[ŸH¬ÇÇBB]\ÀõY⁄[ôKõX]\öX[ò€€‹ãò€‹J\ÀõY⁄ò€€‹à
N¬ÇBB]\Àù\ôŸ][ôKõX]\öX[ò€€‹ãò€‹J\ÀõY⁄ò€€‹à
N¬ÇÇB_BÇÇB]\Àù\ôŸ][ôKõ€⁄–]
›åà
N¬ÇB]\Àù\ôŸ][ôKúÿÿ[KûàH›åÀõ[ô›

N¬ÇÇ_BÇüBÇò€€ú››ôX›‹àH ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬ò€€ú›ÿÿ[Y\òHH ê◊‘TëW◊ ã»ô]»ÿ[Y\òJ
N¬Çã äÇà
ÇKH⁄›‹»úù\›[K[ôHŸà⁄Y⁄[ô\ŸàHÿ[Y\òBà
ÇKH›Z]XõHõ‹àò\›\]\¬à
àKHò\ŸY€àúù\›[Hö\›X[^ò][€à[àY⁄€öú»⁄Y›€X\^[\Bà
ÇBZŒãÀŸ⁄]Xãò€€KŸ]ò[ùÀ€Y⁄€öúÀÿõÿã€X\›\ã›\›À‹⁄Y›€X\ö[à
ã¬Çò€\‹»ÿ[Y\òR[\à^[ô»[ôTŸY€Y[ù»¬ÇÇX€€ú›ùX›‹äÿ[Y\òH
H¬ÇÇBX€€ú›Ÿ[€Y]ûHHô]»ùYôô\ëŸ[€Y]ûJ
N¬ÇBX€€ú›X]\öX[Hô]»[ôPò\⁄X”X]\öX[
»€€‹éàôôôôôãô\ù^€€‹úŒàùYK€ôSX\Yàò[ŸHH
N¬ÇÇBX€€ú›ô\ùXŸ\»H◊N¬ÇBX€€ú›€€‹ú»H◊N¬ÇÇBX€€ú›⁄[ùX\HﬂN¬ÇÇBKÀ»ôX\ÇÇÇBXY[ôJ	€åIÀ	€åâ»
N¬ÇBXY[ôJ	€åâÀ	€ç	»
N¬ÇBXY[ôJ	€ç	À	€å…»
N¬ÇBXY[ôJ	€å…À	€åI»
N¬ÇÇBKÀ»ò\ÇÇÇBXY[ôJ	ŸåIÀ	Ÿåâ»
N¬ÇBXY[ôJ	ŸåâÀ	Ÿç	»
N¬ÇBXY[ôJ	Ÿç	À	Ÿå…»
N¬ÇBXY[ôJ	Ÿå…À	ŸåI»
N¬ÇÇBKÀ»⁄Y\¬ÇÇBXY[ôJ	€åIÀ	ŸåI»
N¬ÇBXY[ôJ	€åâÀ	Ÿåâ»
N¬ÇBXY[ôJ	€å…À	Ÿå…»
N¬ÇBXY[ôJ	€ç	À	Ÿç	»
N¬ÇÇBKÀ»€€ôBÇÇBXY[ôJ	‹	À	€åI»
N¬ÇBXY[ôJ	‹	À	€åâ»
N¬ÇBXY[ôJ	‹	À	€å…»
N¬ÇBXY[ôJ	‹	À	€ç	»
N¬ÇÇBKÀ»\ÇÇBXY[ôJ	›LIÀ	›Lâ»
N¬ÇBXY[ôJ	›LâÀ	›L…»
N¬ÇBXY[ôJ	›L…À	›LI»
N¬ÇÇBKÀ»\ôŸ]ÇÇBXY[ôJ	ÿ…À	›	»
N¬ÇBXY[ôJ	‹	À	ÿ…»
N¬ÇÇBKÀ»‹õ‹‹¬ÇÇBXY[ôJ	ÿ€åIÀ	ÿ€åâ»
N¬ÇBXY[ôJ	ÿ€å…À	ÿ€ç	»
N¬ÇÇBXY[ôJ	ÿŸåIÀ	ÿŸåâ»
N¬ÇBXY[ôJ	ÿŸå…À	ÿŸç	»
N¬ÇÇBYù[ò›[€àY[ôJKà
H¬ÇÇBBXY⁄[ù
H
N¬ÇBBXY⁄[ù
à
N¬ÇÇB_BÇÇBYù[ò›[€àY⁄[ù
Y
H¬ÇÇBB]ô\ùXŸ\Àú\⁄

N¬ÇBBX€€‹úÀú\⁄

N¬ÇÇBBZYà
⁄[ùX\»YHOOH[ôYö[ôY
H¬ÇÇBBB\⁄[ùX\»YHH◊N¬ÇÇBB_BÇÇBB\⁄[ùX\»YKú\⁄

ô\ùXŸ\Àõ[ô›»»
HHH
N¬ÇÇB_BÇÇBYŸ[€Y]ûKúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]Jô\ùXŸ\À»
H
N¬ÇBYŸ[€Y]ûKúŸ]]öXù]J	ÿ€€‹âÀô]»õÿ]ÃêùYôô\ê]öXù]J€€‹úÀ»
H
N¬ÇÇB\›\\äŸ[€Y]ûKX]\öX[
N¬ÇÇB]\Àù\HH	–ÿ[Y\òR[\âŒ¬ÇÇB]\Àòÿ[Y\òHHÿ[Y\òN¬ÇBZYà
\Àòÿ[Y\òKù\]Tõ⁄ôX›[€ìX]ö^
H\Àòÿ[Y\òKù\]Tõ⁄ôX›[€ìX]ö^

N¬ÇÇB]\ÀõX]ö^Hÿ[Y\òKõX]ö^€‹õ¬ÇB]\ÀõX]ö^]]’\]HHò[ŸN¬ÇÇB]\Àú⁄[ùX\H⁄[ùX\¬ÇÇB]\Àù\]J
N¬ÇÇBKÀ»€€‹ú¬ÇÇBX€€ú›€€‹ëúù\›[HHô]»€€‹äôòXL
N¬ÇBX€€ú›€€‹ê€€ôHHô]»€€‹äôå
N¬ÇBX€€ú›€€‹ï\Hô]»€€‹äXYôà
N¬ÇBX€€ú›€€‹ï\ôŸ]Hô]»€€‹äôôôôôà
N¬ÇBX€€ú›€€‹ê‹õ‹‹»Hô]»€€‹äÃÃÃÃÃ»
N¬ÇÇB]\ÀúŸ]€€‹ú €€‹ëúù\›[K€€‹ê€€ôK€€‹ï\€€‹ï\ôŸ]€€‹ê‹õ‹‹»
N¬ÇÇ_BÇÇ\Ÿ]€€‹ú úù\›[K€€ôK\\ôŸ]‹õ‹‹»
H¬ÇÇBX€€ú›Ÿ[€Y]ûHH\ÀôŸ[€Y]ûN¬ÇÇBX€€ú›€€‹ê]öXù]HHŸ[€Y]ûKôŸ]]öXù]J	ÿ€€‹â»
N¬ÇÇBKÀ»ôX\ÇÇÇBX€€‹ê]öXù]KúŸ]Väúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»€€‹ê]öXù]KúŸ]VäKúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»À»åKåÇÇBX€€‹ê]öXù]KúŸ]Väãúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»€€‹ê]öXù]KúŸ]VäÀúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»À»åãçÇBX€€‹ê]öXù]KúŸ]Väúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»€€‹ê]öXù]KúŸ]VäKúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»À»çå¬ÇBX€€‹ê]öXù]KúŸ]Väãúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»€€‹ê]öXù]KúŸ]VäÀúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»À»åÀåBÇÇBKÀ»ò\ÇÇÇBX€€‹ê]öXù]KúŸ]Väúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»€€‹ê]öXù]KúŸ]VäKúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»À»åKåÇÇBX€€‹ê]öXù]KúŸ]VäLúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»€€‹ê]öXù]KúŸ]VäLKúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»À»åãçÇBX€€‹ê]öXù]KúŸ]VäLãúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»€€‹ê]öXù]KúŸ]VäLÀúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»À»çå¬ÇBX€€‹ê]öXù]KúŸ]VäMúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»€€‹ê]öXù]KúŸ]VäMKúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»À»åÀåBÇÇBKÀ»⁄Y\¬ÇÇBX€€‹ê]öXù]KúŸ]VäMãúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»€€‹ê]öXù]KúŸ]VäMÀúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»À»åKåBÇBX€€‹ê]öXù]KúŸ]VäNúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»€€‹ê]öXù]KúŸ]VäNKúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»À»åãåÇÇBX€€‹ê]öXù]KúŸ]Väåúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»€€‹ê]öXù]KúŸ]VäåKúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»À»åÀå¬ÇBX€€‹ê]öXù]KúŸ]Väåãúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»€€‹ê]öXù]KúŸ]VäåÀúù\›[Kúãúù\›[KôÀúù\›[Kòà
N»À»ççÇÇBKÀ»€€ôBÇÇBX€€‹ê]öXù]KúŸ]Väç€€ôKúã€€ôKôÀ€€ôKòà
N»€€‹ê]öXù]KúŸ]VäçK€€ôKúã€€ôKôÀ€€ôKòà
N»À»åBÇBX€€‹ê]öXù]KúŸ]Väçã€€ôKúã€€ôKôÀ€€ôKòà
N»€€‹ê]öXù]KúŸ]VäçÀ€€ôKúã€€ôKôÀ€€ôKòà
N»À»åÇÇBX€€‹ê]öXù]KúŸ]Väé€€ôKúã€€ôKôÀ€€ôKòà
N»€€‹ê]öXù]KúŸ]VäéK€€ôKúã€€ôKôÀ€€ôKòà
N»À»å¬ÇBX€€‹ê]öXù]KúŸ]VäÃ€€ôKúã€€ôKôÀ€€ôKòà
N»€€‹ê]öXù]KúŸ]VäÃK€€ôKúã€€ôKôÀ€€ôKòà
N»À»çÇÇBKÀ»\ÇÇBX€€‹ê]öXù]KúŸ]VäÃã\úã\ôÀ\òà
N»€€‹ê]öXù]KúŸ]VäÃÀ\úã\ôÀ\òà
N»À»LKLÇÇBX€€‹ê]öXù]KúŸ]VäÕ\úã\ôÀ\òà
N»€€‹ê]öXù]KúŸ]VäÕK\úã\ôÀ\òà
N»À»LãL¬ÇBX€€‹ê]öXù]KúŸ]VäÕã\úã\ôÀ\òà
N»€€‹ê]öXù]KúŸ]VäÕÀ\úã\ôÀ\òà
N»À»LÀLBÇÇBKÀ»\ôŸ]ÇÇBX€€‹ê]öXù]KúŸ]VäŒ\ôŸ]úã\ôŸ]ôÀ\ôŸ]òà
N»€€‹ê]öXù]KúŸ]VäŒK\ôŸ]úã\ôŸ]ôÀ\ôŸ]òà
N»À»ÀÇBX€€‹ê]öXù]KúŸ]Vä‹õ‹‹Àúã‹õ‹‹ÀôÀ‹õ‹‹Àòà
N»€€‹ê]öXù]KúŸ]VäK‹õ‹‹Àúã‹õ‹‹ÀôÀ‹õ‹‹Àòà
N»À»¬ÇÇBKÀ»‹õ‹‹¬ÇÇBX€€‹ê]öXù]KúŸ]Väã‹õ‹‹Àúã‹õ‹‹ÀôÀ‹õ‹‹Àòà
N»€€‹ê]öXù]KúŸ]VäÀ‹õ‹‹Àúã‹õ‹‹ÀôÀ‹õ‹‹Àòà
N»À»€åK€åÇÇBX€€‹ê]öXù]KúŸ]Vä‹õ‹‹Àúã‹õ‹‹ÀôÀ‹õ‹‹Àòà
N»€€‹ê]öXù]KúŸ]VäK‹õ‹‹Àúã‹õ‹‹ÀôÀ‹õ‹‹Àòà
N»À»€åÀ€çÇÇBX€€‹ê]öXù]KúŸ]Väã‹õ‹‹Àúã‹õ‹‹ÀôÀ‹õ‹‹Àòà
N»€€‹ê]öXù]KúŸ]VäÀ‹õ‹‹Àúã‹õ‹‹ÀôÀ‹õ‹‹Àòà
N»À»ŸåKŸåÇÇBX€€‹ê]öXù]KúŸ]Vä‹õ‹‹Àúã‹õ‹‹ÀôÀ‹õ‹‹Àòà
N»€€‹ê]öXù]KúŸ]VäK‹õ‹‹Àúã‹õ‹‹ÀôÀ‹õ‹‹Àòà
N»À»ŸåÀŸçÇÇBX€€‹ê]öXù]KõôYY’\]HHùYN¬ÇÇ_BÇÇ]\]J
H¬ÇÇBX€€ú›Ÿ[€Y]ûHH\ÀôŸ[€Y]ûN¬ÇBX€€ú›⁄[ùX\H\Àú⁄[ùX\¬ÇÇBX€€ú›»HKHN¬ÇÇBKÀ»ŸHôYYù\›ÿ[Y\òHõ⁄ôX›[€àX]ö^[ùô\úŸBÇBKÀ»€‹õX]ö^]\›ôHY[ù]BÇÇBWÿÿ[Y\òKúõ⁄ôX›[€ìX]ö^[ùô\úŸKò€‹J\Àòÿ[Y\òKúõ⁄ôX›[€ìX]ö^[ùô\úŸH
N¬ÇÇBKÀ»Ÿ[ù\à»\ôŸ]ÇÇB\Ÿ]⁄[ù
	ÿ…À⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKHH
N¬ÇB\Ÿ]⁄[ù
	›	À⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKH
N¬ÇÇBKÀ»ôX\ÇÇÇB\Ÿ]⁄[ù
	€åIÀ⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKHÀHHH
N¬ÇB\Ÿ]⁄[ù
	€åâÀ⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKÀHHH
N¬ÇB\Ÿ]⁄[ù
	€å…À⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKHÀHH
N¬ÇB\Ÿ]⁄[ù
	€ç	À⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKÀHH
N¬ÇÇBKÀ»ò\ÇÇÇB\Ÿ]⁄[ù
	ŸåIÀ⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKHÀHH
N¬ÇB\Ÿ]⁄[ù
	ŸåâÀ⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKÀHH
N¬ÇB\Ÿ]⁄[ù
	Ÿå…À⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKHÀH
N¬ÇB\Ÿ]⁄[ù
	Ÿç	À⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKÀH
N¬ÇÇBKÀ»\ÇÇB\Ÿ]⁄[ù
	›LIÀ⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òK»
àçÀ
àKåKHH
N¬ÇB\Ÿ]⁄[ù
	›LâÀ⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKH»
àçÀ
àKåKHH
N¬ÇB\Ÿ]⁄[ù
	›L…À⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òK
àãHH
N¬ÇÇBKÀ»‹õ‹‹¬ÇÇB\Ÿ]⁄[ù
	ÿŸåIÀ⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKHÀH
N¬ÇB\Ÿ]⁄[ù
	ÿŸåâÀ⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKÀH
N¬ÇB\Ÿ]⁄[ù
	ÿŸå…À⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKHH
N¬ÇB\Ÿ]⁄[ù
	ÿŸç	À⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKH
N¬ÇÇB\Ÿ]⁄[ù
	ÿ€åIÀ⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKHÀHH
N¬ÇB\Ÿ]⁄[ù
	ÿ€åâÀ⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKÀHH
N¬ÇB\Ÿ]⁄[ù
	ÿ€å…À⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKHHH
N¬ÇB\Ÿ]⁄[ù
	ÿ€ç	À⁄[ùX\Ÿ[€Y]ûKÿÿ[Y\òKHH
N¬ÇÇBYŸ[€Y]ûKôŸ]]öXù]J	‹‹⁄][€â»
KõôYY’\]HHùYN¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇB]\ÀôŸ[€Y]ûKô\‹‹ŸJ
N¬ÇB]\ÀõX]\öX[ô\‹‹ŸJ
N¬ÇÇ_BÇüBÇÇôù[ò›[€àŸ]⁄[ù
⁄[ù⁄[ùX\Ÿ[€Y]ûKÿ[Y\òKKà
H¬ÇÇW›ôX›‹ãúŸ]
Kà
Kù[úõ⁄ôX›
ÿ[Y\òH
N¬ÇÇX€€ú›⁄[ù»H⁄[ùX\»⁄[ùN¬ÇÇZYà
⁄[ù»OOH[ôYö[ôY
H¬ÇÇBX€€ú›‹⁄][€àHŸ[€Y]ûKôŸ]]öXù]J	‹‹⁄][€â»
N¬ÇÇBYõ‹à
]HHH⁄[ùÀõ[ô›»H»H
 »
H¬ÇÇBB\‹⁄][€ãúŸ]Vä⁄[ù÷»HK›ôX›‹ãû›ôX›‹ãûK›ôX›‹ãûà
N¬ÇÇB_BÇÇ_BÇüBÇò€€ú›ÿõﬁH ê◊‘TëW◊ ã»ô]»õﬁ 
N¬Çò€\‹»õﬁ[\à^[ô»[ôTŸY€Y[ù»¬ÇÇX€€ú›ùX›‹äÿöôX›€€‹àHôôôå
H¬ÇÇBX€€ú›[ôXŸ\»Hô]»Z[ùMê\úò^J»KKããÀÀKKããÀÀKKããÀ»H
N¬ÇBX€€ú›‹⁄][€ú»Hô]»õÿ]Ãê\úò^J
à»
N¬ÇÇBX€€ú›Ÿ[€Y]ûHHô]»ùYôô\ëŸ[€Y]ûJ
N¬ÇBYŸ[€Y]ûKúŸ][ô^
ô]»ùYôô\ê]öXù]J[ôXŸ\ÀH
H
N¬ÇBYŸ[€Y]ûKúŸ]]öXù]J	‹‹⁄][€âÀô]»ùYôô\ê]öXù]J‹⁄][€úÀ»
H
N¬ÇÇB\›\\äŸ[€Y]ûKô]»[ôPò\⁄X”X]\öX[
»€€‹éà€€‹ã€ôSX\Yàò[ŸHH
H
N¬ÇÇB]\ÀõÿöôX›HÿöôX›¬ÇB]\Àù\HH	–õﬁ[\âŒ¬ÇÇB]\ÀõX]ö^]]’\]HHò[ŸN¬ÇÇB]\Àù\]J
N¬ÇÇ_BÇÇ]\]JÿöôX›
H¬ÇÇBZYà
ÿöôX›OOH[ôYö[ôY
H¬ÇÇBBX€€ú€€Kùÿ\õä	’ëQKêõﬁ[\éàù\]J
H\»õ»€ôŸ\à\ô›[Y[ùÀâ»
N¬ÇÇB_BÇÇBZYà
\ÀõÿöôX›OOH[ôYö[ôY
H¬ÇÇBBWÿõﬁúŸ]úõ€SÿöôX›
\ÀõÿöôX›
N¬ÇÇB_BÇÇBZYà
ÿõﬁö\—[\J
H
Hô]\õé¬ÇÇBX€€ú›Z[àHÿõﬁõZ[é¬ÇBX€€ú›X^HÿõﬁõX^¬ÇÇBK ÇÇBBMW◊◊◊ÕÇBLK◊◊◊ÃﬂÇB_ó◊ﬂÕ¬ÇBLã◊◊◊ÃÀ¬ÇÇBLàX^ûX^ûKX^ûÇÇBLNàZ[ãûX^ûKX^ûÇÇBLéàZ[ãûZ[ãûKX^ûÇÇBLŒàX^ûZ[ãûKX^ûÇÇBMàX^ûX^ûKZ[ãûÇÇBMNàZ[ãûX^ûKZ[ãûÇÇBMéàZ[ãûZ[ãûKZ[ãûÇÇBMŒàX^ûZ[ãûKZ[ãûÇÇBJã¬ÇÇBX€€ú›‹⁄][€àH\ÀôŸ[€Y]ûKò]öXù]\Àú‹⁄][€é¬ÇBX€€ú›\úò^HH‹⁄][€ãò\úò^N¬ÇÇBX\úò^V»HHX^û»\úò^V»HHHX^ûN»\úò^V»àHHX^ûé¬ÇBX\úò^V»»HHZ[ãû»\úò^V»HHX^ûN»\úò^V»HHHX^ûé¬ÇBX\úò^V»àHHZ[ãû»\úò^V»»HHZ[ãûN»\úò^V»HHX^ûé¬ÇBX\úò^V»HHHX^û»\úò^V»LHHZ[ãûN»\úò^V»LHHHX^ûé¬ÇBX\úò^V»LàHHX^û»\úò^V»L»HHX^ûN»\úò^V»MHHZ[ãûé¬ÇBX\úò^V»MHHHZ[ãû»\úò^V»MàHHX^ûN»\úò^V»M»HHZ[ãûé¬ÇBX\úò^V»NHHZ[ãû»\úò^V»NHHHZ[ãûN»\úò^V»åHHZ[ãûé¬ÇBX\úò^V»åHHHX^û»\úò^V»åàHHZ[ãûN»\úò^V»å»HHZ[ãûé¬ÇÇB\‹⁄][€ãõôYY’\]HHùYN¬ÇÇB]\ÀôŸ[€Y]ûKò€€\]Põ›[ô[ô‘‹\ôJ
N¬ÇÇ_BÇÇ\Ÿ]úõ€SÿöôX›
ÿöôX›
H¬ÇÇB]\ÀõÿöôX›HÿöôX›¬ÇB]\Àù\]J
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇX€‹J€›\òŸKôX›\ú⁄]ôH
H¬ÇÇB\›\\ãò€‹J€›\òŸKôX›\ú⁄]ôH
N¬ÇÇB]\ÀõÿöôX›H€›\òŸKõÿöôX›¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇB]\ÀôŸ[€Y]ûKô\‹‹ŸJ
N¬ÇB]\ÀõX]\öX[ô\‹‹ŸJ
N¬ÇÇ_BÇüBÇò€\‹»õﬁ“[\à^[ô»[ôTŸY€Y[ù»¬ÇÇX€€ú›ùX›‹äõﬁ€€‹àHôôôå
H¬ÇÇBX€€ú›[ôXŸ\»Hô]»Z[ùMê\úò^J»KKããÀÀKKããÀÀKKããÀ»H
N¬ÇÇBX€€ú›‹⁄][€ú»H»KKKHKKKHKHKKKHKKKKHKHKKHKHKHKHKKHKHHN¬ÇÇBX€€ú›Ÿ[€Y]ûHHô]»ùYôô\ëŸ[€Y]ûJ
N¬ÇÇBYŸ[€Y]ûKúŸ][ô^
ô]»ùYôô\ê]öXù]J[ôXŸ\ÀH
H
N¬ÇÇBYŸ[€Y]ûKúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]J‹⁄][€úÀ»
H
N¬ÇÇB\›\\äŸ[€Y]ûKô]»[ôPò\⁄X”X]\öX[
»€€‹éà€€‹ã€ôSX\Yàò[ŸHH
H
N¬ÇÇB]\ÀòõﬁHõﬁ¬ÇÇB]\Àù\HH	–õﬁ“[\âŒ¬ÇÇB]\ÀôŸ[€Y]ûKò€€\]Põ›[ô[ô‘‹\ôJ
N¬ÇÇ_BÇÇ]\]SX]ö^€‹õ
õ‹òŸH
H¬ÇÇBX€€ú›õﬁH\Àòõﬁ¬ÇÇBZYà
õﬁö\—[\J
H
Hô]\õé¬ÇÇBXõﬁôŸ]Ÿ[ù\ä\Àú‹⁄][€à
N¬ÇÇBXõﬁôŸ]⁄^ôJ\Àúÿÿ[H
N¬ÇÇB]\Àúÿÿ[Kõ][\Tÿÿ[\äçH
N¬ÇÇB\›\\ãù\]SX]ö^€‹õ
õ‹òŸH
N¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇB]\ÀôŸ[€Y]ûKô\‹‹ŸJ
N¬ÇB]\ÀõX]\öX[ô\‹‹ŸJ
N¬ÇÇ_BÇüBÇò€\‹»[ôR[\à^[ô»[ôH¬ÇÇX€€ú›ùX›‹ä[ôK⁄^ôHHK^Hôôôå
H¬ÇÇBX€€ú›€€‹àH^¬ÇÇBX€€ú›‹⁄][€ú»H»KHKHKKHKHKKKHKKHKHKKHKKKN¬ÇÇBX€€ú›Ÿ[€Y]ûHHô]»ùYôô\ëŸ[€Y]ûJ
N¬ÇBYŸ[€Y]ûKúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]J‹⁄][€úÀ»
H
N¬ÇBYŸ[€Y]ûKò€€\]Põ›[ô[ô‘‹\ôJ
N¬ÇÇB\›\\äŸ[€Y]ûKô]»[ôPò\⁄X”X]\öX[
»€€‹éà€€‹ã€ôSX\Yàò[ŸHH
H
N¬ÇÇB]\Àù\HH	‘[ôR[\âŒ¬ÇÇB]\Àú[ôHH[ôN¬ÇÇB]\Àú⁄^ôHH⁄^ôN¬ÇÇBX€€ú›‹⁄][€úÃàH»KKHKKHKHKKKHKHKKHKN¬ÇÇBX€€ú›Ÿ[€Y]ûLàHô]»ùYôô\ëŸ[€Y]ûJ
N¬ÇBYŸ[€Y]ûLãúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]J‹⁄][€úÃã»
H
N¬ÇBYŸ[€Y]ûLãò€€\]Põ›[ô[ô‘‹\ôJ
N¬ÇÇB]\ÀòY
ô]»Y\⁄
Ÿ[€Y]ûLãô]»Y\⁄ò\⁄X”X]\öX[
»€€‹éà€€‹ã‹X⁄]Nàåãò[ú‹\ô[ùàùYK\‹ö]Nàò[ŸK€ôSX\Yàò[ŸHH
H
H
N¬ÇÇ_BÇÇ]\]SX]ö^€‹õ
õ‹òŸH
H¬ÇÇB]\Àú‹⁄][€ãúŸ]

N¬ÇÇB]\Àúÿÿ[KúŸ]
çH
à\Àú⁄^ôKçH
à\Àú⁄^ôKH
N¬ÇÇB]\Àõ€⁄–]
\Àú[ôKõõ‹õX[
N¬ÇÇB]\Àùò[ú€]VäH\Àú[ôKò€€ú›[ù
N¬ÇÇB\›\\ãù\]SX]ö^€‹õ
õ‹òŸH
N¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇB]\ÀôŸ[€Y]ûKô\‹‹ŸJ
N¬ÇB]\ÀõX]\öX[ô\‹‹ŸJ
N¬ÇB]\Àò⁄[ô[ñ»KôŸ[€Y]ûKô\‹‹ŸJ
N¬ÇB]\Àò⁄[ô[ñ»KõX]\öX[ô\‹‹ŸJ
N¬ÇÇ_BÇüBÇò€€ú›ÿ^\»H ê◊‘TëW◊ ã»ô]»ôX›‹å 
N¬õ]€[ôQŸ[€Y]ûKÿ€€ôQŸ[€Y]ûN¬Çò€\‹»\úõ›“[\à^[ô»ÿöôX›—¬ÇÇKÀ»\à\»\‹›[YY»ôHõ‹õX[^ôYÇÇX€€ú›ùX›‹ä\àHô]»ôX›‹å H
K‹öY⁄[àHô]»ôX›‹å 
K[ô›HK€€‹àHôôôåXY[ô›H[ô›
àåãXY⁄YHXY[ô›
àåà
H¬ÇÇB\›\\ä
N¬ÇÇB]\Àù\HH	–\úõ›“[\âŒ¬ÇÇBZYà
€[ôQŸ[€Y]ûHOOH[ôYö[ôY
H¬ÇÇBBW€[ôQŸ[€Y]ûHHô]»ùYôô\ëŸ[€Y]ûJ
N¬ÇBBW€[ôQŸ[€Y]ûKúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]J»KK»
H
N¬ÇÇBBWÿ€€ôQŸ[€Y]ûHHô]»ﬁ[[ô\ëŸ[€Y]ûJçKKKH
N¬ÇBBWÿ€€ôQŸ[€Y]ûKùò[ú€]JHçK
N¬ÇÇB_BÇÇB]\Àú‹⁄][€ãò€‹J‹öY⁄[à
N¬ÇÇB]\Àõ[ôHHô]»[ôJ€[ôQŸ[€Y]ûKô]»[ôPò\⁄X”X]\öX[
»€€‹éà€€‹ã€ôSX\Yàò[ŸHH
H
N¬ÇB]\Àõ[ôKõX]ö^]]’\]HHò[ŸN¬ÇB]\ÀòY
\Àõ[ôH
N¬ÇÇB]\Àò€€ôHHô]»Y\⁄
ÿ€€ôQŸ[€Y]ûKô]»Y\⁄ò\⁄X”X]\öX[
»€€‹éà€€‹ã€ôSX\Yàò[ŸHH
H
N¬ÇB]\Àò€€ôKõX]ö^]]’\]HHò[ŸN¬ÇB]\ÀòY
\Àò€€ôH
N¬ÇÇB]\ÀúŸ]\ôX›[€ä\à
N¬ÇB]\ÀúŸ][ô›
[ô›XY[ô›XY⁄Y
N¬ÇÇ_BÇÇ\Ÿ]\ôX›[€ä\à
H¬ÇÇBKÀ»\à\»\‹›[YY»ôHõ‹õX[^ôYÇÇBZYà
\ãûHàéNNNNH
H¬ÇÇBB]\Àú]X]\õö[€ãúŸ]
H
N¬ÇÇB_H[ŸHYà
\ãûHHéNNNNH
H¬ÇÇBB]\Àú]X]\õö[€ãúŸ]
K
N¬ÇÇB_H[ŸH¬ÇÇBBWÿ^\ÀúŸ]
\ãûãH\ãû
Kõõ‹õX[^ôJ
N¬ÇÇBBX€€ú›òYX[ú»HX]òX€‹ \ãûH
N¬ÇÇBB]\Àú]X]\õö[€ãúŸ]úõ€P^\–[ô€Jÿ^\ÀòYX[ú»
N¬ÇÇB_BÇÇ_BÇÇ\Ÿ][ô›
[ô›XY[ô›H[ô›
àåãXY⁄YHXY[ô›
àåà
H¬ÇÇB]\Àõ[ôKúÿÿ[KúŸ]
KX]õX^
åK[ô›HXY[ô›
KH
N»À»ŸYHÃMÕNÇB]\Àõ[ôKù\]SX]ö^

N¬ÇÇB]\Àò€€ôKúÿÿ[KúŸ]
XY⁄YXY[ô›XY⁄Y
N¬ÇB]\Àò€€ôKú‹⁄][€ãûHH[ô›¬ÇB]\Àò€€ôKù\]SX]ö^

N¬ÇÇ_BÇÇ\Ÿ]€€‹ä€€‹à
H¬ÇÇB]\Àõ[ôKõX]\öX[ò€€‹ãúŸ]
€€‹à
N¬ÇB]\Àò€€ôKõX]\öX[ò€€‹ãúŸ]
€€‹à
N¬ÇÇ_BÇÇX€‹J€›\òŸH
H¬ÇÇB\›\\ãò€‹J€›\òŸKò[ŸH
N¬ÇÇB]\Àõ[ôKò€‹J€›\òŸKõ[ôH
N¬ÇB]\Àò€€ôKò€‹J€›\òŸKò€€ôH
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇB]\Àõ[ôKôŸ[€Y]ûKô\‹‹ŸJ
N¬ÇB]\Àõ[ôKõX]\öX[ô\‹‹ŸJ
N¬ÇB]\Àò€€ôKôŸ[€Y]ûKô\‹‹ŸJ
N¬ÇB]\Àò€€ôKõX]\öX[ô\‹‹ŸJ
N¬ÇÇ_BÇüBÇò€\‹»^\“[\à^[ô»[ôTŸY€Y[ù»¬ÇÇX€€ú›ùX›‹ä⁄^ôHHH
H¬ÇÇBX€€ú›ô\ùXŸ\»H¬ÇBBL\⁄^ôKÇBBLL⁄^ôKÇBBLL⁄^ôBÇBWN¬ÇÇBX€€ú›€€‹ú»H¬ÇBBLKLKçãÇBBLKLçãKÇBBLKLçãBÇBWN¬ÇÇBX€€ú›Ÿ[€Y]ûHHô]»ùYôô\ëŸ[€Y]ûJ
N¬ÇBYŸ[€Y]ûKúŸ]]öXù]J	‹‹⁄][€âÀô]»õÿ]ÃêùYôô\ê]öXù]Jô\ùXŸ\À»
H
N¬ÇBYŸ[€Y]ûKúŸ]]öXù]J	ÿ€€‹âÀô]»õÿ]ÃêùYôô\ê]öXù]J€€‹úÀ»
H
N¬ÇÇBX€€ú›X]\öX[Hô]»[ôPò\⁄X”X]\öX[
»ô\ù^€€‹úŒàùYK€ôSX\Yàò[ŸHH
N¬ÇÇB\›\\äŸ[€Y]ûKX]\öX[
N¬ÇÇB]\Àù\HH	–^\“[\âŒ¬ÇÇ_BÇÇ\Ÿ]€€‹ú ^\–€€‹ãP^\–€€‹ãê^\–€€‹à
H¬ÇÇBX€€ú›€€‹àHô]»€€‹ä
N¬ÇBX€€ú›\úò^HH\ÀôŸ[€Y]ûKò]öXù]\Àò€€‹ãò\úò^N¬ÇÇBX€€‹ãúŸ]
^\–€€‹à
N¬ÇBX€€‹ãù–\úò^J\úò^K
N¬ÇBX€€‹ãù–\úò^J\úò^K»
N¬ÇÇBX€€‹ãúŸ]
P^\–€€‹à
N¬ÇBX€€‹ãù–\úò^J\úò^Kà
N¬ÇBX€€‹ãù–\úò^J\úò^KH
N¬ÇÇBX€€‹ãúŸ]
ê^\–€€‹à
N¬ÇBX€€‹ãù–\úò^J\úò^KLà
N¬ÇBX€€‹ãù–\úò^J\úò^KMH
N¬ÇÇB]\ÀôŸ[€Y]ûKò]öXù]\Àò€€‹ãõôYY’\]HHùYN¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇY\‹‹ŸJ
H¬ÇÇB]\ÀôŸ[€Y]ûKô\‹‹ŸJ
N¬ÇB]\ÀõX]\öX[ô\‹‹ŸJ
N¬ÇÇ_BÇüBÇò€\‹»⁄\T]¬ÇÇX€€ú›ùX›‹ä
H¬ÇÇB]\Àù\HH	‘⁄\T]	Œ¬ÇÇB]\Àò€€‹àHô]»€€‹ä
N¬ÇÇB]\Àú›Xî]»H◊N¬ÇB]\Àò›\úô[ù]Hù[¬ÇÇ_BÇÇ[[›ôU H
H¬ÇÇB]\Àò›\úô[ù]Hô]»]

N¬ÇB]\Àú›Xî]Àú\⁄
\Àò›\úô[ù]
N¬ÇB]\Àò›\úô[ù]õ[›ôU H
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ[[ôU H
H¬ÇÇB]\Àò›\úô[ù]õ[ôU H
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\]XYò]X–›\ùôU P‘P‘KVVH
H¬ÇÇB]\Àò›\úô[ù]ú]XYò]X–›\ùôU P‘P‘KVVH
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇXô^öY\ê›\ùôU P‘^P‘^KP‘ûP‘ûKVVH
H¬ÇÇB]\Àò›\úô[ù]òô^öY\ê›\ùôU P‘^P‘^KP‘ûP‘ûKVVH
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ\‹[ôUùJ»
H¬ÇÇB]\Àò›\úô[ù]ú‹[ôUùJ»
N¬ÇÇB\ô]\õà\Œ¬ÇÇ_BÇÇ]‘⁄\\ \––’»
H¬ÇÇBYù[ò›[€à‘⁄\\”õ“€\ [î›Xú]»
H¬ÇÇBBX€€ú›⁄\\»H◊N¬ÇÇBBYõ‹à
]HHH[î›Xú]Àõ[ô›»H»H
 »
H¬ÇÇBBBX€€ú›\]H[î›Xú]÷»HN¬ÇÇBBBX€€ú›\⁄\HHô]»⁄\J
N¬ÇBBB]\⁄\Kò›\ùô\»H\]ò›\ùô\Œ¬ÇÇBBB\⁄\\Àú\⁄
\⁄\H
N¬ÇÇBB_BÇÇBB\ô]\õà⁄\\Œ¬ÇÇB_BÇÇBYù[ò›[€à\‘⁄[ù[ú⁄YT€Y€€ä[î[î€Y€€à
H¬ÇÇBBX€€ú›€S[àH[î€Y€€ãõ[ô›¬ÇÇBBKÀ»[î€à€Y€€à€€ù›\àOà[[YYX]H›XÿŸ\‹»‹ÇÇBBKÀ»ŸŸ€[ô»Ÿà[ú⁄YK€›]⁄YH]]ô\ûH⁄[ô€HH[ù\úŸX›[€à⁄[ùŸà[àYŸBÇBBKÀ»⁄]H‹ö^õ€ù[[ôHõ›Y⁄[îYùŸà[îÇBBKÀ»õ›€›[ù[ô»›Ÿ\ñH[ô⁄[ù»ŸàYŸ\»[ô⁄€HYŸ\»€à][ôBÇBB[][ú⁄YHHò[ŸN¬ÇBBYõ‹à
]H€S[àHKHH»H€S[é»HH
 »
H¬ÇÇBBB[]YŸS›‘H[î€Y€€ñ»N¬ÇBBB[]YŸRY⁄H[î€Y€€ñ»HN¬ÇÇBBB[]YŸQHYŸRY⁄ûHYŸS›‘û¬ÇBBB[]YŸQHHYŸRY⁄ûHHYŸS›‘ûN¬ÇÇBBBZYà
X]òXú YŸQH
Hàù[Xô\ãëT“S”à
H¬ÇÇBBBBKÀ»õ›\ò[[ÇBBBBZYà
YŸQH
H¬ÇÇBBBBBYYŸS›‘H[î€Y€€ñ»HN»YŸQHHYŸQ¬ÇBBBBBYYŸRY⁄H[î€Y€€ñ»N»YŸQHHHYŸQN¬ÇÇBBBB_BÇÇBBBBZYà

[îûHYŸS›‘ûH
H
[îûHàYŸRY⁄ûH
H
HBX€€ù[ùYN¬ÇÇBBBBZYà
[îûHOOHYŸS›‘ûH
H¬ÇÇBBBBBZYà
[îûOOHYŸS›‘û
BB\ô]\õÇ]ùYN¬BKÀ»[î\»€à€€ù›\à¬ÇBBBBBKÀ»€€ù[ùYN¬BBBKÀ»õ»[ù\úŸX›[€à‹àYŸS›‘OàŸ\€â›€›[ùHHBÇÇBBBB_H[ŸH¬ÇÇBBBBBX€€ú›\úYŸHHYŸQH
à
[îûHYŸS›‘û
HHYŸQ
à
[îûHHYŸS›‘ûH
N¬ÇBBBBBZYà
\úYŸHOOH
BBBB\ô]\õÇ]ùYN¬BKÀ»[î\»€à€€ù›\à¬ÇBBBBBZYà
\úYŸH
HBBBX€€ù[ùYN¬ÇBBBBBZ[ú⁄YHHH[ú⁄YN¬BKÀ»ùYH[ù\úŸX›[€àYùŸà[îÇÇBBBB_BÇÇBBB_H[ŸH¬ÇÇBBBBKÀ»\ò[[‹à€€[ôX\ÇÇBBBBZYà
[îûHOOHYŸS›‘ûH
HBX€€ù[ùYN¬BBKÀ»\ò[[ÇBBBBKÀ»YŸHY\»€àHÿ[YH‹ö^õ€ù[[ôH\»[îÇBBBBZYà


YŸRY⁄ûH[îû
H	âà
[îûHYŸS›‘û
H
HÇBBBBBH

YŸS›‘ûH[îû
H	âà
[îûHYŸRY⁄û
H
H
BB\ô]\õÇ]ùYN¬KÀ»[îà⁄[ù€à€€ù›\àBÇBBBBKÀ»€€ù[ùYN¬ÇÇBBB_BÇÇBB_BÇÇBB\ô]\õÇZ[ú⁄YN¬ÇÇB_BÇÇBX€€ú›\–€ÿ⁄’⁄\ŸHH⁄\U][Àö\–€ÿ⁄’⁄\ŸN¬ÇÇBX€€ú››Xî]»H\Àú›Xî]Œ¬ÇBZYà
›Xî]Àõ[ô›OOH
Hô]\õà◊N¬ÇÇB[]€€Y\]\⁄\N¬ÇBX€€ú›⁄\\»H◊N¬ÇÇBZYà
›Xî]Àõ[ô›OOHH
H¬ÇÇBB]\]H›Xî]÷»N¬ÇBB]\⁄\HHô]»⁄\J
N¬ÇBB]\⁄\Kò›\ùô\»H\]ò›\ùô\Œ¬ÇBB\⁄\\Àú\⁄
\⁄\H
N¬ÇBB\ô]\õà⁄\\Œ¬ÇÇB_BÇÇB[]€\—ö\ú›HH\–€ÿ⁄’⁄\ŸJ›Xî]÷»KôŸ]⁄[ù 
H
N¬ÇBZ€\—ö\ú›H\––’»»H€\—ö\ú›à€\—ö\ú›¬ÇÇBKÀ»€€ú€€KõŸ í€\»ö\ú›ã€\—ö\ú›
N¬ÇÇBX€€ú›ô]\î⁄\R€\»H◊N¬ÇBX€€ú›ô]‘⁄\\»H◊N¬ÇB[]ô]‘⁄\R€\»H◊N¬ÇB[]XZ[íYH¬ÇB[]\⁄[ùŒ¬ÇÇB[ô]‘⁄\\÷»XZ[íYHH[ôYö[ôY¬ÇB[ô]‘⁄\R€\÷»XZ[íYHH◊N¬ÇÇBYõ‹à
]HHH›Xî]Àõ[ô›»H»H
 »
H¬ÇÇBB]\]H›Xî]÷»HN¬ÇBB]\⁄[ù»H\]ôŸ]⁄[ù 
N¬ÇBB\€€YH\–€ÿ⁄’⁄\ŸJ\⁄[ù»
N¬ÇBB\€€YH\––’»»H€€Yà€€Y¬ÇÇBBZYà
€€Y
H¬ÇÇBBBZYà

H€\—ö\ú›
H	âà
ô]‘⁄\\÷»XZ[íYH
H
B[XZ[íY
 Œ¬ÇÇBBB[ô]‘⁄\\÷»XZ[íYHH»Œàô]»⁄\J
Kà\⁄[ù»N¬ÇBBB[ô]‘⁄\\÷»XZ[íYKúÀò›\ùô\»H\]ò›\ùô\Œ¬ÇÇBBBZYà
€\—ö\ú›
B[XZ[íY
 Œ¬ÇBBB[ô]‘⁄\R€\÷»XZ[íYHH◊N¬ÇÇBBBKÀÿ€€ú€€KõŸ 	ÿ›…ÀJN¬ÇÇBB_H[ŸH¬ÇÇBBB[ô]‘⁄\R€\÷»XZ[íYKú\⁄
»à\]à\⁄[ù÷»HH
N¬ÇÇBBBKÀÿ€€ú€€KõŸ 	ÿÿ›…ÀJN¬ÇÇBB_BÇÇB_BÇÇBKÀ»€õH€\œ»OàõÿòXõH[⁄\\»⁄]‹õ€ô»‹öY[ù][€ÇÇBZYà
Hô]‘⁄\\÷»H
B\ô]\õÇ]‘⁄\\”õ“€\ ›Xî]»
N¬ÇÇÇBZYà
ô]‘⁄\\Àõ[ô›àH
H¬ÇÇBB[][XöY›[›\»Hò[ŸN¬ÇBB[]–⁄[ôŸHH¬ÇÇBBYõ‹à
]“YH”[àHô]‘⁄\\Àõ[ô›»“Y”[é»“Y
 »
H¬ÇÇBBBXô]\î⁄\R€\÷»“YHH◊N¬ÇÇBB_BÇÇBBYõ‹à
]“YH”[àHô]‘⁄\\Àõ[ô›»“Y”[é»“Y
 »
H¬ÇÇBBBX€€ú›⁄»Hô]‘⁄\R€\÷»“YN¬ÇÇBBBYõ‹à
]YH»Y⁄Àõ[ô›»Y
 »
H¬ÇÇBBBBX€€ú›»H⁄÷»YN¬ÇBBBB[]€W›[ò\‹⁄Y€ôYHùYN¬ÇÇBBBBYõ‹à
]ÃíYH»ÃíYô]‘⁄\\Àõ[ô›»ÃíY
 »
H¬ÇÇBBBBBZYà
\‘⁄[ù[ú⁄YT€Y€€äÀúô]‘⁄\\÷»ÃíYKú
H
H¬ÇÇBBBBBBZYà
“YOOHÃíY
B]–⁄[ôŸH
 Œ¬ÇÇBBBBBBZYà
€W›[ò\‹⁄Y€ôY
H¬ÇÇBBBBBBBZ€W›[ò\‹⁄Y€ôYHò[ŸN¬ÇBBBBBBBXô]\î⁄\R€\÷»ÃíYKú\⁄
»
N¬ÇÇBBBBBB_H[ŸH¬ÇÇBBBBBBBX[XöY›[›\»HùYN¬ÇÇBBBBBB_BÇÇBBBBB_BÇÇBBBB_BÇÇBBBBZYà
€W›[ò\‹⁄Y€ôY
H¬ÇÇBBBBBXô]\î⁄\R€\÷»“YKú\⁄
»
N¬ÇÇBBBB_BÇÇBBB_BÇÇBB_BÇÇBBZYà
–⁄[ôŸHà	âà[XöY›[›\»OOHò[ŸH
H¬ÇÇBBB[ô]‘⁄\R€\»Hô]\î⁄\R€\Œ¬ÇÇBB_BÇÇB_BÇÇB[]\€\Œ¬ÇÇBYõ‹à
]HH[Hô]‘⁄\\Àõ[ô›»H[»H
 »
H¬ÇÇBB]\⁄\HHô]‘⁄\\÷»HKúŒ¬ÇBB\⁄\\Àú\⁄
\⁄\H
N¬ÇBB]\€\»Hô]‘⁄\R€\÷»HN¬ÇÇBBYõ‹à
]àHõH\€\Àõ[ô›»àõ»à
 »
H¬ÇÇBBB]\⁄\Kö€\Àú\⁄
\€\÷»àKö
N¬ÇÇBB_BÇÇB_BÇÇBKÀÿ€€ú€€KõŸ ú⁄\Hã⁄\\ N¬ÇÇB\ô]\õà⁄\\Œ¬ÇÇ_BÇüBÇò€\‹»€€ùõ€»^[ô»]ô[ù\‹]⁄\à¬ÇÇX€€ú›ùX›‹äÿöôX›€Q[[Y[ùHù[
H¬ÇÇB\›\\ä
N¬ÇÇB]\ÀõÿöôX›HÿöôX›¬ÇB]\Àô€Q[[Y[ùH€Q[[Y[ù¬ÇÇB]\Àô[òXõYHùYN¬ÇÇB]\Àú›]HHHN¬ÇÇB]\ÀöŸ^\»HﬂN¬ÇB]\Àõ[›\ŸPù]€ú»H»Qïàù[RQNàù[íQ“àù[N¬ÇB]\Àù›X⁄\»H»”ëNàù[”Œàù[N¬ÇÇ_BÇÇX€€õôX›

HﬂBÇÇY\ÿ€€õôX›

HﬂBÇÇY\‹‹ŸJ
HﬂBÇÇ]\]J à[H
ã»
HﬂBÇüBÇò€\‹»ŸXë”][\Tô[ô\ï\ôŸ]»^[ô»ŸXë”ô[ô\ï\ôŸ]»À»\ôXÿ]YåMåÇÇÇX€€ú›ùX›‹ä⁄YHKZY⁄HK€›[ùHK‹[€ú»HﬂH
H¬ÇÇBX€€ú€€Kùÿ\õä	’ëQKïŸXë”][\Tô[ô\ï\ôŸ]»\»ôY[à\ôXÿ]Y[ô⁄[ôHô[[›ôY[àåMÃãà\ŸHëQKïŸXë”ô[ô\ï\ôŸ][ôŸ]Hò€›[ùà\ò[Y]\à»[òXõHTïâ»
N¬ÇÇB\›\\ä⁄YZY⁄»ããõ‹[€úÀ€›[ùH
N¬ÇÇB]\Àö\’ŸXë”][\Tô[ô\ï\ôŸ]»HùYN¬ÇÇ_BÇÇYŸ]^\ôJ
H¬ÇÇB\ô]\õà\Àù^\ô\Œ¬ÇÇ_BÇüBÇöYà
\[Ÿà◊’ëQW—Uï””◊◊»OOH	›[ôYö[ôY	»
H¬ÇÇW◊’ëQW—Uï””◊◊Àô\‹]⁄]ô[ù
ô]»›\›€Q]ô[ù
	‹ôY⁄\›\âÀ»]Z[à¬ÇB\ô]ö\⁄[€éàëUíT“S”ãÇ_HH
H
N¬ÇüBÇöYà
\[Ÿà⁄[ô›»OOH	›[ôYö[ôY	»
H¬ÇÇZYà
⁄[ô›Àó◊’ëQW◊»
H¬ÇÇBX€€ú€€Kùÿ\õä	’–TìíSëŒà][\H[ú›[òŸ\»ŸàôYKöú»ôZ[ô»[\‹ùYâ»
N¬ÇÇ_H[ŸH¬ÇÇB]⁄[ô›Àó◊’ëQW◊»HëUíT“S”é¬ÇÇ_BÇüBÇô^‹ù»P—T—ö[ZX’€ôSX\[ôÀY\]X][€ãY‹\ò][€ãY]]ôP[ö[X][€êõ[ô[ŸKY]]ôPõ[ô[ôÀY÷€ôSX\[ôÀ[Qõ‹õX][ÿ^\–€€\\ôK[ÿ^\—\[ÿ^\‘›[ò⁄[ù[òÀ[XöY[ùY⁄[ö[X][€êX›[€ã[ö[X][€ê€\[ö[X][€ìÿY\ã[ö[X][€ìZ^\ã[ö[X][€ìÿöôX›‹õ›\[ö[X][€ï][À\ò–›\ùôK\úò^Pÿ[Y\òK\úõ›“[\ã]X⁄Yö[ô[ŸK]Y[À]Y[–[ò[\Ÿ\ã]Y[–€€ù^]Y[”\›[ô\ã]Y[”ÿY\ã^\“[\ãòX⁄‘⁄YKò\⁄X—\X⁄⁄[ôÀò\⁄X‘⁄Y›”X\ò]⁄YY\⁄õ€ôKõ€€X[íŸ^Yúò[YUòX⁄ÀõﬁãõﬁÀõﬁ“[\ãõﬁŸ[€Y]ûKõﬁ[\ãùYôô\ê]öXù]KùYôô\ëŸ[€Y]ûKùYôô\ëŸ[€Y]ûSÿY\ãû]U\KÿX⁄Kÿ[Y\òKÿ[Y\òR[\ãÿ[ùò\’^\ôKÿ\›[QŸ[€Y]ûKÿ]][õ€P›\ùôLÀ⁄[ô[€ï€ôSX\[ôÀ⁄\ò€QŸ[€Y]ûK€[\—YŸU‹ò\[ôÀ€ÿ⁄À€€‹ã€€‹íŸ^Yúò[YUòX⁄À€€‹ìX[òYŸ[Y[ù€€\ô\‹ŸY\úò^U^\ôK€€\ô\‹ŸY›XôU^\ôK€€\ô\‹ŸY^\ôK€€\ô\‹ŸY^\ôSÿY\ã€€ôQŸ[€Y]ûK€€ú›[ù[QòX›‹ã€€ú›[ù€€‹ëòX›‹ã€€ùõ€À›XôPÿ[Y\òK›XôTôYõX›[€ìX\[ôÀ›XôTôYúòX›[€ìX\[ôÀ›XôU^\ôK›XôU^\ôSÿY\ã›XôUUîôYõX›[€ìX\[ôÀ›XöX–ô^öY\ê›\ùôK›XöX–ô^öY\ê›\ùôLÀ›XöX“[ù\ú€[ù›[òXŸPòX⁄À›[òXŸQúõ€ù›[òXŸQúõ€ùòX⁄À›[òXŸSõ€ôK›\ùôK›\ùôT]›\›€Põ[ô[ôÀ›\›€U€ôSX\[ôÀﬁ[[ô\ëŸ[€Y]ûKﬁ[[ôöXÿ[]L—^\ôK]P\úò^U^\ôK]U^\ôK]U^\ôSÿY\ã]U][ÀX‹ô[Y[ù›[ò⁄[‹X‹ô[Y[ù‹ò\›[ò⁄[‹Yò][ÿY[ô”X[òYŸ\ã\õ‹õX]\›[ò⁄[õ‹õX]\^\ôK]X⁄Yö[ô[ŸK\ôX›[€ò[Y⁄\ôX›[€ò[Y⁄[\ã\ÿ‹ô]R[ù\ú€[ùŸXÿZYõ€ëŸ[€Y]ûK›XõT⁄YK›[QòX›‹ã›€€‹ëòX›‹ã[ò[ZX–€‹U\ÿYŸK[ò[ZX—ò]’\ÿYŸK[ò[ZX‘ôXY\ÿYŸKYŸ\—Ÿ[€Y]ûK[\ŸP›\ùôK\]X[€€\\ôK\]X[\\]X[›[ò⁄[ù[òÀ\]Z\ôX›[ô›[\îôYõX›[€ìX\[ôÀ\]Z\ôX›[ô›[\îôYúòX›[€ìX\[ôÀ][\ã]ô[ù\‹]⁄\ã^ùYQŸ[€Y]ûKö[SÿY\ãõÿ]MêùYôô\ê]öXù]Kõÿ]ÃêùYôô\ê]öXù]Kõÿ]\KõŸÀõŸ—^ãúò[YXùYôô\ï^\ôKúõ€ù⁄YKúù\›[K”ùYôô\ê]öXù]K””K””À‹ôX]\ê€€\\ôK‹ôX]\ë\‹ôX]\ë\]X[€€\\ôK‹ôX]\ë\]X[\‹ôX]\ë\]X[›[ò⁄[ù[òÀ‹ôX]\î›[ò⁄[ù[òÀ‹öY[\ã‹õ›\[ëõÿ]\K[Z\‹\ôSY⁄[Z\‹\ôSY⁄[\ãX€‹ÿZYõ€ëŸ[€Y]ûK[XYŸPö]X\ÿY\ã[XYŸSÿY\ã[XYŸU][À[ò‹ô[Y[ù›[ò⁄[‹[ò‹ô[Y[ù‹ò\›[ò⁄[‹[ú›[òŸYùYôô\ê]öXù]K[ú›[òŸYùYôô\ëŸ[€Y]ûK[ú›[òŸY[ù\õX]ôYùYôô\ã[ú›[òŸYY\⁄[ùMêùYôô\ê]öXù]K[ùÃêùYôô\ê]öXù]K[ùùYôô\ê]öXù]K[ù\K[ù\õX]ôYùYôô\ã[ù\õX]ôYùYôô\ê]öXù]K[ù\ú€[ù[ù\ú€]Q\ÿ‹ô]K[ù\ú€]S[ôX\ã[ù\ú€]T€[€›[ùô\ù›[ò⁄[‹ŸY\›[ò⁄[‹Ÿ^Yúò[YUòX⁄À—]QŸ[€Y]ûK^Y\úÀ\‹–€€\\ôK\‹—\\‹—\]X[€€\\ôK\‹—\]X[\\‹—\]X[›[ò⁄[ù[òÀ\‹‘›[ò⁄[ù[òÀY⁄Y⁄õÿôK[ôK[ôLÀ[ôPò\⁄X”X]\öX[[ôP›\ùôK[ôP›\ùôLÀ[ôQ\⁄YX]\öX[[ôS€‹[ôTŸY€Y[ùÀ[ôX\ëö[\ã[ôX\í[ù\ú€[ù[ôX\ìZ\X\[ôX\ëö[\ã[ôX\ìZ\X\ôX\ô\›ö[\ã[ôX\ìZ\X\[ôX\ëö[\ã[ôX\ìZ\X\ôX\ô\›ö[\ã[ôX\î‘ë–ê€€‹î‹XŸK[ôX\ï€ôSX\[ôÀ[ôX\ïò[úŸô\ãÿY\ãÿY\ï][ÀÿY[ô”X[òYŸ\ã€‹€òŸK€‹[ô‘€ôÀ€‹ô\X][Z[ò[òŸP[Qõ‹õX][Z[ò[òŸQõ‹õX]S’T—KX]\öX[X]\öX[ÿY\ãX]][ÀX]ö^ãX]ö^ÀX]ö^X^\]X][€ãY\⁄Y\⁄ò\⁄X”X]\öX[Y\⁄\X]\öX[Y\⁄\›[òŸSX]\öX[Y\⁄[Xô\ùX]\öX[Y\⁄X]ÿ\X]\öX[Y\⁄õ‹õX[X]\öX[Y\⁄€ô”X]\öX[Y\⁄\⁄Xÿ[X]\öX[Y\⁄›[ô\ôX]\öX[Y\⁄€€ìX]\öX[Z[ë\]X][€ãZ\úõ‹ôYô\X]‹ò\[ôÀZ^‹\ò][€ã][\Põ[ô[ôÀ][\S‹\ò][€ãôX\ô\›ö[\ãôX\ô\›Z\X\[ôX\ëö[\ãôX\ô\›Z\X\ôX\ô\›ö[\ãôX\ô\›Z\X\[ôX\ëö[\ãôX\ô\›Z\X\ôX\ô\›ö[\ãô]]ò[€ôSX\[ôÀô]ô\ê€€\\ôKô]ô\ë\ô]ô\î›[ò⁄[ù[òÀõ–õ[ô[ôÀõ–€€‹î‹XŸKõ’€ôSX\[ôÀõ‹õX[[ö[X][€êõ[ô[ŸKõ‹õX[õ[ô[ôÀõ›\]X[€€\\ôKõ›\]X[\õ›\]X[›[ò⁄[ù[òÀù[Xô\íŸ^Yúò[YUòX⁄ÀÿöôX›—ÿöôX›ÿY\ãÿöôX›‹XŸSõ‹õX[X\ÿ›ZYõ€ëŸ[€Y]ûK€ôQòX›‹ã€ôSZ[ù\–€€ú›[ù[QòX›‹ã€ôSZ[ù\–€€ú›[ù€€‹ëòX›‹ã€ôSZ[ù\—›[QòX›‹ã€ôSZ[ù\—›€€‹ëòX›‹ã€ôSZ[ù\‘‹ò–[QòX›‹ã€ôSZ[ù\‘‹ò–€€‹ëòX›‹ã‹ùŸ‹ò\X–ÿ[Y\òK—î⁄Y›”X\—î€Ÿù⁄Y›”X\TëSQŸ[ô\ò]‹ã]\ú‹X›]ôPÿ[Y\òK[ôK[ôQŸ[€Y]ûK[ôR[\ã⁄[ùY⁄⁄[ùY⁄[\ã⁄[ùÀ⁄[ù”X]\öX[€\ë‹öY[\ã€ZYõ€ëŸ[€Y]ûK‹⁄][€ò[]Y[Àõ‹\ùPö[ô[ôÀõ‹\ùSZ^\ã]XYò]X–ô^öY\ê›\ùôK]XYò]X–ô^öY\ê›\ùôLÀ]X]\õö[€ã]X]\õö[€íŸ^Yúò[YUòX⁄À]X]\õö[€ì[ôX\í[ù\ú€[ùëQ—‘ëQSó‘ë’Ãó—õ‹õX]ëQ‘ë’ÃW—õ‹õX]ëUíT“S”ãë–êQ\X⁄⁄[ôÀë–êQõ‹õX]ë–êR[ùYŸ\ëõ‹õX]ë–êW–T’◊ÃLL—õ‹õX]ë–êW–T’◊ÃLW—õ‹õX]ë–êW–T’◊ÃLó—õ‹õX]ë–êW–T’◊ÃL—õ‹õX]ë–êW–T’◊ÃLûL—õ‹õX]ë–êW–T’◊ÃLûLó—õ‹õX]ë–êW–T’◊Õ—õ‹õX]ë–êW–T’◊Õ^—õ‹õX]ë–êW–T’◊Õ^W—õ‹õX]ë–êW–T’◊ÕûW—õ‹õX]ë–êW–T’◊Õûó—õ‹õX]ë–êW–T’◊ŒW—õ‹õX]ë–êW–T’◊Œó—õ‹õX]ë–êW–T’◊Œ—õ‹õX]ë–êW–î◊—õ‹õX]ë–êW—UÃó—PP◊—õ‹õX]ë–êW‘îï◊ÃêîåW—õ‹õX]ë–êW‘îï◊ÕîåW—õ‹õX]ë–êW‘Ã’◊—W—õ‹õX]ë–êW‘Ã’◊—◊—õ‹õX]ë–êW‘Ã’◊—W—õ‹õX]ë–ë\X⁄⁄[ôÀë–ëõ‹õX]ë–í[ùYŸ\ëõ‹õX]ë–ó–î◊‘“Q”ëQ—õ‹õX]ë–ó–î◊’Sî“Q”ëQ—õ‹õX]ë–ó—UÃW—õ‹õX]ë–ó—UÃó—õ‹õX]ë–ó‘îï◊ÃêîåW—õ‹õX]ë–ó‘îï◊ÕîåW—õ‹õX]ë–ó‘Ã’◊—W—õ‹õX]ë—\X⁄⁄[ôÀë—õ‹õX]ë“[ùYŸ\ëõ‹õX]ò]‘⁄Y\ìX]\öX[ò^Kò^Xÿ\›\ãôX›\ôXSY⁄ôYõ‹õX]ôY[ùYŸ\ëõ‹õX]ôZ[ö\ô€ôSX\[ôÀô[ô\ï\ôŸ]ô\X]‹ò\[ôÀô\XŸT›[ò⁄[‹ô]ô\úŸT›XùòX›\]X][€ãö[ô—Ÿ[€Y]ûK“Q”ëQ‘ëQ—‘ëQSó‘ë’Ãó—õ‹õX]“Q”ëQ‘ëQ‘ë’ÃW—õ‹õX]‘ë–ê€€‹î‹XŸK‘ë–ïò[úŸô\ãÿŸ[ôK⁄Y\ê⁄[öÀ⁄Y\ìXã⁄Y\ìX]\öX[⁄Y›”X]\öX[⁄\K⁄\QŸ[€Y]ûK⁄\T]⁄\U][À⁄‹ù\K⁄Ÿ[]€ã⁄Ÿ[]€í[\ã⁄⁄[õôYY\⁄€›\òŸK‹\ôK‹\ôQŸ[€Y]ûK‹\öXÿ[‹\öXÿ[\õ[€öX‹ÃÀ‹[ôP›\ùôK‹›Y⁄‹›Y⁄[\ã‹ö]K‹ö]SX]\öX[‹ò–[QòX›‹ã‹ò–[Tÿ]\ò]QòX›‹ã‹ò–€€‹ëòX›‹ã›]X–€‹U\ÿYŸK›]X—ò]’\ÿYŸK›]X‘ôXY\ÿYŸK›\ô[–ÿ[Y\òK›ôX[P€‹U\ÿYŸK›ôX[Qò]’\ÿYŸK›ôX[TôXY\ÿYŸK›ö[ô“Ÿ^Yúò[YUòX⁄À›XùòX›\]X][€ã›XùòX›]ôPõ[ô[ôÀ’P“[ôŸ[ù‹XŸSõ‹õX[X\]òZYõ€ëŸ[€Y]ûK^\ôK^\ôSÿY\ã^\ôU][À‹ù\—Ÿ[€Y]ûK‹ù\“€õ›Ÿ[€Y]ûKöX[ô€KöX[ô€Qò[ëò]”[ŸKöX[ô€T›ö\ò]”[ŸKöX[ô€\—ò]”[ŸKXôQŸ[€Y]ûKUìX\[ôÀZ[ùMêùYôô\ê]öXù]KZ[ùÃêùYôô\ê]öXù]KZ[ùùYôô\ê]öXù]KZ[ù€[\YùYôô\ê]öXù]K[öYõ‹õK[öYõ‹õ\—‹õ›\[öYõ‹õ\”Xã[öYõ‹õ\’][À[ú⁄Y€ôYû]U\K[ú⁄Y€ôY[ùç\K[ú⁄Y€ôY[ùNNNU\K[ú⁄Y€ôY[ù\K[ú⁄Y€ôY⁄‹ù\K[ú⁄Y€ôY⁄‹ùMMLU\K[ú⁄Y€ôY⁄‹ù\Kî”T⁄Y›”X\ôX›‹åãôX›‹åÀôX›‹çôX›‹íŸ^Yúò[YUòX⁄ÀöY[’^\ôKŸXë”—ô[ô\ï\ôŸ]ŸXë”\úò^Tô[ô\ï\ôŸ]ŸXë”€€‹ô[ò]Tﬁ\›[KŸXë”›XôTô[ô\ï\ôŸ]ŸXë”][\Tô[ô\ï\ôŸ]ÀŸXë”ô[ô\ï\ôŸ]ŸXë”ô[ô\ô\ãŸXë”][ÀŸXë‘P€€‹ô[ò]Tﬁ\›[K⁄\ôYúò[YQŸ[€Y]ûK‹ò\\õ›[ô[ô[ôÀô\õ–›\ùò]\ôQ[ô[ôÀô\õ—òX›‹ãô\õ‘€‹Q[ô[ôÀô\õ‘›[ò⁄[‹‹ôX]Pÿ[ùò\—[[Y[ùN¬