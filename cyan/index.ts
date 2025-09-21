import { GlobType, StartTemplateWithLambda } from '@atomicloud/cyan-sdk';

StartTemplateWithLambda(async (i, d) => {
  // platform, service

  const vars = {};
  return {
    processors: [
      {
        name: 'cyan/default',
        files: [
          {
            root: 'templates',
            glob: '**/*.*',
            type: GlobType.Template,
            exclude: [],
          },
        ],
        config: {
          vars,
          parser: {
            varSyntax: [
              ['dn___', '___'],
              ['// dn___', '___'],
              ['# <%', '%>'],
            ],
          },
        },
      },
    ],
    plugins: [],
  };
});
