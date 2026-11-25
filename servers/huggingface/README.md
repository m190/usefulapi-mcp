# Hugging Face MCP by usefulapi

Use your [Hugging Face](https://huggingface.co) account from Claude, Cursor, or any MCP client. Search the Hub, papers, Spaces and collections, list repository files, and check account credits and notifications. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://huggingface.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://huggingface.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http huggingface https://huggingface.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=huggingface&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhuggingface.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "huggingface": {
      "url": "https://huggingface.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Hugging Face credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/huggingface/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Hugging Face User Access Token** (it starts with hf_), created under Hugging Face → **Settings → Access Tokens**. A read token is enough for the public tools. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `huggingface_whoami` | read | Who am I |
| `huggingface_get_credits` | read | Get my credits |
| `huggingface_get_organization_credits` | read | Get organization credits |
| `huggingface_list_organization_members` | read | List organization members |
| `huggingface_list_notifications` | read | List notifications |
| `huggingface_quicksearch` | read | Quick search the Hub |
| `huggingface_search_spaces` | read | Search Spaces |
| `huggingface_search_papers` | read | Search papers |
| `huggingface_get_paper` | read | Get a paper |
| `huggingface_list_collections` | read | List collections |
| `huggingface_get_collection` | read | Get a collection |
| `huggingface_get_user_overview` | read | Get a user overview |
| `huggingface_list_user_likes` | read | List a user's likes |
| `huggingface_list_repo_files` | read | List repository files |
| `huggingface_usage_status` | meta | Usage status (free-tier meter) |
| `huggingface_request_feature` | meta | Request a missing feature |
| `huggingface_upgrade` | meta | Upgrade to Pro or Pro+ |
| `huggingface_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `huggingface_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `huggingface_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `huggingface_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
