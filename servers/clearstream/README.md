# Clearstream MCP by usefulapi

Use your [Clearstream](https://clearstream.io) account from Claude, Cursor, or any MCP client. It reads lists, subscribers, texts and statistics, and sends texts or changes subscribers only with written consent. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://clearstream.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://clearstream.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http clearstream https://clearstream.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=clearstream&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fclearstream.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "clearstream": {
      "url": "https://clearstream.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Clearstream credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/clearstream/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Clearstream API key**, created inside your Clearstream account, and, for a subaccount key only, the **Account ID**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `clearstream_get_account` | read | Get account |
| `clearstream_list_numbers` | read | List sending numbers |
| `clearstream_list_lists` | read | List lists |
| `clearstream_get_list` | read | Get a list |
| `clearstream_list_subscribers_of_list` | read | List subscribers in a list |
| `clearstream_list_subscribers` | read | List subscribers |
| `clearstream_get_subscriber` | read | Get a subscriber |
| `clearstream_list_tags` | read | List tags |
| `clearstream_list_texts` | read | List texts |
| `clearstream_get_text_stats` | read | Get text statistics |
| `clearstream_send_text` | **write** | Send a text |
| `clearstream_add_subscriber` | **write** | Add a subscriber |
| `clearstream_add_subscriber_to_list` | **write** | Add a subscriber to a list |
| `clearstream_remove_subscriber_from_list` | **write** | Remove a subscriber from a list |
| `clearstream_tag_subscribers` | **write** | Tag subscribers |
| `clearstream_usage_status` | meta | Usage status (free-tier meter) |
| `clearstream_request_feature` | meta | Request a missing feature |
| `clearstream_upgrade` | meta | Upgrade to Pro or Pro+ |
| `clearstream_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `clearstream_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `clearstream_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `clearstream_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
