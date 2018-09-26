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
    if (_.isArray(options)) {
        options = { containers: options };
    }
    else if (_.isFunction(options)) {
        options = { container: options };
    }
    return function wrapper(WrappedComponent) {
        var ConnectedComponent = WrappedComponent;
        if (options.selector) {
            var pure = _.isBoolean(options.pure) ? options.pure : true;
            ConnectedComponent = react_selectr_1.default(options.selector, { pure: pure })(ConnectedComponent);
        }
        if (options.shouldComponentUpdate) {
            ConnectedComponent = react_should_component_update_1.default.apply(void 0, _.castArray(options.shouldComponentUpdate))(ConnectedComponent);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxZQUFZOztBQUVaLDBCQUE0QjtBQUM1QiwrQ0FBb0M7QUFDcEMsK0VBQWtFO0FBQ2xFLHFFQUFzRDtBQUV0RCxhQUFhO0FBRWIsU0FBUyxPQUFPLENBQUcsT0FBaUI7SUFBakIsd0JBQUEsRUFBQSxZQUFpQjtJQUVsQyxJQUFLLENBQUMsQ0FBQyxPQUFPLENBQUcsT0FBTyxDQUFFLEVBQUc7UUFDM0IsT0FBTyxHQUFHLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDO0tBQ25DO1NBQU0sSUFBSyxDQUFDLENBQUMsVUFBVSxDQUFHLE9BQU8sQ0FBRSxFQUFHO1FBQ3JDLE9BQU8sR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsQ0FBQztLQUNsQztJQUVELE9BQU8sU0FBUyxPQUFPLENBQUcsZ0JBQWdCO1FBRXhDLElBQUksa0JBQWtCLEdBQUcsZ0JBQWdCLENBQUM7UUFFMUMsSUFBSyxPQUFPLENBQUMsUUFBUSxFQUFHO1lBQ3RCLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUcsT0FBTyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEUsa0JBQWtCLEdBQUcsdUJBQU8sQ0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBRSxDQUFFLGtCQUFrQixDQUFFLENBQUM7U0FDbkY7UUFFRCxJQUFLLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRztZQUNuQyxrQkFBa0IsR0FBRyx1Q0FBcUIsZUFBTSxDQUFDLENBQUMsU0FBUyxDQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBRSxFQUFJLGtCQUFrQixDQUFFLENBQUM7U0FDdkg7UUFFRCxJQUFLLE9BQU8sQ0FBQyxVQUFVLEVBQUc7WUFDeEIsa0JBQWtCLEdBQUcsa0NBQWMsZUFBTSxPQUFPLENBQUMsVUFBVSxFQUFJLGtCQUFrQixDQUFFLENBQUM7U0FDckY7YUFBTSxJQUFLLE9BQU8sQ0FBQyxTQUFTLEVBQUc7WUFDOUIsa0JBQWtCLEdBQUcsa0NBQWMsQ0FBRyxPQUFPLENBQUMsU0FBUyxDQUFFLENBQUUsa0JBQWtCLENBQUUsQ0FBQztTQUNqRjtRQUVELE9BQU8sa0JBQWtCLENBQUM7SUFFNUIsQ0FBQyxDQUFDO0FBRUosQ0FBQztBQUVELFlBQVk7QUFFWixrQkFBZSxPQUFPLENBQUMifQ==