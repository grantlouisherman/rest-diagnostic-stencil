/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  FormEvent,
  Response,
} from './components/item/item';

export namespace Components {
  interface AppRoot {}
  interface ComponentIcon {
    'responseStatus': number;
  }
  interface DiagnoseItem {
    'checkbox': string;
    'fileId': string;
    'headers': any;
    'method': string;
    'response': Response;
    'url': string;
  }
  interface FileUpload {}
  interface IconLoader {}
}

declare global {


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLComponentIconElement extends Components.ComponentIcon, HTMLStencilElement {}
  var HTMLComponentIconElement: {
    prototype: HTMLComponentIconElement;
    new (): HTMLComponentIconElement;
  };

  interface HTMLDiagnoseItemElement extends Components.DiagnoseItem, HTMLStencilElement {}
  var HTMLDiagnoseItemElement: {
    prototype: HTMLDiagnoseItemElement;
    new (): HTMLDiagnoseItemElement;
  };

  interface HTMLFileUploadElement extends Components.FileUpload, HTMLStencilElement {}
  var HTMLFileUploadElement: {
    prototype: HTMLFileUploadElement;
    new (): HTMLFileUploadElement;
  };

  interface HTMLIconLoaderElement extends Components.IconLoader, HTMLStencilElement {}
  var HTMLIconLoaderElement: {
    prototype: HTMLIconLoaderElement;
    new (): HTMLIconLoaderElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'component-icon': HTMLComponentIconElement;
    'diagnose-item': HTMLDiagnoseItemElement;
    'file-upload': HTMLFileUploadElement;
    'icon-loader': HTMLIconLoaderElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot {}
  interface ComponentIcon {
    'responseStatus'?: number;
  }
  interface DiagnoseItem {
    'checkbox'?: string;
    'fileId'?: string;
    'headers'?: any;
    'method'?: string;
    'onFormChanged'?: (event: CustomEvent<FormEvent>) => void;
    'response'?: Response;
    'url'?: string;
  }
  interface FileUpload {
    'onUpoadCompleteEvent'?: (event: CustomEvent<string | ArrayBuffer>) => void;
  }
  interface IconLoader {}

  interface IntrinsicElements {
    'app-root': AppRoot;
    'component-icon': ComponentIcon;
    'diagnose-item': DiagnoseItem;
    'file-upload': FileUpload;
    'icon-loader': IconLoader;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'component-icon': LocalJSX.ComponentIcon & JSXBase.HTMLAttributes<HTMLComponentIconElement>;
      'diagnose-item': LocalJSX.DiagnoseItem & JSXBase.HTMLAttributes<HTMLDiagnoseItemElement>;
      'file-upload': LocalJSX.FileUpload & JSXBase.HTMLAttributes<HTMLFileUploadElement>;
      'icon-loader': LocalJSX.IconLoader & JSXBase.HTMLAttributes<HTMLIconLoaderElement>;
    }
  }
}


