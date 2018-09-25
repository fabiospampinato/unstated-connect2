"use strict";
/* IMPORT */
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var react_selectr_1 = require("react-selectr");
var react_should_component_update_1 = require("react-should-component-update");
var unstated_with_containers_1 = require("unstated-with-containers");
/* CONNECT */
function connect(options) {
    if (options === void 0) { options = {}; }
    return function wrapper(WrappedComponent) {
        var ConnectedComponent = WrappedComponent;
        if (options.containers) {
            ConnectedComponent = unstated_with_containers_1.default.apply(void 0, options.containers)(ConnectedComponent);
        }
        else if (options.container) {
            ConnectedComponent = unstated_with_containers_1.default(options.container)(ConnectedComponent);
        }
        if (options.shouldComponentUpdate) {
            ConnectedComponent = react_should_component_update_1.default.apply(void 0, _.castArray(react_should_component_update_1.default))(ConnectedComponent);
        }
        if (options.selector) {
            var pure = _.isBoolean(options.pure) ? options.pure : true;
            ConnectedComponent = react_selectr_1.default(options.selector, { pure: pure })(ConnectedComponent);
        }
        return ConnectedComponent;
    };
}
/* EXPORT */
exports.default = connect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxZQUFZOztBQUVaLDBCQUE0QjtBQUM1QiwrQ0FBb0M7QUFDcEMsK0VBQWtFO0FBQ2xFLHFFQUFzRDtBQUV0RCxhQUFhO0FBRWIsU0FBUyxPQUFPLENBQUcsT0FBaUI7SUFBakIsd0JBQUEsRUFBQSxZQUFpQjtJQUVsQyxPQUFPLFNBQVMsT0FBTyxDQUFHLGdCQUFnQjtRQUV4QyxJQUFJLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDO1FBRTFDLElBQUssT0FBTyxDQUFDLFVBQVUsRUFBRztZQUN4QixrQkFBa0IsR0FBRyxrQ0FBYyxlQUFNLE9BQU8sQ0FBQyxVQUFVLEVBQUksa0JBQWtCLENBQUUsQ0FBQztTQUNyRjthQUFNLElBQUssT0FBTyxDQUFDLFNBQVMsRUFBRztZQUM5QixrQkFBa0IsR0FBRyxrQ0FBYyxDQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUUsQ0FBRSxrQkFBa0IsQ0FBRSxDQUFDO1NBQ2pGO1FBRUQsSUFBSyxPQUFPLENBQUMscUJBQXFCLEVBQUc7WUFDbkMsa0JBQWtCLEdBQUcsdUNBQXFCLGVBQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBRyx1Q0FBcUIsQ0FBRSxFQUFJLGtCQUFrQixDQUFFLENBQUM7U0FDL0c7UUFFRCxJQUFLLE9BQU8sQ0FBQyxRQUFRLEVBQUc7WUFDdEIsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBRyxPQUFPLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNoRSxrQkFBa0IsR0FBRyx1QkFBTyxDQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFFLENBQUUsa0JBQWtCLENBQUUsQ0FBQztTQUNuRjtRQUVELE9BQU8sa0JBQWtCLENBQUM7SUFFNUIsQ0FBQyxDQUFDO0FBRUosQ0FBQztBQUVELFlBQVk7QUFFWixrQkFBZSxPQUFPLENBQUMifQ==