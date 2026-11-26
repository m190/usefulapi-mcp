# Attio MCP by usefulapi

Use your [Attio](https://attio.com) account from Claude, Cursor, or any MCP client. Query records, lists, notes and tasks, and create records, notes and tasks or update record values. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://attio.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://attio.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http attio https://attio.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=attio&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fattio.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "attio": {
      "url": "https://attio.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Attio credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/attio/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **workspace API key** (Workspace settings → Developers in Attio).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `attio_whoami` | read | Show the connected key |
| `attio_list_objects` | read | List objects |
| `attio_get_object` | read | Get an object |
| `attio_list_attributes` | read | List attributes |
| `attio_list_workspace_members` | read | List workspace members |
| `attio_query_records` | read | Query records |
| `attio_get_record` | read | Get a record |
| `attio_search_records` | read | Search records |
| `attio_list_lists` | read | List lists |
| `attio_query_list_entries` | read | Query list entries |
| `attio_list_notes` | read | List notes |
| `attio_list_tasks` | read | List tasks |
| `attio_create_record` | **write** | Create a record |
| `attio_update_record` | **write** | Update a record |
| `attio_create_note` | **write** | Create a note |
| `attio_create_task` | **write** | Create a task |
| `attio_usage_status` | meta | Usage status (free-tier meter) |
| `attio_request_feature` | meta | Request a missing feature |
| `attio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `attio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `attio_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `attio_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `attio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
