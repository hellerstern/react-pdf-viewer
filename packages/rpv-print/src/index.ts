/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

export { default as PrintIcon } from './PrintIcon';
import printPlugin from './printPlugin';

export default printPlugin;

// Types
export type { PrintProps } from './Print';