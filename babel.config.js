module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV)

  const presets = [
    "@babel/preset-typescript",
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        development: !api.env("production"),
        runtime: "automatic",
      },
    ],
  ]
  const plugins = []

  if (!api.env("production")) {
    plugins.push("react-refresh/babel")
  }

  return {
    presets,
    plugins,
  }
}
