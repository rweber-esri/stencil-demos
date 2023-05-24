/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LayoutList {
        /**
          * The number of columns when "layout" is "grid". Defaults to 1.
         */
        "columns"?: number;
        "direction": 'ltr' | 'rtl';
        /**
          * The list layout. Can be either "list" or "grid"
         */
        "layout": 'list' | 'grid';
    }
    interface LayoutListItem {
    }
}
declare global {
    interface HTMLLayoutListElement extends Components.LayoutList, HTMLStencilElement {
    }
    var HTMLLayoutListElement: {
        prototype: HTMLLayoutListElement;
        new (): HTMLLayoutListElement;
    };
    interface HTMLLayoutListItemElement extends Components.LayoutListItem, HTMLStencilElement {
    }
    var HTMLLayoutListItemElement: {
        prototype: HTMLLayoutListItemElement;
        new (): HTMLLayoutListItemElement;
    };
    interface HTMLElementTagNameMap {
        "layout-list": HTMLLayoutListElement;
        "layout-list-item": HTMLLayoutListItemElement;
    }
}
declare namespace LocalJSX {
    interface LayoutList {
        /**
          * The number of columns when "layout" is "grid". Defaults to 1.
         */
        "columns"?: number;
        "direction"?: 'ltr' | 'rtl';
        /**
          * The list layout. Can be either "list" or "grid"
         */
        "layout"?: 'list' | 'grid';
    }
    interface LayoutListItem {
    }
    interface IntrinsicElements {
        "layout-list": LayoutList;
        "layout-list-item": LayoutListItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "layout-list": LocalJSX.LayoutList & JSXBase.HTMLAttributes<HTMLLayoutListElement>;
            "layout-list-item": LocalJSX.LayoutListItem & JSXBase.HTMLAttributes<HTMLLayoutListItemElement>;
        }
    }
}