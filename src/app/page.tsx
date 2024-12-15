"use client";

import React from "react";
import { DefaultPageLayout } from "@/subframe/layouts/DefaultPageLayout";
import { TextField } from "@/subframe/components/TextField";
import { SidebarWithSections } from "@/subframe/components/SidebarWithSections";
import { IconButton } from "@/subframe/components/IconButton";
import * as SubframeCore from "@subframe/core";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import { ListRow } from "@/subframe/components/ListRow";

function HomeDashboardGridSections() {
  return (
    <DefaultPageLayout>
      <div className="flex h-full w-full flex-col items-start gap-4 bg-neutral-50 px-6 py-12 overflow-auto">
        <div className="flex w-full grow shrink-0 basis-0 flex-wrap items-start gap-6">
          <SidebarWithSections
            header={
              <TextField label="" helpText="" icon="FeatherSearch">
                <TextField.Input
                  placeholder="Search"
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
            }
            footer={
              <>
                <span className="grow shrink-0 basis-0 text-caption-bold font-caption-bold text-default-font">
                  Douglas
                </span>
                <IconButton
                  variant="brand-secondary"
                  icon="FeatherSlidersHorizontal"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </>
            }
          >
            <SidebarWithSections.NavItem icon="FeatherMail" selected={true}>
              My Documents
            </SidebarWithSections.NavItem>
            <SidebarWithSections.NavItem icon="FeatherUsers">
              Shared with me 
            </SidebarWithSections.NavItem>
            <SidebarWithSections.NavItem icon="FeatherTrash2">
              Trash
            </SidebarWithSections.NavItem>
          </SidebarWithSections>
          <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-6 self-stretch">
            <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
              <div className="flex w-full flex-col items-start gap-1 rounded-md bg-neutral-50 px-6 py-6">
                <div className="flex items-center gap-2">
                  <SubframeCore.Icon
                    className="text-body font-body text-default-font"
                    name="FeatherMail"
                  />
                  <span className="text-heading-2 font-heading-2 text-default-font">
                    My Documents
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-caption font-caption text-subtext-color">
                    Order by
                  </span>
                  <span className="text-caption font-caption text-default-font">
                    Name
                  </span>
                  <SubframeCore.Icon
                    className="text-body font-body text-default-font"
                    name="FeatherArrowDownWideNarrow"
                  />
                </div>
              </div>
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 px-6 py-4">
                <div className="flex items-center gap-2">
                  <SubframeCore.Icon
                    className="text-heading-2 font-heading-2 text-success-700"
                    name="FeatherCheckCircle"
                  />
                  <ListRow
                    className="h-auto w-144 flex-none"
                    image="https://res.cloudinary.com/subframe/image/upload/v1734057283/uploads/4312/tuqnncln1wii8mz1bpiu.png"
                    title="Property_Transfer_Deed.pdf"
                    subtitle="Today, 12:14 am"
                    actions={
                      <SubframeCore.DropdownMenu.Root>
                        <SubframeCore.DropdownMenu.Trigger asChild={true}>
                          <IconButton
                            size="small"
                            icon="FeatherMoreHorizontal"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                        </SubframeCore.DropdownMenu.Trigger>
                        <SubframeCore.DropdownMenu.Portal>
                          <SubframeCore.DropdownMenu.Content
                            side="bottom"
                            align="end"
                            sideOffset={4}
                            asChild={true}
                          >
                            <DropdownMenu>
                              <DropdownMenu.DropdownItem icon="FeatherDownloadCloud">
                                Download
                              </DropdownMenu.DropdownItem>
                              <DropdownMenu.DropdownItem icon="FeatherEdit2">
                                Rename
                              </DropdownMenu.DropdownItem>
                              <DropdownMenu.DropdownItem icon="FeatherTrash">
                                Delete
                              </DropdownMenu.DropdownItem>
                            </DropdownMenu>
                          </SubframeCore.DropdownMenu.Content>
                        </SubframeCore.DropdownMenu.Portal>
                      </SubframeCore.DropdownMenu.Root>
                    }
                  />
                </div>
                <div className="flex items-center gap-2">
                  <SubframeCore.Icon
                    className="text-heading-2 font-heading-2 text-success-700"
                    name="FeatherCheckCircle"
                  />
                  <ListRow
                    className="h-auto w-144 flex-none"
                    image="https://res.cloudinary.com/subframe/image/upload/v1734057283/uploads/4312/tuqnncln1wii8mz1bpiu.png"
                    title="Power_of_Attorney_Authorisation.pdf"
                    subtitle={"Yesterday, 7:45 pm\n"}
                    actions={
                      <SubframeCore.DropdownMenu.Root>
                        <SubframeCore.DropdownMenu.Trigger asChild={true}>
                          <IconButton
                            size="small"
                            icon="FeatherMoreHorizontal"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                        </SubframeCore.DropdownMenu.Trigger>
                        <SubframeCore.DropdownMenu.Portal>
                          <SubframeCore.DropdownMenu.Content
                            side="bottom"
                            align="end"
                            sideOffset={4}
                            asChild={true}
                          >
                            <DropdownMenu>
                              <DropdownMenu.DropdownItem icon="FeatherDownloadCloud">
                                Download
                              </DropdownMenu.DropdownItem>
                              <DropdownMenu.DropdownItem icon="FeatherEdit2">
                                Rename
                              </DropdownMenu.DropdownItem>
                              <DropdownMenu.DropdownItem icon="FeatherTrash">
                                Delete
                              </DropdownMenu.DropdownItem>
                            </DropdownMenu>
                          </SubframeCore.DropdownMenu.Content>
                        </SubframeCore.DropdownMenu.Portal>
                      </SubframeCore.DropdownMenu.Root>
                    }
                  />
                </div>
                <div className="flex items-center gap-2">
                  <SubframeCore.Icon
                    className="text-heading-2 font-heading-2 text-default-font"
                    name="FeatherCircleDashed"
                  />
                  <ListRow
                    className="h-auto w-144 flex-none"
                    image="https://res.cloudinary.com/subframe/image/upload/v1734057283/uploads/4312/tuqnncln1wii8mz1bpiu.png"
                    title={"Affidavit_of_Support.pdf\n"}
                    subtitle={"11 Dec 2024, 3:15 pm\n"}
                    actions={
                      <SubframeCore.DropdownMenu.Root>
                        <SubframeCore.DropdownMenu.Trigger asChild={true}>
                          <IconButton
                            size="small"
                            icon="FeatherMoreHorizontal"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                        </SubframeCore.DropdownMenu.Trigger>
                        <SubframeCore.DropdownMenu.Portal>
                          <SubframeCore.DropdownMenu.Content
                            side="bottom"
                            align="end"
                            sideOffset={4}
                            asChild={true}
                          >
                            <DropdownMenu>
                              <DropdownMenu.DropdownItem icon="FeatherDownloadCloud">
                                Download
                              </DropdownMenu.DropdownItem>
                              <DropdownMenu.DropdownItem icon="FeatherEdit2">
                                Rename
                              </DropdownMenu.DropdownItem>
                              <DropdownMenu.DropdownItem icon="FeatherTrash">
                                Delete
                              </DropdownMenu.DropdownItem>
                            </DropdownMenu>
                          </SubframeCore.DropdownMenu.Content>
                        </SubframeCore.DropdownMenu.Portal>
                      </SubframeCore.DropdownMenu.Root>
                    }
                  />
                </div>
                <div className="flex items-center gap-2">
                  <SubframeCore.Icon
                    className="text-heading-2 font-heading-2 text-success-700"
                    name="FeatherCheckCircle"
                  />
                  <ListRow
                    className="h-auto w-144 flex-none"
                    image="https://res.cloudinary.com/subframe/image/upload/v1734057283/uploads/4312/tuqnncln1wii8mz1bpiu.png"
                    title={"Mortgage_Agreement_Final.pdf\n"}
                    subtitle={"11 Dec 2024, 1:15 pm\n"}
                    actions={
                      <SubframeCore.DropdownMenu.Root>
                        <SubframeCore.DropdownMenu.Trigger asChild={true}>
                          <IconButton
                            size="small"
                            icon="FeatherMoreHorizontal"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                        </SubframeCore.DropdownMenu.Trigger>
                        <SubframeCore.DropdownMenu.Portal>
                          <SubframeCore.DropdownMenu.Content
                            side="bottom"
                            align="end"
                            sideOffset={4}
                            asChild={true}
                          >
                            <DropdownMenu>
                              <DropdownMenu.DropdownItem icon="FeatherDownloadCloud">
                                Download
                              </DropdownMenu.DropdownItem>
                              <DropdownMenu.DropdownItem icon="FeatherEdit2">
                                Rename
                              </DropdownMenu.DropdownItem>
                              <DropdownMenu.DropdownItem icon="FeatherTrash">
                                Delete
                              </DropdownMenu.DropdownItem>
                            </DropdownMenu>
                          </SubframeCore.DropdownMenu.Content>
                        </SubframeCore.DropdownMenu.Portal>
                      </SubframeCore.DropdownMenu.Root>
                    }
                  />
                </div>
                <div className="flex items-center gap-2">
                  <SubframeCore.Icon
                    className="text-heading-2 font-heading-2 text-default-font"
                    name="FeatherCircleDashed"
                  />
                  <ListRow
                    className="h-auto w-144 flex-none"
                    image="https://res.cloudinary.com/subframe/image/upload/v1734057283/uploads/4312/tuqnncln1wii8mz1bpiu.png"
                    title={"Real_Estate_Title_Transfer_Form.pdf\n"}
                    subtitle={"10 Dec 2024, 8:30 am\n"}
                    actions={
                      <SubframeCore.DropdownMenu.Root>
                        <SubframeCore.DropdownMenu.Trigger asChild={true}>
                          <IconButton
                            size="small"
                            icon="FeatherMoreHorizontal"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                        </SubframeCore.DropdownMenu.Trigger>
                        <SubframeCore.DropdownMenu.Portal>
                          <SubframeCore.DropdownMenu.Content
                            side="bottom"
                            align="end"
                            sideOffset={4}
                            asChild={true}
                          >
                            <DropdownMenu>
                              <DropdownMenu.DropdownItem icon="FeatherDownloadCloud">
                                Download
                              </DropdownMenu.DropdownItem>
                              <DropdownMenu.DropdownItem icon="FeatherEdit2">
                                Rename
                              </DropdownMenu.DropdownItem>
                              <DropdownMenu.DropdownItem icon="FeatherTrash">
                                Delete
                              </DropdownMenu.DropdownItem>
                            </DropdownMenu>
                          </SubframeCore.DropdownMenu.Content>
                        </SubframeCore.DropdownMenu.Portal>
                      </SubframeCore.DropdownMenu.Root>
                    }
                  />
                </div>
                <div className="flex items-center gap-2">
                  <SubframeCore.Icon
                    className="text-heading-2 font-heading-2 text-success-700"
                    name="FeatherCheckCircle"
                  />
                  <ListRow
                    className="h-auto w-144 flex-none"
                    image="https://res.cloudinary.com/subframe/image/upload/v1734057283/uploads/4312/tuqnncln1wii8mz1bpiu.png"
                    title={"Loan_Closing_Documents.pdf\n\n\n\n\n\n"}
                    subtitle={"09 Dec 2024, 5:50 pm\n"}
                    actions={
                      <SubframeCore.DropdownMenu.Root>
                        <SubframeCore.DropdownMenu.Trigger asChild={true}>
                          <IconButton
                            size="small"
                            icon="FeatherMoreHorizontal"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                        </SubframeCore.DropdownMenu.Trigger>
                        <SubframeCore.DropdownMenu.Portal>
                          <SubframeCore.DropdownMenu.Content
                            side="bottom"
                            align="end"
                            sideOffset={4}
                            asChild={true}
                          >
                            <DropdownMenu>
                              <DropdownMenu.DropdownItem icon="FeatherDownloadCloud">
                                Download
                              </DropdownMenu.DropdownItem>
                              <DropdownMenu.DropdownItem icon="FeatherEdit2">
                                Rename
                              </DropdownMenu.DropdownItem>
                              <DropdownMenu.DropdownItem icon="FeatherTrash">
                                Delete
                              </DropdownMenu.DropdownItem>
                            </DropdownMenu>
                          </SubframeCore.DropdownMenu.Content>
                        </SubframeCore.DropdownMenu.Portal>
                      </SubframeCore.DropdownMenu.Root>
                    }
                  />
                </div>
                <div className="flex items-center gap-2">
                  <SubframeCore.Icon
                    className="text-heading-2 font-heading-2 text-default-font"
                    name="FeatherCircleDashed"
                  />
                  <ListRow
                    className="h-auto w-144 flex-none"
                    image="https://res.cloudinary.com/subframe/image/upload/v1734057283/uploads/4312/tuqnncln1wii8mz1bpiu.png"
                    title={"Affidavit_of_Identity_Verification.pdf\n"}
                    subtitle={"08 Dec 2024, 12:10 pm\n"}
                    actions={
                      <SubframeCore.DropdownMenu.Root>
                        <SubframeCore.DropdownMenu.Trigger asChild={true}>
                          <IconButton
                            size="small"
                            icon="FeatherMoreHorizontal"
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          />
                        </SubframeCore.DropdownMenu.Trigger>
                        <SubframeCore.DropdownMenu.Portal>
                          <SubframeCore.DropdownMenu.Content
                            side="bottom"
                            align="end"
                            sideOffset={4}
                            asChild={true}
                          >
                            <DropdownMenu>
                              <DropdownMenu.DropdownItem icon="FeatherDownloadCloud">
                                Download
                              </DropdownMenu.DropdownItem>
                              <DropdownMenu.DropdownItem icon="FeatherEdit2">
                                Rename
                              </DropdownMenu.DropdownItem>
                              <DropdownMenu.DropdownItem icon="FeatherTrash">
                                Delete
                              </DropdownMenu.DropdownItem>
                            </DropdownMenu>
                          </SubframeCore.DropdownMenu.Content>
                        </SubframeCore.DropdownMenu.Portal>
                      </SubframeCore.DropdownMenu.Root>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default HomeDashboardGridSections;