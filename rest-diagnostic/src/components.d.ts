/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppRoot {}
  interface ComponentIcon {
    'responseStatus': number;
  }
  interface DiagnoseItem {}
  interface FileUpload {}
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
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'component-icon': HTMLComponentIconElement;
    'diagnose-item': HTMLDiagnoseItemElement;
    'file-upload': HTMLFileUploadElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot {}
  interface ComponentIcon {
    'responseStatus'?: number;
  }
  interface DiagnoseItem {}
  interface FileUpload {
    'onUpoadCompleteEvent'?: (event: CustomEvent<string | ArrayBuffer>) => void;
  }

  interface IntrinsicElements {
    'app-root': AppRoot;
    'component-icon': ComponentIcon;
    'diagnose-item': DiagnoseItem;
    'file-upload': FileUpload;
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
    }
  }
}


