<script>
    import Lifebuoy from "$lib/icons/lifebuoy.svelte";
    import cn from "classnames";
    let className = "";
    export { className as class };
</script>

<div class={cn("invisible absolute left-0 top-full ml-auto", className)}>
    <div
        class="text-gray-500 text-sm flex justify-between gap-8 p-6 max-w-6xl   mt-4    border-[0.5px]  rounded-lg shadow-lg shadow-black/40 bg-dark border-gray-500 "
    >
        <div>
            <div class="mb-8  font-bold font-mono tracking-wider">
                POWERFUL, SIMPLE ANALYTICS
            </div>
            <ol class="grid gap-8">
                <li class="flex">
                    <Lifebuoy className="h-8 mr-4 text-indigo-500" />
                    <div class="grid gap-2">
                        <div class="text-white font-bold">
                            Interactive Reports
                        </div>
                        <div>Learn about your users</div>
                    </div>
                </li>

                <li class="flex">
                    <Lifebuoy className="h-8 mr-4 text-indigo-500" />
                    <div class="grid gap-2">
                        <div class="text-white font-bold">
                            Team Boards & Alerts
                        </div>
                        <div>Monitor your metrics</div>
                    </div>
                </li>

                <li class="flex">
                    <Lifebuoy className="h-8 mr-4 text-indigo-500" />
                    <div class="grid gap-2">
                        <div class="text-white font-bold">
                            Limitless Segmentation
                        </div>
                        <div>Surface hidden trends</div>
                    </div>
                </li>

                <li class="flex">
                    <Lifebuoy className="h-8 mr-4 text-indigo-500" />
                    <div class="grid gap-2">
                        <div class="text-white font-bold">Group Analytics</div>
                        <div>Measure B2B account health</div>
                    </div>
                </li>
            </ol>
        </div>
        <div>
            <div class="mb-8  font-bold font-mono tracking-wider">
                TOOLS FOR TRUSTED DATA
            </div>
            <ol class="grid gap-8">
                <li class="flex">
                    <Lifebuoy className="h-8 mr-4 text-indigo-500" />
                    <div class="grid gap-2">
                        <div class="text-white font-bold">
                            Data Integrations
                        </div>
                        <div>Connect to your warehouse</div>
                    </div>
                </li>

                <li class="flex">
                    <Lifebuoy className="h-8 mr-4 text-indigo-500" />
                    <div class="grid gap-2">
                        <div class="text-white font-bold">Data Management</div>
                        <div>Keep data clean & usable</div>
                    </div>
                </li>

                <li class="flex">
                    <Lifebuoy className="h-8 mr-4 text-indigo-500" />
                    <div class="grid gap-2">
                        <div class="text-white font-bold">
                            Security & Privacy
                        </div>
                        <div>Protect customer data</div>
                    </div>
                </li>

                <li class="flex">
                    <Lifebuoy className="h-8 mr-4 text-indigo-500" />
                    <div class="grid gap-2">
                        <div class="text-white font-bold">
                            Scalable infrastructure
                        </div>
                        <div>Ingest & query at any volume</div>
                    </div>
                </li>
            </ol>
        </div>
        <div>
            <div class="mb-8  font-bold font-mono tracking-wider">MORE</div>
            <ol class="grid gap-8">
                <li class="flex">
                    <Lifebuoy className="h-8 mr-4 text-indigo-500" />
                    <div class="grid gap-2">
                        <div class="text-white font-bold">
                            Integration Directory
                        </div>
                        <div>50+ connections to top tools</div>
                    </div>
                </li>
            </ol>
        </div>
    </div>
</div>
