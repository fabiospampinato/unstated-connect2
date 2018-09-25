# Unstated Connect

Easily connect your containers to components, without sacrificing performance.

This library basically combines together [react-selectr](https://github.com/fabiospampinato/react-selectr), [react-should-component-update](https://github.com/fabiospampinato/react-should-component-update) and [unstated-with-containers](https://github.com/fabiospampinato/unstated-with-containers) together.

## Install

```sh
npm install --save unstated-connect2
```

## API

```ts
connect ({
  container?: UnstatedContainer, // Single unstated container to connect
  containers?: UnstatedContainer[], // Array of unstated containers to connect
  shouldComponentUpdate?: rule | rule[], // Rule/rules to pass to `react-should-component-update`
  selector?: Function, // Selector function to pass to `react-selectr`
  pure?: false // Option to pass to `react-selectr`
})
```

## Usage

```ts
import connect from 'unstated-connect2';
import MyContainer from './my_container';
import MyOtherContainer from './my_other_container';
import MyComponent from './my_component';

// The following code will:
// 1. Pass the value of `container` to `unstated-with-containers`, ensuring it gets connected
// 2. Pass the value of `shouldComponentUpdate` to `react-should-component-update`, ensuring unnecessary selections and re-renders are reduced
// 3. Pass the value of `selector` to `react-selectr`, ensuring MyComponent will only receive the selected props, minimizing unecessary re-renders

connect ({
  container: MyContainer,
  shouldComponentUpdate: 'path.to.relevant.prop',
  selector: ({ container }) => {
    foo: container.foo,
    bar: container.getBar ()
  }
})( MyComponent )

// If all you need is subscribing to one or multiple containers, you can simply write:

connect ( MyContainer )( MyComponent );
connect ( [MyContainer, MyOtherContainer] )( MyComponent );
```

## Related

- **[react-selectr](https://github.com/fabiospampinato/react-selectr)**: Simple selector for React components.
- **[react-should-component-update](https://github.com/fabiospampinato/react-should-component-update)**: Higher-Order Component for adding `shouldComponentUpdate` to components. It supports easy to set shortcuts.
- **[unstated-with-containers](https://github.com/fabiospampinato/unstated-with-containers)**: Higher-Order Component for providing unstated containers to a component.
- **[unstated-suspense](https://github.com/fabiospampinato/unstated-suspense)**: Unstated container with support for suspending/unsuspending updates propagation.
- **[unstated-compose-suspense](https://github.com/fabiospampinato/unstated-compose-suspense)**: unstated-compose containers with support for suspending/unsuspending updates propagation.

## License

MIT © Fabio Spampinato
