import { NavigationDelegate } from './NavigationDelegate';
const navigationDelegate = new NavigationDelegate();

export const Navigation = navigationDelegate;
export * from './events/EventsRegistry';
export * from './adapters/Constants';
export * from './interfaces/ComponentEvents';
export * from './interfaces/Events';
export * from './interfaces/EventSubscription';
export * from './interfaces/Layout';
export * from './interfaces/Options';
export * from './interfaces/NavigationComponent';
export * from './interfaces/NavigationComponentProps';
export * from './interfaces/NavigationComponentListener';
export * from './interfaces/NavigationFunctionComponent';
export * from './interfaces/CommandName';
export * from './interfaces/Processors';
export * from './interfaces/ProcessorSubscription';
