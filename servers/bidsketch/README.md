# Bidsketch MCP by usefulapi

Read Bidsketch clients, proposals, fees and templates; create and update clients, proposals, fees.

**Live endpoint:** `https://bidsketch.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/bidsketch

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bidsketch.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bidsketch https://bidsketch.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bidsketch&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbidsketch.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bidsketch": {
      "url": "https://bidsketch.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bidsketch credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bidsketch/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Bidsketch **API token** (an Admin user creates it in Bidsketch under Account → API Tokens).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bidsketch_list_clients` | read | List clients |
| `bidsketch_get_client` | read | Get a client |
| `bidsketch_list_client_proposals` | read | List a client's proposals |
| `bidsketch_create_client` | **write** | Create a client |
| `bidsketch_update_client` | **write** | Update a client |
| `bidsketch_list_proposals` | read | List proposals |
| `bidsketch_get_proposal_stats` | read | Get proposal stats |
| `bidsketch_get_proposal` | read | Get a proposal |
| `bidsketch_get_proposal_content` | read | Get a proposal's content |
| `bidsketch_list_proposal_sections` | read | List a proposal's sections |
| `bidsketch_get_proposal_section` | read | Get a proposal section |
| `bidsketch_list_proposal_fees` | read | List a proposal's fees |
| `bidsketch_get_proposal_fee` | read | Get a proposal fee |
| `bidsketch_create_proposal` | **write** | Create a proposal |
| `bidsketch_update_proposal` | **write** | Update a proposal |
| `bidsketch_add_proposal_section` | **write** | Add a section to a proposal |
| `bidsketch_update_proposal_section` | **write** | Update a proposal section |
| `bidsketch_add_proposal_fee` | **write** | Add a fee to a proposal |
| `bidsketch_update_proposal_fee` | **write** | Update a proposal fee |
| `bidsketch_list_fees` | read | List saved fees |
| `bidsketch_get_fee` | read | Get a saved fee |
| `bidsketch_create_fee` | **write** | Create a saved fee |
| `bidsketch_update_fee` | **write** | Update a saved fee |
| `bidsketch_list_sections` | read | List saved sections |
| `bidsketch_get_section` | read | Get a saved section |
| `bidsketch_create_section` | **write** | Create a saved section |
| `bidsketch_update_section` | **write** | Update a saved section |
| `bidsketch_list_templates` | read | List proposal templates |
| `bidsketch_get_template` | read | Get a proposal template |
| `bidsketch_usage_status` | meta | Usage status (free-tier meter) |
| `bidsketch_request_feature` | meta | Request a missing feature |
| `bidsketch_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `bidsketch_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `bidsketch_upgrade` (it returns a Stripe Checkout link). Cancel any time with `bidsketch_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `bidsketch_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Bidsketch.
