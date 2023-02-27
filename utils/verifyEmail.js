

exports.verifyEmail = (confirmation) => {
    return `    
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Responsive Email</title>
        <style type="text/css">
          body {
            margin: 0;
            padding: 0;
            color: #151618;
            background-color: #e5e5fa;
            font-family: sans-serif;
          }
          table {
            border-spacing: 0;
          }
          td {
            padding: 0;
          }
          img {
            border: 0;
          }
          .wrapper {
            width: 100%;
            table-layout: fixed;
          }
          .container {
            max-width: 600px;
            background-color: #ffffff;
          }
          .news-letter {
            margin: 0 auto;
            width: 100%;
            max-width: 600px;
            border-spacing: 0;
          }
    
          a {
            text-decoration: none;
            color: #ffffff;
            font-size: 13px;
          }
          p {
            font-size: calc(12px + (15 - 12) * ((100vw - 300px) / (1600 - 300)));
          }
        </style>
      </head>
      <body>
        <center class="wrapper">
          <div class="container">
            <table class="news-letter" align="center">
              <tr>
                <td>
                  <table width="100%" align="center">
                    <tr>
                      <td
                        style="
                          background-color: grey;
                          text-align: center;
                          padding: 16px;
                        "
                      >
                        <a href="https://www.google.com/"
                          ><img
                            src="https://assets.codepen.io/210284/logo.png"
                            width="100"
                            alt="logo"
                        /></a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 16px 32px;">
                  <h5>Welcome to our responsive email</h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
                    expedita consequatur molestiae ad in pariatur accusantium amet
                    nulla ullam, sit voluptatem facere quidem quasi ipsam, eius
                    minus. Iure, reprehenderit iste!
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.google.com/"
                    ><img
                      src="https://assets.codepen.io/210284/1200x800-2.png"
                      style="max-width: 100%;"
                      alt="illustration"
                  /></a>
                </td>
              </tr>
              <tr>
                <td>
                  <table>
                    <tr>
                      <td style="padding: 16px;">
                        <table>
                          <tr>
                            <td style="padding-right: 12px;">
                              <a href="https://www.google.com/"
                                ><img
                                  src="https://assets.codepen.io/210284/icon.png"
                                  width="100"
                                  alt="avator"
                              /></a>
                            </td>
                            <td>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Quo vitae esse eaque porro necessitatibus,
                                libero voluptatem facilis cumque praesentium animi
                                dignissimos omnis magnam atque accusamus ab
                                temporibus. Quia iste placeat cupiditate in est
                                aperiam facere illum eligendi. Neque, maiores
                                perferendis!
                              </p>
                              <button
                                style="
                                  all: inherit;
                                  background: #ff3884;
                                  padding: 8px 12px;
                                  border-radius: 4px;
                                "
                              >
                                <a href=${confirmation}>Verify for click here</a>
                              </button>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.google.com/"
                    ><img
                      src="https://assets.codepen.io/210284/1200x800-1.png"
                      style="max-width: 100%;"
                      alt="illustration"
                  /></a>
                </td>
              </tr>
              <tr>
                <td style="padding: 16px 32px;">
                  <p style="font-size: 13px;">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
                    expedita consequatur molestiae ad in pariatur accusantium amet
                    nulla ullam, sit voluptatem facere quidem quasi ipsam, eius
                    minus. Iure, reprehenderit iste!
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <table width="100%" align="center">
                    <tr>
                      <td
                        style="
                          background-color: grey;
                          text-align: center;
                          padding-top: 16px;
                        "
                      >
                        <a href="https://www.google.com/"
                          ><img
                            src="https://assets.codepen.io/210284/facebook_1.png"
                            width="32"
                            alt="logo"
                        /></a>
                        <a href="https://www.google.com/"
                          ><img
                            src="https://assets.codepen.io/210284/twitter_1.png"
                            width="32"
                            alt="logo"
                        /></a>
                        <p>
                          <a href="https://www.google.com/"
                            >@ Someone Somewhere 2021</a
                          >
                        </p>
                        <p>
                          <a href="https://www.google.com/"
                            >Unsubscribe Instantly</a
                          >
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        </center>
      </body>
    </html>
    `
}

