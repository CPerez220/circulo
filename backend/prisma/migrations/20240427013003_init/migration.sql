/*
  Warnings:

  - Changed the type of `yourName` on the `Profile` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_yourName_fkey";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "yourName",
ADD COLUMN     "yourName" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_yourName_key" ON "Profile"("yourName");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_yourName_fkey" FOREIGN KEY ("yourName") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
