# Algolia MCP by usefulapi

Use your [Algolia](https://www.algolia.com) account from Claude, Cursor, or any MCP client. It searches indices, reads records, synonyms and rules, and adds, updates or deletes records. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://algolia.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://algolia.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http algolia https://algolia.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=algolia&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Falgolia.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "algolia": {
      "url": "https://algolia.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Algolia credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/algolia/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Algolia Application ID** and an **API key** with the search permission (Settings → API Keys in the Algolia dashboard). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `algolia_list_indices` | read | List indices |
| `algolia_search_index` | read | Search an index |
| `algolia_multi_search` | read | Search several indices |
| `algolia_search_facet_values` | read | Search facet values |
| `algolia_get_object` | read | Get a record |
| `algolia_get_objects` | read | Get several records |
| `algolia_get_settings` | read | Get index settings |
| `algolia_search_synonyms` | read | Search synonyms |
| `algolia_get_synonym` | read | Get a synonym |
| `algolia_search_rules` | read | Search rules |
| `algolia_get_rule` | read | Get a rule |
| `algolia_get_task` | read | Check a write task |
| `algolia_get_logs` | read | Get API logs |
| `algolia_save_object` | **write** | Add a record |
| `algolia_add_or_replace_object` | **write** | Add or replace a record |
| `algolia_partial_update_object` | **write** | Update some attributes of a record |
| `algolia_delete_object` | **write** | Delete a record |
| `algolia_usage_status` | meta | Usage status (free-tier meter) |
| `algolia_request_feature` | meta | Request a missing feature |
| `algolia_upgrade` | meta | Upgrade to Pro or Pro+ |
| `algolia_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `algolia_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `algolia_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `algolia_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
