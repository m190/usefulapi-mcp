# Mistral MCP by usefulapi

Manage your Mistral platform — models, files, batch jobs, agents and RAG libraries — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Mistral API key.

**Live endpoint:** `https://mistral.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/mistral

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://mistral.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http mistral https://mistral.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=mistral&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmistral.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "mistral": {
      "url": "https://mistral.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Mistral credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/mistral/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Mistral API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mistral_list_models` | read | List models |
| `mistral_get_model` | read | Get a model |
| `mistral_list_files` | read | List files |
| `mistral_get_file` | read | Get a file |
| `mistral_get_file_url` | read | Get a file download URL |
| `mistral_list_batch_jobs` | read | List batch jobs |
| `mistral_get_batch_job` | read | Get a batch job |
| `mistral_list_agents` | read | List agents |
| `mistral_get_agent` | read | Get an agent |
| `mistral_list_libraries` | read | List document libraries |
| `mistral_get_library` | read | Get a document library |
| `mistral_list_library_documents` | read | List documents in a library |
| `mistral_create_agent` | **write** | Create an agent |
| `mistral_cancel_batch_job` | **write** | Cancel a batch job |
| `mistral_delete_file` | **write** | Delete a file |
| `mistral_usage_status` | meta | Usage status (free-tier meter) |
| `mistral_request_feature` | meta | Request a missing feature |
| `mistral_upgrade` | meta | Upgrade to Pro (unlimited) |
| `mistral_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `mistral_upgrade` (it returns a Stripe Checkout link). Cancel any time with `mistral_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `mistral_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
