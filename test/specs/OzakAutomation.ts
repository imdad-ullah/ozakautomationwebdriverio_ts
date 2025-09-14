describe("OzakAutomation", () => {
  it("tests OzakAutomation", async () => {
    await browser.maximizeWindow();
    await browser.url("https://www.google.com/search?q=ozakai&oq=ozak&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOTIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGD3SAQkxOTg4ajBqMTWoAgiwAgHxBYgthwNh_A_o&sourceid=chrome&ie=UTF-8")
    await expect(browser).toHaveUrl("https://www.google.com/search?q=ozakai&oq=ozak&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOTIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGD3SAQkxOTg4ajBqMTWoAgiwAgHxBYgthwNh_A_o&sourceid=chrome&ie=UTF-8")
    await browser.$("//*[@id=\"rso\"]/div[1]/div/div/div/div[1]/div/div/span/a/div/div/div/div[1]/span").click()
    await expect(browser).toHaveUrl("https://ozak.ai/")
    await browser.$("aria/Connect").click()
    await browser.$("w3m-modal").click()
    await browser.$("aria/Browser").click()
    await browser.$("w3m-modal").click()
    await browser.$("aria/Chrome Extension").click()
    await browser.$("w3m-modal").click()
    await browser.$("w3m-modal").click()
    await browser.$("pierce/[data-testid='social-selector-google']").click()
    await browser.switchToFrame(
      await browser.$('iframe[src="https://accounts.google.com/o/oauth2/v2/auth?client_id=999644826604-ug6v9nboaiitudtg1uovifbh19sj5tl0.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fsecure.walletconnect.org%2Fsdk%2Foauth&state=eyJjcnlwdG9DaGFsbGVuZ2VTdGF0ZSI6IlV1UkNfY3FnOE1YbmhGb08zV2N5cFlJQU50ZmE2eWZ5RHM5Y09zU0JZREdMdXB1SzAzNXREZkhVTFctYmNLaGxqWjJsT3FESDBkSUpNbHpTajdqTm1obHcxOEUydnU2b0VOZkhTLkkyZFM3YkREelFRMEJRMmhBNFFxWWdjNG1XIn0%3D&scope=openid%20email%20profile&code_challenge=-pMyNT4_5iKaQW0XQRQ4A1ad7MCoR-edv28bQyZfbk0&code_challenge_method=S256&response_type=code&access_type=offline"]')
    )
    await browser.$("//*[@id=\"yDmH0d\"]/div[1]/div[1]/div[2]/div/div/div[2]/div/div/div[1]/form/span/section/div/div/div/div/ul/li[1]/div/div[1]/div/div[2]/div[1]").click()
    await expect(browser).toHaveUrl("https://accounts.google.com/signin/oauth/id?authuser=0&part=AJi8hAOe6_4yQiozivAEJAxZb8dkxo4yltcbOiKyGuQ4tHWFvxtfCouTPPZt7v3cFWav9KGuRwoPMTTCXZ-ftAADjipYsbUvv6be9DnMsuhPUW_dwUoBxnpzWAmJFirKjN3MYFJnd9n7O-4GTl3THmDK1vQFcJRFPLrocSz1XWIyo-j0uk3-RCPh5EE3FV9U2x6oeBo9YKRGDBZUJtjy9uumlC7NcvxftFKj9IhD2GHWqMyWy9er60d3WrfqsgbVF_BJIetZWehVRIoPvgeXPmzp23l8yqQn2rTHFfW-turMaq31bo-vXuCSthOY6c4sM2i6q241DVFcwKoK2MqdTQ7OJNPJumC0pUVLgDIZpZwMiqfy6Vm5AJn6Jx7QeyQTNnv17HV5c8BfUVaRtl3m6iGqFjzTNXTkLu37Fbox8JfYyDUckboCh6VGzE35Rev9b5JroIbOmzY7_25fn2s-xiJJYyrLB7XVUDejOXbFjmkLMp-anJV3Ia8luZ9o_rjllHk6weovZ85xBK0SjvvxmkA631oxLiWCsuXqqh-xpJulOosg2VAwiK4r4jW4QqE-Qi_2OCzKz10zLmNPXC8CyAw_jV9KOllUE7FVPe_kwchjacIg9MUhJsvWY8MECDjRucauljH38-aVux6MnquIYr5u8Bd2RB0o_NEzUnsvIYapOzUtMzvupfMztyoZjFQEwCsZuaJ3GlqhrFHtz0OYpo7YQMubbMTqbCg_BiCkFioxwL8cTGDAUlSxIt385_SzdtWg1sIimab9fqxeDm14dHua4P0BAM-Mjkso60AIgjQxr27wNseuwTicCcWYbIyHDGDmBufXUN5TrbBu5W6gmDe82AHXLGpIHw&flowName=GeneralOAuthFlow&as=S672353666%3A1757851147610038&client_id=999644826604-ug6v9nboaiitudtg1uovifbh19sj5tl0.apps.googleusercontent.com&rapt=AEjHL4PUQGVzMquOtbe3-Q2IXQLn0DM4x9ma7jK6ZBNnihNdJKzDkJRKFWrY0JsLEPHSswhhsl10lxnEpvzN7U9_O5th2XXuvw#")
    await browser.switchToFrame(
      await browser.$('iframe[src="https://accounts.google.com/signin/oauth/id?authuser=0&part=AJi8hAOe6_4yQiozivAEJAxZb8dkxo4yltcbOiKyGuQ4tHWFvxtfCouTPPZt7v3cFWav9KGuRwoPMTTCXZ-ftAADjipYsbUvv6be9DnMsuhPUW_dwUoBxnpzWAmJFirKjN3MYFJnd9n7O-4GTl3THmDK1vQFcJRFPLrocSz1XWIyo-j0uk3-RCPh5EE3FV9U2x6oeBo9YKRGDBZUJtjy9uumlC7NcvxftFKj9IhD2GHWqMyWy9er60d3WrfqsgbVF_BJIetZWehVRIoPvgeXPmzp23l8yqQn2rTHFfW-turMaq31bo-vXuCSthOY6c4sM2i6q241DVFcwKoK2MqdTQ7OJNPJumC0pUVLgDIZpZwMiqfy6Vm5AJn6Jx7QeyQTNnv17HV5c8BfUVaRtl3m6iGqFjzTNXTkLu37Fbox8JfYyDUckboCh6VGzE35Rev9b5JroIbOmzY7_25fn2s-xiJJYyrLB7XVUDejOXbFjmkLMp-anJV3Ia8luZ9o_rjllHk6weovZ85xBK0SjvvxmkA631oxLiWCsuXqqh-xpJulOosg2VAwiK4r4jW4QqE-Qi_2OCzKz10zLmNPXC8CyAw_jV9KOllUE7FVPe_kwchjacIg9MUhJsvWY8MECDjRucauljH38-aVux6MnquIYr5u8Bd2RB0o_NEzUnsvIYapOzUtMzvupfMztyoZjFQEwCsZuaJ3GlqhrFHtz0OYpo7YQMubbMTqbCg_BiCkFioxwL8cTGDAUlSxIt385_SzdtWg1sIimab9fqxeDm14dHua4P0BAM-Mjkso60AIgjQxr27wNseuwTicCcWYbIyHDGDmBufXUN5TrbBu5W6gmDe82AHXLGpIHw&flowName=GeneralOAuthFlow&as=S672353666%3A1757851147610038&client_id=999644826604-ug6v9nboaiitudtg1uovifbh19sj5tl0.apps.googleusercontent.com&rapt=AEjHL4PUQGVzMquOtbe3-Q2IXQLn0DM4x9ma7jK6ZBNnihNdJKzDkJRKFWrY0JsLEPHSswhhsl10lxnEpvzN7U9_O5th2XXuvw"]')
    )
    await browser.$("//*[@id=\"yDmH0d\"]/c-wiz/main/div[3]/div/div/div[2]/div/div/button/div[3]").click()
  });
});
