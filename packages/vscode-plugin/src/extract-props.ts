import reactPlugin from '@structured-types/react-plugin';
import propTypesPlugin from '@structured-types/prop-types-plugin';
import { DocsOptions, parseFiles } from '@structured-types/api';
import {
  propsToDocumentation,
  apiDocsConfig,
} from '@structured-types/doc-page';

export const extractProps = (
  fileName: string,
  options?: DocsOptions,
): ReturnType<typeof propsToDocumentation> => {
  const props = parseFiles([fileName], {
    collectFilePath: true,
    collectHelpers: false,
    collectLinesOfCode: true,
    plugins: [propTypesPlugin, reactPlugin],
    ...options,
  });
  const { config = {} } = apiDocsConfig(fileName) || {};
  const nodes = propsToDocumentation(props, config);

  return nodes;
};
