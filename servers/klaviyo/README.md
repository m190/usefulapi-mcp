# Klaviyo MCP by usefulapi

Use your [Klaviyo](https://www.klaviyo.com) account from Claude, Cursor, or any MCP client. Read lists, segments, profiles, campaigns, flows, events and tags in your Klaviyo account, and create lists or profiles. No tool sends mail. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://klaviyo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://klaviyo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http klaviyo https://klaviyo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=klaviyo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fklaviyo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "klaviyo": {
      "url": "https://klaviyo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Klaviyo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/klaviyo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Klaviyo private API key** (Settings → API keys → Create Private API Key; it starts with pk_). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `klaviyo_get_account` | read | Get account |
| `klaviyo_list_lists` | read | List lists |
| `klaviyo_get_list` | read | Get list |
| `klaviyo_list_profiles_in_list` | read | List profiles in a list |
| `klaviyo_list_profiles` | read | List profiles |
| `klaviyo_get_profile` | read | Get profile |
| `klaviyo_list_segments` | read | List segments |
| `klaviyo_list_campaigns` | read | List campaigns |
| `klaviyo_get_campaign` | read | Get campaign |
| `klaviyo_list_flows` | read | List flows |
| `klaviyo_get_flow` | read | Get flow |
| `klaviyo_list_metrics` | read | List metrics |
| `klaviyo_list_events` | read | List events |
| `klaviyo_list_templates` | read | List templates |
| `klaviyo_list_tags` | read | List tags |
| `klaviyo_create_list` | **write** | Create list |
| `klaviyo_add_profiles_to_list` | **write** | Add profiles to list |
| `klaviyo_create_profile` | **write** | Create profile |
| `klaviyo_update_profile` | **write** | Update profile |
| `klaviyo_usage_status` | meta | Usage status (free-tier meter) |
| `klaviyo_request_feature` | meta | Request a missing feature |
| `klaviyo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `klaviyo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `klaviyo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `klaviyo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `klaviyo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
