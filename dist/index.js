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
        if (options.selector) {
            var pure = _.isBoolean(options.pure) ? options.pure : true;
            ConnectedComponent = react_selectr_1.default(options.selector, { pure: pure })(ConnectedComponent);
        }
        if (options.shouldComponentUpdate) {
            ConnectedComponent = react_should_component_update_1.default.apply(void 0, _.castArray(react_should_component_update_1.default))(ConnectedComponent);
        }
        if (options.containers) {
            ConnectedComponent = unstated_with_containers_1.default.apply(void 0, options.containers)(ConnectedComponent);
        }
        else if (options.container) {
            ConnectedComponent = unstated_with_containers_1.default(options.container)(ConnectedComponent);
        }
        return ConnectedComponent;
    };
}
/* EXPORT */
exports.default = connect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxZQUFZOztBQUVaLDBCQUE0QjtBQUM1QiwrQ0FBb0M7QUFDcEMsK0VBQWtFO0FBQ2xFLHFFQUFzRDtBQUV0RCxhQUFhO0FBRWIsU0FBUyxPQUFPLENBQUcsT0FBaUI7SUFBakIsd0JBQUEsRUFBQSxZQUFpQjtJQUVsQyxPQUFPLFNBQVMsT0FBTyxDQUFHLGdCQUFnQjtRQUV4QyxJQUFJLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDO1FBRTFDLElBQUssT0FBTyxDQUFDLFFBQVEsRUFBRztZQUN0QixJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hFLGtCQUFrQixHQUFHLHVCQUFPLENBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUUsQ0FBRSxrQkFBa0IsQ0FBRSxDQUFDO1NBQ25GO1FBRUQsSUFBSyxPQUFPLENBQUMscUJBQXFCLEVBQUc7WUFDbkMsa0JBQWtCLEdBQUcsdUNBQXFCLGVBQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBRyx1Q0FBcUIsQ0FBRSxFQUFJLGtCQUFrQixDQUFFLENBQUM7U0FDL0c7UUFFRCxJQUFLLE9BQU8sQ0FBQyxVQUFVLEVBQUc7WUFDeEIsa0JBQWtCLEdBQUcsa0NBQWMsZUFBTSxPQUFPLENBQUMsVUFBVSxFQUFJLGtCQUFrQixDQUFFLENBQUM7U0FDckY7YUFBTSxJQUFLLE9BQU8sQ0FBQyxTQUFTLEVBQUc7WUFDOUIsa0JBQWtCLEdBQUcsa0NBQWMsQ0FBRyxPQUFPLENBQUMsU0FBUyxDQUFFLENBQUUsa0JBQWtCLENBQUUsQ0FBQztTQUNqRjtRQUVELE9BQU8sa0JBQWtCLENBQUM7SUFFNUIsQ0FBQyxDQUFDO0FBRUosQ0FBQztBQUVELFlBQVk7QUFFWixrQkFBZSxPQUFPLENBQUMifQ==