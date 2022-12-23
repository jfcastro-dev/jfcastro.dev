import { createGlobalStyle } from '@xstyled/styled-components';

import woff2 from '@react95/core/cjs/GlobalStyle/font/MS-Sans-Serif.woff2';
import woff from '@react95/core/cjs/GlobalStyle/font/MS-Sans-Serif.woff';
import ttf from '@react95/core/cjs/GlobalStyle/font/MS-Sans-Serif.ttf';
import eot from '@react95/core/cjs/GlobalStyle/font/MS-Sans-Serif.eot';
import videowoff2 from '@react95/core/cjs/GlobalStyle/font/React95Video-Numbers.woff2';
import videowoff from '@react95/core/cjs/GlobalStyle/font/React95Video-Numbers.woff';
import videottf from '@react95/core/cjs/GlobalStyle/font/React95Video-Numbers.ttf';
import videoeot from '@react95/core/cjs/GlobalStyle/font/React95Video-Numbers.eot';

/**
 * This is a fork of what is in the node modules - this was not supporting themes.
 * I just needed to change the background color
 */
import { scrollbars } from '@react95/core/cjs/GlobalStyle/Scrollbar';
import Cursor from '@react95/core/cjs/Cursor/Cursor';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MS Sans Serif';
    src: url('${eot}');
    src: url('${woff2}') format('woff2'),
         url('${woff}') format('woff'),
         url('${ttf}') format('truetype'),
         url('${eot}?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'React95Video-Numbers';
    src: url('${videoeot}');
    src: url('${videowoff2}') format('woff2'),
         url('${videowoff}') format('woff'),
         url('${videottf}') format('truetype'),
         url('${videoeot}?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }
  body {
    background-color: #3f5baf;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: materialText;
  }
  a {
    color: anchor;
  }
  a:visited {
    color: anchorVisited;
  }
  * {
    font-family: 'MS Sans Serif';
    box-sizing: border-box;
  }
  // scrollbar
  ${scrollbars}
  html, .auto, *       { ${Cursor.Auto} }
  .default             { ${Cursor.Auto} }
  .none                { ${Cursor.None} }
  .help                { ${Cursor.Help} }
  .pointer, :any-link  { ${Cursor.Pointer} }
  .progress            { ${Cursor.Progress} }
  .wait                { ${Cursor.Wait} }
  .crosshair           { ${Cursor.Crosshair} }
  .text                { ${Cursor.Text} }
  .vertical-text       { ${Cursor.VerticalText} }
  .alias               { ${Cursor.Alias} }
  .copy                { ${Cursor.Copy} }
  .move                { ${Cursor.Move} }
  .no-drop             { ${Cursor.NoDrop} }
  .not-allowed         { ${Cursor.NotAllowed} }
  .grab                { ${Cursor.Grab} }
  .grabbing            { ${Cursor.Grabbing} }
  .col-resize          { ${Cursor.ColResize} }
  .row-resize          { ${Cursor.RowResize} }
  .n-resize            { ${Cursor.NResize} }
  .e-resize            { ${Cursor.EResize} }
  .s-resize            { ${Cursor.SResize} }
  .w-resize            { ${Cursor.WResize} }
  .ns-resize           { ${Cursor.NsResize} }
  .ew-resize           { ${Cursor.EwResize} }
  .ne-resize           { ${Cursor.NeResize} }
  .nw-resize           { ${Cursor.NwResize} }
  .se-resize           { ${Cursor.SeResize} }
  .sw-resize           { ${Cursor.SwResize} }
  .nesw-resize         { ${Cursor.NeswResize} }
  .nwse-resize         { ${Cursor.NwseResize} }
  .zoom-in             { ${Cursor.ZoomIn} }
  .zoom-out            { ${Cursor.ZoomOut} }
`;

const DarkStyle = createGlobalStyle`
  @font-face {
    font-family: 'MS Sans Serif';
    src: url('${eot}');
    src: url('${woff2}') format('woff2'),
         url('${woff}') format('woff'),
         url('${ttf}') format('truetype'),
         url('${eot}?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'React95Video-Numbers';
    src: url('${videoeot}');
    src: url('${videowoff2}') format('woff2'),
         url('${videowoff}') format('woff'),
         url('${videottf}') format('truetype'),
         url('${videoeot}?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }
  body {
    background-color: black;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: materialText;
  }
  a {
    color: anchor;
  }
  a:visited {
    color: anchorVisited;
  }
  * {
    font-family: 'MS Sans Serif';
    box-sizing: border-box;
  }
  // scrollbar
  ${scrollbars}
  html, .auto, *       { ${Cursor.Auto} }
  .default             { ${Cursor.Auto} }
  .none                { ${Cursor.None} }
  .help                { ${Cursor.Help} }
  .pointer, :any-link  { ${Cursor.Pointer} }
  .progress            { ${Cursor.Progress} }
  .wait                { ${Cursor.Wait} }
  .crosshair           { ${Cursor.Crosshair} }
  .text                { ${Cursor.Text} }
  .vertical-text       { ${Cursor.VerticalText} }
  .alias               { ${Cursor.Alias} }
  .copy                { ${Cursor.Copy} }
  .move                { ${Cursor.Move} }
  .no-drop             { ${Cursor.NoDrop} }
  .not-allowed         { ${Cursor.NotAllowed} }
  .grab                { ${Cursor.Grab} }
  .grabbing            { ${Cursor.Grabbing} }
  .col-resize          { ${Cursor.ColResize} }
  .row-resize          { ${Cursor.RowResize} }
  .n-resize            { ${Cursor.NResize} }
  .e-resize            { ${Cursor.EResize} }
  .s-resize            { ${Cursor.SResize} }
  .w-resize            { ${Cursor.WResize} }
  .ns-resize           { ${Cursor.NsResize} }
  .ew-resize           { ${Cursor.EwResize} }
  .ne-resize           { ${Cursor.NeResize} }
  .nw-resize           { ${Cursor.NwResize} }
  .se-resize           { ${Cursor.SeResize} }
  .sw-resize           { ${Cursor.SwResize} }
  .nesw-resize         { ${Cursor.NeswResize} }
  .nwse-resize         { ${Cursor.NwseResize} }
  .zoom-in             { ${Cursor.ZoomIn} }
  .zoom-out            { ${Cursor.ZoomOut} }
`;
export {GlobalStyle,DarkStyle};