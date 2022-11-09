module.exports = ({ config }) => {
  const rules = config.module.rules;

  const svgLoader = rules[rules.length - 1].oneOf.find(rule => 
    rule.test instanceof RegExp && rule.test.test('.svg')
  )

  svgLoader.use = ['@svgr/webpack']

  return config;
}
