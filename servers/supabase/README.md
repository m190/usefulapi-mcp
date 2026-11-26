# Supabase MCP by usefulapi

Use your [Supabase](https://supabase.com) account from Claude, Cursor, or any MCP client. Check project health and advisors, run read-only SQL, and manage Edge Function secrets. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://supabase.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://supabase.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http supabase https://supabase.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=supabase&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsupabase.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "supabase": {
      "url": "https://supabase.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Supabase credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/supabase/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Supabase personal access token** (sbp_…) from Supabase → Account → Access Tokens. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `supabase_get_profile` | read | Get the account profile |
| `supabase_list_organizations` | read | List organizations |
| `supabase_list_projects` | read | List projects |
| `supabase_get_project` | read | Get a project |
| `supabase_get_project_health` | read | Get project service health |
| `supabase_list_branches` | read | List database branches |
| `supabase_list_functions` | read | List edge functions |
| `supabase_get_function` | read | Get an edge function |
| `supabase_list_storage_buckets` | read | List storage buckets |
| `supabase_list_secret_names` | read | List secret names |
| `supabase_list_migrations` | read | List applied migrations |
| `supabase_get_security_advisors` | read | Get security advisor findings |
| `supabase_get_performance_advisors` | read | Get performance advisor findings |
| `supabase_get_typescript_types` | read | Generate TypeScript types |
| `supabase_run_read_only_query` | read | Run a read-only SQL query |
| `supabase_set_secrets` | **write** | Set Edge Function secrets |
| `supabase_delete_secrets` | **write** | Delete Edge Function secrets |
| `supabase_pause_project` | **write** | Pause a project |
| `supabase_restart_project` | **write** | Restart a project |
| `supabase_usage_status` | meta | Usage status (free-tier meter) |
| `supabase_request_feature` | meta | Request a missing feature |
| `supabase_upgrade` | meta | Upgrade to Pro or Pro+ |
| `supabase_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `supabase_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `supabase_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `supabase_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
