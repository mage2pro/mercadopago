// 2017-04-24
define(['Df_StripeClone/main'], function(parent) {'use strict';
/** 2017-09-06 @uses Class::extend() https://github.com/magento/magento2/blob/2.2.0-rc2.3/app/code/Magento/Ui/view/base/web/js/lib/core/class.js#L106-L140 */	
return parent.extend({
	/**
	 * 2017-04-24
	 * The bank card network codes: https://mage2.pro/t/2647
	 * @returns {String[]}
	 */
	getCardTypes: function() {return ['VI', 'MC', 'AE', 'JCB', 'DI', 'DN'];},
    /**
	 * 2017-04-24
	 * @override
	 * @see Df_StripeClone/main::tokenCheckStatus()
	 * https://github.com/mage2pro/core/blob/2.7.9/StripeClone/view/frontend/web/main.js?ts=4#L8-L15
	 * @used-by Df_StripeClone/main::placeOrder()
	 * https://github.com/mage2pro/core/blob/2.7.9/StripeClone/view/frontend/web/main.js?ts=4#L75
	 * @param {*} status
	 * @returns {Boolean}
	 */
	tokenCheckStatus: function(status) {return null;},
    /**
	 * 2017-04-24
	 * @override
	 * @see https://github.com/mage2pro/core/blob/2.0.11/StripeClone/view/frontend/web/main.js?ts=4#L21-L29
	 * @used-by Df_StripeClone/main::placeOrder()
	 * https://github.com/mage2pro/core/blob/2.7.9/StripeClone/view/frontend/web/main.js?ts=4#L73
	 * @param {Object} params
	 * @param {Function} callback
	 */
	tokenCreate: function(params, callback) {},
    /**
	 * 2017-04-24
	 * @override
	 * @see https://github.com/mage2pro/core/blob/2.0.11/StripeClone/view/frontend/web/main.js?ts=4#L31-L39
	 * @used-by placeOrder()
	 * @param {Object|Number} status
	 * @param {Object} resp
	 * @returns {String}
	 */
	tokenErrorMessage: function(status, resp) {return null;},
    /**
	 * 2017-04-24
	 * @override
	 * @see https://github.com/mage2pro/core/blob/2.0.11/StripeClone/view/frontend/web/main.js?ts=4#L41-L48
	 * @used-by placeOrder()
	 * @param {Object} resp
	 * @returns {String}
	 */
	tokenFromResponse: function(resp) {return null;},
    /**
	 * 2017-04-24
	 * @override
	 * @see Df_StripeClone/main::tokenParams()
	 * https://github.com/mage2pro/core/blob/2.7.9/StripeClone/view/frontend/web/main.js?ts=4#L42-L48
	 * @used-by Df_StripeClone/main::placeOrder()
	 * https://github.com/mage2pro/core/blob/2.7.9/StripeClone/view/frontend/web/main.js?ts=4#L73
	 * @returns {Object}
	 */
	tokenParams: function() {return null;}
});});