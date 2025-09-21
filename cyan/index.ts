import { GlobType, StartTemplateWithLambda } from '@atomicloud/cyan-sdk';

StartTemplateWithLambda(async (i, d) => {
  // platform, service, tiltport,  port, platformtitle, titleps, upperps

  const platform = await i.text('Platform', 'platform', 'LPSM Service Tree Platform');
  const service = await i.text('Service', 'service', 'LPSM Service Tree Service');
  const tiltport = await i.text('Tilt Port', 'tiltport', 'Tilt Port');
  const port = await i.text('Port', 'port', 'Port API server listen on for development');

  const platformtitle = `${platform.charAt(0).toUpperCase() + platform.slice(1)}`;
  const servicetitle = `${service.charAt(0).toUpperCase() + service.slice(1)}`;

  const titleps = `${platformtitle} ${servicetitle}`;
  const upperps = `${platform.toUpperCase()}_${service.toUpperCase()}`;

  const vars = { platform, service, tiltport, port, platformtitle, titleps, upperps };
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
