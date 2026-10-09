# Lob MCP by usefulapi

Verify addresses and send physical mail via Lob, from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Lob API key.

**Live endpoint:** `https://lob.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/lob

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://lob.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http lob https://lob.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=lob&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flob.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "lob": {
      "url": "https://lob.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Lob credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/lob/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Lob API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `lob_verify_us_address` | read | Verify a US address |
| `lob_verify_intl_address` | read | Verify an international address |
| `lob_us_zip_lookup` | read | Look up a US ZIP code |
| `lob_us_autocomplete` | read | Autocomplete a US address |
| `lob_list_postcards` | read | List postcards |
| `lob_get_postcard` | read | Get a postcard |
| `lob_list_letters` | read | List letters |
| `lob_get_letter` | read | Get a letter |
| `lob_list_checks` | read | List checks |
| `lob_get_check` | read | Get a check |
| `lob_list_self_mailers` | read | List self-mailers |
| `lob_list_addresses` | read | List saved addresses |
| `lob_get_address` | read | Get a saved address |
| `lob_list_templates` | read | List templates |
| `lob_create_address` | **write** | Save an address record |
| `lob_create_postcard` | **write** | Send a postcard (COSTS MONEY) |
| `lob_create_letter` | **write** | Send a letter (COSTS MONEY) |
| `lob_cancel_postcard` | **write** | Cancel a scheduled postcard |
| `lob_usage_status` | meta | Usage status (free-tier meter) |
| `lob_request_feature` | meta | Request a missing feature |
| `lob_upgrade` | meta | Upgrade to Pro (unlimited) |
| `lob_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `lob_upgrade` (it returns a Stripe Checkout link). Cancel any time with `lob_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `lob_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
