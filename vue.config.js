'use strict'
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const name = 'vue mobile'
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV)
const IS_DEV = ["development", "dev"].includes(process.env.NODE_ENV)
const port = process.env.port || 9527 // dev port

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: IS_DEV,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: config => {
    config.name = name
    config.plugins.push(
      new SkeletonWebpackPlugin({
        webpackConfig: {
          entry: {
            app: resolve('./src/skeleton/entrySkeleton.js'),
          },
        },
        minimize: true,
        quiet: true,
        router: {
          routes: [
            { path: '/', skeletonId: 'main-skeleton' }
          ],
        }
      })
    )
  },
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 移除 preload 插件
    config.plugins.delete('preload')
    if (IS_PROD) {
      config.optimization
        .splitChunks({
          cacheGroups: {
            common: {
              name: "chunk-common",
              chunks: "initial",
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 1,
              reuseExistingChunk: true,
              enforce: true
            },
            vendors: {
              name: "chunk-vendors",
              test: /[\\/]node_modules[\\/]/,
              chunks: "initial",
              priority: 2,
              reuseExistingChunk: true,
              enforce: true
            },
            vant: {
              name: "chunk-vant",
              test: /[\\/]node_modules[\\/]vant[\\/]/,
              chunks: "all",
              priority: 5,
              reuseExistingChunk: true,
              enforce: true
            },
            echarts: {
              name: "chunk-echarts",
              test: /[\\/]node_modules[\\/](vue-)?echarts[\\/]/,
              chunks: "all",
              priority: 4,
              reuseExistingChunk: true,
              enforce: true
            }
          }
        })
      config.optimization.runtimeChunk('single')
    }
    return config
  }
}
