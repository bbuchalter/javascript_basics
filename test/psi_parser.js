var psiResults;

psiResults = {
  "kind": "pagespeedonline#result",
  "id": "http://www.tommyjohn.com/",
  "responseCode": 200,
  "title": "The Best Mens Underwear, Undershirts & Socks | TOMMY JOHN",
  "score": 73,
  "pageStats": {
    "numberResources": 139,
    "numberHosts": 40,
    "totalRequestBytes": "24277",
    "numberStaticResources": 62,
    "htmlResponseBytes": "90687",
    "cssResponseBytes": "340617",
    "imageResponseBytes": "1036886",
    "javascriptResponseBytes": "3090369",
    "otherResponseBytes": "81269",
    "numberJsResources": 43,
    "numberCssResources": 5
  },
  "formattedResults": {
    "locale": "en_US",
    "ruleResults": {
      "AvoidLandingPageRedirects": {
        "localizedRuleName": "Avoid landing page redirects",
        "ruleImpact": 0.0,
        "urlBlocks": [
          {
            "header": {
              "format": "Your page has no redirects. Learn more about avoiding landing page redirects.",
              "args": [
                {
                  "type": "HYPERLINK",
                  "value": "https://developers.google.com/speed/docs/insights/AvoidRedirects"
                }
              ]
            }
          }
        ]
      },
      "EnableGzipCompression": {
        "localizedRuleName": "Enable compression",
        "ruleImpact": 2.1403,
        "urlBlocks": [
          {
            "header": {
              "format": "Compressing resources with gzip or deflate can reduce the number of bytes sent over the network."
            }
          },
          {
            "header": {
              "format": "Enable compression for the following resources to reduce their transfer size by $2 ($3 reduction).",
              "args": [
                {
                  "type": "HYPERLINK",
                  "value": "https://developers.google.com/speed/docs/insights/EnableCompression"
                },
                {
                  "type": "BYTES",
                  "value": "20.4KiB"
                },
                {
                  "type": "PERCENTAGE",
                  "value": "61%"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "Compressing $1 could save $2 ($3 reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://doug1izaerwt3.cloudfront.net/8c3c6290074ae5fe6b7b9248865ba7f6472a3e49.1.js"
                    },
                    {
                      "type": "BYTES",
                      "value": "12.3KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "60%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing $1 could save $2 ($3 reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://assets.tapad.com/tapestry/tapestry-0.7.min.js"
                    },
                    {
                      "type": "BYTES",
                      "value": "5.2KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "62%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Compressing $1 could save $2 ($3 reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://f.monetate.net/trk/4/s/a-fdce2195/p/tommyjohnwear.com/403663660-0?mr=t1415452731&mi='2.1937537577.1416243406549'&mt=!n&cs=!t&e=!(gr,viewPage,gt)&pt=main&r=''&sw=1024&sh=768&sc=24&j=!f&u='http://www.tommyjohn.com/'&fl=!f&hvc=!t&eoq=!t"
                    },
                    {
                      "type": "BYTES",
                      "value": "3KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "64%"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "LeverageBrowserCaching": {
        "localizedRuleName": "Leverage browser caching",
        "ruleImpact": 10.402251984126986,
        "urlBlocks": [
          {
            "header": {
              "format": "Setting an expiry date or a maximum age in the HTTP headers for static resources instructs the browser to load previously downloaded resources from local disk rather than over the network."
            }
          },
          {
            "header": {
              "format": "Leverage browser caching for the following cacheable resources:",
              "args": [
                {
                  "type": "HYPERLINK",
                  "value": "https://developers.google.com/speed/docs/insights/LeverageBrowserCaching"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "$1 (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://assets.tapad.com/tapestry/tapestry-0.7.min.js"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 (expiration not specified)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "https://api.cloudsponge.com/javascripts/address_books/options.js"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://a.adroll.com/pixel/YCPSFCN4UVFL3OYHZBKLY6/4MAEI3SBIBARHM7JCOEZUR/ZD4GRWPKOFHETEW7776RJ2.js"
                    },
                    {
                      "type": "DURATION",
                      "value": "1 second"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://doug1izaerwt3.cloudfront.net/8c3c6290074ae5fe6b7b9248865ba7f6472a3e49.1.js"
                    },
                    {
                      "type": "DURATION",
                      "value": "60 seconds"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://a.adroll.com/j/roundtrip.js"
                    },
                    {
                      "type": "DURATION",
                      "value": "104 seconds"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://triggeredmail.appspot.com/triggermail.js/tommy_john.js"
                    },
                    {
                      "type": "DURATION",
                      "value": "10 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://www.googletagmanager.com/gtm.js?id=GTM-PJ2L"
                    },
                    {
                      "type": "DURATION",
                      "value": "15.8 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://connect.facebook.net/en_US/sdk.js"
                    },
                    {
                      "type": "DURATION",
                      "value": "20 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "https://apis.google.com/js/plusone.js"
                    },
                    {
                      "type": "DURATION",
                      "value": "30 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://b.monetate.net/js/1/a-fdce2195/p/tommyjohnwear.com/393401/g"
                    },
                    {
                      "type": "DURATION",
                      "value": "60 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "https://api.cloudsponge.com/address_books.js?_=1416243406724"
                    },
                    {
                      "type": "DURATION",
                      "value": "60 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "https://api.cloudsponge.com/javascripts/address_books/floatbox.css"
                    },
                    {
                      "type": "DURATION",
                      "value": "60 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "https://api.cloudsponge.com/javascripts/address_books/modules/core.js"
                    },
                    {
                      "type": "DURATION",
                      "value": "60 minutes"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://www.google-analytics.com/ga.js"
                    },
                    {
                      "type": "DURATION",
                      "value": "2 hours"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://static.olark.com/jsclient-bucket1/application2.js?v=1415917849460"
                    },
                    {
                      "type": "DURATION",
                      "value": "3 hours"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://static.olark.com/jsclient/loader0.js"
                    },
                    {
                      "type": "DURATION",
                      "value": "3 hours"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "https://static.olark.com/jsclient-bucket1/storage.js?v=1415917809051"
                    },
                    {
                      "type": "DURATION",
                      "value": "3 hours"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://media.extole.com/base-creatives/static/advocate-widget/images/share-buttons/twitter.png"
                    },
                    {
                      "type": "DURATION",
                      "value": "3.7 hours"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://media.extole.com/base-creatives/static/advocate-widget/images/share-buttons/facebook.png"
                    },
                    {
                      "type": "DURATION",
                      "value": "3.7 hours"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://media.extole.com/advocate-widget/20141115.0146/go.js"
                    },
                    {
                      "type": "DURATION",
                      "value": "3.7 hours"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1 ($2)",
                  "args": [
                    {
                      "type": "URL",
                      "value": "https://media.extole.com/base-creatives/static/advocate-widget/images/extole-logo.png"
                    },
                    {
                      "type": "DURATION",
                      "value": "5.3 hours"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "MainResourceServerResponseTime": {
        "localizedRuleName": "Reduce server response time",
        "ruleImpact": 0.0,
        "urlBlocks": [
          {
            "header": {
              "format": "Your server responded quickly. Learn more about server response time optimization.",
              "args": [
                {
                  "type": "HYPERLINK",
                  "value": "https://developers.google.com/speed/docs/insights/Server"
                }
              ]
            }
          }
        ]
      },
      "MinifyCss": {
        "localizedRuleName": "Minify CSS",
        "ruleImpact": 0.11750000000000001,
        "urlBlocks": [
          {
            "header": {
              "format": "Compacting CSS code can save many bytes of data and speed up download and parse times."
            }
          },
          {
            "header": {
              "format": "Minify CSS for the following resources to reduce their size by $2 ($3 reduction).",
              "args": [
                {
                  "type": "HYPERLINK",
                  "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                },
                {
                  "type": "BYTES",
                  "value": "1.1KiB"
                },
                {
                  "type": "PERCENTAGE",
                  "value": "31%"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "Minifying $1 could save $2 ($3 reduction) after compression.",
                  "args": [
                    {
                      "type": "URL",
                      "value": "https://api.cloudsponge.com/javascripts/address_books/floatbox.css"
                    },
                    {
                      "type": "BYTES",
                      "value": "1.1KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "31%"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "MinifyHTML": {
        "localizedRuleName": "Minify HTML",
        "ruleImpact": 0.12120000000000002,
        "urlBlocks": [
          {
            "header": {
              "format": "Compacting HTML code, including any inline JavaScript and CSS contained in it, can save many bytes of data and speed up download and parse times."
            }
          },
          {
            "header": {
              "format": "Minify HTML for the following resources to reduce their size by $2 ($3 reduction).",
              "args": [
                {
                  "type": "HYPERLINK",
                  "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                },
                {
                  "type": "BYTES",
                  "value": "1KiB"
                },
                {
                  "type": "PERCENTAGE",
                  "value": "11%"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "Minifying $1 could save $2 ($3 reduction) after compression.",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://www.tommyjohn.com/"
                    },
                    {
                      "type": "BYTES",
                      "value": "1KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "11%"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "MinifyJavaScript": {
        "localizedRuleName": "Minify JavaScript",
        "ruleImpact": 0.5263999999999999,
        "urlBlocks": [
          {
            "header": {
              "format": "Compacting JavaScript code can save many bytes of data and speed up downloading, parsing, and execution time."
            }
          },
          {
            "header": {
              "format": "Minify JavaScript for the following resources to reduce their size by $2 ($3 reduction).",
              "args": [
                {
                  "type": "HYPERLINK",
                  "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                },
                {
                  "type": "BYTES",
                  "value": "2.6KiB"
                },
                {
                  "type": "PERCENTAGE",
                  "value": "3%"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "Minifying $1 could save $2 ($3 reduction) after compression.",
                  "args": [
                    {
                      "type": "URL",
                      "value": "https://api.cloudsponge.com/address_books.js?_=1416243406724"
                    },
                    {
                      "type": "BYTES",
                      "value": "1.2KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "5%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Minifying $1 could save $2 ($3 reduction) after compression.",
                  "args": [
                    {
                      "type": "URL",
                      "value": "https://api.cloudsponge.com/javascripts/address_books/options.js"
                    },
                    {
                      "type": "BYTES",
                      "value": "785B"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "83%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Minifying $1 could save $2 ($3 reduction) after compression.",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://media.extole.com/advocate-widget/20141115.0146/go.js"
                    },
                    {
                      "type": "BYTES",
                      "value": "618B"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "1%"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "MinimizeRenderBlockingResources": {
        "localizedRuleName": "Eliminate render-blocking JavaScript and CSS in above-the-fold content",
        "ruleImpact": 20.0,
        "urlBlocks": [
          {
            "header": {
              "format": "Your page has $1 blocking script resources and $2 blocking CSS resources. This causes a delay in rendering your page.",
              "args": [
                {
                  "type": "INT_LITERAL",
                  "value": "3"
                },
                {
                  "type": "INT_LITERAL",
                  "value": "3"
                }
              ]
            }
          },
          {
            "header": {
              "format": "None of the above-the-fold content on your page could be rendered without waiting for the following resources to load. Try to defer or asynchronously load blocking resources, or inline the critical portions of those resources directly in the HTML."
            }
          },
          {
            "header": {
              "format": "Remove render-blocking JavaScript:",
              "args": [
                {
                  "type": "HYPERLINK",
                  "value": "https://developers.google.com/speed/docs/insights/BlockingJS"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "$1",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://p.bm23.com/bta.js"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1",
                  "args": [
                    {
                      "type": "URL",
                      "value": "https://www.googleadservices.com/pagead/conversion.js"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://d2jj063hrlzfd9.cloudfront.net/assets/application-4c97135d5ab4938df41051ad1d4bb196.js"
                    }
                  ]
                }
              }
            ]
          },
          {
            "header": {
              "format": "Optimize CSS Delivery of the following:",
              "args": [
                {
                  "type": "HYPERLINK",
                  "value": "https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "$1",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://d2jj063hrlzfd9.cloudfront.net/assets/application-e8c2569dbe84eeed4277c70be7758d94.css"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://fonts.googleapis.com/css?family=Dosis:200,300,400,700|Open+Sans:300italic,400italic,700italic,400,300,700"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "$1",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://d2jj063hrlzfd9.cloudfront.net/assets/legacy-8d4938343b28a8dd8cb9bb375f953eaa.css"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "OptimizeImages": {
        "localizedRuleName": "Optimize images",
        "ruleImpact": 1.6821,
        "urlBlocks": [
          {
            "header": {
              "format": "Properly formatting and compressing images can save many bytes of data."
            }
          },
          {
            "header": {
              "format": "Optimize the following images to reduce their size by $2 ($3 reduction).",
              "args": [
                {
                  "type": "HYPERLINK",
                  "value": "https://developers.google.com/speed/docs/insights/OptimizeImages"
                },
                {
                  "type": "BYTES",
                  "value": "16.2KiB"
                },
                {
                  "type": "PERCENTAGE",
                  "value": "26%"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://tommyjohn.imgix.net/manually_managed/logo/tommyjohn-logo-big-lossless-lossy.png?w=310"
                    },
                    {
                      "type": "BYTES",
                      "value": "4.4KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "53%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "value": "https://tommyjohn.imgix.net/manually_managed/logo/tommyjohn-logo-big-lossless-lossy.png?w=310"
                    },
                    {
                      "type": "BYTES",
                      "value": "3.8KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "46%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://static.olark.com/themes/smoke/smoke.png"
                    },
                    {
                      "type": "BYTES",
                      "value": "1.7KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "33%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://media.extole.com/base-creatives/static/advocate-widget/images/share-buttons/facebook.png"
                    },
                    {
                      "type": "BYTES",
                      "value": "1.2KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "55%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://media.extole.com/base-creatives/static/advocate-widget/images/share-buttons/email.png"
                    },
                    {
                      "type": "BYTES",
                      "value": "1.2KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "50%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "value": "https://media.extole.com/base-creatives/static/advocate-widget/images/extole-logo.png"
                    },
                    {
                      "type": "BYTES",
                      "value": "1.1KiB"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "39%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://media.extole.com/base-creatives/static/advocate-widget/images/share-buttons/twitter.png"
                    },
                    {
                      "type": "BYTES",
                      "value": "997B"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "41%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://d2jj063hrlzfd9.cloudfront.net/assets/homepage/feature-icons-3a05bdcf7b84b74218043995413aafd0.png"
                    },
                    {
                      "type": "BYTES",
                      "value": "891B"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "3%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://d2jj063hrlzfd9.cloudfront.net/assets/shipping-icon-b4fcedb1836021a91d2a56f3d20325e3.png"
                    },
                    {
                      "type": "BYTES",
                      "value": "524B"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "33%"
                    }
                  ]
                }
              },
              {
                "result": {
                  "format": "Losslessly compressing $1 could save $2 ($3 reduction).",
                  "args": [
                    {
                      "type": "URL",
                      "value": "http://d2jj063hrlzfd9.cloudfront.net/assets/cart-icon-071b88d823ca5e520774a03c4507c30f.png"
                    },
                    {
                      "type": "BYTES",
                      "value": "517B"
                    },
                    {
                      "type": "PERCENTAGE",
                      "value": "38%"
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "PrioritizeVisibleContent": {
        "localizedRuleName": "Prioritize visible content",
        "ruleImpact": 2.0,
        "urlBlocks": [
          {
            "header": {
              "format": "Your page requires additional network round trips to render the above-the-fold content. For best performance, reduce the amount of HTML needed to render above-the-fold content."
            }
          },
          {
            "header": {
              "format": "The entire HTML response was not sufficient to render the above-the-fold content. This usually indicates that additional resources, loaded after HTML parsing, were required to render above-the-fold content. Prioritize visible content that is needed for rendering above-the-fold by including it directly in the HTML response.",
              "args": [
                {
                  "type": "HYPERLINK",
                  "value": "https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent"
                }
              ]
            },
            "urls": [
              {
                "result": {
                  "format": "Only about $1 of the final above-the-fold content could be rendered with the full HTML response $2.",
                  "args": [
                    {
                      "type": "PERCENTAGE",
                      "value": "7%"
                    },
                    {
                      "type": "SNAPSHOT_RECT",
                      "value": "snapshot:6"
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    }
  },
  "version": {
    "major": 1,
    "minor": 15
  }
};

function totalBytes(psiResults) {
  return parseInt(psiResults.pageStats.totalRequestBytes);
}

function ruleList(psiResults) {
  var list = [];
  var ruleResults = psiResults.formattedResults.ruleResults;
  for(var rule in ruleResults) {
    var ruleResult = ruleResults[rule];
    list.push(ruleResult.localizedRuleName);
  }
  return list;
}

var assert = require("assert");

describe("totalBytes(psiResults)", function () {
  it("should return 24277", function () {
    assert.equal(24277, totalBytes(psiResults));
  });
});

describe("ruleList(psiResults)", function () {
  it('should return ["Avoid landing page redirects", "Enable compression", "Leverage browser caching", "Reduce server response time", "Minify CSS", "Minify HTML", "Minify JavaScript", "Eliminate render-blocking JavaScript and CSS in above-the-fold content", "Optimize images", "Prioritize visible content"]', function () {
    assert.deepEqual(["Avoid landing page redirects", "Enable compression", "Leverage browser caching", "Reduce server response time", "Minify CSS", "Minify HTML", "Minify JavaScript", "Eliminate render-blocking JavaScript and CSS in above-the-fold content", "Optimize images", "Prioritize visible content"],
      ruleList(psiResults));
  });
});
