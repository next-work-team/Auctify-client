/**
 * SVGR 타입 선언
 * any 타입 -> Rect.FC 타입
 */
declare module '*.svg' {
  import { FC, SVGProps, SVGSVGElement } from 'react';

  const ReactComponent: FC<SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}
