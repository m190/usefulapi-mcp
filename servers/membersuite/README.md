# MemberSuite MCP by usefulapi

Use your [MemberSuite](https://www.growthzone.com) account from Claude, Cursor, or any MCP client. Search members and memberships, run saved searches and queries, and update contact fields. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://membersuite.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://membersuite.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http membersuite https://membersuite.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=membersuite&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmembersuite.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "membersuite": {
      "url": "https://membersuite.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MemberSuite credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/membersuite/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Tenant ID** (Association Key: MemberSuite Console → **Setup → Association Settings**) and the **API user email** and **password** of an API user that MemberSuite (GrowthZone) issues on request. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `membersuite_whoami` | read | Who am I |
| `membersuite_search_individuals` | read | Search individuals |
| `membersuite_search_memberships` | read | Search memberships |
| `membersuite_run_msql` | read | Run an MSQL query |
| `membersuite_list_saved_searches` | read | List public saved searches |
| `membersuite_run_saved_search` | read | Run a saved search |
| `membersuite_update_individual` | **write** | Update an individual |
| `membersuite_usage_status` | meta | Usage status (free-tier meter) |
| `membersuite_request_feature` | meta | Request a missing feature |
| `membersuite_upgrade` | meta | Upgrade to Pro or Pro+ |
| `membersuite_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `membersuite_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `membersuite_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `membersuite_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
