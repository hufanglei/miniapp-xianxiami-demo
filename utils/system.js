
let SYSTEM_INFO = uni.getSystemInfoSync()

export const getStatusBarHeight = ()=> SYSTEM_INFO.statusBarHeight || 15;

export const getTitleBarHight = ()=>{
	if(uni.getMenuButtonBoundingClientRect){
		let { top, height } = uni.getMenuButtonBoundingClientRect();
		return height + (top - getStatusBarHeight()) *2 ;
	} else {
		return 40;
	}
}

export const getNavBarHeight = ()=> getStatusBarHeight() + getTitleBarHight()

export const getLeftIconLeft = ()=>{
	// #ifdef MP-TOUTIAO
	let { leftIcon:{left, width} } = tt.getMenuButtonBoundingClientRect()
	return left + parseInt(width);
	// #endif
	// #ifndef MP-TOUTIAO
	return 0
	// #endif
}