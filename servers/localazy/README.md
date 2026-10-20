# Localazy MCP by usefulapi

Use [Localazy](https://localazy.com) from Claude, Cursor, or any MCP client — projects, files, keys, translations and the glossary, plus translation submits and small key imports.
Hosted, no local install: connect with your own Localazy credentials.

**Live endpoint:** `https://localazy.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/localazy

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://localazy.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http localazy https://localazy.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=localazy&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flocalazy.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "localazy": {
      "url": "https://localazy.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Localazy credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/localazy/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `localazy_list_projects` | read | List projects |
| `localazy_list_import_formats` | read | List import file types |
| `localazy_list_files` | read | List files |
| `localazy_get_file_keys` | read | Get file keys and translations |
| `localazy_list_key_links` | read | List key links (duplicities) |
| `localazy_list_cdn_metadata` | read | List CDN metadata files |
| `localazy_get_import_progress` | read | Get import progress |
| `localazy_get_tm_suggestions` | read | Get translation memory suggestions |
| `localazy_get_mt_suggestions` | read | Get machine translation suggestions |
| `localazy_list_glossary` | read | List glossary terms |
| `localazy_get_glossary_term` | read | Get glossary term |
| `localazy_create_glossary_term` | **write** | Create glossary term |
| `localazy_update_glossary_term` | **write** | Update glossary term |
| `localazy_submit_translation` | **write** | Submit a translation |
| `localazy_import_keys` | **write** | Import a few keys |
| `localazy_update_key_properties` | **write** | Update key comment/limit/visibility |
| `localazy_translate_with_ai` | **write** | Translate texts with Localazy AI (spends credits) |
| `localazy_usage_status` | meta | Usage status (free-tier meter) |
| `localazy_request_feature` | meta | Request a missing feature |
| `localazy_upgrade` | meta | Upgrade to Pro (unlimited) |
| `localazy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per organization) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `localazy_upgrade` (it returns a Stripe Checkout link). Cancel any time with `localazy_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `localazy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Localazy.
