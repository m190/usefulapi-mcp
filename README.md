# usefulapi

Hosted [MCP](https://modelcontextprotocol.io) servers for the tools you already use — connect
from Claude, Cursor, or any MCP client. No local install, no key-juggling: authorize once and go.

**Portal:** https://usefulapi.io

## Servers

| Server | Category | Tools | Auth | Docs |
|--------|----------|------:|------|------|
| [Linear](linear/) | project-management | 11 | OAuth | [linear/](linear/) |
| [Better Stack](betterstack/) | observability | 11 | API token | [betterstack/](betterstack/) |
| [Loops](loops/) | email | 12 | API token | [loops/](loops/) |
| [Mixpanel](mixpanel/) | analytics | 9 | API token | [mixpanel/](mixpanel/) |
| [Fireworks AI](fireworks/) | ai-infra | 16 | API token | [fireworks/](fireworks/) |
| [Uploadcare](uploadcare/) | image-cdn | 13 | API token | [uploadcare/](uploadcare/) |
| [Cronitor](cronitor/) | observability | 8 | API token | [cronitor/](cronitor/) |
| [MailerLite](mailerlite/) | email | 15 | API token | [mailerlite/](mailerlite/) |
| [Checkly](checkly/) | observability | 24 | API token | [checkly/](checkly/) |
| [Mindee](mindee/) | document-ai | 6 | API token | [mindee/](mindee/) |
| [DocRaptor](docraptor/) | documents | 6 | API token | [docraptor/](docraptor/) |
| [Mistral](mistral/) | ai-infra | 17 | API token | [mistral/](mistral/) |
| [Orb](orb/) | billing | 28 | API token | [orb/](orb/) |
| [Chargebee](chargebee/) | billing | 15 | API token | [chargebee/](chargebee/) |
| [Lob](lob/) | direct-mail | 20 | API token | [lob/](lob/) |
| [GoCardless](gocardless/) | payments | 17 | API token | [gocardless/](gocardless/) |
| [Recurly](recurly/) | billing | 10 | API token | [recurly/](recurly/) |
| [Braintree](braintree/) | payments | 9 | API token | [braintree/](braintree/) |
| [Increase](increase/) | fintech | 20 | API token | [increase/](increase/) |
| [Modern Treasury](modern-treasury/) | payment-operations | 19 | API token | [modern-treasury/](modern-treasury/) |
| [MagicBell](magicbell/) | notifications | 15 | API token | [magicbell/](magicbell/) |
| [Crowdin](crowdin/) | localization | 14 | API token | [crowdin/](crowdin/) |
| [Dropbox Sign](dropbox-sign/) | esignature | 12 | API token | [dropbox-sign/](dropbox-sign/) |
| [EasyPost](easypost/) | shipping | 13 | API token | [easypost/](easypost/) |
| [DNSimple](dnsimple/) | dns | 14 | API token | [dnsimple/](dnsimple/) |
| [Bird](bird/) | communications | 18 | API token | [bird/](bird/) |
| [Ably](ably/) | realtime | 17 | API token | [ably/](ably/) |
| [Amberflo](amberflo/) | usage-metering | 16 | API token | [amberflo/](amberflo/) |
| [Anvil](anvil/) | documents | 12 | API token | [anvil/](anvil/) |
| [Api2Pdf](api2pdf/) | documents | 18 | API token | [api2pdf/](api2pdf/) |
| [api.video](apivideo/) | video-hosting | 17 | API token | [apivideo/](apivideo/) |
| [Autumn](autumn/) | billing | 20 | API token | [autumn/](autumn/) |
| [Bannerbear](bannerbear/) | image-generation | 17 | API token | [bannerbear/](bannerbear/) |
| [Cliniko](cliniko/) | healthcare | 19 | API token | [cliniko/](cliniko/) |
| [Codat](codat/) | financial-data | 30 | API token | [codat/](codat/) |
| [Cronofy](cronofy/) | calendar | 10 | API token | [cronofy/](cronofy/) |
| [Customer.io](customerio/) | marketing | 15 | API token | [customerio/](customerio/) |
| [Healthie](healthie/) | healthcare | 18 | API token | [healthie/](healthie/) |
| [Hypertune](hypertune/) | feature-flags | 7 | API token | [hypertune/](hypertune/) |
| [Lago](lago/) | billing | 26 | API token | [lago/](lago/) |
| [Laravel Forge](laravel-forge/) | devops | 19 | API token | [laravel-forge/](laravel-forge/) |
| [Lemon Squeezy](lemonsqueezy/) | payments | 20 | API token | [lemonsqueezy/](lemonsqueezy/) |
| [MapTiler](maptiler/) | maps | 10 | API token | [maptiler/](maptiler/) |
| [Mercoa](mercoa/) | payments | 19 | API token | [mercoa/](mercoa/) |
| [Northflank](northflank/) | devops | 19 | API token | [northflank/](northflank/) |
| [Nylas](nylas/) | email | 17 | API token | [nylas/](nylas/) |
| [Sendbird](sendbird/) | chat | 16 | API token | [sendbird/](sendbird/) |
| [Speechmatics](speechmatics/) | speech-to-text | 9 | API token | [speechmatics/](speechmatics/) |
| [Stream](stream/) | chat | 15 | API token | [stream/](stream/) |
| [Swell](swell/) | ecommerce | 18 | API token | [swell/](swell/) |
| [Quaderno](quaderno/) | tax | 25 | API token | [quaderno/](quaderno/) |

_More servers land here as they launch — each is a folder with its own README + `server.json`,
and a tile on the [portal](https://usefulapi.io)._

## What's in each folder

- `README.md` — what the server does, tools, pricing, the "Add to Claude" snippet
- `server.json` — the [official MCP Registry](https://registry.modelcontextprotocol.io) record
  (namespace `io.github.m190/*`), pointing at the hosted endpoint

## License

MIT — see [LICENSE](LICENSE). Documentation only; servers are hosted.
