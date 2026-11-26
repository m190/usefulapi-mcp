# Rossum MCP by usefulapi

Use your [Rossum](https://rossum.ai) account from Claude, Cursor, or any MCP client. Read queues, annotations, extracted document data and automation blockers, and start or confirm annotations. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://rossum.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rossum.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rossum https://rossum.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rossum&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frossum.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rossum": {
      "url": "https://rossum.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Rossum credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rossum/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Rossum tenant** (the part before .rossum.app in your Rossum address), your **Rossum login e-mail** and your **Rossum password**. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rossum_get_current_user` | read | Get the signed-in user |
| `rossum_list_organizations` | read | List organizations |
| `rossum_list_workspaces` | read | List workspaces |
| `rossum_list_queues` | read | List queues |
| `rossum_get_queue` | read | Get a queue |
| `rossum_list_schemas` | read | List schemas |
| `rossum_get_schema` | read | Get a schema |
| `rossum_list_inboxes` | read | List inboxes |
| `rossum_list_users` | read | List users |
| `rossum_list_annotations` | read | List annotations |
| `rossum_get_annotation` | read | Get an annotation |
| `rossum_get_annotation_content` | read | Get extracted data |
| `rossum_search_annotations` | read | Search annotations |
| `rossum_list_documents` | read | List documents |
| `rossum_get_document` | read | Get a document |
| `rossum_list_automation_blockers` | read | List automation blockers |
| `rossum_start_annotation` | **write** | Start validation of an annotation |
| `rossum_confirm_annotation` | **write** | Confirm an annotation |
| `rossum_usage_status` | meta | Usage status (free-tier meter) |
| `rossum_request_feature` | meta | Request a missing feature |
| `rossum_upgrade` | meta | Upgrade to Pro or Pro+ |
| `rossum_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `rossum_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `rossum_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `rossum_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
