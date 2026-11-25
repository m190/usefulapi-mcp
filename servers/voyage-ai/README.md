# Voyage AI MCP by usefulapi

Use your [Voyage AI](https://www.voyageai.com) account from Claude, Cursor, or any MCP client. Create text embeddings and rerank documents with Voyage models, and list and read Batch API jobs and uploaded files, or cancel a batch job. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://voyage-ai.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://voyage-ai.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http voyage-ai https://voyage-ai.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=voyage-ai&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvoyage-ai.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "voyage-ai": {
      "url": "https://voyage-ai.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Voyage AI credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/voyage-ai/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Voyage AI secret API key**, created in the Voyage dashboard under **API keys** (Create new secret key). The server checks it with one read, then stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `voyage_create_embeddings` | read | Create text embeddings |
| `voyage_rerank` | read | Rerank documents |
| `voyage_list_files` | read | List files |
| `voyage_get_file` | read | Get a file |
| `voyage_list_batches` | read | List batches |
| `voyage_get_batch` | read | Get a batch |
| `voyage_cancel_batch` | **write** | Cancel a batch |
| `voyage_usage_status` | meta | Usage status (free-tier meter) |
| `voyage_request_feature` | meta | Request a missing feature |
| `voyage_upgrade` | meta | Upgrade to Pro or Pro+ |
| `voyage_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `voyage_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `voyage_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `voyage_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
